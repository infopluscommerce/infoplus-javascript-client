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
    instance = new infoplus.PalletType();
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

  describe('PalletType', function() {
    it('should create an instance of PalletType', function() {
      // uncomment below and update the code to test PalletType
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be.a(infoplus.PalletType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property palletLengthIn (base name: "palletLengthIn")', function() {
      // uncomment below and update the code to test the property palletLengthIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property palletWidthIn (base name: "palletWidthIn")', function() {
      // uncomment below and update the code to test the property palletWidthIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property palletHeightIn (base name: "palletHeightIn")', function() {
      // uncomment below and update the code to test the property palletHeightIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property palletWeightLbs (base name: "palletWeightLbs")', function() {
      // uncomment below and update the code to test the property palletWeightLbs
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property packableLengthIn (base name: "packableLengthIn")', function() {
      // uncomment below and update the code to test the property packableLengthIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property packableWidthIn (base name: "packableWidthIn")', function() {
      // uncomment below and update the code to test the property packableWidthIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property packableHeightIn (base name: "packableHeightIn")', function() {
      // uncomment below and update the code to test the property packableHeightIn
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.PalletType();
      //expect(instance).to.be();
    });

  });

}));
