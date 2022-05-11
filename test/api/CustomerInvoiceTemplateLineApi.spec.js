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
    instance = new infoplus.CustomerInvoiceTemplateLineApi();
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

  describe('CustomerInvoiceTemplateLineApi', function() {
    describe('addCustomerInvoiceTemplateLineAudit', function() {
      it('should call addCustomerInvoiceTemplateLineAudit successfully', function(done) {
        //uncomment below and update the code to test addCustomerInvoiceTemplateLineAudit
        //instance.addCustomerInvoiceTemplateLineAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomerInvoiceTemplateLineFile', function() {
      it('should call addCustomerInvoiceTemplateLineFile successfully', function(done) {
        //uncomment below and update the code to test addCustomerInvoiceTemplateLineFile
        //instance.addCustomerInvoiceTemplateLineFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomerInvoiceTemplateLineFileByURL', function() {
      it('should call addCustomerInvoiceTemplateLineFileByURL successfully', function(done) {
        //uncomment below and update the code to test addCustomerInvoiceTemplateLineFileByURL
        //instance.addCustomerInvoiceTemplateLineFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomerInvoiceTemplateLineTag', function() {
      it('should call addCustomerInvoiceTemplateLineTag successfully', function(done) {
        //uncomment below and update the code to test addCustomerInvoiceTemplateLineTag
        //instance.addCustomerInvoiceTemplateLineTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerInvoiceTemplateLine', function() {
      it('should call deleteCustomerInvoiceTemplateLine successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerInvoiceTemplateLine
        //instance.deleteCustomerInvoiceTemplateLine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerInvoiceTemplateLineFile', function() {
      it('should call deleteCustomerInvoiceTemplateLineFile successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerInvoiceTemplateLineFile
        //instance.deleteCustomerInvoiceTemplateLineFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerInvoiceTemplateLineTag', function() {
      it('should call deleteCustomerInvoiceTemplateLineTag successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerInvoiceTemplateLineTag
        //instance.deleteCustomerInvoiceTemplateLineTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInvoiceTemplateLineByFilter', function() {
      it('should call getCustomerInvoiceTemplateLineByFilter successfully', function(done) {
        //uncomment below and update the code to test getCustomerInvoiceTemplateLineByFilter
        //instance.getCustomerInvoiceTemplateLineByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInvoiceTemplateLineById', function() {
      it('should call getCustomerInvoiceTemplateLineById successfully', function(done) {
        //uncomment below and update the code to test getCustomerInvoiceTemplateLineById
        //instance.getCustomerInvoiceTemplateLineById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInvoiceTemplateLineFiles', function() {
      it('should call getCustomerInvoiceTemplateLineFiles successfully', function(done) {
        //uncomment below and update the code to test getCustomerInvoiceTemplateLineFiles
        //instance.getCustomerInvoiceTemplateLineFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerInvoiceTemplateLineTags', function() {
      it('should call getCustomerInvoiceTemplateLineTags successfully', function(done) {
        //uncomment below and update the code to test getCustomerInvoiceTemplateLineTags
        //instance.getCustomerInvoiceTemplateLineTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCustomerInvoiceTemplateLineById', function() {
      it('should call getDuplicateCustomerInvoiceTemplateLineById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCustomerInvoiceTemplateLineById
        //instance.getDuplicateCustomerInvoiceTemplateLineById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerInvoiceTemplateLine', function() {
      it('should call updateCustomerInvoiceTemplateLine successfully', function(done) {
        //uncomment below and update the code to test updateCustomerInvoiceTemplateLine
        //instance.updateCustomerInvoiceTemplateLine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
