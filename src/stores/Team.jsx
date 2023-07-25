import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

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
  async getAllTeams(userId) {
    try {
      axios.get(api_url + '/team/' + userId).then((res) => {
        this.teams = res.data
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
      axios.get(api_url + '/team/' + id).then((res) => {
        this.setTeam(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const teamStore = new TeamStore()
makeInspectable(teamStore)

export default teamStore
