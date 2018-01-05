jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Headers in the list
// * All 3 Headers have at least one Lines

sap.ui.require([
	"sap/ui/test/Opa5",
	"opt1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"opt1/test/integration/pages/App",
	"opt1/test/integration/pages/Browser",
	"opt1/test/integration/pages/Master",
	"opt1/test/integration/pages/Detail",
	"opt1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "opt1.view."
	});

	sap.ui.require([
		"opt1/test/integration/MasterJourney",
		"opt1/test/integration/NavigationJourney",
		"opt1/test/integration/NotFoundJourney",
		"opt1/test/integration/BusyJourney",
		"opt1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});