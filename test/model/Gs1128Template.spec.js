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
    instance = new infoplus.Gs1128Template();
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

  describe('Gs1128Template', function() {
    it('should create an instance of Gs1128Template', function() {
      // uncomment below and update the code to test Gs1128Template
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be.a(infoplus.Gs1128Template);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property templateWidthIn (base name: "templateWidthIn")', function() {
      // uncomment below and update the code to test the property templateWidthIn
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property templateHeightIn (base name: "templateHeightIn")', function() {
      // uncomment below and update the code to test the property templateHeightIn
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property scriptId (base name: "scriptId")', function() {
      // uncomment below and update the code to test the property scriptId
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1Active (base name: "row1Active")', function() {
      // uncomment below and update the code to test the property row1Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1RightColumnActive (base name: "row1RightColumnActive")', function() {
      // uncomment below and update the code to test the property row1RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1Height (base name: "row1Height")', function() {
      // uncomment below and update the code to test the property row1Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1Width (base name: "row1Width")', function() {
      // uncomment below and update the code to test the property row1Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1ContentLeft (base name: "row1ContentLeft")', function() {
      // uncomment below and update the code to test the property row1ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row1ContentRight (base name: "row1ContentRight")', function() {
      // uncomment below and update the code to test the property row1ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2Active (base name: "row2Active")', function() {
      // uncomment below and update the code to test the property row2Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2RightColumnActive (base name: "row2RightColumnActive")', function() {
      // uncomment below and update the code to test the property row2RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2Height (base name: "row2Height")', function() {
      // uncomment below and update the code to test the property row2Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2Width (base name: "row2Width")', function() {
      // uncomment below and update the code to test the property row2Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2ContentLeft (base name: "row2ContentLeft")', function() {
      // uncomment below and update the code to test the property row2ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row2ContentRight (base name: "row2ContentRight")', function() {
      // uncomment below and update the code to test the property row2ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3Active (base name: "row3Active")', function() {
      // uncomment below and update the code to test the property row3Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3RightColumnActive (base name: "row3RightColumnActive")', function() {
      // uncomment below and update the code to test the property row3RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3Height (base name: "row3Height")', function() {
      // uncomment below and update the code to test the property row3Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3Width (base name: "row3Width")', function() {
      // uncomment below and update the code to test the property row3Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3ContentLeft (base name: "row3ContentLeft")', function() {
      // uncomment below and update the code to test the property row3ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row3ContentRight (base name: "row3ContentRight")', function() {
      // uncomment below and update the code to test the property row3ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4Active (base name: "row4Active")', function() {
      // uncomment below and update the code to test the property row4Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4RightColumnActive (base name: "row4RightColumnActive")', function() {
      // uncomment below and update the code to test the property row4RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4Height (base name: "row4Height")', function() {
      // uncomment below and update the code to test the property row4Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4Width (base name: "row4Width")', function() {
      // uncomment below and update the code to test the property row4Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4ContentLeft (base name: "row4ContentLeft")', function() {
      // uncomment below and update the code to test the property row4ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row4ContentRight (base name: "row4ContentRight")', function() {
      // uncomment below and update the code to test the property row4ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5Active (base name: "row5Active")', function() {
      // uncomment below and update the code to test the property row5Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5RightColumnActive (base name: "row5RightColumnActive")', function() {
      // uncomment below and update the code to test the property row5RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5Height (base name: "row5Height")', function() {
      // uncomment below and update the code to test the property row5Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5Width (base name: "row5Width")', function() {
      // uncomment below and update the code to test the property row5Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5ContentLeft (base name: "row5ContentLeft")', function() {
      // uncomment below and update the code to test the property row5ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row5ContentRight (base name: "row5ContentRight")', function() {
      // uncomment below and update the code to test the property row5ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6Active (base name: "row6Active")', function() {
      // uncomment below and update the code to test the property row6Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6RightColumnActive (base name: "row6RightColumnActive")', function() {
      // uncomment below and update the code to test the property row6RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6Height (base name: "row6Height")', function() {
      // uncomment below and update the code to test the property row6Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6Width (base name: "row6Width")', function() {
      // uncomment below and update the code to test the property row6Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6ContentLeft (base name: "row6ContentLeft")', function() {
      // uncomment below and update the code to test the property row6ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row6ContentRight (base name: "row6ContentRight")', function() {
      // uncomment below and update the code to test the property row6ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7Active (base name: "row7Active")', function() {
      // uncomment below and update the code to test the property row7Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7RightColumnActive (base name: "row7RightColumnActive")', function() {
      // uncomment below and update the code to test the property row7RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7Height (base name: "row7Height")', function() {
      // uncomment below and update the code to test the property row7Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7Width (base name: "row7Width")', function() {
      // uncomment below and update the code to test the property row7Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7ContentLeft (base name: "row7ContentLeft")', function() {
      // uncomment below and update the code to test the property row7ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row7ContentRight (base name: "row7ContentRight")', function() {
      // uncomment below and update the code to test the property row7ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8Active (base name: "row8Active")', function() {
      // uncomment below and update the code to test the property row8Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8RightColumnActive (base name: "row8RightColumnActive")', function() {
      // uncomment below and update the code to test the property row8RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8Height (base name: "row8Height")', function() {
      // uncomment below and update the code to test the property row8Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8Width (base name: "row8Width")', function() {
      // uncomment below and update the code to test the property row8Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8ContentLeft (base name: "row8ContentLeft")', function() {
      // uncomment below and update the code to test the property row8ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row8ContentRight (base name: "row8ContentRight")', function() {
      // uncomment below and update the code to test the property row8ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9Active (base name: "row9Active")', function() {
      // uncomment below and update the code to test the property row9Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9RightColumnActive (base name: "row9RightColumnActive")', function() {
      // uncomment below and update the code to test the property row9RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9Height (base name: "row9Height")', function() {
      // uncomment below and update the code to test the property row9Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9Width (base name: "row9Width")', function() {
      // uncomment below and update the code to test the property row9Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9ContentLeft (base name: "row9ContentLeft")', function() {
      // uncomment below and update the code to test the property row9ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row9ContentRight (base name: "row9ContentRight")', function() {
      // uncomment below and update the code to test the property row9ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10Active (base name: "row10Active")', function() {
      // uncomment below and update the code to test the property row10Active
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10RightColumnActive (base name: "row10RightColumnActive")', function() {
      // uncomment below and update the code to test the property row10RightColumnActive
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10Height (base name: "row10Height")', function() {
      // uncomment below and update the code to test the property row10Height
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10Width (base name: "row10Width")', function() {
      // uncomment below and update the code to test the property row10Width
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10ContentLeft (base name: "row10ContentLeft")', function() {
      // uncomment below and update the code to test the property row10ContentLeft
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property row10ContentRight (base name: "row10ContentRight")', function() {
      // uncomment below and update the code to test the property row10ContentRight
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Gs1128Template();
      //expect(instance).to.be();
    });

  });

}));