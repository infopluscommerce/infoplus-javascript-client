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
    instance = new infoplus.ProductionModelApi();
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

  describe('ProductionModelApi', function() {
    describe('addProductionModel', function() {
      it('should call addProductionModel successfully', function(done) {
        //uncomment below and update the code to test addProductionModel
        //instance.addProductionModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductionModelAudit', function() {
      it('should call addProductionModelAudit successfully', function(done) {
        //uncomment below and update the code to test addProductionModelAudit
        //instance.addProductionModelAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductionModelFile', function() {
      it('should call addProductionModelFile successfully', function(done) {
        //uncomment below and update the code to test addProductionModelFile
        //instance.addProductionModelFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductionModelFileByURL', function() {
      it('should call addProductionModelFileByURL successfully', function(done) {
        //uncomment below and update the code to test addProductionModelFileByURL
        //instance.addProductionModelFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductionModelTag', function() {
      it('should call addProductionModelTag successfully', function(done) {
        //uncomment below and update the code to test addProductionModelTag
        //instance.addProductionModelTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductionModel', function() {
      it('should call deleteProductionModel successfully', function(done) {
        //uncomment below and update the code to test deleteProductionModel
        //instance.deleteProductionModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductionModelFile', function() {
      it('should call deleteProductionModelFile successfully', function(done) {
        //uncomment below and update the code to test deleteProductionModelFile
        //instance.deleteProductionModelFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductionModelTag', function() {
      it('should call deleteProductionModelTag successfully', function(done) {
        //uncomment below and update the code to test deleteProductionModelTag
        //instance.deleteProductionModelTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateProductionModelById', function() {
      it('should call getDuplicateProductionModelById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateProductionModelById
        //instance.getDuplicateProductionModelById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductionModelByFilter', function() {
      it('should call getProductionModelByFilter successfully', function(done) {
        //uncomment below and update the code to test getProductionModelByFilter
        //instance.getProductionModelByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductionModelById', function() {
      it('should call getProductionModelById successfully', function(done) {
        //uncomment below and update the code to test getProductionModelById
        //instance.getProductionModelById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductionModelFiles', function() {
      it('should call getProductionModelFiles successfully', function(done) {
        //uncomment below and update the code to test getProductionModelFiles
        //instance.getProductionModelFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductionModelTags', function() {
      it('should call getProductionModelTags successfully', function(done) {
        //uncomment below and update the code to test getProductionModelTags
        //instance.getProductionModelTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductionModel', function() {
      it('should call updateProductionModel successfully', function(done) {
        //uncomment below and update the code to test updateProductionModel
        //instance.updateProductionModel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductionModelCustomFields', function() {
      it('should call updateProductionModelCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateProductionModelCustomFields
        //instance.updateProductionModelCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
