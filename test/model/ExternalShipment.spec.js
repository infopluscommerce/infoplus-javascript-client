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
    instance = new infoplus.ExternalShipment();
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

  describe('ExternalShipment', function() {
    it('should create an instance of ExternalShipment', function() {
      // uncomment below and update the code to test ExternalShipment
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be.a(infoplus.ExternalShipment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrierId")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property parcelAccountId (base name: "parcelAccountId")', function() {
      // uncomment below and update the code to test the property parcelAccountId
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartyParcelAccountId (base name: "thirdPartyParcelAccountId")', function() {
      // uncomment below and update the code to test the property thirdPartyParcelAccountId
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property freight (base name: "freight")', function() {
      // uncomment below and update the code to test the property freight
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property trackingNo (base name: "trackingNo")', function() {
      // uncomment below and update the code to test the property trackingNo
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property dim1In (base name: "dim1In")', function() {
      // uncomment below and update the code to test the property dim1In
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property dim2In (base name: "dim2In")', function() {
      // uncomment below and update the code to test the property dim2In
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property dim3In (base name: "dim3In")', function() {
      // uncomment below and update the code to test the property dim3In
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property weightLbs (base name: "weightLbs")', function() {
      // uncomment below and update the code to test the property weightLbs
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property dimWeight (base name: "dimWeight")', function() {
      // uncomment below and update the code to test the property dimWeight
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property residential (base name: "residential")', function() {
      // uncomment below and update the code to test the property residential
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property zone (base name: "zone")', function() {
      // uncomment below and update the code to test the property zone
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ExternalShipment();
      //expect(instance).to.be();
    });

  });

}));
