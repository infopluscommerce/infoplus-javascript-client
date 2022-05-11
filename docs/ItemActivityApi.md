# infoplus.ItemActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemActivityAudit**](ItemActivityApi.md#addItemActivityAudit) | **PUT** /v3.0/itemActivity/{itemActivityId}/audit/{itemActivityAudit} | Add new audit for an itemActivity
[**addItemActivityFile**](ItemActivityApi.md#addItemActivityFile) | **POST** /v3.0/itemActivity/{itemActivityId}/file/{fileName} | Attach a file to an itemActivity
[**addItemActivityFileByURL**](ItemActivityApi.md#addItemActivityFileByURL) | **POST** /v3.0/itemActivity/{itemActivityId}/file | Attach a file to an itemActivity by URL.
[**addItemActivityTag**](ItemActivityApi.md#addItemActivityTag) | **PUT** /v3.0/itemActivity/{itemActivityId}/tag/{itemActivityTag} | Add new tags for an itemActivity.
[**deleteItemActivityFile**](ItemActivityApi.md#deleteItemActivityFile) | **DELETE** /v3.0/itemActivity/{itemActivityId}/file/{fileId} | Delete a file for an itemActivity.
[**deleteItemActivityTag**](ItemActivityApi.md#deleteItemActivityTag) | **DELETE** /v3.0/itemActivity/{itemActivityId}/tag/{itemActivityTag} | Delete a tag for an itemActivity.
[**getDuplicateItemActivityById**](ItemActivityApi.md#getDuplicateItemActivityById) | **GET** /v3.0/itemActivity/duplicate/{itemActivityId} | Get a duplicated an itemActivity by id
[**getItemActivityByFilter**](ItemActivityApi.md#getItemActivityByFilter) | **GET** /v3.0/itemActivity/search | Search itemActivitys by filter
[**getItemActivityById**](ItemActivityApi.md#getItemActivityById) | **GET** /v3.0/itemActivity/{itemActivityId} | Get an itemActivity by id
[**getItemActivityFiles**](ItemActivityApi.md#getItemActivityFiles) | **GET** /v3.0/itemActivity/{itemActivityId}/file | Get the files for an itemActivity.
[**getItemActivityTags**](ItemActivityApi.md#getItemActivityTags) | **GET** /v3.0/itemActivity/{itemActivityId}/tag | Get the tags for an itemActivity.


<a name="addItemActivityAudit"></a>
# **addItemActivityAudit**
> addItemActivityAudit(itemActivityId, itemActivityAudit)

Add new audit for an itemActivity

Adds an audit to an existing itemActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to add an audit to

var itemActivityAudit = "itemActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemActivityAudit(itemActivityId, itemActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to add an audit to | 
 **itemActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemActivityFile"></a>
# **addItemActivityFile**
> addItemActivityFile(itemActivityId, fileName)

Attach a file to an itemActivity

Adds a file to an existing itemActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemActivityFile(itemActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemActivityFileByURL"></a>
# **addItemActivityFileByURL**
> addItemActivityFileByURL(body, itemActivityId)

Attach a file to an itemActivity by URL.

Adds a file to an existing itemActivity by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var itemActivityId = 56; // Number | Id of the itemActivity to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemActivityFileByURL(body, itemActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **itemActivityId** | **Number**| Id of the itemActivity to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemActivityTag"></a>
# **addItemActivityTag**
> addItemActivityTag(itemActivityId, itemActivityTag)

Add new tags for an itemActivity.

Adds a tag to an existing itemActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to add a tag to

var itemActivityTag = "itemActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemActivityTag(itemActivityId, itemActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to add a tag to | 
 **itemActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemActivityFile"></a>
# **deleteItemActivityFile**
> deleteItemActivityFile(itemActivityId, fileId)

Delete a file for an itemActivity.

Deletes an existing itemActivity file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemActivityFile(itemActivityId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemActivityTag"></a>
# **deleteItemActivityTag**
> deleteItemActivityTag(itemActivityId, itemActivityTag)

Delete a tag for an itemActivity.

Deletes an existing itemActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to remove tag from

var itemActivityTag = "itemActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemActivityTag(itemActivityId, itemActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to remove tag from | 
 **itemActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemActivityById"></a>
# **getDuplicateItemActivityById**
> ItemActivity getDuplicateItemActivityById(itemActivityId)

Get a duplicated an itemActivity by id

Returns a duplicated itemActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemActivityById(itemActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to be duplicated. | 

### Return type

[**ItemActivity**](ItemActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemActivityByFilter"></a>
# **getItemActivityByFilter**
> [ItemActivity] getItemActivityByFilter(opts)

Search itemActivitys by filter

Returns the list of itemActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

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
apiInstance.getItemActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemActivity]**](ItemActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemActivityById"></a>
# **getItemActivityById**
> ItemActivity getItemActivityById(itemActivityId)

Get an itemActivity by id

Returns the itemActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemActivityById(itemActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to be returned. | 

### Return type

[**ItemActivity**](ItemActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemActivityFiles"></a>
# **getItemActivityFiles**
> getItemActivityFiles(itemActivityId)

Get the files for an itemActivity.

Get all existing itemActivity files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemActivityFiles(itemActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemActivityTags"></a>
# **getItemActivityTags**
> getItemActivityTags(itemActivityId)

Get the tags for an itemActivity.

Get all existing itemActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemActivityApi();

var itemActivityId = 56; // Number | Id of the itemActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemActivityTags(itemActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemActivityId** | **Number**| Id of the itemActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

