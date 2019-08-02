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
    instance = new infoplus.OrderLoadProgramApi();
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

  describe('OrderLoadProgramApi', function() {
    describe('getOrderLoadProgramBySearchText', function() {
      it('should call getOrderLoadProgramBySearchText successfully', function(done) {
        //uncomment below and update the code to test getOrderLoadProgramBySearchText
        //instance.getOrderLoadProgramBySearchText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReqLoadProgramById', function() {
      it('should call getReqLoadProgramById successfully', function(done) {
        //uncomment below and update the code to test getReqLoadProgramById
        //instance.getReqLoadProgramById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));