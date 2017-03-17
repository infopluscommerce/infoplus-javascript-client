# infoplus.VendorApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVendor**](VendorApi.md#addVendor) | **POST** /beta/vendor | Create a vendor
[**addVendorAudit**](VendorApi.md#addVendorAudit) | **PUT** /beta/vendor/{vendorId}/audit/{vendorAudit} | Add new audit for a vendor
[**addVendorTag**](VendorApi.md#addVendorTag) | **PUT** /beta/vendor/{vendorId}/tag/{vendorTag} | Add new tags for a vendor.
[**deleteVendor**](VendorApi.md#deleteVendor) | **DELETE** /beta/vendor/{vendorId} | Delete a vendor
[**deleteVendorTag**](VendorApi.md#deleteVendorTag) | **DELETE** /beta/vendor/{vendorId}/tag/{vendorTag} | Delete a tag for a vendor.
[**getDuplicateVendorById**](VendorApi.md#getDuplicateVendorById) | **GET** /beta/vendor/duplicate/{vendorId} | Get a duplicated a vendor by id
[**getVendorByFilter**](VendorApi.md#getVendorByFilter) | **GET** /beta/vendor/search | Search vendors by filter
[**getVendorById**](VendorApi.md#getVendorById) | **GET** /beta/vendor/{vendorId} | Get a vendor by id
[**getVendorTags**](VendorApi.md#getVendorTags) | **GET** /beta/vendor/{vendorId}/tag | Get the tags for a vendor.
[**updateVendor**](VendorApi.md#updateVendor) | **PUT** /beta/vendor | Update a vendor
[**updateVendorCustomFields**](VendorApi.md#updateVendorCustomFields) | **PUT** /beta/vendor/customFields | Update a vendor custom fields


<a name="addVendor"></a>
# **addVendor**
> Vendor addVendor(body)

Create a vendor

Inserts a new vendor using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var body = new infoplus.Vendor(); // {Vendor} Vendor to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addVendor(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Vendor**](Vendor.md)| Vendor to be inserted. | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addVendorAudit"></a>
# **addVendorAudit**
> addVendorAudit(vendorId, vendorAudit)

Add new audit for a vendor

Adds an audit to an existing vendor.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to add an audit to

var vendorAudit = "vendorAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addVendorAudit(vendorId, vendorAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to add an audit to | 
 **vendorAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addVendorTag"></a>
# **addVendorTag**
> addVendorTag(vendorId, vendorTag)

Add new tags for a vendor.

Adds a tag to an existing vendor.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to add a tag to

var vendorTag = "vendorTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addVendorTag(vendorId, vendorTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to add a tag to | 
 **vendorTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVendor"></a>
# **deleteVendor**
> deleteVendor(vendorId)

Delete a vendor

Deletes the vendor identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteVendor(vendorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteVendorTag"></a>
# **deleteVendorTag**
> deleteVendorTag(vendorId, vendorTag)

Delete a tag for a vendor.

Deletes an existing vendor tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to remove tag from

var vendorTag = "vendorTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteVendorTag(vendorId, vendorTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to remove tag from | 
 **vendorTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateVendorById"></a>
# **getDuplicateVendorById**
> Vendor getDuplicateVendorById(vendorId)

Get a duplicated a vendor by id

Returns a duplicated vendor identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateVendorById(vendorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to be duplicated. | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorByFilter"></a>
# **getVendorByFilter**
> [Vendor] getVendorByFilter(opts)

Search vendors by filter

Returns the list of vendors that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getVendorByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Vendor]**](Vendor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorById"></a>
# **getVendorById**
> Vendor getVendorById(vendorId)

Get a vendor by id

Returns the vendor identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getVendorById(vendorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to be returned. | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorTags"></a>
# **getVendorTags**
> getVendorTags(vendorId)

Get the tags for a vendor.

Get all existing vendor tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var vendorId = 56; // {Integer} Id of the vendor to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getVendorTags(vendorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Integer**| Id of the vendor to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVendor"></a>
# **updateVendor**
> updateVendor(body)

Update a vendor

Updates an existing vendor using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var body = new infoplus.Vendor(); // {Vendor} Vendor to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateVendor(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Vendor**](Vendor.md)| Vendor to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVendorCustomFields"></a>
# **updateVendorCustomFields**
> updateVendorCustomFields(body)

Update a vendor custom fields

Updates an existing vendor custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.VendorApi()

var body = new infoplus.Vendor(); // {Vendor} Vendor to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateVendorCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Vendor**](Vendor.md)| Vendor to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

