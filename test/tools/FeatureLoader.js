/**
 *  Feature loader
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';

var loader = function(Feature) {
    var feature = new Feature();
    feature.run();
    return feature;
};

export default loader;
