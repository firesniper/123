+function ( $ )
{
	console.log( "getJson-search.js" ) ;
	// $.init() ;
	var defGetDomStrPatt =  function ( params )
	{
// 		console.log( "jary_data:" , jary_data ) ;
// 		str_dataKey = str_dataKey ? str_dataKey : pgKey ;
		var jary_data		= params.jary_data ;
		var str_dataKey		= params.str_dataKey ;
		var str_pgKey		= params.str_pgKey ;

		var json = jary_data[ str_dataKey ] ;
		var curPageSearch = location.search ;
		var pgp_docSerh = String.prototype.fnPgp_getDocSerh() ;
		var prePageSearch = pgp_docSerh[ "prePageSearch" ] ;
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
		var dbPaire = pgp_docSerh[ "tbNamesStr" ] ? 
					  "&tbNamesStr=" + pgp_docSerh[ "tbNamesStr" ] :
					   pgp_docSerh[ "dicStr" ] ?
					  "&dicStr=" + pgp_docSerh[ "dicStr" ]	:
					  undefined ;

		var postage = ( postage = json.postage ) == 0 ? "免运费" : postage ;
		var domStrTemp = 
				   '<li>'
                  +'    <div class="item-content list-item">'
                  +'        <div class="p">'
                  +'            <a href=" ' + document.baseURI + 'home/goods-detail.html' + "?scm=" + pgp_docSerh[ "scm" ] + dbPaire + "&pgKey=" + str_pgKey + ' " title="">'
                  +'                <img class="p-pic" src=" ' + json.link + ' " style="visibility: visible;">'
                  +'                <span class="flag c-icon-pt"></span>'
                  +'              </a>'
                  +'        </div>'
                  +'        <div class="d">'
                  +'            <a href=" ' + document.baseURI + 'home/goods-detail.html' + "?scm=" + pgp_docSerh[ "scm" ] + dbPaire + "&pgKey=" + str_pgKey + ' " title="">'
                  +'                <h3 class="d-title">  ' + json.title + ' </h3>'
                  +'            </a>'
                  +'            <p class="d-price">'
                  +'                <em class="h">'
                  +'                    <span class="price-icon">¥</span>'
                  +'                    <span class="font-num"> ' + json.price_integer + ' </span>'
                  +'                </em>'
                  +'                <del></del>'
                  +'            </p>'
                  +'            <div class="d-main">'
                  +'                <p class="d-freight"> ' + postage + ' </p>'
                  +'                <p class="d-num">'
                  +'				   <span class="font-num"> ' + json.sales + ' </span>人付款'
                  +'				</p>'
                  +'                <p class="d-area"> ' + json.delivery + ' </p>'
                  +'            </div>'
                  +'        </div>'
                  +'    </div>'
                  +'    <div class="icons-group"></div>'
                  +'</li>' ;
      	return domStrTemp ;

	} ;

	$( document ).on(
		"pageInit" ,
		function ( e , pageId , $page )
		{
			console.log( "e:" , e ) ;
			if 
			( pageId == "page-infinite-scroll" 
				// && !getAjaxLock 
			)
			{
				console.log( "pageId:" , pageId ) ;
				var pgp_docSerh = String.prototype.fnPgp_getDocSerh() ;
				console.log( "pgp_docSerh:" , pgp_docSerh );
				
				window.$searchGetJson
				.getAjax
				(
					{
						pgp_serh			: pgp_docSerh , 
						// str_servCls			: Object.keys( pgp_docSerh )[ 0 ] , 
						jqd_anchor			: $( ".list-container.page-container" ) , 
						fnStr_getDomStrPatt	: defGetDomStrPatt ,
						fn_cb				: undefined ,
						$page				: null ,
						str_sortType		: "_bid"
					} 
				) ;
				
				var sechIpt = document.querySelector( "form#J_Search input[name=dicStr]" ) ;

				var clsBtn = document.querySelector( "form#J_Search button" ) ;
				clsBtn.addEventListener(
					"touchstart" ,
					function ( e )
					{
						e.preventDefault() ;
						// console.log( "e:" , e ) ;
						e.stopPropagation() ;
						e.cancelBubble = true ; 

						sechIpt.value = "" ;
						this.style = "display: none ;"
					} ,
					true

				) ;

				var logo = document.querySelector( ".logo" ) ;
				var topBarBtnClosed = document.querySelector( ".top-bar-btn.closed" ) ;
				var suggestContainer = document.querySelector( ".suggest-container") ;
				var toolbar = document.querySelector( ".toolbar" ) ;
				var topBar = document.querySelector( ".top-bar" ) ;
				var iconsSearch = document.querySelector( ".icons-search" ) ;
				sechIpt.addEventListener(
					"focus" ,
					function ( e )
					{
						// console.log( "e:" , e ) ;
						$( ".toolbar>div" ).css( { "display" : "none" ,} ) ;
						suggestContainer.style = "display : block ;" ;
						// topBarBtnClosed.style = "display : block ;" ;
						// logo.style = "display : none ;" ;
						var topBarFlag = $( topBar ).hasClass( "on" ) ;
						if ( !topBarFlag ) 
						{
							topBar.className += " on" ; 

						} ;
					}
				) ;
				/*sechIpt.addEventListener(
					"click" ,
					function ( e )
					{
						// console.log( "e:" , e ) ;
						$( ".toolbar>div" ).css( { "display" : "none" ,} ) ;
						suggestContainer.style = "display : block ;" ;
						// topBarBtnClosed.style = "display : block ;" ;
						// logo.style = "display : none ;" ;
						var topBarFlag = $( topBar ).hasClass( "on" ) ;
						if ( !topBarFlag ) 
						{
							topBar.className += " on" ; 

						} ;
					}
				) ;*/
				topBarBtnClosed.addEventListener(
					"touchstart" ,
					function ( e )
					{
						// console.log( "e:" , e ) ;
						$( ".toolbar>div" ).css( { "display" : "block" ,} ) ;
						suggestContainer.style = "display : none ;" ;
						// this.style = "display : none ;" ;
						// logo.style = "display : block ;" ;
						$( topBar ).removeClass( "on" ) ;
					}
				) ;
				sechIpt.addEventListener(
					"keydown" ,
					function ( e )
					{
						// console.log( "e:" , e ) ;
						// console.log( "this:" , this.value.length ) ;
						if ( this.value.length > 1 )
						{
							clsBtn.style = "display: inline-block ;"
						}
						else if ( this.value.length == 0 )
						{
							clsBtn.style = "visibility: hidden ;"

						} ;	
					}
				) ;

				// var sugstHotKey = $( ".suggest-hotkey li" ) ;
				$( ".suggest-hotkey li" )
				.on(
					"touchstart" ,
					function ( e )
					{
// 						console.log( "this:" + this ) ;
						sechIpt.value = this.innerText ;
						suggestContainer.style = "display : none ;" ;
						iconsSearch.click() ;
						
					} 
				) ;

				var closeDropListHandle = function ( e ) 
				{
					// dropList.className += " droplist-expand" ;
					// console.log( "$(dropList):" , $(dropList) ) ;
					var clsFlag = $( dropList ).hasClass( "droplist-expand" ) ;
					if ( clsFlag )
					{
						$( dropList ).removeClass( "droplist-expand" ) ;
					}
					else
					{
						dropList.className += " droplist-expand" ;
					} ;
				}
				var droplistTrigger = document.querySelector( ".droplist-trigger" ) ;
				var dropList = document.querySelector( ".droplist" ) ;
				droplistTrigger.addEventListener(
					"touchstart" ,
					 function ( e ) 
					{
						closeDropListHandle( e ) ;
					}
				) ;


				var sort = $( ".droplist .sorts .sort" ) ;
				sort.on(
					"touchstart" ,
					function ( e )
					{
						var clsFlag = $( this ).hasClass( "selected" ) ;
						if ( !clsFlag )
						{

							sort.removeClass( "selected" ) ;
							this.className += " selected" ;

						} ;

						var dataValue = this.getAttribute( "data-value" ) ;
						window.$searchGetJson
						.getAjax
						(
							{
								pgp_serh			: pgp_docSerh , 
								// str_servCls			: pgp_docSerh[ Object.keys( pgp_docSerh )[ 0 ] ] , 
								jqd_anchor			: $( ".list-container.page-container" ) , 
								fnStr_getDomStrPatt : defGetDomStrPatt ,
								fn_cb				: undefined ,
								$page				: $page ,
								str_sortType		: dataValue

							} 
						) ;
						closeDropListHandle( e ) ;
						// switch ( dataValue )
						// {
						// 	case "" :

						// } ;
					} 
				) ;

				// $.init() ;
			} ;
		} 

	) ;
	

	$.init() ;
} ( $ ) ;
