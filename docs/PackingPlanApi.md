# infoplus.PackingPlanApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPackingPlan**](PackingPlanApi.md#addPackingPlan) | **POST** /v3.0/packingPlan | Create a packingPlan
[**addPackingPlanAudit**](PackingPlanApi.md#addPackingPlanAudit) | **PUT** /v3.0/packingPlan/{packingPlanId}/audit/{packingPlanAudit} | Add new audit for a packingPlan
[**addPackingPlanFile**](PackingPlanApi.md#addPackingPlanFile) | **POST** /v3.0/packingPlan/{packingPlanId}/file/{fileName} | Attach a file to a packingPlan
[**addPackingPlanFileByURL**](PackingPlanApi.md#addPackingPlanFileByURL) | **POST** /v3.0/packingPlan/{packingPlanId}/file | Attach a file to a packingPlan by URL.
[**addPackingPlanTag**](PackingPlanApi.md#addPackingPlanTag) | **PUT** /v3.0/packingPlan/{packingPlanId}/tag/{packingPlanTag} | Add new tags for a packingPlan.
[**deletePackingPlan**](PackingPlanApi.md#deletePackingPlan) | **DELETE** /v3.0/packingPlan/{packingPlanId} | Delete a packingPlan
[**deletePackingPlanFile**](PackingPlanApi.md#deletePackingPlanFile) | **DELETE** /v3.0/packingPlan/{packingPlanId}/file/{fileId} | Delete a file for a packingPlan.
[**deletePackingPlanTag**](PackingPlanApi.md#deletePackingPlanTag) | **DELETE** /v3.0/packingPlan/{packingPlanId}/tag/{packingPlanTag} | Delete a tag for a packingPlan.
[**getDuplicatePackingPlanById**](PackingPlanApi.md#getDuplicatePackingPlanById) | **GET** /v3.0/packingPlan/duplicate/{packingPlanId} | Get a duplicated a packingPlan by id
[**getPackingPlanByFilter**](PackingPlanApi.md#getPackingPlanByFilter) | **GET** /v3.0/packingPlan/search | Search packingPlans by filter
[**getPackingPlanById**](PackingPlanApi.md#getPackingPlanById) | **GET** /v3.0/packingPlan/{packingPlanId} | Get a packingPlan by id
[**getPackingPlanFiles**](PackingPlanApi.md#getPackingPlanFiles) | **GET** /v3.0/packingPlan/{packingPlanId}/file | Get the files for a packingPlan.
[**getPackingPlanTags**](PackingPlanApi.md#getPackingPlanTags) | **GET** /v3.0/packingPlan/{packingPlanId}/tag | Get the tags for a packingPlan.
[**updatePackingPlan**](PackingPlanApi.md#updatePackingPlan) | **PUT** /v3.0/packingPlan | Update a packingPlan
[**updatePackingPlanCustomFields**](PackingPlanApi.md#updatePackingPlanCustomFields) | **PUT** /v3.0/packingPlan/customFields | Update a packingPlan custom fields


<a name="addPackingPlan"></a>
# **addPackingPlan**
> PackingPlan addPackingPlan(body)

Create a packingPlan

Inserts a new packingPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var body = new infoplus.PackingPlan(); // PackingPlan | PackingPlan to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPackingPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackingPlan**](PackingPlan.md)| PackingPlan to be inserted. | 

### Return type

[**PackingPlan**](PackingPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingPlanAudit"></a>
# **addPackingPlanAudit**
> addPackingPlanAudit(packingPlanId, packingPlanAudit)

Add new audit for a packingPlan

Adds an audit to an existing packingPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to add an audit to

var packingPlanAudit = "packingPlanAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanAudit(packingPlanId, packingPlanAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to add an audit to | 
 **packingPlanAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingPlanFile"></a>
# **addPackingPlanFile**
> addPackingPlanFile(packingPlanId, fileName)

Attach a file to a packingPlan

Adds a file to an existing packingPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanFile(packingPlanId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPackingPlanFileByURL"></a>
# **addPackingPlanFileByURL**
> addPackingPlanFileByURL(body, packingPlanId)

Attach a file to a packingPlan by URL.

Adds a file to an existing packingPlan by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var packingPlanId = 56; // Number | Id of the packingPlan to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanFileByURL(body, packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **packingPlanId** | **Number**| Id of the packingPlan to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPackingPlanTag"></a>
# **addPackingPlanTag**
> addPackingPlanTag(packingPlanId, packingPlanTag)

Add new tags for a packingPlan.

Adds a tag to an existing packingPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to add a tag to

var packingPlanTag = "packingPlanTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPackingPlanTag(packingPlanId, packingPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to add a tag to | 
 **packingPlanTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePackingPlan"></a>
# **deletePackingPlan**
> deletePackingPlan(packingPlanId)

Delete a packingPlan

Deletes the packingPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingPlan(packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePackingPlanFile"></a>
# **deletePackingPlanFile**
> deletePackingPlanFile(packingPlanId, fileId)

Delete a file for a packingPlan.

Deletes an existing packingPlan file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingPlanFile(packingPlanId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePackingPlanTag"></a>
# **deletePackingPlanTag**
> deletePackingPlanTag(packingPlanId, packingPlanTag)

Delete a tag for a packingPlan.

Deletes an existing packingPlan tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to remove tag from

var packingPlanTag = "packingPlanTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePackingPlanTag(packingPlanId, packingPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to remove tag from | 
 **packingPlanTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePackingPlanById"></a>
# **getDuplicatePackingPlanById**
> PackingPlan getDuplicatePackingPlanById(packingPlanId)

Get a duplicated a packingPlan by id

Returns a duplicated packingPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePackingPlanById(packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to be duplicated. | 

### Return type

[**PackingPlan**](PackingPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanByFilter"></a>
# **getPackingPlanByFilter**
> [PackingPlan] getPackingPlanByFilter(opts)

Search packingPlans by filter

Returns the list of packingPlans that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

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
apiInstance.getPackingPlanByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PackingPlan]**](PackingPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanById"></a>
# **getPackingPlanById**
> PackingPlan getPackingPlanById(packingPlanId)

Get a packingPlan by id

Returns the packingPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackingPlanById(packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to be returned. | 

### Return type

[**PackingPlan**](PackingPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanFiles"></a>
# **getPackingPlanFiles**
> getPackingPlanFiles(packingPlanId)

Get the files for a packingPlan.

Get all existing packingPlan files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingPlanFiles(packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPackingPlanTags"></a>
# **getPackingPlanTags**
> getPackingPlanTags(packingPlanId)

Get the tags for a packingPlan.

Get all existing packingPlan tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var packingPlanId = 56; // Number | Id of the packingPlan to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPackingPlanTags(packingPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packingPlanId** | **Number**| Id of the packingPlan to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePackingPlan"></a>
# **updatePackingPlan**
> updatePackingPlan(body)

Update a packingPlan

Updates an existing packingPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var body = new infoplus.PackingPlan(); // PackingPlan | PackingPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePackingPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackingPlan**](PackingPlan.md)| PackingPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePackingPlanCustomFields"></a>
# **updatePackingPlanCustomFields**
> updatePackingPlanCustomFields(body)

Update a packingPlan custom fields

Updates an existing packingPlan custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PackingPlanApi();

var body = new infoplus.PackingPlan(); // PackingPlan | PackingPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePackingPlanCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackingPlan**](PackingPlan.md)| PackingPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

