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
    instance = new infoplus.PalletTypeApi();
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

  describe('PalletTypeApi', function() {
    describe('addPalletType', function() {
      it('should call addPalletType successfully', function(done) {
        //uncomment below and update the code to test addPalletType
        //instance.addPalletType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPalletTypeAudit', function() {
      it('should call addPalletTypeAudit successfully', function(done) {
        //uncomment below and update the code to test addPalletTypeAudit
        //instance.addPalletTypeAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPalletTypeFile', function() {
      it('should call addPalletTypeFile successfully', function(done) {
        //uncomment below and update the code to test addPalletTypeFile
        //instance.addPalletTypeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPalletTypeFileByURL', function() {
      it('should call addPalletTypeFileByURL successfully', function(done) {
        //uncomment below and update the code to test addPalletTypeFileByURL
        //instance.addPalletTypeFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPalletTypeTag', function() {
      it('should call addPalletTypeTag successfully', function(done) {
        //uncomment below and update the code to test addPalletTypeTag
        //instance.addPalletTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePalletType', function() {
      it('should call deletePalletType successfully', function(done) {
        //uncomment below and update the code to test deletePalletType
        //instance.deletePalletType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePalletTypeFile', function() {
      it('should call deletePalletTypeFile successfully', function(done) {
        //uncomment below and update the code to test deletePalletTypeFile
        //instance.deletePalletTypeFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePalletTypeTag', function() {
      it('should call deletePalletTypeTag successfully', function(done) {
        //uncomment below and update the code to test deletePalletTypeTag
        //instance.deletePalletTypeTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicatePalletTypeById', function() {
      it('should call getDuplicatePalletTypeById successfully', function(done) {
        //uncomment below and update the code to test getDuplicatePalletTypeById
        //instance.getDuplicatePalletTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPalletTypeByFilter', function() {
      it('should call getPalletTypeByFilter successfully', function(done) {
        //uncomment below and update the code to test getPalletTypeByFilter
        //instance.getPalletTypeByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPalletTypeById', function() {
      it('should call getPalletTypeById successfully', function(done) {
        //uncomment below and update the code to test getPalletTypeById
        //instance.getPalletTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPalletTypeFiles', function() {
      it('should call getPalletTypeFiles successfully', function(done) {
        //uncomment below and update the code to test getPalletTypeFiles
        //instance.getPalletTypeFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPalletTypeTags', function() {
      it('should call getPalletTypeTags successfully', function(done) {
        //uncomment below and update the code to test getPalletTypeTags
        //instance.getPalletTypeTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePalletType', function() {
      it('should call updatePalletType successfully', function(done) {
        //uncomment below and update the code to test updatePalletType
        //instance.updatePalletType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePalletTypeCustomFields', function() {
      it('should call updatePalletTypeCustomFields successfully', function(done) {
        //uncomment below and update the code to test updatePalletTypeCustomFields
        //instance.updatePalletTypeCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
