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
    instance = new infoplus.PackingDetailApi();
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

  describe('PackingDetailApi', function() {
    describe('addPackingDetailAudit', function() {
      it('should call addPackingDetailAudit successfully', function(done) {
        //uncomment below and update the code to test addPackingDetailAudit
        //instance.addPackingDetailAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingDetailFile', function() {
      it('should call addPackingDetailFile successfully', function(done) {
        //uncomment below and update the code to test addPackingDetailFile
        //instance.addPackingDetailFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingDetailFileByURL', function() {
      it('should call addPackingDetailFileByURL successfully', function(done) {
        //uncomment below and update the code to test addPackingDetailFileByURL
        //instance.addPackingDetailFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingDetailTag', function() {
      it('should call addPackingDetailTag successfully', function(done) {
        //uncomment below and update the code to test addPackingDetailTag
        //instance.addPackingDetailTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePackingDetailFile', function() {
      it('should call deletePackingDetailFile successfully', function(done) {
        //uncomment below and update the code to test deletePackingDetailFile
        //instance.deletePackingDetailFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePackingDetailTag', function() {
      it('should call deletePackingDetailTag successfully', function(done) {
        //uncomment below and update the code to test deletePackingDetailTag
        //instance.deletePackingDetailTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicatePackingDetailById', function() {
      it('should call getDuplicatePackingDetailById successfully', function(done) {
        //uncomment below and update the code to test getDuplicatePackingDetailById
        //instance.getDuplicatePackingDetailById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingDetailByFilter', function() {
      it('should call getPackingDetailByFilter successfully', function(done) {
        //uncomment below and update the code to test getPackingDetailByFilter
        //instance.getPackingDetailByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingDetailById', function() {
      it('should call getPackingDetailById successfully', function(done) {
        //uncomment below and update the code to test getPackingDetailById
        //instance.getPackingDetailById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingDetailFiles', function() {
      it('should call getPackingDetailFiles successfully', function(done) {
        //uncomment below and update the code to test getPackingDetailFiles
        //instance.getPackingDetailFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingDetailTags', function() {
      it('should call getPackingDetailTags successfully', function(done) {
        //uncomment below and update the code to test getPackingDetailTags
        //instance.getPackingDetailTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePackingDetailCustomFields', function() {
      it('should call updatePackingDetailCustomFields successfully', function(done) {
        //uncomment below and update the code to test updatePackingDetailCustomFields
        //instance.updatePackingDetailCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
