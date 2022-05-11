# infoplus.CustomerInvoiceTemplateApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerInvoiceTemplate**](CustomerInvoiceTemplateApi.md#addCustomerInvoiceTemplate) | **POST** /v3.0/customerInvoiceTemplate | Create a customerInvoiceTemplate
[**addCustomerInvoiceTemplateAudit**](CustomerInvoiceTemplateApi.md#addCustomerInvoiceTemplateAudit) | **PUT** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/audit/{customerInvoiceTemplateAudit} | Add new audit for a customerInvoiceTemplate
[**addCustomerInvoiceTemplateFile**](CustomerInvoiceTemplateApi.md#addCustomerInvoiceTemplateFile) | **POST** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/file/{fileName} | Attach a file to a customerInvoiceTemplate
[**addCustomerInvoiceTemplateFileByURL**](CustomerInvoiceTemplateApi.md#addCustomerInvoiceTemplateFileByURL) | **POST** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/file | Attach a file to a customerInvoiceTemplate by URL.
[**addCustomerInvoiceTemplateTag**](CustomerInvoiceTemplateApi.md#addCustomerInvoiceTemplateTag) | **PUT** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag/{customerInvoiceTemplateTag} | Add new tags for a customerInvoiceTemplate.
[**deleteCustomerInvoiceTemplate**](CustomerInvoiceTemplateApi.md#deleteCustomerInvoiceTemplate) | **DELETE** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId} | Delete a customerInvoiceTemplate
[**deleteCustomerInvoiceTemplateFile**](CustomerInvoiceTemplateApi.md#deleteCustomerInvoiceTemplateFile) | **DELETE** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/file/{fileId} | Delete a file for a customerInvoiceTemplate.
[**deleteCustomerInvoiceTemplateTag**](CustomerInvoiceTemplateApi.md#deleteCustomerInvoiceTemplateTag) | **DELETE** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag/{customerInvoiceTemplateTag} | Delete a tag for a customerInvoiceTemplate.
[**getCustomerInvoiceTemplateByFilter**](CustomerInvoiceTemplateApi.md#getCustomerInvoiceTemplateByFilter) | **GET** /v3.0/customerInvoiceTemplate/search | Search customerInvoiceTemplates by filter
[**getCustomerInvoiceTemplateById**](CustomerInvoiceTemplateApi.md#getCustomerInvoiceTemplateById) | **GET** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId} | Get a customerInvoiceTemplate by id
[**getCustomerInvoiceTemplateFiles**](CustomerInvoiceTemplateApi.md#getCustomerInvoiceTemplateFiles) | **GET** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/file | Get the files for a customerInvoiceTemplate.
[**getCustomerInvoiceTemplateTags**](CustomerInvoiceTemplateApi.md#getCustomerInvoiceTemplateTags) | **GET** /v3.0/customerInvoiceTemplate/{customerInvoiceTemplateId}/tag | Get the tags for a customerInvoiceTemplate.
[**getDuplicateCustomerInvoiceTemplateById**](CustomerInvoiceTemplateApi.md#getDuplicateCustomerInvoiceTemplateById) | **GET** /v3.0/customerInvoiceTemplate/duplicate/{customerInvoiceTemplateId} | Get a duplicated a customerInvoiceTemplate by id
[**updateCustomerInvoiceTemplate**](CustomerInvoiceTemplateApi.md#updateCustomerInvoiceTemplate) | **PUT** /v3.0/customerInvoiceTemplate | Update a customerInvoiceTemplate


<a name="addCustomerInvoiceTemplate"></a>
# **addCustomerInvoiceTemplate**
> CustomerInvoiceTemplate addCustomerInvoiceTemplate(body)

Create a customerInvoiceTemplate

Inserts a new customerInvoiceTemplate using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var body = new infoplus.CustomerInvoiceTemplate(); // CustomerInvoiceTemplate | CustomerInvoiceTemplate to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomerInvoiceTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerInvoiceTemplate**](CustomerInvoiceTemplate.md)| CustomerInvoiceTemplate to be inserted. | 

### Return type

[**CustomerInvoiceTemplate**](CustomerInvoiceTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateAudit"></a>
# **addCustomerInvoiceTemplateAudit**
> addCustomerInvoiceTemplateAudit(customerInvoiceTemplateId, customerInvoiceTemplateAudit)

Add new audit for a customerInvoiceTemplate

Adds an audit to an existing customerInvoiceTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to add an audit to

var customerInvoiceTemplateAudit = "customerInvoiceTemplateAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateAudit(customerInvoiceTemplateId, customerInvoiceTemplateAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to add an audit to | 
 **customerInvoiceTemplateAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateFile"></a>
# **addCustomerInvoiceTemplateFile**
> addCustomerInvoiceTemplateFile(customerInvoiceTemplateId, fileName)

Attach a file to a customerInvoiceTemplate

Adds a file to an existing customerInvoiceTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateFile(customerInvoiceTemplateId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateFileByURL"></a>
# **addCustomerInvoiceTemplateFileByURL**
> addCustomerInvoiceTemplateFileByURL(body, customerInvoiceTemplateId)

Attach a file to a customerInvoiceTemplate by URL.

Adds a file to an existing customerInvoiceTemplate by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateFileByURL(body, customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerInvoiceTemplateTag"></a>
# **addCustomerInvoiceTemplateTag**
> addCustomerInvoiceTemplateTag(customerInvoiceTemplateId, customerInvoiceTemplateTag)

Add new tags for a customerInvoiceTemplate.

Adds a tag to an existing customerInvoiceTemplate.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to add a tag to

var customerInvoiceTemplateTag = "customerInvoiceTemplateTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerInvoiceTemplateTag(customerInvoiceTemplateId, customerInvoiceTemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to add a tag to | 
 **customerInvoiceTemplateTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplate"></a>
# **deleteCustomerInvoiceTemplate**
> deleteCustomerInvoiceTemplate(customerInvoiceTemplateId)

Delete a customerInvoiceTemplate

Deletes the customerInvoiceTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplate(customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplateFile"></a>
# **deleteCustomerInvoiceTemplateFile**
> deleteCustomerInvoiceTemplateFile(customerInvoiceTemplateId, fileId)

Delete a file for a customerInvoiceTemplate.

Deletes an existing customerInvoiceTemplate file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplateFile(customerInvoiceTemplateId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerInvoiceTemplateTag"></a>
# **deleteCustomerInvoiceTemplateTag**
> deleteCustomerInvoiceTemplateTag(customerInvoiceTemplateId, customerInvoiceTemplateTag)

Delete a tag for a customerInvoiceTemplate.

Deletes an existing customerInvoiceTemplate tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to remove tag from

var customerInvoiceTemplateTag = "customerInvoiceTemplateTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerInvoiceTemplateTag(customerInvoiceTemplateId, customerInvoiceTemplateTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to remove tag from | 
 **customerInvoiceTemplateTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateByFilter"></a>
# **getCustomerInvoiceTemplateByFilter**
> [CustomerInvoiceTemplate] getCustomerInvoiceTemplateByFilter(opts)

Search customerInvoiceTemplates by filter

Returns the list of customerInvoiceTemplates that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

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
apiInstance.getCustomerInvoiceTemplateByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[CustomerInvoiceTemplate]**](CustomerInvoiceTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateById"></a>
# **getCustomerInvoiceTemplateById**
> CustomerInvoiceTemplate getCustomerInvoiceTemplateById(customerInvoiceTemplateId)

Get a customerInvoiceTemplate by id

Returns the customerInvoiceTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerInvoiceTemplateById(customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to be returned. | 

### Return type

[**CustomerInvoiceTemplate**](CustomerInvoiceTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateFiles"></a>
# **getCustomerInvoiceTemplateFiles**
> getCustomerInvoiceTemplateFiles(customerInvoiceTemplateId)

Get the files for a customerInvoiceTemplate.

Get all existing customerInvoiceTemplate files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerInvoiceTemplateFiles(customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerInvoiceTemplateTags"></a>
# **getCustomerInvoiceTemplateTags**
> getCustomerInvoiceTemplateTags(customerInvoiceTemplateId)

Get the tags for a customerInvoiceTemplate.

Get all existing customerInvoiceTemplate tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerInvoiceTemplateTags(customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCustomerInvoiceTemplateById"></a>
# **getDuplicateCustomerInvoiceTemplateById**
> CustomerInvoiceTemplate getDuplicateCustomerInvoiceTemplateById(customerInvoiceTemplateId)

Get a duplicated a customerInvoiceTemplate by id

Returns a duplicated customerInvoiceTemplate identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var customerInvoiceTemplateId = 56; // Number | Id of the customerInvoiceTemplate to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCustomerInvoiceTemplateById(customerInvoiceTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerInvoiceTemplateId** | **Number**| Id of the customerInvoiceTemplate to be duplicated. | 

### Return type

[**CustomerInvoiceTemplate**](CustomerInvoiceTemplate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomerInvoiceTemplate"></a>
# **updateCustomerInvoiceTemplate**
> updateCustomerInvoiceTemplate(body)

Update a customerInvoiceTemplate

Updates an existing customerInvoiceTemplate using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerInvoiceTemplateApi();

var body = new infoplus.CustomerInvoiceTemplate(); // CustomerInvoiceTemplate | CustomerInvoiceTemplate to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomerInvoiceTemplate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerInvoiceTemplate**](CustomerInvoiceTemplate.md)| CustomerInvoiceTemplate to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

