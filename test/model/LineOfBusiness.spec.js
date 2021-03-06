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
    instance = new infoplus.LineOfBusiness();
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

  describe('LineOfBusiness', function() {
    it('should create an instance of LineOfBusiness', function() {
      // uncomment below and update the code to test LineOfBusiness
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be.a(infoplus.LineOfBusiness);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property defaultWarehouseServiceTypeId (base name: "defaultWarehouseServiceTypeId")', function() {
      // uncomment below and update the code to test the property defaultWarehouseServiceTypeId
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property defaultSLAServiceDays (base name: "defaultSLAServiceDays")', function() {
      // uncomment below and update the code to test the property defaultSLAServiceDays
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property defaultSLACutoffTime (base name: "defaultSLACutoffTime")', function() {
      // uncomment below and update the code to test the property defaultSLACutoffTime
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property onHold (base name: "onHold")', function() {
      // uncomment below and update the code to test the property onHold
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property onHoldReason (base name: "onHoldReason")', function() {
      // uncomment below and update the code to test the property onHoldReason
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property gs1CompanyPrefix (base name: "gs1CompanyPrefix")', function() {
      // uncomment below and update the code to test the property gs1CompanyPrefix
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.LineOfBusiness();
      //expect(instance).to.be();
    });

  });

}));
