# infoplus.WarehouseApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWarehouse**](WarehouseApi.md#addWarehouse) | **POST** /v3.0/warehouse | Create a warehouse
[**addWarehouseAudit**](WarehouseApi.md#addWarehouseAudit) | **PUT** /v3.0/warehouse/{warehouseId}/audit/{warehouseAudit} | Add new audit for a warehouse
[**addWarehouseFile**](WarehouseApi.md#addWarehouseFile) | **POST** /v3.0/warehouse/{warehouseId}/file/{fileName} | Attach a file to a warehouse
[**addWarehouseFileByURL**](WarehouseApi.md#addWarehouseFileByURL) | **POST** /v3.0/warehouse/{warehouseId}/file | Attach a file to a warehouse by URL.
[**addWarehouseTag**](WarehouseApi.md#addWarehouseTag) | **PUT** /v3.0/warehouse/{warehouseId}/tag/{warehouseTag} | Add new tags for a warehouse.
[**deleteWarehouseFile**](WarehouseApi.md#deleteWarehouseFile) | **DELETE** /v3.0/warehouse/{warehouseId}/file/{fileId} | Delete a file for a warehouse.
[**deleteWarehouseTag**](WarehouseApi.md#deleteWarehouseTag) | **DELETE** /v3.0/warehouse/{warehouseId}/tag/{warehouseTag} | Delete a tag for a warehouse.
[**getDuplicateWarehouseById**](WarehouseApi.md#getDuplicateWarehouseById) | **GET** /v3.0/warehouse/duplicate/{warehouseId} | Get a duplicated a warehouse by id
[**getWarehouseByFilter**](WarehouseApi.md#getWarehouseByFilter) | **GET** /v3.0/warehouse/search | Search warehouses by filter
[**getWarehouseById**](WarehouseApi.md#getWarehouseById) | **GET** /v3.0/warehouse/{warehouseId} | Get a warehouse by id
[**getWarehouseFiles**](WarehouseApi.md#getWarehouseFiles) | **GET** /v3.0/warehouse/{warehouseId}/file | Get the files for a warehouse.
[**getWarehouseTags**](WarehouseApi.md#getWarehouseTags) | **GET** /v3.0/warehouse/{warehouseId}/tag | Get the tags for a warehouse.
[**updateWarehouse**](WarehouseApi.md#updateWarehouse) | **PUT** /v3.0/warehouse | Update a warehouse
[**updateWarehouseCustomFields**](WarehouseApi.md#updateWarehouseCustomFields) | **PUT** /v3.0/warehouse/customFields | Update a warehouse custom fields


<a name="addWarehouse"></a>
# **addWarehouse**
> Warehouse addWarehouse(body)

Create a warehouse

Inserts a new warehouse using the specified data.

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

var body = new infoplus.Warehouse(); // Warehouse | Warehouse to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addWarehouse(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Warehouse**](Warehouse.md)| Warehouse to be inserted. | 

### Return type

[**Warehouse**](Warehouse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

<a name="addWarehouseFile"></a>
# **addWarehouseFile**
> addWarehouseFile(warehouseId, fileName)

Attach a file to a warehouse

Adds a file to an existing warehouse.

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

var warehouseId = 56; // Number | Id of the warehouse to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseFile(warehouseId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addWarehouseFileByURL"></a>
# **addWarehouseFileByURL**
> addWarehouseFileByURL(body, warehouseId)

Attach a file to a warehouse by URL.

Adds a file to an existing warehouse by URL.

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

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var warehouseId = 56; // Number | Id of the warehouse to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addWarehouseFileByURL(body, warehouseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **warehouseId** | **Number**| Id of the warehouse to add an file to | 

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

<a name="deleteWarehouseFile"></a>
# **deleteWarehouseFile**
> deleteWarehouseFile(warehouseId, fileId)

Delete a file for a warehouse.

Deletes an existing warehouse file using the specified data.

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

var warehouseId = 56; // Number | Id of the warehouse to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWarehouseFile(warehouseId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
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

<a name="getWarehouseFiles"></a>
# **getWarehouseFiles**
> getWarehouseFiles(warehouseId)

Get the files for a warehouse.

Get all existing warehouse files.

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

var warehouseId = 56; // Number | Id of the warehouse to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getWarehouseFiles(warehouseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **Number**| Id of the warehouse to get files for | 

### Return type

null (empty response body)

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

