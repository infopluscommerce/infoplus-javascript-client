# infoplus.LocationAddressSchemeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocationAddressScheme**](LocationAddressSchemeApi.md#addLocationAddressScheme) | **POST** /beta/locationAddressScheme | Create a locationAddressScheme
[**addLocationAddressSchemeAudit**](LocationAddressSchemeApi.md#addLocationAddressSchemeAudit) | **PUT** /beta/locationAddressScheme/{locationAddressSchemeId}/audit/{locationAddressSchemeAudit} | Add new audit for a locationAddressScheme
[**addLocationAddressSchemeFile**](LocationAddressSchemeApi.md#addLocationAddressSchemeFile) | **POST** /beta/locationAddressScheme/{locationAddressSchemeId}/file/{fileName} | Attach a file to a locationAddressScheme
[**addLocationAddressSchemeFileByURL**](LocationAddressSchemeApi.md#addLocationAddressSchemeFileByURL) | **POST** /beta/locationAddressScheme/{locationAddressSchemeId}/file | Attach a file to a locationAddressScheme by URL.
[**addLocationAddressSchemeTag**](LocationAddressSchemeApi.md#addLocationAddressSchemeTag) | **PUT** /beta/locationAddressScheme/{locationAddressSchemeId}/tag/{locationAddressSchemeTag} | Add new tags for a locationAddressScheme.
[**deleteLocationAddressScheme**](LocationAddressSchemeApi.md#deleteLocationAddressScheme) | **DELETE** /beta/locationAddressScheme/{locationAddressSchemeId} | Delete a locationAddressScheme
[**deleteLocationAddressSchemeFile**](LocationAddressSchemeApi.md#deleteLocationAddressSchemeFile) | **DELETE** /beta/locationAddressScheme/{locationAddressSchemeId}/file/{fileId} | Delete a file for a locationAddressScheme.
[**deleteLocationAddressSchemeTag**](LocationAddressSchemeApi.md#deleteLocationAddressSchemeTag) | **DELETE** /beta/locationAddressScheme/{locationAddressSchemeId}/tag/{locationAddressSchemeTag} | Delete a tag for a locationAddressScheme.
[**getDuplicateLocationAddressSchemeById**](LocationAddressSchemeApi.md#getDuplicateLocationAddressSchemeById) | **GET** /beta/locationAddressScheme/duplicate/{locationAddressSchemeId} | Get a duplicated a locationAddressScheme by id
[**getLocationAddressSchemeByFilter**](LocationAddressSchemeApi.md#getLocationAddressSchemeByFilter) | **GET** /beta/locationAddressScheme/search | Search locationAddressSchemes by filter
[**getLocationAddressSchemeById**](LocationAddressSchemeApi.md#getLocationAddressSchemeById) | **GET** /beta/locationAddressScheme/{locationAddressSchemeId} | Get a locationAddressScheme by id
[**getLocationAddressSchemeFiles**](LocationAddressSchemeApi.md#getLocationAddressSchemeFiles) | **GET** /beta/locationAddressScheme/{locationAddressSchemeId}/file | Get the files for a locationAddressScheme.
[**getLocationAddressSchemeTags**](LocationAddressSchemeApi.md#getLocationAddressSchemeTags) | **GET** /beta/locationAddressScheme/{locationAddressSchemeId}/tag | Get the tags for a locationAddressScheme.
[**updateLocationAddressScheme**](LocationAddressSchemeApi.md#updateLocationAddressScheme) | **PUT** /beta/locationAddressScheme | Update a locationAddressScheme
[**updateLocationAddressSchemeCustomFields**](LocationAddressSchemeApi.md#updateLocationAddressSchemeCustomFields) | **PUT** /beta/locationAddressScheme/customFields | Update a locationAddressScheme custom fields


<a name="addLocationAddressScheme"></a>
# **addLocationAddressScheme**
> LocationAddressScheme addLocationAddressScheme(body)

Create a locationAddressScheme

Inserts a new locationAddressScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var body = new infoplus.LocationAddressScheme(); // LocationAddressScheme | LocationAddressScheme to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLocationAddressScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationAddressScheme**](LocationAddressScheme.md)| LocationAddressScheme to be inserted. | 

### Return type

[**LocationAddressScheme**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationAddressSchemeAudit"></a>
# **addLocationAddressSchemeAudit**
> addLocationAddressSchemeAudit(locationAddressSchemeId, locationAddressSchemeAudit)

Add new audit for a locationAddressScheme

Adds an audit to an existing locationAddressScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to add an audit to

var locationAddressSchemeAudit = "locationAddressSchemeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationAddressSchemeAudit(locationAddressSchemeId, locationAddressSchemeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to add an audit to | 
 **locationAddressSchemeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationAddressSchemeFile"></a>
# **addLocationAddressSchemeFile**
> addLocationAddressSchemeFile(locationAddressSchemeId, fileName)

Attach a file to a locationAddressScheme

Adds a file to an existing locationAddressScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationAddressSchemeFile(locationAddressSchemeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLocationAddressSchemeFileByURL"></a>
# **addLocationAddressSchemeFileByURL**
> addLocationAddressSchemeFileByURL(body, locationAddressSchemeId)

Attach a file to a locationAddressScheme by URL.

Adds a file to an existing locationAddressScheme by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationAddressSchemeFileByURL(body, locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationAddressSchemeTag"></a>
# **addLocationAddressSchemeTag**
> addLocationAddressSchemeTag(locationAddressSchemeId, locationAddressSchemeTag)

Add new tags for a locationAddressScheme.

Adds a tag to an existing locationAddressScheme.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to add a tag to

var locationAddressSchemeTag = "locationAddressSchemeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationAddressSchemeTag(locationAddressSchemeId, locationAddressSchemeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to add a tag to | 
 **locationAddressSchemeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocationAddressScheme"></a>
# **deleteLocationAddressScheme**
> deleteLocationAddressScheme(locationAddressSchemeId)

Delete a locationAddressScheme

Deletes the locationAddressScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationAddressScheme(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLocationAddressSchemeFile"></a>
# **deleteLocationAddressSchemeFile**
> deleteLocationAddressSchemeFile(locationAddressSchemeId, fileId)

Delete a file for a locationAddressScheme.

Deletes an existing locationAddressScheme file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationAddressSchemeFile(locationAddressSchemeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLocationAddressSchemeTag"></a>
# **deleteLocationAddressSchemeTag**
> deleteLocationAddressSchemeTag(locationAddressSchemeId, locationAddressSchemeTag)

Delete a tag for a locationAddressScheme.

Deletes an existing locationAddressScheme tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to remove tag from

var locationAddressSchemeTag = "locationAddressSchemeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationAddressSchemeTag(locationAddressSchemeId, locationAddressSchemeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to remove tag from | 
 **locationAddressSchemeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLocationAddressSchemeById"></a>
# **getDuplicateLocationAddressSchemeById**
> LocationAddressScheme getDuplicateLocationAddressSchemeById(locationAddressSchemeId)

Get a duplicated a locationAddressScheme by id

Returns a duplicated locationAddressScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLocationAddressSchemeById(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to be duplicated. | 

### Return type

[**LocationAddressScheme**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeByFilter"></a>
# **getLocationAddressSchemeByFilter**
> [LocationAddressScheme] getLocationAddressSchemeByFilter(opts)

Search locationAddressSchemes by filter

Returns the list of locationAddressSchemes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

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
apiInstance.getLocationAddressSchemeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LocationAddressScheme]**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeById"></a>
# **getLocationAddressSchemeById**
> LocationAddressScheme getLocationAddressSchemeById(locationAddressSchemeId)

Get a locationAddressScheme by id

Returns the locationAddressScheme identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocationAddressSchemeById(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to be returned. | 

### Return type

[**LocationAddressScheme**](LocationAddressScheme.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeFiles"></a>
# **getLocationAddressSchemeFiles**
> getLocationAddressSchemeFiles(locationAddressSchemeId)

Get the files for a locationAddressScheme.

Get all existing locationAddressScheme files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLocationAddressSchemeFiles(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationAddressSchemeTags"></a>
# **getLocationAddressSchemeTags**
> getLocationAddressSchemeTags(locationAddressSchemeId)

Get the tags for a locationAddressScheme.

Get all existing locationAddressScheme tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var locationAddressSchemeId = 56; // Number | Id of the locationAddressScheme to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLocationAddressSchemeTags(locationAddressSchemeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationAddressSchemeId** | **Number**| Id of the locationAddressScheme to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocationAddressScheme"></a>
# **updateLocationAddressScheme**
> updateLocationAddressScheme(body)

Update a locationAddressScheme

Updates an existing locationAddressScheme using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var body = new infoplus.LocationAddressScheme(); // LocationAddressScheme | LocationAddressScheme to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationAddressScheme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationAddressScheme**](LocationAddressScheme.md)| LocationAddressScheme to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocationAddressSchemeCustomFields"></a>
# **updateLocationAddressSchemeCustomFields**
> updateLocationAddressSchemeCustomFields(body)

Update a locationAddressScheme custom fields

Updates an existing locationAddressScheme custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationAddressSchemeApi();

var body = new infoplus.LocationAddressScheme(); // LocationAddressScheme | LocationAddressScheme to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationAddressSchemeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationAddressScheme**](LocationAddressScheme.md)| LocationAddressScheme to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

