# infoplus.ThirdPartyParcelAccountApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccount) | **POST** /v3.0/thirdPartyParcelAccount | Create a thirdPartyParcelAccount
[**addThirdPartyParcelAccountAudit**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountAudit) | **PUT** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/audit/{thirdPartyParcelAccountAudit} | Add new audit for a thirdPartyParcelAccount
[**addThirdPartyParcelAccountFile**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountFile) | **POST** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/file/{fileName} | Attach a file to a thirdPartyParcelAccount
[**addThirdPartyParcelAccountFileByURL**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountFileByURL) | **POST** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/file | Attach a file to a thirdPartyParcelAccount by URL.
[**addThirdPartyParcelAccountTag**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountTag) | **PUT** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag/{thirdPartyParcelAccountTag} | Add new tags for a thirdPartyParcelAccount.
[**deleteThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccount) | **DELETE** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Delete a thirdPartyParcelAccount
[**deleteThirdPartyParcelAccountFile**](ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccountFile) | **DELETE** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/file/{fileId} | Delete a file for a thirdPartyParcelAccount.
[**deleteThirdPartyParcelAccountTag**](ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccountTag) | **DELETE** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag/{thirdPartyParcelAccountTag} | Delete a tag for a thirdPartyParcelAccount.
[**getDuplicateThirdPartyParcelAccountById**](ThirdPartyParcelAccountApi.md#getDuplicateThirdPartyParcelAccountById) | **GET** /v3.0/thirdPartyParcelAccount/duplicate/{thirdPartyParcelAccountId} | Get a duplicated a thirdPartyParcelAccount by id
[**getThirdPartyParcelAccountByFilter**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountByFilter) | **GET** /v3.0/thirdPartyParcelAccount/search | Search thirdPartyParcelAccounts by filter
[**getThirdPartyParcelAccountById**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountById) | **GET** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Get a thirdPartyParcelAccount by id
[**getThirdPartyParcelAccountFiles**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountFiles) | **GET** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/file | Get the files for a thirdPartyParcelAccount.
[**getThirdPartyParcelAccountTags**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountTags) | **GET** /v3.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag | Get the tags for a thirdPartyParcelAccount.
[**updateThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#updateThirdPartyParcelAccount) | **PUT** /v3.0/thirdPartyParcelAccount | Update a thirdPartyParcelAccount
[**updateThirdPartyParcelAccountCustomFields**](ThirdPartyParcelAccountApi.md#updateThirdPartyParcelAccountCustomFields) | **PUT** /v3.0/thirdPartyParcelAccount/customFields | Update a thirdPartyParcelAccount custom fields


<a name="addThirdPartyParcelAccount"></a>
# **addThirdPartyParcelAccount**
> ThirdPartyParcelAccount addThirdPartyParcelAccount(body)

Create a thirdPartyParcelAccount

Inserts a new thirdPartyParcelAccount using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var body = new infoplus.ThirdPartyParcelAccount(); // ThirdPartyParcelAccount | ThirdPartyParcelAccount to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addThirdPartyParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be inserted. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addThirdPartyParcelAccountAudit"></a>
# **addThirdPartyParcelAccountAudit**
> addThirdPartyParcelAccountAudit(thirdPartyParcelAccountId, thirdPartyParcelAccountAudit)

Add new audit for a thirdPartyParcelAccount

Adds an audit to an existing thirdPartyParcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to add an audit to

var thirdPartyParcelAccountAudit = "thirdPartyParcelAccountAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addThirdPartyParcelAccountAudit(thirdPartyParcelAccountId, thirdPartyParcelAccountAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to add an audit to | 
 **thirdPartyParcelAccountAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addThirdPartyParcelAccountFile"></a>
# **addThirdPartyParcelAccountFile**
> addThirdPartyParcelAccountFile(thirdPartyParcelAccountId, fileName)

Attach a file to a thirdPartyParcelAccount

Adds a file to an existing thirdPartyParcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addThirdPartyParcelAccountFile(thirdPartyParcelAccountId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addThirdPartyParcelAccountFileByURL"></a>
# **addThirdPartyParcelAccountFileByURL**
> addThirdPartyParcelAccountFileByURL(body, thirdPartyParcelAccountId)

Attach a file to a thirdPartyParcelAccount by URL.

Adds a file to an existing thirdPartyParcelAccount by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addThirdPartyParcelAccountFileByURL(body, thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addThirdPartyParcelAccountTag"></a>
# **addThirdPartyParcelAccountTag**
> addThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag)

Add new tags for a thirdPartyParcelAccount.

Adds a tag to an existing thirdPartyParcelAccount.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to add a tag to

var thirdPartyParcelAccountTag = "thirdPartyParcelAccountTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to add a tag to | 
 **thirdPartyParcelAccountTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteThirdPartyParcelAccount"></a>
# **deleteThirdPartyParcelAccount**
> deleteThirdPartyParcelAccount(thirdPartyParcelAccountId)

Delete a thirdPartyParcelAccount

Deletes the thirdPartyParcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteThirdPartyParcelAccount(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteThirdPartyParcelAccountFile"></a>
# **deleteThirdPartyParcelAccountFile**
> deleteThirdPartyParcelAccountFile(thirdPartyParcelAccountId, fileId)

Delete a file for a thirdPartyParcelAccount.

Deletes an existing thirdPartyParcelAccount file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteThirdPartyParcelAccountFile(thirdPartyParcelAccountId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteThirdPartyParcelAccountTag"></a>
# **deleteThirdPartyParcelAccountTag**
> deleteThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag)

Delete a tag for a thirdPartyParcelAccount.

Deletes an existing thirdPartyParcelAccount tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to remove tag from

var thirdPartyParcelAccountTag = "thirdPartyParcelAccountTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to remove tag from | 
 **thirdPartyParcelAccountTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateThirdPartyParcelAccountById"></a>
# **getDuplicateThirdPartyParcelAccountById**
> ThirdPartyParcelAccount getDuplicateThirdPartyParcelAccountById(thirdPartyParcelAccountId)

Get a duplicated a thirdPartyParcelAccount by id

Returns a duplicated thirdPartyParcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateThirdPartyParcelAccountById(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to be duplicated. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThirdPartyParcelAccountByFilter"></a>
# **getThirdPartyParcelAccountByFilter**
> [ThirdPartyParcelAccount] getThirdPartyParcelAccountByFilter(opts)

Search thirdPartyParcelAccounts by filter

Returns the list of thirdPartyParcelAccounts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

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
apiInstance.getThirdPartyParcelAccountByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ThirdPartyParcelAccount]**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThirdPartyParcelAccountById"></a>
# **getThirdPartyParcelAccountById**
> ThirdPartyParcelAccount getThirdPartyParcelAccountById(thirdPartyParcelAccountId)

Get a thirdPartyParcelAccount by id

Returns the thirdPartyParcelAccount identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getThirdPartyParcelAccountById(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to be returned. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThirdPartyParcelAccountFiles"></a>
# **getThirdPartyParcelAccountFiles**
> getThirdPartyParcelAccountFiles(thirdPartyParcelAccountId)

Get the files for a thirdPartyParcelAccount.

Get all existing thirdPartyParcelAccount files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getThirdPartyParcelAccountFiles(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThirdPartyParcelAccountTags"></a>
# **getThirdPartyParcelAccountTags**
> getThirdPartyParcelAccountTags(thirdPartyParcelAccountId)

Get the tags for a thirdPartyParcelAccount.

Get all existing thirdPartyParcelAccount tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var thirdPartyParcelAccountId = 56; // Number | Id of the thirdPartyParcelAccount to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getThirdPartyParcelAccountTags(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Number**| Id of the thirdPartyParcelAccount to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateThirdPartyParcelAccount"></a>
# **updateThirdPartyParcelAccount**
> updateThirdPartyParcelAccount(body)

Update a thirdPartyParcelAccount

Updates an existing thirdPartyParcelAccount using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var body = new infoplus.ThirdPartyParcelAccount(); // ThirdPartyParcelAccount | ThirdPartyParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateThirdPartyParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateThirdPartyParcelAccountCustomFields"></a>
# **updateThirdPartyParcelAccountCustomFields**
> updateThirdPartyParcelAccountCustomFields(body)

Update a thirdPartyParcelAccount custom fields

Updates an existing thirdPartyParcelAccount custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ThirdPartyParcelAccountApi();

var body = new infoplus.ThirdPartyParcelAccount(); // ThirdPartyParcelAccount | ThirdPartyParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateThirdPartyParcelAccountCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

