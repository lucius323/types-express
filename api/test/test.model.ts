import {Tests } from "../../database/model/tests";

export module TestModel {
	
	export const retrieve = async (where,  transaction) =>{
		
		let options = {
			where,
			transaction
		}
		return Tests.findAll(options)
	}
	
	export const find = (where, transaction) =>{
		
		let options = {
			where: where,
			transaction
		}
		return Tests.findOne(options)
	}
	
	export const create = (values, transaction) =>{
		return Tests.create( values , {transaction})
	}
	
	export const modify = (values, params, transaction ) =>{
		let options = {
			where: params,
			transaction
		}
		
		return Tests.update(values,options)
	}
	
	export const remove = (params ,transaction ) =>{
		let options = {
			where: params,
			transaction
		}
		
		return Tests.destroy(options)
	}
	
	
}