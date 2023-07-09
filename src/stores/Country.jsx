import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class CountryStore
 * @classdesc CountryStore class
 * @description Creates an instance of CountryStore
 * @property {[object]} countrys - The countrys
 * @property {object} country - The country object
 * @method {[object]} getCountrys - Returns the countrys
 * @method {object} getCountry - Returns the country object
 * @method {void} setCountrys - Sets the countrys
 * @method {void} setCountry - Sets the country
 * @method {void} removeCountrys - Removes the countrys
 * @method {void} removeCountry - Removes the country
 * @method {void} getAllCountrys - Gets the countrys
 * @method {void} getCountryById - Gets a country by id
 **/
class CountryStore {
  // Initial values
  countrys = null
  country = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the countrys
   **/
  getCountrys = () => {
    return this.countrys
  }

  /**
   * @returns {object}
   * @description Returns the country object
   **/
  getCountry = () => {
    return this.country
  }

  // Setters

  /**
   * @param {[object]} countrys
   * @returns {void}
   * @description Sets the countrys
   **/
  setCountrys(countrys) {
    this.countrys = countrys
  }

  /**
   * @param {object} country
   * @returns {void}
   * @description Sets the country
   **/
  setCountry(country) {
    this.country = country
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the countrys
   **/
  removeCountrys() {
    this.countrys = null
  }

  /**
   * @returns {void}
   * @description Removes the country
   **/
  removeCountry() {
    this.country = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the countrys
   * @async
   * @method
   **/
  async getAllCountrys() {}

  /**
   * @param {object} country
   * @returns {void}
   * @description Creates a country
   * @async
   * @method
   **/
  async getCountryById(id) {}
}

const countryStore = new CountryStore()
makeInspectable(countryStore)

export default countryStore
