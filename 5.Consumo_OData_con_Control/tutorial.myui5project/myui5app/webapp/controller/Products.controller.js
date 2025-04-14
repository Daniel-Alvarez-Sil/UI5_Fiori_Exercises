sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("myui5app.controller.Products", {
		handleListItemPress: function(oEvent) {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			const selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
			oRouter.navTo("RouteProductDetail", {
				productId: selectedProductId
			});
		},

		onSearch: function(oEvent) {
			const sQuery = oEvent.getParameter("query");
			const oList = this.byId("productList");
			const oBinding = oList.getBinding("items");

			if (sQuery) {
				const oFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
				oBinding.filter([oFilter]);
			} else {
				oBinding.filter([]);
			}
		}
	});
});
