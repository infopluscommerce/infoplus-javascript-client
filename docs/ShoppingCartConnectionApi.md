# infoplus.ShoppingCartConnectionApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addShoppingCartConnection**](ShoppingCartConnectionApi.md#addShoppingCartConnection) | **POST** /v1.0/shoppingCartConnection | Create a shoppingCartConnection
[**deleteShoppingCartConnection**](ShoppingCartConnectionApi.md#deleteShoppingCartConnection) | **DELETE** /v1.0/shoppingCartConnection/{shoppingCartConnectionId} | Delete a shoppingCartConnection
[**getShoppingCartConnectionByFilter**](ShoppingCartConnectionApi.md#getShoppingCartConnectionByFilter) | **GET** /v1.0/shoppingCartConnection/search | Search shoppingCartConnections by filter
[**getShoppingCartConnectionById**](ShoppingCartConnectionApi.md#getShoppingCartConnectionById) | **GET** /v1.0/shoppingCartConnection/{shoppingCartConnectionId} | Get a shoppingCartConnection by id
[**updateShoppingCartConnection**](ShoppingCartConnectionApi.md#updateShoppingCartConnection) | **PUT** /v1.0/shoppingCartConnection | Update a shoppingCartConnection


<a name="addShoppingCartConnection"></a>
# **addShoppingCartConnection**
> ShoppingCartConnection addShoppingCartConnection(body)

Create a shoppingCartConnection

Inserts a new shoppingCartConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ShoppingCartConnectionApi()

var body = new infoplus.ShoppingCartConnection(); // {ShoppingCartConnection} ShoppingCartConnection to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addShoppingCartConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartConnection**](ShoppingCartConnection.md)| ShoppingCartConnection to be inserted. | 

### Return type

[**ShoppingCartConnection**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShoppingCartConnection"></a>
# **deleteShoppingCartConnection**
> deleteShoppingCartConnection(shoppingCartConnectionId)

Delete a shoppingCartConnection

Deletes the shoppingCartConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ShoppingCartConnectionApi()

var shoppingCartConnectionId = 56; // {Integer} Id of the shoppingCartConnection to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteShoppingCartConnection(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Integer**| Id of the shoppingCartConnection to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShoppingCartConnectionByFilter"></a>
# **getShoppingCartConnectionByFilter**
> [ShoppingCartConnection] getShoppingCartConnectionByFilter(opts)

Search shoppingCartConnections by filter

Returns the list of shoppingCartConnections that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ShoppingCartConnectionApi()

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
api.getShoppingCartConnectionByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ShoppingCartConnection]**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShoppingCartConnectionById"></a>
# **getShoppingCartConnectionById**
> ShoppingCartConnection getShoppingCartConnectionById(shoppingCartConnectionId)

Get a shoppingCartConnection by id

Returns the shoppingCartConnection identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ShoppingCartConnectionApi()

var shoppingCartConnectionId = 56; // {Integer} Id of the shoppingCartConnection to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getShoppingCartConnectionById(shoppingCartConnectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shoppingCartConnectionId** | **Integer**| Id of the shoppingCartConnection to be returned. | 

### Return type

[**ShoppingCartConnection**](ShoppingCartConnection.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateShoppingCartConnection"></a>
# **updateShoppingCartConnection**
> updateShoppingCartConnection(body)

Update a shoppingCartConnection

Updates an existing shoppingCartConnection using the specified data.

### Example
```javascript
var infoplus = require('infoplus-js-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ShoppingCartConnectionApi()

var body = new infoplus.ShoppingCartConnection(); // {ShoppingCartConnection} ShoppingCartConnection to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateShoppingCartConnection(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShoppingCartConnection**](ShoppingCartConnection.md)| ShoppingCartConnection to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

