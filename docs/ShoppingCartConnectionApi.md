# infoplus.ShoppingCartConnectionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addShoppingCartConnection**](ShoppingCartConnectionApi.md#addShoppingCartConnection) | **POST** /beta/shoppingCartConnection | Create a shoppingCartConnection
[**addShoppingCartConnectionAudit**](ShoppingCartConnectionApi.md#addShoppingCartConnectionAudit) | **PUT** /beta/shoppingCartConnection/{shoppingCartConnectionId}/audit/{shoppingCartConnectionAudit} | Add new audit for a shoppingCartConnection
[**addShoppingCartConnectionFile**](ShoppingCartConnectionApi.md#addShoppingCartConnectionFile) | **POST** /beta/shoppingCartConnection/{shoppingCartConnectionId}/file/{fileName} | Attach a file to a shoppingCartConnection
[**addShoppingCartConnectionTag**](ShoppingCartConnectionApi.md#addShoppingCartConnectionTag) | **PUT** /beta/shoppingCartConnection/{shoppingCartConnectionId}/tag/{shoppingCartConnectionTag} | Add new tags for a shoppingCartConnection.
[**deleteShoppingCartConnection**](ShoppingCartConnectionApi.md#deleteShoppingCartConnection) | **DELETE** /beta/shoppingCartConnection/{shoppingCartConnectionId} | Delete a shoppingCartConnection
[**deleteShoppingCartConnectionTag**](ShoppingCartConnectionApi.md#deleteShoppingCartConnectionTag) | **DELETE** /beta/shoppingCartConnection/{shoppingCartConnectionId}/tag/{shoppingCartConnectionTag} | Delete a tag for a shoppingCartConnection.
[**getDuplicateShoppingCartConnectionById**](ShoppingCartConnectionApi.md#getDuplicateShoppingCartConnectionById) | **GET** /beta/shoppingCartConnection/duplicate/{shoppingCartConnectionId} | Get a duplicated a shoppingCartConnection by id
[**getShoppingCartConnectionByFilter**](ShoppingCartConnectionApi.md#getShoppingCartConnectionByFilter) | **GET** /beta/shoppingCartConnection/search | Search shoppingCartConnections by filter
[**getShoppingCartConnectionById**](ShoppingCartConnectionApi.md#getShoppingCartConnectionById) | **GET** /beta/shoppingCartConnection/{shoppingCartConnectionId} | Get a shoppingCartConnection by id
[**getShoppingCartConnectionTags**](ShoppingCartConnectionApi.md#getShoppingCartConnectionTags) | **GET** /beta/shoppingCartConnection/{shoppingCartConnectionId}/tag | Get the tags for a shoppingCartConnection.
[**updateShoppingCartConnection**](ShoppingCartConnectionApi.md#updateShoppingCartConnection) | **PUT** /beta/shoppingCartConnection | Update a shoppingCartConnection
[**updateShoppingCartConnectionCustomFields**](ShoppingCartConnectionApi.md#updateShoppingCartConnectionCustomFields) | **PUT** /beta/shoppingCartConnection/customFields | Update a shoppingCartConnection custom fields


<a name="addShoppingCartConnection"></a>
# **addShoppingCartConnection**
> ShoppingCartConnection addShoppingCartConnection(body)

Create a shoppingCartConnection

Inserts a new shoppingCartConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var body = new infoplus.ShoppingCartConnection(); // ShoppingCartConnection | ShoppingCartConnection to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addShoppingCartConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartConnection**](ShoppingCartConnection.md)| ShoppingCartConnection to be inserted. | 

### Return type

[**ShoppingCartConnection**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addShoppingCartConnectionAudit"></a>
# **addShoppingCartConnectionAudit**
> addShoppingCartConnectionAudit(shoppingCartConnectionId, shoppingCartConnectionAudit)

Add new audit for a shoppingCartConnection

Adds an audit to an existing shoppingCartConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to add an audit to

var shoppingCartConnectionAudit = "shoppingCartConnectionAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShoppingCartConnectionAudit(shoppingCartConnectionId, shoppingCartConnectionAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to add an audit to | 
 **shoppingCartConnectionAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addShoppingCartConnectionFile"></a>
# **addShoppingCartConnectionFile**
> addShoppingCartConnectionFile(shoppingCartConnectionId, fileName)

Attach a file to a shoppingCartConnection

Adds a file to an existing shoppingCartConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShoppingCartConnectionFile(shoppingCartConnectionId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addShoppingCartConnectionTag"></a>
# **addShoppingCartConnectionTag**
> addShoppingCartConnectionTag(shoppingCartConnectionId, shoppingCartConnectionTag)

Add new tags for a shoppingCartConnection.

Adds a tag to an existing shoppingCartConnection.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to add a tag to

var shoppingCartConnectionTag = "shoppingCartConnectionTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addShoppingCartConnectionTag(shoppingCartConnectionId, shoppingCartConnectionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to add a tag to | 
 **shoppingCartConnectionTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShoppingCartConnection"></a>
# **deleteShoppingCartConnection**
> deleteShoppingCartConnection(shoppingCartConnectionId)

Delete a shoppingCartConnection

Deletes the shoppingCartConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShoppingCartConnection(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteShoppingCartConnectionTag"></a>
# **deleteShoppingCartConnectionTag**
> deleteShoppingCartConnectionTag(shoppingCartConnectionId, shoppingCartConnectionTag)

Delete a tag for a shoppingCartConnection.

Deletes an existing shoppingCartConnection tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to remove tag from

var shoppingCartConnectionTag = "shoppingCartConnectionTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteShoppingCartConnectionTag(shoppingCartConnectionId, shoppingCartConnectionTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to remove tag from | 
 **shoppingCartConnectionTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateShoppingCartConnectionById"></a>
# **getDuplicateShoppingCartConnectionById**
> ShoppingCartConnection getDuplicateShoppingCartConnectionById(shoppingCartConnectionId)

Get a duplicated a shoppingCartConnection by id

Returns a duplicated shoppingCartConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateShoppingCartConnectionById(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to be duplicated. | 

### Return type

[**ShoppingCartConnection**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShoppingCartConnectionByFilter"></a>
# **getShoppingCartConnectionByFilter**
> [ShoppingCartConnection] getShoppingCartConnectionByFilter(opts)

Search shoppingCartConnections by filter

Returns the list of shoppingCartConnections that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

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
apiInstance.getShoppingCartConnectionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ShoppingCartConnection]**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShoppingCartConnectionById"></a>
# **getShoppingCartConnectionById**
> ShoppingCartConnection getShoppingCartConnectionById(shoppingCartConnectionId)

Get a shoppingCartConnection by id

Returns the shoppingCartConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShoppingCartConnectionById(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to be returned. | 

### Return type

[**ShoppingCartConnection**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShoppingCartConnectionTags"></a>
# **getShoppingCartConnectionTags**
> getShoppingCartConnectionTags(shoppingCartConnectionId)

Get the tags for a shoppingCartConnection.

Get all existing shoppingCartConnection tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var shoppingCartConnectionId = 56; // Number | Id of the shoppingCartConnection to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getShoppingCartConnectionTags(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Number**| Id of the shoppingCartConnection to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateShoppingCartConnection"></a>
# **updateShoppingCartConnection**
> updateShoppingCartConnection(body)

Update a shoppingCartConnection

Updates an existing shoppingCartConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var body = new infoplus.ShoppingCartConnection(); // ShoppingCartConnection | ShoppingCartConnection to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateShoppingCartConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartConnection**](ShoppingCartConnection.md)| ShoppingCartConnection to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShoppingCartConnectionCustomFields"></a>
# **updateShoppingCartConnectionCustomFields**
> updateShoppingCartConnectionCustomFields(body)

Update a shoppingCartConnection custom fields

Updates an existing shoppingCartConnection custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ShoppingCartConnectionApi();

var body = new infoplus.ShoppingCartConnection(); // ShoppingCartConnection | ShoppingCartConnection to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateShoppingCartConnectionCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartConnection**](ShoppingCartConnection.md)| ShoppingCartConnection to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

