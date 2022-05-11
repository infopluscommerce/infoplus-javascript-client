# infoplus.SupplementApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSupplement**](SupplementApi.md#addSupplement) | **POST** /v3.0/supplement | Create a supplement
[**addSupplementAudit**](SupplementApi.md#addSupplementAudit) | **PUT** /v3.0/supplement/{supplementId}/audit/{supplementAudit} | Add new audit for a supplement
[**addSupplementFile**](SupplementApi.md#addSupplementFile) | **POST** /v3.0/supplement/{supplementId}/file/{fileName} | Attach a file to a supplement
[**addSupplementFileByURL**](SupplementApi.md#addSupplementFileByURL) | **POST** /v3.0/supplement/{supplementId}/file | Attach a file to a supplement by URL.
[**addSupplementTag**](SupplementApi.md#addSupplementTag) | **PUT** /v3.0/supplement/{supplementId}/tag/{supplementTag} | Add new tags for a supplement.
[**deleteSupplement**](SupplementApi.md#deleteSupplement) | **DELETE** /v3.0/supplement/{supplementId} | Delete a supplement
[**deleteSupplementFile**](SupplementApi.md#deleteSupplementFile) | **DELETE** /v3.0/supplement/{supplementId}/file/{fileId} | Delete a file for a supplement.
[**deleteSupplementTag**](SupplementApi.md#deleteSupplementTag) | **DELETE** /v3.0/supplement/{supplementId}/tag/{supplementTag} | Delete a tag for a supplement.
[**getDuplicateSupplementById**](SupplementApi.md#getDuplicateSupplementById) | **GET** /v3.0/supplement/duplicate/{supplementId} | Get a duplicated a supplement by id
[**getSupplementByFilter**](SupplementApi.md#getSupplementByFilter) | **GET** /v3.0/supplement/search | Search supplements by filter
[**getSupplementById**](SupplementApi.md#getSupplementById) | **GET** /v3.0/supplement/{supplementId} | Get a supplement by id
[**getSupplementFiles**](SupplementApi.md#getSupplementFiles) | **GET** /v3.0/supplement/{supplementId}/file | Get the files for a supplement.
[**getSupplementTags**](SupplementApi.md#getSupplementTags) | **GET** /v3.0/supplement/{supplementId}/tag | Get the tags for a supplement.
[**updateSupplement**](SupplementApi.md#updateSupplement) | **PUT** /v3.0/supplement | Update a supplement
[**updateSupplementCustomFields**](SupplementApi.md#updateSupplementCustomFields) | **PUT** /v3.0/supplement/customFields | Update a supplement custom fields


<a name="addSupplement"></a>
# **addSupplement**
> Supplement addSupplement(body)

Create a supplement

Inserts a new supplement using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var body = new infoplus.Supplement(); // Supplement | Supplement to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSupplement(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Supplement**](Supplement.md)| Supplement to be inserted. | 

### Return type

[**Supplement**](Supplement.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSupplementAudit"></a>
# **addSupplementAudit**
> addSupplementAudit(supplementId, supplementAudit)

Add new audit for a supplement

Adds an audit to an existing supplement.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to add an audit to

var supplementAudit = "supplementAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSupplementAudit(supplementId, supplementAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to add an audit to | 
 **supplementAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSupplementFile"></a>
# **addSupplementFile**
> addSupplementFile(supplementId, fileName)

Attach a file to a supplement

Adds a file to an existing supplement.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSupplementFile(supplementId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addSupplementFileByURL"></a>
# **addSupplementFileByURL**
> addSupplementFileByURL(body, supplementId)

Attach a file to a supplement by URL.

Adds a file to an existing supplement by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var supplementId = 56; // Number | Id of the supplement to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSupplementFileByURL(body, supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **supplementId** | **Number**| Id of the supplement to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSupplementTag"></a>
# **addSupplementTag**
> addSupplementTag(supplementId, supplementTag)

Add new tags for a supplement.

Adds a tag to an existing supplement.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to add a tag to

var supplementTag = "supplementTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSupplementTag(supplementId, supplementTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to add a tag to | 
 **supplementTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSupplement"></a>
# **deleteSupplement**
> deleteSupplement(supplementId)

Delete a supplement

Deletes the supplement identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSupplement(supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSupplementFile"></a>
# **deleteSupplementFile**
> deleteSupplementFile(supplementId, fileId)

Delete a file for a supplement.

Deletes an existing supplement file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSupplementFile(supplementId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSupplementTag"></a>
# **deleteSupplementTag**
> deleteSupplementTag(supplementId, supplementTag)

Delete a tag for a supplement.

Deletes an existing supplement tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to remove tag from

var supplementTag = "supplementTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSupplementTag(supplementId, supplementTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to remove tag from | 
 **supplementTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateSupplementById"></a>
# **getDuplicateSupplementById**
> Supplement getDuplicateSupplementById(supplementId)

Get a duplicated a supplement by id

Returns a duplicated supplement identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateSupplementById(supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to be duplicated. | 

### Return type

[**Supplement**](Supplement.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupplementByFilter"></a>
# **getSupplementByFilter**
> [Supplement] getSupplementByFilter(opts)

Search supplements by filter

Returns the list of supplements that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

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
apiInstance.getSupplementByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Supplement]**](Supplement.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupplementById"></a>
# **getSupplementById**
> Supplement getSupplementById(supplementId)

Get a supplement by id

Returns the supplement identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSupplementById(supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to be returned. | 

### Return type

[**Supplement**](Supplement.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupplementFiles"></a>
# **getSupplementFiles**
> getSupplementFiles(supplementId)

Get the files for a supplement.

Get all existing supplement files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSupplementFiles(supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSupplementTags"></a>
# **getSupplementTags**
> getSupplementTags(supplementId)

Get the tags for a supplement.

Get all existing supplement tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var supplementId = 56; // Number | Id of the supplement to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSupplementTags(supplementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplementId** | **Number**| Id of the supplement to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSupplement"></a>
# **updateSupplement**
> updateSupplement(body)

Update a supplement

Updates an existing supplement using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var body = new infoplus.Supplement(); // Supplement | Supplement to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSupplement(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Supplement**](Supplement.md)| Supplement to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSupplementCustomFields"></a>
# **updateSupplementCustomFields**
> updateSupplementCustomFields(body)

Update a supplement custom fields

Updates an existing supplement custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SupplementApi();

var body = new infoplus.Supplement(); // Supplement | Supplement to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSupplementCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Supplement**](Supplement.md)| Supplement to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

