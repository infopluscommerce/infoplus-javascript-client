# infoplus.LegacyLowstockContactApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLegacyLowstockContact**](LegacyLowstockContactApi.md#addLegacyLowstockContact) | **POST** /v2.0/legacyLowstockContact | Create a legacyLowstockContact
[**deleteLegacyLowstockContact**](LegacyLowstockContactApi.md#deleteLegacyLowstockContact) | **DELETE** /v2.0/legacyLowstockContact/{legacyLowstockContactId} | Delete a legacyLowstockContact
[**getDuplicateLegacyLowstockContactById**](LegacyLowstockContactApi.md#getDuplicateLegacyLowstockContactById) | **GET** /v2.0/legacyLowstockContact/duplicate/{legacyLowstockContactId} | Get a duplicated a legacyLowstockContact by id
[**getLegacyLowstockContactByFilter**](LegacyLowstockContactApi.md#getLegacyLowstockContactByFilter) | **GET** /v2.0/legacyLowstockContact/search | Search legacyLowstockContacts by filter
[**getLegacyLowstockContactById**](LegacyLowstockContactApi.md#getLegacyLowstockContactById) | **GET** /v2.0/legacyLowstockContact/{legacyLowstockContactId} | Get a legacyLowstockContact by id
[**updateLegacyLowstockContact**](LegacyLowstockContactApi.md#updateLegacyLowstockContact) | **PUT** /v2.0/legacyLowstockContact | Update a legacyLowstockContact


<a name="addLegacyLowstockContact"></a>
# **addLegacyLowstockContact**
> LegacyLowstockContact addLegacyLowstockContact(body)

Create a legacyLowstockContact

Inserts a new legacyLowstockContact using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

var body = new infoplus.LegacyLowstockContact(); // {LegacyLowstockContact} LegacyLowstockContact to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addLegacyLowstockContact(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LegacyLowstockContact**](LegacyLowstockContact.md)| LegacyLowstockContact to be inserted. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLegacyLowstockContact"></a>
# **deleteLegacyLowstockContact**
> deleteLegacyLowstockContact(legacyLowstockContactId)

Delete a legacyLowstockContact

Deletes the legacyLowstockContact identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

var legacyLowstockContactId = 56; // {Integer} Id of the legacyLowstockContact to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteLegacyLowstockContact(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Integer**| Id of the legacyLowstockContact to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateLegacyLowstockContactById"></a>
# **getDuplicateLegacyLowstockContactById**
> LegacyLowstockContact getDuplicateLegacyLowstockContactById(legacyLowstockContactId)

Get a duplicated a legacyLowstockContact by id

Returns a duplicated legacyLowstockContact identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

var legacyLowstockContactId = 56; // {Integer} Id of the legacyLowstockContact to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateLegacyLowstockContactById(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Integer**| Id of the legacyLowstockContact to be duplicated. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLegacyLowstockContactByFilter"></a>
# **getLegacyLowstockContactByFilter**
> [LegacyLowstockContact] getLegacyLowstockContactByFilter(opts)

Search legacyLowstockContacts by filter

Returns the list of legacyLowstockContacts that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

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
api.getLegacyLowstockContactByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LegacyLowstockContact]**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLegacyLowstockContactById"></a>
# **getLegacyLowstockContactById**
> LegacyLowstockContact getLegacyLowstockContactById(legacyLowstockContactId)

Get a legacyLowstockContact by id

Returns the legacyLowstockContact identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

var legacyLowstockContactId = 56; // {Integer} Id of the legacyLowstockContact to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLegacyLowstockContactById(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Integer**| Id of the legacyLowstockContact to be returned. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLegacyLowstockContact"></a>
# **updateLegacyLowstockContact**
> updateLegacyLowstockContact(body)

Update a legacyLowstockContact

Updates an existing legacyLowstockContact using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.LegacyLowstockContactApi()

var body = new infoplus.LegacyLowstockContact(); // {LegacyLowstockContact} LegacyLowstockContact to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateLegacyLowstockContact(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LegacyLowstockContact**](LegacyLowstockContact.md)| LegacyLowstockContact to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

