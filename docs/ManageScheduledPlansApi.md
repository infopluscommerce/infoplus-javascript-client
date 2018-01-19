# infoplus.ManageScheduledPlansApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addManageScheduledPlans**](ManageScheduledPlansApi.md#addManageScheduledPlans) | **POST** /beta/manageScheduledPlans | Create a manageScheduledPlans
[**addManageScheduledPlansAudit**](ManageScheduledPlansApi.md#addManageScheduledPlansAudit) | **PUT** /beta/manageScheduledPlans/{manageScheduledPlansId}/audit/{manageScheduledPlansAudit} | Add new audit for a manageScheduledPlans
[**addManageScheduledPlansTag**](ManageScheduledPlansApi.md#addManageScheduledPlansTag) | **PUT** /beta/manageScheduledPlans/{manageScheduledPlansId}/tag/{manageScheduledPlansTag} | Add new tags for a manageScheduledPlans.
[**deleteManageScheduledPlans**](ManageScheduledPlansApi.md#deleteManageScheduledPlans) | **DELETE** /beta/manageScheduledPlans/{manageScheduledPlansId} | Delete a manageScheduledPlans
[**deleteManageScheduledPlansTag**](ManageScheduledPlansApi.md#deleteManageScheduledPlansTag) | **DELETE** /beta/manageScheduledPlans/{manageScheduledPlansId}/tag/{manageScheduledPlansTag} | Delete a tag for a manageScheduledPlans.
[**getDuplicateManageScheduledPlansById**](ManageScheduledPlansApi.md#getDuplicateManageScheduledPlansById) | **GET** /beta/manageScheduledPlans/duplicate/{manageScheduledPlansId} | Get a duplicated a manageScheduledPlans by id
[**getManageScheduledPlansByFilter**](ManageScheduledPlansApi.md#getManageScheduledPlansByFilter) | **GET** /beta/manageScheduledPlans/search | Search manageScheduledPlanses by filter
[**getManageScheduledPlansById**](ManageScheduledPlansApi.md#getManageScheduledPlansById) | **GET** /beta/manageScheduledPlans/{manageScheduledPlansId} | Get a manageScheduledPlans by id
[**getManageScheduledPlansTags**](ManageScheduledPlansApi.md#getManageScheduledPlansTags) | **GET** /beta/manageScheduledPlans/{manageScheduledPlansId}/tag | Get the tags for a manageScheduledPlans.
[**updateManageScheduledPlans**](ManageScheduledPlansApi.md#updateManageScheduledPlans) | **PUT** /beta/manageScheduledPlans | Update a manageScheduledPlans


<a name="addManageScheduledPlans"></a>
# **addManageScheduledPlans**
> ManageScheduledPlans addManageScheduledPlans(body)

Create a manageScheduledPlans

Inserts a new manageScheduledPlans using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var body = new infoplus.ManageScheduledPlans(); // ManageScheduledPlans | ManageScheduledPlans to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addManageScheduledPlans(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ManageScheduledPlans**](ManageScheduledPlans.md)| ManageScheduledPlans to be inserted. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addManageScheduledPlansAudit"></a>
# **addManageScheduledPlansAudit**
> addManageScheduledPlansAudit(manageScheduledPlansId, manageScheduledPlansAudit)

Add new audit for a manageScheduledPlans

Adds an audit to an existing manageScheduledPlans.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to add an audit to

var manageScheduledPlansAudit = "manageScheduledPlansAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addManageScheduledPlansAudit(manageScheduledPlansId, manageScheduledPlansAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to add an audit to | 
 **manageScheduledPlansAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addManageScheduledPlansTag"></a>
# **addManageScheduledPlansTag**
> addManageScheduledPlansTag(manageScheduledPlansId, manageScheduledPlansTag)

Add new tags for a manageScheduledPlans.

Adds a tag to an existing manageScheduledPlans.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to add a tag to

var manageScheduledPlansTag = "manageScheduledPlansTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addManageScheduledPlansTag(manageScheduledPlansId, manageScheduledPlansTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to add a tag to | 
 **manageScheduledPlansTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteManageScheduledPlans(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteManageScheduledPlansTag"></a>
# **deleteManageScheduledPlansTag**
> deleteManageScheduledPlansTag(manageScheduledPlansId, manageScheduledPlansTag)

Delete a tag for a manageScheduledPlans.

Deletes an existing manageScheduledPlans tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to remove tag from

var manageScheduledPlansTag = "manageScheduledPlansTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteManageScheduledPlansTag(manageScheduledPlansId, manageScheduledPlansTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to remove tag from | 
 **manageScheduledPlansTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateManageScheduledPlansById(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to be duplicated. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

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
apiInstance.getManageScheduledPlansByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ManageScheduledPlans]**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManageScheduledPlansById(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to be returned. | 

### Return type

[**ManageScheduledPlans**](ManageScheduledPlans.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManageScheduledPlansTags"></a>
# **getManageScheduledPlansTags**
> getManageScheduledPlansTags(manageScheduledPlansId)

Get the tags for a manageScheduledPlans.

Get all existing manageScheduledPlans tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var manageScheduledPlansId = 56; // Number | Id of the manageScheduledPlans to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getManageScheduledPlansTags(manageScheduledPlansId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manageScheduledPlansId** | **Number**| Id of the manageScheduledPlans to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ManageScheduledPlansApi();

var body = new infoplus.ManageScheduledPlans(); // ManageScheduledPlans | ManageScheduledPlans to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateManageScheduledPlans(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ManageScheduledPlans**](ManageScheduledPlans.md)| ManageScheduledPlans to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

