import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import axios from 'axios'

// API URL
const api_url = import.meta.env.VITE_API_URL

/**
 * @class NotificationStore
 * @classdesc NotificationStore class
 * @description Creates an instance of NotificationStore
 * @property {[object]} notifications - The notifications
 * @property {object} notification - The notification object
 * @method {[object]} getNotifications - Returns the notifications
 * @method {object} getNotification - Returns the notification object
 * @method {void} setNotifications - Sets the notifications
 * @method {void} setNotification - Sets the notification
 * @method {void} removeNotifications - Removes the notifications
 * @method {void} removeNotification - Removes the notification
 * @method {void} getAllNotifications - Gets the notifications
 * @method {void} getNotificationById - Gets a notification by id
 **/
class NotificationStore {
  // Initial values
  notifications = null
  notification = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {[object]}
   * @description Returns the notifications
   **/
  getNotifications = () => {
    return this.notifications
  }

  /**
   * @returns {object}
   * @description Returns the notification object
   **/
  getNotification = () => {
    return this.notification
  }

  // Setters

  /**
   * @param {[object]} notifications
   * @returns {void}
   * @description Sets the notifications
   **/
  setNotifications(notifications) {
    this.notifications = notifications
  }

  /**
   * @param {object} notification
   * @returns {void}
   * @description Sets the notification
   **/
  setNotification(notification) {
    this.notification = notification
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the notifications
   **/
  removeNotifications() {
    this.notifications = null
  }

  /**
   * @returns {void}
   * @description Removes the notification
   **/
  removeNotification() {
    this.notification = null
  }

  // Methods

  /**
   * @returns {void}
   * @description Gets the notifications
   * @async
   * @method
   **/
  async getAllNotifications() {}

  /**
   * @param {object} notification
   * @returns {void}
   * @description Creates a notification
   * @async
   * @method
   **/
  async getNotificationById(id) {}
}

const notificationStore = new NotificationStore()
makeInspectable(notificationStore)

export default notificationStore
