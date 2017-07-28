# infoplus.FulfillmentPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** |  | [optional] 
**createDate** | **Date** |  | [optional] 
**modifyDate** | **Date** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**warehouseId** | **Integer** |  | 
**lastRunTime** | **Date** |  | [optional] 
**orderSmartFilterId** | **Integer** |  | 
**locationSmartFilterId** | **Integer** |  | [optional] 
**maximumNumberOfOrders** | **Integer** |  | [optional] 
**createPickWork** | **Boolean** |  | [default to false]
**pickingRule** | **String** |  | [optional] 
**layoutRule** | **String** |  | [optional] 
**pickSortRule** | **String** |  | [optional] 
**createPickList** | **Boolean** |  | [optional] [default to false]
**pickListFormat** | **String** |  | [optional] 
**pickListLayout** | **String** |  | [optional] 
**pickListGroup** | **String** |  | [optional] 
**pickListSort** | **String** |  | [optional] 
**createPickSummary** | **Boolean** |  | [optional] [default to false]
**pickSummaryFormat** | **String** |  | [optional] 
**pickSummaryLayout** | **String** |  | [optional] 
**pickSummarySort** | **String** |  | [optional] 
**pickScanSchemeId** | **Integer** |  | 
**cartonizeOrders** | **Boolean** |  | [default to false]
**autoShipCasebreakCartons** | **Boolean** |  | [optional] [default to false]
**preGenerateParcelLabels** | **Boolean** |  | [optional] [default to false]
**createPackingSlip** | **String** |  | 
**overridePackingSlipTemplateId** | **Integer** |  | [optional] 
**createOrderAssemblyGuide** | **Boolean** |  | [optional] [default to false]
**createOrderInvoice** | **String** |  | 
**overrideOrderInvoiceTemplateId** | **Integer** |  | [optional] 
**sendToExternalShippingSystem** | **Boolean** |  | [default to false]
**externalShippingSystemId** | **Integer** |  | [optional] 
**customFields** | **{String: Object}** |  | [optional] 


