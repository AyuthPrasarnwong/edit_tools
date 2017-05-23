var map, toolbar, symbol, geomTask;

  require([
    "esri/map", 

    "esri/toolbars/draw",
    "esri/toolbars/edit",
    "esri/graphic",
    "esri/config",

    "esri/layers/FeatureLayer",

    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",

    "dojo/_base/array",
    "dojo/_base/event",
    "dojo/_base/lang",

    "dojo/parser", "dijit/registry",  "dojo/on",

    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/form/TextBox",  
    "dijit/form/Button", "dijit/WidgetSet", "dojo/domReady!"
  ], function(
     Map, 

     Draw, Edit, Graphic, esriConfig,
      FeatureLayer,
    SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol,
     arrayUtils, event, lang,
     parser, registry, on
  ) {
    parser.parse();

    var widgetInput = registry.byId("txtInput");
    var widgetButton = registry.byId("btnEdited");
 

    map = new Map("map", {
      basemap: "streets",
      center: [-15.469, 36.428],
      zoom: 3
    });

    /*
     * Step: Construct the Feature layer
     */



    /*
     * Step: Wire the Map's Layers Add Result event handler
     */



    /*
     * Step:Add the Feature layer to the map
     */

   

    map.on("load", createDrawToolbar);


    // loop through all dijits, connect onClick event
    // listeners for buttons to activate drawing tools
    registry.forEach(function(d) {

      if ( d.declaredClass === "dijit.form.Button" ) {
        d.on("click", activateTool);
      }
    });


    

    function activateTool() {
        var tool = this.label.toUpperCase().replace(/ /g, "_");
        drawToolbar.activate(Draw[tool]);
        map.hideZoomSlider();
    }

    function createDrawToolbar(themap) {

    /*
     * Step: Construct the Draw widget
     */
      

    /*
     * Step: Wire the Draw Toolbar's Draw End event handler
     */
    

    }

    function initEditor(evt) {


        var featureLayer = map.getLayer(landusePolygonLayer.id);




        /*
        * Step: Construct the Edit Toolbar 
        */

      
        /*
        * Step: Wire the Edit Toolbar's Deactivate event handler
        */
     

        /*
        * Step: Wire the button's onclick event handler
        */

    

        /*
        * Step: Wire the Feature Layer's double click event handlerr 
        */

   
     
    }


    function addToFeatureLayer(evt) {

        /*
        * Step: Add Graphic To Feature Layer
        */



    }
  });