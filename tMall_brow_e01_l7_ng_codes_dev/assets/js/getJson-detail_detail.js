+function ( $ )
{
	console.log( "search-detail-json.js" ) ;
	// $.init() ;
	var defGetDomStrPatt = function ( params )
	{
    var jary_data		= params.jary_data ;
		/*var str_dataKey		= params.str_dataKey ;
		var str_pgKey		= params.str_pgKey ;*/

		var pgp_docSerh = String.prototype.fnPgp_getDocSerh () ;
// 		var pgKey = Object.keys( pgp_docSerh )[ 1 ] ;
		var jpgp_data = jary_data[ 0 ] ;
		console.log( "jpgp_data:" , jpgp_data ) ;
		var curPageSearch = location.search ;
		var prePageSearch = pgp_docSerh[ "prePageSearch" ] ;
		console.log( "prePageSearch:" , prePageSearch ) ;
		// $( document ).on(
		// 	"pageInit" ,
		// 	function ( e , pageId , $page ) 
		// 	{
		// 		if ( pageId == "detail-page" )
		// 		{
		// 			console.log( "pageId:" , pageId ) ;
		// 			// console.log( "$page:" , $page[ 0 ].parentNode ) ;
		// 		} ;
		// 	} 
		// ) ;
		
		var postage = ( postage = jpgp_data.postage ) == 0 ? "免运费" : postage ;
		
      	var domStrPatt = 
  	// '<div class="page-detail">'
  //   '    <div class="swiper-container swiper-container-horizontal" data-space-between="10">'
  // + '      <div class="swiper-wrapper">'
  // + '        <div class="swiper-slide">'
  // + '          <img class="card-cover" src=" ' + jpgp_data.link + ' " alt="">'
  // + '        </div>'
  // + '        <div class="swiper-slide">'
  // + '          <img class="card-cover" src=" ' + jpgp_data.link + ' " alt="">'
  // + '        </div>'
  // + '        <div class="swiper-slide">'
  // + '          <img class="card-cover" src=" ' + jpgp_data.link + ' " alt="">'
  // + '        </div>'
  // + '      </div>'
  // + '      <div class="swiper-pagination"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>'
  // + '    </div><!-- swiper-container end -->'
    '    <div class="content-block goods-card">'
  + '      <h3> ' + jpgp_data.title + ' </h3>'
  + '      <p><strong>$ ' + jpgp_data.price_integer + ' </strong> <del>$ ' + jpgp_data.price_origin + ' </del></p>'
  + '      <div class="row text-center color-gray">'
  + '        <div class="col-25"> ' + postage + ' </div>'
  + '        <div class="col-50"> ' + jpgp_data.sales + ' </div>'
  + '        <div class="col-25"> ' + jpgp_data.delivery + ' </div>'
  + '      </div>'
  + '    </div><!-- goods-card end -->'
  + '    <div class="list-block media-list">'
  + '      <ul>'
  + '        <li>'
  + '          <a href="#" class="item-link item-content">'
  + '            <div class="item-inner">'
  + '              <div class="item-title-row">'
  + '                <div class="item-title">Choose Size and Color</div>'
  + '              </div>'
  + '            </div>'
  + '          </a>'
  + '        </li>'
  + '      </ul>'
  + '    </div><!-- media-list end -->'
  + '    <div class="content-block">'
  + '      <div class="buttons-row">'
  + '        <a href="#tab-detail" class="tab-link active button">Detail</a>'
  + '        <a href="#tab-comments" class="tab-link button">Comments(123)</a>'
  + '      </div>'
  + '      <div class="tabs">'
  + '        <div class="tab active" id="tab-detail">'
  + '          <h3>真正适合裸睡的面料</h3>'
  + '          <p>只有当你接触到床的那一刻，才会被前所未有的柔软打动。天丝般的爽滑质感，完美的设计，漂亮的色彩搭配。</p>'
  + '          <p><img src="//img.alicdn.com/imgextra/i4/238126515/TB25x8rdXXXXXaWXXXXXXXXXXXX_!!238126515.jpg" alt="" style="width:100%"></p>'
  + '          <h3>活性色彩，我的正能量</h3>'
  + '          <p>活性印刷，生活不在一成不变，跟上时代的脚步。A版大花纹，古典大气，民族的就是最美。零压力的舒适感，让人完美享受美好的床上时光。</p>'
  + '          <p><img src="//img.alicdn.com/imgextra/i3/238126515/TB2ht8qdXXXXXbmXXXXXXXXXXXX_!!238126515.jpg" alt="" style="width:100%"></p>'
  + '        </div>'
  + '        <div class="tab" id="tab-comments">'
  + '          <div class="list-block media-list">'
  + '            <ul>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">张**三</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">聚划算买的，只要888，料子很舒服。</div>'
  + '                  </div>'
  + '                </div>'
  + '              </li>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">Xi***ng</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">太喜欢了，做工精细，质量非常好。</div>'
  + '                  </div>'
  + '                </div><!-- item-content end -->'
  + '              </li>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">张**严</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">不好意思评价晚了，第三次买了，一如既往的好评</div>'
  + '                  </div><!-- item-content end -->'
  + '                </div>'
  + '              </li>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">张**三</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">聚划算买的，只要888，料子很舒服。</div>'
  + '                  </div>'
  + '                </div>'
  + '              </li>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">Xi***ng</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">太喜欢了，做工精细，质量非常好。</div>'
  + '                  </div>'
  + '                </div>'
  + '              </li>'
  + '              <li>'
  + '                <div class="item-content">'
  + '                  <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44"></div>'
  + '                  <div class="item-inner">'
  + '                    <div class="item-title-row">'
  + '                      <div class="item-title">张**严</div>'
  + '                      <div class="item-after">12/12 13:11</div>'
  + '                    </div>'
  + '                    <div class="item-text">不好意思评价晚了，第三次买了，一如既往的好评</div>'
  + '                  </div>'
  + '                </div><!-- item-content end -->'
  + '              </li>'
  + '            </ul>'
  + '          </div><!-- list-block end -->'
  + '        </div><!-- tab-comments end -->'
  + '      </div><!-- tabs end -->'
  + '    </div><!-- content-block end -->' ;
  // + '  </div><!-- page-detail end -->' ;
  // console.log( "$( '.swiper-container img' ):" , $( ".swiper-container img" )[ 0 ].src ) ;
  $( ".swiper-container img" )
  .attr( 
	  {
	  	"src" : jpgp_data.link ,
	  } 
  ) ;
      	return domStrPatt ;

	} ;

	$( document ).on(
		"pageInit" ,
		function ( e , pageId , $page )
		{
			console.log( "e:" , e ) ;
			if 
			( pageId == "detail-page" 
				// && !getAjaxLock 
			)
			{
				console.log( "pageId:" , pageId ) ;
				var pgp_docSerh = String.prototype.fnPgp_getDocSerh() ;
				console.log( "pgp_docSerh:" , pgp_docSerh );
				window.$getJsonSearch.getAjax
        ( 
          {
            pgp_serh              : pgp_docSerh , 
            // str_servCls           : pgp_docSerh[ Object.keys( pgp_docSerh )[ 0 ] ] , 
            qad_anchor            : $( ".page-detail" ) , 
            fnStr_getDomPatt   : defGetDomStrPatt , 
            fn_cb                 : null , 
            $page                 : $page ,
            str_sortType          : null

          }

				) ;
// 				var swiper = new Swiper('.swiper-container');
				// $.init() ;
			} ;
		} 

	) ;
	
	
	$.init() ;
} ( $ ) ;
// $.init() ;