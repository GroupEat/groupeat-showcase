/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
        this.config = __config;
    }

    run() {
        this.app.constant('CONF', this.config);
    }
}

export default Configurator;
