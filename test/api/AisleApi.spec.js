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
    instance = new infoplus.AisleApi();
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

  describe('AisleApi', function() {
    describe('addAisle', function() {
      it('should call addAisle successfully', function(done) {
        //uncomment below and update the code to test addAisle
        //instance.addAisle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addAisleAudit', function() {
      it('should call addAisleAudit successfully', function(done) {
        //uncomment below and update the code to test addAisleAudit
        //instance.addAisleAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addAisleFile', function() {
      it('should call addAisleFile successfully', function(done) {
        //uncomment below and update the code to test addAisleFile
        //instance.addAisleFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addAisleFileByURL', function() {
      it('should call addAisleFileByURL successfully', function(done) {
        //uncomment below and update the code to test addAisleFileByURL
        //instance.addAisleFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addAisleTag', function() {
      it('should call addAisleTag successfully', function(done) {
        //uncomment below and update the code to test addAisleTag
        //instance.addAisleTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAisle', function() {
      it('should call deleteAisle successfully', function(done) {
        //uncomment below and update the code to test deleteAisle
        //instance.deleteAisle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAisleFile', function() {
      it('should call deleteAisleFile successfully', function(done) {
        //uncomment below and update the code to test deleteAisleFile
        //instance.deleteAisleFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAisleTag', function() {
      it('should call deleteAisleTag successfully', function(done) {
        //uncomment below and update the code to test deleteAisleTag
        //instance.deleteAisleTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAisleByFilter', function() {
      it('should call getAisleByFilter successfully', function(done) {
        //uncomment below and update the code to test getAisleByFilter
        //instance.getAisleByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAisleById', function() {
      it('should call getAisleById successfully', function(done) {
        //uncomment below and update the code to test getAisleById
        //instance.getAisleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAisleFiles', function() {
      it('should call getAisleFiles successfully', function(done) {
        //uncomment below and update the code to test getAisleFiles
        //instance.getAisleFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAisleTags', function() {
      it('should call getAisleTags successfully', function(done) {
        //uncomment below and update the code to test getAisleTags
        //instance.getAisleTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateAisleById', function() {
      it('should call getDuplicateAisleById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateAisleById
        //instance.getDuplicateAisleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAisle', function() {
      it('should call updateAisle successfully', function(done) {
        //uncomment below and update the code to test updateAisle
        //instance.updateAisle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAisleCustomFields', function() {
      it('should call updateAisleCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateAisleCustomFields
        //instance.updateAisleCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
