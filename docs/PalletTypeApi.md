# infoplus.PalletTypeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPalletType**](PalletTypeApi.md#addPalletType) | **POST** /v3.0/palletType | Create a palletType
[**addPalletTypeAudit**](PalletTypeApi.md#addPalletTypeAudit) | **PUT** /v3.0/palletType/{palletTypeId}/audit/{palletTypeAudit} | Add new audit for a palletType
[**addPalletTypeFile**](PalletTypeApi.md#addPalletTypeFile) | **POST** /v3.0/palletType/{palletTypeId}/file/{fileName} | Attach a file to a palletType
[**addPalletTypeFileByURL**](PalletTypeApi.md#addPalletTypeFileByURL) | **POST** /v3.0/palletType/{palletTypeId}/file | Attach a file to a palletType by URL.
[**addPalletTypeTag**](PalletTypeApi.md#addPalletTypeTag) | **PUT** /v3.0/palletType/{palletTypeId}/tag/{palletTypeTag} | Add new tags for a palletType.
[**deletePalletType**](PalletTypeApi.md#deletePalletType) | **DELETE** /v3.0/palletType/{palletTypeId} | Delete a palletType
[**deletePalletTypeFile**](PalletTypeApi.md#deletePalletTypeFile) | **DELETE** /v3.0/palletType/{palletTypeId}/file/{fileId} | Delete a file for a palletType.
[**deletePalletTypeTag**](PalletTypeApi.md#deletePalletTypeTag) | **DELETE** /v3.0/palletType/{palletTypeId}/tag/{palletTypeTag} | Delete a tag for a palletType.
[**getDuplicatePalletTypeById**](PalletTypeApi.md#getDuplicatePalletTypeById) | **GET** /v3.0/palletType/duplicate/{palletTypeId} | Get a duplicated a palletType by id
[**getPalletTypeByFilter**](PalletTypeApi.md#getPalletTypeByFilter) | **GET** /v3.0/palletType/search | Search palletTypes by filter
[**getPalletTypeById**](PalletTypeApi.md#getPalletTypeById) | **GET** /v3.0/palletType/{palletTypeId} | Get a palletType by id
[**getPalletTypeFiles**](PalletTypeApi.md#getPalletTypeFiles) | **GET** /v3.0/palletType/{palletTypeId}/file | Get the files for a palletType.
[**getPalletTypeTags**](PalletTypeApi.md#getPalletTypeTags) | **GET** /v3.0/palletType/{palletTypeId}/tag | Get the tags for a palletType.
[**updatePalletType**](PalletTypeApi.md#updatePalletType) | **PUT** /v3.0/palletType | Update a palletType
[**updatePalletTypeCustomFields**](PalletTypeApi.md#updatePalletTypeCustomFields) | **PUT** /v3.0/palletType/customFields | Update a palletType custom fields


<a name="addPalletType"></a>
# **addPalletType**
> PalletType addPalletType(body)

Create a palletType

Inserts a new palletType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var body = new infoplus.PalletType(); // PalletType | PalletType to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPalletType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PalletType**](PalletType.md)| PalletType to be inserted. | 

### Return type

[**PalletType**](PalletType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPalletTypeAudit"></a>
# **addPalletTypeAudit**
> addPalletTypeAudit(palletTypeId, palletTypeAudit)

Add new audit for a palletType

Adds an audit to an existing palletType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to add an audit to

var palletTypeAudit = "palletTypeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPalletTypeAudit(palletTypeId, palletTypeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to add an audit to | 
 **palletTypeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPalletTypeFile"></a>
# **addPalletTypeFile**
> addPalletTypeFile(palletTypeId, fileName)

Attach a file to a palletType

Adds a file to an existing palletType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPalletTypeFile(palletTypeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addPalletTypeFileByURL"></a>
# **addPalletTypeFileByURL**
> addPalletTypeFileByURL(body, palletTypeId)

Attach a file to a palletType by URL.

Adds a file to an existing palletType by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var palletTypeId = 56; // Number | Id of the palletType to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPalletTypeFileByURL(body, palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **palletTypeId** | **Number**| Id of the palletType to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPalletTypeTag"></a>
# **addPalletTypeTag**
> addPalletTypeTag(palletTypeId, palletTypeTag)

Add new tags for a palletType.

Adds a tag to an existing palletType.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to add a tag to

var palletTypeTag = "palletTypeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPalletTypeTag(palletTypeId, palletTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to add a tag to | 
 **palletTypeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePalletType"></a>
# **deletePalletType**
> deletePalletType(palletTypeId)

Delete a palletType

Deletes the palletType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePalletType(palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePalletTypeFile"></a>
# **deletePalletTypeFile**
> deletePalletTypeFile(palletTypeId, fileId)

Delete a file for a palletType.

Deletes an existing palletType file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePalletTypeFile(palletTypeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePalletTypeTag"></a>
# **deletePalletTypeTag**
> deletePalletTypeTag(palletTypeId, palletTypeTag)

Delete a tag for a palletType.

Deletes an existing palletType tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to remove tag from

var palletTypeTag = "palletTypeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePalletTypeTag(palletTypeId, palletTypeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to remove tag from | 
 **palletTypeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicatePalletTypeById"></a>
# **getDuplicatePalletTypeById**
> PalletType getDuplicatePalletTypeById(palletTypeId)

Get a duplicated a palletType by id

Returns a duplicated palletType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicatePalletTypeById(palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to be duplicated. | 

### Return type

[**PalletType**](PalletType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPalletTypeByFilter"></a>
# **getPalletTypeByFilter**
> [PalletType] getPalletTypeByFilter(opts)

Search palletTypes by filter

Returns the list of palletTypes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

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
apiInstance.getPalletTypeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[PalletType]**](PalletType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPalletTypeById"></a>
# **getPalletTypeById**
> PalletType getPalletTypeById(palletTypeId)

Get a palletType by id

Returns the palletType identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPalletTypeById(palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to be returned. | 

### Return type

[**PalletType**](PalletType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPalletTypeFiles"></a>
# **getPalletTypeFiles**
> getPalletTypeFiles(palletTypeId)

Get the files for a palletType.

Get all existing palletType files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPalletTypeFiles(palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPalletTypeTags"></a>
# **getPalletTypeTags**
> getPalletTypeTags(palletTypeId)

Get the tags for a palletType.

Get all existing palletType tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var palletTypeId = 56; // Number | Id of the palletType to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPalletTypeTags(palletTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletTypeId** | **Number**| Id of the palletType to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePalletType"></a>
# **updatePalletType**
> updatePalletType(body)

Update a palletType

Updates an existing palletType using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var body = new infoplus.PalletType(); // PalletType | PalletType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePalletType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PalletType**](PalletType.md)| PalletType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePalletTypeCustomFields"></a>
# **updatePalletTypeCustomFields**
> updatePalletTypeCustomFields(body)

Update a palletType custom fields

Updates an existing palletType custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.PalletTypeApi();

var body = new infoplus.PalletType(); // PalletType | PalletType to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePalletTypeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PalletType**](PalletType.md)| PalletType to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

