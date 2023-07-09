import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class StatutStore
 * @classdesc StatutStore class
 * @description Creates an instance of StatutStore
 * @property {[object]} statuts - The statuts
 * @property {object} statut - The statut object
 * @method {[object]} getStatuts - Returns the statuts
 * @method {object} getStatut - Returns the statut object
 * @method {void} setStatuts - Sets the statuts
 * @method {void} setStatut - Sets the statut
 * @method {void} removeStatuts - Removes the statuts
 * @method {void} removeStatut - Removes the statut
 * @method {void} getAllStatuts - Gets the statuts
 * @method {void} getStatutById - Gets a statut by id
 **/
class StatutStore {
  // Initial values
  statuts = null
  statut = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the statuts
   **/
  getStatuts = () => {
    return this.statuts
  }

  /**
   * @returns {object}
   * @description Returns the statut object
   **/
  getStatut = () => {
    return this.statut
  }

  // Setters

  /**
   * @param {[object]} statuts
   * @returns {void}
   * @description Sets the statuts
   **/
  setStatuts(statuts) {
    this.statuts = statuts
  }

  /**
   * @param {object} statut
   * @returns {void}
   * @description Sets the statut
   **/
  setStatut(statut) {
    this.statut = statut
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the statuts
   **/
  removeStatuts() {
    this.statuts = null
  }

  /**
   * @returns {void}
   * @description Removes the statut
   **/
  removeStatut() {
    this.statut = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the statuts
   * @async
   * @method
   **/
  async getAllStatuts() {}

  /**
   * @param {object} statut
   * @returns {void}
   * @description Creates a statut
   * @async
   * @method
   **/
  async getStatutById(id) {}
}

const statutStore = new StatutStore()
makeInspectable(statutStore)

export default statutStore
