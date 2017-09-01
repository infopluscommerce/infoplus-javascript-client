(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WorkActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WorkActivity model module.
   * @module model/WorkActivity
   * @version beta
   */

  /**
   * Constructs a new <code>WorkActivity</code>.
   * @alias module:model/WorkActivity
   * @class
   * @param lobId
   * @param userId
   * @param email
   * @param type
   * @param typeName
   * @param status
   * @param statusName
   * @param priorityCode
   * @param sourceWarehouseId
   * @param sourceWarehouseName
   * @param sourceLocation
   * @param sourceBuildingId
   * @param sourceBuildingName
   * @param sourceZoneName
   * @param sourceAisleAddress
   * @param sourceOriginName
   * @param sourceBillingTypeId
   * @param sourceBillingTypeName
   * @param sourceBehaviorType
   * @param sourceBehaviorTypeName
   * @param sourceFootprintId
   * @param sourceFootprintName
   * @param sourceAddressSchemeName
   * @param sourceOnline
   * @param sourceAllowItemMixing
   * @param destinationWarehouseId
   * @param destinationWarehouseName
   * @param destinationLocation
   * @param destinationBuildingId
   * @param destinationBuildingName
   * @param destinationZoneName
   * @param destinationAisleAddress
   * @param destinationOriginName
   * @param destinationBillingTypeId
   * @param destinationBillingTypeName
   * @param destinationBehaviorType
   * @param destinationBehaviorTypeName
   * @param destinationFootprintId
   * @param destinationFootprintName
   * @param destinationAddressSchemeName
   * @param destinationOnline
   * @param destinationAllowItemMixing
   * @param sku
   * @param itemDescription
   * @param unitCode
   * @param wrapCode
   * @param unitsPerWrap
   * @param classRestriction
   * @param maxCycle
   * @param maxInterim
   * @param seasonalItem
   * @param secure
   * @param itemStatus
   * @param qualityControlIndicator
   * @param productCodeFlag
   * @param chargeCode
   * @param serialCode
   * @param backorder
   * @param majorGroupId
   * @param subGroupId
   * @param criticalAmount
   */
  var exports = function(lobId, userId, email, type, typeName, status, statusName, priorityCode, sourceWarehouseId, sourceWarehouseName, sourceLocation, sourceBuildingId, sourceBuildingName, sourceZoneName, sourceAisleAddress, sourceOriginName, sourceBillingTypeId, sourceBillingTypeName, sourceBehaviorType, sourceBehaviorTypeName, sourceFootprintId, sourceFootprintName, sourceAddressSchemeName, sourceOnline, sourceAllowItemMixing, destinationWarehouseId, destinationWarehouseName, destinationLocation, destinationBuildingId, destinationBuildingName, destinationZoneName, destinationAisleAddress, destinationOriginName, destinationBillingTypeId, destinationBillingTypeName, destinationBehaviorType, destinationBehaviorTypeName, destinationFootprintId, destinationFootprintName, destinationAddressSchemeName, destinationOnline, destinationAllowItemMixing, sku, itemDescription, unitCode, wrapCode, unitsPerWrap, classRestriction, maxCycle, maxInterim, seasonalItem, secure, itemStatus, qualityControlIndicator, productCodeFlag, chargeCode, serialCode, backorder, majorGroupId, subGroupId, criticalAmount) {



    this['lobId'] = lobId;


    this['userId'] = userId;
    this['email'] = email;
    this['type'] = type;
    this['typeName'] = typeName;
    this['status'] = status;
    this['statusName'] = statusName;


    this['priorityCode'] = priorityCode;

    this['sourceWarehouseId'] = sourceWarehouseId;
    this['sourceWarehouseName'] = sourceWarehouseName;
    this['sourceLocation'] = sourceLocation;
    this['sourceBuildingId'] = sourceBuildingId;
    this['sourceBuildingName'] = sourceBuildingName;

    this['sourceZoneName'] = sourceZoneName;

    this['sourceAisleAddress'] = sourceAisleAddress;

    this['sourceOriginName'] = sourceOriginName;
    this['sourceBillingTypeId'] = sourceBillingTypeId;
    this['sourceBillingTypeName'] = sourceBillingTypeName;
    this['sourceBehaviorType'] = sourceBehaviorType;
    this['sourceBehaviorTypeName'] = sourceBehaviorTypeName;
    this['sourceFootprintId'] = sourceFootprintId;
    this['sourceFootprintName'] = sourceFootprintName;




    this['sourceAddressSchemeName'] = sourceAddressSchemeName;



    this['sourceOnline'] = sourceOnline;


    this['sourceAllowItemMixing'] = sourceAllowItemMixing;
    this['destinationWarehouseId'] = destinationWarehouseId;
    this['destinationWarehouseName'] = destinationWarehouseName;
    this['destinationLocation'] = destinationLocation;
    this['destinationBuildingId'] = destinationBuildingId;
    this['destinationBuildingName'] = destinationBuildingName;

    this['destinationZoneName'] = destinationZoneName;

    this['destinationAisleAddress'] = destinationAisleAddress;

    this['destinationOriginName'] = destinationOriginName;
    this['destinationBillingTypeId'] = destinationBillingTypeId;
    this['destinationBillingTypeName'] = destinationBillingTypeName;
    this['destinationBehaviorType'] = destinationBehaviorType;
    this['destinationBehaviorTypeName'] = destinationBehaviorTypeName;
    this['destinationFootprintId'] = destinationFootprintId;
    this['destinationFootprintName'] = destinationFootprintName;




    this['destinationAddressSchemeName'] = destinationAddressSchemeName;



    this['destinationOnline'] = destinationOnline;


    this['destinationAllowItemMixing'] = destinationAllowItemMixing;




    this['sku'] = sku;

    this['itemDescription'] = itemDescription;

    this['unitCode'] = unitCode;
    this['wrapCode'] = wrapCode;
    this['unitsPerWrap'] = unitsPerWrap;




    this['classRestriction'] = classRestriction;
    this['maxCycle'] = maxCycle;
    this['maxInterim'] = maxInterim;
    this['seasonalItem'] = seasonalItem;
    this['secure'] = secure;

    this['itemStatus'] = itemStatus;


    this['qualityControlIndicator'] = qualityControlIndicator;

    this['productCodeFlag'] = productCodeFlag;
    this['chargeCode'] = chargeCode;


    this['serialCode'] = serialCode;

    this['backorder'] = backorder;






    this['majorGroupId'] = majorGroupId;
    this['subGroupId'] = subGroupId;







    this['criticalAmount'] = criticalAmount;































  };

  /**
   * Constructs a <code>WorkActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkActivity} obj Optional instance to populate.
   * @return {module:model/WorkActivity} The populated <code>WorkActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('importedRecordId')) {
        obj['importedRecordId'] = ApiClient.convertToType(data['importedRecordId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('typeName')) {
        obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusName')) {
        obj['statusName'] = ApiClient.convertToType(data['statusName'], 'String');
      }
      if (data.hasOwnProperty('workBatchId')) {
        obj['workBatchId'] = ApiClient.convertToType(data['workBatchId'], 'Integer');
      }
      if (data.hasOwnProperty('workParentId')) {
        obj['workParentId'] = ApiClient.convertToType(data['workParentId'], 'Integer');
      }
      if (data.hasOwnProperty('priorityCode')) {
        obj['priorityCode'] = ApiClient.convertToType(data['priorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('foreignId')) {
        obj['foreignId'] = ApiClient.convertToType(data['foreignId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceWarehouseId')) {
        obj['sourceWarehouseId'] = ApiClient.convertToType(data['sourceWarehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceWarehouseName')) {
        obj['sourceWarehouseName'] = ApiClient.convertToType(data['sourceWarehouseName'], 'String');
      }
      if (data.hasOwnProperty('sourceLocation')) {
        obj['sourceLocation'] = ApiClient.convertToType(data['sourceLocation'], 'String');
      }
      if (data.hasOwnProperty('sourceBuildingId')) {
        obj['sourceBuildingId'] = ApiClient.convertToType(data['sourceBuildingId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceBuildingName')) {
        obj['sourceBuildingName'] = ApiClient.convertToType(data['sourceBuildingName'], 'String');
      }
      if (data.hasOwnProperty('sourceZoneId')) {
        obj['sourceZoneId'] = ApiClient.convertToType(data['sourceZoneId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceZoneName')) {
        obj['sourceZoneName'] = ApiClient.convertToType(data['sourceZoneName'], 'String');
      }
      if (data.hasOwnProperty('sourceAisleId')) {
        obj['sourceAisleId'] = ApiClient.convertToType(data['sourceAisleId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceAisleAddress')) {
        obj['sourceAisleAddress'] = ApiClient.convertToType(data['sourceAisleAddress'], 'String');
      }
      if (data.hasOwnProperty('sourceOrigin')) {
        obj['sourceOrigin'] = ApiClient.convertToType(data['sourceOrigin'], 'Integer');
      }
      if (data.hasOwnProperty('sourceOriginName')) {
        obj['sourceOriginName'] = ApiClient.convertToType(data['sourceOriginName'], 'String');
      }
      if (data.hasOwnProperty('sourceBillingTypeId')) {
        obj['sourceBillingTypeId'] = ApiClient.convertToType(data['sourceBillingTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceBillingTypeName')) {
        obj['sourceBillingTypeName'] = ApiClient.convertToType(data['sourceBillingTypeName'], 'String');
      }
      if (data.hasOwnProperty('sourceBehaviorType')) {
        obj['sourceBehaviorType'] = ApiClient.convertToType(data['sourceBehaviorType'], 'String');
      }
      if (data.hasOwnProperty('sourceBehaviorTypeName')) {
        obj['sourceBehaviorTypeName'] = ApiClient.convertToType(data['sourceBehaviorTypeName'], 'String');
      }
      if (data.hasOwnProperty('sourceFootprintId')) {
        obj['sourceFootprintId'] = ApiClient.convertToType(data['sourceFootprintId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceFootprintName')) {
        obj['sourceFootprintName'] = ApiClient.convertToType(data['sourceFootprintName'], 'String');
      }
      if (data.hasOwnProperty('sourceFootprintHeight')) {
        obj['sourceFootprintHeight'] = ApiClient.convertToType(data['sourceFootprintHeight'], 'Integer');
      }
      if (data.hasOwnProperty('sourceFootprintWidth')) {
        obj['sourceFootprintWidth'] = ApiClient.convertToType(data['sourceFootprintWidth'], 'Integer');
      }
      if (data.hasOwnProperty('sourceFootprintDepth')) {
        obj['sourceFootprintDepth'] = ApiClient.convertToType(data['sourceFootprintDepth'], 'Integer');
      }
      if (data.hasOwnProperty('sourceAddressSchemeId')) {
        obj['sourceAddressSchemeId'] = ApiClient.convertToType(data['sourceAddressSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('sourceAddressSchemeName')) {
        obj['sourceAddressSchemeName'] = ApiClient.convertToType(data['sourceAddressSchemeName'], 'String');
      }
      if (data.hasOwnProperty('sourceLevel')) {
        obj['sourceLevel'] = ApiClient.convertToType(data['sourceLevel'], 'Integer');
      }
      if (data.hasOwnProperty('sourceBay')) {
        obj['sourceBay'] = ApiClient.convertToType(data['sourceBay'], 'Integer');
      }
      if (data.hasOwnProperty('sourceNumber')) {
        obj['sourceNumber'] = ApiClient.convertToType(data['sourceNumber'], 'Integer');
      }
      if (data.hasOwnProperty('sourceOnline')) {
        obj['sourceOnline'] = ApiClient.convertToType(data['sourceOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('sourcePriorityCode')) {
        obj['sourcePriorityCode'] = ApiClient.convertToType(data['sourcePriorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('sourceCost')) {
        obj['sourceCost'] = ApiClient.convertToType(data['sourceCost'], 'Integer');
      }
      if (data.hasOwnProperty('sourceAllowItemMixing')) {
        obj['sourceAllowItemMixing'] = ApiClient.convertToType(data['sourceAllowItemMixing'], 'Boolean');
      }
      if (data.hasOwnProperty('destinationWarehouseId')) {
        obj['destinationWarehouseId'] = ApiClient.convertToType(data['destinationWarehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationWarehouseName')) {
        obj['destinationWarehouseName'] = ApiClient.convertToType(data['destinationWarehouseName'], 'String');
      }
      if (data.hasOwnProperty('destinationLocation')) {
        obj['destinationLocation'] = ApiClient.convertToType(data['destinationLocation'], 'String');
      }
      if (data.hasOwnProperty('destinationBuildingId')) {
        obj['destinationBuildingId'] = ApiClient.convertToType(data['destinationBuildingId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationBuildingName')) {
        obj['destinationBuildingName'] = ApiClient.convertToType(data['destinationBuildingName'], 'String');
      }
      if (data.hasOwnProperty('destinationZoneId')) {
        obj['destinationZoneId'] = ApiClient.convertToType(data['destinationZoneId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationZoneName')) {
        obj['destinationZoneName'] = ApiClient.convertToType(data['destinationZoneName'], 'String');
      }
      if (data.hasOwnProperty('destinationAisleId')) {
        obj['destinationAisleId'] = ApiClient.convertToType(data['destinationAisleId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationAisleAddress')) {
        obj['destinationAisleAddress'] = ApiClient.convertToType(data['destinationAisleAddress'], 'String');
      }
      if (data.hasOwnProperty('destinationOrigin')) {
        obj['destinationOrigin'] = ApiClient.convertToType(data['destinationOrigin'], 'Integer');
      }
      if (data.hasOwnProperty('destinationOriginName')) {
        obj['destinationOriginName'] = ApiClient.convertToType(data['destinationOriginName'], 'String');
      }
      if (data.hasOwnProperty('destinationBillingTypeId')) {
        obj['destinationBillingTypeId'] = ApiClient.convertToType(data['destinationBillingTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationBillingTypeName')) {
        obj['destinationBillingTypeName'] = ApiClient.convertToType(data['destinationBillingTypeName'], 'String');
      }
      if (data.hasOwnProperty('destinationBehaviorType')) {
        obj['destinationBehaviorType'] = ApiClient.convertToType(data['destinationBehaviorType'], 'String');
      }
      if (data.hasOwnProperty('destinationBehaviorTypeName')) {
        obj['destinationBehaviorTypeName'] = ApiClient.convertToType(data['destinationBehaviorTypeName'], 'String');
      }
      if (data.hasOwnProperty('destinationFootprintId')) {
        obj['destinationFootprintId'] = ApiClient.convertToType(data['destinationFootprintId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationFootprintName')) {
        obj['destinationFootprintName'] = ApiClient.convertToType(data['destinationFootprintName'], 'String');
      }
      if (data.hasOwnProperty('destinationFootprintHeight')) {
        obj['destinationFootprintHeight'] = ApiClient.convertToType(data['destinationFootprintHeight'], 'Integer');
      }
      if (data.hasOwnProperty('destinationFootprintWidth')) {
        obj['destinationFootprintWidth'] = ApiClient.convertToType(data['destinationFootprintWidth'], 'Integer');
      }
      if (data.hasOwnProperty('destinationFootprintDepth')) {
        obj['destinationFootprintDepth'] = ApiClient.convertToType(data['destinationFootprintDepth'], 'Integer');
      }
      if (data.hasOwnProperty('destinationAddressSchemeId')) {
        obj['destinationAddressSchemeId'] = ApiClient.convertToType(data['destinationAddressSchemeId'], 'Integer');
      }
      if (data.hasOwnProperty('destinationAddressSchemeName')) {
        obj['destinationAddressSchemeName'] = ApiClient.convertToType(data['destinationAddressSchemeName'], 'String');
      }
      if (data.hasOwnProperty('destinationLevel')) {
        obj['destinationLevel'] = ApiClient.convertToType(data['destinationLevel'], 'Integer');
      }
      if (data.hasOwnProperty('destinationBay')) {
        obj['destinationBay'] = ApiClient.convertToType(data['destinationBay'], 'Integer');
      }
      if (data.hasOwnProperty('destinationNumber')) {
        obj['destinationNumber'] = ApiClient.convertToType(data['destinationNumber'], 'Integer');
      }
      if (data.hasOwnProperty('destinationOnline')) {
        obj['destinationOnline'] = ApiClient.convertToType(data['destinationOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('destinationPriorityCode')) {
        obj['destinationPriorityCode'] = ApiClient.convertToType(data['destinationPriorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('destinationCost')) {
        obj['destinationCost'] = ApiClient.convertToType(data['destinationCost'], 'Integer');
      }
      if (data.hasOwnProperty('destinationAllowItemMixing')) {
        obj['destinationAllowItemMixing'] = ApiClient.convertToType(data['destinationAllowItemMixing'], 'Boolean');
      }
      if (data.hasOwnProperty('workCreateDate')) {
        obj['workCreateDate'] = ApiClient.convertToType(data['workCreateDate'], 'Date');
      }
      if (data.hasOwnProperty('workModifyDate')) {
        obj['workModifyDate'] = ApiClient.convertToType(data['workModifyDate'], 'Date');
      }
      if (data.hasOwnProperty('masterRef')) {
        obj['masterRef'] = ApiClient.convertToType(data['masterRef'], 'Integer');
      }
      if (data.hasOwnProperty('weightPerWrap')) {
        obj['weightPerWrap'] = ApiClient.convertToType(data['weightPerWrap'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('numericSortOrder')) {
        obj['numericSortOrder'] = ApiClient.convertToType(data['numericSortOrder'], 'Integer');
      }
      if (data.hasOwnProperty('itemDescription')) {
        obj['itemDescription'] = ApiClient.convertToType(data['itemDescription'], 'String');
      }
      if (data.hasOwnProperty('additionalDescription')) {
        obj['additionalDescription'] = ApiClient.convertToType(data['additionalDescription'], 'String');
      }
      if (data.hasOwnProperty('unitCode')) {
        obj['unitCode'] = ApiClient.convertToType(data['unitCode'], 'String');
      }
      if (data.hasOwnProperty('wrapCode')) {
        obj['wrapCode'] = ApiClient.convertToType(data['wrapCode'], 'String');
      }
      if (data.hasOwnProperty('unitsPerWrap')) {
        obj['unitsPerWrap'] = ApiClient.convertToType(data['unitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfWraps')) {
        obj['numberOfWraps'] = ApiClient.convertToType(data['numberOfWraps'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfCases')) {
        obj['numberOfCases'] = ApiClient.convertToType(data['numberOfCases'], 'Integer');
      }
      if (data.hasOwnProperty('pickTouches')) {
        obj['pickTouches'] = ApiClient.convertToType(data['pickTouches'], 'Integer');
      }
      if (data.hasOwnProperty('classRestriction')) {
        obj['classRestriction'] = ApiClient.convertToType(data['classRestriction'], 'String');
      }
      if (data.hasOwnProperty('maxCycle')) {
        obj['maxCycle'] = ApiClient.convertToType(data['maxCycle'], 'Integer');
      }
      if (data.hasOwnProperty('maxInterim')) {
        obj['maxInterim'] = ApiClient.convertToType(data['maxInterim'], 'Integer');
      }
      if (data.hasOwnProperty('seasonalItem')) {
        obj['seasonalItem'] = ApiClient.convertToType(data['seasonalItem'], 'String');
      }
      if (data.hasOwnProperty('secure')) {
        obj['secure'] = ApiClient.convertToType(data['secure'], 'String');
      }
      if (data.hasOwnProperty('productType')) {
        obj['productType'] = ApiClient.convertToType(data['productType'], 'Integer');
      }
      if (data.hasOwnProperty('itemStatus')) {
        obj['itemStatus'] = ApiClient.convertToType(data['itemStatus'], 'String');
      }
      if (data.hasOwnProperty('overallLeadTime')) {
        obj['overallLeadTime'] = ApiClient.convertToType(data['overallLeadTime'], 'Integer');
      }
      if (data.hasOwnProperty('overallFixedReorderPoint')) {
        obj['overallFixedReorderPoint'] = ApiClient.convertToType(data['overallFixedReorderPoint'], 'Integer');
      }
      if (data.hasOwnProperty('qualityControlIndicator')) {
        obj['qualityControlIndicator'] = ApiClient.convertToType(data['qualityControlIndicator'], 'String');
      }
      if (data.hasOwnProperty('lotControlFlag')) {
        obj['lotControlFlag'] = ApiClient.convertToType(data['lotControlFlag'], 'String');
      }
      if (data.hasOwnProperty('productCodeFlag')) {
        obj['productCodeFlag'] = ApiClient.convertToType(data['productCodeFlag'], 'String');
      }
      if (data.hasOwnProperty('chargeCode')) {
        obj['chargeCode'] = ApiClient.convertToType(data['chargeCode'], 'String');
      }
      if (data.hasOwnProperty('podRevDate')) {
        obj['podRevDate'] = ApiClient.convertToType(data['podRevDate'], 'String');
      }
      if (data.hasOwnProperty('podOrderSuffix')) {
        obj['podOrderSuffix'] = ApiClient.convertToType(data['podOrderSuffix'], 'Integer');
      }
      if (data.hasOwnProperty('serialCode')) {
        obj['serialCode'] = ApiClient.convertToType(data['serialCode'], 'String');
      }
      if (data.hasOwnProperty('assetCode')) {
        obj['assetCode'] = ApiClient.convertToType(data['assetCode'], 'String');
      }
      if (data.hasOwnProperty('backorder')) {
        obj['backorder'] = ApiClient.convertToType(data['backorder'], 'String');
      }
      if (data.hasOwnProperty('absoluteMax')) {
        obj['absoluteMax'] = ApiClient.convertToType(data['absoluteMax'], 'String');
      }
      if (data.hasOwnProperty('accountCodeId')) {
        obj['accountCodeId'] = ApiClient.convertToType(data['accountCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('summaryCodeId')) {
        obj['summaryCodeId'] = ApiClient.convertToType(data['summaryCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('lowStockContactId')) {
        obj['lowStockContactId'] = ApiClient.convertToType(data['lowStockContactId'], 'Integer');
      }
      if (data.hasOwnProperty('legacyLowLevelContactId')) {
        obj['legacyLowLevelContactId'] = ApiClient.convertToType(data['legacyLowLevelContactId'], 'Integer');
      }
      if (data.hasOwnProperty('lowStockCodeId')) {
        obj['lowStockCodeId'] = ApiClient.convertToType(data['lowStockCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('majorGroupId')) {
        obj['majorGroupId'] = ApiClient.convertToType(data['majorGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('subGroupId')) {
        obj['subGroupId'] = ApiClient.convertToType(data['subGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('productCodeId')) {
        obj['productCodeId'] = ApiClient.convertToType(data['productCodeId'], 'Integer');
      }
      if (data.hasOwnProperty('buyerId')) {
        obj['buyerId'] = ApiClient.convertToType(data['buyerId'], 'Integer');
      }
      if (data.hasOwnProperty('vendorSKU')) {
        obj['vendorSKU'] = ApiClient.convertToType(data['vendorSKU'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('packingSlipDescription')) {
        obj['packingSlipDescription'] = ApiClient.convertToType(data['packingSlipDescription'], 'String');
      }
      if (data.hasOwnProperty('commodityCode')) {
        obj['commodityCode'] = ApiClient.convertToType(data['commodityCode'], 'String');
      }
      if (data.hasOwnProperty('compCode')) {
        obj['compCode'] = ApiClient.convertToType(data['compCode'], 'Integer');
      }
      if (data.hasOwnProperty('criticalAmount')) {
        obj['criticalAmount'] = ApiClient.convertToType(data['criticalAmount'], 'Integer');
      }
      if (data.hasOwnProperty('listPrice')) {
        obj['listPrice'] = ApiClient.convertToType(data['listPrice'], 'Number');
      }
      if (data.hasOwnProperty('outsideVendor')) {
        obj['outsideVendor'] = ApiClient.convertToType(data['outsideVendor'], 'Integer');
      }
      if (data.hasOwnProperty('pickNo')) {
        obj['pickNo'] = ApiClient.convertToType(data['pickNo'], 'String');
      }
      if (data.hasOwnProperty('requiresProductionLot')) {
        obj['requiresProductionLot'] = ApiClient.convertToType(data['requiresProductionLot'], 'String');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('voidDate')) {
        obj['voidDate'] = ApiClient.convertToType(data['voidDate'], 'Date');
      }
      if (data.hasOwnProperty('extrinsicText1')) {
        obj['extrinsicText1'] = ApiClient.convertToType(data['extrinsicText1'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText2')) {
        obj['extrinsicText2'] = ApiClient.convertToType(data['extrinsicText2'], 'String');
      }
      if (data.hasOwnProperty('extrinsicText3')) {
        obj['extrinsicText3'] = ApiClient.convertToType(data['extrinsicText3'], 'String');
      }
      if (data.hasOwnProperty('extrinsicNumber1')) {
        obj['extrinsicNumber1'] = ApiClient.convertToType(data['extrinsicNumber1'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicNumber2')) {
        obj['extrinsicNumber2'] = ApiClient.convertToType(data['extrinsicNumber2'], 'Integer');
      }
      if (data.hasOwnProperty('extrinsicDecimal1')) {
        obj['extrinsicDecimal1'] = ApiClient.convertToType(data['extrinsicDecimal1'], 'Number');
      }
      if (data.hasOwnProperty('extrinsicDecimal2')) {
        obj['extrinsicDecimal2'] = ApiClient.convertToType(data['extrinsicDecimal2'], 'Number');
      }
      if (data.hasOwnProperty('casebreakEnabled')) {
        obj['casebreakEnabled'] = ApiClient.convertToType(data['casebreakEnabled'], 'String');
      }
      if (data.hasOwnProperty('alcoholTypeId')) {
        obj['alcoholTypeId'] = ApiClient.convertToType(data['alcoholTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholTypeName')) {
        obj['alcoholTypeName'] = ApiClient.convertToType(data['alcoholTypeName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContent')) {
        obj['alcoholContent'] = ApiClient.convertToType(data['alcoholContent'], 'Number');
      }
      if (data.hasOwnProperty('alcoholContainerId')) {
        obj['alcoholContainerId'] = ApiClient.convertToType(data['alcoholContainerId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholContainerName')) {
        obj['alcoholContainerName'] = ApiClient.convertToType(data['alcoholContainerName'], 'String');
      }
      if (data.hasOwnProperty('alcoholContainerVolume')) {
        obj['alcoholContainerVolume'] = ApiClient.convertToType(data['alcoholContainerVolume'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholVintageYear')) {
        obj['alcoholVintageYear'] = ApiClient.convertToType(data['alcoholVintageYear'], 'String');
      }
      if (data.hasOwnProperty('alcoholCountryId')) {
        obj['alcoholCountryId'] = ApiClient.convertToType(data['alcoholCountryId'], 'Integer');
      }
      if (data.hasOwnProperty('alcoholCountryName')) {
        obj['alcoholCountryName'] = ApiClient.convertToType(data['alcoholCountryName'], 'String');
      }
      if (data.hasOwnProperty('alcoholState')) {
        obj['alcoholState'] = ApiClient.convertToType(data['alcoholState'], 'String');
      }
      if (data.hasOwnProperty('alcoholRegion')) {
        obj['alcoholRegion'] = ApiClient.convertToType(data['alcoholRegion'], 'String');
      }
      if (data.hasOwnProperty('alcoholBrand')) {
        obj['alcoholBrand'] = ApiClient.convertToType(data['alcoholBrand'], 'String');
      }
      if (data.hasOwnProperty('alcoholUPCCode')) {
        obj['alcoholUPCCode'] = ApiClient.convertToType(data['alcoholUPCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholNABCACode')) {
        obj['alcoholNABCACode'] = ApiClient.convertToType(data['alcoholNABCACode'], 'String');
      }
      if (data.hasOwnProperty('alcoholUNIMERCCode')) {
        obj['alcoholUNIMERCCode'] = ApiClient.convertToType(data['alcoholUNIMERCCode'], 'String');
      }
      if (data.hasOwnProperty('alcoholSCCCode')) {
        obj['alcoholSCCCode'] = ApiClient.convertToType(data['alcoholSCCCode'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} importedRecordId
   */
  exports.prototype['importedRecordId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * @member {String} typeName
   */
  exports.prototype['typeName'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {String} statusName
   */
  exports.prototype['statusName'] = undefined;

  /**
   * @member {Integer} workBatchId
   */
  exports.prototype['workBatchId'] = undefined;

  /**
   * @member {Integer} workParentId
   */
  exports.prototype['workParentId'] = undefined;

  /**
   * @member {Integer} priorityCode
   */
  exports.prototype['priorityCode'] = undefined;

  /**
   * @member {Integer} foreignId
   */
  exports.prototype['foreignId'] = undefined;

  /**
   * @member {Integer} sourceWarehouseId
   */
  exports.prototype['sourceWarehouseId'] = undefined;

  /**
   * @member {String} sourceWarehouseName
   */
  exports.prototype['sourceWarehouseName'] = undefined;

  /**
   * @member {String} sourceLocation
   */
  exports.prototype['sourceLocation'] = undefined;

  /**
   * @member {Integer} sourceBuildingId
   */
  exports.prototype['sourceBuildingId'] = undefined;

  /**
   * @member {String} sourceBuildingName
   */
  exports.prototype['sourceBuildingName'] = undefined;

  /**
   * @member {Integer} sourceZoneId
   */
  exports.prototype['sourceZoneId'] = undefined;

  /**
   * @member {String} sourceZoneName
   */
  exports.prototype['sourceZoneName'] = undefined;

  /**
   * @member {Integer} sourceAisleId
   */
  exports.prototype['sourceAisleId'] = undefined;

  /**
   * @member {String} sourceAisleAddress
   */
  exports.prototype['sourceAisleAddress'] = undefined;

  /**
   * @member {Integer} sourceOrigin
   */
  exports.prototype['sourceOrigin'] = undefined;

  /**
   * @member {String} sourceOriginName
   */
  exports.prototype['sourceOriginName'] = undefined;

  /**
   * @member {Integer} sourceBillingTypeId
   */
  exports.prototype['sourceBillingTypeId'] = undefined;

  /**
   * @member {String} sourceBillingTypeName
   */
  exports.prototype['sourceBillingTypeName'] = undefined;

  /**
   * @member {String} sourceBehaviorType
   */
  exports.prototype['sourceBehaviorType'] = undefined;

  /**
   * @member {String} sourceBehaviorTypeName
   */
  exports.prototype['sourceBehaviorTypeName'] = undefined;

  /**
   * @member {Integer} sourceFootprintId
   */
  exports.prototype['sourceFootprintId'] = undefined;

  /**
   * @member {String} sourceFootprintName
   */
  exports.prototype['sourceFootprintName'] = undefined;

  /**
   * @member {Integer} sourceFootprintHeight
   */
  exports.prototype['sourceFootprintHeight'] = undefined;

  /**
   * @member {Integer} sourceFootprintWidth
   */
  exports.prototype['sourceFootprintWidth'] = undefined;

  /**
   * @member {Integer} sourceFootprintDepth
   */
  exports.prototype['sourceFootprintDepth'] = undefined;

  /**
   * @member {Integer} sourceAddressSchemeId
   */
  exports.prototype['sourceAddressSchemeId'] = undefined;

  /**
   * @member {String} sourceAddressSchemeName
   */
  exports.prototype['sourceAddressSchemeName'] = undefined;

  /**
   * @member {Integer} sourceLevel
   */
  exports.prototype['sourceLevel'] = undefined;

  /**
   * @member {Integer} sourceBay
   */
  exports.prototype['sourceBay'] = undefined;

  /**
   * @member {Integer} sourceNumber
   */
  exports.prototype['sourceNumber'] = undefined;

  /**
   * @member {Boolean} sourceOnline
   * @default false
   */
  exports.prototype['sourceOnline'] = false;

  /**
   * @member {Integer} sourcePriorityCode
   */
  exports.prototype['sourcePriorityCode'] = undefined;

  /**
   * @member {Integer} sourceCost
   */
  exports.prototype['sourceCost'] = undefined;

  /**
   * @member {Boolean} sourceAllowItemMixing
   * @default false
   */
  exports.prototype['sourceAllowItemMixing'] = false;

  /**
   * @member {Integer} destinationWarehouseId
   */
  exports.prototype['destinationWarehouseId'] = undefined;

  /**
   * @member {String} destinationWarehouseName
   */
  exports.prototype['destinationWarehouseName'] = undefined;

  /**
   * @member {String} destinationLocation
   */
  exports.prototype['destinationLocation'] = undefined;

  /**
   * @member {Integer} destinationBuildingId
   */
  exports.prototype['destinationBuildingId'] = undefined;

  /**
   * @member {String} destinationBuildingName
   */
  exports.prototype['destinationBuildingName'] = undefined;

  /**
   * @member {Integer} destinationZoneId
   */
  exports.prototype['destinationZoneId'] = undefined;

  /**
   * @member {String} destinationZoneName
   */
  exports.prototype['destinationZoneName'] = undefined;

  /**
   * @member {Integer} destinationAisleId
   */
  exports.prototype['destinationAisleId'] = undefined;

  /**
   * @member {String} destinationAisleAddress
   */
  exports.prototype['destinationAisleAddress'] = undefined;

  /**
   * @member {Integer} destinationOrigin
   */
  exports.prototype['destinationOrigin'] = undefined;

  /**
   * @member {String} destinationOriginName
   */
  exports.prototype['destinationOriginName'] = undefined;

  /**
   * @member {Integer} destinationBillingTypeId
   */
  exports.prototype['destinationBillingTypeId'] = undefined;

  /**
   * @member {String} destinationBillingTypeName
   */
  exports.prototype['destinationBillingTypeName'] = undefined;

  /**
   * @member {String} destinationBehaviorType
   */
  exports.prototype['destinationBehaviorType'] = undefined;

  /**
   * @member {String} destinationBehaviorTypeName
   */
  exports.prototype['destinationBehaviorTypeName'] = undefined;

  /**
   * @member {Integer} destinationFootprintId
   */
  exports.prototype['destinationFootprintId'] = undefined;

  /**
   * @member {String} destinationFootprintName
   */
  exports.prototype['destinationFootprintName'] = undefined;

  /**
   * @member {Integer} destinationFootprintHeight
   */
  exports.prototype['destinationFootprintHeight'] = undefined;

  /**
   * @member {Integer} destinationFootprintWidth
   */
  exports.prototype['destinationFootprintWidth'] = undefined;

  /**
   * @member {Integer} destinationFootprintDepth
   */
  exports.prototype['destinationFootprintDepth'] = undefined;

  /**
   * @member {Integer} destinationAddressSchemeId
   */
  exports.prototype['destinationAddressSchemeId'] = undefined;

  /**
   * @member {String} destinationAddressSchemeName
   */
  exports.prototype['destinationAddressSchemeName'] = undefined;

  /**
   * @member {Integer} destinationLevel
   */
  exports.prototype['destinationLevel'] = undefined;

  /**
   * @member {Integer} destinationBay
   */
  exports.prototype['destinationBay'] = undefined;

  /**
   * @member {Integer} destinationNumber
   */
  exports.prototype['destinationNumber'] = undefined;

  /**
   * @member {Boolean} destinationOnline
   * @default false
   */
  exports.prototype['destinationOnline'] = false;

  /**
   * @member {Integer} destinationPriorityCode
   */
  exports.prototype['destinationPriorityCode'] = undefined;

  /**
   * @member {Integer} destinationCost
   */
  exports.prototype['destinationCost'] = undefined;

  /**
   * @member {Boolean} destinationAllowItemMixing
   * @default false
   */
  exports.prototype['destinationAllowItemMixing'] = false;

  /**
   * @member {Date} workCreateDate
   */
  exports.prototype['workCreateDate'] = undefined;

  /**
   * @member {Date} workModifyDate
   */
  exports.prototype['workModifyDate'] = undefined;

  /**
   * @member {Integer} masterRef
   */
  exports.prototype['masterRef'] = undefined;

  /**
   * @member {Number} weightPerWrap
   */
  exports.prototype['weightPerWrap'] = undefined;

  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {Integer} numericSortOrder
   */
  exports.prototype['numericSortOrder'] = undefined;

  /**
   * @member {String} itemDescription
   */
  exports.prototype['itemDescription'] = undefined;

  /**
   * @member {String} additionalDescription
   */
  exports.prototype['additionalDescription'] = undefined;

  /**
   * @member {String} unitCode
   */
  exports.prototype['unitCode'] = undefined;

  /**
   * @member {String} wrapCode
   */
  exports.prototype['wrapCode'] = undefined;

  /**
   * @member {Integer} unitsPerWrap
   */
  exports.prototype['unitsPerWrap'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {Integer} numberOfWraps
   */
  exports.prototype['numberOfWraps'] = undefined;

  /**
   * @member {Integer} numberOfCases
   */
  exports.prototype['numberOfCases'] = undefined;

  /**
   * @member {Integer} pickTouches
   */
  exports.prototype['pickTouches'] = undefined;

  /**
   * @member {String} classRestriction
   */
  exports.prototype['classRestriction'] = undefined;

  /**
   * @member {Integer} maxCycle
   */
  exports.prototype['maxCycle'] = undefined;

  /**
   * @member {Integer} maxInterim
   */
  exports.prototype['maxInterim'] = undefined;

  /**
   * @member {String} seasonalItem
   */
  exports.prototype['seasonalItem'] = undefined;

  /**
   * @member {String} secure
   */
  exports.prototype['secure'] = undefined;

  /**
   * @member {Integer} productType
   */
  exports.prototype['productType'] = undefined;

  /**
   * @member {String} itemStatus
   */
  exports.prototype['itemStatus'] = undefined;

  /**
   * @member {Integer} overallLeadTime
   */
  exports.prototype['overallLeadTime'] = undefined;

  /**
   * @member {Integer} overallFixedReorderPoint
   */
  exports.prototype['overallFixedReorderPoint'] = undefined;

  /**
   * @member {String} qualityControlIndicator
   */
  exports.prototype['qualityControlIndicator'] = undefined;

  /**
   * @member {String} lotControlFlag
   */
  exports.prototype['lotControlFlag'] = undefined;

  /**
   * @member {String} productCodeFlag
   */
  exports.prototype['productCodeFlag'] = undefined;

  /**
   * @member {String} chargeCode
   */
  exports.prototype['chargeCode'] = undefined;

  /**
   * @member {String} podRevDate
   */
  exports.prototype['podRevDate'] = undefined;

  /**
   * @member {Integer} podOrderSuffix
   */
  exports.prototype['podOrderSuffix'] = undefined;

  /**
   * @member {String} serialCode
   */
  exports.prototype['serialCode'] = undefined;

  /**
   * @member {String} assetCode
   */
  exports.prototype['assetCode'] = undefined;

  /**
   * @member {String} backorder
   */
  exports.prototype['backorder'] = undefined;

  /**
   * @member {String} absoluteMax
   */
  exports.prototype['absoluteMax'] = undefined;

  /**
   * @member {Integer} accountCodeId
   */
  exports.prototype['accountCodeId'] = undefined;

  /**
   * @member {Integer} summaryCodeId
   */
  exports.prototype['summaryCodeId'] = undefined;

  /**
   * @member {Integer} lowStockContactId
   */
  exports.prototype['lowStockContactId'] = undefined;

  /**
   * @member {Integer} legacyLowLevelContactId
   */
  exports.prototype['legacyLowLevelContactId'] = undefined;

  /**
   * @member {Integer} lowStockCodeId
   */
  exports.prototype['lowStockCodeId'] = undefined;

  /**
   * @member {Integer} majorGroupId
   */
  exports.prototype['majorGroupId'] = undefined;

  /**
   * @member {Integer} subGroupId
   */
  exports.prototype['subGroupId'] = undefined;

  /**
   * @member {Integer} productCodeId
   */
  exports.prototype['productCodeId'] = undefined;

  /**
   * @member {Integer} buyerId
   */
  exports.prototype['buyerId'] = undefined;

  /**
   * @member {String} vendorSKU
   */
  exports.prototype['vendorSKU'] = undefined;

  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;

  /**
   * @member {String} packingSlipDescription
   */
  exports.prototype['packingSlipDescription'] = undefined;

  /**
   * @member {String} commodityCode
   */
  exports.prototype['commodityCode'] = undefined;

  /**
   * @member {Integer} compCode
   */
  exports.prototype['compCode'] = undefined;

  /**
   * @member {Integer} criticalAmount
   */
  exports.prototype['criticalAmount'] = undefined;

  /**
   * @member {Number} listPrice
   */
  exports.prototype['listPrice'] = undefined;

  /**
   * @member {Integer} outsideVendor
   */
  exports.prototype['outsideVendor'] = undefined;

  /**
   * @member {String} pickNo
   */
  exports.prototype['pickNo'] = undefined;

  /**
   * @member {String} requiresProductionLot
   */
  exports.prototype['requiresProductionLot'] = undefined;

  /**
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;

  /**
   * @member {Date} voidDate
   */
  exports.prototype['voidDate'] = undefined;

  /**
   * @member {String} extrinsicText1
   */
  exports.prototype['extrinsicText1'] = undefined;

  /**
   * @member {String} extrinsicText2
   */
  exports.prototype['extrinsicText2'] = undefined;

  /**
   * @member {String} extrinsicText3
   */
  exports.prototype['extrinsicText3'] = undefined;

  /**
   * @member {Integer} extrinsicNumber1
   */
  exports.prototype['extrinsicNumber1'] = undefined;

  /**
   * @member {Integer} extrinsicNumber2
   */
  exports.prototype['extrinsicNumber2'] = undefined;

  /**
   * @member {Number} extrinsicDecimal1
   */
  exports.prototype['extrinsicDecimal1'] = undefined;

  /**
   * @member {Number} extrinsicDecimal2
   */
  exports.prototype['extrinsicDecimal2'] = undefined;

  /**
   * @member {String} casebreakEnabled
   */
  exports.prototype['casebreakEnabled'] = undefined;

  /**
   * @member {Integer} alcoholTypeId
   */
  exports.prototype['alcoholTypeId'] = undefined;

  /**
   * @member {String} alcoholTypeName
   */
  exports.prototype['alcoholTypeName'] = undefined;

  /**
   * @member {Number} alcoholContent
   */
  exports.prototype['alcoholContent'] = undefined;

  /**
   * @member {Integer} alcoholContainerId
   */
  exports.prototype['alcoholContainerId'] = undefined;

  /**
   * @member {String} alcoholContainerName
   */
  exports.prototype['alcoholContainerName'] = undefined;

  /**
   * @member {Integer} alcoholContainerVolume
   */
  exports.prototype['alcoholContainerVolume'] = undefined;

  /**
   * @member {String} alcoholVintageYear
   */
  exports.prototype['alcoholVintageYear'] = undefined;

  /**
   * @member {Integer} alcoholCountryId
   */
  exports.prototype['alcoholCountryId'] = undefined;

  /**
   * @member {String} alcoholCountryName
   */
  exports.prototype['alcoholCountryName'] = undefined;

  /**
   * @member {String} alcoholState
   */
  exports.prototype['alcoholState'] = undefined;

  /**
   * @member {String} alcoholRegion
   */
  exports.prototype['alcoholRegion'] = undefined;

  /**
   * @member {String} alcoholBrand
   */
  exports.prototype['alcoholBrand'] = undefined;

  /**
   * @member {String} alcoholUPCCode
   */
  exports.prototype['alcoholUPCCode'] = undefined;

  /**
   * @member {String} alcoholNABCACode
   */
  exports.prototype['alcoholNABCACode'] = undefined;

  /**
   * @member {String} alcoholUNIMERCCode
   */
  exports.prototype['alcoholUNIMERCCode'] = undefined;

  /**
   * @member {String} alcoholSCCCode
   */
  exports.prototype['alcoholSCCCode'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));
