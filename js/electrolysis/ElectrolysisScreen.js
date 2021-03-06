// Copyright 2002-2015, University of Colorado Boulder

/**
 *
 * @author prateek
 */
define(function(require) {
    'use strict';

    // modules
    var ElectrolysisModel = require('ELECTROLYSIS/electrolysis/model/ElectrolysisModel');
    var ElectrolysisScreenView = require('ELECTROLYSIS/electrolysis/view/ElectrolysisScreenView');
    var inherit = require('PHET_CORE/inherit');
    var Screen = require('JOIST/Screen');
    var Image = require('SCENERY/nodes/Image');
    var elImage = require('image!ELECTROLYSIS/el.png');
    var Environment = require('ELECTROLYSIS/electrolysis/Environment');

    // strings
    var electrolysisTitleString = require('string!ELECTROLYSIS/electrolysis.title');

    /**
     * @constructor
     */
    function ElectrolysisScreen() {

        //If this is a single-screen sim, then no icon is necessary.
        //If there are multiple screens, then the icon must be provided here.
        var icon = new Image(elImage);
        var environment = new Environment();
        Screen.call(this, electrolysisTitleString, icon,
            function() {
                return new ElectrolysisModel(environment);
            },
            function(model) {
                return new ElectrolysisScreenView(model);
            }, {
                backgroundColor: 'white'
            }
        );
    }

    return inherit(Screen, ElectrolysisScreen);
});
