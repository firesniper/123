// window.$searchGetJson = { "sadf" : "asdfsf"} ;

(function( $ )
{
	"use strict" ;

	var fnStr_defGetDomPatt = function ( json_data , str_dataKey , str_pgKey )
	{
		var ary_data_pgp = json_data[ str_dataKey ] ;
		var str_search = location.search ;

		/*$( document ).on(
			"pageInit" ,
			function ( e , pageId , $page ) 
			{
				if ( pageId == "detail-page" )
				{
					console.log( "pageId:" , pageId ) ;
					// console.log( "$page:" , $page[ 0 ].parentNode ) ;
				} ;
			} 
		) ;*/
		
		var str_postage = ( str_postage = ary_data_pgp.str_postage ) == 0 ? "免运费" : str_postage ;
		var str_domTemp = 
				   '<li>'
                  +'    <div class="item-content list-item">'
                  +'        <div class="p">'
                  +'            <a href=" ' + document.baseURI + 'detail/' + str_search + "&key=" + key + ' " title="">'
                  +'                <img class="p-pic" src=" ' + ary_data_pgp.link + ' " style="visibility: visible;">'
                  +'                <span class="flag c-icon-pt"></span>'
                  +'              </a>'
                  +'        </div>'
                  +'        <div class="d">'
                  +'            <a href=" ' + document.baseURI + 'home/goods-detail.html' + str_search + "&key=" + key + ' " title="">'
                  +'                <h3 class="d-title">  ' + ary_data_pgp.title + ' </h3>'
                  +'            </a>'
                  +'            <p class="d-price">'
                  +'                <em class="h">'
                  +'                    <span class="price-icon">¥</span>'
                  +'                    <span class="font-num"> ' + ary_data_pgp.price_integer + ' </span>'
                  +'                </em>'
                  +'                <del></del>'
                  +'            </p>'
                  +'            <div class="d-main">'
                  +'                <p class="d-freight"> ' + str_postage + ' </p>'
                  +'                <p class="d-num">'
                  +'				   <span class="font-num"> ' + ary_data_pgp.sales + ' </span>人付款'
                  +'				</p>'
                  +'                <p class="d-area"> ' + ary_data_pgp.delivery + ' </p>'
                  +'            </div>'
                  +'        </div>'
                  +'    </div>'
                  +'    <div class="icons-group"></div>'
                  +'</li>' ;
      	return str_domTemp ;

	} ;
	var num_reduceCount = 0 ;
	var pgp_idxData = null ;
	var fnPgp_getDomStrTemp = function ( pgp_data , fn_cb , startIdx , length , str_pgKey ) 
	{
		if ( !pgp_data ) 
		{ 
			$.toast( "暂无数据" ) ;
// 			throw new TypeError( "json_data null" ) ;
// 			return ;
		} ;
		pgp_idxData = pgp_idxData ? pgp_idxData : pgp_data.fnPgp_setIndex () ;
		var ary_subRetData = pgp_data.splice ( startIdx , length ) ;
		console.log( "ary_subRetData:" , ary_subRetData.length ) ;
// 		num_reduceCount = num_reduceCount == 0 ? length : num_reduceCount ;
		num_reduceCount += ary_subRetData.length ;
		
		var ary_buffer_str = [] ;
		
		hfA01 : for ( var str_subRetDataKey in ary_subRetData )
		{
			if ( !ary_subRetData.hasOwnProperty( str_subRetDataKey ) ) continue hfA01 ;
// 			var num_searchKey = num_reduceCount - Math.abs( ary_subRetData.length - str_subRetDataKey ) ;
			var num_searchKey = ary_subRetData[ str_subRetDataKey ][ "index" ] - 1 ;
			var str_domTemp = fn_cb( ary_subRetData , str_subRetDataKey , num_searchKey , str_pgKey ) ;
			ary_buffer_str.push( str_domTemp ) ;
		} ;
		// console.log( "ary_buffer_str:" , ary_buffer_str ) ;
		return { "pgp_reduceData" : pgp_data , "ary_buffer_str" : ary_buffer_str } ;
	} ;
	
	var fn_pgInfi = function ( pgp_reduceData , dom_dom , jqd_anchor , fnStr_getDomStrPatt , str_pgKey )
	{
    	console.log( "pgInfireduceData:" , pgp_reduceData ) ;
    	var loading = false ;
         
        dom_dom
        .on( 
            'infinite' , 
            function ( e ) 
            {
//             	console.log( "e:" , e ) ;
                if (loading) return ;

                loading = true ;
                setTimeout( 
                    function () 
                    {
                        loading = false ;

                        var ary_buffer_str = fnPgp_getDomStrTemp( pgp_reduceData , fnStr_getDomStrPatt , 0  , 4 , str_pgKey ).ary_buffer_str ;
                      	jqd_anchor.append( ary_buffer_str.join( "" ) ) ;	
                    } , 
                    1000 
                ) ;
            }
        ) ;
      
	} ;
	function fn_defCb 
	( 
		pgp_domStr , jqd_anchor , fnStr_getDomStrPatt , $page , str_pgKey 
	)
	{
		$page = $page ? $page : $( "#page-infinite-scroll" ) ;
		fn_pgInfi ( pgp_domStr.pgp_reduceData , $page , jqd_anchor , fnStr_getDomStrPatt , str_pgKey ) ;

	} ;
	function getAjax
	( 
		// pgp_serh , str_servCls , jqd_anchor , fnStr_getDomStrPatt , fn_cb , $page , str_sortType 
		params
	)
	{
		var pgp_serh			= params.pgp_serh ;
		var str_servCls			= params.str_servCls ;
		var jqd_anchor			= params.jqd_anchor ;
		var fnStr_getDomStrPatt = params.fnStr_getDomStrPatt ;
		var fn_cb				= params.fn_cb ;
		var $page				= params.$page ;
		var str_sortType		= params.str_sortType ;

		str_sortType = str_sortType ? str_sortType : "_bid" ;
		fnStr_getDomStrPatt = fnStr_getDomStrPatt ? 
						fnStr_getDomStrPatt : 
						fnStr_getDomStrPatt === null ?
						fnStr_getDomStrPatt :
						fnStr_defGetDomPatt ;

		fn_cb = fn_cb ? 
				   fn_cb : 
				   fn_cb === null ? 
				   function () { return } : 
				   fn_defCb ;

		var servClsKey = ( servClsKey = Object.keys( pgp_serh )[ 0 ] ) ? servClsKey : "scm" ;
		str_servCls = str_servCls ? str_servCls : pgp_serh[ servClsKey ] ;
		var str_pgKey = pgp_serh[ "pgKey" ] ;
		
		var ary_governStrBuf = new Array() ;
		ary_governStrBuf.push( pgp_envState.pgp_envOpt.pgp_servBaseUrl + pgp_serh[ "scm" ] + "?" ) ;
		hfA01 : for ( var sechKey in pgp_serh )
		{
			if ( !pgp_serh.hasOwnProperty( sechKey ) && sechKey == "scm" ) continue hfA01 ;
			ary_governStrBuf.push(
				  sechKey
				+ "="
				+ pgp_serh[ sechKey ] 
				+ "&"
			) ;
			 
		} ;

		
	/*	if ( pgp_serh.constructor.name == "Object" )
		{
			var ary_governStrBuf = new Array() ;

			ary_governStrBuf.push( "http://192.168.1.3:8080/mall_a01/" + pgp_serh[ "scm" ] + "?" ) ;
			hfA01 : for ( var sechKey in pgp_serh )
			{
				if ( !pgp_serh.hasOwnProperty( sechKey ) && sechKey == "scm" ) continue hfA01 ;
				ary_governStrBuf.push(
					  sechKey
					+ "="
					+ pgp_serh[ sechKey ] 
					+ "&"
				) ;
				 
			} ;
			

		} ; */
		$.ajax
		(
			{

				// url : "http://localhost:8081/mall_a01/overcoat?" ,
				url				: ary_governStrBuf.join( "" ) ,
				crossDomain 	: true ,
				type			: "get" ,
				dataType		: "jsonp" ,
				mimeType		: "text/javascript" ,
				scriptCharSet	: "utf-8" ,
				jsonp 			: "jsonp" ,
				jsonpCallback 	: "mSearchjsonp" + ( ( str_servCls ) + 1 ) ,
				success 		: function ( json_data )
				{
					// $.init() ;
					console.log( "json_data" , json_data ) ;
					
					
					var fnAry_getConData = function()
					{
						var str_governAryKey = Object.keys( json_data )[ 0 ] ;
						if ( !str_governAryKey ) 
						{ 
							$.toast( "暂无数据" ) ;
				// 			throw new TypeError( "json_data null" ) ;
				// 			return ;
						} ;
						var ary_govern = json_data[ str_governAryKey ] ;
						hfR01 : for( var dk in json_data )
						{
							if ( !json_data.hasOwnProperty( dk ) || dk == str_governAryKey ) continue hfR01 ;
							ary_govern = ary_govern.concat( json_data[ dk ] ) ;
						} ;
						// var sortDataField = "" ;
						switch ( str_sortType )
						{
							case "" :
								// sortDataField = "title" ;
								ary_govern.JaSortByType( "title" , false ) ;
							break ;
							case "_bid" :
								// sortDataField = "price_integer" ;
								ary_govern.JaSortByType( "price_integer" , false ) ;
							break ;
							case "bid" :
								// sortDataField = "price_integer" ;
								ary_govern.JaSortByType( "price_integer" , true ) ;
							break ;
						} ;
						
						
						// ary_govern[ sortDataField ].sort(
						// function ( a , b )
						// 	{
						// 		return a > b ;
						// 	} ;
						// ) ;
						
						return ary_govern ;
					} ;
					var conData = fnAry_getConData () ;
					var result = !isNaN( str_pgKey ) && str_pgKey != undefined && str_pgKey != null && str_pgKey !== "" ? 
								function () 
								{
									return new Array( conData[ str_pgKey ] ) ;
								}() : 
								conData ;

					var pgp_domStr = fnPgp_getDomStrTemp( result , fnStr_getDomStrPatt , 0 , 6 , str_pgKey ) ;
					jqd_anchor.append( pgp_domStr.ary_buffer_str.join( "" ) ) ;
					fn_cb( pgp_domStr , jqd_anchor , fnStr_getDomStrPatt , $page ) ;
					// $.init() ;
				} ,
				error : function ( XMLHttpRequest, textStatus, errorThrown )
				{
					console.log( "XMLHttpRequest:" , XMLHttpRequest ) ;
					console.log( "textStatus:" , textStatus ) ;
					console.log( "errorThrown:" , errorThrown ) ;
				} ,
			}
		) ;
	} ;
	
// 	$( document ).on(
// 		"pageInit" ,
// 		function ( e , pageId , $page )
// 		{
// 			console.log( "e:" , e ) ;
// 			if 
// 			( pageId == "page-infinite-scroll" )
// 			{
// 				// console.log( "pageId:" , pageId ) ;
// 				// var pgp_serh = String.prototype.getSearch() ;
// 				// console.log( "pgp_serh:" , pgp_serh );
// 				// getAjax( pgp_serh , Object.keys( pgp_serh )[ 0 ] , true ) ;
			
// 			} ;
// 		} 
// 	) ;


	window.$searchGetJson = 
	{
		getAjax : getAjax ,
	} ;

	Object.defineProperties(
		window ,
		{
			"$searchGegJson" : {
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : getAjax ,
			} ,
		} 
		
	) ;

	// $.init() ;
	// location.reload() ;
})( $ ) ;
console.log( "getJson-search.js" ) 
// $.init() ;