$append_mls.config 
(
    {
        num_virPath : 2 ,
        pgp_envOpt : 
        {
            "dev" :
            {
                
                ary_indicate : [ "localhost" , "127.0.0" ] ,
                pgp_servBaseUrl : "http://localhost:8080/mall_a01/" ,
                pgp_browBaseUrl : "http://localhost:3000/"
                
            } ,
            "pro" :
            {
                
                ary_indicate : [ "www.firesnip.com" , "github" ] ,
                pgp_servBaseUrl : "http://www.spitc-cn.com/mall_a01_ol/" ,
                pgp_browBaseUrl : "http://www.firesnip.com/light7-mall_c01_ol/"
                
            } 
        } ,
        pgp_defUrl : 
        
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
            }
         
    }
    
) ;



