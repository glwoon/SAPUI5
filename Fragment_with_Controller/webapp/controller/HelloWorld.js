sap.ui.define([
	"./FragmentControl"
], function(FragmentControl) {
	"use strict";

	/**
	 * My class
	 *
	 * @public
	 * @extends sap.ui.FragmentControl
	 */
	var oHelloWorld = FragmentControl.extend("sap.ui.demo.wt.HelloWorld", {
		
		
		/**
		 * @override 
		 */
		getFragmentName: function() {
			return "sap.ui.demo.wt.view.HelloWorld";
		},

		/**
		 * Handle the change event
		 * @param {sap.ui.base.Event} oEvent - the change event
		 */
		onShowText: function() {
			var oInput = this.byId("inputTest");

			var oLabel = this.byId("labelTest");
			oLabel.setText(oInput.getValue());
		}

	});

	return oHelloWorld;
});