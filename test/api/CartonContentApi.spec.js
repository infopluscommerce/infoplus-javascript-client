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
    instance = new infoplus.CartonContentApi();
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

  describe('CartonContentApi', function() {
    describe('addCartonContent', function() {
      it('should call addCartonContent successfully', function(done) {
        //uncomment below and update the code to test addCartonContent
        //instance.addCartonContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonContentAudit', function() {
      it('should call addCartonContentAudit successfully', function(done) {
        //uncomment below and update the code to test addCartonContentAudit
        //instance.addCartonContentAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonContentFile', function() {
      it('should call addCartonContentFile successfully', function(done) {
        //uncomment below and update the code to test addCartonContentFile
        //instance.addCartonContentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonContentFileByURL', function() {
      it('should call addCartonContentFileByURL successfully', function(done) {
        //uncomment below and update the code to test addCartonContentFileByURL
        //instance.addCartonContentFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonContentTag', function() {
      it('should call addCartonContentTag successfully', function(done) {
        //uncomment below and update the code to test addCartonContentTag
        //instance.addCartonContentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartonContent', function() {
      it('should call deleteCartonContent successfully', function(done) {
        //uncomment below and update the code to test deleteCartonContent
        //instance.deleteCartonContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartonContentFile', function() {
      it('should call deleteCartonContentFile successfully', function(done) {
        //uncomment below and update the code to test deleteCartonContentFile
        //instance.deleteCartonContentFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartonContentTag', function() {
      it('should call deleteCartonContentTag successfully', function(done) {
        //uncomment below and update the code to test deleteCartonContentTag
        //instance.deleteCartonContentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonContentByFilter', function() {
      it('should call getCartonContentByFilter successfully', function(done) {
        //uncomment below and update the code to test getCartonContentByFilter
        //instance.getCartonContentByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonContentById', function() {
      it('should call getCartonContentById successfully', function(done) {
        //uncomment below and update the code to test getCartonContentById
        //instance.getCartonContentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonContentFiles', function() {
      it('should call getCartonContentFiles successfully', function(done) {
        //uncomment below and update the code to test getCartonContentFiles
        //instance.getCartonContentFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonContentTags', function() {
      it('should call getCartonContentTags successfully', function(done) {
        //uncomment below and update the code to test getCartonContentTags
        //instance.getCartonContentTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCartonContentById', function() {
      it('should call getDuplicateCartonContentById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCartonContentById
        //instance.getDuplicateCartonContentById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCartonContent', function() {
      it('should call updateCartonContent successfully', function(done) {
        //uncomment below and update the code to test updateCartonContent
        //instance.updateCartonContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCartonContentCustomFields', function() {
      it('should call updateCartonContentCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateCartonContentCustomFields
        //instance.updateCartonContentCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
