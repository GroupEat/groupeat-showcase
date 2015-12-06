/**
 *  Entrance of config
 *
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
import app from './AppConfig';
import notifier from './NotifierConfig';
import router from './RouterConfig';
import sso from './SSOConfig';

export default [
    app,
    notifier,
    router,
    sso
];
