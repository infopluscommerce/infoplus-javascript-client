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
    instance = new infoplus.ExternalShippingSystemApi();
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

  describe('ExternalShippingSystemApi', function() {
    describe('addExternalShippingSystem', function() {
      it('should call addExternalShippingSystem successfully', function(done) {
        //uncomment below and update the code to test addExternalShippingSystem
        //instance.addExternalShippingSystem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addExternalShippingSystemAudit', function() {
      it('should call addExternalShippingSystemAudit successfully', function(done) {
        //uncomment below and update the code to test addExternalShippingSystemAudit
        //instance.addExternalShippingSystemAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addExternalShippingSystemTag', function() {
      it('should call addExternalShippingSystemTag successfully', function(done) {
        //uncomment below and update the code to test addExternalShippingSystemTag
        //instance.addExternalShippingSystemTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExternalShippingSystem', function() {
      it('should call deleteExternalShippingSystem successfully', function(done) {
        //uncomment below and update the code to test deleteExternalShippingSystem
        //instance.deleteExternalShippingSystem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExternalShippingSystemTag', function() {
      it('should call deleteExternalShippingSystemTag successfully', function(done) {
        //uncomment below and update the code to test deleteExternalShippingSystemTag
        //instance.deleteExternalShippingSystemTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateExternalShippingSystemById', function() {
      it('should call getDuplicateExternalShippingSystemById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateExternalShippingSystemById
        //instance.getDuplicateExternalShippingSystemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalShippingSystemByFilter', function() {
      it('should call getExternalShippingSystemByFilter successfully', function(done) {
        //uncomment below and update the code to test getExternalShippingSystemByFilter
        //instance.getExternalShippingSystemByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalShippingSystemById', function() {
      it('should call getExternalShippingSystemById successfully', function(done) {
        //uncomment below and update the code to test getExternalShippingSystemById
        //instance.getExternalShippingSystemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalShippingSystemTags', function() {
      it('should call getExternalShippingSystemTags successfully', function(done) {
        //uncomment below and update the code to test getExternalShippingSystemTags
        //instance.getExternalShippingSystemTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExternalShippingSystem', function() {
      it('should call updateExternalShippingSystem successfully', function(done) {
        //uncomment below and update the code to test updateExternalShippingSystem
        //instance.updateExternalShippingSystem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExternalShippingSystemCustomFields', function() {
      it('should call updateExternalShippingSystemCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateExternalShippingSystemCustomFields
        //instance.updateExternalShippingSystemCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));