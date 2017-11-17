# infoplus.ManageScheduledPlansApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addManageScheduledPlans**](ManageScheduledPlansApi.md#addManageScheduledPlans) | **POST** /v2.0/manageScheduledPlans | Create a manageScheduledPlans
[**deleteManageScheduledPlans**](ManageScheduledPlansApi.md#deleteManageScheduledPlans) | **DELETE** /v2.0/manageScheduledPlans/{manageScheduledPlansId} | Delete a manageScheduledPlans
[**getDuplicateManageScheduledPlansById**](ManageScheduledPlansApi.md#getDuplicateManageScheduledPlansById) | **GET** /v2.0/manageScheduledPlans/duplicate/{manageScheduledPlansId} | Get a duplicated a manageScheduledPlans by id
[**getManageScheduledPlansByFilter**](ManageScheduledPlansApi.md#getManageScheduledPlansByFilter) | **GET** /v2.0/manageScheduledPlans/search | Search manageScheduledPlanses by filter
[**getManageScheduledPlansById**](ManageScheduledPlansApi.md#getManageScheduledPlansById) | **GET** /v2.0/manageScheduledPlans/{manageScheduledPlansId} | Get a manageScheduledPlans by id
[**updateManageScheduledPlans**](ManageScheduledPlansApi.md#updateManageScheduledPlans) | **PUT** /v2.0/manageScheduledPlans | Update a manageScheduledPlans


<a name="addManageScheduledPlans"></a>
# **addManageScheduledPlans**
> ManageScheduledPlans addManageScheduledPlans(body)

Create a manageScheduledPlans

Inserts a new manageScheduledPlans using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

var body = new infoplus.ManageScheduledPlans(); // {ManageScheduledPlans} ManageScheduledPlans to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addManageScheduledPlans(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ManageScheduledPlans**](ManageScheduledPlans.md)| ManageScheduledPlans to be inserted. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteManageScheduledPlans"></a>
# **deleteManageScheduledPlans**
> deleteManageScheduledPlans(manageScheduledPlansId)

Delete a manageScheduledPlans

Deletes the manageScheduledPlans identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

var manageScheduledPlansId = 56; // {Integer} Id of the manageScheduledPlans to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteManageScheduledPlans(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Integer**| Id of the manageScheduledPlans to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateManageScheduledPlansById"></a>
# **getDuplicateManageScheduledPlansById**
> ManageScheduledPlans getDuplicateManageScheduledPlansById(manageScheduledPlansId)

Get a duplicated a manageScheduledPlans by id

Returns a duplicated manageScheduledPlans identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

var manageScheduledPlansId = 56; // {Integer} Id of the manageScheduledPlans to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDuplicateManageScheduledPlansById(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Integer**| Id of the manageScheduledPlans to be duplicated. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManageScheduledPlansByFilter"></a>
# **getManageScheduledPlansByFilter**
> [ManageScheduledPlans] getManageScheduledPlansByFilter(opts)

Search manageScheduledPlanses by filter

Returns the list of manageScheduledPlanses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

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
api.getManageScheduledPlansByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ManageScheduledPlans]**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManageScheduledPlansById"></a>
# **getManageScheduledPlansById**
> ManageScheduledPlans getManageScheduledPlansById(manageScheduledPlansId)

Get a manageScheduledPlans by id

Returns the manageScheduledPlans identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

var manageScheduledPlansId = 56; // {Integer} Id of the manageScheduledPlans to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getManageScheduledPlansById(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Integer**| Id of the manageScheduledPlans to be returned. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateManageScheduledPlans"></a>
# **updateManageScheduledPlans**
> updateManageScheduledPlans(body)

Update a manageScheduledPlans

Updates an existing manageScheduledPlans using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ManageScheduledPlansApi()

var body = new infoplus.ManageScheduledPlans(); // {ManageScheduledPlans} ManageScheduledPlans to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.updateManageScheduledPlans(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ManageScheduledPlans**](ManageScheduledPlans.md)| ManageScheduledPlans to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

