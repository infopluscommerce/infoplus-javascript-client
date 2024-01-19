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
    instance = new infoplus.LegacyLowstockContactApi();
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

  describe('LegacyLowstockContactApi', function() {
    describe('addLegacyLowstockContact', function() {
      it('should call addLegacyLowstockContact successfully', function(done) {
        //uncomment below and update the code to test addLegacyLowstockContact
        //instance.addLegacyLowstockContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLegacyLowstockContactAudit', function() {
      it('should call addLegacyLowstockContactAudit successfully', function(done) {
        //uncomment below and update the code to test addLegacyLowstockContactAudit
        //instance.addLegacyLowstockContactAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLegacyLowstockContactFile', function() {
      it('should call addLegacyLowstockContactFile successfully', function(done) {
        //uncomment below and update the code to test addLegacyLowstockContactFile
        //instance.addLegacyLowstockContactFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLegacyLowstockContactFileByURL', function() {
      it('should call addLegacyLowstockContactFileByURL successfully', function(done) {
        //uncomment below and update the code to test addLegacyLowstockContactFileByURL
        //instance.addLegacyLowstockContactFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLegacyLowstockContactTag', function() {
      it('should call addLegacyLowstockContactTag successfully', function(done) {
        //uncomment below and update the code to test addLegacyLowstockContactTag
        //instance.addLegacyLowstockContactTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLegacyLowstockContact', function() {
      it('should call deleteLegacyLowstockContact successfully', function(done) {
        //uncomment below and update the code to test deleteLegacyLowstockContact
        //instance.deleteLegacyLowstockContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLegacyLowstockContactFile', function() {
      it('should call deleteLegacyLowstockContactFile successfully', function(done) {
        //uncomment below and update the code to test deleteLegacyLowstockContactFile
        //instance.deleteLegacyLowstockContactFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLegacyLowstockContactTag', function() {
      it('should call deleteLegacyLowstockContactTag successfully', function(done) {
        //uncomment below and update the code to test deleteLegacyLowstockContactTag
        //instance.deleteLegacyLowstockContactTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateLegacyLowstockContactById', function() {
      it('should call getDuplicateLegacyLowstockContactById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateLegacyLowstockContactById
        //instance.getDuplicateLegacyLowstockContactById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLegacyLowstockContactByFilter', function() {
      it('should call getLegacyLowstockContactByFilter successfully', function(done) {
        //uncomment below and update the code to test getLegacyLowstockContactByFilter
        //instance.getLegacyLowstockContactByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLegacyLowstockContactById', function() {
      it('should call getLegacyLowstockContactById successfully', function(done) {
        //uncomment below and update the code to test getLegacyLowstockContactById
        //instance.getLegacyLowstockContactById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLegacyLowstockContactFiles', function() {
      it('should call getLegacyLowstockContactFiles successfully', function(done) {
        //uncomment below and update the code to test getLegacyLowstockContactFiles
        //instance.getLegacyLowstockContactFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLegacyLowstockContactTags', function() {
      it('should call getLegacyLowstockContactTags successfully', function(done) {
        //uncomment below and update the code to test getLegacyLowstockContactTags
        //instance.getLegacyLowstockContactTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLegacyLowstockContact', function() {
      it('should call updateLegacyLowstockContact successfully', function(done) {
        //uncomment below and update the code to test updateLegacyLowstockContact
        //instance.updateLegacyLowstockContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
