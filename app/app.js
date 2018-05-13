 var myapp = angular.module('myapp', ["ui.router"])
    myapp.config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")

      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/route1.html",
            controller:function($scope){
              $('#main').show();
              $('#aboutusOurTeam').hide();
                $('#ourClients').show();
                setelementId();
                $('#homeMenu').attr("id","current");


        /*  if(checkMobile().any() !=null){
                }

                $(window).bind('resize', function () {
                    var viewport = {
                        width  : $(window).width(),
                        height : $(window).height()
                    };
                    if(viewport.width<700){

                    }
                }).trigger('resize');*/

            }
        })
          /*.state('route1.list', {
              url: "/list",
              templateUrl: "partials/route1.list.html",
              controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
          })*/
          .state('ourofferings', {
            url: "/ourOfferings/services",
            templateUrl: "partials/ourofferings/services.html",
            controller:function($scope){
                ourofferingSubMenu();
                $("html, body").animate({ scrollTop: 0 });
            }
          })


        .state('mobappdevelopment', {
            url: "/ourOfferings/mobappdevelopment",
            templateUrl: "partials/ourofferings/mobileappdevelopment.html",
            controller:function($scope){
                ourofferingSubMenu();
                $("html, body").animate({ scrollTop: 0 });
            }
        })

        .state('softwareDevelopment', {
            url: "/ourOfferings/softwareDevelopment",
            templateUrl: "partials/ourofferings/responsivewebdevelopment.html",
            controller:function($scope){
                ourofferingSubMenu();
                $("html, body").animate({ scrollTop: 0 });
            }
        })
        .state('uxuidesign', {
              url: "/ourOfferings/uxuidesign",
              templateUrl: "partials/ourofferings/uxui.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
        })
          .state('cloudcomputing', {
              url: "/ourOfferings/cloudcomputing",
              templateUrl: "partials/ourofferings/cloudcomputing.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('database', {
              url: "/ourOfferings/database",
              templateUrl: "partials/ourofferings/bigdata.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('infotainment', {
              url: "/ourOfferings/infotainment",
              templateUrl: "partials/ourofferings/infotainment.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('productEngineering', {
              url: "/ourOfferings/productEngineering",
              templateUrl: "partials/ourofferings/productEngineering.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('bussinessIntelligence', {
              url: "/ourOfferings/bussinessIntelligence",
              templateUrl: "partials/ourofferings/analytics.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('consultings', {
              url: "/ourOfferings/consultings",
              templateUrl: "partials/ourofferings/consultings.html",
              controller:function($scope){
                  ourofferingSubMenu();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })


          .state('industries', {
            url: "/industries",
            templateUrl: "partials/industries/industries.html",
            controller:function($scope){
                //$( "li" ).first().children(0).first('a').attr("id","homemenu");
                //$('#current').attr("id","offeringMenu");
                setelementId();
                ourofferings();
                $('#industriesMenu').attr("id","current");
                $("html, body").animate({ scrollTop: 0 });
            }
        })
        .state('industries.finance', {
              url: "/finance",
              templateUrl: "partials/industries/finance.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })

        .state('industries.healthcare', {
              url: "/healthcare",
              templateUrl: "partials/industries/healthcare.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.communications', {
              url: "/communications",
              templateUrl: "partials/industries/communications.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.educations', {
              url: "/educations",
              templateUrl: "partials/industries/educations.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.retails', {
              url: "/retails",
              templateUrl: "partials/industries/retails.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.smartcity', {
              url: "/smartcity",
              templateUrl: "partials/industries/smartcity.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.travels', {
              url: "/travels",
              templateUrl: "partials/industries/travel.html",
              controller: function($scope){
                toggleDiv();
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
        .state('industries.wearable', {
              url: "/finance",
              templateUrl: "partials/industries/wearable.html",
              controller: function($scope){
                  $("html, body").animate({ scrollTop: 0 });
              }
          })
          .state('aboutus', {
              url: "/aboutus",
              templateUrl: "partials/aboutus/aboutusnew.html",
              controller:function($scope){
                  $('#aboutusOurTeam').show();
                  setelementId();
                  ourofferings();
                  $('#ourClients').show();
                  $('#aboutusOurTeam').show();
                  $('#aboutusMenu').attr("id","current");
                  $("html, body").animate({ scrollTop: 0 });


              }
          })
          .state('careers', {
              url: "/careers",
              templateUrl: "partials/contactus/careers.html",
              controller:function($scope){
                  setelementId();
                  ourofferings();
                  $('#aboutusOurTeam').hide();
                  $('#ourClients').hide();
                  $('#careersMenu').attr("id","current");
                  $("html, body").animate({ scrollTop: 0 });

              }
          })
          .state('contactus', {
              url: "/contactus",
              templateUrl: "partials/contactus/contact.html",
              controller: function($scope){
                  setelementId();
                  ourofferings();
                  $('#aboutusOurTeam').hide();
                  $('#ourClients').hide();
                  $('#contactusMenu').attr("id","current");
                  $("html, body").animate({ scrollTop: 0 });
              }
          })

        function toggleDiv(){
          $(".industriesViewClass").hide();
          $( ".industriesViewClass" ).fadeIn( 3000 );

        }
        function ourofferingSubMenu(){
            setelementId();
            ourofferings();
            $('#offeringMenu').attr("id","current");
        }
        function ourofferings(){
          $('#main').hide();
            $('#ourClients').hide();
            $('#aboutusOurTeam').hide();

        }
        function setelementId() {
            switch ($('#current').first().attr('ui-sref')){
                case 'home':
                    $('#current').attr("id","homeMenu");
                    break;
                case 'ourofferings':
                    $('#current').attr("id","offeringMenu");
                    break;
                case 'industries':
                    $('#current').attr("id","industriesMenu");
                    break;
                case 'aboutus':
                    $('#current').attr("id","aboutusMenu");
                    break;

                case 'careers':
                    $('#current').attr("id","careersMenu");
                    break;
                case 'contactus':
                    $('#current').attr("id","contactusMenu");
                    break;


            }
                //$( "li" ).first().children(0).first('a').attr("id","current");
        }
        function checkMobile(){
            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };
            return isMobile;
        }
        /*  .state('route2.list', {
              url: "/list",
              templateUrl: "partials/route2.list.html",
              controller: function($scope){
                $scope.things = ["A", "Set", "Of", "Things"];
              }
          })*/

    });
