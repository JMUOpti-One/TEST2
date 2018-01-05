sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			
			statusText : function(sStatusEDI) {
				switch (sStatusEDI){
					case 0: 
						return "En attente";
					case 1:
						return "Refus";
					case 2:
						return "Valider";
					case 3:
						return "En cours d'intégration";
					case 4: 
						return "Erreur DI API";
					case 5:
						return "Intégré dans SAP";
					default:
						return "> 5 :P";
				}
			},
			
			statusState : function(sStatusEDI) {
				switch (sStatusEDI){
					case 0: 
						return sap.ui.core.ValueState.Warning;
					case 3: 
						return sap.ui.core.ValueState.None;
					case 2:
					case 5:
						return sap.ui.core.ValueState.Success;
					default:
						return sap.ui.core.ValueState.Error;
				}
			},
			
			statusStateIcon : function(sStatusEDI){
			    if (sStatusEDI === 4){
			        return "sap-icon://alert";
			    }
			    else {
			        return "";
			    }
			}
		};

	}
);