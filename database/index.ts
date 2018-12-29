/**
 * Created by i99208 on 2016. 11. 9..
 */


import * as sequelize from 'sequelize'
const config = require('config');

export class Sequelize {
	public instance;
	
	constructor(){
		this.instance= new sequelize(config.get('Sequelize.mysql.db'),
			config.get('Sequelize.mysql.id'),
			config.get('Sequelize.mysql.password'),
			config.get('Sequelize.mysql.connection_info')  )
	}
}

