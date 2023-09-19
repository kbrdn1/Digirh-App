import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class TypeContratStore
 * @classdesc TypeContratStore class
 * @description Creates an instance of TypeContratStore
 * @property {[object]} typeContrats - The typeContrats
 * @property {object} typeContrat - The typeContrat object
 * @method {[object]} getTypeContrats - Returns the typeContrats
 * @method {object} getTypeContrat - Returns the typeContrat object
 * @method {void} setTypeContrats - Sets the typeContrats
 * @method {void} setTypeContrat - Sets the typeContrat
 * @method {void} removeTypeContrats - Removes the typeContrats
 * @method {void} removeTypeContrat - Removes the typeContrat
 * @method {void} getAllTypeContrats - Gets the typeContrats
 * @method {void} getTypeContratById - Gets a typeContrat by id
 **/
class TypeContratStore {
  // Initial values
  typeContrats = null
  typeContrat = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the typeContrats
   **/
  getTypeContrats = () => {
    return this.typeContrats
  }

  /**
   * @returns {object}
   * @description Returns the typeContrat object
   **/
  getTypeContrat = () => {
    return this.typeContrat
  }

  // Setters

  /**
   * @param {[object]} typeContrats
   * @returns {void}
   * @description Sets the typeContrats
   **/
  setTypeContrats(typeContrats) {
    this.typeContrats = typeContrats
  }

  /**
   * @param {object} typeContrat
   * @returns {void}
   * @description Sets the typeContrat
   **/
  setTypeContrat(typeContrat) {
    this.typeContrat = typeContrat
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the typeContrats
   **/
  removeTypeContrats() {
    this.typeContrats = null
  }

  /**
   * @returns {void}
   * @description Removes the typeContrat
   **/
  removeTypeContrat() {
    this.typeContrat = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the typeContrats
   * @async
   * @method
   **/
  async getAllTypeContrats() {
    return await axios
      .get(`${api_url}/type_contrat`)
      .then((res) => {
        this.setTypeContrats(res.data)
        return {
          success: true,
          data: res.data,
          message: 'Types de contrats récupérés avec succès',
        }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.response.data.message || error.response.data.error,
        }
      })
  }

  /**
   * @param {object} typeContrat
   * @returns {void}
   * @description Creates a typeContrat
   * @async
   * @method
   **/
  async getTypeContratById(id) {}
}

const typeContratStore = new TypeContratStore()
makeInspectable(typeContratStore)

export default typeContratStore
