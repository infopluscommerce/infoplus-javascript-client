(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Aisle', './model/Alert', './model/ApiResponse', './model/Asn', './model/BillOfLading', './model/BillOfLadingCarrierInfoLine', './model/BillOfLadingOrderInfoLine', './model/BillingCode', './model/BillingCodeActivity', './model/BillingCodeType', './model/Building', './model/BusinessTransaction', './model/Carrier', './model/CarrierService', './model/Carton', './model/CartonActivity', './model/CartonContent', './model/CartonType', './model/Customer', './model/EDIDocumentType', './model/EmailTemplate', './model/ExternalShipment', './model/ExternalShippingSystem', './model/FulfillmentPlan', './model/FulfillmentProcess', './model/IntegrationPartner', './model/InventoryAdjustment', './model/InventoryDetail', './model/InventorySnapshot', './model/InventoryStorageActivity', './model/Item', './model/ItemAccountCode', './model/ItemActivityType', './model/ItemBuyer', './model/ItemCategory', './model/ItemLowstockCode', './model/ItemProductCode', './model/ItemReceipt', './model/ItemReceiptActivity', './model/ItemSector', './model/ItemSubCategory', './model/ItemSummaryCode', './model/JobTime', './model/JobTimeActivity', './model/JobType', './model/Kit', './model/LegacyLowstockContact', './model/LineOfBusiness', './model/Location', './model/LocationAddressScheme', './model/LocationBillingType', './model/LocationFootprint', './model/LoggedTime', './model/LoggedTimeType', './model/LowStock', './model/ManageScheduledPlans', './model/Order', './model/OrderActivity', './model/OrderExtraLineItemData', './model/OrderExtraOrderData', './model/OrderInvoiceTemplateLineItemDescriptionEnum', './model/OrderLine', './model/OrderLineActivity', './model/OrderLoadProgram', './model/OrderSource', './model/OrderSourceReservation', './model/OverrideReturnAddress', './model/PackingSlipTemplateLineItemDescriptionEnum', './model/ParcelAccount', './model/PickFaceAssignment', './model/PredefinedCarton', './model/ProductType', './model/ProductionLot', './model/QuickAdjustment', './model/QuickReceipt', './model/ReceivingProcess', './model/ReceivingWorksheet', './model/ReceivingWorksheetLineItem', './model/ReceivingWorksheetPutAwayPlan', './model/Replenishment', './model/ReplenishmentPlan', './model/ReplenishmentProcess', './model/ScheduledPlanLog', './model/ServiceType', './model/Shipment', './model/ShoppingCartConnection', './model/Substitution', './model/Supplement', './model/ThirdPartyParcelAccount', './model/User', './model/Vendor', './model/VendorComplianceSurvey', './model/Warehouse', './model/WarehouseDocument', './model/WarehouseDocumentType', './model/Work', './model/WorkActivity', './model/WorkBatch', './model/Zone', './api/AisleApi', './api/AlertApi', './api/AsnApi', './api/BillOfLadingApi', './api/BillingCodeApi', './api/BillingCodeActivityApi', './api/BillingCodeTypeApi', './api/BuildingApi', './api/BusinessTransactionApi', './api/CarrierApi', './api/CarrierServiceApi', './api/CartonApi', './api/CartonActivityApi', './api/CartonContentApi', './api/CartonTypeApi', './api/CustomerApi', './api/EDIDocumentTypeApi', './api/EmailTemplateApi', './api/ExternalShipmentApi', './api/ExternalShippingSystemApi', './api/FulfillmentPlanApi', './api/FulfillmentProcessApi', './api/IntegrationPartnerApi', './api/InventoryAdjustmentApi', './api/InventoryDetailApi', './api/InventorySnapshotApi', './api/InventoryStorageActivityApi', './api/ItemApi', './api/ItemAccountCodeApi', './api/ItemActivityTypeApi', './api/ItemBuyerApi', './api/ItemCategoryApi', './api/ItemLowstockCodeApi', './api/ItemProductCodeApi', './api/ItemReceiptApi', './api/ItemReceiptActivityApi', './api/ItemSectorApi', './api/ItemSubCategoryApi', './api/ItemSummaryCodeApi', './api/JobTimeApi', './api/JobTimeActivityApi', './api/JobTypeApi', './api/KitApi', './api/LegacyLowstockContactApi', './api/LineOfBusinessApi', './api/LocationApi', './api/LocationAddressSchemeApi', './api/LocationBillingTypeApi', './api/LocationFootprintApi', './api/LoggedTimeApi', './api/LoggedTimeTypeApi', './api/LowStockApi', './api/ManageScheduledPlansApi', './api/OrderApi', './api/OrderActivityApi', './api/OrderInvoiceTemplateLineItemDescriptionEnumApi', './api/OrderLineApi', './api/OrderLineActivityApi', './api/OrderLoadProgramApi', './api/OrderSourceApi', './api/OrderSourceReservationApi', './api/OverrideReturnAddressApi', './api/PackingSlipTemplateLineItemDescriptionEnumApi', './api/ParcelAccountApi', './api/PickFaceAssignmentApi', './api/PredefinedCartonApi', './api/ProductTypeApi', './api/ProductionLotApi', './api/QuickAdjustmentApi', './api/QuickReceiptApi', './api/ReceivingProcessApi', './api/ReceivingWorksheetApi', './api/ReplenishmentApi', './api/ReplenishmentPlanApi', './api/ReplenishmentProcessApi', './api/ScheduledPlanLogApi', './api/ServiceTypeApi', './api/ShipmentApi', './api/ShoppingCartConnectionApi', './api/SubstitutionApi', './api/SupplementApi', './api/ThirdPartyParcelAccountApi', './api/UserApi', './api/VendorApi', './api/VendorComplianceSurveyApi', './api/WarehouseApi', './api/WarehouseDocumentApi', './api/WarehouseDocumentTypeApi', './api/WorkApi', './api/WorkActivityApi', './api/WorkBatchApi', './api/ZoneApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Aisle'), require('./model/Alert'), require('./model/ApiResponse'), require('./model/Asn'), require('./model/BillOfLading'), require('./model/BillOfLadingCarrierInfoLine'), require('./model/BillOfLadingOrderInfoLine'), require('./model/BillingCode'), require('./model/BillingCodeActivity'), require('./model/BillingCodeType'), require('./model/Building'), require('./model/BusinessTransaction'), require('./model/Carrier'), require('./model/CarrierService'), require('./model/Carton'), require('./model/CartonActivity'), require('./model/CartonContent'), require('./model/CartonType'), require('./model/Customer'), require('./model/EDIDocumentType'), require('./model/EmailTemplate'), require('./model/ExternalShipment'), require('./model/ExternalShippingSystem'), require('./model/FulfillmentPlan'), require('./model/FulfillmentProcess'), require('./model/IntegrationPartner'), require('./model/InventoryAdjustment'), require('./model/InventoryDetail'), require('./model/InventorySnapshot'), require('./model/InventoryStorageActivity'), require('./model/Item'), require('./model/ItemAccountCode'), require('./model/ItemActivityType'), require('./model/ItemBuyer'), require('./model/ItemCategory'), require('./model/ItemLowstockCode'), require('./model/ItemProductCode'), require('./model/ItemReceipt'), require('./model/ItemReceiptActivity'), require('./model/ItemSector'), require('./model/ItemSubCategory'), require('./model/ItemSummaryCode'), require('./model/JobTime'), require('./model/JobTimeActivity'), require('./model/JobType'), require('./model/Kit'), require('./model/LegacyLowstockContact'), require('./model/LineOfBusiness'), require('./model/Location'), require('./model/LocationAddressScheme'), require('./model/LocationBillingType'), require('./model/LocationFootprint'), require('./model/LoggedTime'), require('./model/LoggedTimeType'), require('./model/LowStock'), require('./model/ManageScheduledPlans'), require('./model/Order'), require('./model/OrderActivity'), require('./model/OrderExtraLineItemData'), require('./model/OrderExtraOrderData'), require('./model/OrderInvoiceTemplateLineItemDescriptionEnum'), require('./model/OrderLine'), require('./model/OrderLineActivity'), require('./model/OrderLoadProgram'), require('./model/OrderSource'), require('./model/OrderSourceReservation'), require('./model/OverrideReturnAddress'), require('./model/PackingSlipTemplateLineItemDescriptionEnum'), require('./model/ParcelAccount'), require('./model/PickFaceAssignment'), require('./model/PredefinedCarton'), require('./model/ProductType'), require('./model/ProductionLot'), require('./model/QuickAdjustment'), require('./model/QuickReceipt'), require('./model/ReceivingProcess'), require('./model/ReceivingWorksheet'), require('./model/ReceivingWorksheetLineItem'), require('./model/ReceivingWorksheetPutAwayPlan'), require('./model/Replenishment'), require('./model/ReplenishmentPlan'), require('./model/ReplenishmentProcess'), require('./model/ScheduledPlanLog'), require('./model/ServiceType'), require('./model/Shipment'), require('./model/ShoppingCartConnection'), require('./model/Substitution'), require('./model/Supplement'), require('./model/ThirdPartyParcelAccount'), require('./model/User'), require('./model/Vendor'), require('./model/VendorComplianceSurvey'), require('./model/Warehouse'), require('./model/WarehouseDocument'), require('./model/WarehouseDocumentType'), require('./model/Work'), require('./model/WorkActivity'), require('./model/WorkBatch'), require('./model/Zone'), require('./api/AisleApi'), require('./api/AlertApi'), require('./api/AsnApi'), require('./api/BillOfLadingApi'), require('./api/BillingCodeApi'), require('./api/BillingCodeActivityApi'), require('./api/BillingCodeTypeApi'), require('./api/BuildingApi'), require('./api/BusinessTransactionApi'), require('./api/CarrierApi'), require('./api/CarrierServiceApi'), require('./api/CartonApi'), require('./api/CartonActivityApi'), require('./api/CartonContentApi'), require('./api/CartonTypeApi'), require('./api/CustomerApi'), require('./api/EDIDocumentTypeApi'), require('./api/EmailTemplateApi'), require('./api/ExternalShipmentApi'), require('./api/ExternalShippingSystemApi'), require('./api/FulfillmentPlanApi'), require('./api/FulfillmentProcessApi'), require('./api/IntegrationPartnerApi'), require('./api/InventoryAdjustmentApi'), require('./api/InventoryDetailApi'), require('./api/InventorySnapshotApi'), require('./api/InventoryStorageActivityApi'), require('./api/ItemApi'), require('./api/ItemAccountCodeApi'), require('./api/ItemActivityTypeApi'), require('./api/ItemBuyerApi'), require('./api/ItemCategoryApi'), require('./api/ItemLowstockCodeApi'), require('./api/ItemProductCodeApi'), require('./api/ItemReceiptApi'), require('./api/ItemReceiptActivityApi'), require('./api/ItemSectorApi'), require('./api/ItemSubCategoryApi'), require('./api/ItemSummaryCodeApi'), require('./api/JobTimeApi'), require('./api/JobTimeActivityApi'), require('./api/JobTypeApi'), require('./api/KitApi'), require('./api/LegacyLowstockContactApi'), require('./api/LineOfBusinessApi'), require('./api/LocationApi'), require('./api/LocationAddressSchemeApi'), require('./api/LocationBillingTypeApi'), require('./api/LocationFootprintApi'), require('./api/LoggedTimeApi'), require('./api/LoggedTimeTypeApi'), require('./api/LowStockApi'), require('./api/ManageScheduledPlansApi'), require('./api/OrderApi'), require('./api/OrderActivityApi'), require('./api/OrderInvoiceTemplateLineItemDescriptionEnumApi'), require('./api/OrderLineApi'), require('./api/OrderLineActivityApi'), require('./api/OrderLoadProgramApi'), require('./api/OrderSourceApi'), require('./api/OrderSourceReservationApi'), require('./api/OverrideReturnAddressApi'), require('./api/PackingSlipTemplateLineItemDescriptionEnumApi'), require('./api/ParcelAccountApi'), require('./api/PickFaceAssignmentApi'), require('./api/PredefinedCartonApi'), require('./api/ProductTypeApi'), require('./api/ProductionLotApi'), require('./api/QuickAdjustmentApi'), require('./api/QuickReceiptApi'), require('./api/ReceivingProcessApi'), require('./api/ReceivingWorksheetApi'), require('./api/ReplenishmentApi'), require('./api/ReplenishmentPlanApi'), require('./api/ReplenishmentProcessApi'), require('./api/ScheduledPlanLogApi'), require('./api/ServiceTypeApi'), require('./api/ShipmentApi'), require('./api/ShoppingCartConnectionApi'), require('./api/SubstitutionApi'), require('./api/SupplementApi'), require('./api/ThirdPartyParcelAccountApi'), require('./api/UserApi'), require('./api/VendorApi'), require('./api/VendorComplianceSurveyApi'), require('./api/WarehouseApi'), require('./api/WarehouseDocumentApi'), require('./api/WarehouseDocumentTypeApi'), require('./api/WorkApi'), require('./api/WorkActivityApi'), require('./api/WorkBatchApi'), require('./api/ZoneApi'));
  }
}(function(ApiClient, Aisle, Alert, ApiResponse, Asn, BillOfLading, BillOfLadingCarrierInfoLine, BillOfLadingOrderInfoLine, BillingCode, BillingCodeActivity, BillingCodeType, Building, BusinessTransaction, Carrier, CarrierService, Carton, CartonActivity, CartonContent, CartonType, Customer, EDIDocumentType, EmailTemplate, ExternalShipment, ExternalShippingSystem, FulfillmentPlan, FulfillmentProcess, IntegrationPartner, InventoryAdjustment, InventoryDetail, InventorySnapshot, InventoryStorageActivity, Item, ItemAccountCode, ItemActivityType, ItemBuyer, ItemCategory, ItemLowstockCode, ItemProductCode, ItemReceipt, ItemReceiptActivity, ItemSector, ItemSubCategory, ItemSummaryCode, JobTime, JobTimeActivity, JobType, Kit, LegacyLowstockContact, LineOfBusiness, Location, LocationAddressScheme, LocationBillingType, LocationFootprint, LoggedTime, LoggedTimeType, LowStock, ManageScheduledPlans, Order, OrderActivity, OrderExtraLineItemData, OrderExtraOrderData, OrderInvoiceTemplateLineItemDescriptionEnum, OrderLine, OrderLineActivity, OrderLoadProgram, OrderSource, OrderSourceReservation, OverrideReturnAddress, PackingSlipTemplateLineItemDescriptionEnum, ParcelAccount, PickFaceAssignment, PredefinedCarton, ProductType, ProductionLot, QuickAdjustment, QuickReceipt, ReceivingProcess, ReceivingWorksheet, ReceivingWorksheetLineItem, ReceivingWorksheetPutAwayPlan, Replenishment, ReplenishmentPlan, ReplenishmentProcess, ScheduledPlanLog, ServiceType, Shipment, ShoppingCartConnection, Substitution, Supplement, ThirdPartyParcelAccount, User, Vendor, VendorComplianceSurvey, Warehouse, WarehouseDocument, WarehouseDocumentType, Work, WorkActivity, WorkBatch, Zone, AisleApi, AlertApi, AsnApi, BillOfLadingApi, BillingCodeApi, BillingCodeActivityApi, BillingCodeTypeApi, BuildingApi, BusinessTransactionApi, CarrierApi, CarrierServiceApi, CartonApi, CartonActivityApi, CartonContentApi, CartonTypeApi, CustomerApi, EDIDocumentTypeApi, EmailTemplateApi, ExternalShipmentApi, ExternalShippingSystemApi, FulfillmentPlanApi, FulfillmentProcessApi, IntegrationPartnerApi, InventoryAdjustmentApi, InventoryDetailApi, InventorySnapshotApi, InventoryStorageActivityApi, ItemApi, ItemAccountCodeApi, ItemActivityTypeApi, ItemBuyerApi, ItemCategoryApi, ItemLowstockCodeApi, ItemProductCodeApi, ItemReceiptApi, ItemReceiptActivityApi, ItemSectorApi, ItemSubCategoryApi, ItemSummaryCodeApi, JobTimeApi, JobTimeActivityApi, JobTypeApi, KitApi, LegacyLowstockContactApi, LineOfBusinessApi, LocationApi, LocationAddressSchemeApi, LocationBillingTypeApi, LocationFootprintApi, LoggedTimeApi, LoggedTimeTypeApi, LowStockApi, ManageScheduledPlansApi, OrderApi, OrderActivityApi, OrderInvoiceTemplateLineItemDescriptionEnumApi, OrderLineApi, OrderLineActivityApi, OrderLoadProgramApi, OrderSourceApi, OrderSourceReservationApi, OverrideReturnAddressApi, PackingSlipTemplateLineItemDescriptionEnumApi, ParcelAccountApi, PickFaceAssignmentApi, PredefinedCartonApi, ProductTypeApi, ProductionLotApi, QuickAdjustmentApi, QuickReceiptApi, ReceivingProcessApi, ReceivingWorksheetApi, ReplenishmentApi, ReplenishmentPlanApi, ReplenishmentProcessApi, ScheduledPlanLogApi, ServiceTypeApi, ShipmentApi, ShoppingCartConnectionApi, SubstitutionApi, SupplementApi, ThirdPartyParcelAccountApi, UserApi, VendorApi, VendorComplianceSurveyApi, WarehouseApi, WarehouseDocumentApi, WarehouseDocumentTypeApi, WorkApi, WorkActivityApi, WorkBatchApi, ZoneApi) {
  'use strict';

  /**
   * Infoplus API..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var infoplus = require('./index'); // See note below*.
   * var xxxSvc = new infoplus.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new infoplus.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new infoplus.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new infoplus.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version beta
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Aisle model constructor.
     * @property {module:model/Aisle}
     */
    Aisle: Aisle,
    /**
     * The Alert model constructor.
     * @property {module:model/Alert}
     */
    Alert: Alert,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The Asn model constructor.
     * @property {module:model/Asn}
     */
    Asn: Asn,
    /**
     * The BillOfLading model constructor.
     * @property {module:model/BillOfLading}
     */
    BillOfLading: BillOfLading,
    /**
     * The BillOfLadingCarrierInfoLine model constructor.
     * @property {module:model/BillOfLadingCarrierInfoLine}
     */
    BillOfLadingCarrierInfoLine: BillOfLadingCarrierInfoLine,
    /**
     * The BillOfLadingOrderInfoLine model constructor.
     * @property {module:model/BillOfLadingOrderInfoLine}
     */
    BillOfLadingOrderInfoLine: BillOfLadingOrderInfoLine,
    /**
     * The BillingCode model constructor.
     * @property {module:model/BillingCode}
     */
    BillingCode: BillingCode,
    /**
     * The BillingCodeActivity model constructor.
     * @property {module:model/BillingCodeActivity}
     */
    BillingCodeActivity: BillingCodeActivity,
    /**
     * The BillingCodeType model constructor.
     * @property {module:model/BillingCodeType}
     */
    BillingCodeType: BillingCodeType,
    /**
     * The Building model constructor.
     * @property {module:model/Building}
     */
    Building: Building,
    /**
     * The BusinessTransaction model constructor.
     * @property {module:model/BusinessTransaction}
     */
    BusinessTransaction: BusinessTransaction,
    /**
     * The Carrier model constructor.
     * @property {module:model/Carrier}
     */
    Carrier: Carrier,
    /**
     * The CarrierService model constructor.
     * @property {module:model/CarrierService}
     */
    CarrierService: CarrierService,
    /**
     * The Carton model constructor.
     * @property {module:model/Carton}
     */
    Carton: Carton,
    /**
     * The CartonActivity model constructor.
     * @property {module:model/CartonActivity}
     */
    CartonActivity: CartonActivity,
    /**
     * The CartonContent model constructor.
     * @property {module:model/CartonContent}
     */
    CartonContent: CartonContent,
    /**
     * The CartonType model constructor.
     * @property {module:model/CartonType}
     */
    CartonType: CartonType,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The EDIDocumentType model constructor.
     * @property {module:model/EDIDocumentType}
     */
    EDIDocumentType: EDIDocumentType,
    /**
     * The EmailTemplate model constructor.
     * @property {module:model/EmailTemplate}
     */
    EmailTemplate: EmailTemplate,
    /**
     * The ExternalShipment model constructor.
     * @property {module:model/ExternalShipment}
     */
    ExternalShipment: ExternalShipment,
    /**
     * The ExternalShippingSystem model constructor.
     * @property {module:model/ExternalShippingSystem}
     */
    ExternalShippingSystem: ExternalShippingSystem,
    /**
     * The FulfillmentPlan model constructor.
     * @property {module:model/FulfillmentPlan}
     */
    FulfillmentPlan: FulfillmentPlan,
    /**
     * The FulfillmentProcess model constructor.
     * @property {module:model/FulfillmentProcess}
     */
    FulfillmentProcess: FulfillmentProcess,
    /**
     * The IntegrationPartner model constructor.
     * @property {module:model/IntegrationPartner}
     */
    IntegrationPartner: IntegrationPartner,
    /**
     * The InventoryAdjustment model constructor.
     * @property {module:model/InventoryAdjustment}
     */
    InventoryAdjustment: InventoryAdjustment,
    /**
     * The InventoryDetail model constructor.
     * @property {module:model/InventoryDetail}
     */
    InventoryDetail: InventoryDetail,
    /**
     * The InventorySnapshot model constructor.
     * @property {module:model/InventorySnapshot}
     */
    InventorySnapshot: InventorySnapshot,
    /**
     * The InventoryStorageActivity model constructor.
     * @property {module:model/InventoryStorageActivity}
     */
    InventoryStorageActivity: InventoryStorageActivity,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The ItemAccountCode model constructor.
     * @property {module:model/ItemAccountCode}
     */
    ItemAccountCode: ItemAccountCode,
    /**
     * The ItemActivityType model constructor.
     * @property {module:model/ItemActivityType}
     */
    ItemActivityType: ItemActivityType,
    /**
     * The ItemBuyer model constructor.
     * @property {module:model/ItemBuyer}
     */
    ItemBuyer: ItemBuyer,
    /**
     * The ItemCategory model constructor.
     * @property {module:model/ItemCategory}
     */
    ItemCategory: ItemCategory,
    /**
     * The ItemLowstockCode model constructor.
     * @property {module:model/ItemLowstockCode}
     */
    ItemLowstockCode: ItemLowstockCode,
    /**
     * The ItemProductCode model constructor.
     * @property {module:model/ItemProductCode}
     */
    ItemProductCode: ItemProductCode,
    /**
     * The ItemReceipt model constructor.
     * @property {module:model/ItemReceipt}
     */
    ItemReceipt: ItemReceipt,
    /**
     * The ItemReceiptActivity model constructor.
     * @property {module:model/ItemReceiptActivity}
     */
    ItemReceiptActivity: ItemReceiptActivity,
    /**
     * The ItemSector model constructor.
     * @property {module:model/ItemSector}
     */
    ItemSector: ItemSector,
    /**
     * The ItemSubCategory model constructor.
     * @property {module:model/ItemSubCategory}
     */
    ItemSubCategory: ItemSubCategory,
    /**
     * The ItemSummaryCode model constructor.
     * @property {module:model/ItemSummaryCode}
     */
    ItemSummaryCode: ItemSummaryCode,
    /**
     * The JobTime model constructor.
     * @property {module:model/JobTime}
     */
    JobTime: JobTime,
    /**
     * The JobTimeActivity model constructor.
     * @property {module:model/JobTimeActivity}
     */
    JobTimeActivity: JobTimeActivity,
    /**
     * The JobType model constructor.
     * @property {module:model/JobType}
     */
    JobType: JobType,
    /**
     * The Kit model constructor.
     * @property {module:model/Kit}
     */
    Kit: Kit,
    /**
     * The LegacyLowstockContact model constructor.
     * @property {module:model/LegacyLowstockContact}
     */
    LegacyLowstockContact: LegacyLowstockContact,
    /**
     * The LineOfBusiness model constructor.
     * @property {module:model/LineOfBusiness}
     */
    LineOfBusiness: LineOfBusiness,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The LocationAddressScheme model constructor.
     * @property {module:model/LocationAddressScheme}
     */
    LocationAddressScheme: LocationAddressScheme,
    /**
     * The LocationBillingType model constructor.
     * @property {module:model/LocationBillingType}
     */
    LocationBillingType: LocationBillingType,
    /**
     * The LocationFootprint model constructor.
     * @property {module:model/LocationFootprint}
     */
    LocationFootprint: LocationFootprint,
    /**
     * The LoggedTime model constructor.
     * @property {module:model/LoggedTime}
     */
    LoggedTime: LoggedTime,
    /**
     * The LoggedTimeType model constructor.
     * @property {module:model/LoggedTimeType}
     */
    LoggedTimeType: LoggedTimeType,
    /**
     * The LowStock model constructor.
     * @property {module:model/LowStock}
     */
    LowStock: LowStock,
    /**
     * The ManageScheduledPlans model constructor.
     * @property {module:model/ManageScheduledPlans}
     */
    ManageScheduledPlans: ManageScheduledPlans,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderActivity model constructor.
     * @property {module:model/OrderActivity}
     */
    OrderActivity: OrderActivity,
    /**
     * The OrderExtraLineItemData model constructor.
     * @property {module:model/OrderExtraLineItemData}
     */
    OrderExtraLineItemData: OrderExtraLineItemData,
    /**
     * The OrderExtraOrderData model constructor.
     * @property {module:model/OrderExtraOrderData}
     */
    OrderExtraOrderData: OrderExtraOrderData,
    /**
     * The OrderInvoiceTemplateLineItemDescriptionEnum model constructor.
     * @property {module:model/OrderInvoiceTemplateLineItemDescriptionEnum}
     */
    OrderInvoiceTemplateLineItemDescriptionEnum: OrderInvoiceTemplateLineItemDescriptionEnum,
    /**
     * The OrderLine model constructor.
     * @property {module:model/OrderLine}
     */
    OrderLine: OrderLine,
    /**
     * The OrderLineActivity model constructor.
     * @property {module:model/OrderLineActivity}
     */
    OrderLineActivity: OrderLineActivity,
    /**
     * The OrderLoadProgram model constructor.
     * @property {module:model/OrderLoadProgram}
     */
    OrderLoadProgram: OrderLoadProgram,
    /**
     * The OrderSource model constructor.
     * @property {module:model/OrderSource}
     */
    OrderSource: OrderSource,
    /**
     * The OrderSourceReservation model constructor.
     * @property {module:model/OrderSourceReservation}
     */
    OrderSourceReservation: OrderSourceReservation,
    /**
     * The OverrideReturnAddress model constructor.
     * @property {module:model/OverrideReturnAddress}
     */
    OverrideReturnAddress: OverrideReturnAddress,
    /**
     * The PackingSlipTemplateLineItemDescriptionEnum model constructor.
     * @property {module:model/PackingSlipTemplateLineItemDescriptionEnum}
     */
    PackingSlipTemplateLineItemDescriptionEnum: PackingSlipTemplateLineItemDescriptionEnum,
    /**
     * The ParcelAccount model constructor.
     * @property {module:model/ParcelAccount}
     */
    ParcelAccount: ParcelAccount,
    /**
     * The PickFaceAssignment model constructor.
     * @property {module:model/PickFaceAssignment}
     */
    PickFaceAssignment: PickFaceAssignment,
    /**
     * The PredefinedCarton model constructor.
     * @property {module:model/PredefinedCarton}
     */
    PredefinedCarton: PredefinedCarton,
    /**
     * The ProductType model constructor.
     * @property {module:model/ProductType}
     */
    ProductType: ProductType,
    /**
     * The ProductionLot model constructor.
     * @property {module:model/ProductionLot}
     */
    ProductionLot: ProductionLot,
    /**
     * The QuickAdjustment model constructor.
     * @property {module:model/QuickAdjustment}
     */
    QuickAdjustment: QuickAdjustment,
    /**
     * The QuickReceipt model constructor.
     * @property {module:model/QuickReceipt}
     */
    QuickReceipt: QuickReceipt,
    /**
     * The ReceivingProcess model constructor.
     * @property {module:model/ReceivingProcess}
     */
    ReceivingProcess: ReceivingProcess,
    /**
     * The ReceivingWorksheet model constructor.
     * @property {module:model/ReceivingWorksheet}
     */
    ReceivingWorksheet: ReceivingWorksheet,
    /**
     * The ReceivingWorksheetLineItem model constructor.
     * @property {module:model/ReceivingWorksheetLineItem}
     */
    ReceivingWorksheetLineItem: ReceivingWorksheetLineItem,
    /**
     * The ReceivingWorksheetPutAwayPlan model constructor.
     * @property {module:model/ReceivingWorksheetPutAwayPlan}
     */
    ReceivingWorksheetPutAwayPlan: ReceivingWorksheetPutAwayPlan,
    /**
     * The Replenishment model constructor.
     * @property {module:model/Replenishment}
     */
    Replenishment: Replenishment,
    /**
     * The ReplenishmentPlan model constructor.
     * @property {module:model/ReplenishmentPlan}
     */
    ReplenishmentPlan: ReplenishmentPlan,
    /**
     * The ReplenishmentProcess model constructor.
     * @property {module:model/ReplenishmentProcess}
     */
    ReplenishmentProcess: ReplenishmentProcess,
    /**
     * The ScheduledPlanLog model constructor.
     * @property {module:model/ScheduledPlanLog}
     */
    ScheduledPlanLog: ScheduledPlanLog,
    /**
     * The ServiceType model constructor.
     * @property {module:model/ServiceType}
     */
    ServiceType: ServiceType,
    /**
     * The Shipment model constructor.
     * @property {module:model/Shipment}
     */
    Shipment: Shipment,
    /**
     * The ShoppingCartConnection model constructor.
     * @property {module:model/ShoppingCartConnection}
     */
    ShoppingCartConnection: ShoppingCartConnection,
    /**
     * The Substitution model constructor.
     * @property {module:model/Substitution}
     */
    Substitution: Substitution,
    /**
     * The Supplement model constructor.
     * @property {module:model/Supplement}
     */
    Supplement: Supplement,
    /**
     * The ThirdPartyParcelAccount model constructor.
     * @property {module:model/ThirdPartyParcelAccount}
     */
    ThirdPartyParcelAccount: ThirdPartyParcelAccount,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The Vendor model constructor.
     * @property {module:model/Vendor}
     */
    Vendor: Vendor,
    /**
     * The VendorComplianceSurvey model constructor.
     * @property {module:model/VendorComplianceSurvey}
     */
    VendorComplianceSurvey: VendorComplianceSurvey,
    /**
     * The Warehouse model constructor.
     * @property {module:model/Warehouse}
     */
    Warehouse: Warehouse,
    /**
     * The WarehouseDocument model constructor.
     * @property {module:model/WarehouseDocument}
     */
    WarehouseDocument: WarehouseDocument,
    /**
     * The WarehouseDocumentType model constructor.
     * @property {module:model/WarehouseDocumentType}
     */
    WarehouseDocumentType: WarehouseDocumentType,
    /**
     * The Work model constructor.
     * @property {module:model/Work}
     */
    Work: Work,
    /**
     * The WorkActivity model constructor.
     * @property {module:model/WorkActivity}
     */
    WorkActivity: WorkActivity,
    /**
     * The WorkBatch model constructor.
     * @property {module:model/WorkBatch}
     */
    WorkBatch: WorkBatch,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The AisleApi service constructor.
     * @property {module:api/AisleApi}
     */
    AisleApi: AisleApi,
    /**
     * The AlertApi service constructor.
     * @property {module:api/AlertApi}
     */
    AlertApi: AlertApi,
    /**
     * The AsnApi service constructor.
     * @property {module:api/AsnApi}
     */
    AsnApi: AsnApi,
    /**
     * The BillOfLadingApi service constructor.
     * @property {module:api/BillOfLadingApi}
     */
    BillOfLadingApi: BillOfLadingApi,
    /**
     * The BillingCodeApi service constructor.
     * @property {module:api/BillingCodeApi}
     */
    BillingCodeApi: BillingCodeApi,
    /**
     * The BillingCodeActivityApi service constructor.
     * @property {module:api/BillingCodeActivityApi}
     */
    BillingCodeActivityApi: BillingCodeActivityApi,
    /**
     * The BillingCodeTypeApi service constructor.
     * @property {module:api/BillingCodeTypeApi}
     */
    BillingCodeTypeApi: BillingCodeTypeApi,
    /**
     * The BuildingApi service constructor.
     * @property {module:api/BuildingApi}
     */
    BuildingApi: BuildingApi,
    /**
     * The BusinessTransactionApi service constructor.
     * @property {module:api/BusinessTransactionApi}
     */
    BusinessTransactionApi: BusinessTransactionApi,
    /**
     * The CarrierApi service constructor.
     * @property {module:api/CarrierApi}
     */
    CarrierApi: CarrierApi,
    /**
     * The CarrierServiceApi service constructor.
     * @property {module:api/CarrierServiceApi}
     */
    CarrierServiceApi: CarrierServiceApi,
    /**
     * The CartonApi service constructor.
     * @property {module:api/CartonApi}
     */
    CartonApi: CartonApi,
    /**
     * The CartonActivityApi service constructor.
     * @property {module:api/CartonActivityApi}
     */
    CartonActivityApi: CartonActivityApi,
    /**
     * The CartonContentApi service constructor.
     * @property {module:api/CartonContentApi}
     */
    CartonContentApi: CartonContentApi,
    /**
     * The CartonTypeApi service constructor.
     * @property {module:api/CartonTypeApi}
     */
    CartonTypeApi: CartonTypeApi,
    /**
     * The CustomerApi service constructor.
     * @property {module:api/CustomerApi}
     */
    CustomerApi: CustomerApi,
    /**
     * The EDIDocumentTypeApi service constructor.
     * @property {module:api/EDIDocumentTypeApi}
     */
    EDIDocumentTypeApi: EDIDocumentTypeApi,
    /**
     * The EmailTemplateApi service constructor.
     * @property {module:api/EmailTemplateApi}
     */
    EmailTemplateApi: EmailTemplateApi,
    /**
     * The ExternalShipmentApi service constructor.
     * @property {module:api/ExternalShipmentApi}
     */
    ExternalShipmentApi: ExternalShipmentApi,
    /**
     * The ExternalShippingSystemApi service constructor.
     * @property {module:api/ExternalShippingSystemApi}
     */
    ExternalShippingSystemApi: ExternalShippingSystemApi,
    /**
     * The FulfillmentPlanApi service constructor.
     * @property {module:api/FulfillmentPlanApi}
     */
    FulfillmentPlanApi: FulfillmentPlanApi,
    /**
     * The FulfillmentProcessApi service constructor.
     * @property {module:api/FulfillmentProcessApi}
     */
    FulfillmentProcessApi: FulfillmentProcessApi,
    /**
     * The IntegrationPartnerApi service constructor.
     * @property {module:api/IntegrationPartnerApi}
     */
    IntegrationPartnerApi: IntegrationPartnerApi,
    /**
     * The InventoryAdjustmentApi service constructor.
     * @property {module:api/InventoryAdjustmentApi}
     */
    InventoryAdjustmentApi: InventoryAdjustmentApi,
    /**
     * The InventoryDetailApi service constructor.
     * @property {module:api/InventoryDetailApi}
     */
    InventoryDetailApi: InventoryDetailApi,
    /**
     * The InventorySnapshotApi service constructor.
     * @property {module:api/InventorySnapshotApi}
     */
    InventorySnapshotApi: InventorySnapshotApi,
    /**
     * The InventoryStorageActivityApi service constructor.
     * @property {module:api/InventoryStorageActivityApi}
     */
    InventoryStorageActivityApi: InventoryStorageActivityApi,
    /**
     * The ItemApi service constructor.
     * @property {module:api/ItemApi}
     */
    ItemApi: ItemApi,
    /**
     * The ItemAccountCodeApi service constructor.
     * @property {module:api/ItemAccountCodeApi}
     */
    ItemAccountCodeApi: ItemAccountCodeApi,
    /**
     * The ItemActivityTypeApi service constructor.
     * @property {module:api/ItemActivityTypeApi}
     */
    ItemActivityTypeApi: ItemActivityTypeApi,
    /**
     * The ItemBuyerApi service constructor.
     * @property {module:api/ItemBuyerApi}
     */
    ItemBuyerApi: ItemBuyerApi,
    /**
     * The ItemCategoryApi service constructor.
     * @property {module:api/ItemCategoryApi}
     */
    ItemCategoryApi: ItemCategoryApi,
    /**
     * The ItemLowstockCodeApi service constructor.
     * @property {module:api/ItemLowstockCodeApi}
     */
    ItemLowstockCodeApi: ItemLowstockCodeApi,
    /**
     * The ItemProductCodeApi service constructor.
     * @property {module:api/ItemProductCodeApi}
     */
    ItemProductCodeApi: ItemProductCodeApi,
    /**
     * The ItemReceiptApi service constructor.
     * @property {module:api/ItemReceiptApi}
     */
    ItemReceiptApi: ItemReceiptApi,
    /**
     * The ItemReceiptActivityApi service constructor.
     * @property {module:api/ItemReceiptActivityApi}
     */
    ItemReceiptActivityApi: ItemReceiptActivityApi,
    /**
     * The ItemSectorApi service constructor.
     * @property {module:api/ItemSectorApi}
     */
    ItemSectorApi: ItemSectorApi,
    /**
     * The ItemSubCategoryApi service constructor.
     * @property {module:api/ItemSubCategoryApi}
     */
    ItemSubCategoryApi: ItemSubCategoryApi,
    /**
     * The ItemSummaryCodeApi service constructor.
     * @property {module:api/ItemSummaryCodeApi}
     */
    ItemSummaryCodeApi: ItemSummaryCodeApi,
    /**
     * The JobTimeApi service constructor.
     * @property {module:api/JobTimeApi}
     */
    JobTimeApi: JobTimeApi,
    /**
     * The JobTimeActivityApi service constructor.
     * @property {module:api/JobTimeActivityApi}
     */
    JobTimeActivityApi: JobTimeActivityApi,
    /**
     * The JobTypeApi service constructor.
     * @property {module:api/JobTypeApi}
     */
    JobTypeApi: JobTypeApi,
    /**
     * The KitApi service constructor.
     * @property {module:api/KitApi}
     */
    KitApi: KitApi,
    /**
     * The LegacyLowstockContactApi service constructor.
     * @property {module:api/LegacyLowstockContactApi}
     */
    LegacyLowstockContactApi: LegacyLowstockContactApi,
    /**
     * The LineOfBusinessApi service constructor.
     * @property {module:api/LineOfBusinessApi}
     */
    LineOfBusinessApi: LineOfBusinessApi,
    /**
     * The LocationApi service constructor.
     * @property {module:api/LocationApi}
     */
    LocationApi: LocationApi,
    /**
     * The LocationAddressSchemeApi service constructor.
     * @property {module:api/LocationAddressSchemeApi}
     */
    LocationAddressSchemeApi: LocationAddressSchemeApi,
    /**
     * The LocationBillingTypeApi service constructor.
     * @property {module:api/LocationBillingTypeApi}
     */
    LocationBillingTypeApi: LocationBillingTypeApi,
    /**
     * The LocationFootprintApi service constructor.
     * @property {module:api/LocationFootprintApi}
     */
    LocationFootprintApi: LocationFootprintApi,
    /**
     * The LoggedTimeApi service constructor.
     * @property {module:api/LoggedTimeApi}
     */
    LoggedTimeApi: LoggedTimeApi,
    /**
     * The LoggedTimeTypeApi service constructor.
     * @property {module:api/LoggedTimeTypeApi}
     */
    LoggedTimeTypeApi: LoggedTimeTypeApi,
    /**
     * The LowStockApi service constructor.
     * @property {module:api/LowStockApi}
     */
    LowStockApi: LowStockApi,
    /**
     * The ManageScheduledPlansApi service constructor.
     * @property {module:api/ManageScheduledPlansApi}
     */
    ManageScheduledPlansApi: ManageScheduledPlansApi,
    /**
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The OrderActivityApi service constructor.
     * @property {module:api/OrderActivityApi}
     */
    OrderActivityApi: OrderActivityApi,
    /**
     * The OrderInvoiceTemplateLineItemDescriptionEnumApi service constructor.
     * @property {module:api/OrderInvoiceTemplateLineItemDescriptionEnumApi}
     */
    OrderInvoiceTemplateLineItemDescriptionEnumApi: OrderInvoiceTemplateLineItemDescriptionEnumApi,
    /**
     * The OrderLineApi service constructor.
     * @property {module:api/OrderLineApi}
     */
    OrderLineApi: OrderLineApi,
    /**
     * The OrderLineActivityApi service constructor.
     * @property {module:api/OrderLineActivityApi}
     */
    OrderLineActivityApi: OrderLineActivityApi,
    /**
     * The OrderLoadProgramApi service constructor.
     * @property {module:api/OrderLoadProgramApi}
     */
    OrderLoadProgramApi: OrderLoadProgramApi,
    /**
     * The OrderSourceApi service constructor.
     * @property {module:api/OrderSourceApi}
     */
    OrderSourceApi: OrderSourceApi,
    /**
     * The OrderSourceReservationApi service constructor.
     * @property {module:api/OrderSourceReservationApi}
     */
    OrderSourceReservationApi: OrderSourceReservationApi,
    /**
     * The OverrideReturnAddressApi service constructor.
     * @property {module:api/OverrideReturnAddressApi}
     */
    OverrideReturnAddressApi: OverrideReturnAddressApi,
    /**
     * The PackingSlipTemplateLineItemDescriptionEnumApi service constructor.
     * @property {module:api/PackingSlipTemplateLineItemDescriptionEnumApi}
     */
    PackingSlipTemplateLineItemDescriptionEnumApi: PackingSlipTemplateLineItemDescriptionEnumApi,
    /**
     * The ParcelAccountApi service constructor.
     * @property {module:api/ParcelAccountApi}
     */
    ParcelAccountApi: ParcelAccountApi,
    /**
     * The PickFaceAssignmentApi service constructor.
     * @property {module:api/PickFaceAssignmentApi}
     */
    PickFaceAssignmentApi: PickFaceAssignmentApi,
    /**
     * The PredefinedCartonApi service constructor.
     * @property {module:api/PredefinedCartonApi}
     */
    PredefinedCartonApi: PredefinedCartonApi,
    /**
     * The ProductTypeApi service constructor.
     * @property {module:api/ProductTypeApi}
     */
    ProductTypeApi: ProductTypeApi,
    /**
     * The ProductionLotApi service constructor.
     * @property {module:api/ProductionLotApi}
     */
    ProductionLotApi: ProductionLotApi,
    /**
     * The QuickAdjustmentApi service constructor.
     * @property {module:api/QuickAdjustmentApi}
     */
    QuickAdjustmentApi: QuickAdjustmentApi,
    /**
     * The QuickReceiptApi service constructor.
     * @property {module:api/QuickReceiptApi}
     */
    QuickReceiptApi: QuickReceiptApi,
    /**
     * The ReceivingProcessApi service constructor.
     * @property {module:api/ReceivingProcessApi}
     */
    ReceivingProcessApi: ReceivingProcessApi,
    /**
     * The ReceivingWorksheetApi service constructor.
     * @property {module:api/ReceivingWorksheetApi}
     */
    ReceivingWorksheetApi: ReceivingWorksheetApi,
    /**
     * The ReplenishmentApi service constructor.
     * @property {module:api/ReplenishmentApi}
     */
    ReplenishmentApi: ReplenishmentApi,
    /**
     * The ReplenishmentPlanApi service constructor.
     * @property {module:api/ReplenishmentPlanApi}
     */
    ReplenishmentPlanApi: ReplenishmentPlanApi,
    /**
     * The ReplenishmentProcessApi service constructor.
     * @property {module:api/ReplenishmentProcessApi}
     */
    ReplenishmentProcessApi: ReplenishmentProcessApi,
    /**
     * The ScheduledPlanLogApi service constructor.
     * @property {module:api/ScheduledPlanLogApi}
     */
    ScheduledPlanLogApi: ScheduledPlanLogApi,
    /**
     * The ServiceTypeApi service constructor.
     * @property {module:api/ServiceTypeApi}
     */
    ServiceTypeApi: ServiceTypeApi,
    /**
     * The ShipmentApi service constructor.
     * @property {module:api/ShipmentApi}
     */
    ShipmentApi: ShipmentApi,
    /**
     * The ShoppingCartConnectionApi service constructor.
     * @property {module:api/ShoppingCartConnectionApi}
     */
    ShoppingCartConnectionApi: ShoppingCartConnectionApi,
    /**
     * The SubstitutionApi service constructor.
     * @property {module:api/SubstitutionApi}
     */
    SubstitutionApi: SubstitutionApi,
    /**
     * The SupplementApi service constructor.
     * @property {module:api/SupplementApi}
     */
    SupplementApi: SupplementApi,
    /**
     * The ThirdPartyParcelAccountApi service constructor.
     * @property {module:api/ThirdPartyParcelAccountApi}
     */
    ThirdPartyParcelAccountApi: ThirdPartyParcelAccountApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The VendorApi service constructor.
     * @property {module:api/VendorApi}
     */
    VendorApi: VendorApi,
    /**
     * The VendorComplianceSurveyApi service constructor.
     * @property {module:api/VendorComplianceSurveyApi}
     */
    VendorComplianceSurveyApi: VendorComplianceSurveyApi,
    /**
     * The WarehouseApi service constructor.
     * @property {module:api/WarehouseApi}
     */
    WarehouseApi: WarehouseApi,
    /**
     * The WarehouseDocumentApi service constructor.
     * @property {module:api/WarehouseDocumentApi}
     */
    WarehouseDocumentApi: WarehouseDocumentApi,
    /**
     * The WarehouseDocumentTypeApi service constructor.
     * @property {module:api/WarehouseDocumentTypeApi}
     */
    WarehouseDocumentTypeApi: WarehouseDocumentTypeApi,
    /**
     * The WorkApi service constructor.
     * @property {module:api/WorkApi}
     */
    WorkApi: WorkApi,
    /**
     * The WorkActivityApi service constructor.
     * @property {module:api/WorkActivityApi}
     */
    WorkActivityApi: WorkActivityApi,
    /**
     * The WorkBatchApi service constructor.
     * @property {module:api/WorkBatchApi}
     */
    WorkBatchApi: WorkBatchApi,
    /**
     * The ZoneApi service constructor.
     * @property {module:api/ZoneApi}
     */
    ZoneApi: ZoneApi
  };

  return exports;
}));
