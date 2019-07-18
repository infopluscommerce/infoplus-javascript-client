# infoplus.AisleApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAisle**](AisleApi.md#addAisle) | **POST** /beta/aisle | Create an aisle
[**addAisleAudit**](AisleApi.md#addAisleAudit) | **PUT** /beta/aisle/{aisleId}/audit/{aisleAudit} | Add new audit for an aisle
[**addAisleFile**](AisleApi.md#addAisleFile) | **POST** /beta/aisle/{aisleId}/file/{fileName} | Attach a file to an aisle
[**addAisleTag**](AisleApi.md#addAisleTag) | **PUT** /beta/aisle/{aisleId}/tag/{aisleTag} | Add new tags for an aisle.
[**deleteAisle**](AisleApi.md#deleteAisle) | **DELETE** /beta/aisle/{aisleId} | Delete an aisle
[**deleteAisleTag**](AisleApi.md#deleteAisleTag) | **DELETE** /beta/aisle/{aisleId}/tag/{aisleTag} | Delete a tag for an aisle.
[**getAisleByFilter**](AisleApi.md#getAisleByFilter) | **GET** /beta/aisle/search | Search aisles by filter
[**getAisleById**](AisleApi.md#getAisleById) | **GET** /beta/aisle/{aisleId} | Get an aisle by id
[**getAisleTags**](AisleApi.md#getAisleTags) | **GET** /beta/aisle/{aisleId}/tag | Get the tags for an aisle.
[**getDuplicateAisleById**](AisleApi.md#getDuplicateAisleById) | **GET** /beta/aisle/duplicate/{aisleId} | Get a duplicated an aisle by id
[**updateAisle**](AisleApi.md#updateAisle) | **PUT** /beta/aisle | Update an aisle
[**updateAisleCustomFields**](AisleApi.md#updateAisleCustomFields) | **PUT** /beta/aisle/customFields | Update an aisle custom fields


<a name="addAisle"></a>
# **addAisle**
> Aisle addAisle(body)

Create an aisle

Inserts a new aisle using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var body = new infoplus.Aisle(); // Aisle | Aisle to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAisle(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Aisle**](Aisle.md)| Aisle to be inserted. | 

### Return type

[**Aisle**](Aisle.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addAisleAudit"></a>
# **addAisleAudit**
> addAisleAudit(aisleId, aisleAudit)

Add new audit for an aisle

Adds an audit to an existing aisle.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to add an audit to

var aisleAudit = "aisleAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAisleAudit(aisleId, aisleAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to add an audit to | 
 **aisleAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addAisleFile"></a>
# **addAisleFile**
> addAisleFile(aisleId, fileName)

Attach a file to an aisle

Adds a file to an existing aisle.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAisleFile(aisleId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addAisleTag"></a>
# **addAisleTag**
> addAisleTag(aisleId, aisleTag)

Add new tags for an aisle.

Adds a tag to an existing aisle.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to add a tag to

var aisleTag = "aisleTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAisleTag(aisleId, aisleTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to add a tag to | 
 **aisleTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAisle"></a>
# **deleteAisle**
> deleteAisle(aisleId)

Delete an aisle

Deletes the aisle identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAisle(aisleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteAisleTag"></a>
# **deleteAisleTag**
> deleteAisleTag(aisleId, aisleTag)

Delete a tag for an aisle.

Deletes an existing aisle tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to remove tag from

var aisleTag = "aisleTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAisleTag(aisleId, aisleTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to remove tag from | 
 **aisleTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAisleByFilter"></a>
# **getAisleByFilter**
> [Aisle] getAisleByFilter(opts)

Search aisles by filter

Returns the list of aisles that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

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
apiInstance.getAisleByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Aisle]**](Aisle.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAisleById"></a>
# **getAisleById**
> Aisle getAisleById(aisleId)

Get an aisle by id

Returns the aisle identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAisleById(aisleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to be returned. | 

### Return type

[**Aisle**](Aisle.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAisleTags"></a>
# **getAisleTags**
> getAisleTags(aisleId)

Get the tags for an aisle.

Get all existing aisle tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAisleTags(aisleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateAisleById"></a>
# **getDuplicateAisleById**
> Aisle getDuplicateAisleById(aisleId)

Get a duplicated an aisle by id

Returns a duplicated aisle identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var aisleId = 56; // Number | Id of the aisle to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateAisleById(aisleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aisleId** | **Number**| Id of the aisle to be duplicated. | 

### Return type

[**Aisle**](Aisle.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAisle"></a>
# **updateAisle**
> updateAisle(body)

Update an aisle

Updates an existing aisle using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var body = new infoplus.Aisle(); // Aisle | Aisle to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAisle(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Aisle**](Aisle.md)| Aisle to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAisleCustomFields"></a>
# **updateAisleCustomFields**
> updateAisleCustomFields(body)

Update an aisle custom fields

Updates an existing aisle custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.AisleApi();

var body = new infoplus.Aisle(); // Aisle | Aisle to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAisleCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Aisle**](Aisle.md)| Aisle to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

