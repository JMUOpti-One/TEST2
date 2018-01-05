jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"opt1/test/integration/NavigationJourneyPhone",
		"opt1/test/integration/NotFoundJourneyPhone",
		"opt1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});