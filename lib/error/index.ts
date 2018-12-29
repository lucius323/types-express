/**
 * Created by CYK on 2016-11-27.
 */

import { errorMessage } from './errorMessage'

const getMessage = (code,name,message)=>{
	return { code:code, name:name, message:message };
};

export const error = (codeStr?, message?, suggest? )=>{
	
	if( !isNaN( codeStr ) ){
		codeStr = codeStr+'';
	}
	
	if( !errorMessage[codeStr] ){
		return {
			error:{
				code: "system",
				name:"사용자 요청에 대한 적절한 응답을 찾을 수 없습니다.",
				message:"담당자에게 문의해 주시기 바랍니다."
			}
		}
	}
	
	let error = {
		code: codeStr,
		name: errorMessage[codeStr].name
	};
	
	if(message){
		error['message'] = message;
	}
	else{
		if(errorMessage[codeStr].message){
			error['message'] = errorMessage[codeStr].message;
		}
	}
	
	if(suggest){
		error['suggest'] = suggest;
	}
	else{
		if(errorMessage[codeStr].suggest){
			error['suggest'] = errorMessage[codeStr].suggest;
		}
	}
	
	return {error};
};

