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
    instance = new infoplus.LoadContentApi();
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

  describe('LoadContentApi', function() {
    describe('addLoadContentAudit', function() {
      it('should call addLoadContentAudit successfully', function(done) {
        //uncomment below and update the code to test addLoadContentAudit
        //instance.addLoadContentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoadContentFile', function() {
      it('should call addLoadContentFile successfully', function(done) {
        //uncomment below and update the code to test addLoadContentFile
        //instance.addLoadContentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoadContentFileByURL', function() {
      it('should call addLoadContentFileByURL successfully', function(done) {
        //uncomment below and update the code to test addLoadContentFileByURL
        //instance.addLoadContentFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLoadContentTag', function() {
      it('should call addLoadContentTag successfully', function(done) {
        //uncomment below and update the code to test addLoadContentTag
        //instance.addLoadContentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoadContentFile', function() {
      it('should call deleteLoadContentFile successfully', function(done) {
        //uncomment below and update the code to test deleteLoadContentFile
        //instance.deleteLoadContentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoadContentTag', function() {
      it('should call deleteLoadContentTag successfully', function(done) {
        //uncomment below and update the code to test deleteLoadContentTag
        //instance.deleteLoadContentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateLoadContentById', function() {
      it('should call getDuplicateLoadContentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateLoadContentById
        //instance.getDuplicateLoadContentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoadContentByFilter', function() {
      it('should call getLoadContentByFilter successfully', function(done) {
        //uncomment below and update the code to test getLoadContentByFilter
        //instance.getLoadContentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoadContentById', function() {
      it('should call getLoadContentById successfully', function(done) {
        //uncomment below and update the code to test getLoadContentById
        //instance.getLoadContentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoadContentFiles', function() {
      it('should call getLoadContentFiles successfully', function(done) {
        //uncomment below and update the code to test getLoadContentFiles
        //instance.getLoadContentFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoadContentTags', function() {
      it('should call getLoadContentTags successfully', function(done) {
        //uncomment below and update the code to test getLoadContentTags
        //instance.getLoadContentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoadContentCustomFields', function() {
      it('should call updateLoadContentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateLoadContentCustomFields
        //instance.updateLoadContentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
