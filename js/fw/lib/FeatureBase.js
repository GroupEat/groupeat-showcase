/**
 *  FeatureBase class
 *
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
import angular from 'angular';

class FeatureBase {

    constructor(name) {
        this.export = name;
        this.mod = angular.module(this.export, []);
    }

    beforeStart() {}

    run() {}
}

export default FeatureBase;
