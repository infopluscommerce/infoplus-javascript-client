# infoplus.BillingCodeActivityApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingCodeActivity**](BillingCodeActivityApi.md#addBillingCodeActivity) | **POST** /v3.0/billingCodeActivity | Create a billingCodeActivity
[**addBillingCodeActivityAudit**](BillingCodeActivityApi.md#addBillingCodeActivityAudit) | **PUT** /v3.0/billingCodeActivity/{billingCodeActivityId}/audit/{billingCodeActivityAudit} | Add new audit for a billingCodeActivity
[**addBillingCodeActivityFile**](BillingCodeActivityApi.md#addBillingCodeActivityFile) | **POST** /v3.0/billingCodeActivity/{billingCodeActivityId}/file/{fileName} | Attach a file to a billingCodeActivity
[**addBillingCodeActivityFileByURL**](BillingCodeActivityApi.md#addBillingCodeActivityFileByURL) | **POST** /v3.0/billingCodeActivity/{billingCodeActivityId}/file | Attach a file to a billingCodeActivity by URL.
[**addBillingCodeActivityTag**](BillingCodeActivityApi.md#addBillingCodeActivityTag) | **PUT** /v3.0/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag} | Add new tags for a billingCodeActivity.
[**deleteBillingCodeActivity**](BillingCodeActivityApi.md#deleteBillingCodeActivity) | **DELETE** /v3.0/billingCodeActivity/{billingCodeActivityId} | Delete a billingCodeActivity
[**deleteBillingCodeActivityFile**](BillingCodeActivityApi.md#deleteBillingCodeActivityFile) | **DELETE** /v3.0/billingCodeActivity/{billingCodeActivityId}/file/{fileId} | Delete a file for a billingCodeActivity.
[**deleteBillingCodeActivityTag**](BillingCodeActivityApi.md#deleteBillingCodeActivityTag) | **DELETE** /v3.0/billingCodeActivity/{billingCodeActivityId}/tag/{billingCodeActivityTag} | Delete a tag for a billingCodeActivity.
[**getBillingCodeActivityByFilter**](BillingCodeActivityApi.md#getBillingCodeActivityByFilter) | **GET** /v3.0/billingCodeActivity/search | Search billingCodeActivitys by filter
[**getBillingCodeActivityById**](BillingCodeActivityApi.md#getBillingCodeActivityById) | **GET** /v3.0/billingCodeActivity/{billingCodeActivityId} | Get a billingCodeActivity by id
[**getBillingCodeActivityFiles**](BillingCodeActivityApi.md#getBillingCodeActivityFiles) | **GET** /v3.0/billingCodeActivity/{billingCodeActivityId}/file | Get the files for a billingCodeActivity.
[**getBillingCodeActivityTags**](BillingCodeActivityApi.md#getBillingCodeActivityTags) | **GET** /v3.0/billingCodeActivity/{billingCodeActivityId}/tag | Get the tags for a billingCodeActivity.
[**getDuplicateBillingCodeActivityById**](BillingCodeActivityApi.md#getDuplicateBillingCodeActivityById) | **GET** /v3.0/billingCodeActivity/duplicate/{billingCodeActivityId} | Get a duplicated a billingCodeActivity by id
[**updateBillingCodeActivity**](BillingCodeActivityApi.md#updateBillingCodeActivity) | **PUT** /v3.0/billingCodeActivity | Update a billingCodeActivity


<a name="addBillingCodeActivity"></a>
# **addBillingCodeActivity**
> BillingCodeActivity addBillingCodeActivity(body)

Create a billingCodeActivity

Inserts a new billingCodeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var body = new infoplus.BillingCodeActivity(); // BillingCodeActivity | BillingCodeActivity to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBillingCodeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeActivity**](BillingCodeActivity.md)| BillingCodeActivity to be inserted. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeActivityAudit"></a>
# **addBillingCodeActivityAudit**
> addBillingCodeActivityAudit(billingCodeActivityId, billingCodeActivityAudit)

Add new audit for a billingCodeActivity

Adds an audit to an existing billingCodeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to add an audit to

var billingCodeActivityAudit = "billingCodeActivityAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeActivityAudit(billingCodeActivityId, billingCodeActivityAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to add an audit to | 
 **billingCodeActivityAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeActivityFile"></a>
# **addBillingCodeActivityFile**
> addBillingCodeActivityFile(billingCodeActivityId, fileName)

Attach a file to a billingCodeActivity

Adds a file to an existing billingCodeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeActivityFile(billingCodeActivityId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addBillingCodeActivityFileByURL"></a>
# **addBillingCodeActivityFileByURL**
> addBillingCodeActivityFileByURL(body, billingCodeActivityId)

Attach a file to a billingCodeActivity by URL.

Adds a file to an existing billingCodeActivity by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeActivityFileByURL(body, billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeActivityTag"></a>
# **addBillingCodeActivityTag**
> addBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag)

Add new tags for a billingCodeActivity.

Adds a tag to an existing billingCodeActivity.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to add a tag to

var billingCodeActivityTag = "billingCodeActivityTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to add a tag to | 
 **billingCodeActivityTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillingCodeActivity"></a>
# **deleteBillingCodeActivity**
> deleteBillingCodeActivity(billingCodeActivityId)

Delete a billingCodeActivity

Deletes the billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillingCodeActivity(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillingCodeActivityFile"></a>
# **deleteBillingCodeActivityFile**
> deleteBillingCodeActivityFile(billingCodeActivityId, fileId)

Delete a file for a billingCodeActivity.

Deletes an existing billingCodeActivity file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillingCodeActivityFile(billingCodeActivityId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillingCodeActivityTag"></a>
# **deleteBillingCodeActivityTag**
> deleteBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag)

Delete a tag for a billingCodeActivity.

Deletes an existing billingCodeActivity tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to remove tag from

var billingCodeActivityTag = "billingCodeActivityTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillingCodeActivityTag(billingCodeActivityId, billingCodeActivityTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to remove tag from | 
 **billingCodeActivityTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityByFilter"></a>
# **getBillingCodeActivityByFilter**
> [BillingCodeActivity] getBillingCodeActivityByFilter(opts)

Search billingCodeActivitys by filter

Returns the list of billingCodeActivitys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

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
apiInstance.getBillingCodeActivityByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillingCodeActivity]**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityById"></a>
# **getBillingCodeActivityById**
> BillingCodeActivity getBillingCodeActivityById(billingCodeActivityId)

Get a billingCodeActivity by id

Returns the billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBillingCodeActivityById(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to be returned. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityFiles"></a>
# **getBillingCodeActivityFiles**
> getBillingCodeActivityFiles(billingCodeActivityId)

Get the files for a billingCodeActivity.

Get all existing billingCodeActivity files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillingCodeActivityFiles(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeActivityTags"></a>
# **getBillingCodeActivityTags**
> getBillingCodeActivityTags(billingCodeActivityId)

Get the tags for a billingCodeActivity.

Get all existing billingCodeActivity tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillingCodeActivityTags(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBillingCodeActivityById"></a>
# **getDuplicateBillingCodeActivityById**
> BillingCodeActivity getDuplicateBillingCodeActivityById(billingCodeActivityId)

Get a duplicated a billingCodeActivity by id

Returns a duplicated billingCodeActivity identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var billingCodeActivityId = 56; // Number | Id of the billingCodeActivity to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateBillingCodeActivityById(billingCodeActivityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeActivityId** | **Number**| Id of the billingCodeActivity to be duplicated. | 

### Return type

[**BillingCodeActivity**](BillingCodeActivity.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillingCodeActivity"></a>
# **updateBillingCodeActivity**
> updateBillingCodeActivity(body)

Update a billingCodeActivity

Updates an existing billingCodeActivity using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeActivityApi();

var body = new infoplus.BillingCodeActivity(); // BillingCodeActivity | BillingCodeActivity to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillingCodeActivity(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeActivity**](BillingCodeActivity.md)| BillingCodeActivity to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

