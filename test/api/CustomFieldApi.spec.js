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
    instance = new infoplus.CustomFieldApi();
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

  describe('CustomFieldApi', function() {
    describe('addCustomField', function() {
      it('should call addCustomField successfully', function(done) {
        //uncomment below and update the code to test addCustomField
        //instance.addCustomField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomFieldAudit', function() {
      it('should call addCustomFieldAudit successfully', function(done) {
        //uncomment below and update the code to test addCustomFieldAudit
        //instance.addCustomFieldAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomFieldFile', function() {
      it('should call addCustomFieldFile successfully', function(done) {
        //uncomment below and update the code to test addCustomFieldFile
        //instance.addCustomFieldFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomFieldFileByURL', function() {
      it('should call addCustomFieldFileByURL successfully', function(done) {
        //uncomment below and update the code to test addCustomFieldFileByURL
        //instance.addCustomFieldFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomFieldTag', function() {
      it('should call addCustomFieldTag successfully', function(done) {
        //uncomment below and update the code to test addCustomFieldTag
        //instance.addCustomFieldTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomFieldFile', function() {
      it('should call deleteCustomFieldFile successfully', function(done) {
        //uncomment below and update the code to test deleteCustomFieldFile
        //instance.deleteCustomFieldFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomFieldTag', function() {
      it('should call deleteCustomFieldTag successfully', function(done) {
        //uncomment below and update the code to test deleteCustomFieldTag
        //instance.deleteCustomFieldTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomFieldByFilter', function() {
      it('should call getCustomFieldByFilter successfully', function(done) {
        //uncomment below and update the code to test getCustomFieldByFilter
        //instance.getCustomFieldByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomFieldById', function() {
      it('should call getCustomFieldById successfully', function(done) {
        //uncomment below and update the code to test getCustomFieldById
        //instance.getCustomFieldById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomFieldFiles', function() {
      it('should call getCustomFieldFiles successfully', function(done) {
        //uncomment below and update the code to test getCustomFieldFiles
        //instance.getCustomFieldFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomFieldTags', function() {
      it('should call getCustomFieldTags successfully', function(done) {
        //uncomment below and update the code to test getCustomFieldTags
        //instance.getCustomFieldTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCustomFieldById', function() {
      it('should call getDuplicateCustomFieldById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCustomFieldById
        //instance.getDuplicateCustomFieldById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomField', function() {
      it('should call updateCustomField successfully', function(done) {
        //uncomment below and update the code to test updateCustomField
        //instance.updateCustomField(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
