/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: v3.0
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
    instance = new infoplus.PerpetualInventoryLogApi();
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

  describe('PerpetualInventoryLogApi', function() {
    describe('addPerpetualInventoryLogAudit', function() {
      it('should call addPerpetualInventoryLogAudit successfully', function(done) {
        //uncomment below and update the code to test addPerpetualInventoryLogAudit
        //instance.addPerpetualInventoryLogAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPerpetualInventoryLogFile', function() {
      it('should call addPerpetualInventoryLogFile successfully', function(done) {
        //uncomment below and update the code to test addPerpetualInventoryLogFile
        //instance.addPerpetualInventoryLogFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPerpetualInventoryLogFileByURL', function() {
      it('should call addPerpetualInventoryLogFileByURL successfully', function(done) {
        //uncomment below and update the code to test addPerpetualInventoryLogFileByURL
        //instance.addPerpetualInventoryLogFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPerpetualInventoryLogTag', function() {
      it('should call addPerpetualInventoryLogTag successfully', function(done) {
        //uncomment below and update the code to test addPerpetualInventoryLogTag
        //instance.addPerpetualInventoryLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePerpetualInventoryLogFile', function() {
      it('should call deletePerpetualInventoryLogFile successfully', function(done) {
        //uncomment below and update the code to test deletePerpetualInventoryLogFile
        //instance.deletePerpetualInventoryLogFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePerpetualInventoryLogTag', function() {
      it('should call deletePerpetualInventoryLogTag successfully', function(done) {
        //uncomment below and update the code to test deletePerpetualInventoryLogTag
        //instance.deletePerpetualInventoryLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicatePerpetualInventoryLogById', function() {
      it('should call getDuplicatePerpetualInventoryLogById successfully', function(done) {
        //uncomment below and update the code to test getDuplicatePerpetualInventoryLogById
        //instance.getDuplicatePerpetualInventoryLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPerpetualInventoryLogByFilter', function() {
      it('should call getPerpetualInventoryLogByFilter successfully', function(done) {
        //uncomment below and update the code to test getPerpetualInventoryLogByFilter
        //instance.getPerpetualInventoryLogByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPerpetualInventoryLogById', function() {
      it('should call getPerpetualInventoryLogById successfully', function(done) {
        //uncomment below and update the code to test getPerpetualInventoryLogById
        //instance.getPerpetualInventoryLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPerpetualInventoryLogFiles', function() {
      it('should call getPerpetualInventoryLogFiles successfully', function(done) {
        //uncomment below and update the code to test getPerpetualInventoryLogFiles
        //instance.getPerpetualInventoryLogFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPerpetualInventoryLogTags', function() {
      it('should call getPerpetualInventoryLogTags successfully', function(done) {
        //uncomment below and update the code to test getPerpetualInventoryLogTags
        //instance.getPerpetualInventoryLogTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
