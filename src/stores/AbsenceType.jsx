import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class AbsenceTypeStore
 * @classdesc AbsenceTypeStore class
 * @description Creates an instance of AbsenceTypeStore
 * @property {[object]} absenceTypes - The absenceTypes
 * @property {object} absenceType - The absenceType object
 * @method {[object]} getAbsenceTypes - Returns the absenceTypes
 * @method {object} getAbsenceType - Returns the absenceType object
 * @method {void} setAbsenceTypes - Sets the absenceTypes
 * @method {void} setAbsenceType - Sets the absenceType
 * @method {void} removeAbsenceTypes - Removes the absenceTypes
 * @method {void} removeAbsenceType - Removes the absenceType
 * @method {void} getAllAbsenceTypes - Gets the absenceTypes
 * @method {void} getAbsenceTypeById - Gets a absenceType by id
 **/
class AbsenceTypeStore {
  // Initial values
  absenceTypes = null
  absenceType = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the absenceTypes
   **/
  getAbsenceTypes = () => {
    return this.absenceTypes
  }

  /**
   * @returns {object}
   * @description Returns the absenceType object
   **/
  getAbsenceType = () => {
    return this.absenceType
  }

  // Setters

  /**
   * @param {[object]} absenceTypes
   * @returns {void}
   * @description Sets the absenceTypes
   **/
  setAbsenceTypes(absenceTypes) {
    this.absenceTypes = absenceTypes
  }

  /**
   * @param {object} absenceType
   * @returns {void}
   * @description Sets the absenceType
   **/
  setAbsenceType(absenceType) {
    this.absenceType = absenceType
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the absenceTypes
   **/
  removeAbsenceTypes() {
    this.absenceTypes = null
  }

  /**
   * @returns {void}
   * @description Removes the absenceType
   **/
  removeAbsenceType() {
    this.absenceType = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the absenceTypes
   * @async
   * @method
   **/
  async getAllAbsenceTypes() {}

  /**
   * @param {object} absenceType
   * @returns {void}
   * @description Creates a absenceType
   * @async
   * @method
   **/
  async getAbsenceTypeById(id) {}
}

const absenceTypeStore = new AbsenceTypeStore()
makeInspectable(absenceTypeStore)

export default absenceTypeStore
