+function ( $ )
{
	"use strict" ;
	console.log( "index-get-json.js" ) ;
	// $.init() ;
	var pgp_serh = { scm : "malldata" , tbNamesStr : "shoe,overcoat" } ;

	var defGetDomStrPatt = function ( params )
	{
		var jary_data		= params.jary_data ;
		var str_dataKey		= params.str_dataKey ;
		var str_pgKey		= params.str_pgKey ;

// 		console.log( "jary_data:" , jary_data ) ;
// 		str_dataKey = str_dataKey ? str_dataKey : pgKey ;
		var jpgp_data = jary_data[ str_dataKey ] ;
		// var curPageSearch = location.search ;
		// var pgp_serh = String.prototype.fnPgp_getDocSerh() ;
// 		$( document ).on(
// 			"pageInit" ,
// 			function ( e , pageId , $page ) 
// 			{
// 				if ( pageId == "detail-page" )
// 				{
// 					console.log( "pageId:" , pageId ) ;
// 					// console.log( "$page:" , $page[ 0 ].parentNode ) ;
// 				} ;
// 			} 
// 		) ;
		var dbPaire = pgp_serh[ "tbNamesStr" ] ? 
					  "&tbNamesStr=" + pgp_serh[ "tbNamesStr" ] :
					   pgp_serh[ "dicStr" ] ?
					  "&dicStr=" + pgp_serh[ "dicStr" ]	:
					  undefined ;

		var postage = ( postage = jpgp_data.postage ) == 0 ? "免运费" : postage ;
		var domStrTemp = 
			   '<a href= ' + document.baseURI + 'home/goods-detail.html' 
			 + "?scm=" + pgp_serh[ "scm" ] + dbPaire + "&pgKey=" + str_pgKey + ' >'
			 + '      <div class="card color-default">'
			 + '         <div style="" valign="bottom" class="card-header color-white no-border no-padding">'
			 + '           <img class="card-cover" src= ' + jpgp_data.link + ' alt="">'
			 + '         </div>'
			 + '         <div class="card-content">'
			 + '           <div class="card-content-inner">'
			 + '             <p> ' + jpgp_data.title + ' </p>'
			 + '             <p class="color-gray">@2015/01/15</p>'
			 + '           </div>'
			 + '         </div>'
			 + '         <div class="card-footer">'
			 + '           <span class=" ' + jpgp_data.sales + ' </span>'
			 + '           <span class="link">Comment(20)</span>'
			 + '         </div>'
			 + '       </div>'
			 + '</a>' ;

      	return domStrTemp ;

	} ;

	$( document ).on(
		"pageInit" ,
		function ( e , pageId , $page )
		{
			console.log( "e:" , e ) ;
			if 
			( pageId == "page-home" 
				// && !getAjaxLock 
			)
			{
				console.log( "pageId:" , pageId ) ;
// 				var pgp_serh = String.prototype.fnPgp_getDocSerh() ;
				console.log( "pgp_serh:" , pgp_serh );
				
				window.$searchGetJson
				.getAjax
				(
					{
						pgp_serh			: pgp_serh , 
						// str_servCls			: pgp_serh [ Object.keys( pgp_serh )[ 0 ] ] , 
						jqd_anchor			: $( "#page-home .list" ) , 
						fnStr_getDomStrPatt : defGetDomStrPatt ,
						fn_cb				: undefined ,
						$page				: $page ,
						str_sortType		: "_bid"
					} 
				) ;
				

				// $.init() ;
			} ;
		} 

	) ;
	

// 	$.init() ;
} ( $ ) ;
