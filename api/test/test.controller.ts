import { Request, Response } from 'express'
import { TestService } from './test.service'
import { error } from "../../lib/error";
import { isEmpty } from '../../lib/common'

export class TestController  {
	
	/**
	 *  검색
	 *
	 * @param req
	 * @param res
	 */
	public retrieve = async (req: Request, res: Response ) => {
		
		let params = req.query
		
		try {
			let result = await TestService.retrieve(params)
			res.json(result)
		}
		catch(err){
			res.status(500).json(err)
		}
		
	}
	
	/**
	 *  조회
	 *
	 * @param req
	 * @param res
	 */
	public find = async ( req: Request, res: Response ) => {
		
		let id = req.params.id
		
		if(isEmpty(id)){
			return res.status(400).json(error(400))
		}
		
		let params = {
			id
		}
		
		try {
			let result = await TestService.find(params)
			res.json(result)
		}
		catch(err){
			res.status(500).json(err)
		}
	}
	
	/**
	 *  수정
	 *
	 * @param req
	 * @param res
	 */
	public modify = async ( req: Request, res: Response ) => {
		
		let id = req.params.id
		let body = req.body
		
		if(isEmpty(id) || isEmpty(body)){
			return res.status(400).json(error(400))
		}
		
		let params = {
			id
		}
		
		try {
			let result = await TestService.modify( body, params )
			res.json(result)
		}
		catch(err){
			res.status(500).json(err)
		}
		
	}
	
	
	/**
	 * 등록
	 *
	 * @param req
	 * @param res
	 */
	public create = async ( req: Request, res: Response ) => {
		
		let body = req.body
		
		if(isEmpty(req.body) ){
			return res.status(400).json(error(400))
		}
		
		try {
			let result = await TestService.create( body )
			res.json(result)
		}
		catch(err){
			res.status(500).json(err)
		}
		
	}
	
	
	/**
	 *  삭제
	 *
	 * @param req
	 * @param res
	 */
	public remove = async ( req: Request, res: Response ) => {
		
		let id = req.params.id
		
		if(isEmpty(id)){
			return res.status(400).json(error(400))
		}
		
		let params = {
			id
		}
		
		try {
			let result = await TestService.remove( params )
			res.json(result)
		}
		catch(err){
			res.status(500).json(err)
		}
		
	}
	
}