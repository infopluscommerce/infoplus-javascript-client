# infoplus.LineOfBusinessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLineOfBusiness**](LineOfBusinessApi.md#addLineOfBusiness) | **POST** /beta/lineOfBusiness | Create a lineOfBusiness
[**addLineOfBusinessAudit**](LineOfBusinessApi.md#addLineOfBusinessAudit) | **PUT** /beta/lineOfBusiness/{lineOfBusinessId}/audit/{lineOfBusinessAudit} | Add new audit for a lineOfBusiness
[**addLineOfBusinessFile**](LineOfBusinessApi.md#addLineOfBusinessFile) | **POST** /beta/lineOfBusiness/{lineOfBusinessId}/file/{fileName} | Attach a file to a lineOfBusiness
[**addLineOfBusinessTag**](LineOfBusinessApi.md#addLineOfBusinessTag) | **PUT** /beta/lineOfBusiness/{lineOfBusinessId}/tag/{lineOfBusinessTag} | Add new tags for a lineOfBusiness.
[**deleteLineOfBusinessTag**](LineOfBusinessApi.md#deleteLineOfBusinessTag) | **DELETE** /beta/lineOfBusiness/{lineOfBusinessId}/tag/{lineOfBusinessTag} | Delete a tag for a lineOfBusiness.
[**getDuplicateLineOfBusinessById**](LineOfBusinessApi.md#getDuplicateLineOfBusinessById) | **GET** /beta/lineOfBusiness/duplicate/{lineOfBusinessId} | Get a duplicated a lineOfBusiness by id
[**getLineOfBusinessByFilter**](LineOfBusinessApi.md#getLineOfBusinessByFilter) | **GET** /beta/lineOfBusiness/search | Search lineOfBusinesses by filter
[**getLineOfBusinessById**](LineOfBusinessApi.md#getLineOfBusinessById) | **GET** /beta/lineOfBusiness/{lineOfBusinessId} | Get a lineOfBusiness by id
[**getLineOfBusinessTags**](LineOfBusinessApi.md#getLineOfBusinessTags) | **GET** /beta/lineOfBusiness/{lineOfBusinessId}/tag | Get the tags for a lineOfBusiness.
[**updateLineOfBusiness**](LineOfBusinessApi.md#updateLineOfBusiness) | **PUT** /beta/lineOfBusiness | Update a lineOfBusiness
[**updateLineOfBusinessCustomFields**](LineOfBusinessApi.md#updateLineOfBusinessCustomFields) | **PUT** /beta/lineOfBusiness/customFields | Update a lineOfBusiness custom fields


<a name="addLineOfBusiness"></a>
# **addLineOfBusiness**
> LineOfBusiness addLineOfBusiness(body)

Create a lineOfBusiness

Inserts a new lineOfBusiness using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var body = new infoplus.LineOfBusiness(); // LineOfBusiness | LineOfBusiness to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLineOfBusiness(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LineOfBusiness**](LineOfBusiness.md)| LineOfBusiness to be inserted. | 

### Return type

[**LineOfBusiness**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLineOfBusinessAudit"></a>
# **addLineOfBusinessAudit**
> addLineOfBusinessAudit(lineOfBusinessId, lineOfBusinessAudit)

Add new audit for a lineOfBusiness

Adds an audit to an existing lineOfBusiness.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to add an audit to

var lineOfBusinessAudit = "lineOfBusinessAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLineOfBusinessAudit(lineOfBusinessId, lineOfBusinessAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to add an audit to | 
 **lineOfBusinessAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLineOfBusinessFile"></a>
# **addLineOfBusinessFile**
> addLineOfBusinessFile(lineOfBusinessId, fileName)

Attach a file to a lineOfBusiness

Adds a file to an existing lineOfBusiness.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLineOfBusinessFile(lineOfBusinessId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLineOfBusinessTag"></a>
# **addLineOfBusinessTag**
> addLineOfBusinessTag(lineOfBusinessId, lineOfBusinessTag)

Add new tags for a lineOfBusiness.

Adds a tag to an existing lineOfBusiness.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to add a tag to

var lineOfBusinessTag = "lineOfBusinessTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLineOfBusinessTag(lineOfBusinessId, lineOfBusinessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to add a tag to | 
 **lineOfBusinessTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLineOfBusinessTag"></a>
# **deleteLineOfBusinessTag**
> deleteLineOfBusinessTag(lineOfBusinessId, lineOfBusinessTag)

Delete a tag for a lineOfBusiness.

Deletes an existing lineOfBusiness tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to remove tag from

var lineOfBusinessTag = "lineOfBusinessTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLineOfBusinessTag(lineOfBusinessId, lineOfBusinessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to remove tag from | 
 **lineOfBusinessTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLineOfBusinessById"></a>
# **getDuplicateLineOfBusinessById**
> LineOfBusiness getDuplicateLineOfBusinessById(lineOfBusinessId)

Get a duplicated a lineOfBusiness by id

Returns a duplicated lineOfBusiness identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLineOfBusinessById(lineOfBusinessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to be duplicated. | 

### Return type

[**LineOfBusiness**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLineOfBusinessByFilter"></a>
# **getLineOfBusinessByFilter**
> [LineOfBusiness] getLineOfBusinessByFilter(opts)

Search lineOfBusinesses by filter

Returns the list of lineOfBusinesses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

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
apiInstance.getLineOfBusinessByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LineOfBusiness]**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLineOfBusinessById"></a>
# **getLineOfBusinessById**
> LineOfBusiness getLineOfBusinessById(lineOfBusinessId)

Get a lineOfBusiness by id

Returns the lineOfBusiness identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLineOfBusinessById(lineOfBusinessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to be returned. | 

### Return type

[**LineOfBusiness**](LineOfBusiness.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLineOfBusinessTags"></a>
# **getLineOfBusinessTags**
> getLineOfBusinessTags(lineOfBusinessId)

Get the tags for a lineOfBusiness.

Get all existing lineOfBusiness tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var lineOfBusinessId = 56; // Number | Id of the lineOfBusiness to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLineOfBusinessTags(lineOfBusinessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineOfBusinessId** | **Number**| Id of the lineOfBusiness to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLineOfBusiness"></a>
# **updateLineOfBusiness**
> updateLineOfBusiness(body)

Update a lineOfBusiness

Updates an existing lineOfBusiness using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var body = new infoplus.LineOfBusiness(); // LineOfBusiness | LineOfBusiness to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLineOfBusiness(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LineOfBusiness**](LineOfBusiness.md)| LineOfBusiness to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLineOfBusinessCustomFields"></a>
# **updateLineOfBusinessCustomFields**
> updateLineOfBusinessCustomFields(body)

Update a lineOfBusiness custom fields

Updates an existing lineOfBusiness custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LineOfBusinessApi();

var body = new infoplus.LineOfBusiness(); // LineOfBusiness | LineOfBusiness to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLineOfBusinessCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LineOfBusiness**](LineOfBusiness.md)| LineOfBusiness to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

