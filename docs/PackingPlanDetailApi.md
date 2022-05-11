# infoplus.PackingPlanDetailApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPackingPlanDetailAudit**](PackingPlanDetailApi.md#addPackingPlanDetailAudit) | **PUT** /v3.0/packingPlanDetail/{packingPlanDetailId}/audit/{packingPlanDetailAudit} | Add new audit for a packingPlanDetail
[**addPackingPlanDetailFile**](PackingPlanDetailApi.md#addPackingPlanDetailFile) | **POST** /v3.0/packingPlanDetail/{packingPlanDetailId}/file/{fileName} | Attach a file to a packingPlanDetail
[**addPackingPlanDetailFileByURL**](PackingPlanDetailApi.md#addPackingPlanDetailFileByURL) | **POST** /v3.0/packingPlanDetail/{packingPlanDetailId}/file | Attach a file to a packingPlanDetail by URL.
[**addPackingPlanDetailTag**](PackingPlanDetailApi.md#addPackingPlanDetailTag) | **PUT** /v3.0/packingPlanDetail/{packingPlanDetailId}/tag/{packingPlanDetailTag} | Add new tags for a packingPlanDetail.
[**deletePackingPlanDetailFile**](PackingPlanDetailApi.md#deletePackingPlanDetailFile) | **DELETE** /v3.0/packingPlanDetail/{packingPlanDetailId}/file/{fileId} | Delete a file for a packingPlanDetail.
[**deletePackingPlanDetailTag**](PackingPlanDetailApi.md#deletePackingPlanDetailTag) | **DELETE** /v3.0/packingPlanDetail/{packingPlanDetailId}/tag/{packingPlanDetailTag} | Delete a tag for a packingPlanDetail.
[**getDuplicatePackingPlanDetailById**](PackingPlanDetailApi.md#getDuplicatePackingPlanDetailById) | **GET** /v3.0/packingPlanDetail/duplicate/{packingPlanDetailId} | Get a duplicated a packingPlanDetail by id
[**getPackingPlanDetailByFilter**](PackingPlanDetailApi.md#getPackingPlanDetailByFilter) | **GET** /v3.0/packingPlanDetail/search | Search packingPlanDetails by filter
[**getPackingPlanDetailById**](PackingPlanDetailApi.md#getPackingPlanDetailById) | **GET** /v3.0/packingPlanDetail/{packingPlanDetailId} | Get a packingPlanDetail by id
[**getPackingPlanDetailFiles**](PackingPlanDetailApi.md#getPackingPlanDetailFiles) | **GET** /v3.0/packingPlanDetail/{packingPlanDetailId}/file | Get the files for a packingPlanDetail.
[**getPackingPlanDetailTags**](PackingPlanDetailApi.md#getPackingPlanDetailTags) | **GET** /v3.0/packingPlanDetail/{packingPlanDetailId}/tag | Get the tags for a packingPlanDetail.
[**updatePackingPlanDetailCustomFields**](PackingPlanDetailApi.md#updatePackingPlanDetailCustomFields) | **PUT** /v3.0/packingPlanDetail/customFields | Update a packingPlanDetail custom fields


<a name="addPackingPlanDetailAudit"></a>
# **addPackingPlanDetailAudit**
> addPackingPlanDetailAudit(packingPlanDetailId, packingPlanDetailAudit)

Add new audit for a packingPlanDetail

Adds an audit to an existing packingPlanDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to add an audit to

var packingPlanDetailAudit = "packingPlanDetailAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanDetailAudit(packingPlanDetailId, packingPlanDetailAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to add an audit to | 
 **packingPlanDetailAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingPlanDetailFile"></a>
# **addPackingPlanDetailFile**
> addPackingPlanDetailFile(packingPlanDetailId, fileName)

Attach a file to a packingPlanDetail

Adds a file to an existing packingPlanDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanDetailFile(packingPlanDetailId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPackingPlanDetailFileByURL"></a>
# **addPackingPlanDetailFileByURL**
> addPackingPlanDetailFileByURL(body, packingPlanDetailId)

Attach a file to a packingPlanDetail by URL.

Adds a file to an existing packingPlanDetail by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanDetailFileByURL(body, packingPlanDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingPlanDetailTag"></a>
# **addPackingPlanDetailTag**
> addPackingPlanDetailTag(packingPlanDetailId, packingPlanDetailTag)

Add new tags for a packingPlanDetail.

Adds a tag to an existing packingPlanDetail.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to add a tag to

var packingPlanDetailTag = "packingPlanDetailTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanDetailTag(packingPlanDetailId, packingPlanDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to add a tag to | 
 **packingPlanDetailTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePackingPlanDetailFile"></a>
# **deletePackingPlanDetailFile**
> deletePackingPlanDetailFile(packingPlanDetailId, fileId)

Delete a file for a packingPlanDetail.

Deletes an existing packingPlanDetail file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingPlanDetailFile(packingPlanDetailId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePackingPlanDetailTag"></a>
# **deletePackingPlanDetailTag**
> deletePackingPlanDetailTag(packingPlanDetailId, packingPlanDetailTag)

Delete a tag for a packingPlanDetail.

Deletes an existing packingPlanDetail tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to remove tag from

var packingPlanDetailTag = "packingPlanDetailTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingPlanDetailTag(packingPlanDetailId, packingPlanDetailTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to remove tag from | 
 **packingPlanDetailTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePackingPlanDetailById"></a>
# **getDuplicatePackingPlanDetailById**
> PackingPlanDetail getDuplicatePackingPlanDetailById(packingPlanDetailId)

Get a duplicated a packingPlanDetail by id

Returns a duplicated packingPlanDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePackingPlanDetailById(packingPlanDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to be duplicated. | 

### Return type

[**PackingPlanDetail**](PackingPlanDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanDetailByFilter"></a>
# **getPackingPlanDetailByFilter**
> [PackingPlanDetail] getPackingPlanDetailByFilter(opts)

Search packingPlanDetails by filter

Returns the list of packingPlanDetails that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

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
apiInstance.getPackingPlanDetailByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PackingPlanDetail]**](PackingPlanDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanDetailById"></a>
# **getPackingPlanDetailById**
> PackingPlanDetail getPackingPlanDetailById(packingPlanDetailId)

Get a packingPlanDetail by id

Returns the packingPlanDetail identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackingPlanDetailById(packingPlanDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to be returned. | 

### Return type

[**PackingPlanDetail**](PackingPlanDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanDetailFiles"></a>
# **getPackingPlanDetailFiles**
> getPackingPlanDetailFiles(packingPlanDetailId)

Get the files for a packingPlanDetail.

Get all existing packingPlanDetail files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingPlanDetailFiles(packingPlanDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanDetailTags"></a>
# **getPackingPlanDetailTags**
> getPackingPlanDetailTags(packingPlanDetailId)

Get the tags for a packingPlanDetail.

Get all existing packingPlanDetail tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var packingPlanDetailId = 56; // Number | Id of the packingPlanDetail to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingPlanDetailTags(packingPlanDetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanDetailId** | **Number**| Id of the packingPlanDetail to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePackingPlanDetailCustomFields"></a>
# **updatePackingPlanDetailCustomFields**
> updatePackingPlanDetailCustomFields(body)

Update a packingPlanDetail custom fields

Updates an existing packingPlanDetail custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanDetailApi();

var body = new infoplus.PackingPlanDetail(); // PackingPlanDetail | PackingPlanDetail to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePackingPlanDetailCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackingPlanDetail**](PackingPlanDetail.md)| PackingPlanDetail to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

