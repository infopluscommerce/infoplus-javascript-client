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
    instance = new infoplus.ItemProductCodeApi();
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

  describe('ItemProductCodeApi', function() {
    describe('addItemProductCode', function() {
      it('should call addItemProductCode successfully', function(done) {
        //uncomment below and update the code to test addItemProductCode
        //instance.addItemProductCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemProductCodeAudit', function() {
      it('should call addItemProductCodeAudit successfully', function(done) {
        //uncomment below and update the code to test addItemProductCodeAudit
        //instance.addItemProductCodeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemProductCodeFile', function() {
      it('should call addItemProductCodeFile successfully', function(done) {
        //uncomment below and update the code to test addItemProductCodeFile
        //instance.addItemProductCodeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemProductCodeFileByURL', function() {
      it('should call addItemProductCodeFileByURL successfully', function(done) {
        //uncomment below and update the code to test addItemProductCodeFileByURL
        //instance.addItemProductCodeFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemProductCodeTag', function() {
      it('should call addItemProductCodeTag successfully', function(done) {
        //uncomment below and update the code to test addItemProductCodeTag
        //instance.addItemProductCodeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemProductCode', function() {
      it('should call deleteItemProductCode successfully', function(done) {
        //uncomment below and update the code to test deleteItemProductCode
        //instance.deleteItemProductCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemProductCodeFile', function() {
      it('should call deleteItemProductCodeFile successfully', function(done) {
        //uncomment below and update the code to test deleteItemProductCodeFile
        //instance.deleteItemProductCodeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemProductCodeTag', function() {
      it('should call deleteItemProductCodeTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemProductCodeTag
        //instance.deleteItemProductCodeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemProductCodeById', function() {
      it('should call getDuplicateItemProductCodeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemProductCodeById
        //instance.getDuplicateItemProductCodeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemProductCodeByFilter', function() {
      it('should call getItemProductCodeByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemProductCodeByFilter
        //instance.getItemProductCodeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemProductCodeById', function() {
      it('should call getItemProductCodeById successfully', function(done) {
        //uncomment below and update the code to test getItemProductCodeById
        //instance.getItemProductCodeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemProductCodeFiles', function() {
      it('should call getItemProductCodeFiles successfully', function(done) {
        //uncomment below and update the code to test getItemProductCodeFiles
        //instance.getItemProductCodeFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemProductCodeTags', function() {
      it('should call getItemProductCodeTags successfully', function(done) {
        //uncomment below and update the code to test getItemProductCodeTags
        //instance.getItemProductCodeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemProductCode', function() {
      it('should call updateItemProductCode successfully', function(done) {
        //uncomment below and update the code to test updateItemProductCode
        //instance.updateItemProductCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
