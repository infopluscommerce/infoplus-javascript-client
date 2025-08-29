# infoplus.CustomFieldApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomField**](CustomFieldApi.md#addCustomField) | **POST** /beta/customField | Create a customField
[**addCustomFieldAudit**](CustomFieldApi.md#addCustomFieldAudit) | **PUT** /beta/customField/{customFieldId}/audit/{customFieldAudit} | Add new audit for a customField
[**addCustomFieldFile**](CustomFieldApi.md#addCustomFieldFile) | **POST** /beta/customField/{customFieldId}/file/{fileName} | Attach a file to a customField
[**addCustomFieldFileByURL**](CustomFieldApi.md#addCustomFieldFileByURL) | **POST** /beta/customField/{customFieldId}/file | Attach a file to a customField by URL.
[**addCustomFieldTag**](CustomFieldApi.md#addCustomFieldTag) | **PUT** /beta/customField/{customFieldId}/tag/{customFieldTag} | Add new tags for a customField.
[**deleteCustomFieldFile**](CustomFieldApi.md#deleteCustomFieldFile) | **DELETE** /beta/customField/{customFieldId}/file/{fileId} | Delete a file for a customField.
[**deleteCustomFieldTag**](CustomFieldApi.md#deleteCustomFieldTag) | **DELETE** /beta/customField/{customFieldId}/tag/{customFieldTag} | Delete a tag for a customField.
[**getCustomFieldByFilter**](CustomFieldApi.md#getCustomFieldByFilter) | **GET** /beta/customField/search | Search customFields by filter
[**getCustomFieldById**](CustomFieldApi.md#getCustomFieldById) | **GET** /beta/customField/{customFieldId} | Get a customField by id
[**getCustomFieldFiles**](CustomFieldApi.md#getCustomFieldFiles) | **GET** /beta/customField/{customFieldId}/file | Get the files for a customField.
[**getCustomFieldTags**](CustomFieldApi.md#getCustomFieldTags) | **GET** /beta/customField/{customFieldId}/tag | Get the tags for a customField.
[**getDuplicateCustomFieldById**](CustomFieldApi.md#getDuplicateCustomFieldById) | **GET** /beta/customField/duplicate/{customFieldId} | Get a duplicated a customField by id
[**updateCustomField**](CustomFieldApi.md#updateCustomField) | **PUT** /beta/customField | Update a customField


<a name="addCustomField"></a>
# **addCustomField**
> CustomField addCustomField(body)

Create a customField

Inserts a new customField using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var body = new infoplus.CustomField(); // CustomField | CustomField to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomField(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomField**](CustomField.md)| CustomField to be inserted. | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomFieldAudit"></a>
# **addCustomFieldAudit**
> addCustomFieldAudit(customFieldId, customFieldAudit)

Add new audit for a customField

Adds an audit to an existing customField.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to add an audit to

var customFieldAudit = "customFieldAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomFieldAudit(customFieldId, customFieldAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to add an audit to | 
 **customFieldAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomFieldFile"></a>
# **addCustomFieldFile**
> addCustomFieldFile(customFieldId, fileName)

Attach a file to a customField

Adds a file to an existing customField.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomFieldFile(customFieldId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCustomFieldFileByURL"></a>
# **addCustomFieldFileByURL**
> addCustomFieldFileByURL(body, customFieldId)

Attach a file to a customField by URL.

Adds a file to an existing customField by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var customFieldId = 56; // Number | Id of the customField to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomFieldFileByURL(body, customFieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **customFieldId** | **Number**| Id of the customField to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomFieldTag"></a>
# **addCustomFieldTag**
> addCustomFieldTag(customFieldId, customFieldTag)

Add new tags for a customField.

Adds a tag to an existing customField.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to add a tag to

var customFieldTag = "customFieldTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomFieldTag(customFieldId, customFieldTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to add a tag to | 
 **customFieldTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomFieldFile"></a>
# **deleteCustomFieldFile**
> deleteCustomFieldFile(customFieldId, fileId)

Delete a file for a customField.

Deletes an existing customField file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomFieldFile(customFieldId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomFieldTag"></a>
# **deleteCustomFieldTag**
> deleteCustomFieldTag(customFieldId, customFieldTag)

Delete a tag for a customField.

Deletes an existing customField tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to remove tag from

var customFieldTag = "customFieldTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomFieldTag(customFieldId, customFieldTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to remove tag from | 
 **customFieldTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomFieldByFilter"></a>
# **getCustomFieldByFilter**
> [CustomField] getCustomFieldByFilter(opts)

Search customFields by filter

Returns the list of customFields that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

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
apiInstance.getCustomFieldByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CustomField]**](CustomField.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomFieldById"></a>
# **getCustomFieldById**
> CustomField getCustomFieldById(customFieldId)

Get a customField by id

Returns the customField identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomFieldById(customFieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to be returned. | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomFieldFiles"></a>
# **getCustomFieldFiles**
> getCustomFieldFiles(customFieldId)

Get the files for a customField.

Get all existing customField files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomFieldFiles(customFieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomFieldTags"></a>
# **getCustomFieldTags**
> getCustomFieldTags(customFieldId)

Get the tags for a customField.

Get all existing customField tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomFieldTags(customFieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCustomFieldById"></a>
# **getDuplicateCustomFieldById**
> CustomField getDuplicateCustomFieldById(customFieldId)

Get a duplicated a customField by id

Returns a duplicated customField identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var customFieldId = 56; // Number | Id of the customField to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCustomFieldById(customFieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **Number**| Id of the customField to be duplicated. | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomField"></a>
# **updateCustomField**
> updateCustomField(body)

Update a customField

Updates an existing customField using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomFieldApi();

var body = new infoplus.CustomField(); // CustomField | CustomField to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomField(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomField**](CustomField.md)| CustomField to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

