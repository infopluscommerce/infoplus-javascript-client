# infoplus.BillOfLadingApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillOfLading**](BillOfLadingApi.md#addBillOfLading) | **POST** /beta/billOfLading | Create a billOfLading
[**addBillOfLadingAudit**](BillOfLadingApi.md#addBillOfLadingAudit) | **PUT** /beta/billOfLading/{billOfLadingId}/audit/{billOfLadingAudit} | Add new audit for a billOfLading
[**addBillOfLadingFile**](BillOfLadingApi.md#addBillOfLadingFile) | **POST** /beta/billOfLading/{billOfLadingId}/file/{fileName} | Attach a file to a billOfLading
[**addBillOfLadingFileByURL**](BillOfLadingApi.md#addBillOfLadingFileByURL) | **POST** /beta/billOfLading/{billOfLadingId}/file | Attach a file to a billOfLading by URL.
[**addBillOfLadingTag**](BillOfLadingApi.md#addBillOfLadingTag) | **PUT** /beta/billOfLading/{billOfLadingId}/tag/{billOfLadingTag} | Add new tags for a billOfLading.
[**deleteBillOfLading**](BillOfLadingApi.md#deleteBillOfLading) | **DELETE** /beta/billOfLading/{billOfLadingId} | Delete a billOfLading
[**deleteBillOfLadingFile**](BillOfLadingApi.md#deleteBillOfLadingFile) | **DELETE** /beta/billOfLading/{billOfLadingId}/file/{fileId} | Delete a file for a billOfLading.
[**deleteBillOfLadingTag**](BillOfLadingApi.md#deleteBillOfLadingTag) | **DELETE** /beta/billOfLading/{billOfLadingId}/tag/{billOfLadingTag} | Delete a tag for a billOfLading.
[**getBillOfLadingByFilter**](BillOfLadingApi.md#getBillOfLadingByFilter) | **GET** /beta/billOfLading/search | Search billOfLadings by filter
[**getBillOfLadingById**](BillOfLadingApi.md#getBillOfLadingById) | **GET** /beta/billOfLading/{billOfLadingId} | Get a billOfLading by id
[**getBillOfLadingFiles**](BillOfLadingApi.md#getBillOfLadingFiles) | **GET** /beta/billOfLading/{billOfLadingId}/file | Get the files for a billOfLading.
[**getBillOfLadingTags**](BillOfLadingApi.md#getBillOfLadingTags) | **GET** /beta/billOfLading/{billOfLadingId}/tag | Get the tags for a billOfLading.
[**getDuplicateBillOfLadingById**](BillOfLadingApi.md#getDuplicateBillOfLadingById) | **GET** /beta/billOfLading/duplicate/{billOfLadingId} | Get a duplicated a billOfLading by id
[**updateBillOfLading**](BillOfLadingApi.md#updateBillOfLading) | **PUT** /beta/billOfLading | Update a billOfLading
[**updateBillOfLadingCustomFields**](BillOfLadingApi.md#updateBillOfLadingCustomFields) | **PUT** /beta/billOfLading/customFields | Update a billOfLading custom fields


<a name="addBillOfLading"></a>
# **addBillOfLading**
> BillOfLading addBillOfLading(body)

Create a billOfLading

Inserts a new billOfLading using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var body = new infoplus.BillOfLading(); // BillOfLading | BillOfLading to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBillOfLading(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfLading**](BillOfLading.md)| BillOfLading to be inserted. | 

### Return type

[**BillOfLading**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillOfLadingAudit"></a>
# **addBillOfLadingAudit**
> addBillOfLadingAudit(billOfLadingId, billOfLadingAudit)

Add new audit for a billOfLading

Adds an audit to an existing billOfLading.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to add an audit to

var billOfLadingAudit = "billOfLadingAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillOfLadingAudit(billOfLadingId, billOfLadingAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to add an audit to | 
 **billOfLadingAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillOfLadingFile"></a>
# **addBillOfLadingFile**
> addBillOfLadingFile(billOfLadingId, fileName)

Attach a file to a billOfLading

Adds a file to an existing billOfLading.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillOfLadingFile(billOfLadingId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addBillOfLadingFileByURL"></a>
# **addBillOfLadingFileByURL**
> addBillOfLadingFileByURL(body, billOfLadingId)

Attach a file to a billOfLading by URL.

Adds a file to an existing billOfLading by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var billOfLadingId = 56; // Number | Id of the billOfLading to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillOfLadingFileByURL(body, billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **billOfLadingId** | **Number**| Id of the billOfLading to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillOfLadingTag"></a>
# **addBillOfLadingTag**
> addBillOfLadingTag(billOfLadingId, billOfLadingTag)

Add new tags for a billOfLading.

Adds a tag to an existing billOfLading.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to add a tag to

var billOfLadingTag = "billOfLadingTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillOfLadingTag(billOfLadingId, billOfLadingTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to add a tag to | 
 **billOfLadingTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillOfLading"></a>
# **deleteBillOfLading**
> deleteBillOfLading(billOfLadingId)

Delete a billOfLading

Deletes the billOfLading identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillOfLading(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillOfLadingFile"></a>
# **deleteBillOfLadingFile**
> deleteBillOfLadingFile(billOfLadingId, fileId)

Delete a file for a billOfLading.

Deletes an existing billOfLading file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillOfLadingFile(billOfLadingId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillOfLadingTag"></a>
# **deleteBillOfLadingTag**
> deleteBillOfLadingTag(billOfLadingId, billOfLadingTag)

Delete a tag for a billOfLading.

Deletes an existing billOfLading tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to remove tag from

var billOfLadingTag = "billOfLadingTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillOfLadingTag(billOfLadingId, billOfLadingTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to remove tag from | 
 **billOfLadingTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingByFilter"></a>
# **getBillOfLadingByFilter**
> [BillOfLading] getBillOfLadingByFilter(opts)

Search billOfLadings by filter

Returns the list of billOfLadings that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

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
apiInstance.getBillOfLadingByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillOfLading]**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingById"></a>
# **getBillOfLadingById**
> BillOfLading getBillOfLadingById(billOfLadingId)

Get a billOfLading by id

Returns the billOfLading identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBillOfLadingById(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to be returned. | 

### Return type

[**BillOfLading**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingFiles"></a>
# **getBillOfLadingFiles**
> getBillOfLadingFiles(billOfLadingId)

Get the files for a billOfLading.

Get all existing billOfLading files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillOfLadingFiles(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillOfLadingTags"></a>
# **getBillOfLadingTags**
> getBillOfLadingTags(billOfLadingId)

Get the tags for a billOfLading.

Get all existing billOfLading tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillOfLadingTags(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBillOfLadingById"></a>
# **getDuplicateBillOfLadingById**
> BillOfLading getDuplicateBillOfLadingById(billOfLadingId)

Get a duplicated a billOfLading by id

Returns a duplicated billOfLading identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var billOfLadingId = 56; // Number | Id of the billOfLading to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateBillOfLadingById(billOfLadingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billOfLadingId** | **Number**| Id of the billOfLading to be duplicated. | 

### Return type

[**BillOfLading**](BillOfLading.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillOfLading"></a>
# **updateBillOfLading**
> updateBillOfLading(body)

Update a billOfLading

Updates an existing billOfLading using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var body = new infoplus.BillOfLading(); // BillOfLading | BillOfLading to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillOfLading(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfLading**](BillOfLading.md)| BillOfLading to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBillOfLadingCustomFields"></a>
# **updateBillOfLadingCustomFields**
> updateBillOfLadingCustomFields(body)

Update a billOfLading custom fields

Updates an existing billOfLading custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillOfLadingApi();

var body = new infoplus.BillOfLading(); // BillOfLading | BillOfLading to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillOfLadingCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillOfLading**](BillOfLading.md)| BillOfLading to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

