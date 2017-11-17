# infoplus.SubstitutionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubstitution**](SubstitutionApi.md#addSubstitution) | **POST** /v2.0/substitution | Create a substitution
[**deleteSubstitution**](SubstitutionApi.md#deleteSubstitution) | **DELETE** /v2.0/substitution/{substitutionId} | Delete a substitution
[**getDuplicateSubstitutionById**](SubstitutionApi.md#getDuplicateSubstitutionById) | **GET** /v2.0/substitution/duplicate/{substitutionId} | Get a duplicated a substitution by id
[**getSubstitutionByFilter**](SubstitutionApi.md#getSubstitutionByFilter) | **GET** /v2.0/substitution/search | Search substitutions by filter
[**getSubstitutionById**](SubstitutionApi.md#getSubstitutionById) | **GET** /v2.0/substitution/{substitutionId} | Get a substitution by id
[**updateSubstitution**](SubstitutionApi.md#updateSubstitution) | **PUT** /v2.0/substitution | Update a substitution
[**updateSubstitutionCustomFields**](SubstitutionApi.md#updateSubstitutionCustomFields) | **PUT** /v2.0/substitution/customFields | Update a substitution custom fields


<a name="addSubstitution"></a>
# **addSubstitution**
> Substitution addSubstitution(body)

Create a substitution

Inserts a new substitution using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var body = new infoplus.Substitution(); // {Substitution} Substitution to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addSubstitution(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be inserted. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubstitution"></a>
# **deleteSubstitution**
> deleteSubstitution(substitutionId)

Delete a substitution

Deletes the substitution identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var substitutionId = 56; // {Integer} Id of the substitution to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteSubstitution(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Integer**| Id of the substitution to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateSubstitutionById"></a>
# **getDuplicateSubstitutionById**
> Substitution getDuplicateSubstitutionById(substitutionId)

Get a duplicated a substitution by id

Returns a duplicated substitution identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var substitutionId = 56; // {Integer} Id of the substitution to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateSubstitutionById(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Integer**| Id of the substitution to be duplicated. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubstitutionByFilter"></a>
# **getSubstitutionByFilter**
> [Substitution] getSubstitutionByFilter(opts)

Search substitutions by filter

Returns the list of substitutions that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

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
api.getSubstitutionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Substitution]**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubstitutionById"></a>
# **getSubstitutionById**
> Substitution getSubstitutionById(substitutionId)

Get a substitution by id

Returns the substitution identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var substitutionId = 56; // {Integer} Id of the substitution to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSubstitutionById(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Integer**| Id of the substitution to be returned. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSubstitution"></a>
# **updateSubstitution**
> updateSubstitution(body)

Update a substitution

Updates an existing substitution using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var body = new infoplus.Substitution(); // {Substitution} Substitution to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateSubstitution(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSubstitutionCustomFields"></a>
# **updateSubstitutionCustomFields**
> updateSubstitutionCustomFields(body)

Update a substitution custom fields

Updates an existing substitution custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.SubstitutionApi()

var body = new infoplus.Substitution(); // {Substitution} Substitution to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateSubstitutionCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

