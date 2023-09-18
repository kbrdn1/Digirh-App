import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import authStores from './Auth'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class TeamStore
 * @classdesc TeamStore class
 * @description Creates an instance of TeamStore
 * @property {[object]} teams - The teams
 * @property {object} team - The team object
 * @method {[object]} getTeams - Returns the teams
 * @method {object} getTeam - Returns the team object
 * @method {void} setTeams - Sets the teams
 * @method {void} setTeam - Sets the team
 * @method {void} removeTeams - Removes the teams
 * @method {void} removeTeam - Removes the team
 * @method {void} getAllTeams - Gets the teams
 * @method {void} getTeamById - Gets a team by id
 **/
class TeamStore {
  // Initial values
  teams = null
  team = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the teams
   **/
  getTeams = () => {
    return this.teams
  }

  /**
   * @returns {object}
   * @description Returns the team object
   **/
  getTeam = () => {
    return this.team
  }

  // Setters

  /**
   * @param {[object]} teams
   * @returns {void}
   * @description Sets the teams
   **/
  setTeams(teams) {
    this.teams = teams
  }

  /**
   * @param {object} team
   * @returns {void}
   * @description Sets the team
   **/
  setTeam(team) {
    this.team = team
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the teams
   **/
  removeTeams() {
    this.teams = null
  }

  /**
   * @returns {void}
   * @description Removes the team
   **/
  removeTeam() {
    this.team = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the teams
   * @async
   * @method
   **/
  async getAllTeams() {
    try {
      axios.get(api_url + '/team').then((res) => {
        this.setTeams(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * @param {object} Team
   * @returns {void}
   * @description Creates a team
   * @async
   * @method
   **/
  async getTeamById(id) {
    try {
      axios.get(`${api_url}/team/${id}`).then((res) => {
        this.setTeam(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTeam(id) {
    const token = authStores.getJwt()
    try {
      await axios
        .delete(`${api_url}/team/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          this.getAllTeams()
        })
    } catch (error) {
      console.log(error)
    }
  }

  async createTeam(data) {
    const token = authStores.getJwt()

    return await axios
      .post(`${api_url}/team/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setTeam(res.data)
        return { success: true, message: "L'équipe a bien été créée" }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.response.data.message || error.response.data.error,
        }
      })
  }

  remapTeams(id) {
    this.teams = this.teams.map((team) => {
      if (team.id === id) {
        return this.team
      }
      return team
    })
  }

  async updateTeam(data, id) {
    const token = authStores.getJwt()
    return await axios
      .patch(`${api_url}/team/edit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setTeam(res.data)
        this.teams ? this.remapTeams(res.data.id) : null
        return { success: true, message: "L'équipe a bien été modifiée" }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.response.data.message || error.response.data.error,
        }
      })
  }

  addUserInTeam = (user) => {
    this.team.users.push(user)
  }

  async addCollaborator(user, teamId) {
    return await axios
      .patch(`${api_url}/team/add-user/${teamId}`, { user: user.id })
      .then(() => {
        this.addUserInTeam(user)
        return { success: true, message: "L'utilisateur a bien été ajouté" }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.response.data.message || error.response.data.error,
        }
      })
  }

  async getActiveUsers() {
    return this.team.users.filter((user) => user.isActive)
  }

  async getInactiveUsers() {
    return this.team.users.filter(
      (user) =>
        !user.isActive ||
        user.isActive === 'Absent' ||
        user.isActive === 'En congés'
    )
  }

  async getActiveTeams() {
    return this.teams.filter((team) => team.isActive)
  }

  async getInactiveTeams() {
    return this.teams.filter((team) => !team.isActive)
  }

  async searchTeamsByName(name) {
    const token = authStores.getJwt()
    return await axios
      .get(`${api_url}/team/search/${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return {
          success: 'Des équipes ont été trouvées',
          data: res.data,
        }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.response.data.message || error.response.data.error,
        }
      })
  }
}

const teamStore = new TeamStore()
makeInspectable(teamStore)

export default teamStore
