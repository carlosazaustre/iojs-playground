'use strict'

module.exports = function (options) {
  options = options || {}

  return {
    save: save,
    list: list
  }
  
  function save (message, callback) {
    callback()
  }

  function list (callback) {
    callback()
  }

}
