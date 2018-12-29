/**
 * Created by i99208 on 2016. 11. 16..
 */

import * as jwt from 'jsonwebtoken'

const config = require('config');

const SEC = config.get('Token.auth.key');
const OPT = config.get('Token.auth.options');

export const generate = (obj:any) => {
	return jwt.sign( obj, SEC , OPT );
}

export const verify = async (token:any, done:any) => {
 
 
	jwt.verify( token , SEC, function(err,decoded){
		if(err){
			done(err,decoded);
		}
		else{
			
			var now = Date.now() / 1000;
			if (decoded.exp <= now) {
				done({"status": 401,"message": "토큰이 만료되었습니다."},decoded);
			}
			
			done(null,decoded);
		}
	});
}

export const decode = (token: any) => {
	return jwt.decode( token );
}
