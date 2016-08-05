# infoplus.ScheduledPlanLogApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScheduledPlanLogByFilter**](ScheduledPlanLogApi.md#getScheduledPlanLogByFilter) | **GET** /beta/scheduledPlanLog/search | Search scheduledPlanLogs by filter
[**getScheduledPlanLogById**](ScheduledPlanLogApi.md#getScheduledPlanLogById) | **GET** /beta/scheduledPlanLog/{scheduledPlanLogId} | Get a scheduledPlanLog by id


<a name="getScheduledPlanLogByFilter"></a>
# **getScheduledPlanLogByFilter**
> [ScheduledPlanLog] getScheduledPlanLogByFilter(opts)

Search scheduledPlanLogs by filter

Returns the list of scheduledPlanLogs that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ScheduledPlanLogApi()

var opts = { 
  'filter': "filter_example", // {String} Query string, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56, // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // {String} Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getScheduledPlanLogByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ScheduledPlanLog]**](ScheduledPlanLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScheduledPlanLogById"></a>
# **getScheduledPlanLogById**
> ScheduledPlanLog getScheduledPlanLogById(scheduledPlanLogId)

Get a scheduledPlanLog by id

Returns the scheduledPlanLog identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.ScheduledPlanLogApi()

var scheduledPlanLogId = 56; // {Integer} Id of the scheduledPlanLog to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getScheduledPlanLogById(scheduledPlanLogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduledPlanLogId** | **Integer**| Id of the scheduledPlanLog to be returned. | 

### Return type

[**ScheduledPlanLog**](ScheduledPlanLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

