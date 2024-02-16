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
    instance = new infoplus.WarehouseInventory();
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

  describe('WarehouseInventory', function() {
    it('should create an instance of WarehouseInventory', function() {
      // uncomment below and update the code to test WarehouseInventory
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be.a(infoplus.WarehouseInventory);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property onHandQuantity (base name: "onHandQuantity")', function() {
      // uncomment below and update the code to test the property onHandQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unavailableQuantity (base name: "unavailableQuantity")', function() {
      // uncomment below and update the code to test the property unavailableQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openPOQuantity (base name: "openPOQuantity")', function() {
      // uncomment below and update the code to test the property openPOQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openOrderQuantity (base name: "openOrderQuantity")', function() {
      // uncomment below and update the code to test the property openOrderQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantity (base name: "availableQuantity")', function() {
      // uncomment below and update the code to test the property availableQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property damagedQuantity (base name: "damagedQuantity")', function() {
      // uncomment below and update the code to test the property damagedQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property inFulfillmentProcessQuantity (base name: "inFulfillmentProcessQuantity")', function() {
      // uncomment below and update the code to test the property inFulfillmentProcessQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property orderableQuantity (base name: "orderableQuantity")', function() {
      // uncomment below and update the code to test the property orderableQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unallocatableQuantity (base name: "unallocatableQuantity")', function() {
      // uncomment below and update the code to test the property unallocatableQuantity
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property daysOnHand (base name: "daysOnHand")', function() {
      // uncomment below and update the code to test the property daysOnHand
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property stockStatus (base name: "stockStatus")', function() {
      // uncomment below and update the code to test the property stockStatus
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantityCases (base name: "availableQuantityCases")', function() {
      // uncomment below and update the code to test the property availableQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantityInnerPacks (base name: "availableQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property availableQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantityPallets (base name: "availableQuantityPallets")', function() {
      // uncomment below and update the code to test the property availableQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property damagedQuantityCases (base name: "damagedQuantityCases")', function() {
      // uncomment below and update the code to test the property damagedQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property damagedQuantityInnerPacks (base name: "damagedQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property damagedQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property damagedQuantityPallets (base name: "damagedQuantityPallets")', function() {
      // uncomment below and update the code to test the property damagedQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property inFulfillmentProcessQuantityCases (base name: "inFulfillmentProcessQuantityCases")', function() {
      // uncomment below and update the code to test the property inFulfillmentProcessQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property inFulfillmentProcessQuantityInnerPacks (base name: "inFulfillmentProcessQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property inFulfillmentProcessQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property inFulfillmentProcessQuantityPallets (base name: "inFulfillmentProcessQuantityPallets")', function() {
      // uncomment below and update the code to test the property inFulfillmentProcessQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property onHandQuantityCases (base name: "onHandQuantityCases")', function() {
      // uncomment below and update the code to test the property onHandQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property onHandQuantityInnerPacks (base name: "onHandQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property onHandQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property onHandQuantityPallets (base name: "onHandQuantityPallets")', function() {
      // uncomment below and update the code to test the property onHandQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openOrderQuantityCases (base name: "openOrderQuantityCases")', function() {
      // uncomment below and update the code to test the property openOrderQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openOrderQuantityInnerPacks (base name: "openOrderQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property openOrderQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openOrderQuantityPallets (base name: "openOrderQuantityPallets")', function() {
      // uncomment below and update the code to test the property openOrderQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openPOQuantityCases (base name: "openPOQuantityCases")', function() {
      // uncomment below and update the code to test the property openPOQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openPOQuantityInnerPacks (base name: "openPOQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property openPOQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property openPOQuantityPallets (base name: "openPOQuantityPallets")', function() {
      // uncomment below and update the code to test the property openPOQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property orderableQuantityCases (base name: "orderableQuantityCases")', function() {
      // uncomment below and update the code to test the property orderableQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property orderableQuantityInnerPacks (base name: "orderableQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property orderableQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property orderableQuantityPallets (base name: "orderableQuantityPallets")', function() {
      // uncomment below and update the code to test the property orderableQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unallocatableQuantityCases (base name: "unallocatableQuantityCases")', function() {
      // uncomment below and update the code to test the property unallocatableQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unallocatableQuantityInnerPacks (base name: "unallocatableQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property unallocatableQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unallocatableQuantityPallets (base name: "unallocatableQuantityPallets")', function() {
      // uncomment below and update the code to test the property unallocatableQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unavailableQuantityCases (base name: "unavailableQuantityCases")', function() {
      // uncomment below and update the code to test the property unavailableQuantityCases
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unavailableQuantityInnerPacks (base name: "unavailableQuantityInnerPacks")', function() {
      // uncomment below and update the code to test the property unavailableQuantityInnerPacks
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property unavailableQuantityPallets (base name: "unavailableQuantityPallets")', function() {
      // uncomment below and update the code to test the property unavailableQuantityPallets
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property totalDemand (base name: "totalDemand")', function() {
      // uncomment below and update the code to test the property totalDemand
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property nextRequestDeliveryDate (base name: "nextRequestDeliveryDate")', function() {
      // uncomment below and update the code to test the property nextRequestDeliveryDate
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.WarehouseInventory();
      //expect(instance).to.be();
    });

  });

}));