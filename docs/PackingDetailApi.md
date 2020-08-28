# infoplus.PackingDetailApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPackingDetailAudit**](PackingDetailApi.md#addPackingDetailAudit) | **PUT** /beta/packingDetail/{packingDetailId}/audit/{packingDetailAudit} | Add new audit for a packingDetail
[**addPackingDetailFile**](PackingDetailApi.md#addPackingDetailFile) | **POST** /beta/packingDetail/{packingDetailId}/file/{fileName} | Attach a file to a packingDetail
[**addPackingDetailFileByURL**](PackingDetailApi.md#addPackingDetailFileByURL) | **POST** /beta/packingDetail/{packingDetailId}/file | Attach a file to a packingDetail by URL.
[**addPackingDetailTag**](PackingDetailApi.md#addPackingDetailTag) | **PUT** /beta/packingDetail/{packingDetailId}/tag/{packingDetailTag} | Add new tags for a packingDetail.
[**deletePackingDetailFile**](PackingDetailApi.md#deletePackingDetailFile) | **DELETE** /beta/packingDetail/{packingDetailId}/file/{fileId} | Delete a file for a packingDetail.
[**deletePackingDetailTag**](PackingDetailApi.md#deletePackingDetailTag) | **DELETE** /beta/packingDetail/{packingDetailId}/tag/{packingDetailTag} | Delete a tag for a packingDetail.
[**getDuplicatePackingDetailById**](PackingDetailApi.md#getDuplicatePackingDetailById) | **GET** /beta/packingDetail/duplicate/{packingDetailId} | Get a duplicated a packingDetail by id
[**getPackingDetailByFilter**](PackingDetailApi.md#getPackingDetailByFilter) | **GET** /beta/packingDetail/search | Search packingDetails by filter
[**getPackingDetailById**](PackingDetailApi.md#getPackingDetailById) | **GET** /beta/packingDetail/{packingDetailId} | Get a packingDetail by id
[**getPackingDetailFiles**](PackingDetailApi.md#getPackingDetailFiles) | **GET** /beta/packingDetail/{packingDetailId}/file | Get the files for a packingDetail.
[**getPackingDetailTags**](PackingDetailApi.md#getPackingDetailTags) | **GET** /beta/packingDetail/{packingDetailId}/tag | Get the tags for a packingDetail.
[**updatePackingDetailCustomFields**](PackingDetailApi.md#updatePackingDetailCustomFields) | **PUT** /beta/packingDetail/customFields | Update a packingDetail custom fields


<a name="addPackingDetailAudit"></a>
# **addPackingDetailAudit**
> addPackingDetailAudit(packingDetailId, packingDetailAudit)

Add new audit for a packingDetail

Adds an audit to an existing packingDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to add an audit to

var packingDetailAudit = "packingDetailAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingDetailAudit(packingDetailId, packingDetailAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to add an audit to | 
 **packingDetailAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingDetailFile"></a>
# **addPackingDetailFile**
> addPackingDetailFile(packingDetailId, fileName)

Attach a file to a packingDetail

Adds a file to an existing packingDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingDetailFile(packingDetailId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPackingDetailFileByURL"></a>
# **addPackingDetailFileByURL**
> addPackingDetailFileByURL(body, packingDetailId)

Attach a file to a packingDetail by URL.

Adds a file to an existing packingDetail by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var packingDetailId = 56; // Number | Id of the packingDetail to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingDetailFileByURL(body, packingDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **packingDetailId** | **Number**| Id of the packingDetail to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingDetailTag"></a>
# **addPackingDetailTag**
> addPackingDetailTag(packingDetailId, packingDetailTag)

Add new tags for a packingDetail.

Adds a tag to an existing packingDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to add a tag to

var packingDetailTag = "packingDetailTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingDetailTag(packingDetailId, packingDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to add a tag to | 
 **packingDetailTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePackingDetailFile"></a>
# **deletePackingDetailFile**
> deletePackingDetailFile(packingDetailId, fileId)

Delete a file for a packingDetail.

Deletes an existing packingDetail file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingDetailFile(packingDetailId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePackingDetailTag"></a>
# **deletePackingDetailTag**
> deletePackingDetailTag(packingDetailId, packingDetailTag)

Delete a tag for a packingDetail.

Deletes an existing packingDetail tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to remove tag from

var packingDetailTag = "packingDetailTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingDetailTag(packingDetailId, packingDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to remove tag from | 
 **packingDetailTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePackingDetailById"></a>
# **getDuplicatePackingDetailById**
> PackingDetail getDuplicatePackingDetailById(packingDetailId)

Get a duplicated a packingDetail by id

Returns a duplicated packingDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePackingDetailById(packingDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to be duplicated. | 

### Return type

[**PackingDetail**](PackingDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingDetailByFilter"></a>
# **getPackingDetailByFilter**
> [PackingDetail] getPackingDetailByFilter(opts)

Search packingDetails by filter

Returns the list of packingDetails that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

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
apiInstance.getPackingDetailByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PackingDetail]**](PackingDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingDetailById"></a>
# **getPackingDetailById**
> PackingDetail getPackingDetailById(packingDetailId)

Get a packingDetail by id

Returns the packingDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackingDetailById(packingDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to be returned. | 

### Return type

[**PackingDetail**](PackingDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingDetailFiles"></a>
# **getPackingDetailFiles**
> getPackingDetailFiles(packingDetailId)

Get the files for a packingDetail.

Get all existing packingDetail files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingDetailFiles(packingDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingDetailTags"></a>
# **getPackingDetailTags**
> getPackingDetailTags(packingDetailId)

Get the tags for a packingDetail.

Get all existing packingDetail tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var packingDetailId = 56; // Number | Id of the packingDetail to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingDetailTags(packingDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingDetailId** | **Number**| Id of the packingDetail to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePackingDetailCustomFields"></a>
# **updatePackingDetailCustomFields**
> updatePackingDetailCustomFields(body)

Update a packingDetail custom fields

Updates an existing packingDetail custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingDetailApi();

var body = new infoplus.PackingDetail(); // PackingDetail | PackingDetail to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePackingDetailCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackingDetail**](PackingDetail.md)| PackingDetail to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

