# infoplus.ProductionLotApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductionLot**](ProductionLotApi.md#addProductionLot) | **POST** /v3.0/productionLot | Create a productionLot
[**addProductionLotAudit**](ProductionLotApi.md#addProductionLotAudit) | **PUT** /v3.0/productionLot/{productionLotId}/audit/{productionLotAudit} | Add new audit for a productionLot
[**addProductionLotFile**](ProductionLotApi.md#addProductionLotFile) | **POST** /v3.0/productionLot/{productionLotId}/file/{fileName} | Attach a file to a productionLot
[**addProductionLotFileByURL**](ProductionLotApi.md#addProductionLotFileByURL) | **POST** /v3.0/productionLot/{productionLotId}/file | Attach a file to a productionLot by URL.
[**addProductionLotTag**](ProductionLotApi.md#addProductionLotTag) | **PUT** /v3.0/productionLot/{productionLotId}/tag/{productionLotTag} | Add new tags for a productionLot.
[**deleteProductionLot**](ProductionLotApi.md#deleteProductionLot) | **DELETE** /v3.0/productionLot/{productionLotId} | Delete a productionLot
[**deleteProductionLotFile**](ProductionLotApi.md#deleteProductionLotFile) | **DELETE** /v3.0/productionLot/{productionLotId}/file/{fileId} | Delete a file for a productionLot.
[**deleteProductionLotTag**](ProductionLotApi.md#deleteProductionLotTag) | **DELETE** /v3.0/productionLot/{productionLotId}/tag/{productionLotTag} | Delete a tag for a productionLot.
[**getDuplicateProductionLotById**](ProductionLotApi.md#getDuplicateProductionLotById) | **GET** /v3.0/productionLot/duplicate/{productionLotId} | Get a duplicated a productionLot by id
[**getProductionLotByFilter**](ProductionLotApi.md#getProductionLotByFilter) | **GET** /v3.0/productionLot/search | Search productionLots by filter
[**getProductionLotById**](ProductionLotApi.md#getProductionLotById) | **GET** /v3.0/productionLot/{productionLotId} | Get a productionLot by id
[**getProductionLotFiles**](ProductionLotApi.md#getProductionLotFiles) | **GET** /v3.0/productionLot/{productionLotId}/file | Get the files for a productionLot.
[**getProductionLotTags**](ProductionLotApi.md#getProductionLotTags) | **GET** /v3.0/productionLot/{productionLotId}/tag | Get the tags for a productionLot.
[**updateProductionLot**](ProductionLotApi.md#updateProductionLot) | **PUT** /v3.0/productionLot | Update a productionLot
[**updateProductionLotCustomFields**](ProductionLotApi.md#updateProductionLotCustomFields) | **PUT** /v3.0/productionLot/customFields | Update a productionLot custom fields


<a name="addProductionLot"></a>
# **addProductionLot**
> ProductionLot addProductionLot(body)

Create a productionLot

Inserts a new productionLot using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var body = new infoplus.ProductionLot(); // ProductionLot | ProductionLot to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProductionLot(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionLot**](ProductionLot.md)| ProductionLot to be inserted. | 

### Return type

[**ProductionLot**](ProductionLot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionLotAudit"></a>
# **addProductionLotAudit**
> addProductionLotAudit(productionLotId, productionLotAudit)

Add new audit for a productionLot

Adds an audit to an existing productionLot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to add an audit to

var productionLotAudit = "productionLotAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionLotAudit(productionLotId, productionLotAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to add an audit to | 
 **productionLotAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionLotFile"></a>
# **addProductionLotFile**
> addProductionLotFile(productionLotId, fileName)

Attach a file to a productionLot

Adds a file to an existing productionLot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionLotFile(productionLotId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addProductionLotFileByURL"></a>
# **addProductionLotFileByURL**
> addProductionLotFileByURL(body, productionLotId)

Attach a file to a productionLot by URL.

Adds a file to an existing productionLot by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var productionLotId = 56; // Number | Id of the productionLot to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionLotFileByURL(body, productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **productionLotId** | **Number**| Id of the productionLot to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionLotTag"></a>
# **addProductionLotTag**
> addProductionLotTag(productionLotId, productionLotTag)

Add new tags for a productionLot.

Adds a tag to an existing productionLot.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to add a tag to

var productionLotTag = "productionLotTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionLotTag(productionLotId, productionLotTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to add a tag to | 
 **productionLotTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductionLot"></a>
# **deleteProductionLot**
> deleteProductionLot(productionLotId)

Delete a productionLot

Deletes the productionLot identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionLot(productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductionLotFile"></a>
# **deleteProductionLotFile**
> deleteProductionLotFile(productionLotId, fileId)

Delete a file for a productionLot.

Deletes an existing productionLot file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionLotFile(productionLotId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductionLotTag"></a>
# **deleteProductionLotTag**
> deleteProductionLotTag(productionLotId, productionLotTag)

Delete a tag for a productionLot.

Deletes an existing productionLot tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to remove tag from

var productionLotTag = "productionLotTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionLotTag(productionLotId, productionLotTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to remove tag from | 
 **productionLotTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateProductionLotById"></a>
# **getDuplicateProductionLotById**
> ProductionLot getDuplicateProductionLotById(productionLotId)

Get a duplicated a productionLot by id

Returns a duplicated productionLot identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateProductionLotById(productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to be duplicated. | 

### Return type

[**ProductionLot**](ProductionLot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionLotByFilter"></a>
# **getProductionLotByFilter**
> [ProductionLot] getProductionLotByFilter(opts)

Search productionLots by filter

Returns the list of productionLots that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

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
apiInstance.getProductionLotByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ProductionLot]**](ProductionLot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionLotById"></a>
# **getProductionLotById**
> ProductionLot getProductionLotById(productionLotId)

Get a productionLot by id

Returns the productionLot identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductionLotById(productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to be returned. | 

### Return type

[**ProductionLot**](ProductionLot.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionLotFiles"></a>
# **getProductionLotFiles**
> getProductionLotFiles(productionLotId)

Get the files for a productionLot.

Get all existing productionLot files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductionLotFiles(productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionLotTags"></a>
# **getProductionLotTags**
> getProductionLotTags(productionLotId)

Get the tags for a productionLot.

Get all existing productionLot tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var productionLotId = 56; // Number | Id of the productionLot to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductionLotTags(productionLotId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionLotId** | **Number**| Id of the productionLot to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProductionLot"></a>
# **updateProductionLot**
> updateProductionLot(body)

Update a productionLot

Updates an existing productionLot using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var body = new infoplus.ProductionLot(); // ProductionLot | ProductionLot to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductionLot(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionLot**](ProductionLot.md)| ProductionLot to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductionLotCustomFields"></a>
# **updateProductionLotCustomFields**
> updateProductionLotCustomFields(body)

Update a productionLot custom fields

Updates an existing productionLot custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionLotApi();

var body = new infoplus.ProductionLot(); // ProductionLot | ProductionLot to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductionLotCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionLot**](ProductionLot.md)| ProductionLot to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

