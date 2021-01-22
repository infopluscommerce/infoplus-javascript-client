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
    instance = new infoplus.ItemActivityApi();
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

  describe('ItemActivityApi', function() {
    describe('addItemActivityAudit', function() {
      it('should call addItemActivityAudit successfully', function(done) {
        //uncomment below and update the code to test addItemActivityAudit
        //instance.addItemActivityAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemActivityFile', function() {
      it('should call addItemActivityFile successfully', function(done) {
        //uncomment below and update the code to test addItemActivityFile
        //instance.addItemActivityFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemActivityFileByURL', function() {
      it('should call addItemActivityFileByURL successfully', function(done) {
        //uncomment below and update the code to test addItemActivityFileByURL
        //instance.addItemActivityFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemActivityTag', function() {
      it('should call addItemActivityTag successfully', function(done) {
        //uncomment below and update the code to test addItemActivityTag
        //instance.addItemActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemActivityFile', function() {
      it('should call deleteItemActivityFile successfully', function(done) {
        //uncomment below and update the code to test deleteItemActivityFile
        //instance.deleteItemActivityFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemActivityTag', function() {
      it('should call deleteItemActivityTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemActivityTag
        //instance.deleteItemActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemActivityById', function() {
      it('should call getDuplicateItemActivityById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemActivityById
        //instance.getDuplicateItemActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemActivityByFilter', function() {
      it('should call getItemActivityByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemActivityByFilter
        //instance.getItemActivityByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemActivityById', function() {
      it('should call getItemActivityById successfully', function(done) {
        //uncomment below and update the code to test getItemActivityById
        //instance.getItemActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemActivityFiles', function() {
      it('should call getItemActivityFiles successfully', function(done) {
        //uncomment below and update the code to test getItemActivityFiles
        //instance.getItemActivityFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemActivityTags', function() {
      it('should call getItemActivityTags successfully', function(done) {
        //uncomment below and update the code to test getItemActivityTags
        //instance.getItemActivityTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));