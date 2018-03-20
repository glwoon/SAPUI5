sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"./APIHelper",
	"./HelloWorld"
	//	"sap/ui/demo/wt/controller/HelloWorld"
], function(Controller, MessageToast, APIHelper, HelloWorld) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.HelloPanel", {

		onShowHello: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog: function() {
			/*var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.wt.view.HelloDialog", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}

			oDialog.open();*/
			this._showFormFragment("HelloWorld");

		},

		onCloseDialog: function() {
			this.getView().byId("helloDialog").close();
		},

		_formFragments: {},

		_getFormFragment: function(sFragmentName) {
			var oFormFragment = this._formFragments[sFragmentName];

			if (oFormFragment) {
				return oFormFragment;
			}

			//	oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "sap.ui.demo.wt.view." + sFragmentName);
			oFormFragment = new HelloWorld();
			var myFragment = (this._formFragments[sFragmentName] = oFormFragment);
			return myFragment;
		},

		_showFormFragment: function(sFragmentName) {
			var oPage = this.getView().byId("tab");

			oPage.removeAllContent();
			//oPage.addContent(this._getFormFragment(sFragmentName));
			//oPage.insertContent(this._getFormFragment(sFragmentName));
			var aFragment = this._getFormFragment(sFragmentName);
			var aa = aFragment.mAggregations.dependents;

			/*aa.addEventDelegate({
				onChange: function(evt) {
					console.log("aaa");
				}
			});*/
			//	aFragment.placeAt("content");
			var obj1 = aa[0];
			var obj2 = aa[1];
				oPage.addContent(obj1);
					oPage.addContent(obj2);


		},
		onChange: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oText = this.byId("myText");
			oText.setText(sValue);
		}
	});

});