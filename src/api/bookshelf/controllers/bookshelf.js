'use strict';

/**
 * bookshelf controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bookshelf.bookshelf');
