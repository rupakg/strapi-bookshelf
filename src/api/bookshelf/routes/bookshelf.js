'use strict';

/**
 * bookshelf router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bookshelf.bookshelf');
