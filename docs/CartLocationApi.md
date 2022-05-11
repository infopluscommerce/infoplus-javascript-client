# infoplus.CartLocationApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartLocationAudit**](CartLocationApi.md#addCartLocationAudit) | **PUT** /v3.0/cartLocation/{cartLocationId}/audit/{cartLocationAudit} | Add new audit for a cartLocation
[**addCartLocationFile**](CartLocationApi.md#addCartLocationFile) | **POST** /v3.0/cartLocation/{cartLocationId}/file/{fileName} | Attach a file to a cartLocation
[**addCartLocationFileByURL**](CartLocationApi.md#addCartLocationFileByURL) | **POST** /v3.0/cartLocation/{cartLocationId}/file | Attach a file to a cartLocation by URL.
[**addCartLocationTag**](CartLocationApi.md#addCartLocationTag) | **PUT** /v3.0/cartLocation/{cartLocationId}/tag/{cartLocationTag} | Add new tags for a cartLocation.
[**deleteCartLocationFile**](CartLocationApi.md#deleteCartLocationFile) | **DELETE** /v3.0/cartLocation/{cartLocationId}/file/{fileId} | Delete a file for a cartLocation.
[**deleteCartLocationTag**](CartLocationApi.md#deleteCartLocationTag) | **DELETE** /v3.0/cartLocation/{cartLocationId}/tag/{cartLocationTag} | Delete a tag for a cartLocation.
[**getCartLocationByFilter**](CartLocationApi.md#getCartLocationByFilter) | **GET** /v3.0/cartLocation/search | Search cartLocations by filter
[**getCartLocationById**](CartLocationApi.md#getCartLocationById) | **GET** /v3.0/cartLocation/{cartLocationId} | Get a cartLocation by id
[**getCartLocationFiles**](CartLocationApi.md#getCartLocationFiles) | **GET** /v3.0/cartLocation/{cartLocationId}/file | Get the files for a cartLocation.
[**getCartLocationTags**](CartLocationApi.md#getCartLocationTags) | **GET** /v3.0/cartLocation/{cartLocationId}/tag | Get the tags for a cartLocation.
[**getDuplicateCartLocationById**](CartLocationApi.md#getDuplicateCartLocationById) | **GET** /v3.0/cartLocation/duplicate/{cartLocationId} | Get a duplicated a cartLocation by id


<a name="addCartLocationAudit"></a>
# **addCartLocationAudit**
> addCartLocationAudit(cartLocationId, cartLocationAudit)

Add new audit for a cartLocation

Adds an audit to an existing cartLocation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to add an audit to

var cartLocationAudit = "cartLocationAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartLocationAudit(cartLocationId, cartLocationAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to add an audit to | 
 **cartLocationAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartLocationFile"></a>
# **addCartLocationFile**
> addCartLocationFile(cartLocationId, fileName)

Attach a file to a cartLocation

Adds a file to an existing cartLocation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartLocationFile(cartLocationId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCartLocationFileByURL"></a>
# **addCartLocationFileByURL**
> addCartLocationFileByURL(body, cartLocationId)

Attach a file to a cartLocation by URL.

Adds a file to an existing cartLocation by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var cartLocationId = 56; // Number | Id of the cartLocation to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartLocationFileByURL(body, cartLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **cartLocationId** | **Number**| Id of the cartLocation to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCartLocationTag"></a>
# **addCartLocationTag**
> addCartLocationTag(cartLocationId, cartLocationTag)

Add new tags for a cartLocation.

Adds a tag to an existing cartLocation.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to add a tag to

var cartLocationTag = "cartLocationTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCartLocationTag(cartLocationId, cartLocationTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to add a tag to | 
 **cartLocationTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartLocationFile"></a>
# **deleteCartLocationFile**
> deleteCartLocationFile(cartLocationId, fileId)

Delete a file for a cartLocation.

Deletes an existing cartLocation file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartLocationFile(cartLocationId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCartLocationTag"></a>
# **deleteCartLocationTag**
> deleteCartLocationTag(cartLocationId, cartLocationTag)

Delete a tag for a cartLocation.

Deletes an existing cartLocation tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to remove tag from

var cartLocationTag = "cartLocationTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCartLocationTag(cartLocationId, cartLocationTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to remove tag from | 
 **cartLocationTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartLocationByFilter"></a>
# **getCartLocationByFilter**
> [CartLocation] getCartLocationByFilter(opts)

Search cartLocations by filter

Returns the list of cartLocations that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

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
apiInstance.getCartLocationByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CartLocation]**](CartLocation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartLocationById"></a>
# **getCartLocationById**
> CartLocation getCartLocationById(cartLocationId)

Get a cartLocation by id

Returns the cartLocation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCartLocationById(cartLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to be returned. | 

### Return type

[**CartLocation**](CartLocation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartLocationFiles"></a>
# **getCartLocationFiles**
> getCartLocationFiles(cartLocationId)

Get the files for a cartLocation.

Get all existing cartLocation files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartLocationFiles(cartLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCartLocationTags"></a>
# **getCartLocationTags**
> getCartLocationTags(cartLocationId)

Get the tags for a cartLocation.

Get all existing cartLocation tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCartLocationTags(cartLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCartLocationById"></a>
# **getDuplicateCartLocationById**
> CartLocation getDuplicateCartLocationById(cartLocationId)

Get a duplicated a cartLocation by id

Returns a duplicated cartLocation identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CartLocationApi();

var cartLocationId = 56; // Number | Id of the cartLocation to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCartLocationById(cartLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartLocationId** | **Number**| Id of the cartLocation to be duplicated. | 

### Return type

[**CartLocation**](CartLocation.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

