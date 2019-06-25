# infoplus.LegacyLowstockContactApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLegacyLowstockContact**](LegacyLowstockContactApi.md#addLegacyLowstockContact) | **POST** /beta/legacyLowstockContact | Create a legacyLowstockContact
[**addLegacyLowstockContactAudit**](LegacyLowstockContactApi.md#addLegacyLowstockContactAudit) | **PUT** /beta/legacyLowstockContact/{legacyLowstockContactId}/audit/{legacyLowstockContactAudit} | Add new audit for a legacyLowstockContact
[**addLegacyLowstockContactFile**](LegacyLowstockContactApi.md#addLegacyLowstockContactFile) | **POST** /beta/legacyLowstockContact/{legacyLowstockContactId}/file/{fileName} | Attach a file to a legacyLowstockContact
[**addLegacyLowstockContactTag**](LegacyLowstockContactApi.md#addLegacyLowstockContactTag) | **PUT** /beta/legacyLowstockContact/{legacyLowstockContactId}/tag/{legacyLowstockContactTag} | Add new tags for a legacyLowstockContact.
[**deleteLegacyLowstockContact**](LegacyLowstockContactApi.md#deleteLegacyLowstockContact) | **DELETE** /beta/legacyLowstockContact/{legacyLowstockContactId} | Delete a legacyLowstockContact
[**deleteLegacyLowstockContactTag**](LegacyLowstockContactApi.md#deleteLegacyLowstockContactTag) | **DELETE** /beta/legacyLowstockContact/{legacyLowstockContactId}/tag/{legacyLowstockContactTag} | Delete a tag for a legacyLowstockContact.
[**getDuplicateLegacyLowstockContactById**](LegacyLowstockContactApi.md#getDuplicateLegacyLowstockContactById) | **GET** /beta/legacyLowstockContact/duplicate/{legacyLowstockContactId} | Get a duplicated a legacyLowstockContact by id
[**getLegacyLowstockContactByFilter**](LegacyLowstockContactApi.md#getLegacyLowstockContactByFilter) | **GET** /beta/legacyLowstockContact/search | Search legacyLowstockContacts by filter
[**getLegacyLowstockContactById**](LegacyLowstockContactApi.md#getLegacyLowstockContactById) | **GET** /beta/legacyLowstockContact/{legacyLowstockContactId} | Get a legacyLowstockContact by id
[**getLegacyLowstockContactTags**](LegacyLowstockContactApi.md#getLegacyLowstockContactTags) | **GET** /beta/legacyLowstockContact/{legacyLowstockContactId}/tag | Get the tags for a legacyLowstockContact.
[**updateLegacyLowstockContact**](LegacyLowstockContactApi.md#updateLegacyLowstockContact) | **PUT** /beta/legacyLowstockContact | Update a legacyLowstockContact


<a name="addLegacyLowstockContact"></a>
# **addLegacyLowstockContact**
> LegacyLowstockContact addLegacyLowstockContact(body)

Create a legacyLowstockContact

Inserts a new legacyLowstockContact using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var body = new infoplus.LegacyLowstockContact(); // LegacyLowstockContact | LegacyLowstockContact to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addLegacyLowstockContact(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LegacyLowstockContact**](LegacyLowstockContact.md)| LegacyLowstockContact to be inserted. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLegacyLowstockContactAudit"></a>
# **addLegacyLowstockContactAudit**
> addLegacyLowstockContactAudit(legacyLowstockContactId, legacyLowstockContactAudit)

Add new audit for a legacyLowstockContact

Adds an audit to an existing legacyLowstockContact.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to add an audit to

var legacyLowstockContactAudit = "legacyLowstockContactAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLegacyLowstockContactAudit(legacyLowstockContactId, legacyLowstockContactAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to add an audit to | 
 **legacyLowstockContactAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addLegacyLowstockContactFile"></a>
# **addLegacyLowstockContactFile**
> addLegacyLowstockContactFile(legacyLowstockContactId, fileName)

Attach a file to a legacyLowstockContact

Adds a file to an existing legacyLowstockContact.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLegacyLowstockContactFile(legacyLowstockContactId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addLegacyLowstockContactTag"></a>
# **addLegacyLowstockContactTag**
> addLegacyLowstockContactTag(legacyLowstockContactId, legacyLowstockContactTag)

Add new tags for a legacyLowstockContact.

Adds a tag to an existing legacyLowstockContact.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to add a tag to

var legacyLowstockContactTag = "legacyLowstockContactTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLegacyLowstockContactTag(legacyLowstockContactId, legacyLowstockContactTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to add a tag to | 
 **legacyLowstockContactTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLegacyLowstockContact(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteLegacyLowstockContactTag"></a>
# **deleteLegacyLowstockContactTag**
> deleteLegacyLowstockContactTag(legacyLowstockContactId, legacyLowstockContactTag)

Delete a tag for a legacyLowstockContact.

Deletes an existing legacyLowstockContact tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to remove tag from

var legacyLowstockContactTag = "legacyLowstockContactTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLegacyLowstockContactTag(legacyLowstockContactId, legacyLowstockContactTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to remove tag from | 
 **legacyLowstockContactTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateLegacyLowstockContactById(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to be duplicated. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

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
apiInstance.getLegacyLowstockContactByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[LegacyLowstockContact]**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLegacyLowstockContactById(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to be returned. | 

### Return type

[**LegacyLowstockContact**](LegacyLowstockContact.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLegacyLowstockContactTags"></a>
# **getLegacyLowstockContactTags**
> getLegacyLowstockContactTags(legacyLowstockContactId)

Get the tags for a legacyLowstockContact.

Get all existing legacyLowstockContact tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var legacyLowstockContactId = 56; // Number | Id of the legacyLowstockContact to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLegacyLowstockContactTags(legacyLowstockContactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyLowstockContactId** | **Number**| Id of the legacyLowstockContact to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

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
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.LegacyLowstockContactApi();

var body = new infoplus.LegacyLowstockContact(); // LegacyLowstockContact | LegacyLowstockContact to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateLegacyLowstockContact(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LegacyLowstockContact**](LegacyLowstockContact.md)| LegacyLowstockContact to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

