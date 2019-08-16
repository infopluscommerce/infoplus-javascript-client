# infoplus.BillingCodeTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingCodeType**](BillingCodeTypeApi.md#addBillingCodeType) | **POST** /beta/billingCodeType | Create a billingCodeType
[**addBillingCodeTypeAudit**](BillingCodeTypeApi.md#addBillingCodeTypeAudit) | **PUT** /beta/billingCodeType/{billingCodeTypeId}/audit/{billingCodeTypeAudit} | Add new audit for a billingCodeType
[**addBillingCodeTypeFile**](BillingCodeTypeApi.md#addBillingCodeTypeFile) | **POST** /beta/billingCodeType/{billingCodeTypeId}/file/{fileName} | Attach a file to a billingCodeType
[**addBillingCodeTypeTag**](BillingCodeTypeApi.md#addBillingCodeTypeTag) | **PUT** /beta/billingCodeType/{billingCodeTypeId}/tag/{billingCodeTypeTag} | Add new tags for a billingCodeType.
[**deleteBillingCodeType**](BillingCodeTypeApi.md#deleteBillingCodeType) | **DELETE** /beta/billingCodeType/{billingCodeTypeId} | Delete a billingCodeType
[**deleteBillingCodeTypeTag**](BillingCodeTypeApi.md#deleteBillingCodeTypeTag) | **DELETE** /beta/billingCodeType/{billingCodeTypeId}/tag/{billingCodeTypeTag} | Delete a tag for a billingCodeType.
[**getBillingCodeTypeByFilter**](BillingCodeTypeApi.md#getBillingCodeTypeByFilter) | **GET** /beta/billingCodeType/search | Search billingCodeTypes by filter
[**getBillingCodeTypeById**](BillingCodeTypeApi.md#getBillingCodeTypeById) | **GET** /beta/billingCodeType/{billingCodeTypeId} | Get a billingCodeType by id
[**getBillingCodeTypeTags**](BillingCodeTypeApi.md#getBillingCodeTypeTags) | **GET** /beta/billingCodeType/{billingCodeTypeId}/tag | Get the tags for a billingCodeType.
[**getDuplicateBillingCodeTypeById**](BillingCodeTypeApi.md#getDuplicateBillingCodeTypeById) | **GET** /beta/billingCodeType/duplicate/{billingCodeTypeId} | Get a duplicated a billingCodeType by id
[**updateBillingCodeType**](BillingCodeTypeApi.md#updateBillingCodeType) | **PUT** /beta/billingCodeType | Update a billingCodeType
[**updateBillingCodeTypeCustomFields**](BillingCodeTypeApi.md#updateBillingCodeTypeCustomFields) | **PUT** /beta/billingCodeType/customFields | Update a billingCodeType custom fields


<a name="addBillingCodeType"></a>
# **addBillingCodeType**
> BillingCodeType addBillingCodeType(body)

Create a billingCodeType

Inserts a new billingCodeType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var body = new infoplus.BillingCodeType(); // BillingCodeType | BillingCodeType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBillingCodeType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be inserted. | 

### Return type

[**BillingCodeType**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeTypeAudit"></a>
# **addBillingCodeTypeAudit**
> addBillingCodeTypeAudit(billingCodeTypeId, billingCodeTypeAudit)

Add new audit for a billingCodeType

Adds an audit to an existing billingCodeType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to add an audit to

var billingCodeTypeAudit = "billingCodeTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeTypeAudit(billingCodeTypeId, billingCodeTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to add an audit to | 
 **billingCodeTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBillingCodeTypeFile"></a>
# **addBillingCodeTypeFile**
> addBillingCodeTypeFile(billingCodeTypeId, fileName)

Attach a file to a billingCodeType

Adds a file to an existing billingCodeType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeTypeFile(billingCodeTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addBillingCodeTypeTag"></a>
# **addBillingCodeTypeTag**
> addBillingCodeTypeTag(billingCodeTypeId, billingCodeTypeTag)

Add new tags for a billingCodeType.

Adds a tag to an existing billingCodeType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to add a tag to

var billingCodeTypeTag = "billingCodeTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBillingCodeTypeTag(billingCodeTypeId, billingCodeTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to add a tag to | 
 **billingCodeTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBillingCodeType"></a>
# **deleteBillingCodeType**
> deleteBillingCodeType(billingCodeTypeId)

Delete a billingCodeType

Deletes the billingCodeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillingCodeType(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBillingCodeTypeTag"></a>
# **deleteBillingCodeTypeTag**
> deleteBillingCodeTypeTag(billingCodeTypeId, billingCodeTypeTag)

Delete a tag for a billingCodeType.

Deletes an existing billingCodeType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to remove tag from

var billingCodeTypeTag = "billingCodeTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBillingCodeTypeTag(billingCodeTypeId, billingCodeTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to remove tag from | 
 **billingCodeTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeTypeByFilter"></a>
# **getBillingCodeTypeByFilter**
> [BillingCodeType] getBillingCodeTypeByFilter(opts)

Search billingCodeTypes by filter

Returns the list of billingCodeTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

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
apiInstance.getBillingCodeTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[BillingCodeType]**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeTypeById"></a>
# **getBillingCodeTypeById**
> BillingCodeType getBillingCodeTypeById(billingCodeTypeId)

Get a billingCodeType by id

Returns the billingCodeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBillingCodeTypeById(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to be returned. | 

### Return type

[**BillingCodeType**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBillingCodeTypeTags"></a>
# **getBillingCodeTypeTags**
> getBillingCodeTypeTags(billingCodeTypeId)

Get the tags for a billingCodeType.

Get all existing billingCodeType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBillingCodeTypeTags(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBillingCodeTypeById"></a>
# **getDuplicateBillingCodeTypeById**
> BillingCodeType getDuplicateBillingCodeTypeById(billingCodeTypeId)

Get a duplicated a billingCodeType by id

Returns a duplicated billingCodeType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var billingCodeTypeId = 56; // Number | Id of the billingCodeType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateBillingCodeTypeById(billingCodeTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCodeTypeId** | **Number**| Id of the billingCodeType to be duplicated. | 

### Return type

[**BillingCodeType**](BillingCodeType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillingCodeType"></a>
# **updateBillingCodeType**
> updateBillingCodeType(body)

Update a billingCodeType

Updates an existing billingCodeType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var body = new infoplus.BillingCodeType(); // BillingCodeType | BillingCodeType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillingCodeType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBillingCodeTypeCustomFields"></a>
# **updateBillingCodeTypeCustomFields**
> updateBillingCodeTypeCustomFields(body)

Update a billingCodeType custom fields

Updates an existing billingCodeType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BillingCodeTypeApi();

var body = new infoplus.BillingCodeType(); // BillingCodeType | BillingCodeType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBillingCodeTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BillingCodeType**](BillingCodeType.md)| BillingCodeType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

