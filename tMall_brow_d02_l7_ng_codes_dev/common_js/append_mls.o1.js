var getDefUrlPgp = function (  )
{
	var baseURI = baseURI ? baseURI : window.baseURI ? window.baseURI : document.querySelector( "base" ) ? document.baseURI : "" ;
	var defUrlPgp = 
	{
		meta : 
		[/*
			{
				"viewport" : 
				{
					"name" : "viewport" ,
					"content" : "width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" ,

				} ,
				"meta01" : 
				{
					"name" : "renderer" ,
					"content" : "webkit" ,
				} ,
				"meta02" : 
				{
					"http-equiv" : "X-UA-Compatible" ,
					"content" : "IE=edge, chrome=1" ,
				} ,
				"pragma" : 
				{
					"http-equiv" : "pragma" ,
					"content" : "no-cach" ,
				} ,
				// "meta04" : {
				// 	"http-equiv" : "Content-Type" ,
				// 	"content" : "text/html,charset=utf-8" ,
				// } ,
				"utf-8" : 
				{
					"charset" : "utf-8" ,
				} ,
				// "description" : {
				// 	"name" : "description" ,
				// 	"content" : ""
				// } ,
				"keywords" : 
				{
					"name" : "keywords" ,
					"content" : "" ,
				} ,
				"apple-mobile-capable" : 
				{
					"name" : "apple-mobile-web-app-capable" ,
					"content" : "yes" ,
				} ,
				"bar-style" : 
				{
					"name" : "apple-mobile-web-app-status-bar-style" ,
					"content" : "black" ,
				} ,


			} ,*/
		] ,
		link : 
		[/*
			{

				"shortcut" : 
				{
					"rel" : "shortcut icon" ,
					"href" : "favicon.ico" ,
				} ,
				"apple-touch" : 
				{
					"rel" : "apple-touch-icon-precomposed" ,
					"href" : "assets/img/apple-touch-icon-114x114.png" ,
				} ,
			} ,
			// {
			// 	common_cs_trad : baseURI + "cs_trade/css/common_cs_trad.css" ,
			// 	demo : baseURI + "jiaoben_loading_3025/css/demo.css" ,
			// } ,
			// {
			// 	fakeloader : baseURI + "jiaoben_loading_3025/css/fakeloader.css" ,
			// } ,*/
		] ,
		script : 
		[
			{
				// angular :  "http://code.angularjs.org/angular-1.0.1.min.js" ,
				// jquery : baseURI + "code_common/common_js/jquery-1.9.0.custom.js" ,
				// flexible : baseURI + "code_common/lib-flexible-master/src/flexible.js" ,
			} ,
// 						{
// 							common_foundation : baseURI + "code_common/common_js/common_foundation.js" ,
// 						} ,
// 						{
// 							cs_load_common_html : baseURI + "cs_trade/js/cs_load_common_html.js" ,
// 						} ,
		] ,
	} ;
	for ( var i in defUrlPgp ) 
	{
		if ( defUrlPgp.hasOwnProperty( i ) )
		{
			defUrlPgp[ i ].__proto__.defFlag = true  ;
		} ;
	} ;
	
	return defUrlPgp ;
} ;
void function () 
{

if ( !Object.assign ) 
{
	Object.defineProperty
	(
		Object , 
		"assign" ,
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( target , firstSource ) 
			{
				"use strict" ;
				if ( target === undefined || target == null )
					throw new TypeError( "Cannot convert first argument to object" ) ;
				var to = Object( target ) ;
				for ( var i = 1 ; i < arguments.length ; i++ ) 
				{
					var nextSource = arguments[ i ] ;
					if ( nextSource === undefined || nextSource == null ) continue ;
					var keysArray = Object.keys( Object( nextSource ) ) ;
					for ( var nextIndex = 0 , len = keysArray.length ; nextIndex < len ; nextIndex++ ) 
					{
						var nextKey = keysArray[ nextIndex ] ;
						var desc = Object.getOwnPropertyDescriptor( nextSource , nextKey ) ;
						if ( desc !== undefined && desc.enumerable ) to[ nextKey ] = nextSource[ nextKey ] ;
					} ;
				} ;
				return to ;
			} ,
			
		}
		
	) ;
} ;

Object.defineProperties
(
	Object.prototype ,
	{
		"thisOrArgs" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( unit ) 
			{
				try 
				{
					var args = Array.prototype.slice.call( arguments ) ; 
					unit = ( args.length == 1 && unit ) ? 
						unit = args[ args.length - 1 ] : 
						this ;
					if ( typeof unit === "string" ) 
					{
						return unit ;
					}
					else
					{
						throw new TypeError( "not string" ) ;
						return false ;
					} ;
				}
				catch ( e )
				{
					throw e ;

				} ;

			} ,
		} ,
		"verifyType" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value :	function ( unit )
			{
				var args = Array.prototype.slice.call( arguments ) ;
				unit = this.parseArgs( arguments , 1 , unit ) ;
				var type = "" ;
				switch ( unit )
				{
					case undefined :
						return undefined ;
					break ;
					case null :
						return null ;
					break ;
				} ;
				if ( typeof unit === "object" )
				{
					return  ( "name" in unit.constructor ) ? 
							unit.constructor.name : 
							"length" in unit ? 
							"Array" :
							"Object" ;
				}
				else if ( typeof unit !== "object" )
				{
					return typeof unit ;
				} ;
				return type ;
			} ,
		} ,
		"thisIdx" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( htmlcol ) 
			{
				var args = Array.prototype.slice.call( arguments ) ;
				htmlcol = ( args.length == 3 && htmlcol ) ? 
						args[ args.length - 1 ] :
						this ;
				for ( var i = 0 ; i < htmlcol.length ; i++ ) 
				{
					if ( this == htmlcol[ i ] )
					{
						return i ;
					} ;
				} ;
			} 
		} ,
		"argsConvertAry" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( paireGroup )
			{
				paireGroup.__proto__ = Array.prototype ;
				console.log("paireGroup",paireGroup);
				return paireGroup ;
			} 
		} ,
		"setIndex" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( unitsGroup ) 
			{
				var args = Array.prototype.slice.call( arguments ) ;
				unitsGroup = ( args.length == 1 && unitsGroup && unitsGroup != undefined && unitsGroup != null ) ? 
						 unitsGroup = args[ args.length - 1 ] : 
						 this ;
				var Obj = {} ;
				var idx = 0 ;
				hfA01 : for ( var key in unitsGroup )
				{
					if ( !unitsGroup.hasOwnProperty ( key ) ) continue hfA01 ;
					try
					{  
						if ( unitsGroup[ key ].constructor.name != "Object" ) 
							// throw new TypeError( "key type must is Object" ) ;
						console.log( "key type must is Object" ) ;
						if ( unitsGroup[ key ].constructor.name == "Object" )
							unitsGroup[ key ].index = ++idx 
						else 
							// unitsGroup[ key ].index ;
							Object.defineProperties(
								unitsGroup[ key ] ,
								{
									"index" : {
										enumerable : true ,
										configurable : true ,
										writable : true ,
										value : ++idx ,
									} ,
								} 
							) ;
							// unitsGroup[ key ].__proto__.index = idx++ ;
						Obj[ key ] = unitsGroup[ key ] ;
					} 
					catch ( err ) 
					{
						console.log( "err:" , err ) ;
					} ;
				} ;
				return Obj ;
			} 
		} ,
		"getLength" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ()
			{
				if ( "length" in this ) return this.length ;
				var length = 0 ;
				for ( var key in this ) 
				{
					++length ;
				} ;
				return length ;
			} 
		} ,
		"objConvertAry" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( paireGroup )
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				paireGroup = ( args.length == 1 && paireGroup ) ? 
							paireGroup = args[ args.length - 1 ] : 
							this ;
				console.log("paireGroup:",paireGroup);
				var ary = [] ;

				for ( var obje in paireGroup )
				{
					if ( paireGroup.hasOwnProperty ( obje ) )
					{

							ary.push ( paireGroup[ obje ] ) ;

					} ;
				} ;
				console.log("ary:",ary);
				return ary ;
			} 
		} ,
		"objToAry" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( paireGroup )
			{
				console.log("this:",this);
				var ary = [] ;
				if ( Object.prototype.verifyType ( paireGroup ) !== "Object" )
				{
					console.log("Object.prototype.verifyType(paireGroup):" , Object.prototype.verifyType (paireGroup) );
					return ;
				} ;

				var callBackFn = paireGroup.isArguments(  )[ "callBackFn" ] ;
				console.log("callBackFn:",callBackFn);
				ary = callBackFn( paireGroup ) ;
				return ary ;
			} 
		} ,
		"isArguments" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( paireGroup ) 
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				paireGroup = ( args.length == 1 && paireGroup ) ? 
							paireGroup = args[ args.length - 1 ] : 
							this ;
				var flag = null ;
				var callBackFn = null ;
				if ( "callee" in paireGroup )
				{
					flag = true ;
					callBackFn = Object.prototype.argsConvertAry ;
				}
				else if 
				(
					!( "callee" in paireGroup ) 
				)
				{
					flag = false ;
					callBackFn = Object.prototype.objConvertAry ;
				} ;
				console.log("callBackFn",callBackFn);
				return { flag : flag , callBackFn : callBackFn , } ;
			} 
		} ,
		"parseArgs" :
		{
			enumerable : false ,
			configurable : true , 
			writable : true ,
			value : function ( args , numLength , unit ) 
			{
				if ( !( "callee" in args ) ) 
				{ 
					throw new TypeError( "necessary arguments" ) ;
					return ;
				} ;
				args = Array.prototype.slice.call( args ) ;
				var result = ( args.length == numLength && unit ) ?
							args[ args.length - 1 ] :
							this ;
				return result ;
			} 
		} ,
		"insertAfter" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( govern , refe , injection )
			{
				if ( arguments.hasNullPointer ().flag ) return ;
				var args = Array.prototype.slice.call ( arguments ) ;
	// 			if ( $args == null || $args == undefined ) return ;
				injection = ( args.length == 3 && injection ) ? 
							injection = args[ args.length - 1 ] : 
							this ;
				govern.insertBefore ( injection , refe.nextSibling ) ;
			} 
		} ,
		"combineUgNestUg" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( unitsGroupA , unitsGroupB )
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				unitsGroupB = ( args.length == 2 && unitsGroup && unitsGroup != undefined && unitsGroup != null ) ? 
							unitsGroup = args[ args.length - 1 ] : 
							this ;
				var interAry = null ;
				var exterAry = unitsGroupB.getLength () - unitsGroupA.getLength () >= 0 
				?
				(
					function ()
					{
						interAry = unitsGroupA ;
						return unitsGroupB ;
					}
				)() 
				:
				(
					function ()
					{
						interAry = unitsGroupB ;
						return unitsGroupA ;
					}
				)() ;
				hfA01 : for ( var e in exterAry ) 
				{
					if ( !exterAry.hasOwnProperty ( e ) ) continue hfA01 ;
					if ( e in interAry )
					{
						var Ndef = null ;
						var def = interAry.defFlag ?
								(
									function ()
									{
										Ndef = exterAry[ e ] ;
										return interAry[ e ] ;
									}
								)() 
								:
								(
									function ()
									{
										Ndef = interAry[ e ] ;
										return exterAry[ e ] ;
									}
								)() ;

						exterAry[ e ] = Object.assign ( def , Ndef ) ;
					} ;
				} ;
				
				var nonp = exterAry.hasNullPointer () ;
				return nonp.unit ;
			} 
		} ,
		"haveAnyProperty" :
		{
			enumerable : false ,
			configurable : false ,
			writable : true ,
			value : function ( )
			{
				var res = null ;
				for ( var k in this )
				{
					if ( this.hasOwnProperty ( k ) )
					{
						return true ;
					} ; 
				} ;
				return false ;
			} 
		} ,
		"hasNullPointer" :
		{
			enumerable : false ,
			configurable : false ,
			writable : false ,
			value : function ( unitsGroup ) 
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				unitsGroup = ( args.length == 1 && unitsGroup && unitsGroup != undefined && unitsGroup != null ) ? 
							unitsGroup = args[ args.length - 1 ] : 
							this ;
				var unitA = ( unitsGroup.verifyType () === "Object" ) ? 
							new Object () : 
							( unitsGroup.verifyType () === "Array" ) ?
							new Array () :
							null ;
				var unitB = null ;
				var flag = false ;
				var nullPointInc = { indicatorA : 0 , indicatorB : 0 , } ; 
				var unitsGroupLength = { indicatorA : 0 , indicatorB : 0 , } ;
				hfa01 : for ( var indicatorA in unitsGroup ) 
				{
					++unitsGroupLength.indicatorA ;
					if ( !unitsGroup[ indicatorA ] ) ++nullPointInc.indicatorA ;

					if ( nullPointInc.indicatorA == unitsGroupLength.indicatorA ) 
					{ 
						return { unit : null , flag : true , } ; 
					} ;
					if 
					( 
						!unitsGroup[ indicatorA ] 
						|| !unitsGroup.hasOwnProperty( indicatorA ) 
					) 
					{
						console.log( "unitsGroup[%o]:" , indicatorA , unitsGroup[ indicatorA ] ) ;
	// 					throw new TypeError( unitsGroup + "[" + indicateA +"]" + "nullPoint" ) ;
						flag = true ;
						
						continue hfa01 ;
					} ;
					
					switch ( unitsGroup[ indicatorA ].verifyType () )
					{
						case "Object" :
							unitB = new Object () ;
						break ;
						case "Array" :
							unitB = new Array () ;
						break ;
					} ; 
					hfa02 : for ( var indicatorB in unitsGroup[ indicatorA ] ) 
					{
						++unitsGroupLength.indicatorB ;
						if ( !unitsGroup[ indicatorA ][ indicatorB ] ) ++nullPointInc.indicatorB ;

						if 
						( 
							!unitsGroup[ indicatorA ][ indicatorB ] 
							|| !unitsGroup[ indicatorA ].hasOwnProperty( indicatorB )  
						) 
						{
							console.log( "unitsGroup[ indicatorA ][ indicatorB ]" , unitsGroup[ indicatorA ][ indicatorB ] ) ;
							flag = true ;
							
							continue hfa02 ;
						} ;

						unitB[ indicatorB ] = unitsGroup[ indicatorA ][ indicatorB ] ;
					} ;
					if ( !unitB.haveAnyProperty () ) continue hfa01 ;
					unitA[ indicatorA ] = unitB ;
				} ;
				return { 
							unit : unitA.haveAnyProperty () ? unitA : null , 
							flag : flag , 
						} ;
			} 
		} ,
		"hasSubTagName" :
		{
			enumerable : false ,
			configurable : false ,
			writable : false ,
			value : function ( subTagName , domCollection ) 
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				domCollection = ( args.length == 2 && domCollection ) ?
								domCollection = args[ args.length - 1 ] : 
								this ;
				
				for ( var subDom in domCollection ) 
				{ 
					if ( domCollection[ subDom ].tagName == subTagName && domCollection.hasOwnProperty( subDom ) ) 
					{
						return true ;
					} ; 
				} ;
				return false ;
			} 
		} ,

	}
	
) ;

Object.defineProperties
(
	Array.prototype ,
	{
		"getLength" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : Object.prototype.getLength ,
		} ,
		"combineUgNestUg" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : Object.prototype.combineUgNestUg ,
		} , 
		"defFlag" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value :  null ,
		} 
	}
	
) ;
 
Object.defineProperties
(
	String.prototype ,
	{
		"getSearch" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( urlStrOpt )
			{
				var args = Array.prototype.slice.call( arguments ) ;
				urlStrOpt = ( args.length == 1 && urlStrOpt ) ? 
						 urlStrOpt = args[ args.length - 1 ] : 
						 typeof this === 'string' ?
						 this :
						 null ;
				var urlStrDef = location.href ? location.href : document.URL ? document.URL : urlStrOpt ? urlStrOpt : this ;
				
				if ( typeof urlStrDef != "string" ) throw new TypeError( "urlStrDef must string " ) ;
				var searchStr = window.location ? location.search : urlStrDef.match( /\?+.*$/ig )[ 0 ] ;
				if( searchStr.indexOf( "?" ) == 0 ) 
				{
					var sliceRes = searchStr.slice(1) ; 
					var etyAry = sliceRes.split( "&" ) ;
					var obj = {} ;
					for ( var i = 0 ; i < etyAry.length ; i++ )
					{
						var pgAry = etyAry[ i ].split( "=" ) ;
						obj[ pgAry[ 0 ] ] = pgAry[ 1 ] ;
					} ;
				}
				else
				{
					throw new RangeError( "none search" ) ;
				} ;
				return obj ;
			} ,
		} ,
		"getUrlFileName" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( unitsGroup )
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				unitsGroup = ( args.length == 1 && unitsGroup && unitsGroup != undefined && unitsGroup != null ) ? 
						 unitsGroup = args[ args.length - 1 ] : 
						 this && typeof this == "string" ?
						 this :
						 null ;
				var url = unitsGroup ? unitsGroup : 
							( document.url && document.url != "" ) ?
							document.url : 
							location.href ;

				var fileName = "" ;
				if ( url.charAt ( url.length - 1 ) == "/" 
					&& url.lastIndexOf ( "/" ) == url.length - 1 )
				{
					fileName = "index" ;
				}
				else if ( url.lastIndexOf ( "/" ) != -1 )
				{
					fileName = url.substr ( url.lastIndexOf ( "/" ) + 1 ) ;
				}  ;
				return fileName ;
			} 
		} ,
		"crtTagEles" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( attrObj , tagType ) 
			{
	// 			if ( arguments.hasNullPointer().flag ) return ;
				var args = Array.prototype.slice.call ( arguments ) ;
	// 			if ( !$args ) return  ;
	// 			tagType = ( args.length == 2 && tagType ) ? 
	// 					  tagType = args[ args.length - 1 ] : 
	// 					  this ;
				tagType = this.parseArgs ( arguments , 2 , tagType ) ;
				var ele = document.createElement ( tagType ) ;
				for ( var _key in attrObj )
				{
					ele.setAttribute ( _key , attrObj[ _key ] ) ;
				} ;
				return ele ;
			} 
		} ,
		"getSchema" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( schemaRegStr , virtualPathCount , urlStr ) 
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				var urlStrDef = location.href ? location.href : document.URL ? document.URL : urlStr ? urlStr : this ;
				urlStr = ( args.length == 3 && urlStr ) ? 
						urlStr = args[ args.length - 1 ] : 
						typeof this === 'string' ?
						this :
						urlStrDef ;
				var virtualPathPatt = "\\/\\w+" ;
				virtualPathCount = 
				( 
					!virtualPathCount && virtualPathCount === undefined && virtualPathCount == null 
				) 
				?
				virtualPathPatt 
				:
				( /\d+/ig ).test ( virtualPathCount.toString () ) && !( /([^\d])+/ig ).test ( virtualPathCount.toString () ) 
				? 
				( 
					function () 
					{
						// virtualPathCount = virtualPathCount.match ( /\d+/ig ) ;
						virtualPathCount = new Number ( virtualPathCount ) ;
						var str = "\\/\\w+" ;
						for ( var i = 0 ; i < virtualPathCount - 1 ; i++ ) 
						{
							virtualPathPatt += virtualPathPatt ;
						} ;
						return virtualPathPatt ;
					} 
				)() 
				: 
				( 
					typeof virtualPathCount === "string" && window.isNaN( virtualPathCount ) 
				) 
				?
				virtualPathCount.indexOf ( "/" ) == 0 ? virtualPathCount : "/" + virtualPathCount 
				:
				virtualPathPatt ;
				
				var schemaRegStrDef = "^file:\\/\\/\\/[A-Za-z]:|(^http:\\/\\/(127.0.0.1:\\d+|localhost:\\d+|\\w+.\\w+.\\w+)?)?" ;
				schemaRegStr = ( schemaRegStr !== undefined && schemaRegStr !== null ) ? schemaRegStr : schemaRegStrDef ;

				
				var regExpObj = new RegExp ( schemaRegStr += virtualPathCount  , "ig" ) ;
				var regResStr = urlStr.match ( regExpObj ) ;
				return regResStr ;
			} 
		} ,
		"fnPgp_getUrl" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( num )
			{
				var args = Array.prototype.slice.call ( arguments ) ;
				let str_this = this ;
				var str_all = location.href ? location.href : document.URL ? document.URL : urlStr ? urlStr : str_this ;
				
				// let str_all = "<img src = 'http://www.abc.com/firesniper/adb/def/ghi/jkm/aaa.html' />" ;
				let str_schemaReg = `((?:http|https):)?\\/\\/(?:localhost|127.0.0.1|[\\w\\.-]+):?\\d*(?:\\\\|\\/)?` ;
				let reg_schemaReg = new RegExp ( str_schemaReg , `ig` ) ;
				let str_virRegPatt = `([\\w-]+(?:\\\\|\\/))` ;
				let str_virReg = str_virRegPatt + `{` + 0 + `,` + num + `}` ;
				console.log ( "str_virReg:" , str_virReg ) ;
				let str_fileNameReg = `([\\w\\.-]+(?:\\\\|\\/)?)?` ;
				let reg_virReg = new RegExp ( str_virReg , `ig` ) ;
				console.log ( "str_all.match ( reg_virReg ):" , str_all.match ( reg_virReg ) ) ;
				let str_urlReg = `(?:'|")?` + str_schemaReg + str_virRegPatt + "*" + str_fileNameReg + `(?:'|")?` ;
				// let ary_url_str = str_all.match ( /(?:'|")?((?:http|https):)?\/\/(?:localhost|127.0.0.1|[\w\.-]+):?\d*(?:\\|\/)?([\w\.-]+(?:\\|\/)?)*(?:'|")?/ig ) ;
				let ary_url_str = str_all.match ( new RegExp ( str_urlReg , `ig` ) ) ;
				console.log ( "ary_url_str:" , ary_url_str ) ;
				let ary_schema_str = ary_url_str[ 0 ].match ( reg_schemaReg ) ;
				console.log ( "ary_schema_str:" , ary_schema_str ) ;
				let str_start = ary_url_str[ 0 ].indexOf ( ary_schema_str [ 0 ] ) + ary_schema_str [ 0 ].length ;
				console.log ( "str_start:" ,  str_start ) ;
				let str_fd = ary_url_str[ 0 ].slice ( str_start ) ;
				console.log ( "str_fd:" , str_fd ) ;
				let ary_virPath_str = str_fd.match ( reg_virReg ) ;
				console.log ( "ary_virPath_str:" , ary_virPath_str ) ;
				let ary_scmVir_str = str_all.match 
				(
					// /(?:'|")?((?:http|https):)?\/\/(?:localhost|127.0.0.1|[\w\.]+)((?:\\|\/)\w+){0,4}(?:'|")?/ig 
					new RegExp ( str_schemaReg + str_virReg ) 
				) ;
				console.log ( "ary_scmVir_str:" , ary_scmVir_str ) ;
				return {
					"ary_url_str" : ary_url_str ,
					"ary_schema_str" : ary_schema_str ,
					"ary_virPath_str" : ary_virPath_str ,
					"ary_baseUrl_str" : ary_scmVir_str
				} ;
			} 
		} ,
		"suffix" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : false , 
			value : function ( jectStr )
			{
				// console.log( "arguments:",arguments );
				var args = Array.prototype.slice.call ( arguments ) ;
				jectStr = ( args.length == 1 && jectStr ) ? 
						jectStr = args[ args.length - 1 ] : 
						this ;
				// console.log("jectStr:",jectStr );
				var regRes  = jectStr.match ( /(?:\.\w+)/ig ) ;
				return regRes[ regRes.length - 1 ] ;

			}
		} ,
		"prefix" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( jectStr ) 
			{
				var args = Array.prototype.slice.call( arguments ) ;
				jectStr = ( args.length == 1 && jectStr ) ? 
						jectStr = args[ args.length - 1 ] : 
						this ;
				
				var prefix = jectStr.match ( /\.{0,1}\/|http:\/\// )[ 0 ] ;
				return prefix ;
			}
		} ,
		
		

	}
) ;
 



Object.defineProperties
(
	// 对Date的扩展，将 Date 转化为指定格式的String   
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
	// 例子：   
	// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
	// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
	Date.prototype ,
	{
		Format :
		{
			enumerable : false ,
			configurable : true ,
			writable : false ,
			value : function ( fmt )   
			{ //author: meizz   
			var o = {   
				"M+" : this.getMonth()+1,                 //月份   
				"d+" : this.getDate(),                    //日   
				"h+" : this.getHours(),                   //小时   
				"m+" : this.getMinutes(),                 //分   
				"s+" : this.getSeconds(),                 //秒   
				"q+" : Math.floor((this.getMonth()+3)/3), //季度   
				"S"  : this.getMilliseconds()             //毫秒   
			};   
			if(/(y+)/.test(fmt))   
				fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
			for(var k in o)   
				if(new RegExp("("+ k +")").test(fmt))   
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
			return fmt;   
			}
		}
	}
) ;

Object.defineProperties
(
	Function.prototype ,
	{
		"callerArgs" : 
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ()
			{

				if ( typeof this !== "function" )
				{
					throw new TypeError ( "type funtion" ) ;
				} ;
				var thisArgs = Array.prototype.slice.call ( this.arguments ) ;
				// console.log("this:",thisArgs);
				// console.log("this:",thisArgs[0]);
				// console.log("this:",thisArgs.callee);
				// console.log("this:",thisArgs.hasOwnProperty("callee"));
				var thisCallerArgs = Array.prototype.slice.call ( this.caller.arguments ) ;
				var argsObj = null ;
				var argsAry = null ; 
				if 
				( 
					this.caller 
					&& thisCallerArgs 
					&& thisCallerArgs == thisArgs[ 0 ] 
				)
				{
					argsObj = thisCallerArgs ;

				}
				else if ( thisCallerArgs != thisArgs[ 0 ] )
				{
					argsObj = thisArgs[ 0 ] ;

				} ;

				argsAry = Function.operateType.objToAry ( argsObj ) ;
				// console.log("args:",argsAry);
				return argsAry ;
			}
		}
		
	}
) ;

 

Object.defineProperties
(
	Boolean.prototype ,
	{
		"isAsynLoadFn" :
		{
			eumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ( coupleFnObj , isAsyn ) 
			{
				try
				{
					isAsyn = this ? this : isAsyn ;
					isAsyn =  ( isAsyn !== undefined && isAsyn !== null && typeof isAsyn === "boolean" ) ? isAsyn : false ;
				}
				catch ( e )
				{
					throw new TypeError ( "is boolean type error" ) ;
				} ;

				var callBackFn = null ;
				switch ( isAsyn ) 
				{
					case true :
						callBackFn = coupleFnObj.Asyn ;
					break ;
					case false :
						callBackFn = coupleFnObj.Syn ;
					break ;
					
				} ;
				return callBackFn ;
			}
		}
	}
) ;

if ( "baseURI" in document == false ) 
{
	Object.defineProperty(
		document ,
		"baseURI" ,
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : (  document.querySelector ( "base" ) 
						&& "href" in document.querySelector ( "base" ) ?
						document.querySelector ( "base" ).href : "" ) ,
		} 
	) ;
} ;
String.envOpt = {} ;
Object.defineProperties
(
	String.envOpt ,
	{
		"str_internalWeb" :
		{
			enumerable : true ,
			configurable : true ,
			writable : true ,
			value : 
			{
				ary_indicate : [ "localhost" , "127.0.0" ] ,
				pgp_servBaseUrl : "http://localhost:8080/mall_a01/" ,
				pgp_browBaseUrl : "http://localhost:3000/public//"
			}
		} ,
		"str_externalWeb" :
		{
			enumerable : true ,
			configurable : true ,
			writable : true ,
			value : 
			{
				ary_indicate : [ "www.firesnip.com" , "github" ] ,
				pgp_servBaseUrl : "http://www.spitc-cn.com/mall_a01_ol/" ,
				pgp_browBaseUrl : "http://www.firesnip.com/light7-mall_c01_ol/"
			}
		} 
	}
) ;
Object.defineProperties
(
	String ,
	{
		"optionfn" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ()
			{
				var option = String.envOpt ;
				var res = { mem : null , length : 0 } ;
				for ( var a in option )
				{
					var length = Object.keys ( option [ a ] ).length ;
					if ( length >= res.length )
					{
						res.length = length ;
						res.mem = a ;
					} ;
				} ;
				console.log ( "res:" , res ) ;
				String.envParams = {} ;
				var pgp = {} ;
				for ( var column in option [ res.mem ] )
				{
					pgp [ column ] = {} ;
					for ( var l in option )
					{
						pgp [ column ] [ l ] = option [ l ] [ column ] ;
					} ;
				}
				String.envParams = pgp ;
				console.log ( "String.envParams:" , String.envParams ) ;
				 
			} ()
		} 
	}

) ;
Object.defineProperties
(
	String ,
	{
		
		"fnPgp_getEnvState" :
		{
			enumerable : false ,
			configurable : true ,
			writable : true ,
			value : function ()
			{

				/*var envScmAry = String.prototype.getSchema ( null , 3 ) ;
				console.log ( "envScmAry:" , envScmAry ) ;
				envScmAry[ 0 ] + envScmAry[ 1 ] ;*/
				var pgp_env = String.prototype.fnPgp_getUrl ( 2 ) ;
				console.log ( "pgp_env:" , pgp_env ) ;
				var str_schema		= pgp_env.ary_schema_str [ 0 ] ;

				var str_optionIndicate = "" ;
				var pgp_envOpt = {} ;
				for ( var a in String.envOpt )
				{
					bol_optionIndicate =  
					( 
						new RegExp 
						( 
							"(?:" 
							+ String.envOpt [ a ] [ "ary_indicate" ] .join ( "|" ) 
							+ ")" 
							, 
							"ig" 
						) 
					).test ( str_schema ) ;
					if ( bol_optionIndicate )
					{
						str_optionIndicate = a ;
						pgp_envOpt = String.envOpt [ a ] ;
					} ;
				} ;
				window.pgp_envState = 
				{
					"str_baseUrl" 			: pgp_env.ary_baseUrl_str [ 0 ] ,
					"str_schema"			: str_schema , 
					"str_url" 				: pgp_env.ary_url_str [ 0 ] ,
					"str_virPath" 			: pgp_env.ary_virPath_str [ 0 ] ,
					"str_optionIndicate"	: str_optionIndicate ,
					"pgp_envOpt" 			: pgp_envOpt
				} ; 	
				console.log ( "window.pgp_envState:" , window.pgp_envState ) ;
				
			} () 
		}
	}
) ;

}() ;




;( function ( $html , $head , $body , getDefUrlPgp ) 
{
"use strict" ;

$html = "0" in $html && $html[ 0 ] ? $html[ 0 ] : $html ;
$head = "0" in $head && $head[ 0 ] ? $head[ 0 ] : $head ;
$body = "0" in $body && $body[ 0 ] ? $body[ 0 ] : $body ;
if ( "0" in $body && $body[ 0 ] ) 
{
	var $script = $body.getElementsByTagName( "script" ) ;
	$script = "0" in $script && $script[ 0 ] ? $script[ 0 ] : $script ;
} ;

var classPgp = 
{
	scIns : function ( )
	{
		classPgp.scIns.prototype.insObj = this.__proto__ ;
		classPgp.scIns.prototype.inc = { a : 0 , b : 0, c : 0 } ;
		classPgp.scIns.prototype.tmpv = { a : null } ;

		classPgp.scIns.prototype.generateEle = function ( url , suffix , linkPaireGroup ) 
		{
			var defLinkPaireGroup = {
							"href" : url ,
							"type" : "text/css" ,
							"rel" : "stylesheet"
						} ;
			linkPaireGroup = linkPaireGroup ? linkPaireGroup : defLinkPaireGroup ;
			switch ( suffix )
			{

				case ".css" :
					return url.crtTagEles(
						
						linkPaireGroup ,
						"link" 
					) ;
				break ;

				case ".js" :
					return url.crtTagEles(
						
						{
							"src" : url ,
							"type" : "text/javascript" ,
						} ,
						"script" 
					) ;
				break ;
			}
		} ;

		classPgp.scIns.prototype.crtEleObj = function ( urlPgp , tagName )
		{
			// console.log("urlPgp:", urlPgp) ;
			if ( !urlPgp || urlPgp == undefined || urlPgp == null ) 
			{
				throw new TypeError( "null point error" ) ;
				// return false ;
			} ;
// 			urlPgp = urlPgp.objConvertAry() ;
			var cssEleObj = {} ;
			var suffix = "" ;
			var ele = null ;
			var eleAry = [] ;
			var eleObj = {} ;
			af01 : for ( var o in urlPgp )
			{
				eleAry = [] ;
				if ( urlPgp.hasOwnProperty( o ) !== true ) continue af01 ;
				af02 : for ( 
					var i in urlPgp[ o ]  
				)
				{
					if ( urlPgp[ o ].hasOwnProperty( i ) !== true ) continue af02 ;
					// console.log( urlPgp[ o ][ i ] );
					var paireUnit = urlPgp[ o ][ i ] ;
					switch ( paireUnit.verifyType(  ) ) 
					{
						case "String" :
							// console.log( "suffix:" , paireUnit.suffix(  ) );
							suffix = paireUnit.suffix(  ) ;
							ele = classPgp.scIns.prototype.insObj.generateEle( paireUnit , suffix ) ;
						break ;

						case "Object" :
							tagName = "href" in paireUnit ?
									  "link" :
								  	  "src" in paireUnit ?
								  	  "script" :
								  	  "meta" ;
							ele = String.prototype.crtTagEles(
								paireUnit ,
								tagName  
							) ;
						break ;
					} ;
					// console.log("ele:" ,ele);
// 					eleAry[ i ] = ele ;
					eleAry.push( ele ) ;
				}
				eleObj[ o ] = eleAry ;
			}
			// console.log("eleObj:" , eleObj);
			return eleObj ;
		} ;

		classPgp.scIns.prototype.load_sc = function ( scArr , label , isAsyn ) 
		{
			
			var inc = { a : 0 , b : 0 , c : 0 , } ;
			// console.log("label:" , classPgp.scIns.prototype.insObj.label);

			var fn = Function.isAsynLoadFn ( classPgp.scIns.prototype.appendSc , isAsyn ) ;
			fn ( scArr[ label ] , label , inc ) ;
		} ;
		classPgp.scIns.prototype.appendSc = function ( scArr , label , isAsyn , inc ) 
		{
			inc = 
			inc ? 
			inc : 
			( function ( label ) 
				{
					var obj = {} ;
					obj[ label ] = 0 ;
					return obj ;
				}
			)( label ) ;
			
			var mainCallBack = 
			{
				Syn : function ( scArr , label , inc ) 
				{
					if ( scArr[ label ] == null || scArr[ label ] === undefined || inc[ label ] >= scArr[ label ].length ) 
					{
						inc[ label ] = 0 ;
						return ;
					} ;

					// console.log( "scArr[this.inc[label]]:" , scArr[ label ][ inc[ label ] ] );
					var scEle = scArr[ label ][ inc[ label ] ] ;
	
					var domGovern = null ;
					var domParent = "" ;
					var isAsyn = null ;
					var tagType = ( "href" in scEle ) ? 
								  scEle.href.suffix() : 
								  ( "src" in scEle ) ?
								  scEle.src.suffix() :
								  "meta" ;
					if ( tagType == ".css" || tagType == ".js" )
					{
						isAsyn = false ; 
					} 
					else if ( tagType == ".ico" || tagType == ".png" || tagType == "meta" )
					{
						isAsyn = true ; 
					} ;

					if ( "tagName" in scEle ) 
					{
						var eleTagName =  scEle.tagName ;
			  				   
					} 
					else 
					{
						throw new TypeError ( "necessary htmlElement" ) ;
					} ;	
					if ( domParent = scEle.getAttribute ( "domParent" ) )
					{
						domParent = domParent ;
						// console.log( "domParent :" , domParent ) ;
					}
					
					switch ( eleTagName ) 
					{
						case "LINK" :
							domGovern = 
							domParent 
							?
							(
								function ()
								{
									// var domGovern = null ;
									switch ( domParent )
									{
										case "head" :
											return $head ;
											break ;
										case "body" :
											return $body ;
											break ;
									} ;
								}
							)() 
							:
							$head ;
						break ;
						case "META" :
							domGovern = $head ;
						break ;
						case "SCRIPT" :
							domGovern = 
							!domParent 
							? 
							$body :
							domParent == "head" 
							?
							$head : 
							$body ;
										
						break ;
					} ;
					var synCbFn = function ()
					{
						if ( inc[ label ] < scArr[ label ].length ) 
						{
							inc[ label ] ++ ;
							mainCallBack.Syn( scArr , label , inc ) ;
						} ;
					} ;
					domGovern.appendChild ( scEle ) ;
					if ( isAsyn )
					{
						synCbFn () ;
					} 
					else 
					{
						scEle.addEventListener
						(
							"load" ,
							function ( event ) 
							{

// 								console.log( "this:" , this , event );

								// if ( inc[ label ] < scArr[ label ].length ) 
								// {
								// 	inc[ label ]++ ;
								// 	mainCallBack.Syn( scArr , label , inc ) ;
								// } ;
								synCbFn() ;

							}
						) ;
					} ;
					
				} ,
				Asyn : function ( scArr , label , inc ) 
				{
					for ( var i = 0 ; i < scArr[ label ].length ; i ++ )
					{
						$head.appendChild ( scArr[ label ][ i ] ) ;
					} ;
				} ,
			} ;
			var callBackFn = isAsyn ? mainCallBack.Asyn : mainCallBack.Syn ;

			callBackFn ( scArr , label , inc ) ;
		} ;

		classPgp.scIns.prototype.distribute = 
		function ( urlPgp , isAsyn , tagName )
		{
			// console.log("arguments:" , arguments );
			isAsyn = isAsyn && typeof isAsyn === "boolean" ? isAsyn : false ;
			// if ( urlPgp.verifyType() == "Object" )  urlPgp = urlPgp.objConvertAry() ;
			var urlPgp = classPgp.scIns.prototype.insObj.crtEleObj ( urlPgp , tagName ) ;

			var mainCallBack = 
			{
				Syn : function ( urlPgp )
				{
					try
					{

						var recursionLoop = function ( urlPgp , indicator , isAsyn ) 
						{
							indicator = indicator ? indicator : 0 ; 
							if ( indicator >= urlPgp.length ) return ;

							classPgp.scIns.prototype.appendSc( urlPgp , indicator , isAsyn ) ;
							recursionLoop ( urlPgp , ++indicator , isAsyn ) ;
// 							void function () 
// 							{
// 								window.setTimeout(
// 									function ( urlPgp , indicator , isAsyn ) 
// 									{
// 										recursionLoop( urlPgp , ++indicator , isAsyn ) ;
// 									} , 
// 									100 
// 								) ;
// 							}() ;
						} ;
// 						recursionLoop( urlPgp , 0 , false ) ;
						for ( var indicator in urlPgp ) 
						{
							classPgp.scIns.prototype.appendSc( urlPgp ,  indicator  , false ) ;

						} ;
					}
					catch ( e )
					{
						console.log("e:",e);
					} ;

				} ,
				Asyn : function ( urlPgp ) 
				{
					try
					{

						for ( var indicator in urlPgp ) 
						{
							classPgp.scIns.prototype.appendSc( urlPgp ,  indicator  , false ) ;
						} ;
					}
					catch ( e )
					{
						console.log("e:",e);
					} ;

				} ,
			} ;
			var callBackFn = isAsyn ? mainCallBack.Asyn : mainCallBack.Syn ;

			callBackFn ( urlPgp ) ;
		} ;

	} ,
	

} ;

var append_mls = 
{
	
	appendMeta : function ( urlPgp , isAsyn )
	{
		var scIns_InsObj = scInsSinIns ;
		// console.log("scIns_InsObj:",scIns_InsObj);
		
		var resUrlObj = 
		urlPgp != null && urlPgp != defUrlPgp && urlPgp.meta 
		&& defUrlPgp.meta
		? 
		function () 
		{
			if 
			( !defUrlPgp.script || defUrlPgp.meta.getLength() == 0 ) 
			return urlPgp.meta ;
			resUrlObj = defUrlPgp.meta.combineUgNestUg ( urlPgp.meta ) ;
			// resUrlObj = defUrlPgp.meta.concat( urlPgp.meta ) ;
			var nonp = resUrlObj.hasNullPointer () ;
			return nonp.unit ;
		} () 
		: 
		defUrlPgp.meta ; 
		
		var metaEleObj = scIns_InsObj.crtEleObj ( resUrlObj ) ;
		scIns_InsObj.appendSc ( metaEleObj , 0 , isAsyn ) ;
	} ,
	appendLink : function ( urlPgp , isAsyn )
	{
		var scIns_InsObj = new classPgp.scIns () ;
// 		console.log("scIns_InsObj:",scIns_InsObj) ;
		
		var resUrlObj = urlPgp != null && urlPgp != defUrlPgp && urlPgp.link ? 
			( 
				function () 
				{
					if 
					( !defUrlPgp.script || defUrlPgp.link.getLength () == 0 ) 
					return urlPgp.link ;

					var resUrlObj2 = defUrlPgp.link.concat ( urlPgp.link ) ;
					// console.log( "resUrlObj2:" , resUrlObj2 ) ;
					var nonp = resUrlObj2.hasNullPointer () ;
					return nonp.unit ;
				}
			)() : 
			defUrlPgp.link ; 
		// console.log( "resUrlObj : " , resUrlObj ) ;
		scIns_InsObj.distribute ( resUrlObj , isAsyn ) ;
	} ,
	appendScript : function ( urlPgp , isAsyn )
	{
		$body = document.getElementsByTagName ( "body" )[ 0 ] ;
		$script = $body.getElementsByTagName ( "script" );
		// console.log("arguments:",arguments);
		var scIns_InsObj = new classPgp.scIns () ;
		// console.log("scIns_InsObj:",scIns_InsObj);
		
		var resUrlObj = urlPgp != null && urlPgp != defUrlPgp && urlPgp.script ? 
			( 
				function () 
				{
					if 
					( !defUrlPgp.script || defUrlPgp.script.getLength == 0 ) 
					return urlPgp.script ;
					if ( "length" in defUrlPgp.script || defUrlPgp.script.constructor.name == "Array" )
					{
						resUrlObj = defUrlPgp.script.concat ( urlPgp.script ) ;
						var nonp = resUrlObj.hasNullPointer () ;
					} ;
					return nonp.unit ;
				}
			)() : 
			defUrlPgp.script ; 
		// console.log( "resUrlObj:" ,resUrlObj ) ;
		scIns_InsObj.distribute ( resUrlObj , isAsyn ) ;
	} ,

	appendBase : function ( schemaRegStr , virtualPathCount , baseHref ) 
	{
		if ( document.querySelector ( "base" ) ) return ;
		var args = Array.prototype.slice.call ( arguments ) ;
		var regResStr = String.prototype.getSchema ( schemaRegStr , virtualPathCount ) ;
		
		var baseEle = document.createElement ( "base" ) ;

		baseEle.setAttribute ( "href" , ( args.length == 1 ) ? baseHref = args[ 0 ] : baseHref = regResStr[ 0 ] + "/"  ) ;
		$head.insertBefore ( baseEle , $head.firstElementChild ) ;

	} ,
	appendIni : function ( urlPgp , isAsyn ) 
	{
		urlPgp = urlPgp ? urlPgp : null ;
		// console.log( "urlPgp:" , urlPgp ) ;
		isAsyn = isAsyn ? isAsyn : false ;
		$append_mls.appendMeta ( urlPgp , true ) ;
		$append_mls.appendLink ( urlPgp , true ) ;

		document.onreadystatechange = 
		function ()
		{
			if ( document.readyState == "interactive" )
			{
				// console.log("document.readyState:" , document.readyState )
				window.$body = document.getElementsByTagName ( "body" )[ 0 ] ;
				if ( "length" in $body && $body.length >= 1 ) 
				{
					window.$body = "0" in $body && $body[ 0 ] ? $body[ 0 ] : $body ;
					// console.log( "$body: " , $body ) ;
					$append_mls.appendScript ( urlPgp , true ) ;
				} ;
			} ;
		} ;

	} ,
	invokeJson : function ( url , jsonpCbPg , callBack , jsonpField ) 
	{
// 		if ( url.lastIndexOf( "/" ) != url.length - 1  
// 			&& url[ url.length - 1 ] != "/" )
// 		{
// 			url += "/" ;
// 		} ;
		if ( !url || url == null || url == undefined || url == "" ) throw new ReferenceError ( "url is null " ) ; 
		var timeStamp = ( new Date() ).Format ( "yyyy_MM_dd_hh_mm_ss_S" ) 
						+ parseInt ( Math.random( 9 ) * 10 ) ;

		var defJsonpCbKey = "callback" , defJsonpCbVal = "jsonp" ;
		var defJsonpCbPg = { "callback" : defJsonpCbVal } ;
		var jsonpCbPg = jsonpCbPg ? jsonpCbPg : defJsonpCbPg ;
		var optJsonpCbKey = 
			(
				function ()
				{
					for ( var key in jsonpCbPg ) 
					{

					} ;
					var res = ( res = Object.keys( jsonpCbPg )[ 0 ] ) ? res : key ;
					return res ;
				}
			)() ;
		var jsonpCbKey = optJsonpCbKey ? optJsonpCbKey : defJsonpCbKey ;

		var fnNameExp2 = /(?:\?|&)jsonp=?\w+/ ;
		var urlJsonpCbPaireSecExp = new RegExp ( "(?:\\?|&)" + jsonpCbKey + "=?\\w{0,}" , "i" ) ;
		
		if ( urlJsonpCbPaireSecExp.test ( url ) ) 
		{
			var urlJsonpCbPaireSec = urlJsonpCbPaireSecExp.exec ( url )[ 0 ] ;

			var	urlJsonpCbValExp = new RegExp ( "[^?&" + jsonpCbKey + "=]" , "ig" ) ;
			var	urlJsonpCbVal = urlJsonpCbPaireSec.match ( urlJsonpCbValExp ) ;
			urlJsonpCbVal = urlJsonpCbVal ? urlJsonpCbVal.join ( "" ) : jsonpCbKey ;
		}
		else
		{
			var	urlJsonpCbVal = defJsonpCbVal ;
		} ;
		
		
		var optJsonpCbVal = 
		( 
			function ()
			{
				for ( var key in jsonpCbPg ) 
				{

				} ;
				var key = Object.keys ( jsonpCbPg ) [ 0 ] ;
				var res = ( res = jsonpCbPg[ optJsonpCbKey ] ) ? res : jsonpCbPg[ key ] ;
				var val = typeof res == "string" && res.match ( /[\w\$]?/ig ) 
							&& res.match ( /[\w$]?/ig ).join ( "" ) != "" ?
							res.match ( /[\w$]?/ig ).join ( "" ) : 
							null ;

				return val ;
			}
		)() ;
		var	jsonpCbVal = optJsonpCbVal ? optJsonpCbVal : urlJsonpCbVal ? urlJsonpCbVal : defJsonpCbVal ;
		var randomFnName = jsonpCbVal + timeStamp ;
		if ( url.indexOf ( "?" ) == -1 ) 
		{
			var repUrl = url += "?" + jsonpCbKey + "=" + randomFnName ;
		} 
		else
		{
			if ( url.lastIndexOf ( "?" ) == url[ url.length - 1 ] ) 
			{
				var repUrl = url += jsonpCbKey + "=" + randomFnName ;
			}
			else if ( url.indexOf ( jsonpCbKey ) == -1 ) 
			{
				var repUrl = url +=  ( "&" + jsonpCbKey + "=" + randomFnName ) ;
			}
			else if ( url.indexOf ( jsonpCbKey + "=" ) != -1 ) 
			{
				var reg = new RegExp ( jsonpCbKey + "=\\w{0,}" , "i") 
				var repUrl = url.replace ( reg , jsonpCbKey + "=" + randomFnName ) 
			}
			else 
			{
				var reg = new RegExp ( jsonpCbKey + "\\w{0,}" , "i") ;
				var repUrl = url.replace ( reg , jsonpCbKey + "=" + randomFnName ) ;
			} ;
			console.log( "repUrl:" ,repUrl[0] ) ; 
		} ;

		var randomTagId = "id_" + randomFnName ;
		var scEleA2 = 
		"script".crtTagEles
		( 
			{ 
				src : repUrl , 
				id : randomTagId , 
				type : "text/javascript" , 
				charset : "utf-8" 
			} 
		) ;
		
		$head.appendChild ( scEleA2 ) ;
		
		var randomTagDom = document.getElementById ( randomTagId ) ;
		// console.log("scEleA2:",scEleA2);


		window[ randomFnName ] = function ( json ) 
		{
			// console.log("skdjfalsdfjkl:" ,json);
			window.pubjson = json ;
			// console.log( "pubjson: " , window.pubjson ) ;
			
			var cbJson = callBack ( json ) ;
			window[ randomFnName ] = undefined ;
			randomTagDom.parentNode.removeChild ( randomTagDom ) ;
			
			return cbJson ;
		} ;
		// console.log( "rfjson:" , rfjson ) ;
	} ,

} ;

window.$append_mls = append_mls ;
const scInsSinIns = new classPgp.scIns () ;
window.$scInsSinIns = scInsSinIns ;
// $append_mls.appendBase() ;
var defUrlPgp = getDefUrlPgp (  ) ;

}
)
(
	document.getElementsByTagName( "html" ) ,
	document.getElementsByTagName( "head" ) ,
	document.getElementsByTagName( "body" ) ,
	getDefUrlPgp 
) ;
