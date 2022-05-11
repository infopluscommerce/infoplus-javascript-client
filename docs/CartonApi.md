# infoplus.CartonApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCarton**](CartonApi.md#addCarton) | **POST** /v3.0/carton | Create a carton
[**addCartonAudit**](CartonApi.md#addCartonAudit) | **PUT** /v3.0/carton/{cartonId}/audit/{cartonAudit} | Add new audit for a carton
[**addCartonFile**](CartonApi.md#addCartonFile) | **POST** /v3.0/carton/{cartonId}/file/{fileName} | Attach a file to a carton
[**addCartonFileByURL**](CartonApi.md#addCartonFileByURL) | **POST** /v3.0/carton/{cartonId}/file | Attach a file to a carton by URL.
[**addCartonTag**](CartonApi.md#addCartonTag) | **PUT** /v3.0/carton/{cartonId}/tag/{cartonTag} | Add new tags for a carton.
[**deleteCarton**](CartonApi.md#deleteCarton) | **DELETE** /v3.0/carton/{cartonId} | Delete a carton
[**deleteCartonFile**](CartonApi.md#deleteCartonFile) | **DELETE** /v3.0/carton/{cartonId}/file/{fileId} | Delete a file for a carton.
[**deleteCartonTag**](CartonApi.md#deleteCartonTag) | **DELETE** /v3.0/carton/{cartonId}/tag/{cartonTag} | Delete a tag for a carton.
[**getCartonByFilter**](CartonApi.md#getCartonByFilter) | **GET** /v3.0/carton/search | Search cartons by filter
[**getCartonById**](CartonApi.md#getCartonById) | **GET** /v3.0/carton/{cartonId} | Get a carton by id
[**getCartonFiles**](CartonApi.md#getCartonFiles) | **GET** /v3.0/carton/{cartonId}/file | Get the files for a carton.
[**getCartonTags**](CartonApi.md#getCartonTags) | **GET** /v3.0/carton/{cartonId}/tag | Get the tags for a carton.
[**getDuplicateCartonById**](CartonApi.md#getDuplicateCartonById) | **GET** /v3.0/carton/duplicate/{cartonId} | Get a duplicated a carton by id
[**updateCarton**](CartonApi.md#updateCarton) | **PUT** /v3.0/carton | Update a carton
[**updateCartonCustomFields**](CartonApi.md#updateCartonCustomFields) | **PUT** /v3.0/carton/customFields | Update a carton custom fields


<a name="addCarton"></a>
# **addCarton**
> Carton addCarton(body)

Create a carton

Inserts a new carton using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var body = new infoplus.Carton(); // Carton | Carton to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCarton(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Carton**](Carton.md)| Carton to be inserted. | 

### Return type

[**Carton**](Carton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonAudit"></a>
# **addCartonAudit**
> addCartonAudit(cartonId, cartonAudit)

Add new audit for a carton

Adds an audit to an existing carton.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to add an audit to

var cartonAudit = "cartonAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonAudit(cartonId, cartonAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to add an audit to | 
 **cartonAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonFile"></a>
# **addCartonFile**
> addCartonFile(cartonId, fileName)

Attach a file to a carton

Adds a file to an existing carton.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonFile(cartonId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCartonFileByURL"></a>
# **addCartonFileByURL**
> addCartonFileByURL(body, cartonId)

Attach a file to a carton by URL.

Adds a file to an existing carton by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var cartonId = 56; // Number | Id of the carton to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonFileByURL(body, cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **cartonId** | **Number**| Id of the carton to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartonTag"></a>
# **addCartonTag**
> addCartonTag(cartonId, cartonTag)

Add new tags for a carton.

Adds a tag to an existing carton.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to add a tag to

var cartonTag = "cartonTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartonTag(cartonId, cartonTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to add a tag to | 
 **cartonTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCarton"></a>
# **deleteCarton**
> deleteCarton(cartonId)

Delete a carton

Deletes the carton identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCarton(cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonFile"></a>
# **deleteCartonFile**
> deleteCartonFile(cartonId, fileId)

Delete a file for a carton.

Deletes an existing carton file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonFile(cartonId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartonTag"></a>
# **deleteCartonTag**
> deleteCartonTag(cartonId, cartonTag)

Delete a tag for a carton.

Deletes an existing carton tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to remove tag from

var cartonTag = "cartonTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartonTag(cartonId, cartonTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to remove tag from | 
 **cartonTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonByFilter"></a>
# **getCartonByFilter**
> [Carton] getCartonByFilter(opts)

Search cartons by filter

Returns the list of cartons that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

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
apiInstance.getCartonByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Carton]**](Carton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonById"></a>
# **getCartonById**
> Carton getCartonById(cartonId)

Get a carton by id

Returns the carton identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCartonById(cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to be returned. | 

### Return type

[**Carton**](Carton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonFiles"></a>
# **getCartonFiles**
> getCartonFiles(cartonId)

Get the files for a carton.

Get all existing carton files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonFiles(cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartonTags"></a>
# **getCartonTags**
> getCartonTags(cartonId)

Get the tags for a carton.

Get all existing carton tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartonTags(cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartonById"></a>
# **getDuplicateCartonById**
> Carton getDuplicateCartonById(cartonId)

Get a duplicated a carton by id

Returns a duplicated carton identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var cartonId = 56; // Number | Id of the carton to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCartonById(cartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartonId** | **Number**| Id of the carton to be duplicated. | 

### Return type

[**Carton**](Carton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCarton"></a>
# **updateCarton**
> updateCarton(body)

Update a carton

Updates an existing carton using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var body = new infoplus.Carton(); // Carton | Carton to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCarton(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Carton**](Carton.md)| Carton to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCartonCustomFields"></a>
# **updateCartonCustomFields**
> updateCartonCustomFields(body)

Update a carton custom fields

Updates an existing carton custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartonApi();

var body = new infoplus.Carton(); // Carton | Carton to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCartonCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Carton**](Carton.md)| Carton to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

