# infoplus.JobRecipeApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobRecipe**](JobRecipeApi.md#addJobRecipe) | **POST** /beta/jobRecipe | Create a jobRecipe
[**addJobRecipeAudit**](JobRecipeApi.md#addJobRecipeAudit) | **PUT** /beta/jobRecipe/{jobRecipeId}/audit/{jobRecipeAudit} | Add new audit for a jobRecipe
[**addJobRecipeFile**](JobRecipeApi.md#addJobRecipeFile) | **POST** /beta/jobRecipe/{jobRecipeId}/file/{fileName} | Attach a file to a jobRecipe
[**addJobRecipeFileByURL**](JobRecipeApi.md#addJobRecipeFileByURL) | **POST** /beta/jobRecipe/{jobRecipeId}/file | Attach a file to a jobRecipe by URL.
[**addJobRecipeTag**](JobRecipeApi.md#addJobRecipeTag) | **PUT** /beta/jobRecipe/{jobRecipeId}/tag/{jobRecipeTag} | Add new tags for a jobRecipe.
[**deleteJobRecipe**](JobRecipeApi.md#deleteJobRecipe) | **DELETE** /beta/jobRecipe/{jobRecipeId} | Delete a jobRecipe
[**deleteJobRecipeFile**](JobRecipeApi.md#deleteJobRecipeFile) | **DELETE** /beta/jobRecipe/{jobRecipeId}/file/{fileId} | Delete a file for a jobRecipe.
[**deleteJobRecipeTag**](JobRecipeApi.md#deleteJobRecipeTag) | **DELETE** /beta/jobRecipe/{jobRecipeId}/tag/{jobRecipeTag} | Delete a tag for a jobRecipe.
[**getDuplicateJobRecipeById**](JobRecipeApi.md#getDuplicateJobRecipeById) | **GET** /beta/jobRecipe/duplicate/{jobRecipeId} | Get a duplicated a jobRecipe by id
[**getJobRecipeByFilter**](JobRecipeApi.md#getJobRecipeByFilter) | **GET** /beta/jobRecipe/search | Search jobRecipes by filter
[**getJobRecipeById**](JobRecipeApi.md#getJobRecipeById) | **GET** /beta/jobRecipe/{jobRecipeId} | Get a jobRecipe by id
[**getJobRecipeFiles**](JobRecipeApi.md#getJobRecipeFiles) | **GET** /beta/jobRecipe/{jobRecipeId}/file | Get the files for a jobRecipe.
[**getJobRecipeTags**](JobRecipeApi.md#getJobRecipeTags) | **GET** /beta/jobRecipe/{jobRecipeId}/tag | Get the tags for a jobRecipe.
[**updateJobRecipe**](JobRecipeApi.md#updateJobRecipe) | **PUT** /beta/jobRecipe | Update a jobRecipe
[**updateJobRecipeCustomFields**](JobRecipeApi.md#updateJobRecipeCustomFields) | **PUT** /beta/jobRecipe/customFields | Update a jobRecipe custom fields


<a name="addJobRecipe"></a>
# **addJobRecipe**
> JobRecipe addJobRecipe(body)

Create a jobRecipe

Inserts a new jobRecipe using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var body = new infoplus.JobRecipe(); // JobRecipe | JobRecipe to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addJobRecipe(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobRecipe**](JobRecipe.md)| JobRecipe to be inserted. | 

### Return type

[**JobRecipe**](JobRecipe.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobRecipeAudit"></a>
# **addJobRecipeAudit**
> addJobRecipeAudit(jobRecipeId, jobRecipeAudit)

Add new audit for a jobRecipe

Adds an audit to an existing jobRecipe.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to add an audit to

var jobRecipeAudit = "jobRecipeAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobRecipeAudit(jobRecipeId, jobRecipeAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to add an audit to | 
 **jobRecipeAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobRecipeFile"></a>
# **addJobRecipeFile**
> addJobRecipeFile(jobRecipeId, fileName)

Attach a file to a jobRecipe

Adds a file to an existing jobRecipe.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobRecipeFile(jobRecipeId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addJobRecipeFileByURL"></a>
# **addJobRecipeFileByURL**
> addJobRecipeFileByURL(body, jobRecipeId)

Attach a file to a jobRecipe by URL.

Adds a file to an existing jobRecipe by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var jobRecipeId = 56; // Number | Id of the jobRecipe to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobRecipeFileByURL(body, jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **jobRecipeId** | **Number**| Id of the jobRecipe to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addJobRecipeTag"></a>
# **addJobRecipeTag**
> addJobRecipeTag(jobRecipeId, jobRecipeTag)

Add new tags for a jobRecipe.

Adds a tag to an existing jobRecipe.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to add a tag to

var jobRecipeTag = "jobRecipeTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addJobRecipeTag(jobRecipeId, jobRecipeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to add a tag to | 
 **jobRecipeTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobRecipe"></a>
# **deleteJobRecipe**
> deleteJobRecipe(jobRecipeId)

Delete a jobRecipe

Deletes the jobRecipe identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobRecipe(jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobRecipeFile"></a>
# **deleteJobRecipeFile**
> deleteJobRecipeFile(jobRecipeId, fileId)

Delete a file for a jobRecipe.

Deletes an existing jobRecipe file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobRecipeFile(jobRecipeId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJobRecipeTag"></a>
# **deleteJobRecipeTag**
> deleteJobRecipeTag(jobRecipeId, jobRecipeTag)

Delete a tag for a jobRecipe.

Deletes an existing jobRecipe tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to remove tag from

var jobRecipeTag = "jobRecipeTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteJobRecipeTag(jobRecipeId, jobRecipeTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to remove tag from | 
 **jobRecipeTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateJobRecipeById"></a>
# **getDuplicateJobRecipeById**
> JobRecipe getDuplicateJobRecipeById(jobRecipeId)

Get a duplicated a jobRecipe by id

Returns a duplicated jobRecipe identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateJobRecipeById(jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to be duplicated. | 

### Return type

[**JobRecipe**](JobRecipe.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobRecipeByFilter"></a>
# **getJobRecipeByFilter**
> [JobRecipe] getJobRecipeByFilter(opts)

Search jobRecipes by filter

Returns the list of jobRecipes that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

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
apiInstance.getJobRecipeByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[JobRecipe]**](JobRecipe.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobRecipeById"></a>
# **getJobRecipeById**
> JobRecipe getJobRecipeById(jobRecipeId)

Get a jobRecipe by id

Returns the jobRecipe identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobRecipeById(jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to be returned. | 

### Return type

[**JobRecipe**](JobRecipe.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobRecipeFiles"></a>
# **getJobRecipeFiles**
> getJobRecipeFiles(jobRecipeId)

Get the files for a jobRecipe.

Get all existing jobRecipe files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobRecipeFiles(jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJobRecipeTags"></a>
# **getJobRecipeTags**
> getJobRecipeTags(jobRecipeId)

Get the tags for a jobRecipe.

Get all existing jobRecipe tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var jobRecipeId = 56; // Number | Id of the jobRecipe to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJobRecipeTags(jobRecipeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRecipeId** | **Number**| Id of the jobRecipe to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateJobRecipe"></a>
# **updateJobRecipe**
> updateJobRecipe(body)

Update a jobRecipe

Updates an existing jobRecipe using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var body = new infoplus.JobRecipe(); // JobRecipe | JobRecipe to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobRecipe(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobRecipe**](JobRecipe.md)| JobRecipe to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJobRecipeCustomFields"></a>
# **updateJobRecipeCustomFields**
> updateJobRecipeCustomFields(body)

Update a jobRecipe custom fields

Updates an existing jobRecipe custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.JobRecipeApi();

var body = new infoplus.JobRecipe(); // JobRecipe | JobRecipe to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJobRecipeCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobRecipe**](JobRecipe.md)| JobRecipe to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

