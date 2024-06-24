# infoplus.ShipmentApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addShipmentAudit**](ShipmentApi.md#addShipmentAudit) | **PUT** /beta/shipment/{shipmentId}/audit/{shipmentAudit} | Add new audit for a shipment
[**addShipmentFile**](ShipmentApi.md#addShipmentFile) | **POST** /beta/shipment/{shipmentId}/file/{fileName} | Attach a file to a shipment
[**addShipmentFileByURL**](ShipmentApi.md#addShipmentFileByURL) | **POST** /beta/shipment/{shipmentId}/file | Attach a file to a shipment by URL.
[**addShipmentTag**](ShipmentApi.md#addShipmentTag) | **PUT** /beta/shipment/{shipmentId}/tag/{shipmentTag} | Add new tags for a shipment.
[**deleteShipmentFile**](ShipmentApi.md#deleteShipmentFile) | **DELETE** /beta/shipment/{shipmentId}/file/{fileId} | Delete a file for a shipment.
[**deleteShipmentTag**](ShipmentApi.md#deleteShipmentTag) | **DELETE** /beta/shipment/{shipmentId}/tag/{shipmentTag} | Delete a tag for a shipment.
[**getDuplicateShipmentById**](ShipmentApi.md#getDuplicateShipmentById) | **GET** /beta/shipment/duplicate/{shipmentId} | Get a duplicated a shipment by id
[**getShipmentByFilter**](ShipmentApi.md#getShipmentByFilter) | **GET** /beta/shipment/search | Search shipments by filter
[**getShipmentById**](ShipmentApi.md#getShipmentById) | **GET** /beta/shipment/{shipmentId} | Get a shipment by id
[**getShipmentFiles**](ShipmentApi.md#getShipmentFiles) | **GET** /beta/shipment/{shipmentId}/file | Get the files for a shipment.
[**getShipmentTags**](ShipmentApi.md#getShipmentTags) | **GET** /beta/shipment/{shipmentId}/tag | Get the tags for a shipment.
[**updateShipmentCustomFields**](ShipmentApi.md#updateShipmentCustomFields) | **PUT** /beta/shipment/customFields | Update a shipment custom fields


<a name="addShipmentAudit"></a>
# **addShipmentAudit**
> addShipmentAudit(shipmentId, shipmentAudit)

Add new audit for a shipment

Adds an audit to an existing shipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to add an audit to

var shipmentAudit = "shipmentAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShipmentAudit(shipmentId, shipmentAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to add an audit to | 
 **shipmentAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addShipmentFile"></a>
# **addShipmentFile**
> addShipmentFile(shipmentId, fileName)

Attach a file to a shipment

Adds a file to an existing shipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShipmentFile(shipmentId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addShipmentFileByURL"></a>
# **addShipmentFileByURL**
> addShipmentFileByURL(body, shipmentId)

Attach a file to a shipment by URL.

Adds a file to an existing shipment by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var shipmentId = 56; // Number | Id of the shipment to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShipmentFileByURL(body, shipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **shipmentId** | **Number**| Id of the shipment to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addShipmentTag"></a>
# **addShipmentTag**
> addShipmentTag(shipmentId, shipmentTag)

Add new tags for a shipment.

Adds a tag to an existing shipment.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to add a tag to

var shipmentTag = "shipmentTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShipmentTag(shipmentId, shipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to add a tag to | 
 **shipmentTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShipmentFile"></a>
# **deleteShipmentFile**
> deleteShipmentFile(shipmentId, fileId)

Delete a file for a shipment.

Deletes an existing shipment file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShipmentFile(shipmentId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteShipmentTag"></a>
# **deleteShipmentTag**
> deleteShipmentTag(shipmentId, shipmentTag)

Delete a tag for a shipment.

Deletes an existing shipment tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to remove tag from

var shipmentTag = "shipmentTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShipmentTag(shipmentId, shipmentTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to remove tag from | 
 **shipmentTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateShipmentById"></a>
# **getDuplicateShipmentById**
> Shipment getDuplicateShipmentById(shipmentId)

Get a duplicated a shipment by id

Returns a duplicated shipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateShipmentById(shipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to be duplicated. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentByFilter"></a>
# **getShipmentByFilter**
> [Shipment] getShipmentByFilter(opts)

Search shipments by filter

Returns the list of shipments that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var opts = { 
  'filter': "filter_example", // String | Query string, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56, // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // String | Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShipmentByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Shipment]**](Shipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentById"></a>
# **getShipmentById**
> Shipment getShipmentById(shipmentId)

Get a shipment by id

Returns the shipment identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShipmentById(shipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to be returned. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentFiles"></a>
# **getShipmentFiles**
> getShipmentFiles(shipmentId)

Get the files for a shipment.

Get all existing shipment files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getShipmentFiles(shipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentTags"></a>
# **getShipmentTags**
> getShipmentTags(shipmentId)

Get the tags for a shipment.

Get all existing shipment tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var shipmentId = 56; // Number | Id of the shipment to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getShipmentTags(shipmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **Number**| Id of the shipment to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateShipmentCustomFields"></a>
# **updateShipmentCustomFields**
> updateShipmentCustomFields(body)

Update a shipment custom fields

Updates an existing shipment custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShipmentApi();

var body = new infoplus.Shipment(); // Shipment | Shipment to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateShipmentCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Shipment**](Shipment.md)| Shipment to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

