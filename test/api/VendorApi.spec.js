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
    instance = new infoplus.VendorApi();
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

  describe('VendorApi', function() {
    describe('addVendor', function() {
      it('should call addVendor successfully', function(done) {
        //uncomment below and update the code to test addVendor
        //instance.addVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorAudit', function() {
      it('should call addVendorAudit successfully', function(done) {
        //uncomment below and update the code to test addVendorAudit
        //instance.addVendorAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorFile', function() {
      it('should call addVendorFile successfully', function(done) {
        //uncomment below and update the code to test addVendorFile
        //instance.addVendorFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorFileByURL', function() {
      it('should call addVendorFileByURL successfully', function(done) {
        //uncomment below and update the code to test addVendorFileByURL
        //instance.addVendorFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addVendorTag', function() {
      it('should call addVendorTag successfully', function(done) {
        //uncomment below and update the code to test addVendorTag
        //instance.addVendorTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendor', function() {
      it('should call deleteVendor successfully', function(done) {
        //uncomment below and update the code to test deleteVendor
        //instance.deleteVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendorFile', function() {
      it('should call deleteVendorFile successfully', function(done) {
        //uncomment below and update the code to test deleteVendorFile
        //instance.deleteVendorFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVendorTag', function() {
      it('should call deleteVendorTag successfully', function(done) {
        //uncomment below and update the code to test deleteVendorTag
        //instance.deleteVendorTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateVendorById', function() {
      it('should call getDuplicateVendorById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateVendorById
        //instance.getDuplicateVendorById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorByFilter', function() {
      it('should call getVendorByFilter successfully', function(done) {
        //uncomment below and update the code to test getVendorByFilter
        //instance.getVendorByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorById', function() {
      it('should call getVendorById successfully', function(done) {
        //uncomment below and update the code to test getVendorById
        //instance.getVendorById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorFiles', function() {
      it('should call getVendorFiles successfully', function(done) {
        //uncomment below and update the code to test getVendorFiles
        //instance.getVendorFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVendorTags', function() {
      it('should call getVendorTags successfully', function(done) {
        //uncomment below and update the code to test getVendorTags
        //instance.getVendorTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendor', function() {
      it('should call updateVendor successfully', function(done) {
        //uncomment below and update the code to test updateVendor
        //instance.updateVendor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVendorCustomFields', function() {
      it('should call updateVendorCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateVendorCustomFields
        //instance.updateVendorCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
