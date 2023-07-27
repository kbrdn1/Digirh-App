import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import authStore from './Auth'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class UserStore
 * @classdesc UserStore class
 * @description Creates an instance of UserStore
 * @property {[object]} users - The users
 * @property {object} user - The user object
 * @method {[object]} getUsers - Returns the users
 * @method {object} getUser - Returns the user object
 * @method {void} setUsers - Sets the users
 * @method {void} setUser - Sets the user
 * @method {void} removeUsers - Removes the users
 * @method {void} removeUser - Removes the user
 * @method {void} getAllUsers - Gets the users
 * @method {void} getUserById - Gets a user by id
 **/
class UserStore {
  // Initial values
  users = null
  user = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the users
   **/
  getUsers = () => {
    return this.users
  }

  /**
   * @returns {object}
   * @description Returns the user object
   **/
  getUser = () => {
    return this.user
  }

  // Setters

  /**
   * @param {[object]} users
   * @returns {void}
   * @description Sets the users
   **/
  setUsers(users) {
    this.users = users
  }

  /**
   * @param {object} user
   * @returns {void}
   * @description Sets the user
   **/
  setUser(user) {
    this.user = user
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the users
   **/
  removeUsers() {
    this.users = null
  }

  /**
   * @returns {void}
   * @description Removes the user
   **/
  removeUser() {
    this.user = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the users
   * @async
   * @method
   **/
  async getAllUsers() {}

  /**
   * @param {object} user
   * @returns {void}
   * @description Creates a user
   * @async
   * @method
   **/
  async getUserById(id) {}

  /**
   * @param {object} data
   * @returns {void}
   * @description Updates a user profile
   * @async
   * @method
   * */
  async updateUserProfile(id, data) {
    const token = authStore.getJwt()

    await axios
      .patch(`${api_url}/user/edit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const currentUser = authStore.getUser()
        const userUpdated = {
          ...currentUser,
          name: res.data.name,
          firstname: res.data.firstname,
          email: res.data.email,
          phone: res.data.phone,
        }
        this.setUser(userUpdated)
        authStore.setUser(userUpdated)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const userStore = new UserStore()
makeInspectable(userStore)

export default userStore
