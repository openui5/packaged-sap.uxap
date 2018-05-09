sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";
	var Component = UIComponent.extend("sap.uxap.sample.ObjectPageXML.Component", {
		metadata: {
			rootView: {
				"viewName": "sap.uxap.sample.ObjectPageXML.ObjectPageXML",
				"type": "XML",
				"async": true
			},
			dependencies: {
				libs: [
					"sap.m"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"ObjectPageXML.view.xml",
						"ObjectPageXML.controller.js"
					]
				}
			}
		}
	});
	return Component;
});
