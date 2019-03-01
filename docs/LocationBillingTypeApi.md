# infoplus.LocationBillingTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLocationBillingType**](LocationBillingTypeApi.md#addLocationBillingType) | **POST** /beta/locationBillingType | Create a locationBillingType
[**addLocationBillingTypeAudit**](LocationBillingTypeApi.md#addLocationBillingTypeAudit) | **PUT** /beta/locationBillingType/{locationBillingTypeId}/audit/{locationBillingTypeAudit} | Add new audit for a locationBillingType
[**addLocationBillingTypeFile**](LocationBillingTypeApi.md#addLocationBillingTypeFile) | **POST** /beta/locationBillingType/{locationBillingTypeId}/file/{fileName} | Attach a file to a locationBillingType
[**addLocationBillingTypeTag**](LocationBillingTypeApi.md#addLocationBillingTypeTag) | **PUT** /beta/locationBillingType/{locationBillingTypeId}/tag/{locationBillingTypeTag} | Add new tags for a locationBillingType.
[**deleteLocationBillingType**](LocationBillingTypeApi.md#deleteLocationBillingType) | **DELETE** /beta/locationBillingType/{locationBillingTypeId} | Delete a locationBillingType
[**deleteLocationBillingTypeTag**](LocationBillingTypeApi.md#deleteLocationBillingTypeTag) | **DELETE** /beta/locationBillingType/{locationBillingTypeId}/tag/{locationBillingTypeTag} | Delete a tag for a locationBillingType.
[**getDuplicateLocationBillingTypeById**](LocationBillingTypeApi.md#getDuplicateLocationBillingTypeById) | **GET** /beta/locationBillingType/duplicate/{locationBillingTypeId} | Get a duplicated a locationBillingType by id
[**getLocationBillingTypeByFilter**](LocationBillingTypeApi.md#getLocationBillingTypeByFilter) | **GET** /beta/locationBillingType/search | Search locationBillingTypes by filter
[**getLocationBillingTypeById**](LocationBillingTypeApi.md#getLocationBillingTypeById) | **GET** /beta/locationBillingType/{locationBillingTypeId} | Get a locationBillingType by id
[**getLocationBillingTypeTags**](LocationBillingTypeApi.md#getLocationBillingTypeTags) | **GET** /beta/locationBillingType/{locationBillingTypeId}/tag | Get the tags for a locationBillingType.
[**updateLocationBillingType**](LocationBillingTypeApi.md#updateLocationBillingType) | **PUT** /beta/locationBillingType | Update a locationBillingType
[**updateLocationBillingTypeCustomFields**](LocationBillingTypeApi.md#updateLocationBillingTypeCustomFields) | **PUT** /beta/locationBillingType/customFields | Update a locationBillingType custom fields


<a name="addLocationBillingType"></a>
# **addLocationBillingType**
> LocationBillingType addLocationBillingType(body)

Create a locationBillingType

Inserts a new locationBillingType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var body = new infoplus.LocationBillingType(); // LocationBillingType | LocationBillingType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLocationBillingType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationBillingType**](LocationBillingType.md)| LocationBillingType to be inserted. | 

### Return type

[**LocationBillingType**](LocationBillingType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationBillingTypeAudit"></a>
# **addLocationBillingTypeAudit**
> addLocationBillingTypeAudit(locationBillingTypeId, locationBillingTypeAudit)

Add new audit for a locationBillingType

Adds an audit to an existing locationBillingType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to add an audit to

var locationBillingTypeAudit = "locationBillingTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationBillingTypeAudit(locationBillingTypeId, locationBillingTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to add an audit to | 
 **locationBillingTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLocationBillingTypeFile"></a>
# **addLocationBillingTypeFile**
> addLocationBillingTypeFile(locationBillingTypeId, fileName)

Attach a file to a locationBillingType

Adds a file to an existing locationBillingType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationBillingTypeFile(locationBillingTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLocationBillingTypeTag"></a>
# **addLocationBillingTypeTag**
> addLocationBillingTypeTag(locationBillingTypeId, locationBillingTypeTag)

Add new tags for a locationBillingType.

Adds a tag to an existing locationBillingType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to add a tag to

var locationBillingTypeTag = "locationBillingTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLocationBillingTypeTag(locationBillingTypeId, locationBillingTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to add a tag to | 
 **locationBillingTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLocationBillingType"></a>
# **deleteLocationBillingType**
> deleteLocationBillingType(locationBillingTypeId)

Delete a locationBillingType

Deletes the locationBillingType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationBillingType(locationBillingTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLocationBillingTypeTag"></a>
# **deleteLocationBillingTypeTag**
> deleteLocationBillingTypeTag(locationBillingTypeId, locationBillingTypeTag)

Delete a tag for a locationBillingType.

Deletes an existing locationBillingType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to remove tag from

var locationBillingTypeTag = "locationBillingTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLocationBillingTypeTag(locationBillingTypeId, locationBillingTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to remove tag from | 
 **locationBillingTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLocationBillingTypeById"></a>
# **getDuplicateLocationBillingTypeById**
> LocationBillingType getDuplicateLocationBillingTypeById(locationBillingTypeId)

Get a duplicated a locationBillingType by id

Returns a duplicated locationBillingType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLocationBillingTypeById(locationBillingTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to be duplicated. | 

### Return type

[**LocationBillingType**](LocationBillingType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationBillingTypeByFilter"></a>
# **getLocationBillingTypeByFilter**
> [LocationBillingType] getLocationBillingTypeByFilter(opts)

Search locationBillingTypes by filter

Returns the list of locationBillingTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

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
apiInstance.getLocationBillingTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LocationBillingType]**](LocationBillingType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationBillingTypeById"></a>
# **getLocationBillingTypeById**
> LocationBillingType getLocationBillingTypeById(locationBillingTypeId)

Get a locationBillingType by id

Returns the locationBillingType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocationBillingTypeById(locationBillingTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to be returned. | 

### Return type

[**LocationBillingType**](LocationBillingType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLocationBillingTypeTags"></a>
# **getLocationBillingTypeTags**
> getLocationBillingTypeTags(locationBillingTypeId)

Get the tags for a locationBillingType.

Get all existing locationBillingType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var locationBillingTypeId = 56; // Number | Id of the locationBillingType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLocationBillingTypeTags(locationBillingTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationBillingTypeId** | **Number**| Id of the locationBillingType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLocationBillingType"></a>
# **updateLocationBillingType**
> updateLocationBillingType(body)

Update a locationBillingType

Updates an existing locationBillingType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var body = new infoplus.LocationBillingType(); // LocationBillingType | LocationBillingType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationBillingType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationBillingType**](LocationBillingType.md)| LocationBillingType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocationBillingTypeCustomFields"></a>
# **updateLocationBillingTypeCustomFields**
> updateLocationBillingTypeCustomFields(body)

Update a locationBillingType custom fields

Updates an existing locationBillingType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LocationBillingTypeApi();

var body = new infoplus.LocationBillingType(); // LocationBillingType | LocationBillingType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLocationBillingTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationBillingType**](LocationBillingType.md)| LocationBillingType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

