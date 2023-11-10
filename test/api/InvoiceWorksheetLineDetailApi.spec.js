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
    instance = new infoplus.InvoiceWorksheetLineDetailApi();
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

  describe('InvoiceWorksheetLineDetailApi', function() {
    describe('addInvoiceWorksheetLineDetailAudit', function() {
      it('should call addInvoiceWorksheetLineDetailAudit successfully', function(done) {
        //uncomment below and update the code to test addInvoiceWorksheetLineDetailAudit
        //instance.addInvoiceWorksheetLineDetailAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInvoiceWorksheetLineDetailFile', function() {
      it('should call addInvoiceWorksheetLineDetailFile successfully', function(done) {
        //uncomment below and update the code to test addInvoiceWorksheetLineDetailFile
        //instance.addInvoiceWorksheetLineDetailFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInvoiceWorksheetLineDetailFileByURL', function() {
      it('should call addInvoiceWorksheetLineDetailFileByURL successfully', function(done) {
        //uncomment below and update the code to test addInvoiceWorksheetLineDetailFileByURL
        //instance.addInvoiceWorksheetLineDetailFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInvoiceWorksheetLineDetailTag', function() {
      it('should call addInvoiceWorksheetLineDetailTag successfully', function(done) {
        //uncomment below and update the code to test addInvoiceWorksheetLineDetailTag
        //instance.addInvoiceWorksheetLineDetailTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInvoiceWorksheetLineDetailFile', function() {
      it('should call deleteInvoiceWorksheetLineDetailFile successfully', function(done) {
        //uncomment below and update the code to test deleteInvoiceWorksheetLineDetailFile
        //instance.deleteInvoiceWorksheetLineDetailFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInvoiceWorksheetLineDetailTag', function() {
      it('should call deleteInvoiceWorksheetLineDetailTag successfully', function(done) {
        //uncomment below and update the code to test deleteInvoiceWorksheetLineDetailTag
        //instance.deleteInvoiceWorksheetLineDetailTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateInvoiceWorksheetLineDetailById', function() {
      it('should call getDuplicateInvoiceWorksheetLineDetailById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateInvoiceWorksheetLineDetailById
        //instance.getDuplicateInvoiceWorksheetLineDetailById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceWorksheetLineDetailByFilter', function() {
      it('should call getInvoiceWorksheetLineDetailByFilter successfully', function(done) {
        //uncomment below and update the code to test getInvoiceWorksheetLineDetailByFilter
        //instance.getInvoiceWorksheetLineDetailByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceWorksheetLineDetailById', function() {
      it('should call getInvoiceWorksheetLineDetailById successfully', function(done) {
        //uncomment below and update the code to test getInvoiceWorksheetLineDetailById
        //instance.getInvoiceWorksheetLineDetailById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceWorksheetLineDetailFiles', function() {
      it('should call getInvoiceWorksheetLineDetailFiles successfully', function(done) {
        //uncomment below and update the code to test getInvoiceWorksheetLineDetailFiles
        //instance.getInvoiceWorksheetLineDetailFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceWorksheetLineDetailTags', function() {
      it('should call getInvoiceWorksheetLineDetailTags successfully', function(done) {
        //uncomment below and update the code to test getInvoiceWorksheetLineDetailTags
        //instance.getInvoiceWorksheetLineDetailTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInvoiceWorksheetLineDetailCustomFields', function() {
      it('should call updateInvoiceWorksheetLineDetailCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateInvoiceWorksheetLineDetailCustomFields
        //instance.updateInvoiceWorksheetLineDetailCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
