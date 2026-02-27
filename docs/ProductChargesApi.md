# infoplus.ProductChargesApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductCharges**](ProductChargesApi.md#addProductCharges) | **POST** /beta/productCharges | Create a productCharges
[**addProductChargesAudit**](ProductChargesApi.md#addProductChargesAudit) | **PUT** /beta/productCharges/{productChargesId}/audit/{productChargesAudit} | Add new audit for a productCharges
[**addProductChargesFile**](ProductChargesApi.md#addProductChargesFile) | **POST** /beta/productCharges/{productChargesId}/file/{fileName} | Attach a file to a productCharges
[**addProductChargesFileByURL**](ProductChargesApi.md#addProductChargesFileByURL) | **POST** /beta/productCharges/{productChargesId}/file | Attach a file to a productCharges by URL.
[**addProductChargesTag**](ProductChargesApi.md#addProductChargesTag) | **PUT** /beta/productCharges/{productChargesId}/tag/{productChargesTag} | Add new tags for a productCharges.
[**deleteProductCharges**](ProductChargesApi.md#deleteProductCharges) | **DELETE** /beta/productCharges/{productChargesId} | Delete a productCharges
[**deleteProductChargesFile**](ProductChargesApi.md#deleteProductChargesFile) | **DELETE** /beta/productCharges/{productChargesId}/file/{fileId} | Delete a file for a productCharges.
[**deleteProductChargesTag**](ProductChargesApi.md#deleteProductChargesTag) | **DELETE** /beta/productCharges/{productChargesId}/tag/{productChargesTag} | Delete a tag for a productCharges.
[**getDuplicateProductChargesById**](ProductChargesApi.md#getDuplicateProductChargesById) | **GET** /beta/productCharges/duplicate/{productChargesId} | Get a duplicated a productCharges by id
[**getProductChargesByFilter**](ProductChargesApi.md#getProductChargesByFilter) | **GET** /beta/productCharges/search | Search productChargeses by filter
[**getProductChargesById**](ProductChargesApi.md#getProductChargesById) | **GET** /beta/productCharges/{productChargesId} | Get a productCharges by id
[**getProductChargesFiles**](ProductChargesApi.md#getProductChargesFiles) | **GET** /beta/productCharges/{productChargesId}/file | Get the files for a productCharges.
[**getProductChargesTags**](ProductChargesApi.md#getProductChargesTags) | **GET** /beta/productCharges/{productChargesId}/tag | Get the tags for a productCharges.
[**updateProductCharges**](ProductChargesApi.md#updateProductCharges) | **PUT** /beta/productCharges | Update a productCharges


<a name="addProductCharges"></a>
# **addProductCharges**
> ProductCharges addProductCharges(body)

Create a productCharges

Inserts a new productCharges using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var body = new infoplus.ProductCharges(); // ProductCharges | ProductCharges to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProductCharges(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductCharges**](ProductCharges.md)| ProductCharges to be inserted. | 

### Return type

[**ProductCharges**](ProductCharges.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductChargesAudit"></a>
# **addProductChargesAudit**
> addProductChargesAudit(productChargesId, productChargesAudit)

Add new audit for a productCharges

Adds an audit to an existing productCharges.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to add an audit to

var productChargesAudit = "productChargesAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductChargesAudit(productChargesId, productChargesAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to add an audit to | 
 **productChargesAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductChargesFile"></a>
# **addProductChargesFile**
> addProductChargesFile(productChargesId, fileName)

Attach a file to a productCharges

Adds a file to an existing productCharges.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductChargesFile(productChargesId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addProductChargesFileByURL"></a>
# **addProductChargesFileByURL**
> addProductChargesFileByURL(body, productChargesId)

Attach a file to a productCharges by URL.

Adds a file to an existing productCharges by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var productChargesId = 56; // Number | Id of the productCharges to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductChargesFileByURL(body, productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **productChargesId** | **Number**| Id of the productCharges to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProductChargesTag"></a>
# **addProductChargesTag**
> addProductChargesTag(productChargesId, productChargesTag)

Add new tags for a productCharges.

Adds a tag to an existing productCharges.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to add a tag to

var productChargesTag = "productChargesTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProductChargesTag(productChargesId, productChargesTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to add a tag to | 
 **productChargesTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductCharges"></a>
# **deleteProductCharges**
> deleteProductCharges(productChargesId)

Delete a productCharges

Deletes the productCharges identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductCharges(productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductChargesFile"></a>
# **deleteProductChargesFile**
> deleteProductChargesFile(productChargesId, fileId)

Delete a file for a productCharges.

Deletes an existing productCharges file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductChargesFile(productChargesId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProductChargesTag"></a>
# **deleteProductChargesTag**
> deleteProductChargesTag(productChargesId, productChargesTag)

Delete a tag for a productCharges.

Deletes an existing productCharges tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to remove tag from

var productChargesTag = "productChargesTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProductChargesTag(productChargesId, productChargesTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to remove tag from | 
 **productChargesTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateProductChargesById"></a>
# **getDuplicateProductChargesById**
> ProductCharges getDuplicateProductChargesById(productChargesId)

Get a duplicated a productCharges by id

Returns a duplicated productCharges identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateProductChargesById(productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to be duplicated. | 

### Return type

[**ProductCharges**](ProductCharges.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductChargesByFilter"></a>
# **getProductChargesByFilter**
> [ProductCharges] getProductChargesByFilter(opts)

Search productChargeses by filter

Returns the list of productChargeses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

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
apiInstance.getProductChargesByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ProductCharges]**](ProductCharges.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductChargesById"></a>
# **getProductChargesById**
> ProductCharges getProductChargesById(productChargesId)

Get a productCharges by id

Returns the productCharges identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductChargesById(productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to be returned. | 

### Return type

[**ProductCharges**](ProductCharges.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductChargesFiles"></a>
# **getProductChargesFiles**
> getProductChargesFiles(productChargesId)

Get the files for a productCharges.

Get all existing productCharges files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductChargesFiles(productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProductChargesTags"></a>
# **getProductChargesTags**
> getProductChargesTags(productChargesId)

Get the tags for a productCharges.

Get all existing productCharges tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var productChargesId = 56; // Number | Id of the productCharges to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProductChargesTags(productChargesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productChargesId** | **Number**| Id of the productCharges to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProductCharges"></a>
# **updateProductCharges**
> updateProductCharges(body)

Update a productCharges

Updates an existing productCharges using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ProductChargesApi();

var body = new infoplus.ProductCharges(); // ProductCharges | ProductCharges to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProductCharges(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductCharges**](ProductCharges.md)| ProductCharges to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

