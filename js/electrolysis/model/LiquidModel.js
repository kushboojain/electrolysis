// Copyright 2002-2015, University of Colorado Boulder
define(function(require) {
    'use strict';
    var inherit = require('PHET_CORE/inherit');
    var PropertySet = require('AXON/PropertySet');
    var Dimension2 = require('DOT/Dimension2');

    function LiquidModel(options) {
        PropertySet.call(this, _.extend({name: '', color: '', conductor: false, location: null}, options));
        this.size = new Dimension2(100,100);
        this.type = 'LiquidModel';
    }

    return inherit(PropertySet, LiquidModel);
});
