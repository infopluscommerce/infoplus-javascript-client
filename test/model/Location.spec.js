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
    instance = new infoplus.Location();
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

  describe('Location', function() {
    it('should create an instance of Location', function() {
      // uncomment below and update the code to test Location
      //var instane = new infoplus.Location();
      //expect(instance).to.be.a(infoplus.Location);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property buildingId (base name: "buildingId")', function() {
      // uncomment below and update the code to test the property buildingId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property zoneId (base name: "zoneId")', function() {
      // uncomment below and update the code to test the property zoneId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property aisleId (base name: "aisleId")', function() {
      // uncomment below and update the code to test the property aisleId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property billingTypeId (base name: "billingTypeId")', function() {
      // uncomment below and update the code to test the property billingTypeId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property behaviorType (base name: "behaviorType")', function() {
      // uncomment below and update the code to test the property behaviorType
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property footprintId (base name: "footprintId")', function() {
      // uncomment below and update the code to test the property footprintId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property addressSchemeId (base name: "addressSchemeId")', function() {
      // uncomment below and update the code to test the property addressSchemeId
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property bay (base name: "bay")', function() {
      // uncomment below and update the code to test the property bay
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property online (base name: "online")', function() {
      // uncomment below and update the code to test the property online
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property priorityCode (base name: "priorityCode")', function() {
      // uncomment below and update the code to test the property priorityCode
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property allowItemMixing (base name: "allowItemMixing")', function() {
      // uncomment below and update the code to test the property allowItemMixing
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Location();
      //expect(instance).to.be();
    });

  });

}));
