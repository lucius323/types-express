

import { Application, Request , Response , NextFunction } from 'express';
//import * as usersRouter from '../api/users/users-router'

import { routes } from '../route'

import { logger } from "../lib/logger";


export class IndexRoute {

	public static create( app: Application  ) {
		
		routes.list.forEach( route =>{
			if(route.use){
				app.use( route.path, require(route.fn.path))
			}
		})
	}
	
	public static reqInfo( req: Request , res: Response , next : NextFunction ) {
		logger.info(`===================== GET REQUEST INFORMATIONS =====================`)
		logger.info(`ORIGINAL_URL => ${req.originalUrl}`)
		logger.info(`BASE_URL => ${req.baseUrl}`)
		logger.info(`PATH => ${req.path}`)
		logger.info(`METHOD => ${req.method}`)
		logger.info(`====================================================================`)
		logger.info(`QUERY_PARAMS => ${JSON.stringify(req.query,null,2)}`)
		logger.info(`PATH_PARAMS => ${JSON.stringify(req.params,null,2)}`)
		logger.info(`BODY_PARAMS => ${JSON.stringify(req.body,null,2)}`)
		logger.info(`====================================================================`)
		next()
	}
}

