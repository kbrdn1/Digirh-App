import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class NonWorkingDayStore
 * @classdesc NonWorkingDayStore class
 * @description Creates an instance of NonWorkingDayStore
 * @property {[object]} nonWorkingDays - The nonWorkingDays
 * @property {object} nonWorkingDay - The nonWorkingDay object
 * @method {[object]} getNonWorkingDays - Returns the nonWorkingDays
 * @method {object} getNonWorkingDay - Returns the nonWorkingDay object
 * @method {void} setNonWorkingDays - Sets the nonWorkingDays
 * @method {void} setNonWorkingDay - Sets the nonWorkingDay
 * @method {void} removeNonWorkingDays - Removes the nonWorkingDays
 * @method {void} removeNonWorkingDay - Removes the nonWorkingDay
 * @method {void} getAllNonWorkingDays - Gets the nonWorkingDays
 * @method {void} getNonWorkingDayById - Gets a nonWorkingDay by id
 **/
class NonWorkingDayStore {
  // Initial values
  nonWorkingDays = null
  nonWorkingDay = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the nonWorkingDays
   **/
  getNonWorkingDays = () => {
    return this.nonWorkingDays
  }

  /**
   * @returns {object}
   * @description Returns the nonWorkingDay object
   **/
  getNonWorkingDay = () => {
    return this.nonWorkingDay
  }

  // Setters

  /**
   * @param {[object]} nonWorkingDays
   * @returns {void}
   * @description Sets the nonWorkingDays
   **/
  setNonWorkingDays(nonWorkingDays) {
    this.nonWorkingDays = nonWorkingDays
  }

  /**
   * @param {object} nonWorkingDay
   * @returns {void}
   * @description Sets the nonWorkingDay
   **/
  setNonWorkingDay(nonWorkingDay) {
    this.nonWorkingDay = nonWorkingDay
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the nonWorkingDays
   **/
  removeNonWorkingDays() {
    this.nonWorkingDays = null
  }

  /**
   * @returns {void}
   * @description Removes the nonWorkingDay
   **/
  removeNonWorkingDay() {
    this.nonWorkingDay = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the nonWorkingDays
   * @async
   * @method
   **/
  async getAllNonWorkingDays() {}

  /**
   * @param {object} nonWorkingDay
   * @returns {void}
   * @description Creates a nonWorkingDay
   * @async
   * @method
   **/
  async getNonWorkingDayById(id) {}
}

const nonWorkingDayStore = new NonWorkingDayStore()
makeInspectable(nonWorkingDayStore)

export default nonWorkingDayStore
