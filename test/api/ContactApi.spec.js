/**
 * KCrud
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KCrud);
  }
}(this, function(expect, KCrud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KCrud.ContactApi();
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

  describe('ContactApi', function() {
    describe('contactGet', function() {
      it('should call contactGet successfully', function(done) {
        //uncomment below and update the code to test contactGet
        //instance.contactGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactIdDelete', function() {
      it('should call contactIdDelete successfully', function(done) {
        //uncomment below and update the code to test contactIdDelete
        //instance.contactIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactIdGet', function() {
      it('should call contactIdGet successfully', function(done) {
        //uncomment below and update the code to test contactIdGet
        //instance.contactIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactIdPut', function() {
      it('should call contactIdPut successfully', function(done) {
        //uncomment below and update the code to test contactIdPut
        //instance.contactIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactPost', function() {
      it('should call contactPost successfully', function(done) {
        //uncomment below and update the code to test contactPost
        //instance.contactPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
