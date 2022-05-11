# infoplus.ProductionModelApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductionModel**](ProductionModelApi.md#addProductionModel) | **POST** /v3.0/productionModel | Create a productionModel
[**addProductionModelAudit**](ProductionModelApi.md#addProductionModelAudit) | **PUT** /v3.0/productionModel/{productionModelId}/audit/{productionModelAudit} | Add new audit for a productionModel
[**addProductionModelFile**](ProductionModelApi.md#addProductionModelFile) | **POST** /v3.0/productionModel/{productionModelId}/file/{fileName} | Attach a file to a productionModel
[**addProductionModelFileByURL**](ProductionModelApi.md#addProductionModelFileByURL) | **POST** /v3.0/productionModel/{productionModelId}/file | Attach a file to a productionModel by URL.
[**addProductionModelTag**](ProductionModelApi.md#addProductionModelTag) | **PUT** /v3.0/productionModel/{productionModelId}/tag/{productionModelTag} | Add new tags for a productionModel.
[**deleteProductionModel**](ProductionModelApi.md#deleteProductionModel) | **DELETE** /v3.0/productionModel/{productionModelId} | Delete a productionModel
[**deleteProductionModelFile**](ProductionModelApi.md#deleteProductionModelFile) | **DELETE** /v3.0/productionModel/{productionModelId}/file/{fileId} | Delete a file for a productionModel.
[**deleteProductionModelTag**](ProductionModelApi.md#deleteProductionModelTag) | **DELETE** /v3.0/productionModel/{productionModelId}/tag/{productionModelTag} | Delete a tag for a productionModel.
[**getDuplicateProductionModelById**](ProductionModelApi.md#getDuplicateProductionModelById) | **GET** /v3.0/productionModel/duplicate/{productionModelId} | Get a duplicated a productionModel by id
[**getProductionModelByFilter**](ProductionModelApi.md#getProductionModelByFilter) | **GET** /v3.0/productionModel/search | Search productionModels by filter
[**getProductionModelById**](ProductionModelApi.md#getProductionModelById) | **GET** /v3.0/productionModel/{productionModelId} | Get a productionModel by id
[**getProductionModelFiles**](ProductionModelApi.md#getProductionModelFiles) | **GET** /v3.0/productionModel/{productionModelId}/file | Get the files for a productionModel.
[**getProductionModelTags**](ProductionModelApi.md#getProductionModelTags) | **GET** /v3.0/productionModel/{productionModelId}/tag | Get the tags for a productionModel.
[**updateProductionModel**](ProductionModelApi.md#updateProductionModel) | **PUT** /v3.0/productionModel | Update a productionModel
[**updateProductionModelCustomFields**](ProductionModelApi.md#updateProductionModelCustomFields) | **PUT** /v3.0/productionModel/customFields | Update a productionModel custom fields


<a name="addProductionModel"></a>
# **addProductionModel**
> ProductionModel addProductionModel(body)

Create a productionModel

Inserts a new productionModel using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var body = new infoplus.ProductionModel(); // ProductionModel | ProductionModel to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProductionModel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionModel**](ProductionModel.md)| ProductionModel to be inserted. | 

### Return type

[**ProductionModel**](ProductionModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionModelAudit"></a>
# **addProductionModelAudit**
> addProductionModelAudit(productionModelId, productionModelAudit)

Add new audit for a productionModel

Adds an audit to an existing productionModel.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to add an audit to

var productionModelAudit = "productionModelAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionModelAudit(productionModelId, productionModelAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to add an audit to | 
 **productionModelAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionModelFile"></a>
# **addProductionModelFile**
> addProductionModelFile(productionModelId, fileName)

Attach a file to a productionModel

Adds a file to an existing productionModel.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionModelFile(productionModelId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addProductionModelFileByURL"></a>
# **addProductionModelFileByURL**
> addProductionModelFileByURL(body, productionModelId)

Attach a file to a productionModel by URL.

Adds a file to an existing productionModel by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var productionModelId = 56; // Number | Id of the productionModel to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionModelFileByURL(body, productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **productionModelId** | **Number**| Id of the productionModel to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductionModelTag"></a>
# **addProductionModelTag**
> addProductionModelTag(productionModelId, productionModelTag)

Add new tags for a productionModel.

Adds a tag to an existing productionModel.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to add a tag to

var productionModelTag = "productionModelTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductionModelTag(productionModelId, productionModelTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to add a tag to | 
 **productionModelTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductionModel"></a>
# **deleteProductionModel**
> deleteProductionModel(productionModelId)

Delete a productionModel

Deletes the productionModel identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionModel(productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductionModelFile"></a>
# **deleteProductionModelFile**
> deleteProductionModelFile(productionModelId, fileId)

Delete a file for a productionModel.

Deletes an existing productionModel file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionModelFile(productionModelId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductionModelTag"></a>
# **deleteProductionModelTag**
> deleteProductionModelTag(productionModelId, productionModelTag)

Delete a tag for a productionModel.

Deletes an existing productionModel tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to remove tag from

var productionModelTag = "productionModelTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductionModelTag(productionModelId, productionModelTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to remove tag from | 
 **productionModelTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateProductionModelById"></a>
# **getDuplicateProductionModelById**
> ProductionModel getDuplicateProductionModelById(productionModelId)

Get a duplicated a productionModel by id

Returns a duplicated productionModel identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateProductionModelById(productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to be duplicated. | 

### Return type

[**ProductionModel**](ProductionModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionModelByFilter"></a>
# **getProductionModelByFilter**
> [ProductionModel] getProductionModelByFilter(opts)

Search productionModels by filter

Returns the list of productionModels that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

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
apiInstance.getProductionModelByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ProductionModel]**](ProductionModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionModelById"></a>
# **getProductionModelById**
> ProductionModel getProductionModelById(productionModelId)

Get a productionModel by id

Returns the productionModel identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductionModelById(productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to be returned. | 

### Return type

[**ProductionModel**](ProductionModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionModelFiles"></a>
# **getProductionModelFiles**
> getProductionModelFiles(productionModelId)

Get the files for a productionModel.

Get all existing productionModel files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductionModelFiles(productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductionModelTags"></a>
# **getProductionModelTags**
> getProductionModelTags(productionModelId)

Get the tags for a productionModel.

Get all existing productionModel tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var productionModelId = 56; // Number | Id of the productionModel to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductionModelTags(productionModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionModelId** | **Number**| Id of the productionModel to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProductionModel"></a>
# **updateProductionModel**
> updateProductionModel(body)

Update a productionModel

Updates an existing productionModel using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var body = new infoplus.ProductionModel(); // ProductionModel | ProductionModel to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductionModel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionModel**](ProductionModel.md)| ProductionModel to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductionModelCustomFields"></a>
# **updateProductionModelCustomFields**
> updateProductionModelCustomFields(body)

Update a productionModel custom fields

Updates an existing productionModel custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductionModelApi();

var body = new infoplus.ProductionModel(); // ProductionModel | ProductionModel to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductionModelCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionModel**](ProductionModel.md)| ProductionModel to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

