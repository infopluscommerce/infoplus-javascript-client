# infoplus.DasFeesApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDasFees**](DasFeesApi.md#addDasFees) | **POST** /beta/dasFees | Create a dasFees
[**addDasFeesAudit**](DasFeesApi.md#addDasFeesAudit) | **PUT** /beta/dasFees/{dasFeesId}/audit/{dasFeesAudit} | Add new audit for a dasFees
[**addDasFeesFile**](DasFeesApi.md#addDasFeesFile) | **POST** /beta/dasFees/{dasFeesId}/file/{fileName} | Attach a file to a dasFees
[**addDasFeesFileByURL**](DasFeesApi.md#addDasFeesFileByURL) | **POST** /beta/dasFees/{dasFeesId}/file | Attach a file to a dasFees by URL.
[**addDasFeesTag**](DasFeesApi.md#addDasFeesTag) | **PUT** /beta/dasFees/{dasFeesId}/tag/{dasFeesTag} | Add new tags for a dasFees.
[**deleteDasFees**](DasFeesApi.md#deleteDasFees) | **DELETE** /beta/dasFees/{dasFeesId} | Delete a dasFees
[**deleteDasFeesFile**](DasFeesApi.md#deleteDasFeesFile) | **DELETE** /beta/dasFees/{dasFeesId}/file/{fileId} | Delete a file for a dasFees.
[**deleteDasFeesTag**](DasFeesApi.md#deleteDasFeesTag) | **DELETE** /beta/dasFees/{dasFeesId}/tag/{dasFeesTag} | Delete a tag for a dasFees.
[**getDasFeesByFilter**](DasFeesApi.md#getDasFeesByFilter) | **GET** /beta/dasFees/search | Search dasFeeses by filter
[**getDasFeesById**](DasFeesApi.md#getDasFeesById) | **GET** /beta/dasFees/{dasFeesId} | Get a dasFees by id
[**getDasFeesFiles**](DasFeesApi.md#getDasFeesFiles) | **GET** /beta/dasFees/{dasFeesId}/file | Get the files for a dasFees.
[**getDasFeesTags**](DasFeesApi.md#getDasFeesTags) | **GET** /beta/dasFees/{dasFeesId}/tag | Get the tags for a dasFees.
[**getDuplicateDasFeesById**](DasFeesApi.md#getDuplicateDasFeesById) | **GET** /beta/dasFees/duplicate/{dasFeesId} | Get a duplicated a dasFees by id
[**updateDasFees**](DasFeesApi.md#updateDasFees) | **PUT** /beta/dasFees | Update a dasFees


<a name="addDasFees"></a>
# **addDasFees**
> DasFees addDasFees(body)

Create a dasFees

Inserts a new dasFees using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var body = new infoplus.DasFees(); // DasFees | DasFees to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addDasFees(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DasFees**](DasFees.md)| DasFees to be inserted. | 

### Return type

[**DasFees**](DasFees.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDasFeesAudit"></a>
# **addDasFeesAudit**
> addDasFeesAudit(dasFeesId, dasFeesAudit)

Add new audit for a dasFees

Adds an audit to an existing dasFees.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to add an audit to

var dasFeesAudit = "dasFeesAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDasFeesAudit(dasFeesId, dasFeesAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to add an audit to | 
 **dasFeesAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDasFeesFile"></a>
# **addDasFeesFile**
> addDasFeesFile(dasFeesId, fileName)

Attach a file to a dasFees

Adds a file to an existing dasFees.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDasFeesFile(dasFeesId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addDasFeesFileByURL"></a>
# **addDasFeesFileByURL**
> addDasFeesFileByURL(body, dasFeesId)

Attach a file to a dasFees by URL.

Adds a file to an existing dasFees by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var dasFeesId = 56; // Number | Id of the dasFees to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDasFeesFileByURL(body, dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **dasFeesId** | **Number**| Id of the dasFees to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addDasFeesTag"></a>
# **addDasFeesTag**
> addDasFeesTag(dasFeesId, dasFeesTag)

Add new tags for a dasFees.

Adds a tag to an existing dasFees.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to add a tag to

var dasFeesTag = "dasFeesTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDasFeesTag(dasFeesId, dasFeesTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to add a tag to | 
 **dasFeesTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDasFees"></a>
# **deleteDasFees**
> deleteDasFees(dasFeesId)

Delete a dasFees

Deletes the dasFees identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDasFees(dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDasFeesFile"></a>
# **deleteDasFeesFile**
> deleteDasFeesFile(dasFeesId, fileId)

Delete a file for a dasFees.

Deletes an existing dasFees file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDasFeesFile(dasFeesId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDasFeesTag"></a>
# **deleteDasFeesTag**
> deleteDasFeesTag(dasFeesId, dasFeesTag)

Delete a tag for a dasFees.

Deletes an existing dasFees tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to remove tag from

var dasFeesTag = "dasFeesTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDasFeesTag(dasFeesId, dasFeesTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to remove tag from | 
 **dasFeesTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDasFeesByFilter"></a>
# **getDasFeesByFilter**
> [DasFees] getDasFeesByFilter(opts)

Search dasFeeses by filter

Returns the list of dasFeeses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

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
apiInstance.getDasFeesByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[DasFees]**](DasFees.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDasFeesById"></a>
# **getDasFeesById**
> DasFees getDasFeesById(dasFeesId)

Get a dasFees by id

Returns the dasFees identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDasFeesById(dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to be returned. | 

### Return type

[**DasFees**](DasFees.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDasFeesFiles"></a>
# **getDasFeesFiles**
> getDasFeesFiles(dasFeesId)

Get the files for a dasFees.

Get all existing dasFees files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDasFeesFiles(dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDasFeesTags"></a>
# **getDasFeesTags**
> getDasFeesTags(dasFeesId)

Get the tags for a dasFees.

Get all existing dasFees tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDasFeesTags(dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateDasFeesById"></a>
# **getDuplicateDasFeesById**
> DasFees getDuplicateDasFeesById(dasFeesId)

Get a duplicated a dasFees by id

Returns a duplicated dasFees identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var dasFeesId = 56; // Number | Id of the dasFees to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateDasFeesById(dasFeesId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dasFeesId** | **Number**| Id of the dasFees to be duplicated. | 

### Return type

[**DasFees**](DasFees.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDasFees"></a>
# **updateDasFees**
> updateDasFees(body)

Update a dasFees

Updates an existing dasFees using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.DasFeesApi();

var body = new infoplus.DasFees(); // DasFees | DasFees to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDasFees(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DasFees**](DasFees.md)| DasFees to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

