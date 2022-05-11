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
    instance = new infoplus.GetOrderPackDataOutput();
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

  describe('GetOrderPackDataOutput', function() {
    it('should create an instance of GetOrderPackDataOutput', function() {
      // uncomment below and update the code to test GetOrderPackDataOutput
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be.a(infoplus.GetOrderPackDataOutput);
    });

    it('should have the property orderNo (base name: "orderNo")', function() {
      // uncomment below and update the code to test the property orderNo
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property palletList (base name: "palletList")', function() {
      // uncomment below and update the code to test the property palletList
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property masterCartonList (base name: "masterCartonList")', function() {
      // uncomment below and update the code to test the property masterCartonList
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property cartonList (base name: "cartonList")', function() {
      // uncomment below and update the code to test the property cartonList
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property fullItemList (base name: "fullItemList")', function() {
      // uncomment below and update the code to test the property fullItemList
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property unpackedItemList (base name: "unpackedItemList")', function() {
      // uncomment below and update the code to test the property unpackedItemList
      //var instane = new infoplus.GetOrderPackDataOutput();
      //expect(instance).to.be();
    });

  });

}));
