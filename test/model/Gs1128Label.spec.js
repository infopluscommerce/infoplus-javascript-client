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
    instance = new infoplus.Gs1128Label();
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

  describe('Gs1128Label', function() {
    it('should create an instance of Gs1128Label', function() {
      // uncomment below and update the code to test Gs1128Label
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be.a(infoplus.Gs1128Label);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property sscc (base name: "sscc")', function() {
      // uncomment below and update the code to test the property sscc
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property orderNo (base name: "orderNo")', function() {
      // uncomment below and update the code to test the property orderNo
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property gs1128TemplateId (base name: "gs1128TemplateId")', function() {
      // uncomment below and update the code to test the property gs1128TemplateId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property noOfCopies (base name: "noOfCopies")', function() {
      // uncomment below and update the code to test the property noOfCopies
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property recordType (base name: "recordType")', function() {
      // uncomment below and update the code to test the property recordType
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property palletLoadId (base name: "palletLoadId")', function() {
      // uncomment below and update the code to test the property palletLoadId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property masterCartonLoadId (base name: "masterCartonLoadId")', function() {
      // uncomment below and update the code to test the property masterCartonLoadId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property cartonId (base name: "cartonId")', function() {
      // uncomment below and update the code to test the property cartonId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property lineItemId (base name: "lineItemId")', function() {
      // uncomment below and update the code to test the property lineItemId
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property lineItemUnitNo (base name: "lineItemUnitNo")', function() {
      // uncomment below and update the code to test the property lineItemUnitNo
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Gs1128Label();
      //expect(instance).to.be();
    });

  });

}));