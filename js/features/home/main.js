/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controllers/home-controller';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    run() {
        this.mod.controller('HomeController', HomeController);
    }
}

export default Feature;
