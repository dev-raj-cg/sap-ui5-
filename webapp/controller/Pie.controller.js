sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
    "sap/ui/model/json/JSONModel",
    
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format"
    

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,ChartFormatter,Format) {
        "use strict";

        return Controller.extend("Traker.covidtraker.controller.Pie", {
          // dataPath : "https://api.rootnet.in/covid19-in/stats/history",
            dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
            oVizFrame : null,

             onInit: function () {
               
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;
                

    
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
                oVizFrame.setVizProperties({
                    legend: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                
    
                var Data1 = new JSONModel(this.dataPath);
                this.getView().setModel(Data1,"dataM");


                var oPopOver = this.getView().byId("idPopOverPie");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
    
                

                

            },



           
            

        });
    });
 