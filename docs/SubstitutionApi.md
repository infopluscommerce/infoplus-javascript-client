# infoplus.SubstitutionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubstitution**](SubstitutionApi.md#addSubstitution) | **POST** /beta/substitution | Create a substitution
[**addSubstitutionAudit**](SubstitutionApi.md#addSubstitutionAudit) | **PUT** /beta/substitution/{substitutionId}/audit/{substitutionAudit} | Add new audit for a substitution
[**addSubstitutionFile**](SubstitutionApi.md#addSubstitutionFile) | **POST** /beta/substitution/{substitutionId}/file/{fileName} | Attach a file to a substitution
[**addSubstitutionTag**](SubstitutionApi.md#addSubstitutionTag) | **PUT** /beta/substitution/{substitutionId}/tag/{substitutionTag} | Add new tags for a substitution.
[**deleteSubstitution**](SubstitutionApi.md#deleteSubstitution) | **DELETE** /beta/substitution/{substitutionId} | Delete a substitution
[**deleteSubstitutionTag**](SubstitutionApi.md#deleteSubstitutionTag) | **DELETE** /beta/substitution/{substitutionId}/tag/{substitutionTag} | Delete a tag for a substitution.
[**getDuplicateSubstitutionById**](SubstitutionApi.md#getDuplicateSubstitutionById) | **GET** /beta/substitution/duplicate/{substitutionId} | Get a duplicated a substitution by id
[**getSubstitutionByFilter**](SubstitutionApi.md#getSubstitutionByFilter) | **GET** /beta/substitution/search | Search substitutions by filter
[**getSubstitutionById**](SubstitutionApi.md#getSubstitutionById) | **GET** /beta/substitution/{substitutionId} | Get a substitution by id
[**getSubstitutionTags**](SubstitutionApi.md#getSubstitutionTags) | **GET** /beta/substitution/{substitutionId}/tag | Get the tags for a substitution.
[**updateSubstitution**](SubstitutionApi.md#updateSubstitution) | **PUT** /beta/substitution | Update a substitution
[**updateSubstitutionCustomFields**](SubstitutionApi.md#updateSubstitutionCustomFields) | **PUT** /beta/substitution/customFields | Update a substitution custom fields


<a name="addSubstitution"></a>
# **addSubstitution**
> Substitution addSubstitution(body)

Create a substitution

Inserts a new substitution using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var body = new infoplus.Substitution(); // Substitution | Substitution to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSubstitution(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be inserted. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSubstitutionAudit"></a>
# **addSubstitutionAudit**
> addSubstitutionAudit(substitutionId, substitutionAudit)

Add new audit for a substitution

Adds an audit to an existing substitution.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to add an audit to

var substitutionAudit = "substitutionAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSubstitutionAudit(substitutionId, substitutionAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to add an audit to | 
 **substitutionAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSubstitutionFile"></a>
# **addSubstitutionFile**
> addSubstitutionFile(substitutionId, fileName)

Attach a file to a substitution

Adds a file to an existing substitution.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSubstitutionFile(substitutionId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addSubstitutionTag"></a>
# **addSubstitutionTag**
> addSubstitutionTag(substitutionId, substitutionTag)

Add new tags for a substitution.

Adds a tag to an existing substitution.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to add a tag to

var substitutionTag = "substitutionTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSubstitutionTag(substitutionId, substitutionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to add a tag to | 
 **substitutionTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubstitution(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSubstitutionTag"></a>
# **deleteSubstitutionTag**
> deleteSubstitutionTag(substitutionId, substitutionTag)

Delete a tag for a substitution.

Deletes an existing substitution tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to remove tag from

var substitutionTag = "substitutionTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubstitutionTag(substitutionId, substitutionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to remove tag from | 
 **substitutionTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateSubstitutionById(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to be duplicated. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

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
apiInstance.getSubstitutionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Substitution]**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstitutionById(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to be returned. | 

### Return type

[**Substitution**](Substitution.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubstitutionTags"></a>
# **getSubstitutionTags**
> getSubstitutionTags(substitutionId)

Get the tags for a substitution.

Get all existing substitution tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var substitutionId = 56; // Number | Id of the substitution to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSubstitutionTags(substitutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substitutionId** | **Number**| Id of the substitution to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var body = new infoplus.Substitution(); // Substitution | Substitution to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSubstitution(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.SubstitutionApi();

var body = new infoplus.Substitution(); // Substitution | Substitution to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSubstitutionCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Substitution**](Substitution.md)| Substitution to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

