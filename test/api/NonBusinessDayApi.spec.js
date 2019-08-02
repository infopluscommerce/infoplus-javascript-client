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
 * Swagger Codegen version: 2.3.1
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
    instance = new infoplus.NonBusinessDayApi();
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

  describe('NonBusinessDayApi', function() {
    describe('addNonBusinessDay', function() {
      it('should call addNonBusinessDay successfully', function(done) {
        //uncomment below and update the code to test addNonBusinessDay
        //instance.addNonBusinessDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNonBusinessDayAudit', function() {
      it('should call addNonBusinessDayAudit successfully', function(done) {
        //uncomment below and update the code to test addNonBusinessDayAudit
        //instance.addNonBusinessDayAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNonBusinessDayFile', function() {
      it('should call addNonBusinessDayFile successfully', function(done) {
        //uncomment below and update the code to test addNonBusinessDayFile
        //instance.addNonBusinessDayFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNonBusinessDayTag', function() {
      it('should call addNonBusinessDayTag successfully', function(done) {
        //uncomment below and update the code to test addNonBusinessDayTag
        //instance.addNonBusinessDayTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNonBusinessDay', function() {
      it('should call deleteNonBusinessDay successfully', function(done) {
        //uncomment below and update the code to test deleteNonBusinessDay
        //instance.deleteNonBusinessDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNonBusinessDayTag', function() {
      it('should call deleteNonBusinessDayTag successfully', function(done) {
        //uncomment below and update the code to test deleteNonBusinessDayTag
        //instance.deleteNonBusinessDayTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateNonBusinessDayById', function() {
      it('should call getDuplicateNonBusinessDayById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateNonBusinessDayById
        //instance.getDuplicateNonBusinessDayById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNonBusinessDayByFilter', function() {
      it('should call getNonBusinessDayByFilter successfully', function(done) {
        //uncomment below and update the code to test getNonBusinessDayByFilter
        //instance.getNonBusinessDayByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNonBusinessDayById', function() {
      it('should call getNonBusinessDayById successfully', function(done) {
        //uncomment below and update the code to test getNonBusinessDayById
        //instance.getNonBusinessDayById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNonBusinessDayTags', function() {
      it('should call getNonBusinessDayTags successfully', function(done) {
        //uncomment below and update the code to test getNonBusinessDayTags
        //instance.getNonBusinessDayTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNonBusinessDay', function() {
      it('should call updateNonBusinessDay successfully', function(done) {
        //uncomment below and update the code to test updateNonBusinessDay
        //instance.updateNonBusinessDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));