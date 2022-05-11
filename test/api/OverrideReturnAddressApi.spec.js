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
    instance = new infoplus.OverrideReturnAddressApi();
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

  describe('OverrideReturnAddressApi', function() {
    describe('addOverrideReturnAddress', function() {
      it('should call addOverrideReturnAddress successfully', function(done) {
        //uncomment below and update the code to test addOverrideReturnAddress
        //instance.addOverrideReturnAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOverrideReturnAddressAudit', function() {
      it('should call addOverrideReturnAddressAudit successfully', function(done) {
        //uncomment below and update the code to test addOverrideReturnAddressAudit
        //instance.addOverrideReturnAddressAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOverrideReturnAddressFile', function() {
      it('should call addOverrideReturnAddressFile successfully', function(done) {
        //uncomment below and update the code to test addOverrideReturnAddressFile
        //instance.addOverrideReturnAddressFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOverrideReturnAddressFileByURL', function() {
      it('should call addOverrideReturnAddressFileByURL successfully', function(done) {
        //uncomment below and update the code to test addOverrideReturnAddressFileByURL
        //instance.addOverrideReturnAddressFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOverrideReturnAddressTag', function() {
      it('should call addOverrideReturnAddressTag successfully', function(done) {
        //uncomment below and update the code to test addOverrideReturnAddressTag
        //instance.addOverrideReturnAddressTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOverrideReturnAddress', function() {
      it('should call deleteOverrideReturnAddress successfully', function(done) {
        //uncomment below and update the code to test deleteOverrideReturnAddress
        //instance.deleteOverrideReturnAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOverrideReturnAddressFile', function() {
      it('should call deleteOverrideReturnAddressFile successfully', function(done) {
        //uncomment below and update the code to test deleteOverrideReturnAddressFile
        //instance.deleteOverrideReturnAddressFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOverrideReturnAddressTag', function() {
      it('should call deleteOverrideReturnAddressTag successfully', function(done) {
        //uncomment below and update the code to test deleteOverrideReturnAddressTag
        //instance.deleteOverrideReturnAddressTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateOverrideReturnAddressById', function() {
      it('should call getDuplicateOverrideReturnAddressById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateOverrideReturnAddressById
        //instance.getDuplicateOverrideReturnAddressById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOverrideReturnAddressByFilter', function() {
      it('should call getOverrideReturnAddressByFilter successfully', function(done) {
        //uncomment below and update the code to test getOverrideReturnAddressByFilter
        //instance.getOverrideReturnAddressByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOverrideReturnAddressById', function() {
      it('should call getOverrideReturnAddressById successfully', function(done) {
        //uncomment below and update the code to test getOverrideReturnAddressById
        //instance.getOverrideReturnAddressById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOverrideReturnAddressFiles', function() {
      it('should call getOverrideReturnAddressFiles successfully', function(done) {
        //uncomment below and update the code to test getOverrideReturnAddressFiles
        //instance.getOverrideReturnAddressFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOverrideReturnAddressTags', function() {
      it('should call getOverrideReturnAddressTags successfully', function(done) {
        //uncomment below and update the code to test getOverrideReturnAddressTags
        //instance.getOverrideReturnAddressTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOverrideReturnAddress', function() {
      it('should call updateOverrideReturnAddress successfully', function(done) {
        //uncomment below and update the code to test updateOverrideReturnAddress
        //instance.updateOverrideReturnAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOverrideReturnAddressCustomFields', function() {
      it('should call updateOverrideReturnAddressCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateOverrideReturnAddressCustomFields
        //instance.updateOverrideReturnAddressCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
