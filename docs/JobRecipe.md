# infoplus.JobRecipe

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**createDate** | **Date** |  | [optional] 
**modifyDate** | **Date** |  | [optional] 
**warehouseId** | **Number** |  | [optional] 
**lobId** | **Number** |  | 
**name** | **String** |  | 
**assemblyInstructions** | **String** |  | [optional] 
**inputs** | [**[JobRecipeInput]**](JobRecipeInput.md) |  | [optional] 
**outputs** | [**[JobRecipeOutput]**](JobRecipeOutput.md) |  | [optional] 
**steps** | [**[JobRecipeStep]**](JobRecipeStep.md) |  | [optional] 
**fulfillmentPlanId** | **Number** |  | 
**layout** | **String** |  | 
**trackAssemblies** | **Boolean** |  | [default to false]
**trackSteps** | **Boolean** |  | [default to false]
**customFields** | **{String: Object}** |  | [optional] 


