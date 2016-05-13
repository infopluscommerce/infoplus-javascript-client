# infoplus-javascript-client
Infoplus is a cloud platform to manage your inventory, orders, warehouse, and shipments.

The Infoplus API exposes the full breadth and depth of the Infoplus platform to all clients.
With the Infoplus API, you can integrate Infoplus functionality into other platforms 
(e.g. your ERP, shopping cart, accounting system, etc.), enabling you to do, in your own platform, 
anything you can do in Infoplus. 

This repository is a native JavaScript client for full access to the Infoplus API.

## Infoplus API Resources
The Resources listed below will provide all the information you need to integrate with the Infoplus API. 

### Developer's Home Page
https://www.infopluscommerce.com/developers/
* This site gives you an overview of the Infoplus API. 
* Get a general understanding of the API and quick steps on getting started. 

### Infoplus API Reference Site
http://developers.infopluscommerce.com/
* The Infoplus API is a modern JSON + REST API, and the API Reference Site is the complete documentation of all endpoints, resources, and fields available in the API. 
* Whether you're using the API directly over HTTPS, or if you're using a pre-built Client Library like this one, the API Reference Site gives you the specific details you need for each API call available, along with live demo capabilities.
* The API Reference Site also lets you request access to a free Demo Account to test out the API. 

### Have Questions?
* Read an [Overview of the Infoplus API](https://support.infopluscommerce.com/support/solutions/articles/11000010373)
* Get in touch with the [Infoplus Support Team](https://support.infopluscommerce.com/support/tickets/new)
* Visit the [Infoplus API Forum](https://support.infopluscommerce.com/support/discussions/forums/11000000138)

# JavaScript Client Details

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install infoplus-javascript-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/infopluscommerce/infoplus-javascript-client
then install it via:

```shell
npm install infopluscommerce/infoplus-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var infoplus = require('infoplus-javascript-client');

var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"


var api = new infoplus.AisleApi()

var body = new infoplus.Aisle(); // {Aisle} Aisle to be inserted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addAisle(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://${YOUR_DOMAIN}/infoplus-wms/api

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*infoplus.AisleApi* | [**addAisle**](docs/AisleApi.md#addAisle) | **POST** /v1.0/aisle | Create an aisle
*infoplus.AisleApi* | [**deleteAisle**](docs/AisleApi.md#deleteAisle) | **DELETE** /v1.0/aisle/{aisleId} | Delete an aisle
*infoplus.AisleApi* | [**getAisleByFilter**](docs/AisleApi.md#getAisleByFilter) | **GET** /v1.0/aisle/search | Search aisles by filter
*infoplus.AisleApi* | [**getAisleById**](docs/AisleApi.md#getAisleById) | **GET** /v1.0/aisle/{aisleId} | Get an aisle by id
*infoplus.AisleApi* | [**updateAisle**](docs/AisleApi.md#updateAisle) | **PUT** /v1.0/aisle | Update an aisle
*infoplus.AlertApi* | [**getAlertByFilter**](docs/AlertApi.md#getAlertByFilter) | **GET** /v1.0/alert/search | Search alerts by filter
*infoplus.AlertApi* | [**getAlertById**](docs/AlertApi.md#getAlertById) | **GET** /v1.0/alert/{alertId} | Get an alert by id
*infoplus.AsnApi* | [**addAsn**](docs/AsnApi.md#addAsn) | **POST** /v1.0/asn | Create an asn
*infoplus.AsnApi* | [**deleteAsn**](docs/AsnApi.md#deleteAsn) | **DELETE** /v1.0/asn/{asnId} | Delete an asn
*infoplus.AsnApi* | [**getAsnByFilter**](docs/AsnApi.md#getAsnByFilter) | **GET** /v1.0/asn/search | Search asns by filter
*infoplus.AsnApi* | [**getAsnById**](docs/AsnApi.md#getAsnById) | **GET** /v1.0/asn/{asnId} | Get an asn by id
*infoplus.AsnApi* | [**updateAsn**](docs/AsnApi.md#updateAsn) | **PUT** /v1.0/asn | Update an asn
*infoplus.BillOfLadingApi* | [**addBillOfLading**](docs/BillOfLadingApi.md#addBillOfLading) | **POST** /v1.0/billOfLading | Create a billOfLading
*infoplus.BillOfLadingApi* | [**deleteBillOfLading**](docs/BillOfLadingApi.md#deleteBillOfLading) | **DELETE** /v1.0/billOfLading/{billOfLadingId} | Delete a billOfLading
*infoplus.BillOfLadingApi* | [**getBillOfLadingByFilter**](docs/BillOfLadingApi.md#getBillOfLadingByFilter) | **GET** /v1.0/billOfLading/search | Search billOfLadings by filter
*infoplus.BillOfLadingApi* | [**getBillOfLadingById**](docs/BillOfLadingApi.md#getBillOfLadingById) | **GET** /v1.0/billOfLading/{billOfLadingId} | Get a billOfLading by id
*infoplus.BillOfLadingApi* | [**updateBillOfLading**](docs/BillOfLadingApi.md#updateBillOfLading) | **PUT** /v1.0/billOfLading | Update a billOfLading
*infoplus.BillingCodeApi* | [**addBillingCode**](docs/BillingCodeApi.md#addBillingCode) | **POST** /v1.0/billingCode | Create a billingCode
*infoplus.BillingCodeApi* | [**deleteBillingCode**](docs/BillingCodeApi.md#deleteBillingCode) | **DELETE** /v1.0/billingCode/{billingCodeId} | Delete a billingCode
*infoplus.BillingCodeApi* | [**getBillingCodeByFilter**](docs/BillingCodeApi.md#getBillingCodeByFilter) | **GET** /v1.0/billingCode/search | Search billingCodes by filter
*infoplus.BillingCodeApi* | [**getBillingCodeById**](docs/BillingCodeApi.md#getBillingCodeById) | **GET** /v1.0/billingCode/{billingCodeId} | Get a billingCode by id
*infoplus.BillingCodeApi* | [**updateBillingCode**](docs/BillingCodeApi.md#updateBillingCode) | **PUT** /v1.0/billingCode | Update a billingCode
*infoplus.BillingCodeTypeApi* | [**addBillingCodeType**](docs/BillingCodeTypeApi.md#addBillingCodeType) | **POST** /v1.0/billingCodeType | Create a billingCodeType
*infoplus.BillingCodeTypeApi* | [**deleteBillingCodeType**](docs/BillingCodeTypeApi.md#deleteBillingCodeType) | **DELETE** /v1.0/billingCodeType/{billingCodeTypeId} | Delete a billingCodeType
*infoplus.BillingCodeTypeApi* | [**getBillingCodeTypeByFilter**](docs/BillingCodeTypeApi.md#getBillingCodeTypeByFilter) | **GET** /v1.0/billingCodeType/search | Search billingCodeTypes by filter
*infoplus.BillingCodeTypeApi* | [**getBillingCodeTypeById**](docs/BillingCodeTypeApi.md#getBillingCodeTypeById) | **GET** /v1.0/billingCodeType/{billingCodeTypeId} | Get a billingCodeType by id
*infoplus.BillingCodeTypeApi* | [**updateBillingCodeType**](docs/BillingCodeTypeApi.md#updateBillingCodeType) | **PUT** /v1.0/billingCodeType | Update a billingCodeType
*infoplus.BuildingApi* | [**addBuilding**](docs/BuildingApi.md#addBuilding) | **POST** /v1.0/building | Create a building
*infoplus.BuildingApi* | [**deleteBuilding**](docs/BuildingApi.md#deleteBuilding) | **DELETE** /v1.0/building/{buildingId} | Delete a building
*infoplus.BuildingApi* | [**getBuildingByFilter**](docs/BuildingApi.md#getBuildingByFilter) | **GET** /v1.0/building/search | Search buildings by filter
*infoplus.BuildingApi* | [**getBuildingById**](docs/BuildingApi.md#getBuildingById) | **GET** /v1.0/building/{buildingId} | Get a building by id
*infoplus.BuildingApi* | [**updateBuilding**](docs/BuildingApi.md#updateBuilding) | **PUT** /v1.0/building | Update a building
*infoplus.BusinessTransactionApi* | [**getBusinessTransactionByFilter**](docs/BusinessTransactionApi.md#getBusinessTransactionByFilter) | **GET** /v1.0/businessTransaction/search | Search businessTransactions by filter
*infoplus.BusinessTransactionApi* | [**getBusinessTransactionById**](docs/BusinessTransactionApi.md#getBusinessTransactionById) | **GET** /v1.0/businessTransaction/{businessTransactionId} | Get a businessTransaction by id
*infoplus.CarrierApi* | [**getCarrierById**](docs/CarrierApi.md#getCarrierById) | **GET** /v1.0/carrier/{carrierId} | Get a carrier by id
*infoplus.CarrierApi* | [**getCarrierBySearchText**](docs/CarrierApi.md#getCarrierBySearchText) | **GET** /v1.0/carrier/search | Search carriers
*infoplus.CarrierServiceApi* | [**getCarrierServiceById**](docs/CarrierServiceApi.md#getCarrierServiceById) | **GET** /v1.0/carrierService/{carrierServiceId} | Get a carrierService by id
*infoplus.CarrierServiceApi* | [**getCarrierServiceBySearchText**](docs/CarrierServiceApi.md#getCarrierServiceBySearchText) | **GET** /v1.0/carrierService/search | Search carrierServices
*infoplus.CartonApi* | [**addCarton**](docs/CartonApi.md#addCarton) | **POST** /v1.0/carton | Create a carton
*infoplus.CartonApi* | [**deleteCarton**](docs/CartonApi.md#deleteCarton) | **DELETE** /v1.0/carton/{cartonId} | Delete a carton
*infoplus.CartonApi* | [**getCartonByFilter**](docs/CartonApi.md#getCartonByFilter) | **GET** /v1.0/carton/search | Search cartons by filter
*infoplus.CartonApi* | [**getCartonById**](docs/CartonApi.md#getCartonById) | **GET** /v1.0/carton/{cartonId} | Get a carton by id
*infoplus.CartonApi* | [**updateCarton**](docs/CartonApi.md#updateCarton) | **PUT** /v1.0/carton | Update a carton
*infoplus.CartonContentApi* | [**addCartonContent**](docs/CartonContentApi.md#addCartonContent) | **POST** /v1.0/cartonContent | Create a cartonContent
*infoplus.CartonContentApi* | [**deleteCartonContent**](docs/CartonContentApi.md#deleteCartonContent) | **DELETE** /v1.0/cartonContent/{cartonContentId} | Delete a cartonContent
*infoplus.CartonContentApi* | [**getCartonContentByFilter**](docs/CartonContentApi.md#getCartonContentByFilter) | **GET** /v1.0/cartonContent/search | Search cartonContents by filter
*infoplus.CartonContentApi* | [**getCartonContentById**](docs/CartonContentApi.md#getCartonContentById) | **GET** /v1.0/cartonContent/{cartonContentId} | Get a cartonContent by id
*infoplus.CartonContentApi* | [**updateCartonContent**](docs/CartonContentApi.md#updateCartonContent) | **PUT** /v1.0/cartonContent | Update a cartonContent
*infoplus.CartonTypeApi* | [**addCartonType**](docs/CartonTypeApi.md#addCartonType) | **POST** /v1.0/cartonType | Create a cartonType
*infoplus.CartonTypeApi* | [**deleteCartonType**](docs/CartonTypeApi.md#deleteCartonType) | **DELETE** /v1.0/cartonType/{cartonTypeId} | Delete a cartonType
*infoplus.CartonTypeApi* | [**getCartonTypeByFilter**](docs/CartonTypeApi.md#getCartonTypeByFilter) | **GET** /v1.0/cartonType/search | Search cartonTypes by filter
*infoplus.CartonTypeApi* | [**getCartonTypeById**](docs/CartonTypeApi.md#getCartonTypeById) | **GET** /v1.0/cartonType/{cartonTypeId} | Get a cartonType by id
*infoplus.CartonTypeApi* | [**updateCartonType**](docs/CartonTypeApi.md#updateCartonType) | **PUT** /v1.0/cartonType | Update a cartonType
*infoplus.CustomerApi* | [**addCustomer**](docs/CustomerApi.md#addCustomer) | **POST** /v1.0/customer | Create a customer
*infoplus.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | **DELETE** /v1.0/customer/{customerId} | Delete a customer
*infoplus.CustomerApi* | [**getByCustomerNo**](docs/CustomerApi.md#getByCustomerNo) | **GET** /v1.0/customer/getByCustomerNo | Get a customer by Customer No
*infoplus.CustomerApi* | [**getCustomerByFilter**](docs/CustomerApi.md#getCustomerByFilter) | **GET** /v1.0/customer/search | Search customers by filter
*infoplus.CustomerApi* | [**getCustomerById**](docs/CustomerApi.md#getCustomerById) | **GET** /v1.0/customer/{customerId} | Get a customer by id
*infoplus.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | **PUT** /v1.0/customer | Update a customer
*infoplus.EmailTemplateApi* | [**addEmailTemplate**](docs/EmailTemplateApi.md#addEmailTemplate) | **POST** /v1.0/emailTemplate | Create an emailTemplate
*infoplus.EmailTemplateApi* | [**deleteEmailTemplate**](docs/EmailTemplateApi.md#deleteEmailTemplate) | **DELETE** /v1.0/emailTemplate/{emailTemplateId} | Delete an emailTemplate
*infoplus.EmailTemplateApi* | [**getEmailTemplateByFilter**](docs/EmailTemplateApi.md#getEmailTemplateByFilter) | **GET** /v1.0/emailTemplate/search | Search emailTemplates by filter
*infoplus.EmailTemplateApi* | [**getEmailTemplateById**](docs/EmailTemplateApi.md#getEmailTemplateById) | **GET** /v1.0/emailTemplate/{emailTemplateId} | Get an emailTemplate by id
*infoplus.EmailTemplateApi* | [**updateEmailTemplate**](docs/EmailTemplateApi.md#updateEmailTemplate) | **PUT** /v1.0/emailTemplate | Update an emailTemplate
*infoplus.ExternalShipmentApi* | [**addExternalShipment**](docs/ExternalShipmentApi.md#addExternalShipment) | **POST** /v1.0/externalShipment | Create an externalShipment
*infoplus.ExternalShipmentApi* | [**deleteExternalShipment**](docs/ExternalShipmentApi.md#deleteExternalShipment) | **DELETE** /v1.0/externalShipment/{externalShipmentId} | Delete an externalShipment
*infoplus.ExternalShipmentApi* | [**getExternalShipmentByFilter**](docs/ExternalShipmentApi.md#getExternalShipmentByFilter) | **GET** /v1.0/externalShipment/search | Search externalShipments by filter
*infoplus.ExternalShipmentApi* | [**getExternalShipmentById**](docs/ExternalShipmentApi.md#getExternalShipmentById) | **GET** /v1.0/externalShipment/{externalShipmentId} | Get an externalShipment by id
*infoplus.ExternalShipmentApi* | [**updateExternalShipment**](docs/ExternalShipmentApi.md#updateExternalShipment) | **PUT** /v1.0/externalShipment | Update an externalShipment
*infoplus.FulfillmentPlanApi* | [**addFulfillmentPlan**](docs/FulfillmentPlanApi.md#addFulfillmentPlan) | **POST** /v1.0/fulfillmentPlan | Create a fulfillmentPlan
*infoplus.FulfillmentPlanApi* | [**deleteFulfillmentPlan**](docs/FulfillmentPlanApi.md#deleteFulfillmentPlan) | **DELETE** /v1.0/fulfillmentPlan/{fulfillmentPlanId} | Delete a fulfillmentPlan
*infoplus.FulfillmentPlanApi* | [**getFulfillmentPlanByFilter**](docs/FulfillmentPlanApi.md#getFulfillmentPlanByFilter) | **GET** /v1.0/fulfillmentPlan/search | Search fulfillmentPlans by filter
*infoplus.FulfillmentPlanApi* | [**getFulfillmentPlanById**](docs/FulfillmentPlanApi.md#getFulfillmentPlanById) | **GET** /v1.0/fulfillmentPlan/{fulfillmentPlanId} | Get a fulfillmentPlan by id
*infoplus.FulfillmentPlanApi* | [**updateFulfillmentPlan**](docs/FulfillmentPlanApi.md#updateFulfillmentPlan) | **PUT** /v1.0/fulfillmentPlan | Update a fulfillmentPlan
*infoplus.FulfillmentProcessApi* | [**getFulfillmentProcessByFilter**](docs/FulfillmentProcessApi.md#getFulfillmentProcessByFilter) | **GET** /v1.0/fulfillmentProcess/search | Search fulfillmentProcesses by filter
*infoplus.FulfillmentProcessApi* | [**getFulfillmentProcessById**](docs/FulfillmentProcessApi.md#getFulfillmentProcessById) | **GET** /v1.0/fulfillmentProcess/{fulfillmentProcessId} | Get a fulfillmentProcess by id
*infoplus.IntegrationPartnerApi* | [**getIntegrationPartnerById**](docs/IntegrationPartnerApi.md#getIntegrationPartnerById) | **GET** /v1.0/integrationPartner/{integrationPartnerId} | Get an integrationPartner by id
*infoplus.IntegrationPartnerApi* | [**getIntegrationPartnerBySearchText**](docs/IntegrationPartnerApi.md#getIntegrationPartnerBySearchText) | **GET** /v1.0/integrationPartner/search | Search integrationPartners
*infoplus.InventoryAdjustmentApi* | [**getInventoryAdjustmentByFilter**](docs/InventoryAdjustmentApi.md#getInventoryAdjustmentByFilter) | **GET** /v1.0/inventoryAdjustment/search | Search inventoryAdjustments by filter
*infoplus.InventoryAdjustmentApi* | [**getInventoryAdjustmentById**](docs/InventoryAdjustmentApi.md#getInventoryAdjustmentById) | **GET** /v1.0/inventoryAdjustment/{inventoryAdjustmentId} | Get an inventoryAdjustment by id
*infoplus.InventoryDetailApi* | [**getInventoryDetailByFilter**](docs/InventoryDetailApi.md#getInventoryDetailByFilter) | **GET** /v1.0/inventoryDetail/search | Search inventoryDetails by filter
*infoplus.InventoryDetailApi* | [**getInventoryDetailById**](docs/InventoryDetailApi.md#getInventoryDetailById) | **GET** /v1.0/inventoryDetail/{inventoryDetailId} | Get an inventoryDetail by id
*infoplus.ItemApi* | [**addItem**](docs/ItemApi.md#addItem) | **POST** /v1.0/item | Create an item
*infoplus.ItemApi* | [**deleteItem**](docs/ItemApi.md#deleteItem) | **DELETE** /v1.0/item/{itemId} | Delete an item
*infoplus.ItemApi* | [**getBySKU**](docs/ItemApi.md#getBySKU) | **GET** /v1.0/item/getBySKU | Get an item by SKU
*infoplus.ItemApi* | [**getItemByFilter**](docs/ItemApi.md#getItemByFilter) | **GET** /v1.0/item/search | Search items by filter
*infoplus.ItemApi* | [**getItemById**](docs/ItemApi.md#getItemById) | **GET** /v1.0/item/{itemId} | Get an item by id
*infoplus.ItemApi* | [**updateItem**](docs/ItemApi.md#updateItem) | **PUT** /v1.0/item | Update an item
*infoplus.ItemAccountCodeApi* | [**getItemAccountCodeBySearchText**](docs/ItemAccountCodeApi.md#getItemAccountCodeBySearchText) | **GET** /v1.0/itemAccountCode/search | Search itemAccountCodes
*infoplus.ItemAccountCodeApi* | [**getTranslateAccountCodeById**](docs/ItemAccountCodeApi.md#getTranslateAccountCodeById) | **GET** /v1.0/itemAccountCode/{itemAccountCodeId} | Get an itemAccountCode by id
*infoplus.ItemBuyerApi* | [**getItemBuyerBySearchText**](docs/ItemBuyerApi.md#getItemBuyerBySearchText) | **GET** /v1.0/itemBuyer/search | Search itemBuyers
*infoplus.ItemBuyerApi* | [**getTranslateBuyerById**](docs/ItemBuyerApi.md#getTranslateBuyerById) | **GET** /v1.0/itemBuyer/{itemBuyerId} | Get an itemBuyer by id
*infoplus.ItemLegacyLowStockContactApi* | [**getItemLegacyLowStockContactBySearchText**](docs/ItemLegacyLowStockContactApi.md#getItemLegacyLowStockContactBySearchText) | **GET** /v1.0/itemLegacyLowStockContact/search | Search itemLegacyLowStockContacts
*infoplus.ItemLegacyLowStockContactApi* | [**getTranslateLowStockContactById**](docs/ItemLegacyLowStockContactApi.md#getTranslateLowStockContactById) | **GET** /v1.0/itemLegacyLowStockContact/{itemLegacyLowStockContactId} | Get an itemLegacyLowStockContact by id
*infoplus.ItemLowStockCodeApi* | [**getItemLowStockCodeBySearchText**](docs/ItemLowStockCodeApi.md#getItemLowStockCodeBySearchText) | **GET** /v1.0/itemLowStockCode/search | Search itemLowStockCodes
*infoplus.ItemLowStockCodeApi* | [**getTranslateLowStockCodeById**](docs/ItemLowStockCodeApi.md#getTranslateLowStockCodeById) | **GET** /v1.0/itemLowStockCode/{itemLowStockCodeId} | Get an itemLowStockCode by id
*infoplus.ItemMajorGroupApi* | [**getItemMajorGroupBySearchText**](docs/ItemMajorGroupApi.md#getItemMajorGroupBySearchText) | **GET** /v1.0/itemMajorGroup/search | Search itemMajorGroups
*infoplus.ItemMajorGroupApi* | [**getTranslateMajorGroupById**](docs/ItemMajorGroupApi.md#getTranslateMajorGroupById) | **GET** /v1.0/itemMajorGroup/{itemMajorGroupId} | Get an itemMajorGroup by id
*infoplus.ItemProductCodeApi* | [**getItemProductCodeBySearchText**](docs/ItemProductCodeApi.md#getItemProductCodeBySearchText) | **GET** /v1.0/itemProductCode/search | Search itemProductCodes
*infoplus.ItemProductCodeApi* | [**getTranslateProductCodeById**](docs/ItemProductCodeApi.md#getTranslateProductCodeById) | **GET** /v1.0/itemProductCode/{itemProductCodeId} | Get an itemProductCode by id
*infoplus.ItemReceiptApi* | [**getItemReceiptByFilter**](docs/ItemReceiptApi.md#getItemReceiptByFilter) | **GET** /v1.0/itemReceipt/search | Search itemReceipts by filter
*infoplus.ItemReceiptApi* | [**getItemReceiptById**](docs/ItemReceiptApi.md#getItemReceiptById) | **GET** /v1.0/itemReceipt/{itemReceiptId} | Get an itemReceipt by id
*infoplus.ItemSubGroupApi* | [**getItemSubGroupBySearchText**](docs/ItemSubGroupApi.md#getItemSubGroupBySearchText) | **GET** /v1.0/itemSubGroup/search | Search itemSubGroups
*infoplus.ItemSubGroupApi* | [**getTranslateSubGroupById**](docs/ItemSubGroupApi.md#getTranslateSubGroupById) | **GET** /v1.0/itemSubGroup/{itemSubGroupId} | Get an itemSubGroup by id
*infoplus.ItemSummaryCodeApi* | [**getItemSummaryCodeBySearchText**](docs/ItemSummaryCodeApi.md#getItemSummaryCodeBySearchText) | **GET** /v1.0/itemSummaryCode/search | Search itemSummaryCodes
*infoplus.ItemSummaryCodeApi* | [**getTranslateSummaryCodeById**](docs/ItemSummaryCodeApi.md#getTranslateSummaryCodeById) | **GET** /v1.0/itemSummaryCode/{itemSummaryCodeId} | Get an itemSummaryCode by id
*infoplus.JobTimeApi* | [**addJobTime**](docs/JobTimeApi.md#addJobTime) | **POST** /v1.0/jobTime | Create a jobTime
*infoplus.JobTimeApi* | [**deleteJobTime**](docs/JobTimeApi.md#deleteJobTime) | **DELETE** /v1.0/jobTime/{jobTimeId} | Delete a jobTime
*infoplus.JobTimeApi* | [**getJobTimeByFilter**](docs/JobTimeApi.md#getJobTimeByFilter) | **GET** /v1.0/jobTime/search | Search jobTimes by filter
*infoplus.JobTimeApi* | [**getJobTimeById**](docs/JobTimeApi.md#getJobTimeById) | **GET** /v1.0/jobTime/{jobTimeId} | Get a jobTime by id
*infoplus.JobTimeApi* | [**updateJobTime**](docs/JobTimeApi.md#updateJobTime) | **PUT** /v1.0/jobTime | Update a jobTime
*infoplus.JobTypeApi* | [**addJobType**](docs/JobTypeApi.md#addJobType) | **POST** /v1.0/jobType | Create a jobType
*infoplus.JobTypeApi* | [**deleteJobType**](docs/JobTypeApi.md#deleteJobType) | **DELETE** /v1.0/jobType/{jobTypeId} | Delete a jobType
*infoplus.JobTypeApi* | [**getJobTypeByFilter**](docs/JobTypeApi.md#getJobTypeByFilter) | **GET** /v1.0/jobType/search | Search jobTypes by filter
*infoplus.JobTypeApi* | [**getJobTypeById**](docs/JobTypeApi.md#getJobTypeById) | **GET** /v1.0/jobType/{jobTypeId} | Get a jobType by id
*infoplus.JobTypeApi* | [**updateJobType**](docs/JobTypeApi.md#updateJobType) | **PUT** /v1.0/jobType | Update a jobType
*infoplus.LineOfBusinessApi* | [**getLineOfBusinessById**](docs/LineOfBusinessApi.md#getLineOfBusinessById) | **GET** /v1.0/lineOfBusiness/{lineOfBusinessId} | Get a lineOfBusiness by id
*infoplus.LineOfBusinessApi* | [**getLineOfBusinessBySearchText**](docs/LineOfBusinessApi.md#getLineOfBusinessBySearchText) | **GET** /v1.0/lineOfBusiness/search | Search lineOfBusinesses
*infoplus.LocationApi* | [**addLocation**](docs/LocationApi.md#addLocation) | **POST** /v1.0/location | Create a location
*infoplus.LocationApi* | [**deleteLocation**](docs/LocationApi.md#deleteLocation) | **DELETE** /v1.0/location/{locationId} | Delete a location
*infoplus.LocationApi* | [**getLocationByFilter**](docs/LocationApi.md#getLocationByFilter) | **GET** /v1.0/location/search | Search locations by filter
*infoplus.LocationApi* | [**getLocationById**](docs/LocationApi.md#getLocationById) | **GET** /v1.0/location/{locationId} | Get a location by id
*infoplus.LocationApi* | [**updateLocation**](docs/LocationApi.md#updateLocation) | **PUT** /v1.0/location | Update a location
*infoplus.LocationAddressSchemeApi* | [**addLocationAddressScheme**](docs/LocationAddressSchemeApi.md#addLocationAddressScheme) | **POST** /v1.0/locationAddressScheme | Create a locationAddressScheme
*infoplus.LocationAddressSchemeApi* | [**deleteLocationAddressScheme**](docs/LocationAddressSchemeApi.md#deleteLocationAddressScheme) | **DELETE** /v1.0/locationAddressScheme/{locationAddressSchemeId} | Delete a locationAddressScheme
*infoplus.LocationAddressSchemeApi* | [**getLocationAddressSchemeByFilter**](docs/LocationAddressSchemeApi.md#getLocationAddressSchemeByFilter) | **GET** /v1.0/locationAddressScheme/search | Search locationAddressSchemes by filter
*infoplus.LocationAddressSchemeApi* | [**getLocationAddressSchemeById**](docs/LocationAddressSchemeApi.md#getLocationAddressSchemeById) | **GET** /v1.0/locationAddressScheme/{locationAddressSchemeId} | Get a locationAddressScheme by id
*infoplus.LocationAddressSchemeApi* | [**updateLocationAddressScheme**](docs/LocationAddressSchemeApi.md#updateLocationAddressScheme) | **PUT** /v1.0/locationAddressScheme | Update a locationAddressScheme
*infoplus.LocationBillingTypeApi* | [**addLocationBillingType**](docs/LocationBillingTypeApi.md#addLocationBillingType) | **POST** /v1.0/locationBillingType | Create a locationBillingType
*infoplus.LocationBillingTypeApi* | [**deleteLocationBillingType**](docs/LocationBillingTypeApi.md#deleteLocationBillingType) | **DELETE** /v1.0/locationBillingType/{locationBillingTypeId} | Delete a locationBillingType
*infoplus.LocationBillingTypeApi* | [**getLocationBillingTypeByFilter**](docs/LocationBillingTypeApi.md#getLocationBillingTypeByFilter) | **GET** /v1.0/locationBillingType/search | Search locationBillingTypes by filter
*infoplus.LocationBillingTypeApi* | [**getLocationBillingTypeById**](docs/LocationBillingTypeApi.md#getLocationBillingTypeById) | **GET** /v1.0/locationBillingType/{locationBillingTypeId} | Get a locationBillingType by id
*infoplus.LocationBillingTypeApi* | [**updateLocationBillingType**](docs/LocationBillingTypeApi.md#updateLocationBillingType) | **PUT** /v1.0/locationBillingType | Update a locationBillingType
*infoplus.LocationFootprintApi* | [**addLocationFootprint**](docs/LocationFootprintApi.md#addLocationFootprint) | **POST** /v1.0/locationFootprint | Create a locationFootprint
*infoplus.LocationFootprintApi* | [**deleteLocationFootprint**](docs/LocationFootprintApi.md#deleteLocationFootprint) | **DELETE** /v1.0/locationFootprint/{locationFootprintId} | Delete a locationFootprint
*infoplus.LocationFootprintApi* | [**getLocationFootprintByFilter**](docs/LocationFootprintApi.md#getLocationFootprintByFilter) | **GET** /v1.0/locationFootprint/search | Search locationFootprints by filter
*infoplus.LocationFootprintApi* | [**getLocationFootprintById**](docs/LocationFootprintApi.md#getLocationFootprintById) | **GET** /v1.0/locationFootprint/{locationFootprintId} | Get a locationFootprint by id
*infoplus.LocationFootprintApi* | [**updateLocationFootprint**](docs/LocationFootprintApi.md#updateLocationFootprint) | **PUT** /v1.0/locationFootprint | Update a locationFootprint
*infoplus.LoggedTimeApi* | [**getLoggedTimeByFilter**](docs/LoggedTimeApi.md#getLoggedTimeByFilter) | **GET** /v1.0/loggedTime/search | Search loggedTimes by filter
*infoplus.LoggedTimeApi* | [**getLoggedTimeById**](docs/LoggedTimeApi.md#getLoggedTimeById) | **GET** /v1.0/loggedTime/{loggedTimeId} | Get a loggedTime by id
*infoplus.LoggedTimeTypeApi* | [**getLoggedTimeTypeById**](docs/LoggedTimeTypeApi.md#getLoggedTimeTypeById) | **GET** /v1.0/loggedTimeType/{loggedTimeTypeId} | Get a loggedTimeType by id
*infoplus.LoggedTimeTypeApi* | [**getLoggedTimeTypeBySearchText**](docs/LoggedTimeTypeApi.md#getLoggedTimeTypeBySearchText) | **GET** /v1.0/loggedTimeType/search | Search loggedTimeTypes
*infoplus.LowStockApi* | [**getLowStockByFilter**](docs/LowStockApi.md#getLowStockByFilter) | **GET** /v1.0/lowStock/search | Search lowStocks by filter
*infoplus.LowStockApi* | [**getLowStockById**](docs/LowStockApi.md#getLowStockById) | **GET** /v1.0/lowStock/{lowStockId} | Get a lowStock by id
*infoplus.OrderApi* | [**addOrder**](docs/OrderApi.md#addOrder) | **POST** /v1.0/order | Create an order
*infoplus.OrderApi* | [**deleteOrder**](docs/OrderApi.md#deleteOrder) | **DELETE** /v1.0/order/{orderId} | Delete an order
*infoplus.OrderApi* | [**getOrderByFilter**](docs/OrderApi.md#getOrderByFilter) | **GET** /v1.0/order/search | Search orders by filter
*infoplus.OrderApi* | [**getOrderById**](docs/OrderApi.md#getOrderById) | **GET** /v1.0/order/{orderId} | Get an order by id
*infoplus.OrderApi* | [**updateOrder**](docs/OrderApi.md#updateOrder) | **PUT** /v1.0/order | Update an order
*infoplus.OrderLineApi* | [**getOrderLineByFilter**](docs/OrderLineApi.md#getOrderLineByFilter) | **GET** /v1.0/orderLine/search | Search orderLines by filter
*infoplus.OrderLineApi* | [**getOrderLineById**](docs/OrderLineApi.md#getOrderLineById) | **GET** /v1.0/orderLine/{orderLineId} | Get an orderLine by id
*infoplus.OrderLoadProgramApi* | [**getOrderLoadProgramBySearchText**](docs/OrderLoadProgramApi.md#getOrderLoadProgramBySearchText) | **GET** /v1.0/orderLoadProgram/search | Search orderLoadPrograms
*infoplus.OrderLoadProgramApi* | [**getReqLoadProgramById**](docs/OrderLoadProgramApi.md#getReqLoadProgramById) | **GET** /v1.0/orderLoadProgram/{orderLoadProgramId} | Get an orderLoadProgram by id
*infoplus.OrderSourceApi* | [**addOrderSource**](docs/OrderSourceApi.md#addOrderSource) | **POST** /v1.0/orderSource | Create an orderSource
*infoplus.OrderSourceApi* | [**deleteOrderSource**](docs/OrderSourceApi.md#deleteOrderSource) | **DELETE** /v1.0/orderSource/{orderSourceId} | Delete an orderSource
*infoplus.OrderSourceApi* | [**getOrderSourceByFilter**](docs/OrderSourceApi.md#getOrderSourceByFilter) | **GET** /v1.0/orderSource/search | Search orderSources by filter
*infoplus.OrderSourceApi* | [**getOrderSourceById**](docs/OrderSourceApi.md#getOrderSourceById) | **GET** /v1.0/orderSource/{orderSourceId} | Get an orderSource by id
*infoplus.OrderSourceApi* | [**updateOrderSource**](docs/OrderSourceApi.md#updateOrderSource) | **PUT** /v1.0/orderSource | Update an orderSource
*infoplus.OrderSourceReservationApi* | [**addOrderSourceReservation**](docs/OrderSourceReservationApi.md#addOrderSourceReservation) | **POST** /v1.0/orderSourceReservation | Create an orderSourceReservation
*infoplus.OrderSourceReservationApi* | [**deleteOrderSourceReservation**](docs/OrderSourceReservationApi.md#deleteOrderSourceReservation) | **DELETE** /v1.0/orderSourceReservation/{orderSourceReservationId} | Delete an orderSourceReservation
*infoplus.OrderSourceReservationApi* | [**getOrderSourceReservationByFilter**](docs/OrderSourceReservationApi.md#getOrderSourceReservationByFilter) | **GET** /v1.0/orderSourceReservation/search | Search orderSourceReservations by filter
*infoplus.OrderSourceReservationApi* | [**getOrderSourceReservationById**](docs/OrderSourceReservationApi.md#getOrderSourceReservationById) | **GET** /v1.0/orderSourceReservation/{orderSourceReservationId} | Get an orderSourceReservation by id
*infoplus.OrderSourceReservationApi* | [**updateOrderSourceReservation**](docs/OrderSourceReservationApi.md#updateOrderSourceReservation) | **PUT** /v1.0/orderSourceReservation | Update an orderSourceReservation
*infoplus.OverrideReturnAddressApi* | [**addOverrideReturnAddress**](docs/OverrideReturnAddressApi.md#addOverrideReturnAddress) | **POST** /v1.0/overrideReturnAddress | Create an overrideReturnAddress
*infoplus.OverrideReturnAddressApi* | [**deleteOverrideReturnAddress**](docs/OverrideReturnAddressApi.md#deleteOverrideReturnAddress) | **DELETE** /v1.0/overrideReturnAddress/{overrideReturnAddressId} | Delete an overrideReturnAddress
*infoplus.OverrideReturnAddressApi* | [**getOverrideReturnAddressByFilter**](docs/OverrideReturnAddressApi.md#getOverrideReturnAddressByFilter) | **GET** /v1.0/overrideReturnAddress/search | Search overrideReturnAddresses by filter
*infoplus.OverrideReturnAddressApi* | [**getOverrideReturnAddressById**](docs/OverrideReturnAddressApi.md#getOverrideReturnAddressById) | **GET** /v1.0/overrideReturnAddress/{overrideReturnAddressId} | Get an overrideReturnAddress by id
*infoplus.OverrideReturnAddressApi* | [**updateOverrideReturnAddress**](docs/OverrideReturnAddressApi.md#updateOverrideReturnAddress) | **PUT** /v1.0/overrideReturnAddress | Update an overrideReturnAddress
*infoplus.ParcelAccountApi* | [**getParcelAccountByFilter**](docs/ParcelAccountApi.md#getParcelAccountByFilter) | **GET** /v1.0/parcelAccount/search | Search parcelAccounts by filter
*infoplus.ParcelAccountApi* | [**getParcelAccountById**](docs/ParcelAccountApi.md#getParcelAccountById) | **GET** /v1.0/parcelAccount/{parcelAccountId} | Get a parcelAccount by id
*infoplus.ParcelShipmentApi* | [**getParcelShipmentByFilter**](docs/ParcelShipmentApi.md#getParcelShipmentByFilter) | **GET** /v1.0/parcelShipment/search | Search parcelShipments by filter
*infoplus.ParcelShipmentApi* | [**getParcelShipmentById**](docs/ParcelShipmentApi.md#getParcelShipmentById) | **GET** /v1.0/parcelShipment/{parcelShipmentId} | Get a parcelShipment by id
*infoplus.PickFaceAssignmentApi* | [**addPickFaceAssignment**](docs/PickFaceAssignmentApi.md#addPickFaceAssignment) | **POST** /v1.0/pickFaceAssignment | Create a pickFaceAssignment
*infoplus.PickFaceAssignmentApi* | [**deletePickFaceAssignment**](docs/PickFaceAssignmentApi.md#deletePickFaceAssignment) | **DELETE** /v1.0/pickFaceAssignment/{pickFaceAssignmentId} | Delete a pickFaceAssignment
*infoplus.PickFaceAssignmentApi* | [**getPickFaceAssignmentByFilter**](docs/PickFaceAssignmentApi.md#getPickFaceAssignmentByFilter) | **GET** /v1.0/pickFaceAssignment/search | Search pickFaceAssignments by filter
*infoplus.PickFaceAssignmentApi* | [**getPickFaceAssignmentById**](docs/PickFaceAssignmentApi.md#getPickFaceAssignmentById) | **GET** /v1.0/pickFaceAssignment/{pickFaceAssignmentId} | Get a pickFaceAssignment by id
*infoplus.PickFaceAssignmentApi* | [**updatePickFaceAssignment**](docs/PickFaceAssignmentApi.md#updatePickFaceAssignment) | **PUT** /v1.0/pickFaceAssignment | Update a pickFaceAssignment
*infoplus.ProductTypeApi* | [**getProductTypeById**](docs/ProductTypeApi.md#getProductTypeById) | **GET** /v1.0/productType/{productTypeId} | Get a productType by id
*infoplus.ProductTypeApi* | [**getProductTypeBySearchText**](docs/ProductTypeApi.md#getProductTypeBySearchText) | **GET** /v1.0/productType/search | Search productTypes
*infoplus.ProductionLotApi* | [**getProductionLotByFilter**](docs/ProductionLotApi.md#getProductionLotByFilter) | **GET** /v1.0/productionLot/search | Search productionLots by filter
*infoplus.ProductionLotApi* | [**getProductionLotById**](docs/ProductionLotApi.md#getProductionLotById) | **GET** /v1.0/productionLot/{productionLotId} | Get a productionLot by id
*infoplus.QuickAdjustmentApi* | [**addQuickAdjustment**](docs/QuickAdjustmentApi.md#addQuickAdjustment) | **POST** /v1.0/quickAdjustment | Create a quickAdjustment
*infoplus.QuickAdjustmentApi* | [**deleteQuickAdjustment**](docs/QuickAdjustmentApi.md#deleteQuickAdjustment) | **DELETE** /v1.0/quickAdjustment/{quickAdjustmentId} | Delete a quickAdjustment
*infoplus.QuickAdjustmentApi* | [**getQuickAdjustmentByFilter**](docs/QuickAdjustmentApi.md#getQuickAdjustmentByFilter) | **GET** /v1.0/quickAdjustment/search | Search quickAdjustments by filter
*infoplus.QuickAdjustmentApi* | [**getQuickAdjustmentById**](docs/QuickAdjustmentApi.md#getQuickAdjustmentById) | **GET** /v1.0/quickAdjustment/{quickAdjustmentId} | Get a quickAdjustment by id
*infoplus.QuickAdjustmentApi* | [**updateQuickAdjustment**](docs/QuickAdjustmentApi.md#updateQuickAdjustment) | **PUT** /v1.0/quickAdjustment | Update a quickAdjustment
*infoplus.QuickReceiptApi* | [**addQuickReceipt**](docs/QuickReceiptApi.md#addQuickReceipt) | **POST** /v1.0/quickReceipt | Create a quickReceipt
*infoplus.QuickReceiptApi* | [**deleteQuickReceipt**](docs/QuickReceiptApi.md#deleteQuickReceipt) | **DELETE** /v1.0/quickReceipt/{quickReceiptId} | Delete a quickReceipt
*infoplus.QuickReceiptApi* | [**getQuickReceiptByFilter**](docs/QuickReceiptApi.md#getQuickReceiptByFilter) | **GET** /v1.0/quickReceipt/search | Search quickReceipts by filter
*infoplus.QuickReceiptApi* | [**getQuickReceiptById**](docs/QuickReceiptApi.md#getQuickReceiptById) | **GET** /v1.0/quickReceipt/{quickReceiptId} | Get a quickReceipt by id
*infoplus.QuickReceiptApi* | [**updateQuickReceipt**](docs/QuickReceiptApi.md#updateQuickReceipt) | **PUT** /v1.0/quickReceipt | Update a quickReceipt
*infoplus.ReceivingProcessApi* | [**deleteReceivingProcess**](docs/ReceivingProcessApi.md#deleteReceivingProcess) | **DELETE** /v1.0/receivingProcess/{receivingProcessId} | Delete a receivingProcess
*infoplus.ReceivingProcessApi* | [**getReceivingProcessByFilter**](docs/ReceivingProcessApi.md#getReceivingProcessByFilter) | **GET** /v1.0/receivingProcess/search | Search receivingProcesses by filter
*infoplus.ReceivingProcessApi* | [**getReceivingProcessById**](docs/ReceivingProcessApi.md#getReceivingProcessById) | **GET** /v1.0/receivingProcess/{receivingProcessId} | Get a receivingProcess by id
*infoplus.ReceivingWorksheetApi* | [**addReceivingWorksheet**](docs/ReceivingWorksheetApi.md#addReceivingWorksheet) | **POST** /v1.0/receivingWorksheet | Create a receivingWorksheet
*infoplus.ReceivingWorksheetApi* | [**deleteReceivingWorksheet**](docs/ReceivingWorksheetApi.md#deleteReceivingWorksheet) | **DELETE** /v1.0/receivingWorksheet/{receivingWorksheetId} | Delete a receivingWorksheet
*infoplus.ReceivingWorksheetApi* | [**getReceivingWorksheetByFilter**](docs/ReceivingWorksheetApi.md#getReceivingWorksheetByFilter) | **GET** /v1.0/receivingWorksheet/search | Search receivingWorksheets by filter
*infoplus.ReceivingWorksheetApi* | [**getReceivingWorksheetById**](docs/ReceivingWorksheetApi.md#getReceivingWorksheetById) | **GET** /v1.0/receivingWorksheet/{receivingWorksheetId} | Get a receivingWorksheet by id
*infoplus.ReceivingWorksheetApi* | [**updateReceivingWorksheet**](docs/ReceivingWorksheetApi.md#updateReceivingWorksheet) | **PUT** /v1.0/receivingWorksheet | Update a receivingWorksheet
*infoplus.ReplenishmentApi* | [**getReplenishmentByFilter**](docs/ReplenishmentApi.md#getReplenishmentByFilter) | **GET** /v1.0/replenishment/search | Search replenishments by filter
*infoplus.ReplenishmentApi* | [**getReplenishmentById**](docs/ReplenishmentApi.md#getReplenishmentById) | **GET** /v1.0/replenishment/{replenishmentId} | Get a replenishment by id
*infoplus.ReplenishmentPlanApi* | [**addReplenishmentPlan**](docs/ReplenishmentPlanApi.md#addReplenishmentPlan) | **POST** /v1.0/replenishmentPlan | Create a replenishmentPlan
*infoplus.ReplenishmentPlanApi* | [**deleteReplenishmentPlan**](docs/ReplenishmentPlanApi.md#deleteReplenishmentPlan) | **DELETE** /v1.0/replenishmentPlan/{replenishmentPlanId} | Delete a replenishmentPlan
*infoplus.ReplenishmentPlanApi* | [**getReplenishmentPlanByFilter**](docs/ReplenishmentPlanApi.md#getReplenishmentPlanByFilter) | **GET** /v1.0/replenishmentPlan/search | Search replenishmentPlans by filter
*infoplus.ReplenishmentPlanApi* | [**getReplenishmentPlanById**](docs/ReplenishmentPlanApi.md#getReplenishmentPlanById) | **GET** /v1.0/replenishmentPlan/{replenishmentPlanId} | Get a replenishmentPlan by id
*infoplus.ReplenishmentPlanApi* | [**updateReplenishmentPlan**](docs/ReplenishmentPlanApi.md#updateReplenishmentPlan) | **PUT** /v1.0/replenishmentPlan | Update a replenishmentPlan
*infoplus.ReplenishmentProcessApi* | [**getReplenishmentProcessByFilter**](docs/ReplenishmentProcessApi.md#getReplenishmentProcessByFilter) | **GET** /v1.0/replenishmentProcess/search | Search replenishmentProcesses by filter
*infoplus.ReplenishmentProcessApi* | [**getReplenishmentProcessById**](docs/ReplenishmentProcessApi.md#getReplenishmentProcessById) | **GET** /v1.0/replenishmentProcess/{replenishmentProcessId} | Get a replenishmentProcess by id
*infoplus.ServiceTypeApi* | [**getServiceTypeById**](docs/ServiceTypeApi.md#getServiceTypeById) | **GET** /v1.0/serviceType/{serviceTypeId} | Get a serviceType by id
*infoplus.ServiceTypeApi* | [**getServiceTypeBySearchText**](docs/ServiceTypeApi.md#getServiceTypeBySearchText) | **GET** /v1.0/serviceType/search | Search serviceTypes
*infoplus.ShoppingCartConnectionApi* | [**addShoppingCartConnection**](docs/ShoppingCartConnectionApi.md#addShoppingCartConnection) | **POST** /v1.0/shoppingCartConnection | Create a shoppingCartConnection
*infoplus.ShoppingCartConnectionApi* | [**deleteShoppingCartConnection**](docs/ShoppingCartConnectionApi.md#deleteShoppingCartConnection) | **DELETE** /v1.0/shoppingCartConnection/{shoppingCartConnectionId} | Delete a shoppingCartConnection
*infoplus.ShoppingCartConnectionApi* | [**getShoppingCartConnectionByFilter**](docs/ShoppingCartConnectionApi.md#getShoppingCartConnectionByFilter) | **GET** /v1.0/shoppingCartConnection/search | Search shoppingCartConnections by filter
*infoplus.ShoppingCartConnectionApi* | [**getShoppingCartConnectionById**](docs/ShoppingCartConnectionApi.md#getShoppingCartConnectionById) | **GET** /v1.0/shoppingCartConnection/{shoppingCartConnectionId} | Get a shoppingCartConnection by id
*infoplus.ShoppingCartConnectionApi* | [**updateShoppingCartConnection**](docs/ShoppingCartConnectionApi.md#updateShoppingCartConnection) | **PUT** /v1.0/shoppingCartConnection | Update a shoppingCartConnection
*infoplus.ThirdPartyParcelAccountApi* | [**addThirdPartyParcelAccount**](docs/ThirdPartyParcelAccountApi.md#addThirdPartyParcelAccount) | **POST** /v1.0/thirdPartyParcelAccount | Create a thirdPartyParcelAccount
*infoplus.ThirdPartyParcelAccountApi* | [**deleteThirdPartyParcelAccount**](docs/ThirdPartyParcelAccountApi.md#deleteThirdPartyParcelAccount) | **DELETE** /v1.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Delete a thirdPartyParcelAccount
*infoplus.ThirdPartyParcelAccountApi* | [**getThirdPartyParcelAccountByFilter**](docs/ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountByFilter) | **GET** /v1.0/thirdPartyParcelAccount/search | Search thirdPartyParcelAccounts by filter
*infoplus.ThirdPartyParcelAccountApi* | [**getThirdPartyParcelAccountById**](docs/ThirdPartyParcelAccountApi.md#getThirdPartyParcelAccountById) | **GET** /v1.0/thirdPartyParcelAccount/{thirdPartyParcelAccountId} | Get a thirdPartyParcelAccount by id
*infoplus.ThirdPartyParcelAccountApi* | [**updateThirdPartyParcelAccount**](docs/ThirdPartyParcelAccountApi.md#updateThirdPartyParcelAccount) | **PUT** /v1.0/thirdPartyParcelAccount | Update a thirdPartyParcelAccount
*infoplus.UserApi* | [**getUserById**](docs/UserApi.md#getUserById) | **GET** /v1.0/user/{userId} | Get an user by id
*infoplus.UserApi* | [**getUserBySearchText**](docs/UserApi.md#getUserBySearchText) | **GET** /v1.0/user/search | Search users
*infoplus.VendorApi* | [**addVendor**](docs/VendorApi.md#addVendor) | **POST** /v1.0/vendor | Create a vendor
*infoplus.VendorApi* | [**deleteVendor**](docs/VendorApi.md#deleteVendor) | **DELETE** /v1.0/vendor/{vendorId} | Delete a vendor
*infoplus.VendorApi* | [**getVendorByFilter**](docs/VendorApi.md#getVendorByFilter) | **GET** /v1.0/vendor/search | Search vendors by filter
*infoplus.VendorApi* | [**getVendorById**](docs/VendorApi.md#getVendorById) | **GET** /v1.0/vendor/{vendorId} | Get a vendor by id
*infoplus.VendorApi* | [**updateVendor**](docs/VendorApi.md#updateVendor) | **PUT** /v1.0/vendor | Update a vendor
*infoplus.VendorComplianceSurveyApi* | [**addVendorComplianceSurvey**](docs/VendorComplianceSurveyApi.md#addVendorComplianceSurvey) | **POST** /v1.0/vendorComplianceSurvey | Create a vendorComplianceSurvey
*infoplus.VendorComplianceSurveyApi* | [**deleteVendorComplianceSurvey**](docs/VendorComplianceSurveyApi.md#deleteVendorComplianceSurvey) | **DELETE** /v1.0/vendorComplianceSurvey/{vendorComplianceSurveyId} | Delete a vendorComplianceSurvey
*infoplus.VendorComplianceSurveyApi* | [**getVendorComplianceSurveyByFilter**](docs/VendorComplianceSurveyApi.md#getVendorComplianceSurveyByFilter) | **GET** /v1.0/vendorComplianceSurvey/search | Search vendorComplianceSurveys by filter
*infoplus.VendorComplianceSurveyApi* | [**getVendorComplianceSurveyById**](docs/VendorComplianceSurveyApi.md#getVendorComplianceSurveyById) | **GET** /v1.0/vendorComplianceSurvey/{vendorComplianceSurveyId} | Get a vendorComplianceSurvey by id
*infoplus.VendorComplianceSurveyApi* | [**updateVendorComplianceSurvey**](docs/VendorComplianceSurveyApi.md#updateVendorComplianceSurvey) | **PUT** /v1.0/vendorComplianceSurvey | Update a vendorComplianceSurvey
*infoplus.WarehouseApi* | [**getWarehouseByFilter**](docs/WarehouseApi.md#getWarehouseByFilter) | **GET** /v1.0/warehouse/search | Search warehouses by filter
*infoplus.WarehouseApi* | [**getWarehouseById**](docs/WarehouseApi.md#getWarehouseById) | **GET** /v1.0/warehouse/{warehouseId} | Get a warehouse by id
*infoplus.WarehouseApi* | [**updateWarehouse**](docs/WarehouseApi.md#updateWarehouse) | **PUT** /v1.0/warehouse | Update a warehouse
*infoplus.WarehouseDocumentApi* | [**getWarehouseDocumentByFilter**](docs/WarehouseDocumentApi.md#getWarehouseDocumentByFilter) | **GET** /v1.0/warehouseDocument/search | Search warehouseDocuments by filter
*infoplus.WarehouseDocumentApi* | [**getWarehouseDocumentById**](docs/WarehouseDocumentApi.md#getWarehouseDocumentById) | **GET** /v1.0/warehouseDocument/{warehouseDocumentId} | Get a warehouseDocument by id
*infoplus.WarehouseDocumentTypeApi* | [**getWarehouseDocumentTypeByFilter**](docs/WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeByFilter) | **GET** /v1.0/warehouseDocumentType/search | Search warehouseDocumentTypes by filter
*infoplus.WarehouseDocumentTypeApi* | [**getWarehouseDocumentTypeById**](docs/WarehouseDocumentTypeApi.md#getWarehouseDocumentTypeById) | **GET** /v1.0/warehouseDocumentType/{warehouseDocumentTypeId} | Get a warehouseDocumentType by id
*infoplus.WorkApi* | [**getWorkByFilter**](docs/WorkApi.md#getWorkByFilter) | **GET** /v1.0/work/search | Search works by filter
*infoplus.WorkApi* | [**getWorkById**](docs/WorkApi.md#getWorkById) | **GET** /v1.0/work/{workId} | Get a work by id
*infoplus.WorkBatchApi* | [**getWorkBatchByFilter**](docs/WorkBatchApi.md#getWorkBatchByFilter) | **GET** /v1.0/workBatch/search | Search workBatchs by filter
*infoplus.WorkBatchApi* | [**getWorkBatchById**](docs/WorkBatchApi.md#getWorkBatchById) | **GET** /v1.0/workBatch/{workBatchId} | Get a workBatch by id
*infoplus.ZoneApi* | [**addZone**](docs/ZoneApi.md#addZone) | **POST** /v1.0/zone | Create a zone
*infoplus.ZoneApi* | [**deleteZone**](docs/ZoneApi.md#deleteZone) | **DELETE** /v1.0/zone/{zoneId} | Delete a zone
*infoplus.ZoneApi* | [**getZoneByFilter**](docs/ZoneApi.md#getZoneByFilter) | **GET** /v1.0/zone/search | Search zones by filter
*infoplus.ZoneApi* | [**getZoneById**](docs/ZoneApi.md#getZoneById) | **GET** /v1.0/zone/{zoneId} | Get a zone by id
*infoplus.ZoneApi* | [**updateZone**](docs/ZoneApi.md#updateZone) | **PUT** /v1.0/zone | Update a zone


## Documentation for Models

 - [infoplus.Aisle](docs/Aisle.md)
 - [infoplus.Alert](docs/Alert.md)
 - [infoplus.ApiResponse](docs/ApiResponse.md)
 - [infoplus.Asn](docs/Asn.md)
 - [infoplus.BillOfLading](docs/BillOfLading.md)
 - [infoplus.BillOfLadingCarrierInfoLine](docs/BillOfLadingCarrierInfoLine.md)
 - [infoplus.BillOfLadingOrderInfoLine](docs/BillOfLadingOrderInfoLine.md)
 - [infoplus.BillingCode](docs/BillingCode.md)
 - [infoplus.BillingCodeType](docs/BillingCodeType.md)
 - [infoplus.Building](docs/Building.md)
 - [infoplus.BusinessTransaction](docs/BusinessTransaction.md)
 - [infoplus.Carrier](docs/Carrier.md)
 - [infoplus.CarrierService](docs/CarrierService.md)
 - [infoplus.Carton](docs/Carton.md)
 - [infoplus.CartonContent](docs/CartonContent.md)
 - [infoplus.CartonType](docs/CartonType.md)
 - [infoplus.Customer](docs/Customer.md)
 - [infoplus.EmailTemplate](docs/EmailTemplate.md)
 - [infoplus.ExternalShipment](docs/ExternalShipment.md)
 - [infoplus.FulfillmentPlan](docs/FulfillmentPlan.md)
 - [infoplus.FulfillmentProcess](docs/FulfillmentProcess.md)
 - [infoplus.IntegrationPartner](docs/IntegrationPartner.md)
 - [infoplus.InventoryAdjustment](docs/InventoryAdjustment.md)
 - [infoplus.InventoryDetail](docs/InventoryDetail.md)
 - [infoplus.Item](docs/Item.md)
 - [infoplus.ItemAccountCode](docs/ItemAccountCode.md)
 - [infoplus.ItemBuyer](docs/ItemBuyer.md)
 - [infoplus.ItemLegacyLowStockContact](docs/ItemLegacyLowStockContact.md)
 - [infoplus.ItemLowStockCode](docs/ItemLowStockCode.md)
 - [infoplus.ItemMajorGroup](docs/ItemMajorGroup.md)
 - [infoplus.ItemProductCode](docs/ItemProductCode.md)
 - [infoplus.ItemReceipt](docs/ItemReceipt.md)
 - [infoplus.ItemSubGroup](docs/ItemSubGroup.md)
 - [infoplus.ItemSummaryCode](docs/ItemSummaryCode.md)
 - [infoplus.JobTime](docs/JobTime.md)
 - [infoplus.JobType](docs/JobType.md)
 - [infoplus.LineOfBusiness](docs/LineOfBusiness.md)
 - [infoplus.Location](docs/Location.md)
 - [infoplus.LocationAddressScheme](docs/LocationAddressScheme.md)
 - [infoplus.LocationBillingType](docs/LocationBillingType.md)
 - [infoplus.LocationFootprint](docs/LocationFootprint.md)
 - [infoplus.LoggedTime](docs/LoggedTime.md)
 - [infoplus.LoggedTimeType](docs/LoggedTimeType.md)
 - [infoplus.LowStock](docs/LowStock.md)
 - [infoplus.Order](docs/Order.md)
 - [infoplus.OrderLine](docs/OrderLine.md)
 - [infoplus.OrderLoadProgram](docs/OrderLoadProgram.md)
 - [infoplus.OrderSource](docs/OrderSource.md)
 - [infoplus.OrderSourceReservation](docs/OrderSourceReservation.md)
 - [infoplus.OverrideReturnAddress](docs/OverrideReturnAddress.md)
 - [infoplus.ParcelAccount](docs/ParcelAccount.md)
 - [infoplus.ParcelShipment](docs/ParcelShipment.md)
 - [infoplus.PickFaceAssignment](docs/PickFaceAssignment.md)
 - [infoplus.ProductType](docs/ProductType.md)
 - [infoplus.ProductionLot](docs/ProductionLot.md)
 - [infoplus.QuickAdjustment](docs/QuickAdjustment.md)
 - [infoplus.QuickReceipt](docs/QuickReceipt.md)
 - [infoplus.ReceivingProcess](docs/ReceivingProcess.md)
 - [infoplus.ReceivingWorksheet](docs/ReceivingWorksheet.md)
 - [infoplus.ReceivingWorksheetLineItem](docs/ReceivingWorksheetLineItem.md)
 - [infoplus.ReceivingWorksheetPutAwayPlan](docs/ReceivingWorksheetPutAwayPlan.md)
 - [infoplus.Replenishment](docs/Replenishment.md)
 - [infoplus.ReplenishmentPlan](docs/ReplenishmentPlan.md)
 - [infoplus.ReplenishmentProcess](docs/ReplenishmentProcess.md)
 - [infoplus.ServiceType](docs/ServiceType.md)
 - [infoplus.ShoppingCartConnection](docs/ShoppingCartConnection.md)
 - [infoplus.ThirdPartyParcelAccount](docs/ThirdPartyParcelAccount.md)
 - [infoplus.User](docs/User.md)
 - [infoplus.Vendor](docs/Vendor.md)
 - [infoplus.VendorComplianceSurvey](docs/VendorComplianceSurvey.md)
 - [infoplus.Warehouse](docs/Warehouse.md)
 - [infoplus.WarehouseDocument](docs/WarehouseDocument.md)
 - [infoplus.WarehouseDocumentType](docs/WarehouseDocumentType.md)
 - [infoplus.Work](docs/Work.md)
 - [infoplus.WorkBatch](docs/WorkBatch.md)
 - [infoplus.Zone](docs/Zone.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: API-Key
- **Location**: HTTP header

