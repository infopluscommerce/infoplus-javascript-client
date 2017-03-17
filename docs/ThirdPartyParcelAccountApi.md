# infoplus.ThirdPartyParcelAccountApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccount) | **POST** /beta/thirdPartyParcelAccount | Create a thirdPartyParcelAccount
[**addThirdPartyParcelAccountAudit**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountAudit) | **PUT** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/audit/{thirdPartyParcelAccountAudit} | Add new audit for a thirdPartyParcelAccount
[**addThirdPartyParcelAccountTag**](ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccountTag) | **PUT** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag/{thirdPartyParcelAccountTag} | Add new tags for a thirdPartyParcelAccount.
[**deleteThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccount) | **DELETE** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Delete a thirdPartyParcelAccount
[**deleteThirdPartyParcelAccountTag**](ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccountTag) | **DELETE** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag/{thirdPartyParcelAccountTag} | Delete a tag for a thirdPartyParcelAccount.
[**getDuplicateThirdPartyParcelAccountById**](ThirdPartyParcelAccountApi.md#getDuplicateThirdPartyParcelAccountById) | **GET** /beta/thirdPartyParcelAccount/duplicate/{thirdPartyParcelAccountId} | Get a duplicated a thirdPartyParcelAccount by id
[**getThirdPartyParcelAccountByFilter**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountByFilter) | **GET** /beta/thirdPartyParcelAccount/search | Search thirdPartyParcelAccounts by filter
[**getThirdPartyParcelAccountById**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountById) | **GET** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Get a thirdPartyParcelAccount by id
[**getThirdPartyParcelAccountTags**](ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountTags) | **GET** /beta/thirdPartyParcelAccount/{thirdPartyParcelAccountId}/tag | Get the tags for a thirdPartyParcelAccount.
[**updateThirdPartyParcelAccount**](ThirdPartyParcelAccountApi.md#updateThirdPartyParcelAccount) | **PUT** /beta/thirdPartyParcelAccount | Update a thirdPartyParcelAccount
[**updateThirdPartyParcelAccountCustomFields**](ThirdPartyParcelAccountApi.md#updateThirdPartyParcelAccountCustomFields) | **PUT** /beta/thirdPartyParcelAccount/customFields | Update a thirdPartyParcelAccount custom fields


<a name="addThirdPartyParcelAccount"></a>
# **addThirdPartyParcelAccount**
> ThirdPartyParcelAccount addThirdPartyParcelAccount(body)

Create a thirdPartyParcelAccount

Inserts a new thirdPartyParcelAccount using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var body = new infoplus.ThirdPartyParcelAccount(); // {ThirdPartyParcelAccount} ThirdPartyParcelAccount to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addThirdPartyParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be inserted. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to add an audit to

var thirdPartyParcelAccountAudit = "thirdPartyParcelAccountAudit_example"; // {String} The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addThirdPartyParcelAccountAudit(thirdPartyParcelAccountId, thirdPartyParcelAccountAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to add an audit to | 
 **thirdPartyParcelAccountAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to add a tag to

var thirdPartyParcelAccountTag = "thirdPartyParcelAccountTag_example"; // {String} The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to add a tag to | 
 **thirdPartyParcelAccountTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteThirdPartyParcelAccount(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to remove tag from

var thirdPartyParcelAccountTag = "thirdPartyParcelAccountTag_example"; // {String} The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteThirdPartyParcelAccountTag(thirdPartyParcelAccountId, thirdPartyParcelAccountTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to remove tag from | 
 **thirdPartyParcelAccountTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateThirdPartyParcelAccountById(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to be duplicated. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getThirdPartyParcelAccountByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ThirdPartyParcelAccount]**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getThirdPartyParcelAccountById(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to be returned. | 

### Return type

[**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var thirdPartyParcelAccountId = 56; // {Integer} Id of the thirdPartyParcelAccount to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getThirdPartyParcelAccountTags(thirdPartyParcelAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thirdPartyParcelAccountId** | **Integer**| Id of the thirdPartyParcelAccount to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var body = new infoplus.ThirdPartyParcelAccount(); // {ThirdPartyParcelAccount} ThirdPartyParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateThirdPartyParcelAccount(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

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
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ThirdPartyParcelAccountApi()

var body = new infoplus.ThirdPartyParcelAccount(); // {ThirdPartyParcelAccount} ThirdPartyParcelAccount to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateThirdPartyParcelAccountCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThirdPartyParcelAccount**](ThirdPartyParcelAccount.md)| ThirdPartyParcelAccount to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

