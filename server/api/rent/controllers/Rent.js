'use strict';

/**
 * Rent.js controller
 *
 * @description: A set of functions called "actions" for managing `Rent`.
 */

module.exports = {

  /**
   * Retrieve rent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.rent.search(ctx.query);
    } else {
      return strapi.services.rent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a rent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.rent.fetch(ctx.params);
  },

  /**
   * Count rent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rent.count(ctx.query);
  },

  /**
   * Create a/an rent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rent.add(ctx.request.body);
  },

  /**
   * Update a/an rent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rent.remove(ctx.params);
  }
};
