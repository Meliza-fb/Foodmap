$(document).ready(function(){
   setTimeout(function() {
     $('#splash').fadeOut(500);
   }, 1088);
 });


$(document).ready(function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
     var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
      // Run the effect
       $( "#effect1" ).show( selectedEffect, options, 500, callback );
     };

      //callback function to bring a hidden box back
       function callback() {
          setTimeout(function() {
            $( "#effect1:visible" ).removeAttr( "style" )} );
          };
          // Set effect from select menu value
          $( "#button" ).on( "click", function() {
            runEffect();
          });
          $( "#effect1" ).hide();
        } );


        $(document).ready(function() {
            // run the currently selected effect
            function runEffect() {
              // get effect type from
              var selectedEffect = $( "#effectTypes" ).val();

              // Most effect types need no options passed by default
              var options = {};
              // some effects have required parameters
              if ( selectedEffect === "scale" ) {
                options = { percent: 50 };
              } else if ( selectedEffect === "size" ) {
                options = { to: { width: 280, height: 185 } };
              }

              // Run the effect
              $( "#effect2" ).show( selectedEffect, options, 500, callback );
            };

            //callback function to bring a hidden box back
            function callback() {
              setTimeout(function() {
                $( "#effect2:visible" ).removeAttr( "style" )} );
            };

            // Set effect from select menu value
            $( "#button" ).on( "click", function() {
              runEffect();
            });

            $( "#effect2" ).hide();
        } );


        $(document).ready(function() {
                 // run the currently selected effect
                 function runEffect() {
                   // get effect type from
                   var selectedEffect = $( "#effectTypes" ).val();

                   // Most effect types need no options passed by default
                   var options = {};
                   // some effects have required parameters
                   if ( selectedEffect === "scale" ) {
                     options = { percent: 50 };
                   } else if ( selectedEffect === "size" ) {
                     options = { to: { width: 280, height: 185 } };
                   }

                   // Run the effect
                   $( "#effect3" ).show( selectedEffect, options, 500, callback );
                 };

                 //callback function to bring a hidden box back
                 function callback() {
                   setTimeout(function() {
                     $( "#effect3:visible" ).removeAttr( "style" )} );
                 };

                 // Set effect from select menu value
                 $( "#button" ).on( "click", function() {
                   runEffect();
                 });

                 $( "#effect3" ).hide();
         } );


         $(document).ready(function() {
                      // run the currently selected effect
                      function runEffect() {
                        // get effect type from
                        var selectedEffect = $( "#effectTypes" ).val();

                        // Most effect types need no options passed by default
                        var options = {};
                        // some effects have required parameters
                        if ( selectedEffect === "scale" ) {
                          options = { percent: 50 };
                        } else if ( selectedEffect === "size" ) {
                          options = { to: { width: 280, height: 185 } };
                        }

                        // Run the effect
                        $( "#effect4" ).show( selectedEffect, options, 500, callback );
                      };

                      //callback function to bring a hidden box back
                      function callback() {
                        setTimeout(function() {
                          $( "#effect4:visible" ).removeAttr( "style" )} );
                      };

                      // Set effect from select menu value
                      $( "#button" ).on( "click", function() {
                        runEffect();
                      });

                      $( "#effect4" ).hide();
          } );


          $(document).ready(function() {
                           // run the currently selected effect
                           function runEffect() {
                             // get effect type from
                             var selectedEffect = $( "#effectTypes" ).val();

                             // Most effect types need no options passed by default
                             var options = {};
                             // some effects have required parameters
                             if ( selectedEffect === "scale" ) {
                               options = { percent: 50 };
                             } else if ( selectedEffect === "size" ) {
                               options = { to: { width: 280, height: 185 } };
                             }

                             // Run the effect
                             $( "#effect5" ).show( selectedEffect, options, 500, callback );
                           };

                           //callback function to bring a hidden box back
                           function callback() {
                             setTimeout(function() {
                               $( "#effect5:visible" ).removeAttr( "style" )} );
                           };

                           // Set effect from select menu value
                           $( "#button" ).on( "click", function() {
                             runEffect();
                           });

                           $( "#effect5" ).hide();
                         } );
