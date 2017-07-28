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
    root.infoplus.InventoryStorageActivity = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InventoryStorageActivity model module.
   * @module model/InventoryStorageActivity
   * @version beta
   */

  /**
   * Constructs a new <code>InventoryStorageActivity</code>.
   * @alias module:model/InventoryStorageActivity
   * @class
   * @param lobId
   */
  var exports = function(lobId) {







    this['lobId'] = lobId;













































































  };

  /**
   * Constructs a <code>InventoryStorageActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventoryStorageActivity} obj Optional instance to populate.
   * @return {module:model/InventoryStorageActivity} The populated <code>InventoryStorageActivity</code> instance.
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
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('warehouseLocationId')) {
        obj['warehouseLocationId'] = ApiClient.convertToType(data['warehouseLocationId'], 'Integer');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('snapshotDate')) {
        obj['snapshotDate'] = ApiClient.convertToType(data['snapshotDate'], 'Date');
      }
      if (data.hasOwnProperty('isMixedReceipts')) {
        obj['isMixedReceipts'] = ApiClient.convertToType(data['isMixedReceipts'], 'Boolean');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseName')) {
        obj['warehouseName'] = ApiClient.convertToType(data['warehouseName'], 'String');
      }
      if (data.hasOwnProperty('warehouseZoneId')) {
        obj['warehouseZoneId'] = ApiClient.convertToType(data['warehouseZoneId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseZoneName')) {
        obj['warehouseZoneName'] = ApiClient.convertToType(data['warehouseZoneName'], 'String');
      }
      if (data.hasOwnProperty('warehouseZoneAddress')) {
        obj['warehouseZoneAddress'] = ApiClient.convertToType(data['warehouseZoneAddress'], 'String');
      }
      if (data.hasOwnProperty('warehouseBuildingId')) {
        obj['warehouseBuildingId'] = ApiClient.convertToType(data['warehouseBuildingId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseBuildingName')) {
        obj['warehouseBuildingName'] = ApiClient.convertToType(data['warehouseBuildingName'], 'String');
      }
      if (data.hasOwnProperty('warehouseAisleId')) {
        obj['warehouseAisleId'] = ApiClient.convertToType(data['warehouseAisleId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseAisleAddress')) {
        obj['warehouseAisleAddress'] = ApiClient.convertToType(data['warehouseAisleAddress'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationOriginId')) {
        obj['warehouseLocationOriginId'] = ApiClient.convertToType(data['warehouseLocationOriginId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationOriginName')) {
        obj['warehouseLocationOriginName'] = ApiClient.convertToType(data['warehouseLocationOriginName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationBillingTypeId')) {
        obj['warehouseLocationBillingTypeId'] = ApiClient.convertToType(data['warehouseLocationBillingTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationBillingTypeName')) {
        obj['warehouseLocationBillingTypeName'] = ApiClient.convertToType(data['warehouseLocationBillingTypeName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationBehaviorTypeId')) {
        obj['warehouseLocationBehaviorTypeId'] = ApiClient.convertToType(data['warehouseLocationBehaviorTypeId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationBehaviorTypeName')) {
        obj['warehouseLocationBehaviorTypeName'] = ApiClient.convertToType(data['warehouseLocationBehaviorTypeName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintId')) {
        obj['warehouseLocationFootprintId'] = ApiClient.convertToType(data['warehouseLocationFootprintId'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintName')) {
        obj['warehouseLocationFootprintName'] = ApiClient.convertToType(data['warehouseLocationFootprintName'], 'String');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintWidth')) {
        obj['warehouseLocationFootprintWidth'] = ApiClient.convertToType(data['warehouseLocationFootprintWidth'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintHeight')) {
        obj['warehouseLocationFootprintHeight'] = ApiClient.convertToType(data['warehouseLocationFootprintHeight'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationFootprintDepth')) {
        obj['warehouseLocationFootprintDepth'] = ApiClient.convertToType(data['warehouseLocationFootprintDepth'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationLevel')) {
        obj['warehouseLocationLevel'] = ApiClient.convertToType(data['warehouseLocationLevel'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationBay')) {
        obj['warehouseLocationBay'] = ApiClient.convertToType(data['warehouseLocationBay'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationNumber')) {
        obj['warehouseLocationNumber'] = ApiClient.convertToType(data['warehouseLocationNumber'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationOnline')) {
        obj['warehouseLocationOnline'] = ApiClient.convertToType(data['warehouseLocationOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouseLocationPriorityCode')) {
        obj['warehouseLocationPriorityCode'] = ApiClient.convertToType(data['warehouseLocationPriorityCode'], 'Integer');
      }
      if (data.hasOwnProperty('warehouseLocationAllowItemMixing')) {
        obj['warehouseLocationAllowItemMixing'] = ApiClient.convertToType(data['warehouseLocationAllowItemMixing'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouseLocationCost')) {
        obj['warehouseLocationCost'] = ApiClient.convertToType(data['warehouseLocationCost'], 'Integer');
      }
      if (data.hasOwnProperty('controlNo')) {
        obj['controlNo'] = ApiClient.convertToType(data['controlNo'], 'String');
      }
      if (data.hasOwnProperty('itemVendorSku')) {
        obj['itemVendorSku'] = ApiClient.convertToType(data['itemVendorSku'], 'String');
      }
      if (data.hasOwnProperty('itemUpc')) {
        obj['itemUpc'] = ApiClient.convertToType(data['itemUpc'], 'String');
      }
      if (data.hasOwnProperty('itemMajorGroup')) {
        obj['itemMajorGroup'] = ApiClient.convertToType(data['itemMajorGroup'], 'Integer');
      }
      if (data.hasOwnProperty('itemMajorGroupName')) {
        obj['itemMajorGroupName'] = ApiClient.convertToType(data['itemMajorGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemSubGroup')) {
        obj['itemSubGroup'] = ApiClient.convertToType(data['itemSubGroup'], 'Integer');
      }
      if (data.hasOwnProperty('itemSubGroupName')) {
        obj['itemSubGroupName'] = ApiClient.convertToType(data['itemSubGroupName'], 'String');
      }
      if (data.hasOwnProperty('itemProductCode')) {
        obj['itemProductCode'] = ApiClient.convertToType(data['itemProductCode'], 'Integer');
      }
      if (data.hasOwnProperty('itemProductCodeName')) {
        obj['itemProductCodeName'] = ApiClient.convertToType(data['itemProductCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCode')) {
        obj['itemAccountCode'] = ApiClient.convertToType(data['itemAccountCode'], 'String');
      }
      if (data.hasOwnProperty('itemAccountCodeName')) {
        obj['itemAccountCodeName'] = ApiClient.convertToType(data['itemAccountCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSummaryCode')) {
        obj['itemSummaryCode'] = ApiClient.convertToType(data['itemSummaryCode'], 'Integer');
      }
      if (data.hasOwnProperty('itemSummaryCodeName')) {
        obj['itemSummaryCodeName'] = ApiClient.convertToType(data['itemSummaryCodeName'], 'String');
      }
      if (data.hasOwnProperty('itemSector')) {
        obj['itemSector'] = ApiClient.convertToType(data['itemSector'], 'String');
      }
      if (data.hasOwnProperty('poNo')) {
        obj['poNo'] = ApiClient.convertToType(data['poNo'], 'String');
      }
      if (data.hasOwnProperty('receiptDistributionDate')) {
        obj['receiptDistributionDate'] = ApiClient.convertToType(data['receiptDistributionDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptUnitsPerWrap')) {
        obj['receiptUnitsPerWrap'] = ApiClient.convertToType(data['receiptUnitsPerWrap'], 'Integer');
      }
      if (data.hasOwnProperty('receiptUnitsPerCase')) {
        obj['receiptUnitsPerCase'] = ApiClient.convertToType(data['receiptUnitsPerCase'], 'Integer');
      }
      if (data.hasOwnProperty('receiptRevisionDate')) {
        obj['receiptRevisionDate'] = ApiClient.convertToType(data['receiptRevisionDate'], 'String');
      }
      if (data.hasOwnProperty('receiptProductionLot')) {
        obj['receiptProductionLot'] = ApiClient.convertToType(data['receiptProductionLot'], 'String');
      }
      if (data.hasOwnProperty('receiptReceiveDate')) {
        obj['receiptReceiveDate'] = ApiClient.convertToType(data['receiptReceiveDate'], 'Date');
      }
      if (data.hasOwnProperty('receiptStatus')) {
        obj['receiptStatus'] = ApiClient.convertToType(data['receiptStatus'], 'String');
      }
      if (data.hasOwnProperty('receiptStatusName')) {
        obj['receiptStatusName'] = ApiClient.convertToType(data['receiptStatusName'], 'String');
      }
      if (data.hasOwnProperty('receiptUnitCode')) {
        obj['receiptUnitCode'] = ApiClient.convertToType(data['receiptUnitCode'], 'Integer');
      }
      if (data.hasOwnProperty('receiptUnitCodeText')) {
        obj['receiptUnitCodeText'] = ApiClient.convertToType(data['receiptUnitCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptWrapCode')) {
        obj['receiptWrapCode'] = ApiClient.convertToType(data['receiptWrapCode'], 'Integer');
      }
      if (data.hasOwnProperty('receiptWrapCodeText')) {
        obj['receiptWrapCodeText'] = ApiClient.convertToType(data['receiptWrapCodeText'], 'String');
      }
      if (data.hasOwnProperty('receiptCaseWeight')) {
        obj['receiptCaseWeight'] = ApiClient.convertToType(data['receiptCaseWeight'], 'Number');
      }
      if (data.hasOwnProperty('receiptProductIdTag')) {
        obj['receiptProductIdTag'] = ApiClient.convertToType(data['receiptProductIdTag'], 'String');
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
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Integer} warehouseLocationId
   */
  exports.prototype['warehouseLocationId'] = undefined;

  /**
   * @member {Integer} itemId
   */
  exports.prototype['itemId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Date} snapshotDate
   */
  exports.prototype['snapshotDate'] = undefined;

  /**
   * @member {Boolean} isMixedReceipts
   * @default false
   */
  exports.prototype['isMixedReceipts'] = false;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {String} warehouseName
   */
  exports.prototype['warehouseName'] = undefined;

  /**
   * @member {Integer} warehouseZoneId
   */
  exports.prototype['warehouseZoneId'] = undefined;

  /**
   * @member {String} warehouseZoneName
   */
  exports.prototype['warehouseZoneName'] = undefined;

  /**
   * @member {String} warehouseZoneAddress
   */
  exports.prototype['warehouseZoneAddress'] = undefined;

  /**
   * @member {Integer} warehouseBuildingId
   */
  exports.prototype['warehouseBuildingId'] = undefined;

  /**
   * @member {String} warehouseBuildingName
   */
  exports.prototype['warehouseBuildingName'] = undefined;

  /**
   * @member {Integer} warehouseAisleId
   */
  exports.prototype['warehouseAisleId'] = undefined;

  /**
   * @member {String} warehouseAisleAddress
   */
  exports.prototype['warehouseAisleAddress'] = undefined;

  /**
   * @member {Integer} warehouseLocationOriginId
   */
  exports.prototype['warehouseLocationOriginId'] = undefined;

  /**
   * @member {String} warehouseLocationOriginName
   */
  exports.prototype['warehouseLocationOriginName'] = undefined;

  /**
   * @member {Integer} warehouseLocationBillingTypeId
   */
  exports.prototype['warehouseLocationBillingTypeId'] = undefined;

  /**
   * @member {String} warehouseLocationBillingTypeName
   */
  exports.prototype['warehouseLocationBillingTypeName'] = undefined;

  /**
   * @member {Integer} warehouseLocationBehaviorTypeId
   */
  exports.prototype['warehouseLocationBehaviorTypeId'] = undefined;

  /**
   * @member {String} warehouseLocationBehaviorTypeName
   */
  exports.prototype['warehouseLocationBehaviorTypeName'] = undefined;

  /**
   * @member {Integer} warehouseLocationFootprintId
   */
  exports.prototype['warehouseLocationFootprintId'] = undefined;

  /**
   * @member {String} warehouseLocationFootprintName
   */
  exports.prototype['warehouseLocationFootprintName'] = undefined;

  /**
   * @member {Integer} warehouseLocationFootprintWidth
   */
  exports.prototype['warehouseLocationFootprintWidth'] = undefined;

  /**
   * @member {Integer} warehouseLocationFootprintHeight
   */
  exports.prototype['warehouseLocationFootprintHeight'] = undefined;

  /**
   * @member {Integer} warehouseLocationFootprintDepth
   */
  exports.prototype['warehouseLocationFootprintDepth'] = undefined;

  /**
   * @member {Integer} warehouseLocationLevel
   */
  exports.prototype['warehouseLocationLevel'] = undefined;

  /**
   * @member {Integer} warehouseLocationBay
   */
  exports.prototype['warehouseLocationBay'] = undefined;

  /**
   * @member {Integer} warehouseLocationNumber
   */
  exports.prototype['warehouseLocationNumber'] = undefined;

  /**
   * @member {Boolean} warehouseLocationOnline
   * @default false
   */
  exports.prototype['warehouseLocationOnline'] = false;

  /**
   * @member {Integer} warehouseLocationPriorityCode
   */
  exports.prototype['warehouseLocationPriorityCode'] = undefined;

  /**
   * @member {Boolean} warehouseLocationAllowItemMixing
   * @default false
   */
  exports.prototype['warehouseLocationAllowItemMixing'] = false;

  /**
   * @member {Integer} warehouseLocationCost
   */
  exports.prototype['warehouseLocationCost'] = undefined;

  /**
   * @member {String} controlNo
   */
  exports.prototype['controlNo'] = undefined;

  /**
   * @member {String} itemVendorSku
   */
  exports.prototype['itemVendorSku'] = undefined;

  /**
   * @member {String} itemUpc
   */
  exports.prototype['itemUpc'] = undefined;

  /**
   * @member {Integer} itemMajorGroup
   */
  exports.prototype['itemMajorGroup'] = undefined;

  /**
   * @member {String} itemMajorGroupName
   */
  exports.prototype['itemMajorGroupName'] = undefined;

  /**
   * @member {Integer} itemSubGroup
   */
  exports.prototype['itemSubGroup'] = undefined;

  /**
   * @member {String} itemSubGroupName
   */
  exports.prototype['itemSubGroupName'] = undefined;

  /**
   * @member {Integer} itemProductCode
   */
  exports.prototype['itemProductCode'] = undefined;

  /**
   * @member {String} itemProductCodeName
   */
  exports.prototype['itemProductCodeName'] = undefined;

  /**
   * @member {String} itemAccountCode
   */
  exports.prototype['itemAccountCode'] = undefined;

  /**
   * @member {String} itemAccountCodeName
   */
  exports.prototype['itemAccountCodeName'] = undefined;

  /**
   * @member {Integer} itemSummaryCode
   */
  exports.prototype['itemSummaryCode'] = undefined;

  /**
   * @member {String} itemSummaryCodeName
   */
  exports.prototype['itemSummaryCodeName'] = undefined;

  /**
   * @member {String} itemSector
   */
  exports.prototype['itemSector'] = undefined;

  /**
   * @member {String} poNo
   */
  exports.prototype['poNo'] = undefined;

  /**
   * @member {Date} receiptDistributionDate
   */
  exports.prototype['receiptDistributionDate'] = undefined;

  /**
   * @member {Integer} receiptUnitsPerWrap
   */
  exports.prototype['receiptUnitsPerWrap'] = undefined;

  /**
   * @member {Integer} receiptUnitsPerCase
   */
  exports.prototype['receiptUnitsPerCase'] = undefined;

  /**
   * @member {String} receiptRevisionDate
   */
  exports.prototype['receiptRevisionDate'] = undefined;

  /**
   * @member {String} receiptProductionLot
   */
  exports.prototype['receiptProductionLot'] = undefined;

  /**
   * @member {Date} receiptReceiveDate
   */
  exports.prototype['receiptReceiveDate'] = undefined;

  /**
   * @member {String} receiptStatus
   */
  exports.prototype['receiptStatus'] = undefined;

  /**
   * @member {String} receiptStatusName
   */
  exports.prototype['receiptStatusName'] = undefined;

  /**
   * @member {Integer} receiptUnitCode
   */
  exports.prototype['receiptUnitCode'] = undefined;

  /**
   * @member {String} receiptUnitCodeText
   */
  exports.prototype['receiptUnitCodeText'] = undefined;

  /**
   * @member {Integer} receiptWrapCode
   */
  exports.prototype['receiptWrapCode'] = undefined;

  /**
   * @member {String} receiptWrapCodeText
   */
  exports.prototype['receiptWrapCodeText'] = undefined;

  /**
   * @member {Number} receiptCaseWeight
   */
  exports.prototype['receiptCaseWeight'] = undefined;

  /**
   * @member {String} receiptProductIdTag
   */
  exports.prototype['receiptProductIdTag'] = undefined;

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
