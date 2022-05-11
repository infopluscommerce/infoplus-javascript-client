# infoplus.Gs1128LabelApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGs1128LabelAudit**](Gs1128LabelApi.md#addGs1128LabelAudit) | **PUT** /v3.0/gs1128Label/{gs1128LabelId}/audit/{gs1128LabelAudit} | Add new audit for a gs1128Label
[**addGs1128LabelFile**](Gs1128LabelApi.md#addGs1128LabelFile) | **POST** /v3.0/gs1128Label/{gs1128LabelId}/file/{fileName} | Attach a file to a gs1128Label
[**addGs1128LabelFileByURL**](Gs1128LabelApi.md#addGs1128LabelFileByURL) | **POST** /v3.0/gs1128Label/{gs1128LabelId}/file | Attach a file to a gs1128Label by URL.
[**addGs1128LabelTag**](Gs1128LabelApi.md#addGs1128LabelTag) | **PUT** /v3.0/gs1128Label/{gs1128LabelId}/tag/{gs1128LabelTag} | Add new tags for a gs1128Label.
[**deleteGs1128Label**](Gs1128LabelApi.md#deleteGs1128Label) | **DELETE** /v3.0/gs1128Label/{gs1128LabelId} | Delete a gs1128Label
[**deleteGs1128LabelFile**](Gs1128LabelApi.md#deleteGs1128LabelFile) | **DELETE** /v3.0/gs1128Label/{gs1128LabelId}/file/{fileId} | Delete a file for a gs1128Label.
[**deleteGs1128LabelTag**](Gs1128LabelApi.md#deleteGs1128LabelTag) | **DELETE** /v3.0/gs1128Label/{gs1128LabelId}/tag/{gs1128LabelTag} | Delete a tag for a gs1128Label.
[**getDuplicateGs1128LabelById**](Gs1128LabelApi.md#getDuplicateGs1128LabelById) | **GET** /v3.0/gs1128Label/duplicate/{gs1128LabelId} | Get a duplicated a gs1128Label by id
[**getGs1128LabelByFilter**](Gs1128LabelApi.md#getGs1128LabelByFilter) | **GET** /v3.0/gs1128Label/search | Search gs1128Labels by filter
[**getGs1128LabelById**](Gs1128LabelApi.md#getGs1128LabelById) | **GET** /v3.0/gs1128Label/{gs1128LabelId} | Get a gs1128Label by id
[**getGs1128LabelFiles**](Gs1128LabelApi.md#getGs1128LabelFiles) | **GET** /v3.0/gs1128Label/{gs1128LabelId}/file | Get the files for a gs1128Label.
[**getGs1128LabelTags**](Gs1128LabelApi.md#getGs1128LabelTags) | **GET** /v3.0/gs1128Label/{gs1128LabelId}/tag | Get the tags for a gs1128Label.
[**updateGs1128LabelCustomFields**](Gs1128LabelApi.md#updateGs1128LabelCustomFields) | **PUT** /v3.0/gs1128Label/customFields | Update a gs1128Label custom fields


<a name="addGs1128LabelAudit"></a>
# **addGs1128LabelAudit**
> addGs1128LabelAudit(gs1128LabelId, gs1128LabelAudit)

Add new audit for a gs1128Label

Adds an audit to an existing gs1128Label.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to add an audit to

var gs1128LabelAudit = "gs1128LabelAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128LabelAudit(gs1128LabelId, gs1128LabelAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to add an audit to | 
 **gs1128LabelAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGs1128LabelFile"></a>
# **addGs1128LabelFile**
> addGs1128LabelFile(gs1128LabelId, fileName)

Attach a file to a gs1128Label

Adds a file to an existing gs1128Label.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128LabelFile(gs1128LabelId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addGs1128LabelFileByURL"></a>
# **addGs1128LabelFileByURL**
> addGs1128LabelFileByURL(body, gs1128LabelId)

Attach a file to a gs1128Label by URL.

Adds a file to an existing gs1128Label by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var gs1128LabelId = 56; // Number | Id of the gs1128Label to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128LabelFileByURL(body, gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **gs1128LabelId** | **Number**| Id of the gs1128Label to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGs1128LabelTag"></a>
# **addGs1128LabelTag**
> addGs1128LabelTag(gs1128LabelId, gs1128LabelTag)

Add new tags for a gs1128Label.

Adds a tag to an existing gs1128Label.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to add a tag to

var gs1128LabelTag = "gs1128LabelTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGs1128LabelTag(gs1128LabelId, gs1128LabelTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to add a tag to | 
 **gs1128LabelTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGs1128Label"></a>
# **deleteGs1128Label**
> deleteGs1128Label(gs1128LabelId)

Delete a gs1128Label

Deletes the gs1128Label identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128Label(gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGs1128LabelFile"></a>
# **deleteGs1128LabelFile**
> deleteGs1128LabelFile(gs1128LabelId, fileId)

Delete a file for a gs1128Label.

Deletes an existing gs1128Label file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128LabelFile(gs1128LabelId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteGs1128LabelTag"></a>
# **deleteGs1128LabelTag**
> deleteGs1128LabelTag(gs1128LabelId, gs1128LabelTag)

Delete a tag for a gs1128Label.

Deletes an existing gs1128Label tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to remove tag from

var gs1128LabelTag = "gs1128LabelTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGs1128LabelTag(gs1128LabelId, gs1128LabelTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to remove tag from | 
 **gs1128LabelTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateGs1128LabelById"></a>
# **getDuplicateGs1128LabelById**
> GS1128Label getDuplicateGs1128LabelById(gs1128LabelId)

Get a duplicated a gs1128Label by id

Returns a duplicated gs1128Label identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateGs1128LabelById(gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to be duplicated. | 

### Return type

[**GS1128Label**](GS1128Label.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128LabelByFilter"></a>
# **getGs1128LabelByFilter**
> [GS1128Label] getGs1128LabelByFilter(opts)

Search gs1128Labels by filter

Returns the list of gs1128Labels that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

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
apiInstance.getGs1128LabelByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[GS1128Label]**](GS1128Label.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128LabelById"></a>
# **getGs1128LabelById**
> GS1128Label getGs1128LabelById(gs1128LabelId)

Get a gs1128Label by id

Returns the gs1128Label identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGs1128LabelById(gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to be returned. | 

### Return type

[**GS1128Label**](GS1128Label.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128LabelFiles"></a>
# **getGs1128LabelFiles**
> getGs1128LabelFiles(gs1128LabelId)

Get the files for a gs1128Label.

Get all existing gs1128Label files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGs1128LabelFiles(gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGs1128LabelTags"></a>
# **getGs1128LabelTags**
> getGs1128LabelTags(gs1128LabelId)

Get the tags for a gs1128Label.

Get all existing gs1128Label tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var gs1128LabelId = 56; // Number | Id of the gs1128Label to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGs1128LabelTags(gs1128LabelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gs1128LabelId** | **Number**| Id of the gs1128Label to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGs1128LabelCustomFields"></a>
# **updateGs1128LabelCustomFields**
> updateGs1128LabelCustomFields(body)

Update a gs1128Label custom fields

Updates an existing gs1128Label custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.Gs1128LabelApi();

var body = new infoplus.GS1128Label(); // GS1128Label | Gs1128Label to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGs1128LabelCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GS1128Label**](GS1128Label.md)| Gs1128Label to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

