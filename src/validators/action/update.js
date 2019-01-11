const express = require('express');
const actionDb = require('../../db/action.js');
const ValidationError = require('../validationError'); 

module.exports = {
	description: ({description}) => {
    	if (description === undefined || description === '' || typeof description != "string" || description.length > 128 ) {
      		throw new ValidationError('Action text must contain a valid description.');
      	}
      	return true;
	},
	notes: ({notes}) => {
    	if (notes === undefined || notes === '' || typeof notes != "string") {
      		throw new ValidationError('Action text must contain a valid description.');
      	}
      	return true;
	},
	completed: ({completed}) => {
    if (completed != undefined && typeof completed != "boolean") {
      throw new ValidationError('Project completed invlaid.');
    }
    return true;
  }
};