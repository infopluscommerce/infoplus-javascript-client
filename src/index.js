(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Aisle', './model/Alert', './model/ApiResponse', './model/Asn', './model/BillOfLading', './model/BillOfLadingCarrierInfoLine', './model/BillOfLadingOrderInfoLine', './model/BillingCode', './model/BillingCodeType', './model/Building', './model/BusinessTransaction', './model/Carrier', './model/CarrierService', './model/Carton', './model/CartonContent', './model/CartonType', './model/Customer', './model/EmailTemplate', './model/ExternalShipment', './model/FulfillmentPlan', './model/FulfillmentProcess', './model/IntegrationPartner', './model/InventoryAdjustment', './model/InventoryDetail', './model/Item', './model/ItemAccountCode', './model/ItemBuyer', './model/ItemLegacyLowStockContact', './model/ItemLowStockCode', './model/ItemMajorGroup', './model/ItemProductCode', './model/ItemReceipt', './model/ItemSubGroup', './model/ItemSummaryCode', './model/JobTime', './model/JobType', './model/LineOfBusiness', './model/Location', './model/LocationAddressScheme', './model/LocationBillingType', './model/LocationFootprint', './model/LoggedTime', './model/LoggedTimeType', './model/LowStock', './model/Order', './model/OrderLine', './model/OrderLoadProgram', './model/OrderSource', './model/OrderSourceReservation', './model/OverrideReturnAddress', './model/ParcelAccount', './model/ParcelShipment', './model/PickFaceAssignment', './model/ProductType', './model/ProductionLot', './model/QuickAdjustment', './model/QuickReceipt', './model/ReceivingProcess', './model/ReceivingWorksheet', './model/ReceivingWorksheetLineItem', './model/ReceivingWorksheetPutAwayPlan', './model/Replenishment', './model/ReplenishmentPlan', './model/ReplenishmentProcess', './model/ServiceType', './model/ShoppingCartConnection', './model/ThirdPartyParcelAccount', './model/User', './model/Vendor', './model/VendorComplianceSurvey', './model/Warehouse', './model/WarehouseDocument', './model/WarehouseDocumentType', './model/Work', './model/WorkBatch', './model/Zone', './api/AisleApi', './api/AlertApi', './api/AsnApi', './api/BillOfLadingApi', './api/BillingCodeApi', './api/BillingCodeTypeApi', './api/BuildingApi', './api/BusinessTransactionApi', './api/CarrierApi', './api/CarrierServiceApi', './api/CartonApi', './api/CartonContentApi', './api/CartonTypeApi', './api/CustomerApi', './api/EmailTemplateApi', './api/ExternalShipmentApi', './api/FulfillmentPlanApi', './api/FulfillmentProcessApi', './api/IntegrationPartnerApi', './api/InventoryAdjustmentApi', './api/InventoryDetailApi', './api/ItemApi', './api/ItemAccountCodeApi', './api/ItemBuyerApi', './api/ItemLegacyLowStockContactApi', './api/ItemLowStockCodeApi', './api/ItemMajorGroupApi', './api/ItemProductCodeApi', './api/ItemReceiptApi', './api/ItemSubGroupApi', './api/ItemSummaryCodeApi', './api/JobTimeApi', './api/JobTypeApi', './api/LineOfBusinessApi', './api/LocationApi', './api/LocationAddressSchemeApi', './api/LocationBillingTypeApi', './api/LocationFootprintApi', './api/LoggedTimeApi', './api/LoggedTimeTypeApi', './api/LowStockApi', './api/OrderApi', './api/OrderLineApi', './api/OrderLoadProgramApi', './api/OrderSourceApi', './api/OrderSourceReservationApi', './api/OverrideReturnAddressApi', './api/ParcelAccountApi', './api/ParcelShipmentApi', './api/PickFaceAssignmentApi', './api/ProductTypeApi', './api/ProductionLotApi', './api/QuickAdjustmentApi', './api/QuickReceiptApi', './api/ReceivingProcessApi', './api/ReceivingWorksheetApi', './api/ReplenishmentApi', './api/ReplenishmentPlanApi', './api/ReplenishmentProcessApi', './api/ServiceTypeApi', './api/ShoppingCartConnectionApi', './api/ThirdPartyParcelAccountApi', './api/UserApi', './api/VendorApi', './api/VendorComplianceSurveyApi', './api/WarehouseApi', './api/WarehouseDocumentApi', './api/WarehouseDocumentTypeApi', './api/WorkApi', './api/WorkBatchApi', './api/ZoneApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Aisle'), require('./model/Alert'), require('./model/ApiResponse'), require('./model/Asn'), require('./model/BillOfLading'), require('./model/BillOfLadingCarrierInfoLine'), require('./model/BillOfLadingOrderInfoLine'), require('./model/BillingCode'), require('./model/BillingCodeType'), require('./model/Building'), require('./model/BusinessTransaction'), require('./model/Carrier'), require('./model/CarrierService'), require('./model/Carton'), require('./model/CartonContent'), require('./model/CartonType'), require('./model/Customer'), require('./model/EmailTemplate'), require('./model/ExternalShipment'), require('./model/FulfillmentPlan'), require('./model/FulfillmentProcess'), require('./model/IntegrationPartner'), require('./model/InventoryAdjustment'), require('./model/InventoryDetail'), require('./model/Item'), require('./model/ItemAccountCode'), require('./model/ItemBuyer'), require('./model/ItemLegacyLowStockContact'), require('./model/ItemLowStockCode'), require('./model/ItemMajorGroup'), require('./model/ItemProductCode'), require('./model/ItemReceipt'), require('./model/ItemSubGroup'), require('./model/ItemSummaryCode'), require('./model/JobTime'), require('./model/JobType'), require('./model/LineOfBusiness'), require('./model/Location'), require('./model/LocationAddressScheme'), require('./model/LocationBillingType'), require('./model/LocationFootprint'), require('./model/LoggedTime'), require('./model/LoggedTimeType'), require('./model/LowStock'), require('./model/Order'), require('./model/OrderLine'), require('./model/OrderLoadProgram'), require('./model/OrderSource'), require('./model/OrderSourceReservation'), require('./model/OverrideReturnAddress'), require('./model/ParcelAccount'), require('./model/ParcelShipment'), require('./model/PickFaceAssignment'), require('./model/ProductType'), require('./model/ProductionLot'), require('./model/QuickAdjustment'), require('./model/QuickReceipt'), require('./model/ReceivingProcess'), require('./model/ReceivingWorksheet'), require('./model/ReceivingWorksheetLineItem'), require('./model/ReceivingWorksheetPutAwayPlan'), require('./model/Replenishment'), require('./model/ReplenishmentPlan'), require('./model/ReplenishmentProcess'), require('./model/ServiceType'), require('./model/ShoppingCartConnection'), require('./model/ThirdPartyParcelAccount'), require('./model/User'), require('./model/Vendor'), require('./model/VendorComplianceSurvey'), require('./model/Warehouse'), require('./model/WarehouseDocument'), require('./model/WarehouseDocumentType'), require('./model/Work'), require('./model/WorkBatch'), require('./model/Zone'), require('./api/AisleApi'), require('./api/AlertApi'), require('./api/AsnApi'), require('./api/BillOfLadingApi'), require('./api/BillingCodeApi'), require('./api/BillingCodeTypeApi'), require('./api/BuildingApi'), require('./api/BusinessTransactionApi'), require('./api/CarrierApi'), require('./api/CarrierServiceApi'), require('./api/CartonApi'), require('./api/CartonContentApi'), require('./api/CartonTypeApi'), require('./api/CustomerApi'), require('./api/EmailTemplateApi'), require('./api/ExternalShipmentApi'), require('./api/FulfillmentPlanApi'), require('./api/FulfillmentProcessApi'), require('./api/IntegrationPartnerApi'), require('./api/InventoryAdjustmentApi'), require('./api/InventoryDetailApi'), require('./api/ItemApi'), require('./api/ItemAccountCodeApi'), require('./api/ItemBuyerApi'), require('./api/ItemLegacyLowStockContactApi'), require('./api/ItemLowStockCodeApi'), require('./api/ItemMajorGroupApi'), require('./api/ItemProductCodeApi'), require('./api/ItemReceiptApi'), require('./api/ItemSubGroupApi'), require('./api/ItemSummaryCodeApi'), require('./api/JobTimeApi'), require('./api/JobTypeApi'), require('./api/LineOfBusinessApi'), require('./api/LocationApi'), require('./api/LocationAddressSchemeApi'), require('./api/LocationBillingTypeApi'), require('./api/LocationFootprintApi'), require('./api/LoggedTimeApi'), require('./api/LoggedTimeTypeApi'), require('./api/LowStockApi'), require('./api/OrderApi'), require('./api/OrderLineApi'), require('./api/OrderLoadProgramApi'), require('./api/OrderSourceApi'), require('./api/OrderSourceReservationApi'), require('./api/OverrideReturnAddressApi'), require('./api/ParcelAccountApi'), require('./api/ParcelShipmentApi'), require('./api/PickFaceAssignmentApi'), require('./api/ProductTypeApi'), require('./api/ProductionLotApi'), require('./api/QuickAdjustmentApi'), require('./api/QuickReceiptApi'), require('./api/ReceivingProcessApi'), require('./api/ReceivingWorksheetApi'), require('./api/ReplenishmentApi'), require('./api/ReplenishmentPlanApi'), require('./api/ReplenishmentProcessApi'), require('./api/ServiceTypeApi'), require('./api/ShoppingCartConnectionApi'), require('./api/ThirdPartyParcelAccountApi'), require('./api/UserApi'), require('./api/VendorApi'), require('./api/VendorComplianceSurveyApi'), require('./api/WarehouseApi'), require('./api/WarehouseDocumentApi'), require('./api/WarehouseDocumentTypeApi'), require('./api/WorkApi'), require('./api/WorkBatchApi'), require('./api/ZoneApi'));
  }
}(function(ApiClient, Aisle, Alert, ApiResponse, Asn, BillOfLading, BillOfLadingCarrierInfoLine, BillOfLadingOrderInfoLine, BillingCode, BillingCodeType, Building, BusinessTransaction, Carrier, CarrierService, Carton, CartonContent, CartonType, Customer, EmailTemplate, ExternalShipment, FulfillmentPlan, FulfillmentProcess, IntegrationPartner, InventoryAdjustment, InventoryDetail, Item, ItemAccountCode, ItemBuyer, ItemLegacyLowStockContact, ItemLowStockCode, ItemMajorGroup, ItemProductCode, ItemReceipt, ItemSubGroup, ItemSummaryCode, JobTime, JobType, LineOfBusiness, Location, LocationAddressScheme, LocationBillingType, LocationFootprint, LoggedTime, LoggedTimeType, LowStock, Order, OrderLine, OrderLoadProgram, OrderSource, OrderSourceReservation, OverrideReturnAddress, ParcelAccount, ParcelShipment, PickFaceAssignment, ProductType, ProductionLot, QuickAdjustment, QuickReceipt, ReceivingProcess, ReceivingWorksheet, ReceivingWorksheetLineItem, ReceivingWorksheetPutAwayPlan, Replenishment, ReplenishmentPlan, ReplenishmentProcess, ServiceType, ShoppingCartConnection, ThirdPartyParcelAccount, User, Vendor, VendorComplianceSurvey, Warehouse, WarehouseDocument, WarehouseDocumentType, Work, WorkBatch, Zone, AisleApi, AlertApi, AsnApi, BillOfLadingApi, BillingCodeApi, BillingCodeTypeApi, BuildingApi, BusinessTransactionApi, CarrierApi, CarrierServiceApi, CartonApi, CartonContentApi, CartonTypeApi, CustomerApi, EmailTemplateApi, ExternalShipmentApi, FulfillmentPlanApi, FulfillmentProcessApi, IntegrationPartnerApi, InventoryAdjustmentApi, InventoryDetailApi, ItemApi, ItemAccountCodeApi, ItemBuyerApi, ItemLegacyLowStockContactApi, ItemLowStockCodeApi, ItemMajorGroupApi, ItemProductCodeApi, ItemReceiptApi, ItemSubGroupApi, ItemSummaryCodeApi, JobTimeApi, JobTypeApi, LineOfBusinessApi, LocationApi, LocationAddressSchemeApi, LocationBillingTypeApi, LocationFootprintApi, LoggedTimeApi, LoggedTimeTypeApi, LowStockApi, OrderApi, OrderLineApi, OrderLoadProgramApi, OrderSourceApi, OrderSourceReservationApi, OverrideReturnAddressApi, ParcelAccountApi, ParcelShipmentApi, PickFaceAssignmentApi, ProductTypeApi, ProductionLotApi, QuickAdjustmentApi, QuickReceiptApi, ReceivingProcessApi, ReceivingWorksheetApi, ReplenishmentApi, ReplenishmentPlanApi, ReplenishmentProcessApi, ServiceTypeApi, ShoppingCartConnectionApi, ThirdPartyParcelAccountApi, UserApi, VendorApi, VendorComplianceSurveyApi, WarehouseApi, WarehouseDocumentApi, WarehouseDocumentTypeApi, WorkApi, WorkBatchApi, ZoneApi) {
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
   * @version 1.0
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
     * The ItemBuyer model constructor.
     * @property {module:model/ItemBuyer}
     */
    ItemBuyer: ItemBuyer,
    /**
     * The ItemLegacyLowStockContact model constructor.
     * @property {module:model/ItemLegacyLowStockContact}
     */
    ItemLegacyLowStockContact: ItemLegacyLowStockContact,
    /**
     * The ItemLowStockCode model constructor.
     * @property {module:model/ItemLowStockCode}
     */
    ItemLowStockCode: ItemLowStockCode,
    /**
     * The ItemMajorGroup model constructor.
     * @property {module:model/ItemMajorGroup}
     */
    ItemMajorGroup: ItemMajorGroup,
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
     * The ItemSubGroup model constructor.
     * @property {module:model/ItemSubGroup}
     */
    ItemSubGroup: ItemSubGroup,
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
     * The JobType model constructor.
     * @property {module:model/JobType}
     */
    JobType: JobType,
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
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderLine model constructor.
     * @property {module:model/OrderLine}
     */
    OrderLine: OrderLine,
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
     * The ParcelAccount model constructor.
     * @property {module:model/ParcelAccount}
     */
    ParcelAccount: ParcelAccount,
    /**
     * The ParcelShipment model constructor.
     * @property {module:model/ParcelShipment}
     */
    ParcelShipment: ParcelShipment,
    /**
     * The PickFaceAssignment model constructor.
     * @property {module:model/PickFaceAssignment}
     */
    PickFaceAssignment: PickFaceAssignment,
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
     * The ServiceType model constructor.
     * @property {module:model/ServiceType}
     */
    ServiceType: ServiceType,
    /**
     * The ShoppingCartConnection model constructor.
     * @property {module:model/ShoppingCartConnection}
     */
    ShoppingCartConnection: ShoppingCartConnection,
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
     * The ItemBuyerApi service constructor.
     * @property {module:api/ItemBuyerApi}
     */
    ItemBuyerApi: ItemBuyerApi,
    /**
     * The ItemLegacyLowStockContactApi service constructor.
     * @property {module:api/ItemLegacyLowStockContactApi}
     */
    ItemLegacyLowStockContactApi: ItemLegacyLowStockContactApi,
    /**
     * The ItemLowStockCodeApi service constructor.
     * @property {module:api/ItemLowStockCodeApi}
     */
    ItemLowStockCodeApi: ItemLowStockCodeApi,
    /**
     * The ItemMajorGroupApi service constructor.
     * @property {module:api/ItemMajorGroupApi}
     */
    ItemMajorGroupApi: ItemMajorGroupApi,
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
     * The ItemSubGroupApi service constructor.
     * @property {module:api/ItemSubGroupApi}
     */
    ItemSubGroupApi: ItemSubGroupApi,
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
     * The JobTypeApi service constructor.
     * @property {module:api/JobTypeApi}
     */
    JobTypeApi: JobTypeApi,
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
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The OrderLineApi service constructor.
     * @property {module:api/OrderLineApi}
     */
    OrderLineApi: OrderLineApi,
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
     * The ParcelAccountApi service constructor.
     * @property {module:api/ParcelAccountApi}
     */
    ParcelAccountApi: ParcelAccountApi,
    /**
     * The ParcelShipmentApi service constructor.
     * @property {module:api/ParcelShipmentApi}
     */
    ParcelShipmentApi: ParcelShipmentApi,
    /**
     * The PickFaceAssignmentApi service constructor.
     * @property {module:api/PickFaceAssignmentApi}
     */
    PickFaceAssignmentApi: PickFaceAssignmentApi,
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
     * The ServiceTypeApi service constructor.
     * @property {module:api/ServiceTypeApi}
     */
    ServiceTypeApi: ServiceTypeApi,
    /**
     * The ShoppingCartConnectionApi service constructor.
     * @property {module:api/ShoppingCartConnectionApi}
     */
    ShoppingCartConnectionApi: ShoppingCartConnectionApi,
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
