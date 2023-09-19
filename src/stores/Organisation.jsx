import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable, toJS } from 'mobx'
import axios from 'axios'
import authStore from './Auth'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class OrganisationStore
 * @classdesc OrganisationStore class
 * @description Creates an instance of OrganisationStore
 * @property {[object]} organisations - The organisations
 * @property {object} organisation - The organisation object
 * @method {[object]} getOrganisations - Returns the organisations
 * @method {object} getOrganisation - Returns the organisation object
 * @method {void} setOrganisations - Sets the organisations
 * @method {void} setOrganisation - Sets the organisation
 * @method {void} removeOrganisations - Removes the organisations
 * @method {void} removeOrganisation - Removes the organisation
 * @method {void} getAllOrganisations - Gets the organisations
 * @method {void} getOrganisationById - Gets a organisation by id
 **/
class OrganisationStore {
  // Initial values
  organisations = null
  organisation = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the organisations
   **/
  getOrganisations = () => {
    return this.organisations
  }

  /**
   * @returns {object}
   * @description Returns the organisation object
   **/
  getOrganisation = () => {
    return toJS(this.organisation)
  }

  // Setters

  /**
   * @param {[object]} organisations
   * @returns {void}
   * @description Sets the organisations
   **/
  setOrganisations(organisations) {
    this.organisations = organisations
  }

  /**
   * @param {object} organisation
   * @returns {void}
   * @description Sets the organisation
   **/
  setOrganisation(organisation) {
    this.organisation = organisation
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the organisations
   **/
  removeOrganisations() {
    this.organisations = null
  }

  /**
   * @returns {void}
   * @description Removes the organisation
   **/
  removeOrganisation() {
    this.organisation = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the organisations
   * @async
   * @method
   **/
  async getAllOrganisations() {}

  /**
   * @param {object} organisation
   * @returns {void}
   * @description Creates a organisation
   * @async
   * @method
   **/
  async getOrganisationByUserId(id) {
    const token = authStore.getJwt()

    await axios
      .get(api_url + '/organisation/get/' + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setOrganisation(res.data)
        return res.data.id
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const organisationStore = new OrganisationStore()
makeInspectable(organisationStore)

export default organisationStore
