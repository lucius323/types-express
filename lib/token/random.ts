/**
 * Created by i99208 on 2016. 11. 15..
 */
import * as crypto from 'crypto'

function randomString(length: number , chars: string){
	if (!chars) {
		throw new Error('Argument \'chars\' is undefined');
	}
	
	let charsLength = chars.length;
	if (charsLength > 256) {
		throw new Error('Argument \'chars\' should not have more than 256 characters'
			+ ', otherwise unpredictability will be broken');
	}
	
	const randomBytes = crypto.randomBytes(length);
	let result = new Array(length);
	
	let cursor = 0;
	for (let i = 0; i < length; i++) {
		cursor += randomBytes[i];
		result[i] = chars[cursor % charsLength];
	}
	
	return result.join('');
}

export const generate = (len:number) =>{
	return randomString(len, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
}
