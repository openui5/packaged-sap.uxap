/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.uxap.ObjectPageSubSection control
sap.ui.define([],
	function() {
		"use strict";

		return {
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				},
				rename: function () {
					return {
						changeType: "rename",
						domRef: ".sapUxAPObjectPageSubSectionHeaderTitle"
					};
				}
			},
			aggregations: {
				actions: {
					domRef : ":sap-domref .sapUxAPObjectPageSubSectionHeaderActions",
					actions : {
						move: {
							changeType: "moveControls"
						}
					}
				}
			}
		};

	}, /* bExport= */ false);