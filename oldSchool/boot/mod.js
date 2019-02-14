    $( ()  => {
         $("#b1").click( function () {
             $("#id3").hide(2000);
              $("#id3").show('fast');  // slow, normal, fast
         });
     });

     $( ()  =>{
         $("#b2").click( function () {
             $("#id4").toggle('slow', function() {
                 var test = $(this).css('display');
             })
         });
     });
