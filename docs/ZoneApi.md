# infoplus.ZoneApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addZone**](ZoneApi.md#addZone) | **POST** /v3.0/zone | Create a zone
[**addZoneAudit**](ZoneApi.md#addZoneAudit) | **PUT** /v3.0/zone/{zoneId}/audit/{zoneAudit} | Add new audit for a zone
[**addZoneFile**](ZoneApi.md#addZoneFile) | **POST** /v3.0/zone/{zoneId}/file/{fileName} | Attach a file to a zone
[**addZoneFileByURL**](ZoneApi.md#addZoneFileByURL) | **POST** /v3.0/zone/{zoneId}/file | Attach a file to a zone by URL.
[**addZoneTag**](ZoneApi.md#addZoneTag) | **PUT** /v3.0/zone/{zoneId}/tag/{zoneTag} | Add new tags for a zone.
[**deleteZone**](ZoneApi.md#deleteZone) | **DELETE** /v3.0/zone/{zoneId} | Delete a zone
[**deleteZoneFile**](ZoneApi.md#deleteZoneFile) | **DELETE** /v3.0/zone/{zoneId}/file/{fileId} | Delete a file for a zone.
[**deleteZoneTag**](ZoneApi.md#deleteZoneTag) | **DELETE** /v3.0/zone/{zoneId}/tag/{zoneTag} | Delete a tag for a zone.
[**getDuplicateZoneById**](ZoneApi.md#getDuplicateZoneById) | **GET** /v3.0/zone/duplicate/{zoneId} | Get a duplicated a zone by id
[**getZoneByFilter**](ZoneApi.md#getZoneByFilter) | **GET** /v3.0/zone/search | Search zones by filter
[**getZoneById**](ZoneApi.md#getZoneById) | **GET** /v3.0/zone/{zoneId} | Get a zone by id
[**getZoneFiles**](ZoneApi.md#getZoneFiles) | **GET** /v3.0/zone/{zoneId}/file | Get the files for a zone.
[**getZoneTags**](ZoneApi.md#getZoneTags) | **GET** /v3.0/zone/{zoneId}/tag | Get the tags for a zone.
[**updateZone**](ZoneApi.md#updateZone) | **PUT** /v3.0/zone | Update a zone
[**updateZoneCustomFields**](ZoneApi.md#updateZoneCustomFields) | **PUT** /v3.0/zone/customFields | Update a zone custom fields


<a name="addZone"></a>
# **addZone**
> Zone addZone(body)

Create a zone

Inserts a new zone using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var body = new infoplus.Zone(); // Zone | Zone to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addZone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Zone**](Zone.md)| Zone to be inserted. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZoneAudit"></a>
# **addZoneAudit**
> addZoneAudit(zoneId, zoneAudit)

Add new audit for a zone

Adds an audit to an existing zone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to add an audit to

var zoneAudit = "zoneAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZoneAudit(zoneId, zoneAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to add an audit to | 
 **zoneAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZoneFile"></a>
# **addZoneFile**
> addZoneFile(zoneId, fileName)

Attach a file to a zone

Adds a file to an existing zone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZoneFile(zoneId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addZoneFileByURL"></a>
# **addZoneFileByURL**
> addZoneFileByURL(body, zoneId)

Attach a file to a zone by URL.

Adds a file to an existing zone by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var zoneId = 56; // Number | Id of the zone to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZoneFileByURL(body, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **zoneId** | **Number**| Id of the zone to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZoneTag"></a>
# **addZoneTag**
> addZoneTag(zoneId, zoneTag)

Add new tags for a zone.

Adds a tag to an existing zone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to add a tag to

var zoneTag = "zoneTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZoneTag(zoneId, zoneTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to add a tag to | 
 **zoneTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteZone"></a>
# **deleteZone**
> deleteZone(zoneId)

Delete a zone

Deletes the zone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZone(zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteZoneFile"></a>
# **deleteZoneFile**
> deleteZoneFile(zoneId, fileId)

Delete a file for a zone.

Deletes an existing zone file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZoneFile(zoneId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteZoneTag"></a>
# **deleteZoneTag**
> deleteZoneTag(zoneId, zoneTag)

Delete a tag for a zone.

Deletes an existing zone tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to remove tag from

var zoneTag = "zoneTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZoneTag(zoneId, zoneTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to remove tag from | 
 **zoneTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateZoneById"></a>
# **getDuplicateZoneById**
> Zone getDuplicateZoneById(zoneId)

Get a duplicated a zone by id

Returns a duplicated zone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateZoneById(zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to be duplicated. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneByFilter"></a>
# **getZoneByFilter**
> [Zone] getZoneByFilter(opts)

Search zones by filter

Returns the list of zones that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

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
apiInstance.getZoneByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneById"></a>
# **getZoneById**
> Zone getZoneById(zoneId)

Get a zone by id

Returns the zone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneById(zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to be returned. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneFiles"></a>
# **getZoneFiles**
> getZoneFiles(zoneId)

Get the files for a zone.

Get all existing zone files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getZoneFiles(zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneTags"></a>
# **getZoneTags**
> getZoneTags(zoneId)

Get the tags for a zone.

Get all existing zone tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var zoneId = 56; // Number | Id of the zone to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getZoneTags(zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | **Number**| Id of the zone to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateZone"></a>
# **updateZone**
> updateZone(body)

Update a zone

Updates an existing zone using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var body = new infoplus.Zone(); // Zone | Zone to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateZone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Zone**](Zone.md)| Zone to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateZoneCustomFields"></a>
# **updateZoneCustomFields**
> updateZoneCustomFields(body)

Update a zone custom fields

Updates an existing zone custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZoneApi();

var body = new infoplus.Zone(); // Zone | Zone to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateZoneCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Zone**](Zone.md)| Zone to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

