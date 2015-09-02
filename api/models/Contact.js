/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true
      // trim: true,
      // unique: true,
      // required: 'Email address is required',
      // validate: [validateEmail, 'Please fill a valid email address'],
      // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    street_address: {
      type: 'string',
      required: false
      // minLength: 8
    },
    city: {
      type: 'string',
      required: true
      // minLength: 7
    },
    state: {
      type: 'string',
      required: true
      // minLength: 2
    },
    zip: {
      type: 'integer',
      required: true
    },
    phone:{
      type: 'string',
      required: false
    },

    person: {
      model: 'Person',
      defaultsTo: null
    }

  }
};

