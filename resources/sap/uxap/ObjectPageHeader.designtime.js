/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.uxap.ObjectPageHeader control
sap.ui.define([],
	function() {
		"use strict";

		return {
			aggregations: {
				actions: {
					domRef : ":sap-domref .sapUxAPObjectPageHeaderIdentifierActions",
					actions : {
						move: {
							changeType: "moveControls"
						}
					}
				}
			}
		};

	}, /* bExport= */ false);