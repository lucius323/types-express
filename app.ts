/* app/server.ts */

// Import everything from express and assign it to the express variable
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as cors from "cors";


import { IndexRoute } from './util/IndexRoute'
import * as path from "path";
import * as os from 'os'

const config = require('config')

export class Server {
	/* app에 대한 타입 설정 */
	public app: express.Application;
	
	/**
	 * Bootstrap the application.
	 *
	 * @class Server
	 * @method bootstrap
	 * @static
	 * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
	 */
	public static bootstrap(): Server {
		return new Server();
	}
	
	/**
	 *
	 */
	constructor() {
		//create expressjs application
		this.app = express();
		
		//configure application
		this.config();
		
		//add routes
		this.routes();
		
		//add api
		//this.api();
	}
	
	private config(): void {
		
		//use json form parser middlware
		this.app.use(bodyParser.json());
		
		//use query string parser middlware
		this.app.use(bodyParser.urlencoded({extended: true}));
		
		logger.token('date', ():any=>{
			return  new Date() ;
		});
		
		this.app.use(logger('combined'))
		this.app.set('views', path.join(__dirname, 'views'));
		this.app.set('view engine', 'ejs');
		
	}
	
	private routes(): void {
		
		let router: express.Router = express.Router();
		
		//const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);
		//this.app.use( '/user', require(route.fn.path) );
		
		/* GET home page. */
		router.get('/', function(req, res, next) {
			res.render('index', { title: 'Express' });
		});
		
		IndexRoute.create( this.app );
		
		this.app.use(router);
		
		console.log('================================================');
		console.log(' Start KBP-API Server                 ');
		console.log(' * NODE_ENV    : %s'           ,process.env.NODE_ENV);
		console.log(' * config Name : %s'           ,config.get('name'));
		console.log('================================================');
		
		//catch 404 and forward to error handler
		this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
			err = new Error('Not Found')
			err.status = 404;
			next(err);
		});
		
		//error handling
		this.app.use( (err:any, req: express.Request, res: express.Response, next: express.NextFunction)=> {
			/*logger.info( `error handler error=>${JSON.stringify(err,null,2)}` )
			return res.status(500).json({error: err});*/
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development' ? err : {};
			// render the error page
			res.status(err.status || 500);
			res.render('error');
		});
	}
	
	
	
}