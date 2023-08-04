# infoplus.CommodityCodeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCommodityCodeAudit**](CommodityCodeApi.md#addCommodityCodeAudit) | **PUT** /beta/commodityCode/{commodityCodeId}/audit/{commodityCodeAudit} | Add new audit for a commodityCode
[**addCommodityCodeFile**](CommodityCodeApi.md#addCommodityCodeFile) | **POST** /beta/commodityCode/{commodityCodeId}/file/{fileName} | Attach a file to a commodityCode
[**addCommodityCodeFileByURL**](CommodityCodeApi.md#addCommodityCodeFileByURL) | **POST** /beta/commodityCode/{commodityCodeId}/file | Attach a file to a commodityCode by URL.
[**addCommodityCodeTag**](CommodityCodeApi.md#addCommodityCodeTag) | **PUT** /beta/commodityCode/{commodityCodeId}/tag/{commodityCodeTag} | Add new tags for a commodityCode.
[**deleteCommodityCodeFile**](CommodityCodeApi.md#deleteCommodityCodeFile) | **DELETE** /beta/commodityCode/{commodityCodeId}/file/{fileId} | Delete a file for a commodityCode.
[**deleteCommodityCodeTag**](CommodityCodeApi.md#deleteCommodityCodeTag) | **DELETE** /beta/commodityCode/{commodityCodeId}/tag/{commodityCodeTag} | Delete a tag for a commodityCode.
[**getCommodityCodeByFilter**](CommodityCodeApi.md#getCommodityCodeByFilter) | **GET** /beta/commodityCode/search | Search commodityCodes by filter
[**getCommodityCodeById**](CommodityCodeApi.md#getCommodityCodeById) | **GET** /beta/commodityCode/{commodityCodeId} | Get a commodityCode by id
[**getCommodityCodeFiles**](CommodityCodeApi.md#getCommodityCodeFiles) | **GET** /beta/commodityCode/{commodityCodeId}/file | Get the files for a commodityCode.
[**getCommodityCodeTags**](CommodityCodeApi.md#getCommodityCodeTags) | **GET** /beta/commodityCode/{commodityCodeId}/tag | Get the tags for a commodityCode.
[**getDuplicateCommodityCodeById**](CommodityCodeApi.md#getDuplicateCommodityCodeById) | **GET** /beta/commodityCode/duplicate/{commodityCodeId} | Get a duplicated a commodityCode by id


<a name="addCommodityCodeAudit"></a>
# **addCommodityCodeAudit**
> addCommodityCodeAudit(commodityCodeId, commodityCodeAudit)

Add new audit for a commodityCode

Adds an audit to an existing commodityCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to add an audit to

var commodityCodeAudit = "commodityCodeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCommodityCodeAudit(commodityCodeId, commodityCodeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to add an audit to | 
 **commodityCodeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCommodityCodeFile"></a>
# **addCommodityCodeFile**
> addCommodityCodeFile(commodityCodeId, fileName)

Attach a file to a commodityCode

Adds a file to an existing commodityCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCommodityCodeFile(commodityCodeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCommodityCodeFileByURL"></a>
# **addCommodityCodeFileByURL**
> addCommodityCodeFileByURL(body, commodityCodeId)

Attach a file to a commodityCode by URL.

Adds a file to an existing commodityCode by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var commodityCodeId = 56; // Number | Id of the commodityCode to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCommodityCodeFileByURL(body, commodityCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **commodityCodeId** | **Number**| Id of the commodityCode to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCommodityCodeTag"></a>
# **addCommodityCodeTag**
> addCommodityCodeTag(commodityCodeId, commodityCodeTag)

Add new tags for a commodityCode.

Adds a tag to an existing commodityCode.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to add a tag to

var commodityCodeTag = "commodityCodeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCommodityCodeTag(commodityCodeId, commodityCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to add a tag to | 
 **commodityCodeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCommodityCodeFile"></a>
# **deleteCommodityCodeFile**
> deleteCommodityCodeFile(commodityCodeId, fileId)

Delete a file for a commodityCode.

Deletes an existing commodityCode file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCommodityCodeFile(commodityCodeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCommodityCodeTag"></a>
# **deleteCommodityCodeTag**
> deleteCommodityCodeTag(commodityCodeId, commodityCodeTag)

Delete a tag for a commodityCode.

Deletes an existing commodityCode tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to remove tag from

var commodityCodeTag = "commodityCodeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCommodityCodeTag(commodityCodeId, commodityCodeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to remove tag from | 
 **commodityCodeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommodityCodeByFilter"></a>
# **getCommodityCodeByFilter**
> [CommodityCode] getCommodityCodeByFilter(opts)

Search commodityCodes by filter

Returns the list of commodityCodes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

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
apiInstance.getCommodityCodeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CommodityCode]**](CommodityCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommodityCodeById"></a>
# **getCommodityCodeById**
> CommodityCode getCommodityCodeById(commodityCodeId)

Get a commodityCode by id

Returns the commodityCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommodityCodeById(commodityCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to be returned. | 

### Return type

[**CommodityCode**](CommodityCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommodityCodeFiles"></a>
# **getCommodityCodeFiles**
> getCommodityCodeFiles(commodityCodeId)

Get the files for a commodityCode.

Get all existing commodityCode files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCommodityCodeFiles(commodityCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommodityCodeTags"></a>
# **getCommodityCodeTags**
> getCommodityCodeTags(commodityCodeId)

Get the tags for a commodityCode.

Get all existing commodityCode tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCommodityCodeTags(commodityCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCommodityCodeById"></a>
# **getDuplicateCommodityCodeById**
> CommodityCode getDuplicateCommodityCodeById(commodityCodeId)

Get a duplicated a commodityCode by id

Returns a duplicated commodityCode identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CommodityCodeApi();

var commodityCodeId = 56; // Number | Id of the commodityCode to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCommodityCodeById(commodityCodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commodityCodeId** | **Number**| Id of the commodityCode to be duplicated. | 

### Return type

[**CommodityCode**](CommodityCode.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

