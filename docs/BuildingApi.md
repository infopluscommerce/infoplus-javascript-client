# infoplus.BuildingApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBuilding**](BuildingApi.md#addBuilding) | **POST** /v3.0/building | Create a building
[**addBuildingAudit**](BuildingApi.md#addBuildingAudit) | **PUT** /v3.0/building/{buildingId}/audit/{buildingAudit} | Add new audit for a building
[**addBuildingFile**](BuildingApi.md#addBuildingFile) | **POST** /v3.0/building/{buildingId}/file/{fileName} | Attach a file to a building
[**addBuildingFileByURL**](BuildingApi.md#addBuildingFileByURL) | **POST** /v3.0/building/{buildingId}/file | Attach a file to a building by URL.
[**addBuildingTag**](BuildingApi.md#addBuildingTag) | **PUT** /v3.0/building/{buildingId}/tag/{buildingTag} | Add new tags for a building.
[**deleteBuilding**](BuildingApi.md#deleteBuilding) | **DELETE** /v3.0/building/{buildingId} | Delete a building
[**deleteBuildingFile**](BuildingApi.md#deleteBuildingFile) | **DELETE** /v3.0/building/{buildingId}/file/{fileId} | Delete a file for a building.
[**deleteBuildingTag**](BuildingApi.md#deleteBuildingTag) | **DELETE** /v3.0/building/{buildingId}/tag/{buildingTag} | Delete a tag for a building.
[**getBuildingByFilter**](BuildingApi.md#getBuildingByFilter) | **GET** /v3.0/building/search | Search buildings by filter
[**getBuildingById**](BuildingApi.md#getBuildingById) | **GET** /v3.0/building/{buildingId} | Get a building by id
[**getBuildingFiles**](BuildingApi.md#getBuildingFiles) | **GET** /v3.0/building/{buildingId}/file | Get the files for a building.
[**getBuildingTags**](BuildingApi.md#getBuildingTags) | **GET** /v3.0/building/{buildingId}/tag | Get the tags for a building.
[**getDuplicateBuildingById**](BuildingApi.md#getDuplicateBuildingById) | **GET** /v3.0/building/duplicate/{buildingId} | Get a duplicated a building by id
[**updateBuilding**](BuildingApi.md#updateBuilding) | **PUT** /v3.0/building | Update a building
[**updateBuildingCustomFields**](BuildingApi.md#updateBuildingCustomFields) | **PUT** /v3.0/building/customFields | Update a building custom fields


<a name="addBuilding"></a>
# **addBuilding**
> Building addBuilding(body)

Create a building

Inserts a new building using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var body = new infoplus.Building(); // Building | Building to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBuilding(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Building**](Building.md)| Building to be inserted. | 

### Return type

[**Building**](Building.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBuildingAudit"></a>
# **addBuildingAudit**
> addBuildingAudit(buildingId, buildingAudit)

Add new audit for a building

Adds an audit to an existing building.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to add an audit to

var buildingAudit = "buildingAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBuildingAudit(buildingId, buildingAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to add an audit to | 
 **buildingAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBuildingFile"></a>
# **addBuildingFile**
> addBuildingFile(buildingId, fileName)

Attach a file to a building

Adds a file to an existing building.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to add a file to

var fileName = "fileName_example"; // String | Name of file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBuildingFile(buildingId, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to add a file to | 
 **fileName** | **String**| Name of file | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addBuildingFileByURL"></a>
# **addBuildingFileByURL**
> addBuildingFileByURL(body, buildingId)

Attach a file to a building by URL.

Adds a file to an existing building by URL.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var body = new infoplus.RecordFile(); // RecordFile | The url and optionly fileName to be used.

var buildingId = 56; // Number | Id of the building to add an file to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBuildingFileByURL(body, buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RecordFile**](RecordFile.md)| The url and optionly fileName to be used. | 
 **buildingId** | **Number**| Id of the building to add an file to | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addBuildingTag"></a>
# **addBuildingTag**
> addBuildingTag(buildingId, buildingTag)

Add new tags for a building.

Adds a tag to an existing building.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to add a tag to

var buildingTag = "buildingTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBuildingTag(buildingId, buildingTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to add a tag to | 
 **buildingTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBuilding"></a>
# **deleteBuilding**
> deleteBuilding(buildingId)

Delete a building

Deletes the building identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBuilding(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBuildingFile"></a>
# **deleteBuildingFile**
> deleteBuildingFile(buildingId, fileId)

Delete a file for a building.

Deletes an existing building file using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to remove file from

var fileId = 56; // Number | Id of the file to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBuildingFile(buildingId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to remove file from | 
 **fileId** | **Number**| Id of the file to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteBuildingTag"></a>
# **deleteBuildingTag**
> deleteBuildingTag(buildingId, buildingTag)

Delete a tag for a building.

Deletes an existing building tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to remove tag from

var buildingTag = "buildingTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBuildingTag(buildingId, buildingTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to remove tag from | 
 **buildingTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBuildingByFilter"></a>
# **getBuildingByFilter**
> [Building] getBuildingByFilter(opts)

Search buildings by filter

Returns the list of buildings that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

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
apiInstance.getBuildingByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[Building]**](Building.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBuildingById"></a>
# **getBuildingById**
> Building getBuildingById(buildingId)

Get a building by id

Returns the building identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBuildingById(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to be returned. | 

### Return type

[**Building**](Building.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBuildingFiles"></a>
# **getBuildingFiles**
> getBuildingFiles(buildingId)

Get the files for a building.

Get all existing building files.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to get files for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBuildingFiles(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to get files for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBuildingTags"></a>
# **getBuildingTags**
> getBuildingTags(buildingId)

Get the tags for a building.

Get all existing building tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBuildingTags(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateBuildingById"></a>
# **getDuplicateBuildingById**
> Building getDuplicateBuildingById(buildingId)

Get a duplicated a building by id

Returns a duplicated building identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var buildingId = 56; // Number | Id of the building to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateBuildingById(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**| Id of the building to be duplicated. | 

### Return type

[**Building**](Building.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBuilding"></a>
# **updateBuilding**
> updateBuilding(body)

Update a building

Updates an existing building using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var body = new infoplus.Building(); // Building | Building to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBuilding(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Building**](Building.md)| Building to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBuildingCustomFields"></a>
# **updateBuildingCustomFields**
> updateBuildingCustomFields(body)

Update a building custom fields

Updates an existing building custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.BuildingApi();

var body = new infoplus.Building(); // Building | Building to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBuildingCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Building**](Building.md)| Building to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

