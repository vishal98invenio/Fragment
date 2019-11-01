sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Fragments.AssignmentUI5.controller.View1", {
		onValueHelpRequested: function (oEvent) {
		//	var id = oEvent.getParameters().id.split('--')[2];
			var oDialog = new sap.ui.xmlfragment("Fragments.AssignmentUI5.fragments.details", this);
			this.getView().addDependent(oDialog);

		
				oDialog.bindAggregation("items", {
					path: "city>/city",
					template: new sap.m.StandardListItem({
						title: "{city>cityname}"
					})

				});
			// } else {
			// 	oDialog.bindAggregation("items", {
			// 		path: "country>/country",
			// 		template: new sap.m.StandardListItem({
			// 			title: "{country>countryname}"

			// 		})

			// 	});
				
			// }
			oDialog.open();
		},
		_handleValueHelpClose: function (evt) {
			
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId("Key1");
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		} 

	});
});