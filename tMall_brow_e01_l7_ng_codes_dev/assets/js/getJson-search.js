// window.$getJsonSearch = { "sadf" : "asdfsf"} ;

(function( $ )
{
	"use strict" ;

	var fnStr_defGetDomPatt = function ( params )
	{
		var jary_data		= params.jary_data ;
		var str_dataKey		= params.str_dataKey ;
		var str_pgKey		= params.str_pgKey ;

		var ary_data_pgp = jary_data[ str_dataKey ] ;
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
/*	var num_reduceCount = 0 ;
	var pgp_idxData = null ;*/
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
	/*function fn_defCb 
	( 
		jary_data , qad_anchor , fnStr_getDomPatt , $page , str_pgKey 
	)
	{

		$tMallCompo.fn_pgInfi 
		( 
			{
				jary_reduceData		: jary_data.jary_reduceData , 
				dom_dom				: $page , 
				qad_anchor			: qad_anchor , 
				fnStr_getDomPatt : fnStr_getDomPatt , 
				str_pgKey			: str_pgKey 
				
			}
		) ;

	} ;*/
	function getAjax (  params )
	{
		var pgp_serh			=   params.pgp_serh ;
		/*var str_servCls			=   params.str_servCls || 
									( "scm" in params.pgp_serh ? params.pgp_serh [ "scm" ] : "malldata" ) ;*/
		var qad_anchor			=   params.qad_anchor ;
		var fnStr_getDomPatt =   params.fnStr_getDomPatt ? 
									params.fnStr_getDomPatt : 
									params.fnStr_getDomPatt === null ?
									params.fnStr_getDomPatt :
									params.fnStr_defGetDomPatt ;
		/*var fn_cb				=   params.fn_cb ? 
									params.fn_cb : 
									params.fn_cb === null ? 
									function () { return } : 
									fn_defCb ; */
		var $page				=   params.$page ;
		var str_sortType		=   params.str_sortType ? params.str_sortType : "_bid" ;

		
		var str_pgKey = pgp_serh[ "pgKey" ] ;
		
		var str_appParams = pgp_serh.fnStr_getAppParams (  ) ;
		
	
		$.ajax
		(
			{
				// url : "http://localhost:8081/mall_a01/overcoat?" ,
				url				: str_appParams ,
				crossDomain 	: true ,
				type			: "get" ,
				dataType		: "jsonp" ,
				mimeType		: "text/javascript" ,
				scriptCharSet	: "utf-8" ,
				jsonp 			: "jsonp" ,
				jsonpCallback 	: "mSearchjsonp" + ( pgp_serh [ "scm" ] + 1 ) ,
				success 		: function ( json_data )
				{
					// $.init() ;
					console.log( "json_data" , json_data ) ;
					if ( !Object.keys( json_data )[ 0 ] ) 
					{ 
						$.toast( "暂无数据" ) ;
			// 			throw new TypeError( "json_data null" ) ;
			// 			return ;
					} ;
					
					var jary_conData = json_data.fnJary_concatJa () ;
					jary_conData.fn_JaSortByType
					( 
						Object.pgp_jaTypeSerhMap [ str_sortType ] 
					) ;
					var jary_data = !isNaN( str_pgKey ) && str_pgKey != undefined && str_pgKey != null && str_pgKey !== "" ? 
								 new Array ( jary_conData[ str_pgKey ] ) 
								 : 
								jary_conData ;

					jary_data.fnPgp_setIndex () ;
					var ary_subRetData = jary_data.splice ( 0 , 6 ) ;

					var str_domTemp = $tMallCompo.fnStr_getDomTemp
					( 
						{
							// jary_data		: jary_data , 
							fnStr_getDomPatt			: fnStr_getDomPatt , 
							/*num_startIdx	: 0 , 
							num_len			: 6 , */
							str_pgKey		: str_pgKey ,
							ary_subRetData	: ary_subRetData  

						}
					) ;

					qad_anchor.append ( str_domTemp ) ;
					// fn_cb( jary_data , qad_anchor , fnStr_getDomPatt , $page ) ;
					$tMallCompo.fn_pgInfi 
					( 
						{
							// pgp_reduceData		: pgp_data.pgp_reduceData , 
							jary_reduceData		: jary_data ,
							dom_dom				: $page , 
							qad_anchor			: qad_anchor , 
							fnStr_getDomPatt : fnStr_getDomPatt , 
							str_pgKey			: str_pgKey 
							
						}
					) ;
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
// 				// var pgp_serh = String.prototype.fnPgp_getDocSerh() ;
// 				// console.log( "pgp_serh:" , pgp_serh );
// 				// getAjax( pgp_serh , Object.keys( pgp_serh )[ 0 ] , true ) ;
			
// 			} ;
// 		} 
// 	) ;


	var getJsonSearch = 
	{
		getAjax : getAjax ,
	} ;

	Object.defineProperties (
		window ,
		{
			"$getJsonSearch" : 
			{
				enumerable : false ,
				configurable : true ,
				writable : true ,
				value : getJsonSearch ,
			} ,
		} 
		
	) ;

	// $.init() ;
	// location.reload() ;
})( $ ) ;
console.log( "getJson-search.js" ) 
// $.init() ;