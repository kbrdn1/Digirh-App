import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class TripStore
 * @classdesc TripStore class
 * @description Creates an instance of TripStore
 * @property {[object]} trips - The trips
 * @property {object} trip - The trip object
 * @method {[object]} getTrips - Returns the trips
 * @method {object} getTrip - Returns the trip object
 * @method {void} setTrips - Sets the trips
 * @method {void} setTrip - Sets the trip
 * @method {void} removeTrips - Removes the trips
 * @method {void} removeTrip - Removes the trip
 * @method {void} getAllTrips - Gets the trips
 * @method {void} getTripById - Gets a trip by id
 **/
class TripStore {
  // Initial values
  trips = null
  trip = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the trips
   **/
  getTrips = () => {
    return this.trips
  }

  /**
   * @returns {object}
   * @description Returns the trip object
   **/
  getTrip = () => {
    return this.trip
  }

  // Setters

  /**
   * @param {[object]} trips
   * @returns {void}
   * @description Sets the trips
   **/
  setTrips(trips) {
    this.trips = trips
  }

  /**
   * @param {object} trip
   * @returns {void}
   * @description Sets the trip
   **/
  setTrip(trip) {
    this.trip = trip
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the trips
   **/
  removeTrips() {
    this.trips = null
  }

  /**
   * @returns {void}
   * @description Removes the trip
   **/
  removeTrip() {
    this.trip = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the trips
   * @async
   * @method
   **/
  async getAllTrips() {}

  /**
   * @param {object} trip
   * @returns {void}
   * @description Creates a trip
   * @async
   * @method
   **/
  async getTripById(id) {}
}

const tripStore = new TripStore()
makeInspectable(tripStore)

export default tripStore
