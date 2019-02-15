# infoplus.WarehouseApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouseAudit**](WarehouseApi.md#addWarehouseAudit) | **PUT** /beta/warehouse/{warehouseId}/audit/{warehouseAudit} | Add new audit for a warehouse
[**addWarehouseTag**](WarehouseApi.md#addWarehouseTag) | **PUT** /beta/warehouse/{warehouseId}/tag/{warehouseTag} | Add new tags for a warehouse.
[**deleteWarehouseTag**](WarehouseApi.md#deleteWarehouseTag) | **DELETE** /beta/warehouse/{warehouseId}/tag/{warehouseTag} | Delete a tag for a warehouse.
[**getDuplicateWarehouseById**](WarehouseApi.md#getDuplicateWarehouseById) | **GET** /beta/warehouse/duplicate/{warehouseId} | Get a duplicated a warehouse by id
[**getWarehouseByFilter**](WarehouseApi.md#getWarehouseByFilter) | **GET** /beta/warehouse/search | Search warehouses by filter
[**getWarehouseById**](WarehouseApi.md#getWarehouseById) | **GET** /beta/warehouse/{warehouseId} | Get a warehouse by id
[**getWarehouseTags**](WarehouseApi.md#getWarehouseTags) | **GET** /beta/warehouse/{warehouseId}/tag | Get the tags for a warehouse.
[**updateWarehouse**](WarehouseApi.md#updateWarehouse) | **PUT** /beta/warehouse | Update a warehouse
[**updateWarehouseCustomFields**](WarehouseApi.md#updateWarehouseCustomFields) | **PUT** /beta/warehouse/customFields | Update a warehouse custom fields


<a name="addWarehouseAudit"></a>
# **addWarehouseAudit**
> addWarehouseAudit(warehouseId, warehouseAudit)

Add new audit for a warehouse

Adds an audit to an existing warehouse.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to add an audit to

var warehouseAudit = "warehouseAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseAudit(warehouseId, warehouseAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to add an audit to | 
 **warehouseAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addWarehouseTag"></a>
# **addWarehouseTag**
> addWarehouseTag(warehouseId, warehouseTag)

Add new tags for a warehouse.

Adds a tag to an existing warehouse.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to add a tag to

var warehouseTag = "warehouseTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseTag(warehouseId, warehouseTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to add a tag to | 
 **warehouseTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWarehouseTag"></a>
# **deleteWarehouseTag**
> deleteWarehouseTag(warehouseId, warehouseTag)

Delete a tag for a warehouse.

Deletes an existing warehouse tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to remove tag from

var warehouseTag = "warehouseTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseTag(warehouseId, warehouseTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to remove tag from | 
 **warehouseTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateWarehouseById"></a>
# **getDuplicateWarehouseById**
> Warehouse getDuplicateWarehouseById(warehouseId)

Get a duplicated a warehouse by id

Returns a duplicated warehouse identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateWarehouseById(warehouseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to be duplicated. | 

### Return type

[**Warehouse**](Warehouse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseByFilter"></a>
# **getWarehouseByFilter**
> [Warehouse] getWarehouseByFilter(opts)

Search warehouses by filter

Returns the list of warehouses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

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
apiInstance.getWarehouseByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Warehouse]**](Warehouse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseById"></a>
# **getWarehouseById**
> Warehouse getWarehouseById(warehouseId)

Get a warehouse by id

Returns the warehouse identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWarehouseById(warehouseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to be returned. | 

### Return type

[**Warehouse**](Warehouse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWarehouseTags"></a>
# **getWarehouseTags**
> getWarehouseTags(warehouseId)

Get the tags for a warehouse.

Get all existing warehouse tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var warehouseId = 56; // Number | Id of the warehouse to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseTags(warehouseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWarehouse"></a>
# **updateWarehouse**
> updateWarehouse(body)

Update a warehouse

Updates an existing warehouse using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var body = new infoplus.Warehouse(); // Warehouse | Warehouse to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWarehouse(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Warehouse**](Warehouse.md)| Warehouse to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWarehouseCustomFields"></a>
# **updateWarehouseCustomFields**
> updateWarehouseCustomFields(body)

Update a warehouse custom fields

Updates an existing warehouse custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.WarehouseApi();

var body = new infoplus.Warehouse(); // Warehouse | Warehouse to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWarehouseCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Warehouse**](Warehouse.md)| Warehouse to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

