# infoplus.RateCardApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRateCard**](RateCardApi.md#addRateCard) | **POST** /beta/rateCard | Create a rateCard
[**addRateCardAudit**](RateCardApi.md#addRateCardAudit) | **PUT** /beta/rateCard/{rateCardId}/audit/{rateCardAudit} | Add new audit for a rateCard
[**addRateCardFile**](RateCardApi.md#addRateCardFile) | **POST** /beta/rateCard/{rateCardId}/file/{fileName} | Attach a file to a rateCard
[**addRateCardFileByURL**](RateCardApi.md#addRateCardFileByURL) | **POST** /beta/rateCard/{rateCardId}/file | Attach a file to a rateCard by URL.
[**addRateCardTag**](RateCardApi.md#addRateCardTag) | **PUT** /beta/rateCard/{rateCardId}/tag/{rateCardTag} | Add new tags for a rateCard.
[**deleteRateCard**](RateCardApi.md#deleteRateCard) | **DELETE** /beta/rateCard/{rateCardId} | Delete a rateCard
[**deleteRateCardFile**](RateCardApi.md#deleteRateCardFile) | **DELETE** /beta/rateCard/{rateCardId}/file/{fileId} | Delete a file for a rateCard.
[**deleteRateCardTag**](RateCardApi.md#deleteRateCardTag) | **DELETE** /beta/rateCard/{rateCardId}/tag/{rateCardTag} | Delete a tag for a rateCard.
[**getDuplicateRateCardById**](RateCardApi.md#getDuplicateRateCardById) | **GET** /beta/rateCard/duplicate/{rateCardId} | Get a duplicated a rateCard by id
[**getRateCardByFilter**](RateCardApi.md#getRateCardByFilter) | **GET** /beta/rateCard/search | Search rateCards by filter
[**getRateCardById**](RateCardApi.md#getRateCardById) | **GET** /beta/rateCard/{rateCardId} | Get a rateCard by id
[**getRateCardFiles**](RateCardApi.md#getRateCardFiles) | **GET** /beta/rateCard/{rateCardId}/file | Get the files for a rateCard.
[**getRateCardTags**](RateCardApi.md#getRateCardTags) | **GET** /beta/rateCard/{rateCardId}/tag | Get the tags for a rateCard.
[**updateRateCard**](RateCardApi.md#updateRateCard) | **PUT** /beta/rateCard | Update a rateCard


<a name="addRateCard"></a>
# **addRateCard**
> RateCard addRateCard(body)

Create a rateCard

Inserts a new rateCard using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var body = new infoplus.RateCard(); // RateCard | RateCard to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRateCard(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RateCard**](RateCard.md)| RateCard to be inserted. | 

### Return type

[**RateCard**](RateCard.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRateCardAudit"></a>
# **addRateCardAudit**
> addRateCardAudit(rateCardId, rateCardAudit)

Add new audit for a rateCard

Adds an audit to an existing rateCard.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to add an audit to

var rateCardAudit = "rateCardAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRateCardAudit(rateCardId, rateCardAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to add an audit to | 
 **rateCardAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRateCardFile"></a>
# **addRateCardFile**
> addRateCardFile(rateCardId, fileName)

Attach a file to a rateCard

Adds a file to an existing rateCard.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRateCardFile(rateCardId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addRateCardFileByURL"></a>
# **addRateCardFileByURL**
> addRateCardFileByURL(body, rateCardId)

Attach a file to a rateCard by URL.

Adds a file to an existing rateCard by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var rateCardId = 56; // Number | Id of the rateCard to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRateCardFileByURL(body, rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **rateCardId** | **Number**| Id of the rateCard to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRateCardTag"></a>
# **addRateCardTag**
> addRateCardTag(rateCardId, rateCardTag)

Add new tags for a rateCard.

Adds a tag to an existing rateCard.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to add a tag to

var rateCardTag = "rateCardTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRateCardTag(rateCardId, rateCardTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to add a tag to | 
 **rateCardTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRateCard"></a>
# **deleteRateCard**
> deleteRateCard(rateCardId)

Delete a rateCard

Deletes the rateCard identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRateCard(rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRateCardFile"></a>
# **deleteRateCardFile**
> deleteRateCardFile(rateCardId, fileId)

Delete a file for a rateCard.

Deletes an existing rateCard file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRateCardFile(rateCardId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRateCardTag"></a>
# **deleteRateCardTag**
> deleteRateCardTag(rateCardId, rateCardTag)

Delete a tag for a rateCard.

Deletes an existing rateCard tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to remove tag from

var rateCardTag = "rateCardTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRateCardTag(rateCardId, rateCardTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to remove tag from | 
 **rateCardTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateRateCardById"></a>
# **getDuplicateRateCardById**
> RateCard getDuplicateRateCardById(rateCardId)

Get a duplicated a rateCard by id

Returns a duplicated rateCard identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateRateCardById(rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to be duplicated. | 

### Return type

[**RateCard**](RateCard.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRateCardByFilter"></a>
# **getRateCardByFilter**
> [RateCard] getRateCardByFilter(opts)

Search rateCards by filter

Returns the list of rateCards that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

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
apiInstance.getRateCardByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[RateCard]**](RateCard.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRateCardById"></a>
# **getRateCardById**
> RateCard getRateCardById(rateCardId)

Get a rateCard by id

Returns the rateCard identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRateCardById(rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to be returned. | 

### Return type

[**RateCard**](RateCard.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRateCardFiles"></a>
# **getRateCardFiles**
> getRateCardFiles(rateCardId)

Get the files for a rateCard.

Get all existing rateCard files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRateCardFiles(rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRateCardTags"></a>
# **getRateCardTags**
> getRateCardTags(rateCardId)

Get the tags for a rateCard.

Get all existing rateCard tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var rateCardId = 56; // Number | Id of the rateCard to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRateCardTags(rateCardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateCardId** | **Number**| Id of the rateCard to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRateCard"></a>
# **updateRateCard**
> updateRateCard(body)

Update a rateCard

Updates an existing rateCard using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.RateCardApi();

var body = new infoplus.RateCard(); // RateCard | RateCard to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRateCard(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RateCard**](RateCard.md)| RateCard to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

