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
    instance = new infoplus.FinanceSystemConnection();
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

  describe('FinanceSystemConnection', function() {
    it('should create an instance of FinanceSystemConnection', function() {
      // uncomment below and update the code to test FinanceSystemConnection
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be.a(infoplus.FinanceSystemConnection);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property financeSystemConnectionType (base name: "financeSystemConnectionType")', function() {
      // uncomment below and update the code to test the property financeSystemConnectionType
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property orderSourceId (base name: "orderSourceId")', function() {
      // uncomment below and update the code to test the property orderSourceId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property integrationPartnerId (base name: "integrationPartnerId")', function() {
      // uncomment below and update the code to test the property integrationPartnerId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property infoplusSKUFieldToMap (base name: "infoplusSKUFieldToMap")', function() {
      // uncomment below and update the code to test the property infoplusSKUFieldToMap
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property financeSystemSKUFieldToMap (base name: "financeSystemSKUFieldToMap")', function() {
      // uncomment below and update the code to test the property financeSystemSKUFieldToMap
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property scriptId (base name: "scriptId")', function() {
      // uncomment below and update the code to test the property scriptId
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.FinanceSystemConnection();
      //expect(instance).to.be();
    });

  });

}));
