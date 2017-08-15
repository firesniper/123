+function ()
{
	Object.defineProperties
	(
		Object ,
		{
			"pgp_jaTypeSerhMap" :
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value :
				{
					""		: "title" ,
					"bid"	: "price_integer" ,
					// "_bid"	: [ "price_integer" , true ]

				}
			} ,
			

		}
	) ;
	Object.defineProperties
	(
		Object ,
		{
			"fnAry_jaTypeSerhMapFn" :
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : function ( pgp )
				{
					var pgp_new = {} ;
					for ( var i = 0 , keys = Object.keys ( pgp ) ; i < keys.length ; i ++ )
					{
						var str_val = pgp [ keys [ i ] ] ;
						if ( str_val.indexOf ( "_" ) != 0 ) 
						{
							pgp_new [ keys [ i ] ] = 
							{ 
								"str_field" 	: str_val ,
								"bol_reverse"	: false 
							} ;
							pgp_new [ "_" +  keys [ i ] ] = 
							{ 
								"str_field" 	: str_val ,
								"bol_reverse"	: true 
							} ;
						} ;
						 
					} ; 
					// console.log ( "pgp_new:" , pgp_new ) ;
					Object.pgp_jaTypeSerhMap = pgp_new ;
				} ( Object.pgp_jaTypeSerhMap ) 
			}
			

		}
	) ;
	
	Object.defineProperties
	(
		Object.prototype ,
		{
			"fnJary_concatJa" :
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : function ()
				{
					var _this = this ;
					var json_data = _this ;
					var str_govJaryKey = Object.keys( json_data )[ 0 ] ;
					var jary_gov = json_data[ str_govJaryKey ] ;
					hfR01 : for( var dk in json_data )
					{
						if ( !json_data.hasOwnProperty( dk ) || dk == str_govJaryKey ) continue hfR01 ;
						jary_gov = jary_gov.concat( json_data[ dk ] ) ;
					} ;
					
					return jary_gov ;
				}
			} ,
			"fnPgp_setIndex" : 
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
					var pgp = {} ;
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
							pgp [ key ] = unitsGroup[ key ] ;
						} 
						catch ( err ) 
						{
							console.log( "err:" , err ) ;
						} ;
					} ;
					return pgp ;
				} 
			} ,
			"fnStr_getAppParams" :
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : function ( params )
				{
					// var pgp_docSerh = params.pgp_docSerh ;
					var _this = this ;
					var pgp_docSerh = _this ;
					var ary_governStrBuf = new Array () ;
					ary_governStrBuf.push
					( 
						pgp_docSerh [ "scm" ] 
						+ "?" 
					) ;
					hfA01 : for ( var sechKey in pgp_docSerh )
					{
						if ( !pgp_docSerh.hasOwnProperty ( sechKey ) && sechKey == "scm" ) continue hfA01 ;
						ary_governStrBuf.push (
							sechKey
							+ "="
							+ pgp_docSerh [ sechKey ] 
							+ "&"
						) ;
						
					} ;
					return ary_governStrBuf.join ( "" ) ;
				} 
			} ,
		}
	) ;
	Object.defineProperties
	(
		Array.prototype ,
		{
			
			"fn_JaSortByType" : 
			{
				enumerable : false ,
				configurable : true , 
				writable : true ,
				value : function ( params ) 
				{
					console.log( "this:" , this ) ;
					var args = Array.prototype.slice.call( arguments ) ;
					/*ary = ( args.length == 3 && ary ) ? 
							args[ args.length - 1 ] :
							function( _this )
							{
								if 
								( 
									_this.constructor.name == "Array"
									|| "length" in _this  
								)
								{
									return _this ;
								}
								else 
								{ 
									// throw new TypeError( "args must be Type String" ) ;
									console.log( "args must be Type String"  ) ;
								} ;
							}( this ) ;*/
					var _this		= this ;		
					var str_field	= params.str_field ;		
					var bol_reverse	= params.bol_reverse ;
					var ary			= params.ary ? params.ary : this ;
					//数组长度小于2 或 没有指定排序字段 或 不是json格式数据
					if( ary.length < 2 || !str_field || typeof ary[ 0 ] !== "object" ) return ary ;
					//数字类型排序
	// 					ary[ 0 ][ str_field ].match(/[^\d]/ig) ;
					if
					( 
						// typeof ary[ 0 ][ str_field ] === "number" 
						!/[^\d]/ig.test( ary[ 0 ][ str_field ] )
					) 
					{
						ary.sort(
							function( x , y ) 
							{ 
								return x[ str_field ] > y[ str_field ] ;
							} 
						) ;
					} ;
					//字符串类型排序
					if
					( 
						// typeof ary[ 0 ][ str_field ] === "string"
						/[^\d]/ig.test( ary[ 0 ][ str_field ] ) 
					) 
					{
						ary.sort( 
							function( x , y ) 
							{ 
								return x[ str_field ].localeCompare( y[ str_field ] ) ;
							}
						) ;
					} ;
					//倒序
					if( bol_reverse ) 
					{
						ary.reverse() ;
					} ;
					Object.defineProperties
					(
						ary ,
						{
							"mem1" :
							{
								enumerable : false ,
								configurable : true ,
								writable : true ,
								value : ""  
							}
						}
					) ;
					return ary ;
				} ,
			} ,
		}
	) ;
	Object.defineProperties
	(
		String.prototype ,
		{
			"fnPgp_getDocSerh" : 
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
		}
	) ;		

	var fnStr_getDomTemp = function ( params ) 
	{
		// var jary_data 		= params.jary_data ;
		var fnStr_getDomPatt			= params.fnStr_getDomPatt ;
		/*var num_startIdx	= params.num_startIdx ;
		var num_len			= params.num_len ;*/
		var str_pgKey		= params.str_pgKey ;
		var ary_subRetData	= params.ary_subRetData ;
		/*if ( !jary_data ) 
		{ 
			$.toast( "暂无数据" ) ;
// 			throw new TypeError( "jary_data null" ) ;
// 			return ;
		} ;*/
		/*jary_data.fnPgp_setIndex () ;
		var ary_subRetData = jary_data.splice ( num_startIdx , num_len ) ;
		console.log( "ary_subRetData:" , ary_subRetData.length ) ;*/
// 		num_reduceCount = num_reduceCount == 0 ? num_len : num_reduceCount ;
		// num_reduceCount += ary_subRetData.length ;
		
		var arys_buffer_str = [] ;
		
		hfA01 : for ( var str_subRetDataKey in ary_subRetData )
		{
			if ( !ary_subRetData.hasOwnProperty ( str_subRetDataKey ) ) continue hfA01 ;
// 			var num_searchKey = num_reduceCount - Math.abs( ary_subRetData.num_len - str_subRetDataKey ) ;
			var num_searchKey = ary_subRetData[ str_subRetDataKey ][ "index" ] - 1 ;
			var str_domTemp = fnStr_getDomPatt 
			( 
				{
					jary_data	: ary_subRetData , 
					str_dataKey	: str_subRetDataKey , 
					str_pgKey	: num_searchKey 
				}
			) ;
			arys_buffer_str.push ( str_domTemp ) ;
		} ;
		// console.log( "arys_buffer_str:" , arys_buffer_str ) ;
		/*return {
			//  "jary_reduceData" : jary_data , 
			 "arys_buffer_str" : arys_buffer_str 
		} ;*/
		return arys_buffer_str.join ( "" ) ;
	} ;

	var fn_pgInfi = function ( params )
	{
    	console.log( "pgInfireduceData:" , params.jary_reduceData ) ;
		var jary_reduceData		= params.jary_reduceData ;
		var dom_dom				= params.dom_dom ? params.dom_dom : $( "#page-infinite-scroll" ) ;
		var qad_anchor			= params.qad_anchor ;
		var fnStr_getDomPatt 	= params.fnStr_getDomPatt ;
		var str_pgKey			= params.str_pgKey ;

    	var loading = false ;

        dom_dom.on 
		( 
            'infinite' , 
            function ( e ) 
            {
//             	console.log( "e:" , e ) ;
                if (loading) return ;

                loading = true ;
                setTimeout
				( 
                    function () 
                    {
                        loading = false ;

						// jary_reduceData.fnPgp_setIndex () ;
						var ary_subRetData = jary_reduceData.splice ( 0 , 4 ) ;
						console.log( "ary_subRetData:" , ary_subRetData.length ) ;
                        var str_domTemp = $tMallCompo.fnStr_getDomTemp
						(
							{
								// jary_data		: jary_reduceData , 
								fnStr_getDomPatt			: fnStr_getDomPatt , 
								/*num_startIdx	: 0 , 
								num_len			: 4 , */
								str_pgKey		: str_pgKey ,
								ary_subRetData	: ary_subRetData

							} 
						) ;
                      	qad_anchor.append ( str_domTemp ) ;	
                    } , 
                    1000 
                ) ;
            }
        ) ;
      
	} ;

	var tMallCompo = 
	{
		fnStr_getDomTemp	: fnStr_getDomTemp ,
		fn_pgInfi			: fn_pgInfi
	} ;		

	Object.defineProperties
	(
		window , 
		{
			"$tMallCompo" :
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : tMallCompo
			}
		}

	) ;

} () ;