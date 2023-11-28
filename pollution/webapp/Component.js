/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "pollution/model/models",
        "sap/f/library",
        "sap/f/FlexibleColumnLayoutSemanticHelper",
        "sap/base/util/UriParameters"
    ],
    function (UIComponent, Device, models,library,FlexibleColumnLayoutSemanticHelper,UriParameters) {
        "use strict";

        var LayoutType = library.LayoutType;

        return UIComponent.extend("pollution.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            getHelper: function () {
                var oFCL = this.getRootControl().byId("app"),
                    oParams = UriParameters.fromQuery(location.search),
                    oSettings = {
                        defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                        defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
                        mode: oParams.get("mode"),
                        maxColumnsCount: oParams.get("max")
                    };
    
                return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
            }
        });
    }
);