# infoplus.ZipCodeZoneApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addZipCodeZone**](ZipCodeZoneApi.md#addZipCodeZone) | **POST** /beta/zipCodeZone | Create a zipCodeZone
[**addZipCodeZoneAudit**](ZipCodeZoneApi.md#addZipCodeZoneAudit) | **PUT** /beta/zipCodeZone/{zipCodeZoneId}/audit/{zipCodeZoneAudit} | Add new audit for a zipCodeZone
[**addZipCodeZoneFile**](ZipCodeZoneApi.md#addZipCodeZoneFile) | **POST** /beta/zipCodeZone/{zipCodeZoneId}/file/{fileName} | Attach a file to a zipCodeZone
[**addZipCodeZoneFileByURL**](ZipCodeZoneApi.md#addZipCodeZoneFileByURL) | **POST** /beta/zipCodeZone/{zipCodeZoneId}/file | Attach a file to a zipCodeZone by URL.
[**addZipCodeZoneTag**](ZipCodeZoneApi.md#addZipCodeZoneTag) | **PUT** /beta/zipCodeZone/{zipCodeZoneId}/tag/{zipCodeZoneTag} | Add new tags for a zipCodeZone.
[**deleteZipCodeZone**](ZipCodeZoneApi.md#deleteZipCodeZone) | **DELETE** /beta/zipCodeZone/{zipCodeZoneId} | Delete a zipCodeZone
[**deleteZipCodeZoneFile**](ZipCodeZoneApi.md#deleteZipCodeZoneFile) | **DELETE** /beta/zipCodeZone/{zipCodeZoneId}/file/{fileId} | Delete a file for a zipCodeZone.
[**deleteZipCodeZoneTag**](ZipCodeZoneApi.md#deleteZipCodeZoneTag) | **DELETE** /beta/zipCodeZone/{zipCodeZoneId}/tag/{zipCodeZoneTag} | Delete a tag for a zipCodeZone.
[**getDuplicateZipCodeZoneById**](ZipCodeZoneApi.md#getDuplicateZipCodeZoneById) | **GET** /beta/zipCodeZone/duplicate/{zipCodeZoneId} | Get a duplicated a zipCodeZone by id
[**getZipCodeZoneByFilter**](ZipCodeZoneApi.md#getZipCodeZoneByFilter) | **GET** /beta/zipCodeZone/search | Search zipCodeZones by filter
[**getZipCodeZoneById**](ZipCodeZoneApi.md#getZipCodeZoneById) | **GET** /beta/zipCodeZone/{zipCodeZoneId} | Get a zipCodeZone by id
[**getZipCodeZoneFiles**](ZipCodeZoneApi.md#getZipCodeZoneFiles) | **GET** /beta/zipCodeZone/{zipCodeZoneId}/file | Get the files for a zipCodeZone.
[**getZipCodeZoneTags**](ZipCodeZoneApi.md#getZipCodeZoneTags) | **GET** /beta/zipCodeZone/{zipCodeZoneId}/tag | Get the tags for a zipCodeZone.
[**updateZipCodeZone**](ZipCodeZoneApi.md#updateZipCodeZone) | **PUT** /beta/zipCodeZone | Update a zipCodeZone


<a name="addZipCodeZone"></a>
# **addZipCodeZone**
> ZipCodeZone addZipCodeZone(body)

Create a zipCodeZone

Inserts a new zipCodeZone using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var body = new infoplus.ZipCodeZone(); // ZipCodeZone | ZipCodeZone to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addZipCodeZone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ZipCodeZone**](ZipCodeZone.md)| ZipCodeZone to be inserted. | 

### Return type

[**ZipCodeZone**](ZipCodeZone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZipCodeZoneAudit"></a>
# **addZipCodeZoneAudit**
> addZipCodeZoneAudit(zipCodeZoneId, zipCodeZoneAudit)

Add new audit for a zipCodeZone

Adds an audit to an existing zipCodeZone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to add an audit to

var zipCodeZoneAudit = "zipCodeZoneAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZipCodeZoneAudit(zipCodeZoneId, zipCodeZoneAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to add an audit to | 
 **zipCodeZoneAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZipCodeZoneFile"></a>
# **addZipCodeZoneFile**
> addZipCodeZoneFile(zipCodeZoneId, fileName)

Attach a file to a zipCodeZone

Adds a file to an existing zipCodeZone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZipCodeZoneFile(zipCodeZoneId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addZipCodeZoneFileByURL"></a>
# **addZipCodeZoneFileByURL**
> addZipCodeZoneFileByURL(body, zipCodeZoneId)

Attach a file to a zipCodeZone by URL.

Adds a file to an existing zipCodeZone by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZipCodeZoneFileByURL(body, zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addZipCodeZoneTag"></a>
# **addZipCodeZoneTag**
> addZipCodeZoneTag(zipCodeZoneId, zipCodeZoneTag)

Add new tags for a zipCodeZone.

Adds a tag to an existing zipCodeZone.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to add a tag to

var zipCodeZoneTag = "zipCodeZoneTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZipCodeZoneTag(zipCodeZoneId, zipCodeZoneTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to add a tag to | 
 **zipCodeZoneTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteZipCodeZone"></a>
# **deleteZipCodeZone**
> deleteZipCodeZone(zipCodeZoneId)

Delete a zipCodeZone

Deletes the zipCodeZone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZipCodeZone(zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteZipCodeZoneFile"></a>
# **deleteZipCodeZoneFile**
> deleteZipCodeZoneFile(zipCodeZoneId, fileId)

Delete a file for a zipCodeZone.

Deletes an existing zipCodeZone file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZipCodeZoneFile(zipCodeZoneId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteZipCodeZoneTag"></a>
# **deleteZipCodeZoneTag**
> deleteZipCodeZoneTag(zipCodeZoneId, zipCodeZoneTag)

Delete a tag for a zipCodeZone.

Deletes an existing zipCodeZone tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to remove tag from

var zipCodeZoneTag = "zipCodeZoneTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZipCodeZoneTag(zipCodeZoneId, zipCodeZoneTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to remove tag from | 
 **zipCodeZoneTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateZipCodeZoneById"></a>
# **getDuplicateZipCodeZoneById**
> ZipCodeZone getDuplicateZipCodeZoneById(zipCodeZoneId)

Get a duplicated a zipCodeZone by id

Returns a duplicated zipCodeZone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateZipCodeZoneById(zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to be duplicated. | 

### Return type

[**ZipCodeZone**](ZipCodeZone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZipCodeZoneByFilter"></a>
# **getZipCodeZoneByFilter**
> [ZipCodeZone] getZipCodeZoneByFilter(opts)

Search zipCodeZones by filter

Returns the list of zipCodeZones that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

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
apiInstance.getZipCodeZoneByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ZipCodeZone]**](ZipCodeZone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZipCodeZoneById"></a>
# **getZipCodeZoneById**
> ZipCodeZone getZipCodeZoneById(zipCodeZoneId)

Get a zipCodeZone by id

Returns the zipCodeZone identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZipCodeZoneById(zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to be returned. | 

### Return type

[**ZipCodeZone**](ZipCodeZone.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZipCodeZoneFiles"></a>
# **getZipCodeZoneFiles**
> getZipCodeZoneFiles(zipCodeZoneId)

Get the files for a zipCodeZone.

Get all existing zipCodeZone files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getZipCodeZoneFiles(zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZipCodeZoneTags"></a>
# **getZipCodeZoneTags**
> getZipCodeZoneTags(zipCodeZoneId)

Get the tags for a zipCodeZone.

Get all existing zipCodeZone tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var zipCodeZoneId = 56; // Number | Id of the zipCodeZone to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getZipCodeZoneTags(zipCodeZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipCodeZoneId** | **Number**| Id of the zipCodeZone to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateZipCodeZone"></a>
# **updateZipCodeZone**
> updateZipCodeZone(body)

Update a zipCodeZone

Updates an existing zipCodeZone using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ZipCodeZoneApi();

var body = new infoplus.ZipCodeZone(); // ZipCodeZone | ZipCodeZone to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateZipCodeZone(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ZipCodeZone**](ZipCodeZone.md)| ZipCodeZone to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

