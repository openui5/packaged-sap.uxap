/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/CombineButtons",
	"sap/m/changeHandler/SplitMenuButton"
], function (CombineButtonsHandler, SplitMenuButtonHandler) {
	"use strict";

	return {
		"combineButtons": {
			"changeHandler": CombineButtonsHandler,
			"layers": {
				"CUSTOMER": false
			}
		},
		"moveControls": "default",
		"splitMenuButton": {
			"changeHandler": SplitMenuButtonHandler,
			"layers": {
				"CUSTOMER": false
			}
		}
	};
}, /* bExport= */ true);
