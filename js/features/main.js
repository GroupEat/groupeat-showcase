/**
 *  Entrance of features
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
import _ from 'lodash';
import common from './common/main';
import home from './home/main';

export default _.flatten([common, home]);
