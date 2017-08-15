console.log ( "angular:" , angular ) ;
var mdu_root = angular.module ( "mdu-root" , [] ) ;
console.log ( "mdu_root:" , mdu_root ) ;
mdu_root.controller
(
    "ctr-root" ,
    function ( $scope , $http )
    {
        $http.jsonp
        ( 'http://localhost:8080/mall_a01/malldata?scm=malldata&tbNamesStr=shoe,overcoat&jsonp=JSON_CALLBACK' )
        .success
        (
            function ( json_data )
            {}
        ) ;
    }
) ; 
angular.element.ready 
(
    function ( $ )
    {
        angular.bootstrap ( document , [ "mdu-root" ] ) ;

    }
) ;