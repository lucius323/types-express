import {Request ,Response ,NextFunction} from "express";
const logger = require('../logger/index')

import * as auth from "../../lib/token/auth"

import { error } from "../../lib/error";
import {BizError} from "../../lib/error/bizError";

import { code } from '../../util/commonCode'

const parseAccessToken = ( req:Request ) => ( req.body.accessToken || req.query.accessToken || req.params.accessToken || req.headers['x-access-token'] );

export const isUserAuthenticate = (req:Request, res: Response, next: NextFunction)=>{
	
	// check header or url parameters or post parameters for token
	let accessToken = parseAccessToken(req);
	
	logger.debug('api/authenticate.controller isUserAuthenticate accessToken= ' + accessToken);
	
	// decode token
	if (accessToken) {
		auth.verify( accessToken, (err, decoded)=> {
			if (err) {
				return res.status(401).json(err);
			} else {
				if( decoded.auth < code.ACCESS_TOKEN.AUTH.GUEST){
					return res.status(401).json( error(401) );
				}
				req['decoded'] = decoded;
				next();
			}
		});
		
	}
	else {
		next();
	}
	
}
