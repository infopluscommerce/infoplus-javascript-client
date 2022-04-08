# infoplus.FulfillmentPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**createDate** | **Date** |  | [optional] 
**modifyDate** | **Date** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**warehouseId** | **Number** |  | 
**priorityCode** | **Number** |  | [optional] 
**lastRunTime** | **Date** |  | [optional] 
**orderSmartFilterId** | **Number** |  | 
**locationSmartFilterId** | **Number** |  | [optional] 
**maxOrders** | **Number** |  | [optional] 
**batchSizeMax** | **Number** |  | [optional] 
**batchSizeMin** | **Number** |  | [optional] 
**maxCartons** | **Number** |  | [optional] 
**version** | **String** |  | [optional] 
**isMassDistribution** | **Boolean** |  | [optional] [default to false]
**createPickWork** | **Boolean** |  | [default to false]
**pickingRule** | **String** |  | [optional] 
**pickBatchGroupId** | **String** |  | [optional] 
**maxSKUsPerBatch** | **Number** |  | [optional] 
**layoutRule** | **String** |  | [optional] 
**pickSortRule** | **String** |  | [optional] 
**locationSort** | **String** |  | [optional] 
**createPickList** | **Boolean** |  | [optional] [default to false]
**pickListFormat** | **String** |  | [optional] 
**pickListLayout** | **String** |  | [optional] 
**pickListGroup** | **String** |  | [optional] 
**pickListSort** | **String** |  | [optional] 
**pickListLocationSort** | **String** |  | [optional] 
**createPickSummary** | **Boolean** |  | [optional] [default to false]
**pickSummaryFormat** | **String** |  | [optional] 
**pickSummaryLayout** | **String** |  | [optional] 
**pickSummarySort** | **String** |  | [optional] 
**pickScanSchemeId** | **Number** |  | 
**cartonizeOrders** | **Boolean** |  | [default to false]
**cartonizationScriptId** | **Number** |  | [optional] 
**autoShipCasebreakCartons** | **Boolean** |  | [optional] [default to false]
**autoShipOrders** | **Boolean** |  | [optional] [default to false]
**preGenerateParcelLabels** | **Boolean** |  | [optional] [default to false]
**labelSort** | **String** |  | [optional] 
**createPackingSlip** | **String** |  | 
**overridePackingSlipTemplateId** | **Number** |  | [optional] 
**createOrderAssemblyGuide** | **Boolean** |  | [optional] [default to false]
**orderAssemblyGuideLayout** | **String** |  | [optional] 
**createOrderInvoice** | **String** |  | 
**overrideOrderInvoiceTemplateId** | **Number** |  | [optional] 
**createCartonGS1128Labels** | **String** |  | [optional] 
**createLineItemEachGS1128Labels** | **String** |  | [optional] 
**sendToExternalShippingSystem** | **Boolean** |  | [default to false]
**externalShippingSystemId** | **Number** |  | [optional] 
**customFields** | **{String: Object}** |  | [optional] 


