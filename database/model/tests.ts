/**
 * Created by 김성신 on 2018-08-08.
 */

import * as sequelize from 'sequelize'
import { Sequelize } from "../../database";

export const Tests = new Sequelize().instance.define( 'tests', {
	id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: sequelize.STRING, },
	email: { type: sequelize.STRING, },
	created_at: { type: sequelize.DATE, },
	updated_at: { type: sequelize.DATE, },
	deleted_at: { type: sequelize.DATE, },
	
},{ paranoid: true })
