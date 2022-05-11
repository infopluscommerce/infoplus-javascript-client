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
    instance = new infoplus.PerpetualInventoryLog();
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

  describe('PerpetualInventoryLog', function() {
    it('should create an instance of PerpetualInventoryLog', function() {
      // uncomment below and update the code to test PerpetualInventoryLog
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be.a(infoplus.PerpetualInventoryLog);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemReceiptLocationId (base name: "itemReceiptLocationId")', function() {
      // uncomment below and update the code to test the property itemReceiptLocationId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemReceiptId (base name: "itemReceiptId")', function() {
      // uncomment below and update the code to test the property itemReceiptId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property asnId (base name: "asnId")', function() {
      // uncomment below and update the code to test the property asnId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property legacyPoNo (base name: "legacyPoNo")', function() {
      // uncomment below and update the code to test the property legacyPoNo
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property currentQuantity (base name: "currentQuantity")', function() {
      // uncomment below and update the code to test the property currentQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property outstandingPickQuantity (base name: "outstandingPickQuantity")', function() {
      // uncomment below and update the code to test the property outstandingPickQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationId (base name: "warehouseLocationId")', function() {
      // uncomment below and update the code to test the property warehouseLocationId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property locationStatus (base name: "locationStatus")', function() {
      // uncomment below and update the code to test the property locationStatus
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "orderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receiptStatus (base name: "receiptStatus")', function() {
      // uncomment below and update the code to test the property receiptStatus
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property factCost (base name: "factCost")', function() {
      // uncomment below and update the code to test the property factCost
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property mlCost (base name: "mlCost")', function() {
      // uncomment below and update the code to test the property mlCost
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property orderQuantity (base name: "orderQuantity")', function() {
      // uncomment below and update the code to test the property orderQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property requestedDeliveryDate (base name: "requestedDeliveryDate")', function() {
      // uncomment below and update the code to test the property requestedDeliveryDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property unitCode (base name: "unitCode")', function() {
      // uncomment below and update the code to test the property unitCode
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property wrapCode (base name: "wrapCode")', function() {
      // uncomment below and update the code to test the property wrapCode
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property unitsPerWrap (base name: "unitsPerWrap")', function() {
      // uncomment below and update the code to test the property unitsPerWrap
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property sell (base name: "sell")', function() {
      // uncomment below and update the code to test the property sell
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property pricingPer (base name: "pricingPer")', function() {
      // uncomment below and update the code to test the property pricingPer
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property maxFreight (base name: "maxFreight")', function() {
      // uncomment below and update the code to test the property maxFreight
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property chargeFreight (base name: "chargeFreight")', function() {
      // uncomment below and update the code to test the property chargeFreight
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property maxOther (base name: "maxOther")', function() {
      // uncomment below and update the code to test the property maxOther
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property distDate (base name: "distDate")', function() {
      // uncomment below and update the code to test the property distDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property voidDate (base name: "voidDate")', function() {
      // uncomment below and update the code to test the property voidDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property freezeAction (base name: "freezeAction")', function() {
      // uncomment below and update the code to test the property freezeAction
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property revDate (base name: "revDate")', function() {
      // uncomment below and update the code to test the property revDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property artBack (base name: "artBack")', function() {
      // uncomment below and update the code to test the property artBack
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property sample (base name: "sample")', function() {
      // uncomment below and update the code to test the property sample
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property sampleTo (base name: "sampleTo")', function() {
      // uncomment below and update the code to test the property sampleTo
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property maxOvers (base name: "maxOvers")', function() {
      // uncomment below and update the code to test the property maxOvers
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property maxUnders (base name: "maxUnders")', function() {
      // uncomment below and update the code to test the property maxUnders
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receivedSfp (base name: "receivedSfp")', function() {
      // uncomment below and update the code to test the property receivedSfp
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property budgetCode (base name: "budgetCode")', function() {
      // uncomment below and update the code to test the property budgetCode
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property accountingCode (base name: "accountingCode")', function() {
      // uncomment below and update the code to test the property accountingCode
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property taxExempt (base name: "taxExempt")', function() {
      // uncomment below and update the code to test the property taxExempt
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property capitalize (base name: "capitalize")', function() {
      // uncomment below and update the code to test the property capitalize
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property accrual (base name: "accrual")', function() {
      // uncomment below and update the code to test the property accrual
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property oddQuantity (base name: "oddQuantity")', function() {
      // uncomment below and update the code to test the property oddQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property freightCost (base name: "freightCost")', function() {
      // uncomment below and update the code to test the property freightCost
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receivedDate (base name: "receivedDate")', function() {
      // uncomment below and update the code to test the property receivedDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receivedQuantity (base name: "receivedQuantity")', function() {
      // uncomment below and update the code to test the property receivedQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property fromProd (base name: "fromProd")', function() {
      // uncomment below and update the code to test the property fromProd
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property sfpComplete (base name: "sfpComplete")', function() {
      // uncomment below and update the code to test the property sfpComplete
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property endQuantity (base name: "endQuantity")', function() {
      // uncomment below and update the code to test the property endQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property endVal (base name: "endVal")', function() {
      // uncomment below and update the code to test the property endVal
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property endFact (base name: "endFact")', function() {
      // uncomment below and update the code to test the property endFact
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property interimQuantity (base name: "interimQuantity")', function() {
      // uncomment below and update the code to test the property interimQuantity
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property interimVal (base name: "interimVal")', function() {
      // uncomment below and update the code to test the property interimVal
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property interimFact (base name: "interimFact")', function() {
      // uncomment below and update the code to test the property interimFact
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property lastAct (base name: "lastAct")', function() {
      // uncomment below and update the code to test the property lastAct
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property weightPerWrap (base name: "weightPerWrap")', function() {
      // uncomment below and update the code to test the property weightPerWrap
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property norcs (base name: "norcs")', function() {
      // uncomment below and update the code to test the property norcs
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendorId")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property bsVendor (base name: "bsVendor")', function() {
      // uncomment below and update the code to test the property bsVendor
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property mlVendor (base name: "mlVendor")', function() {
      // uncomment below and update the code to test the property mlVendor
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receiptNo (base name: "receiptNo")', function() {
      // uncomment below and update the code to test the property receiptNo
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property paidFull (base name: "paidFull")', function() {
      // uncomment below and update the code to test the property paidFull
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property enteredBy (base name: "enteredBy")', function() {
      // uncomment below and update the code to test the property enteredBy
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property receivedBy (base name: "receivedBy")', function() {
      // uncomment below and update the code to test the property receivedBy
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property lineNo (base name: "lineNo")', function() {
      // uncomment below and update the code to test the property lineNo
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property prodLot (base name: "prodLot")', function() {
      // uncomment below and update the code to test the property prodLot
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property productIdTag (base name: "productIdTag")', function() {
      // uncomment below and update the code to test the property productIdTag
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property unitsPerCase (base name: "unitsPerCase")', function() {
      // uncomment below and update the code to test the property unitsPerCase
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property caseWeight (base name: "caseWeight")', function() {
      // uncomment below and update the code to test the property caseWeight
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property dockDate (base name: "dockDate")', function() {
      // uncomment below and update the code to test the property dockDate
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property impressions (base name: "impressions")', function() {
      // uncomment below and update the code to test the property impressions
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property asnLine (base name: "asnLine")', function() {
      // uncomment below and update the code to test the property asnLine
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemForwardLotMixingRule (base name: "itemForwardLotMixingRule")', function() {
      // uncomment below and update the code to test the property itemForwardLotMixingRule
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemStorageLotMixingRule (base name: "itemStorageLotMixingRule")', function() {
      // uncomment below and update the code to test the property itemStorageLotMixingRule
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemForwardItemMixingRule (base name: "itemForwardItemMixingRule")', function() {
      // uncomment below and update the code to test the property itemForwardItemMixingRule
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemStorageItemMixingRule (base name: "itemStorageItemMixingRule")', function() {
      // uncomment below and update the code to test the property itemStorageItemMixingRule
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemAllocationRule (base name: "itemAllocationRule")', function() {
      // uncomment below and update the code to test the property itemAllocationRule
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemBarcodeField (base name: "itemBarcodeField")', function() {
      // uncomment below and update the code to test the property itemBarcodeField
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemWarehouseDisplayField (base name: "itemWarehouseDisplayField")', function() {
      // uncomment below and update the code to test the property itemWarehouseDisplayField
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property itemProductIdTagSchemeId (base name: "itemProductIdTagSchemeId")', function() {
      // uncomment below and update the code to test the property itemProductIdTagSchemeId
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.PerpetualInventoryLog();
      //expect(instance).to.be();
    });

  });

}));
