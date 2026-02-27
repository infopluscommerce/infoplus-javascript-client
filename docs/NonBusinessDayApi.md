# infoplus.NonBusinessDayApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNonBusinessDay**](NonBusinessDayApi.md#addNonBusinessDay) | **POST** /beta/nonBusinessDay | Create a nonBusinessDay
[**addNonBusinessDayAudit**](NonBusinessDayApi.md#addNonBusinessDayAudit) | **PUT** /beta/nonBusinessDay/{nonBusinessDayId}/audit/{nonBusinessDayAudit} | Add new audit for a nonBusinessDay
[**addNonBusinessDayFile**](NonBusinessDayApi.md#addNonBusinessDayFile) | **POST** /beta/nonBusinessDay/{nonBusinessDayId}/file/{fileName} | Attach a file to a nonBusinessDay
[**addNonBusinessDayFileByURL**](NonBusinessDayApi.md#addNonBusinessDayFileByURL) | **POST** /beta/nonBusinessDay/{nonBusinessDayId}/file | Attach a file to a nonBusinessDay by URL.
[**addNonBusinessDayTag**](NonBusinessDayApi.md#addNonBusinessDayTag) | **PUT** /beta/nonBusinessDay/{nonBusinessDayId}/tag/{nonBusinessDayTag} | Add new tags for a nonBusinessDay.
[**deleteNonBusinessDay**](NonBusinessDayApi.md#deleteNonBusinessDay) | **DELETE** /beta/nonBusinessDay/{nonBusinessDayId} | Delete a nonBusinessDay
[**deleteNonBusinessDayFile**](NonBusinessDayApi.md#deleteNonBusinessDayFile) | **DELETE** /beta/nonBusinessDay/{nonBusinessDayId}/file/{fileId} | Delete a file for a nonBusinessDay.
[**deleteNonBusinessDayTag**](NonBusinessDayApi.md#deleteNonBusinessDayTag) | **DELETE** /beta/nonBusinessDay/{nonBusinessDayId}/tag/{nonBusinessDayTag} | Delete a tag for a nonBusinessDay.
[**getDuplicateNonBusinessDayById**](NonBusinessDayApi.md#getDuplicateNonBusinessDayById) | **GET** /beta/nonBusinessDay/duplicate/{nonBusinessDayId} | Get a duplicated a nonBusinessDay by id
[**getNonBusinessDayByFilter**](NonBusinessDayApi.md#getNonBusinessDayByFilter) | **GET** /beta/nonBusinessDay/search | Search nonBusinessDays by filter
[**getNonBusinessDayById**](NonBusinessDayApi.md#getNonBusinessDayById) | **GET** /beta/nonBusinessDay/{nonBusinessDayId} | Get a nonBusinessDay by id
[**getNonBusinessDayFiles**](NonBusinessDayApi.md#getNonBusinessDayFiles) | **GET** /beta/nonBusinessDay/{nonBusinessDayId}/file | Get the files for a nonBusinessDay.
[**getNonBusinessDayTags**](NonBusinessDayApi.md#getNonBusinessDayTags) | **GET** /beta/nonBusinessDay/{nonBusinessDayId}/tag | Get the tags for a nonBusinessDay.
[**updateNonBusinessDay**](NonBusinessDayApi.md#updateNonBusinessDay) | **PUT** /beta/nonBusinessDay | Update a nonBusinessDay


<a name="addNonBusinessDay"></a>
# **addNonBusinessDay**
> NonBusinessDay addNonBusinessDay(body)

Create a nonBusinessDay

Inserts a new nonBusinessDay using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var body = new infoplus.NonBusinessDay(); // NonBusinessDay | NonBusinessDay to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNonBusinessDay(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NonBusinessDay**](NonBusinessDay.md)| NonBusinessDay to be inserted. | 

### Return type

[**NonBusinessDay**](NonBusinessDay.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNonBusinessDayAudit"></a>
# **addNonBusinessDayAudit**
> addNonBusinessDayAudit(nonBusinessDayId, nonBusinessDayAudit)

Add new audit for a nonBusinessDay

Adds an audit to an existing nonBusinessDay.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to add an audit to

var nonBusinessDayAudit = "nonBusinessDayAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNonBusinessDayAudit(nonBusinessDayId, nonBusinessDayAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to add an audit to | 
 **nonBusinessDayAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNonBusinessDayFile"></a>
# **addNonBusinessDayFile**
> addNonBusinessDayFile(nonBusinessDayId, fileName)

Attach a file to a nonBusinessDay

Adds a file to an existing nonBusinessDay.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNonBusinessDayFile(nonBusinessDayId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addNonBusinessDayFileByURL"></a>
# **addNonBusinessDayFileByURL**
> addNonBusinessDayFileByURL(body, nonBusinessDayId)

Attach a file to a nonBusinessDay by URL.

Adds a file to an existing nonBusinessDay by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNonBusinessDayFileByURL(body, nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNonBusinessDayTag"></a>
# **addNonBusinessDayTag**
> addNonBusinessDayTag(nonBusinessDayId, nonBusinessDayTag)

Add new tags for a nonBusinessDay.

Adds a tag to an existing nonBusinessDay.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to add a tag to

var nonBusinessDayTag = "nonBusinessDayTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNonBusinessDayTag(nonBusinessDayId, nonBusinessDayTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to add a tag to | 
 **nonBusinessDayTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNonBusinessDay"></a>
# **deleteNonBusinessDay**
> deleteNonBusinessDay(nonBusinessDayId)

Delete a nonBusinessDay

Deletes the nonBusinessDay identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNonBusinessDay(nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteNonBusinessDayFile"></a>
# **deleteNonBusinessDayFile**
> deleteNonBusinessDayFile(nonBusinessDayId, fileId)

Delete a file for a nonBusinessDay.

Deletes an existing nonBusinessDay file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNonBusinessDayFile(nonBusinessDayId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteNonBusinessDayTag"></a>
# **deleteNonBusinessDayTag**
> deleteNonBusinessDayTag(nonBusinessDayId, nonBusinessDayTag)

Delete a tag for a nonBusinessDay.

Deletes an existing nonBusinessDay tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to remove tag from

var nonBusinessDayTag = "nonBusinessDayTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNonBusinessDayTag(nonBusinessDayId, nonBusinessDayTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to remove tag from | 
 **nonBusinessDayTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateNonBusinessDayById"></a>
# **getDuplicateNonBusinessDayById**
> NonBusinessDay getDuplicateNonBusinessDayById(nonBusinessDayId)

Get a duplicated a nonBusinessDay by id

Returns a duplicated nonBusinessDay identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateNonBusinessDayById(nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to be duplicated. | 

### Return type

[**NonBusinessDay**](NonBusinessDay.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNonBusinessDayByFilter"></a>
# **getNonBusinessDayByFilter**
> [NonBusinessDay] getNonBusinessDayByFilter(opts)

Search nonBusinessDays by filter

Returns the list of nonBusinessDays that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

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
apiInstance.getNonBusinessDayByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[NonBusinessDay]**](NonBusinessDay.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNonBusinessDayById"></a>
# **getNonBusinessDayById**
> NonBusinessDay getNonBusinessDayById(nonBusinessDayId)

Get a nonBusinessDay by id

Returns the nonBusinessDay identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNonBusinessDayById(nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to be returned. | 

### Return type

[**NonBusinessDay**](NonBusinessDay.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNonBusinessDayFiles"></a>
# **getNonBusinessDayFiles**
> getNonBusinessDayFiles(nonBusinessDayId)

Get the files for a nonBusinessDay.

Get all existing nonBusinessDay files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getNonBusinessDayFiles(nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNonBusinessDayTags"></a>
# **getNonBusinessDayTags**
> getNonBusinessDayTags(nonBusinessDayId)

Get the tags for a nonBusinessDay.

Get all existing nonBusinessDay tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var nonBusinessDayId = 56; // Number | Id of the nonBusinessDay to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getNonBusinessDayTags(nonBusinessDayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonBusinessDayId** | **Number**| Id of the nonBusinessDay to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNonBusinessDay"></a>
# **updateNonBusinessDay**
> updateNonBusinessDay(body)

Update a nonBusinessDay

Updates an existing nonBusinessDay using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.NonBusinessDayApi();

var body = new infoplus.NonBusinessDay(); // NonBusinessDay | NonBusinessDay to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateNonBusinessDay(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NonBusinessDay**](NonBusinessDay.md)| NonBusinessDay to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

