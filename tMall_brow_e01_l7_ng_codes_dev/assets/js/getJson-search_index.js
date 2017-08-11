+function ( $ )
{
	"use strict" ;
	console.log( "index-get-json.js" ) ;
	// $.init() ;
	var pgp_serh = { scm : "malldata" , tbNamesStr : "shoe,overcoat" } ;

	var defGetDomStrPatt = 
	function 
	( 
		jsonData , 
		dataKey , 
		searchKey , 
		pgKey 
	)
	{
// 		console.log( "jsonData:" , jsonData ) ;
// 		dataKey = dataKey ? dataKey : pgKey ;
		var json = jsonData[ dataKey ] ;
		var curPageSearch = location.search ;
		// var pgp_serh = String.prototype.getSearch() ;
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

		var postage = ( postage = json.postage ) == 0 ? "免运费" : postage ;
		var domStrTemp = 
			   '<a href= ' + document.baseURI + 'home/goods-detail.html' 
			 + "?scm=" + pgp_serh[ "scm" ] + dbPaire + "&pgKey=" + searchKey + ' >'
			 + '      <div class="card color-default">'
			 + '         <div style="" valign="bottom" class="card-header color-white no-border no-padding">'
			 + '           <img class="card-cover" src= ' + json.link + ' alt="">'
			 + '         </div>'
			 + '         <div class="card-content">'
			 + '           <div class="card-content-inner">'
			 + '             <p> ' + json.title + ' </p>'
			 + '             <p class="color-gray">@2015/01/15</p>'
			 + '           </div>'
			 + '         </div>'
			 + '         <div class="card-footer">'
			 + '           <span class=" ' + json.sales + ' </span>'
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
// 				var pgp_serh = String.prototype.getSearch() ;
				console.log( "pgp_serh:" , pgp_serh );
				
				window.$searchGetJson
				.getAjax
				(
					{
						pgp_serh			: pgp_serh , 
						str_servCls			: pgp_serh [ Object.keys( pgp_serh )[ 0 ] ] , 
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
