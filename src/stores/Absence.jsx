import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class AbsenceStore
 * @classdesc AbsenceStore class
 * @description Creates an instance of AbsenceStore
 * @property {[object]} absences - The absences
 * @property {object} absence - The absence object
 * @method {[object]} getAbsences - Returns the absences
 * @method {object} getAbsence - Returns the absence object
 * @method {void} setAbsences - Sets the absences
 * @method {void} setAbsence - Sets the absence
 * @method {void} removeAbsences - Removes the absences
 * @method {void} removeAbsence - Removes the absence
 * @method {void} getAllAbsences - Gets the absences
 * @method {void} getAbsenceById - Gets a absence by id
 **/
class AbsenceStore {
  // Initial values
  absences = null
  absence = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the absences
   **/
  getAbsences = () => {
    return this.absences
  }

  /**
   * @returns {object}
   * @description Returns the absence object
   **/
  getAbsence = () => {
    return this.absence
  }

  // Setters

  /**
   * @param {[object]} absences
   * @returns {void}
   * @description Sets the absences
   **/
  setAbsences(absences) {
    this.absences = absences
  }

  /**
   * @param {object} absence
   * @returns {void}
   * @description Sets the absence
   **/
  setAbsence(absence) {
    this.absence = absence
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the absences
   **/
  removeAbsences() {
    this.absences = null
  }

  /**
   * @returns {void}
   * @description Removes the absence
   **/
  removeAbsence() {
    this.absence = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the absences
   * @async
   * @method
   **/
  async getAllAbsences() {}

  /**
   * @param {object} absence
   * @returns {void}
   * @description Creates a absence
   * @async
   * @method
   **/
  async getAbsenceById(id) {}
}

const absenceStore = new AbsenceStore()
makeInspectable(absenceStore)

export default absenceStore
