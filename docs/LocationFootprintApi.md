# infoplus.LocationFootprintApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocationFootprint**](LocationFootprintApi.md#addLocationFootprint) | **POST** /beta/locationFootprint | Create a locationFootprint
[**addLocationFootprintAudit**](LocationFootprintApi.md#addLocationFootprintAudit) | **PUT** /beta/locationFootprint/{locationFootprintId}/audit/{locationFootprintAudit} | Add new audit for a locationFootprint
[**addLocationFootprintFile**](LocationFootprintApi.md#addLocationFootprintFile) | **POST** /beta/locationFootprint/{locationFootprintId}/file/{fileName} | Attach a file to a locationFootprint
[**addLocationFootprintTag**](LocationFootprintApi.md#addLocationFootprintTag) | **PUT** /beta/locationFootprint/{locationFootprintId}/tag/{locationFootprintTag} | Add new tags for a locationFootprint.
[**deleteLocationFootprint**](LocationFootprintApi.md#deleteLocationFootprint) | **DELETE** /beta/locationFootprint/{locationFootprintId} | Delete a locationFootprint
[**deleteLocationFootprintTag**](LocationFootprintApi.md#deleteLocationFootprintTag) | **DELETE** /beta/locationFootprint/{locationFootprintId}/tag/{locationFootprintTag} | Delete a tag for a locationFootprint.
[**getDuplicateLocationFootprintById**](LocationFootprintApi.md#getDuplicateLocationFootprintById) | **GET** /beta/locationFootprint/duplicate/{locationFootprintId} | Get a duplicated a locationFootprint by id
[**getLocationFootprintByFilter**](LocationFootprintApi.md#getLocationFootprintByFilter) | **GET** /beta/locationFootprint/search | Search locationFootprints by filter
[**getLocationFootprintById**](LocationFootprintApi.md#getLocationFootprintById) | **GET** /beta/locationFootprint/{locationFootprintId} | Get a locationFootprint by id
[**getLocationFootprintTags**](LocationFootprintApi.md#getLocationFootprintTags) | **GET** /beta/locationFootprint/{locationFootprintId}/tag | Get the tags for a locationFootprint.
[**updateLocationFootprint**](LocationFootprintApi.md#updateLocationFootprint) | **PUT** /beta/locationFootprint | Update a locationFootprint
[**updateLocationFootprintCustomFields**](LocationFootprintApi.md#updateLocationFootprintCustomFields) | **PUT** /beta/locationFootprint/customFields | Update a locationFootprint custom fields


<a name="addLocationFootprint"></a>
# **addLocationFootprint**
> LocationFootprint addLocationFootprint(body)

Create a locationFootprint

Inserts a new locationFootprint using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var body = new infoplus.LocationFootprint(); // LocationFootprint | LocationFootprint to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLocationFootprint(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be inserted. | 

### Return type

[**LocationFootprint**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationFootprintAudit"></a>
# **addLocationFootprintAudit**
> addLocationFootprintAudit(locationFootprintId, locationFootprintAudit)

Add new audit for a locationFootprint

Adds an audit to an existing locationFootprint.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to add an audit to

var locationFootprintAudit = "locationFootprintAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationFootprintAudit(locationFootprintId, locationFootprintAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to add an audit to | 
 **locationFootprintAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationFootprintFile"></a>
# **addLocationFootprintFile**
> addLocationFootprintFile(locationFootprintId, fileName)

Attach a file to a locationFootprint

Adds a file to an existing locationFootprint.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationFootprintFile(locationFootprintId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLocationFootprintTag"></a>
# **addLocationFootprintTag**
> addLocationFootprintTag(locationFootprintId, locationFootprintTag)

Add new tags for a locationFootprint.

Adds a tag to an existing locationFootprint.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to add a tag to

var locationFootprintTag = "locationFootprintTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationFootprintTag(locationFootprintId, locationFootprintTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to add a tag to | 
 **locationFootprintTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocationFootprint"></a>
# **deleteLocationFootprint**
> deleteLocationFootprint(locationFootprintId)

Delete a locationFootprint

Deletes the locationFootprint identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationFootprint(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLocationFootprintTag"></a>
# **deleteLocationFootprintTag**
> deleteLocationFootprintTag(locationFootprintId, locationFootprintTag)

Delete a tag for a locationFootprint.

Deletes an existing locationFootprint tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to remove tag from

var locationFootprintTag = "locationFootprintTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationFootprintTag(locationFootprintId, locationFootprintTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to remove tag from | 
 **locationFootprintTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLocationFootprintById"></a>
# **getDuplicateLocationFootprintById**
> LocationFootprint getDuplicateLocationFootprintById(locationFootprintId)

Get a duplicated a locationFootprint by id

Returns a duplicated locationFootprint identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLocationFootprintById(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to be duplicated. | 

### Return type

[**LocationFootprint**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationFootprintByFilter"></a>
# **getLocationFootprintByFilter**
> [LocationFootprint] getLocationFootprintByFilter(opts)

Search locationFootprints by filter

Returns the list of locationFootprints that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

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
apiInstance.getLocationFootprintByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LocationFootprint]**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationFootprintById"></a>
# **getLocationFootprintById**
> LocationFootprint getLocationFootprintById(locationFootprintId)

Get a locationFootprint by id

Returns the locationFootprint identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocationFootprintById(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to be returned. | 

### Return type

[**LocationFootprint**](LocationFootprint.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationFootprintTags"></a>
# **getLocationFootprintTags**
> getLocationFootprintTags(locationFootprintId)

Get the tags for a locationFootprint.

Get all existing locationFootprint tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var locationFootprintId = 56; // Number | Id of the locationFootprint to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLocationFootprintTags(locationFootprintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationFootprintId** | **Number**| Id of the locationFootprint to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocationFootprint"></a>
# **updateLocationFootprint**
> updateLocationFootprint(body)

Update a locationFootprint

Updates an existing locationFootprint using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var body = new infoplus.LocationFootprint(); // LocationFootprint | LocationFootprint to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationFootprint(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocationFootprintCustomFields"></a>
# **updateLocationFootprintCustomFields**
> updateLocationFootprintCustomFields(body)

Update a locationFootprint custom fields

Updates an existing locationFootprint custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationFootprintApi();

var body = new infoplus.LocationFootprint(); // LocationFootprint | LocationFootprint to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationFootprintCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationFootprint**](LocationFootprint.md)| LocationFootprint to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

