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

        return Controller.extend("Traker.covidtraker.controller.List", {
          // dataPath : "https://api.rootnet.in/covid19-in/stats/history",
            dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
           
            

             onInit: function () {
                
                var dataPath = new JSONModel(this.dataPath);
                this.getView().setModel(dataPath,"test")

               
                
               
            
             },
            
            });
        });
 