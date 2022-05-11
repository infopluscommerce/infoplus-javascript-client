# infoplus.CustomerApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomer**](CustomerApi.md#addCustomer) | **POST** /v3.0/customer | Create a customer
[**addCustomerAudit**](CustomerApi.md#addCustomerAudit) | **PUT** /v3.0/customer/{customerId}/audit/{customerAudit} | Add new audit for a customer
[**addCustomerFile**](CustomerApi.md#addCustomerFile) | **POST** /v3.0/customer/{customerId}/file/{fileName} | Attach a file to a customer
[**addCustomerFileByURL**](CustomerApi.md#addCustomerFileByURL) | **POST** /v3.0/customer/{customerId}/file | Attach a file to a customer by URL.
[**addCustomerTag**](CustomerApi.md#addCustomerTag) | **PUT** /v3.0/customer/{customerId}/tag/{customerTag} | Add new tags for a customer.
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /v3.0/customer/{customerId} | Delete a customer
[**deleteCustomerFile**](CustomerApi.md#deleteCustomerFile) | **DELETE** /v3.0/customer/{customerId}/file/{fileId} | Delete a file for a customer.
[**deleteCustomerTag**](CustomerApi.md#deleteCustomerTag) | **DELETE** /v3.0/customer/{customerId}/tag/{customerTag} | Delete a tag for a customer.
[**getByCustomerNo**](CustomerApi.md#getByCustomerNo) | **GET** /v3.0/customer/getByCustomerNo | Get a customer by Customer No
[**getCustomerByFilter**](CustomerApi.md#getCustomerByFilter) | **GET** /v3.0/customer/search | Search customers by filter
[**getCustomerById**](CustomerApi.md#getCustomerById) | **GET** /v3.0/customer/{customerId} | Get a customer by id
[**getCustomerFiles**](CustomerApi.md#getCustomerFiles) | **GET** /v3.0/customer/{customerId}/file | Get the files for a customer.
[**getCustomerTags**](CustomerApi.md#getCustomerTags) | **GET** /v3.0/customer/{customerId}/tag | Get the tags for a customer.
[**getDuplicateCustomerById**](CustomerApi.md#getDuplicateCustomerById) | **GET** /v3.0/customer/duplicate/{customerId} | Get a duplicated a customer by id
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /v3.0/customer | Update a customer
[**updateCustomerCustomFields**](CustomerApi.md#updateCustomerCustomFields) | **PUT** /v3.0/customer/customFields | Update a customer custom fields


<a name="addCustomer"></a>
# **addCustomer**
> Customer addCustomer(body)

Create a customer

Inserts a new customer using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var body = new infoplus.Customer(); // Customer | Customer to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)| Customer to be inserted. | 

### Return type

[**Customer**](Customer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerAudit"></a>
# **addCustomerAudit**
> addCustomerAudit(customerId, customerAudit)

Add new audit for a customer

Adds an audit to an existing customer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to add an audit to

var customerAudit = "customerAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerAudit(customerId, customerAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to add an audit to | 
 **customerAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerFile"></a>
# **addCustomerFile**
> addCustomerFile(customerId, fileName)

Attach a file to a customer

Adds a file to an existing customer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerFile(customerId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addCustomerFileByURL"></a>
# **addCustomerFileByURL**
> addCustomerFileByURL(body, customerId)

Attach a file to a customer by URL.

Adds a file to an existing customer by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var customerId = 56; // Number | Id of the customer to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerFileByURL(body, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **customerId** | **Number**| Id of the customer to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addCustomerTag"></a>
# **addCustomerTag**
> addCustomerTag(customerId, customerTag)

Add new tags for a customer.

Adds a tag to an existing customer.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to add a tag to

var customerTag = "customerTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCustomerTag(customerId, customerTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to add a tag to | 
 **customerTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(customerId)

Delete a customer

Deletes the customer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomer(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerFile"></a>
# **deleteCustomerFile**
> deleteCustomerFile(customerId, fileId)

Delete a file for a customer.

Deletes an existing customer file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerFile(customerId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteCustomerTag"></a>
# **deleteCustomerTag**
> deleteCustomerTag(customerId, customerTag)

Delete a tag for a customer.

Deletes an existing customer tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to remove tag from

var customerTag = "customerTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerTag(customerId, customerTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to remove tag from | 
 **customerTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByCustomerNo"></a>
# **getByCustomerNo**
> Customer getByCustomerNo(lobId, customerNo)

Get a customer by Customer No

Returns the customer identified by the specified parameters.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var lobId = 56; // Number | lobId of the customer to be returned.

var customerNo = "customerNo_example"; // String | customerNo of the customer to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getByCustomerNo(lobId, customerNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lobId** | **Number**| lobId of the customer to be returned. | 
 **customerNo** | **String**| customerNo of the customer to be returned. | 

### Return type

[**Customer**](Customer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerByFilter"></a>
# **getCustomerByFilter**
> [Customer] getCustomerByFilter(opts)

Search customers by filter

Returns the list of customers that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

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
apiInstance.getCustomerByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Customer]**](Customer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerById"></a>
# **getCustomerById**
> Customer getCustomerById(customerId)

Get a customer by id

Returns the customer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerById(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to be returned. | 

### Return type

[**Customer**](Customer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerFiles"></a>
# **getCustomerFiles**
> getCustomerFiles(customerId)

Get the files for a customer.

Get all existing customer files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerFiles(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerTags"></a>
# **getCustomerTags**
> getCustomerTags(customerId)

Get the tags for a customer.

Get all existing customer tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomerTags(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateCustomerById"></a>
# **getDuplicateCustomerById**
> Customer getDuplicateCustomerById(customerId)

Get a duplicated a customer by id

Returns a duplicated customer identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var customerId = 56; // Number | Id of the customer to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateCustomerById(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Id of the customer to be duplicated. | 

### Return type

[**Customer**](Customer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> updateCustomer(body)

Update a customer

Updates an existing customer using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var body = new infoplus.Customer(); // Customer | Customer to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)| Customer to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomerCustomFields"></a>
# **updateCustomerCustomFields**
> updateCustomerCustomFields(body)

Update a customer custom fields

Updates an existing customer custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.CustomerApi();

var body = new infoplus.Customer(); // Customer | Customer to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomerCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)| Customer to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

