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
    instance = new infoplus.LocationApi();
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

  describe('LocationApi', function() {
    describe('addLocation', function() {
      it('should call addLocation successfully', function(done) {
        //uncomment below and update the code to test addLocation
        //instance.addLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLocationAudit', function() {
      it('should call addLocationAudit successfully', function(done) {
        //uncomment below and update the code to test addLocationAudit
        //instance.addLocationAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLocationFile', function() {
      it('should call addLocationFile successfully', function(done) {
        //uncomment below and update the code to test addLocationFile
        //instance.addLocationFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLocationFileByURL', function() {
      it('should call addLocationFileByURL successfully', function(done) {
        //uncomment below and update the code to test addLocationFileByURL
        //instance.addLocationFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addLocationTag', function() {
      it('should call addLocationTag successfully', function(done) {
        //uncomment below and update the code to test addLocationTag
        //instance.addLocationTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLocation', function() {
      it('should call deleteLocation successfully', function(done) {
        //uncomment below and update the code to test deleteLocation
        //instance.deleteLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLocationFile', function() {
      it('should call deleteLocationFile successfully', function(done) {
        //uncomment below and update the code to test deleteLocationFile
        //instance.deleteLocationFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLocationTag', function() {
      it('should call deleteLocationTag successfully', function(done) {
        //uncomment below and update the code to test deleteLocationTag
        //instance.deleteLocationTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateLocationById', function() {
      it('should call getDuplicateLocationById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateLocationById
        //instance.getDuplicateLocationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLocationByFilter', function() {
      it('should call getLocationByFilter successfully', function(done) {
        //uncomment below and update the code to test getLocationByFilter
        //instance.getLocationByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLocationById', function() {
      it('should call getLocationById successfully', function(done) {
        //uncomment below and update the code to test getLocationById
        //instance.getLocationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLocationFiles', function() {
      it('should call getLocationFiles successfully', function(done) {
        //uncomment below and update the code to test getLocationFiles
        //instance.getLocationFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLocationTags', function() {
      it('should call getLocationTags successfully', function(done) {
        //uncomment below and update the code to test getLocationTags
        //instance.getLocationTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLocation', function() {
      it('should call updateLocation successfully', function(done) {
        //uncomment below and update the code to test updateLocation
        //instance.updateLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLocationCustomFields', function() {
      it('should call updateLocationCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateLocationCustomFields
        //instance.updateLocationCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
