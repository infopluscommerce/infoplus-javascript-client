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
    instance = new infoplus.ReplenishmentProcess();
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

  describe('ReplenishmentProcess', function() {
    it('should create an instance of ReplenishmentProcess', function() {
      // uncomment below and update the code to test ReplenishmentProcess
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be.a(infoplus.ReplenishmentProcess);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property replenishmentPlanId (base name: "replenishmentPlanId")', function() {
      // uncomment below and update the code to test the property replenishmentPlanId
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property estimatedWork (base name: "estimatedWork")', function() {
      // uncomment below and update the code to test the property estimatedWork
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property workBatchId (base name: "workBatchId")', function() {
      // uncomment below and update the code to test the property workBatchId
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ReplenishmentProcess();
      //expect(instance).to.be();
    });

  });

}));
