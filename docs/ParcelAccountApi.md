# infoplus.ParcelAccountApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParcelAccount**](ParcelAccountApi.md#addParcelAccount) | **POST** /beta/parcelAccount | Create a parcelAccount
[**addParcelAccountAudit**](ParcelAccountApi.md#addParcelAccountAudit) | **PUT** /beta/parcelAccount/{parcelAccountId}/audit/{parcelAccountAudit} | Add new audit for a parcelAccount
[**addParcelAccountFile**](ParcelAccountApi.md#addParcelAccountFile) | **POST** /beta/parcelAccount/{parcelAccountId}/file/{fileName} | Attach a file to a parcelAccount
[**addParcelAccountFileByURL**](ParcelAccountApi.md#addParcelAccountFileByURL) | **POST** /beta/parcelAccount/{parcelAccountId}/file | Attach a file to a parcelAccount by URL.
[**addParcelAccountTag**](ParcelAccountApi.md#addParcelAccountTag) | **PUT** /beta/parcelAccount/{parcelAccountId}/tag/{parcelAccountTag} | Add new tags for a parcelAccount.
[**deleteParcelAccountFile**](ParcelAccountApi.md#deleteParcelAccountFile) | **DELETE** /beta/parcelAccount/{parcelAccountId}/file/{fileId} | Delete a file for a parcelAccount.
[**deleteParcelAccountTag**](ParcelAccountApi.md#deleteParcelAccountTag) | **DELETE** /beta/parcelAccount/{parcelAccountId}/tag/{parcelAccountTag} | Delete a tag for a parcelAccount.
[**getDuplicateParcelAccountById**](ParcelAccountApi.md#getDuplicateParcelAccountById) | **GET** /beta/parcelAccount/duplicate/{parcelAccountId} | Get a duplicated a parcelAccount by id
[**getParcelAccountByFilter**](ParcelAccountApi.md#getParcelAccountByFilter) | **GET** /beta/parcelAccount/search | Search parcelAccounts by filter
[**getParcelAccountById**](ParcelAccountApi.md#getParcelAccountById) | **GET** /beta/parcelAccount/{parcelAccountId} | Get a parcelAccount by id
[**getParcelAccountFiles**](ParcelAccountApi.md#getParcelAccountFiles) | **GET** /beta/parcelAccount/{parcelAccountId}/file | Get the files for a parcelAccount.
[**getParcelAccountTags**](ParcelAccountApi.md#getParcelAccountTags) | **GET** /beta/parcelAccount/{parcelAccountId}/tag | Get the tags for a parcelAccount.
[**updateParcelAccount**](ParcelAccountApi.md#updateParcelAccount) | **PUT** /beta/parcelAccount | Update a parcelAccount
[**updateParcelAccountCustomFields**](ParcelAccountApi.md#updateParcelAccountCustomFields) | **PUT** /beta/parcelAccount/customFields | Update a parcelAccount custom fields


<a name="addParcelAccount"></a>
# **addParcelAccount**
> ParcelAccount addParcelAccount(body)

Create a parcelAccount

Inserts a new parcelAccount using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var body = new infoplus.ParcelAccount(); // ParcelAccount | ParcelAccount to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelAccount**](ParcelAccount.md)| ParcelAccount to be inserted. | 

### Return type

[**ParcelAccount**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelAccountAudit"></a>
# **addParcelAccountAudit**
> addParcelAccountAudit(parcelAccountId, parcelAccountAudit)

Add new audit for a parcelAccount

Adds an audit to an existing parcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to add an audit to

var parcelAccountAudit = "parcelAccountAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelAccountAudit(parcelAccountId, parcelAccountAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to add an audit to | 
 **parcelAccountAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelAccountFile"></a>
# **addParcelAccountFile**
> addParcelAccountFile(parcelAccountId, fileName)

Attach a file to a parcelAccount

Adds a file to an existing parcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelAccountFile(parcelAccountId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addParcelAccountFileByURL"></a>
# **addParcelAccountFileByURL**
> addParcelAccountFileByURL(body, parcelAccountId)

Attach a file to a parcelAccount by URL.

Adds a file to an existing parcelAccount by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var parcelAccountId = 56; // Number | Id of the parcelAccount to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelAccountFileByURL(body, parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **parcelAccountId** | **Number**| Id of the parcelAccount to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addParcelAccountTag"></a>
# **addParcelAccountTag**
> addParcelAccountTag(parcelAccountId, parcelAccountTag)

Add new tags for a parcelAccount.

Adds a tag to an existing parcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to add a tag to

var parcelAccountTag = "parcelAccountTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParcelAccountTag(parcelAccountId, parcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to add a tag to | 
 **parcelAccountTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteParcelAccountFile"></a>
# **deleteParcelAccountFile**
> deleteParcelAccountFile(parcelAccountId, fileId)

Delete a file for a parcelAccount.

Deletes an existing parcelAccount file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelAccountFile(parcelAccountId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteParcelAccountTag"></a>
# **deleteParcelAccountTag**
> deleteParcelAccountTag(parcelAccountId, parcelAccountTag)

Delete a tag for a parcelAccount.

Deletes an existing parcelAccount tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to remove tag from

var parcelAccountTag = "parcelAccountTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteParcelAccountTag(parcelAccountId, parcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to remove tag from | 
 **parcelAccountTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateParcelAccountById"></a>
# **getDuplicateParcelAccountById**
> ParcelAccount getDuplicateParcelAccountById(parcelAccountId)

Get a duplicated a parcelAccount by id

Returns a duplicated parcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateParcelAccountById(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to be duplicated. | 

### Return type

[**ParcelAccount**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountByFilter"></a>
# **getParcelAccountByFilter**
> [ParcelAccount] getParcelAccountByFilter(opts)

Search parcelAccounts by filter

Returns the list of parcelAccounts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

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
apiInstance.getParcelAccountByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ParcelAccount]**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountById"></a>
# **getParcelAccountById**
> ParcelAccount getParcelAccountById(parcelAccountId)

Get a parcelAccount by id

Returns the parcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getParcelAccountById(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to be returned. | 

### Return type

[**ParcelAccount**](ParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountFiles"></a>
# **getParcelAccountFiles**
> getParcelAccountFiles(parcelAccountId)

Get the files for a parcelAccount.

Get all existing parcelAccount files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParcelAccountFiles(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParcelAccountTags"></a>
# **getParcelAccountTags**
> getParcelAccountTags(parcelAccountId)

Get the tags for a parcelAccount.

Get all existing parcelAccount tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var parcelAccountId = 56; // Number | Id of the parcelAccount to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParcelAccountTags(parcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parcelAccountId** | **Number**| Id of the parcelAccount to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParcelAccount"></a>
# **updateParcelAccount**
> updateParcelAccount(body)

Update a parcelAccount

Updates an existing parcelAccount using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var body = new infoplus.ParcelAccount(); // ParcelAccount | ParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelAccount**](ParcelAccount.md)| ParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateParcelAccountCustomFields"></a>
# **updateParcelAccountCustomFields**
> updateParcelAccountCustomFields(body)

Update a parcelAccount custom fields

Updates an existing parcelAccount custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ParcelAccountApi();

var body = new infoplus.ParcelAccount(); // ParcelAccount | ParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateParcelAccountCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ParcelAccount**](ParcelAccount.md)| ParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

