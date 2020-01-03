# infoplus.ReplenishmentPlanApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReplenishmentPlan**](ReplenishmentPlanApi.md#addReplenishmentPlan) | **POST** /beta/replenishmentPlan | Create a replenishmentPlan
[**addReplenishmentPlanAudit**](ReplenishmentPlanApi.md#addReplenishmentPlanAudit) | **PUT** /beta/replenishmentPlan/{replenishmentPlanId}/audit/{replenishmentPlanAudit} | Add new audit for a replenishmentPlan
[**addReplenishmentPlanFile**](ReplenishmentPlanApi.md#addReplenishmentPlanFile) | **POST** /beta/replenishmentPlan/{replenishmentPlanId}/file/{fileName} | Attach a file to a replenishmentPlan
[**addReplenishmentPlanTag**](ReplenishmentPlanApi.md#addReplenishmentPlanTag) | **PUT** /beta/replenishmentPlan/{replenishmentPlanId}/tag/{replenishmentPlanTag} | Add new tags for a replenishmentPlan.
[**deleteReplenishmentPlan**](ReplenishmentPlanApi.md#deleteReplenishmentPlan) | **DELETE** /beta/replenishmentPlan/{replenishmentPlanId} | Delete a replenishmentPlan
[**deleteReplenishmentPlanTag**](ReplenishmentPlanApi.md#deleteReplenishmentPlanTag) | **DELETE** /beta/replenishmentPlan/{replenishmentPlanId}/tag/{replenishmentPlanTag} | Delete a tag for a replenishmentPlan.
[**getDuplicateReplenishmentPlanById**](ReplenishmentPlanApi.md#getDuplicateReplenishmentPlanById) | **GET** /beta/replenishmentPlan/duplicate/{replenishmentPlanId} | Get a duplicated a replenishmentPlan by id
[**getReplenishmentPlanByFilter**](ReplenishmentPlanApi.md#getReplenishmentPlanByFilter) | **GET** /beta/replenishmentPlan/search | Search replenishmentPlans by filter
[**getReplenishmentPlanById**](ReplenishmentPlanApi.md#getReplenishmentPlanById) | **GET** /beta/replenishmentPlan/{replenishmentPlanId} | Get a replenishmentPlan by id
[**getReplenishmentPlanTags**](ReplenishmentPlanApi.md#getReplenishmentPlanTags) | **GET** /beta/replenishmentPlan/{replenishmentPlanId}/tag | Get the tags for a replenishmentPlan.
[**updateReplenishmentPlan**](ReplenishmentPlanApi.md#updateReplenishmentPlan) | **PUT** /beta/replenishmentPlan | Update a replenishmentPlan
[**updateReplenishmentPlanCustomFields**](ReplenishmentPlanApi.md#updateReplenishmentPlanCustomFields) | **PUT** /beta/replenishmentPlan/customFields | Update a replenishmentPlan custom fields


<a name="addReplenishmentPlan"></a>
# **addReplenishmentPlan**
> ReplenishmentPlan addReplenishmentPlan(body)

Create a replenishmentPlan

Inserts a new replenishmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var body = new infoplus.ReplenishmentPlan(); // ReplenishmentPlan | ReplenishmentPlan to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addReplenishmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be inserted. | 

### Return type

[**ReplenishmentPlan**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReplenishmentPlanAudit"></a>
# **addReplenishmentPlanAudit**
> addReplenishmentPlanAudit(replenishmentPlanId, replenishmentPlanAudit)

Add new audit for a replenishmentPlan

Adds an audit to an existing replenishmentPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to add an audit to

var replenishmentPlanAudit = "replenishmentPlanAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentPlanAudit(replenishmentPlanId, replenishmentPlanAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to add an audit to | 
 **replenishmentPlanAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReplenishmentPlanFile"></a>
# **addReplenishmentPlanFile**
> addReplenishmentPlanFile(replenishmentPlanId, fileName)

Attach a file to a replenishmentPlan

Adds a file to an existing replenishmentPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentPlanFile(replenishmentPlanId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addReplenishmentPlanTag"></a>
# **addReplenishmentPlanTag**
> addReplenishmentPlanTag(replenishmentPlanId, replenishmentPlanTag)

Add new tags for a replenishmentPlan.

Adds a tag to an existing replenishmentPlan.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to add a tag to

var replenishmentPlanTag = "replenishmentPlanTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReplenishmentPlanTag(replenishmentPlanId, replenishmentPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to add a tag to | 
 **replenishmentPlanTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReplenishmentPlan"></a>
# **deleteReplenishmentPlan**
> deleteReplenishmentPlan(replenishmentPlanId)

Delete a replenishmentPlan

Deletes the replenishmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReplenishmentPlan(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReplenishmentPlanTag"></a>
# **deleteReplenishmentPlanTag**
> deleteReplenishmentPlanTag(replenishmentPlanId, replenishmentPlanTag)

Delete a tag for a replenishmentPlan.

Deletes an existing replenishmentPlan tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to remove tag from

var replenishmentPlanTag = "replenishmentPlanTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReplenishmentPlanTag(replenishmentPlanId, replenishmentPlanTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to remove tag from | 
 **replenishmentPlanTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReplenishmentPlanById"></a>
# **getDuplicateReplenishmentPlanById**
> ReplenishmentPlan getDuplicateReplenishmentPlanById(replenishmentPlanId)

Get a duplicated a replenishmentPlan by id

Returns a duplicated replenishmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReplenishmentPlanById(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to be duplicated. | 

### Return type

[**ReplenishmentPlan**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentPlanByFilter"></a>
# **getReplenishmentPlanByFilter**
> [ReplenishmentPlan] getReplenishmentPlanByFilter(opts)

Search replenishmentPlans by filter

Returns the list of replenishmentPlans that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

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
apiInstance.getReplenishmentPlanByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReplenishmentPlan]**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentPlanById"></a>
# **getReplenishmentPlanById**
> ReplenishmentPlan getReplenishmentPlanById(replenishmentPlanId)

Get a replenishmentPlan by id

Returns the replenishmentPlan identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReplenishmentPlanById(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to be returned. | 

### Return type

[**ReplenishmentPlan**](ReplenishmentPlan.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReplenishmentPlanTags"></a>
# **getReplenishmentPlanTags**
> getReplenishmentPlanTags(replenishmentPlanId)

Get the tags for a replenishmentPlan.

Get all existing replenishmentPlan tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var replenishmentPlanId = 56; // Number | Id of the replenishmentPlan to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReplenishmentPlanTags(replenishmentPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replenishmentPlanId** | **Number**| Id of the replenishmentPlan to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReplenishmentPlan"></a>
# **updateReplenishmentPlan**
> updateReplenishmentPlan(body)

Update a replenishmentPlan

Updates an existing replenishmentPlan using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var body = new infoplus.ReplenishmentPlan(); // ReplenishmentPlan | ReplenishmentPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReplenishmentPlan(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateReplenishmentPlanCustomFields"></a>
# **updateReplenishmentPlanCustomFields**
> updateReplenishmentPlanCustomFields(body)

Update a replenishmentPlan custom fields

Updates an existing replenishmentPlan custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReplenishmentPlanApi();

var body = new infoplus.ReplenishmentPlan(); // ReplenishmentPlan | ReplenishmentPlan to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReplenishmentPlanCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReplenishmentPlan**](ReplenishmentPlan.md)| ReplenishmentPlan to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

