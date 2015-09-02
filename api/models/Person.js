/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    first_name: {
      type: 'string',
      required: true
      // minLength: 3
    },
    last_name: {
      type: 'string',
      required: true
    },
    note: {
      type: 'string',
      required: false
    },

    contacts: {
      collection:'Contact',
      via: 'person'
    },
    category: {
      collection: 'Category',
      via: 'persons'
    }
  }
};

