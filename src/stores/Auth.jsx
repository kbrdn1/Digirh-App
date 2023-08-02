import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class AuthStore
 * @classdesc AuthStore class
 * @description Creates an instance of AuthStore
 * @property {string} jwt - The jwt
 * @property {object} user - The user object
 * @method {string} getJwt - Returns the jwt
 * @method {object} getUser - Returns the user object
 * @method {void} setJwt - Sets the jwt and saves it to localStorage
 * @method {void} setUser - Sets the user and saves it to localStorage
 * @method {void} removeJwt - Removes the jwt from the store and localStorage
 * @method {void} removeUser - Removes the user from the store and localStorage
 * @method {void} verifyToken - Verifies the jwt
 * @method {void} login - Logs the user in
 * @method {void} logout - Logs the user out
 **/
class AuthStore {
  // Initial values
  jwt = null
  user = null

  // Constructor
  constructor() {
    this.jwt = localStorage.getItem('jwt')
    this.user = JSON.parse(localStorage.getItem('user'))
    this.verifyToken()
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {string}
   * @description Returns the jwt
   **/
  getJwt = () => {
    return this.jwt
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
   * @param {string} jwt
   * @returns {void}
   * @description Sets the jwt and saves it to localStorage
   **/
  setJwt(jwt) {
    this.jwt = jwt
    localStorage.setItem('jwt', jwt)
  }

  /**
   * @param {object} user
   * @returns {void}
   * @description Sets the user and saves it to localStorage
   **/
  setUser(user) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the jwt from the store and localStorage
   **/
  removeJwt = () => {
    this.jwt = null
    localStorage.removeItem('jwt')
  }

  /**
   * @returns {void}
   * @description Removes the user from the store and localStorage
   * */
  removeUser = () => {
    this.user = null
    localStorage.removeItem('user')
  }

  // Methods

  /**
   * @returns {void}
   * @description Verifies the jwt
   **/
  verifyToken = async () => {
    const token = this.getJwt()

    if (!token) {
      this.removeJwt()
      this.removeUser()
      return
    }
    await axios
      .post(
        `${api_url}/token/verify`,
        { jwt: token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.removeJwt()
          this.removeUser()
        }
      })
  }

  /**
   * @param {object} data
   * @returns {void}
   * @description Logs the user in
   **/
  async login(data) {
    await axios
      .post(`${api_url}/login`, data)
      .then((res) => {
        this.setJwt(res.data.jwt)
        this.setUser(res.data.user)
        return res.data.success
      })
      .catch((err) => {
        console.log(err)
      })
  }

  /**
   * @returns {void}
   * @description Logs the user out
   **/
  logout() {
    this.removeJwt()
    this.removeUser()
  }
}

const authStore = new AuthStore()
makeInspectable(authStore)

export default authStore
