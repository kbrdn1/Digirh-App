import makeInspectable from 'mobx-devtools-mst'
import { makeAutoObservable } from 'mobx'
import { toJS } from 'mobx'

/**
 * @class toastStore
 * @classdesc toastStore class
 * @description Creates an instance of toastStore
 * @property {[object]} toasts - The toasts
 * @property {object} toast - The toast object
 * @method {[object]} gettoasts - Returns the toasts
 * @method {object} gettoast - Returns the toast object
 * @method {void} settoasts - Sets the toasts
 * @method {void} settoast - Sets the toast
 * @method {void} removetoasts - Removes the toasts
 * @method {void} removetoast - Removes the toast
 * @method {void} getAlltoasts - Gets the toasts
 * @method {void} gettoastById - Gets a toast by id
 **/
class ToastStore {
  // Initial values
  toast = null

  // Constructor
  constructor() {
    makeAutoObservable(this)
  }

  // Getters

  /**
   * @returns {object}
   * @description Returns the toast object
   **/
  getToast = () => {
    return this.toast
  }

  // Setters

  /**
   * @param {object} toast
   * @returns {void}
   * @description Sets the toast
   **/
  setToast(toast) {
    this.toast = toast
  }

  // Removers

  /**
   * @returns {void}
   * @description Removes the toast
   **/
  removeToast() {
    this.toast = null
  }

  // Methods

  addToast(message, type) {
    const toast = {
      type: type ? 'success' : 'error',
      message: message,
    }
    this.setToast(toast)
  }
}

const toastStore = new ToastStore()
makeInspectable(toastStore)

export default toastStore
