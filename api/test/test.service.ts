
import { TestBiz } from './test.biz'
import { Sequelize } from "../../database";
import { start } from '../../database/transaction'
import { error } from "../../lib/error";
import { BizError } from "../../lib/error/bizError";
import { logger } from '../../lib/logger'

const database = new Sequelize().instance
const TRAN = start

export module TestService {
	
	/**
	 * 검색
	 *
	 * @param params
	 */
	export const retrieve = async ( params: Object ): Promise<any> => {
		
		const _trxStart = async (tx) => {
			try{
				return await TestBiz.retrieve( params ,tx );
			}
			catch(err) {
				logger.error(err)
				if( err instanceof BizError ) throw err.getError()
				else throw error(500)
			}
		};
		
		return await database.transaction( TRAN, _trxStart )
	}
	
	/**
	 * 조회
	 *
	 * @param params
	 */
	export const find = async ( params: Object ): Promise<any> => {
		
		const _trxStart = async (tx) => {
			try{
				return await TestBiz.find( params ,tx );
			}
			catch(err) {
				logger.error(err)
				if( err instanceof BizError ) throw err.getError()
				else throw error(500)
			}
		};
		
		return await database.transaction( TRAN, _trxStart )
	}
	
	/**
	 *  변경
	 *
	 * @param body
	 * @param params
	 */
	export const modify = async ( body: Object , params: Object  ) : Promise<any> => {
		
		const _trxStart = async (tx) => {
			try{
				return await TestBiz.modify( body, params ,tx );
			}
			catch(err) {
				logger.error(err)
				if( err instanceof BizError ) throw err.getError()
				else throw error(500)
			}
		};
		
		return await database.transaction( TRAN, _trxStart )
	}
	
	/**
	 * 등록
	 *
	 * @param body
	 */
	export const create = async ( body: Object ) : Promise<any> => {
		
		const _trxStart = async (tx) => {
			try{
				return await TestBiz.create( body, tx );
			}
			catch(err) {
				logger.error(err)
				if( err instanceof BizError ) throw err.getError()
				else throw error(500)
			}
		};
		
		return await database.transaction( TRAN, _trxStart )
	}
	
	
	/**
	 * 삭제
	 *
	 * @param params
	 */
	export const remove = async ( params: Object ) : Promise<any> => {
		
		const _trxStart = async (tx) => {
			try{
				return await TestBiz.remove( params , tx );
			}
			catch(err) {
				logger.error(err)
				if( err instanceof BizError ) throw err.getError()
				else throw error(500)
			}
		};
		
		return await database.transaction( TRAN, _trxStart )
	}
	
}