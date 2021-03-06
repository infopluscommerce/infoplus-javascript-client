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
    instance = new infoplus.PackingPlanApi();
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

  describe('PackingPlanApi', function() {
    describe('addPackingPlan', function() {
      it('should call addPackingPlan successfully', function(done) {
        //uncomment below and update the code to test addPackingPlan
        //instance.addPackingPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingPlanAudit', function() {
      it('should call addPackingPlanAudit successfully', function(done) {
        //uncomment below and update the code to test addPackingPlanAudit
        //instance.addPackingPlanAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingPlanFile', function() {
      it('should call addPackingPlanFile successfully', function(done) {
        //uncomment below and update the code to test addPackingPlanFile
        //instance.addPackingPlanFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingPlanFileByURL', function() {
      it('should call addPackingPlanFileByURL successfully', function(done) {
        //uncomment below and update the code to test addPackingPlanFileByURL
        //instance.addPackingPlanFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPackingPlanTag', function() {
      it('should call addPackingPlanTag successfully', function(done) {
        //uncomment below and update the code to test addPackingPlanTag
        //instance.addPackingPlanTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePackingPlan', function() {
      it('should call deletePackingPlan successfully', function(done) {
        //uncomment below and update the code to test deletePackingPlan
        //instance.deletePackingPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePackingPlanFile', function() {
      it('should call deletePackingPlanFile successfully', function(done) {
        //uncomment below and update the code to test deletePackingPlanFile
        //instance.deletePackingPlanFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePackingPlanTag', function() {
      it('should call deletePackingPlanTag successfully', function(done) {
        //uncomment below and update the code to test deletePackingPlanTag
        //instance.deletePackingPlanTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicatePackingPlanById', function() {
      it('should call getDuplicatePackingPlanById successfully', function(done) {
        //uncomment below and update the code to test getDuplicatePackingPlanById
        //instance.getDuplicatePackingPlanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingPlanByFilter', function() {
      it('should call getPackingPlanByFilter successfully', function(done) {
        //uncomment below and update the code to test getPackingPlanByFilter
        //instance.getPackingPlanByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingPlanById', function() {
      it('should call getPackingPlanById successfully', function(done) {
        //uncomment below and update the code to test getPackingPlanById
        //instance.getPackingPlanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingPlanFiles', function() {
      it('should call getPackingPlanFiles successfully', function(done) {
        //uncomment below and update the code to test getPackingPlanFiles
        //instance.getPackingPlanFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackingPlanTags', function() {
      it('should call getPackingPlanTags successfully', function(done) {
        //uncomment below and update the code to test getPackingPlanTags
        //instance.getPackingPlanTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePackingPlan', function() {
      it('should call updatePackingPlan successfully', function(done) {
        //uncomment below and update the code to test updatePackingPlan
        //instance.updatePackingPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePackingPlanCustomFields', function() {
      it('should call updatePackingPlanCustomFields successfully', function(done) {
        //uncomment below and update the code to test updatePackingPlanCustomFields
        //instance.updatePackingPlanCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
