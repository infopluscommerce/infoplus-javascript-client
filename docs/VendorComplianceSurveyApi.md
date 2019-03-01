# infoplus.VendorComplianceSurveyApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVendorComplianceSurvey**](VendorComplianceSurveyApi.md#addVendorComplianceSurvey) | **POST** /beta/vendorComplianceSurvey | Create a vendorComplianceSurvey
[**addVendorComplianceSurveyAudit**](VendorComplianceSurveyApi.md#addVendorComplianceSurveyAudit) | **PUT** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/audit/{vendorComplianceSurveyAudit} | Add new audit for a vendorComplianceSurvey
[**addVendorComplianceSurveyFile**](VendorComplianceSurveyApi.md#addVendorComplianceSurveyFile) | **POST** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/file/{fileName} | Attach a file to a vendorComplianceSurvey
[**addVendorComplianceSurveyTag**](VendorComplianceSurveyApi.md#addVendorComplianceSurveyTag) | **PUT** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag/{vendorComplianceSurveyTag} | Add new tags for a vendorComplianceSurvey.
[**deleteVendorComplianceSurvey**](VendorComplianceSurveyApi.md#deleteVendorComplianceSurvey) | **DELETE** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId} | Delete a vendorComplianceSurvey
[**deleteVendorComplianceSurveyTag**](VendorComplianceSurveyApi.md#deleteVendorComplianceSurveyTag) | **DELETE** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag/{vendorComplianceSurveyTag} | Delete a tag for a vendorComplianceSurvey.
[**getDuplicateVendorComplianceSurveyById**](VendorComplianceSurveyApi.md#getDuplicateVendorComplianceSurveyById) | **GET** /beta/vendorComplianceSurvey/duplicate/{vendorComplianceSurveyId} | Get a duplicated a vendorComplianceSurvey by id
[**getVendorComplianceSurveyByFilter**](VendorComplianceSurveyApi.md#getVendorComplianceSurveyByFilter) | **GET** /beta/vendorComplianceSurvey/search | Search vendorComplianceSurveys by filter
[**getVendorComplianceSurveyById**](VendorComplianceSurveyApi.md#getVendorComplianceSurveyById) | **GET** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId} | Get a vendorComplianceSurvey by id
[**getVendorComplianceSurveyTags**](VendorComplianceSurveyApi.md#getVendorComplianceSurveyTags) | **GET** /beta/vendorComplianceSurvey/{vendorComplianceSurveyId}/tag | Get the tags for a vendorComplianceSurvey.
[**updateVendorComplianceSurvey**](VendorComplianceSurveyApi.md#updateVendorComplianceSurvey) | **PUT** /beta/vendorComplianceSurvey | Update a vendorComplianceSurvey
[**updateVendorComplianceSurveyCustomFields**](VendorComplianceSurveyApi.md#updateVendorComplianceSurveyCustomFields) | **PUT** /beta/vendorComplianceSurvey/customFields | Update a vendorComplianceSurvey custom fields


<a name="addVendorComplianceSurvey"></a>
# **addVendorComplianceSurvey**
> VendorComplianceSurvey addVendorComplianceSurvey(body)

Create a vendorComplianceSurvey

Inserts a new vendorComplianceSurvey using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var body = new infoplus.VendorComplianceSurvey(); // VendorComplianceSurvey | VendorComplianceSurvey to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addVendorComplianceSurvey(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be inserted. | 

### Return type

[**VendorComplianceSurvey**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addVendorComplianceSurveyAudit"></a>
# **addVendorComplianceSurveyAudit**
> addVendorComplianceSurveyAudit(vendorComplianceSurveyId, vendorComplianceSurveyAudit)

Add new audit for a vendorComplianceSurvey

Adds an audit to an existing vendorComplianceSurvey.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to add an audit to

var vendorComplianceSurveyAudit = "vendorComplianceSurveyAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addVendorComplianceSurveyAudit(vendorComplianceSurveyId, vendorComplianceSurveyAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to add an audit to | 
 **vendorComplianceSurveyAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addVendorComplianceSurveyFile"></a>
# **addVendorComplianceSurveyFile**
> addVendorComplianceSurveyFile(vendorComplianceSurveyId, fileName)

Attach a file to a vendorComplianceSurvey

Adds a file to an existing vendorComplianceSurvey.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addVendorComplianceSurveyFile(vendorComplianceSurveyId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addVendorComplianceSurveyTag"></a>
# **addVendorComplianceSurveyTag**
> addVendorComplianceSurveyTag(vendorComplianceSurveyId, vendorComplianceSurveyTag)

Add new tags for a vendorComplianceSurvey.

Adds a tag to an existing vendorComplianceSurvey.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to add a tag to

var vendorComplianceSurveyTag = "vendorComplianceSurveyTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addVendorComplianceSurveyTag(vendorComplianceSurveyId, vendorComplianceSurveyTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to add a tag to | 
 **vendorComplianceSurveyTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVendorComplianceSurvey"></a>
# **deleteVendorComplianceSurvey**
> deleteVendorComplianceSurvey(vendorComplianceSurveyId)

Delete a vendorComplianceSurvey

Deletes the vendorComplianceSurvey identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVendorComplianceSurvey(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteVendorComplianceSurveyTag"></a>
# **deleteVendorComplianceSurveyTag**
> deleteVendorComplianceSurveyTag(vendorComplianceSurveyId, vendorComplianceSurveyTag)

Delete a tag for a vendorComplianceSurvey.

Deletes an existing vendorComplianceSurvey tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to remove tag from

var vendorComplianceSurveyTag = "vendorComplianceSurveyTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVendorComplianceSurveyTag(vendorComplianceSurveyId, vendorComplianceSurveyTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to remove tag from | 
 **vendorComplianceSurveyTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateVendorComplianceSurveyById"></a>
# **getDuplicateVendorComplianceSurveyById**
> VendorComplianceSurvey getDuplicateVendorComplianceSurveyById(vendorComplianceSurveyId)

Get a duplicated a vendorComplianceSurvey by id

Returns a duplicated vendorComplianceSurvey identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateVendorComplianceSurveyById(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to be duplicated. | 

### Return type

[**VendorComplianceSurvey**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorComplianceSurveyByFilter"></a>
# **getVendorComplianceSurveyByFilter**
> [VendorComplianceSurvey] getVendorComplianceSurveyByFilter(opts)

Search vendorComplianceSurveys by filter

Returns the list of vendorComplianceSurveys that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

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
apiInstance.getVendorComplianceSurveyByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[VendorComplianceSurvey]**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorComplianceSurveyById"></a>
# **getVendorComplianceSurveyById**
> VendorComplianceSurvey getVendorComplianceSurveyById(vendorComplianceSurveyId)

Get a vendorComplianceSurvey by id

Returns the vendorComplianceSurvey identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVendorComplianceSurveyById(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to be returned. | 

### Return type

[**VendorComplianceSurvey**](VendorComplianceSurvey.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendorComplianceSurveyTags"></a>
# **getVendorComplianceSurveyTags**
> getVendorComplianceSurveyTags(vendorComplianceSurveyId)

Get the tags for a vendorComplianceSurvey.

Get all existing vendorComplianceSurvey tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var vendorComplianceSurveyId = 56; // Number | Id of the vendorComplianceSurvey to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getVendorComplianceSurveyTags(vendorComplianceSurveyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorComplianceSurveyId** | **Number**| Id of the vendorComplianceSurvey to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVendorComplianceSurvey"></a>
# **updateVendorComplianceSurvey**
> updateVendorComplianceSurvey(body)

Update a vendorComplianceSurvey

Updates an existing vendorComplianceSurvey using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var body = new infoplus.VendorComplianceSurvey(); // VendorComplianceSurvey | VendorComplianceSurvey to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVendorComplianceSurvey(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVendorComplianceSurveyCustomFields"></a>
# **updateVendorComplianceSurveyCustomFields**
> updateVendorComplianceSurveyCustomFields(body)

Update a vendorComplianceSurvey custom fields

Updates an existing vendorComplianceSurvey custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.VendorComplianceSurveyApi();

var body = new infoplus.VendorComplianceSurvey(); // VendorComplianceSurvey | VendorComplianceSurvey to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVendorComplianceSurveyCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VendorComplianceSurvey**](VendorComplianceSurvey.md)| VendorComplianceSurvey to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

