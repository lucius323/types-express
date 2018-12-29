import {TestModel} from "./test.model";
import { BizError } from "../../lib/error/bizError";

export module TestBiz  {

	export const retrieve = async ( params ,tx ) => {
		return await TestModel.retrieve(params , tx)
	}
	
	export const find = async ( params ,tx ) => {
		return await TestModel.find(params, tx)
	}
	
	export const create = async ( body ,tx ) => {
		return await TestModel.create(body, tx)
	}
	
	export const remove = async ( params,tx ) => {
		let affected_rows = await TestModel.remove( params, tx)
		return affected_rows
	}
	
	export const modify = async ( body, params,tx ) => {
		
		let item = await find(params,tx)
		if(!item) throw new BizError(200)
		
		let affected_rows = await TestModel.modify(body, params, tx)
		if(affected_rows[0] < 1) return item
		else {
			let modified_item = await find(params,tx)
			return modified_item
		}
	}
	

}