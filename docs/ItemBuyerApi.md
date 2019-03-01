# infoplus.ItemBuyerApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemBuyer**](ItemBuyerApi.md#addItemBuyer) | **POST** /beta/itemBuyer | Create an itemBuyer
[**addItemBuyerAudit**](ItemBuyerApi.md#addItemBuyerAudit) | **PUT** /beta/itemBuyer/{itemBuyerId}/audit/{itemBuyerAudit} | Add new audit for an itemBuyer
[**addItemBuyerFile**](ItemBuyerApi.md#addItemBuyerFile) | **POST** /beta/itemBuyer/{itemBuyerId}/file/{fileName} | Attach a file to an itemBuyer
[**addItemBuyerTag**](ItemBuyerApi.md#addItemBuyerTag) | **PUT** /beta/itemBuyer/{itemBuyerId}/tag/{itemBuyerTag} | Add new tags for an itemBuyer.
[**deleteItemBuyer**](ItemBuyerApi.md#deleteItemBuyer) | **DELETE** /beta/itemBuyer/{itemBuyerId} | Delete an itemBuyer
[**deleteItemBuyerTag**](ItemBuyerApi.md#deleteItemBuyerTag) | **DELETE** /beta/itemBuyer/{itemBuyerId}/tag/{itemBuyerTag} | Delete a tag for an itemBuyer.
[**getDuplicateItemBuyerById**](ItemBuyerApi.md#getDuplicateItemBuyerById) | **GET** /beta/itemBuyer/duplicate/{itemBuyerId} | Get a duplicated an itemBuyer by id
[**getItemBuyerByFilter**](ItemBuyerApi.md#getItemBuyerByFilter) | **GET** /beta/itemBuyer/search | Search itemBuyers by filter
[**getItemBuyerById**](ItemBuyerApi.md#getItemBuyerById) | **GET** /beta/itemBuyer/{itemBuyerId} | Get an itemBuyer by id
[**getItemBuyerTags**](ItemBuyerApi.md#getItemBuyerTags) | **GET** /beta/itemBuyer/{itemBuyerId}/tag | Get the tags for an itemBuyer.
[**updateItemBuyer**](ItemBuyerApi.md#updateItemBuyer) | **PUT** /beta/itemBuyer | Update an itemBuyer


<a name="addItemBuyer"></a>
# **addItemBuyer**
> ItemBuyer addItemBuyer(body)

Create an itemBuyer

Inserts a new itemBuyer using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var body = new infoplus.ItemBuyer(); // ItemBuyer | ItemBuyer to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemBuyer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemBuyer**](ItemBuyer.md)| ItemBuyer to be inserted. | 

### Return type

[**ItemBuyer**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemBuyerAudit"></a>
# **addItemBuyerAudit**
> addItemBuyerAudit(itemBuyerId, itemBuyerAudit)

Add new audit for an itemBuyer

Adds an audit to an existing itemBuyer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to add an audit to

var itemBuyerAudit = "itemBuyerAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemBuyerAudit(itemBuyerId, itemBuyerAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to add an audit to | 
 **itemBuyerAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemBuyerFile"></a>
# **addItemBuyerFile**
> addItemBuyerFile(itemBuyerId, fileName)

Attach a file to an itemBuyer

Adds a file to an existing itemBuyer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemBuyerFile(itemBuyerId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addItemBuyerTag"></a>
# **addItemBuyerTag**
> addItemBuyerTag(itemBuyerId, itemBuyerTag)

Add new tags for an itemBuyer.

Adds a tag to an existing itemBuyer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to add a tag to

var itemBuyerTag = "itemBuyerTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItemBuyerTag(itemBuyerId, itemBuyerTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to add a tag to | 
 **itemBuyerTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemBuyer"></a>
# **deleteItemBuyer**
> deleteItemBuyer(itemBuyerId)

Delete an itemBuyer

Deletes the itemBuyer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemBuyer(itemBuyerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteItemBuyerTag"></a>
# **deleteItemBuyerTag**
> deleteItemBuyerTag(itemBuyerId, itemBuyerTag)

Delete a tag for an itemBuyer.

Deletes an existing itemBuyer tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to remove tag from

var itemBuyerTag = "itemBuyerTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteItemBuyerTag(itemBuyerId, itemBuyerTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to remove tag from | 
 **itemBuyerTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateItemBuyerById"></a>
# **getDuplicateItemBuyerById**
> ItemBuyer getDuplicateItemBuyerById(itemBuyerId)

Get a duplicated an itemBuyer by id

Returns a duplicated itemBuyer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateItemBuyerById(itemBuyerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to be duplicated. | 

### Return type

[**ItemBuyer**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemBuyerByFilter"></a>
# **getItemBuyerByFilter**
> [ItemBuyer] getItemBuyerByFilter(opts)

Search itemBuyers by filter

Returns the list of itemBuyers that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

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
apiInstance.getItemBuyerByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ItemBuyer]**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemBuyerById"></a>
# **getItemBuyerById**
> ItemBuyer getItemBuyerById(itemBuyerId)

Get an itemBuyer by id

Returns the itemBuyer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItemBuyerById(itemBuyerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to be returned. | 

### Return type

[**ItemBuyer**](ItemBuyer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemBuyerTags"></a>
# **getItemBuyerTags**
> getItemBuyerTags(itemBuyerId)

Get the tags for an itemBuyer.

Get all existing itemBuyer tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var itemBuyerId = 56; // Number | Id of the itemBuyer to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getItemBuyerTags(itemBuyerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemBuyerId** | **Number**| Id of the itemBuyer to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemBuyer"></a>
# **updateItemBuyer**
> updateItemBuyer(body)

Update an itemBuyer

Updates an existing itemBuyer using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ItemBuyerApi();

var body = new infoplus.ItemBuyer(); // ItemBuyer | ItemBuyer to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateItemBuyer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ItemBuyer**](ItemBuyer.md)| ItemBuyer to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

