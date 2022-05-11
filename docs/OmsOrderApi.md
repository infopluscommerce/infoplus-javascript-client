# infoplus.OmsOrderApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOmsOrder**](OmsOrderApi.md#addOmsOrder) | **POST** /v3.0/omsOrder | Create an omsOrder
[**addOmsOrderAudit**](OmsOrderApi.md#addOmsOrderAudit) | **PUT** /v3.0/omsOrder/{omsOrderId}/audit/{omsOrderAudit} | Add new audit for an omsOrder
[**addOmsOrderFile**](OmsOrderApi.md#addOmsOrderFile) | **POST** /v3.0/omsOrder/{omsOrderId}/file/{fileName} | Attach a file to an omsOrder
[**addOmsOrderFileByURL**](OmsOrderApi.md#addOmsOrderFileByURL) | **POST** /v3.0/omsOrder/{omsOrderId}/file | Attach a file to an omsOrder by URL.
[**addOmsOrderTag**](OmsOrderApi.md#addOmsOrderTag) | **PUT** /v3.0/omsOrder/{omsOrderId}/tag/{omsOrderTag} | Add new tags for an omsOrder.
[**deleteOmsOrderFile**](OmsOrderApi.md#deleteOmsOrderFile) | **DELETE** /v3.0/omsOrder/{omsOrderId}/file/{fileId} | Delete a file for an omsOrder.
[**deleteOmsOrderTag**](OmsOrderApi.md#deleteOmsOrderTag) | **DELETE** /v3.0/omsOrder/{omsOrderId}/tag/{omsOrderTag} | Delete a tag for an omsOrder.
[**getDuplicateOmsOrderById**](OmsOrderApi.md#getDuplicateOmsOrderById) | **GET** /v3.0/omsOrder/duplicate/{omsOrderId} | Get a duplicated an omsOrder by id
[**getOmsOrderByFilter**](OmsOrderApi.md#getOmsOrderByFilter) | **GET** /v3.0/omsOrder/search | Search omsOrders by filter
[**getOmsOrderById**](OmsOrderApi.md#getOmsOrderById) | **GET** /v3.0/omsOrder/{omsOrderId} | Get an omsOrder by id
[**getOmsOrderFiles**](OmsOrderApi.md#getOmsOrderFiles) | **GET** /v3.0/omsOrder/{omsOrderId}/file | Get the files for an omsOrder.
[**getOmsOrderTags**](OmsOrderApi.md#getOmsOrderTags) | **GET** /v3.0/omsOrder/{omsOrderId}/tag | Get the tags for an omsOrder.
[**updateOmsOrder**](OmsOrderApi.md#updateOmsOrder) | **PUT** /v3.0/omsOrder | Update an omsOrder
[**updateOmsOrderCustomFields**](OmsOrderApi.md#updateOmsOrderCustomFields) | **PUT** /v3.0/omsOrder/customFields | Update an omsOrder custom fields


<a name="addOmsOrder"></a>
# **addOmsOrder**
> OmsOrder addOmsOrder(body)

Create an omsOrder

Inserts a new omsOrder using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOmsOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be inserted. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOmsOrderAudit"></a>
# **addOmsOrderAudit**
> addOmsOrderAudit(omsOrderId, omsOrderAudit)

Add new audit for an omsOrder

Adds an audit to an existing omsOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to add an audit to

var omsOrderAudit = "omsOrderAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderAudit(omsOrderId, omsOrderAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to add an audit to | 
 **omsOrderAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOmsOrderFile"></a>
# **addOmsOrderFile**
> addOmsOrderFile(omsOrderId, fileName)

Attach a file to an omsOrder

Adds a file to an existing omsOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderFile(omsOrderId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addOmsOrderFileByURL"></a>
# **addOmsOrderFileByURL**
> addOmsOrderFileByURL(body, omsOrderId)

Attach a file to an omsOrder by URL.

Adds a file to an existing omsOrder by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var omsOrderId = 56; // Number | Id of the omsOrder to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderFileByURL(body, omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **omsOrderId** | **Number**| Id of the omsOrder to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addOmsOrderTag"></a>
# **addOmsOrderTag**
> addOmsOrderTag(omsOrderId, omsOrderTag)

Add new tags for an omsOrder.

Adds a tag to an existing omsOrder.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to add a tag to

var omsOrderTag = "omsOrderTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOmsOrderTag(omsOrderId, omsOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to add a tag to | 
 **omsOrderTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOmsOrderFile"></a>
# **deleteOmsOrderFile**
> deleteOmsOrderFile(omsOrderId, fileId)

Delete a file for an omsOrder.

Deletes an existing omsOrder file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOmsOrderFile(omsOrderId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOmsOrderTag"></a>
# **deleteOmsOrderTag**
> deleteOmsOrderTag(omsOrderId, omsOrderTag)

Delete a tag for an omsOrder.

Deletes an existing omsOrder tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to remove tag from

var omsOrderTag = "omsOrderTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOmsOrderTag(omsOrderId, omsOrderTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to remove tag from | 
 **omsOrderTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateOmsOrderById"></a>
# **getDuplicateOmsOrderById**
> OmsOrder getDuplicateOmsOrderById(omsOrderId)

Get a duplicated an omsOrder by id

Returns a duplicated omsOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateOmsOrderById(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to be duplicated. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderByFilter"></a>
# **getOmsOrderByFilter**
> [OmsOrder] getOmsOrderByFilter(opts)

Search omsOrders by filter

Returns the list of omsOrders that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

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
apiInstance.getOmsOrderByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[OmsOrder]**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderById"></a>
# **getOmsOrderById**
> OmsOrder getOmsOrderById(omsOrderId)

Get an omsOrder by id

Returns the omsOrder identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOmsOrderById(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to be returned. | 

### Return type

[**OmsOrder**](OmsOrder.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderFiles"></a>
# **getOmsOrderFiles**
> getOmsOrderFiles(omsOrderId)

Get the files for an omsOrder.

Get all existing omsOrder files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOmsOrderFiles(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOmsOrderTags"></a>
# **getOmsOrderTags**
> getOmsOrderTags(omsOrderId)

Get the tags for an omsOrder.

Get all existing omsOrder tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var omsOrderId = 56; // Number | Id of the omsOrder to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOmsOrderTags(omsOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omsOrderId** | **Number**| Id of the omsOrder to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOmsOrder"></a>
# **updateOmsOrder**
> updateOmsOrder(body)

Update an omsOrder

Updates an existing omsOrder using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOmsOrder(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOmsOrderCustomFields"></a>
# **updateOmsOrderCustomFields**
> updateOmsOrderCustomFields(body)

Update an omsOrder custom fields

Updates an existing omsOrder custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.OmsOrderApi();

var body = new infoplus.OmsOrder(); // OmsOrder | OmsOrder to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOmsOrderCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OmsOrder**](OmsOrder.md)| OmsOrder to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

