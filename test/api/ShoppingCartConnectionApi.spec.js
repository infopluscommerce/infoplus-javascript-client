/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.ShoppingCartConnectionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ShoppingCartConnectionApi', function() {
    describe('addShoppingCartConnection', function() {
      it('should call addShoppingCartConnection successfully', function(done) {
        //uncomment below and update the code to test addShoppingCartConnection
        //instance.addShoppingCartConnection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addShoppingCartConnectionAudit', function() {
      it('should call addShoppingCartConnectionAudit successfully', function(done) {
        //uncomment below and update the code to test addShoppingCartConnectionAudit
        //instance.addShoppingCartConnectionAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addShoppingCartConnectionTag', function() {
      it('should call addShoppingCartConnectionTag successfully', function(done) {
        //uncomment below and update the code to test addShoppingCartConnectionTag
        //instance.addShoppingCartConnectionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteShoppingCartConnection', function() {
      it('should call deleteShoppingCartConnection successfully', function(done) {
        //uncomment below and update the code to test deleteShoppingCartConnection
        //instance.deleteShoppingCartConnection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteShoppingCartConnectionTag', function() {
      it('should call deleteShoppingCartConnectionTag successfully', function(done) {
        //uncomment below and update the code to test deleteShoppingCartConnectionTag
        //instance.deleteShoppingCartConnectionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateShoppingCartConnectionById', function() {
      it('should call getDuplicateShoppingCartConnectionById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateShoppingCartConnectionById
        //instance.getDuplicateShoppingCartConnectionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShoppingCartConnectionByFilter', function() {
      it('should call getShoppingCartConnectionByFilter successfully', function(done) {
        //uncomment below and update the code to test getShoppingCartConnectionByFilter
        //instance.getShoppingCartConnectionByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShoppingCartConnectionById', function() {
      it('should call getShoppingCartConnectionById successfully', function(done) {
        //uncomment below and update the code to test getShoppingCartConnectionById
        //instance.getShoppingCartConnectionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShoppingCartConnectionTags', function() {
      it('should call getShoppingCartConnectionTags successfully', function(done) {
        //uncomment below and update the code to test getShoppingCartConnectionTags
        //instance.getShoppingCartConnectionTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShoppingCartConnection', function() {
      it('should call updateShoppingCartConnection successfully', function(done) {
        //uncomment below and update the code to test updateShoppingCartConnection
        //instance.updateShoppingCartConnection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShoppingCartConnectionCustomFields', function() {
      it('should call updateShoppingCartConnectionCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateShoppingCartConnectionCustomFields
        //instance.updateShoppingCartConnectionCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));