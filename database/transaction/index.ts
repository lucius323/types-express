/**
 * Created by CYK on 2016-11-28.
 */

const config = require('config')
//process.env.NODE_CONFIG_DIR='../../config';

export const start =  config.get('Sequelize.mysql.TRANSACTION')
//logger.info(start);