/*parallax effect*/
$(function(){
    
    var $section = $('.parallax > div'),
        $sectionInfo =[];
    
   
    
    $section.each(function(){
       var $this = $(this);
        $sectionInfo.push($this.offset().top);
        
       
    });
    
  /*  console.log($sectionInfo);
    */
  
    
    $section.css({position:'fixed'});
    
    $(window).scroll(function(){
       var sct = $(this).scrollTop();
       console.log(sct);
       $section.each(function(idx){
        var $this = $(this);
           
       var $newtop = $sectionInfo[idx] - sct;
         
        if(sct > $sectionInfo[idx]){
           $newtop = $newtop * 0.5;   
        
        }   
           
        $this.css({top:$newtop});
         });
 /*parallax effect*/

/*header effect*/        
        if(sct > $sectionInfo[1]){
            $("header:first-of-type > .header-wrap > nav > ul > li:first-child").addClass("active");
            
             $(".header-2:first-of-type > .header-wrap > nav > ul > li:first-child").addClass("active");
        }
        
        else{
            $("header:first-of-type > .header-wrap > nav > ul > li:first-child").removeClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:first-child").removeClass("active");
        }
        
        if(sct > $sectionInfo[2]){
            
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").addClass("active");
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").siblings().removeClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").addClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").siblings().removeClass("active");
            
          
        }
        
        else{
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").removeClass("active");
            
             $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(2)").removeClass("active");
        }
        
         if(sct > $sectionInfo[3]){
            
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").addClass("active");
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").siblings().removeClass("active");
             
             $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").addClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").siblings().removeClass("active");
        }
        
        else{
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").removeClass("active");
            
             $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(3)").removeClass("active");
        }
        
        if(sct > $sectionInfo[4]-100){
            
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").addClass("active");
            
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").siblings().removeClass("active");
            
             $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").addClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").siblings().removeClass("active");
        }
        
        else{
            $("header:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").removeClass("active");
            
            $(".header-2:first-of-type > .header-wrap > nav > ul > li:nth-child(4)").removeClass("active");
        }
        
       if(sct > 0){
             $("header:first-of-type").css({backgroundColor:"rgba(255, 255, 255, 0.5)"});
           $("header:first-of-type").css({borderBottom:"1px solid rgba(103, 103, 103, 0.5)"});
            $("header:first-of-type").css({paddingTop:"30px"});
            $("header:first-of-type").css({paddingBottom:"20px"});
           
           
            $(".header-2:first-of-type").css({backgroundColor:"rgba(255, 255, 255, 0.5)"});
           $(".header-2:first-of-type").css({borderBottom:"1px solid rgba(103, 103, 103, 0.5)"});
            $(".header-2:first-of-type").css({paddingTop:"20px"});
            $(".header-2:first-of-type").css({paddingBottom:"10px"});
           
       }
        
        else{
            $("header:first-of-type").css({backgroundColor:"rgba(255, 255, 255, 0)"});
            
            $("header:first-of-type").css({borderBottom:"1px solid rgba(103, 103, 103, 0)"});
            
             $("header:first-of-type").css({paddingTop:"50px"});
            
            $("header:first-of-type").css({paddingBottom:"0px"});
            
             $(".header-2:first-of-type").css({backgroundColor:"rgba(255, 255, 255, 0)"});
            
            $(".header-2:first-of-type").css({borderBottom:"1px solid rgba(103, 103, 103, 0)"});
            
             $(".header-2:first-of-type").css({paddingTop:"30px"});
            
            $(".header-2:first-of-type").css({paddingBottom:"0px"});
        }
        
        var sct3 = $("section > div:nth-child(3)"),
            $sct3 = sct3.offset().top;
       
        /*console.log($sct3);
        
        */
        if(sct > $sct3){
            $(".parallax > .section2 > .html-wrap").addClass("active");
            
            $(".parallax > .section2 > .css-wrap").addClass("active");
            
            $(".parallax > .section2 > .java-wrap").addClass("active");
            
            $(".parallax > .section2 > .jq-wrap").addClass("active");
        }
        
      
        
        else{
            $(".parallax > .section2 > .html-wrap").removeClass("active");
            
             $(".parallax > .section2 > .css-wrap").removeClass("active");
            
            $(".parallax > .section2 > .java-wrap").removeClass("active");
            
            $(".parallax > .section2 > .jq-wrap").removeClass("active");
        }
        
        if(sct > $sct3-230){
            $(".parallax > .section2 > .html-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .css-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .java-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .jq-wrap-2").addClass("active");
        }
        
      
        
        else{
            $(".parallax > .section2 > .html-wrap-2").removeClass("active");
            
             $(".parallax > .section2 > .css-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .java-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .jq-wrap-2").removeClass("active");
        }
        
        if(sct > $sct3+150){
           $(".parallax > .section2 > .photo-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .illu-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .inde-wrap-2").addClass("active"); 
        }
        
        else{
             $(".parallax > .section2 > .photo-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .illu-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .inde-wrap-2").removeClass("active");    
        }
        
        
        if(sct > $sct3+20){
           $(".parallax > .section2 > .photo-wrap-3").addClass("active");
            
            $(".parallax > .section2 > .illu-wrap-3").addClass("active");
            
            $(".parallax > .section2 > .inde-wrap-3").addClass("active"); 
        }
        
        else{
             $(".parallax > .section2 > .photo-wrap-3").removeClass("active");
            
            $(".parallax > .section2 > .illu-wrap-3").removeClass("active");
            
            $(".parallax > .section2 > .inde-wrap-3").removeClass("active");    
        }
        
         if(sct > $sct3+350){
           $(".parallax > .section2 > .python-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .git-wrap-2").addClass("active");
            
            $(".parallax > .section2 > .c-lang-wrap-2").addClass("active"); 
        }
        
        else{
             $(".parallax > .section2 > .python-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .git-wrap-2").removeClass("active");
            
            $(".parallax > .section2 > .c-lang-wrap-2").removeClass("active");    
        }
        
         if(sct > $sct3+110){
           $(".parallax > .section2 > .python-wrap-3").addClass("active");
            
            $(".parallax > .section2 > .git-wrap-3").addClass("active");
            
            $(".parallax > .section2 > .c-lang-wrap-3").addClass("active"); 
        }
        
        else{
             $(".parallax > .section2 > .python-wrap-3").removeClass("active");
            
            $(".parallax > .section2 > .git-wrap-3").removeClass("active");
            
            $(".parallax > .section2 > .c-lang-wrap-3").removeClass("active");    
        }
        
        if(sct > $sct3+450){
        $(".parallax > .section2 > .photo-wrap").addClass("active");
            
        $(".parallax > .section2 > .illu-wrap").addClass("active");
            
        $(".parallax > .section2 > .inde-wrap").addClass("active");    
            
        }
        
        else{
        $(".parallax > .section2 > .photo-wrap").removeClass("active");
            
        $(".parallax > .section2 > .illu-wrap").removeClass("active");
            
         $(".parallax > .section2 > .inde-wrap").removeClass("active");    
        }
        
        
     if(sct > $sct3+850){
       $(".parallax > .section2 > .python-wrap").addClass("active");
         
       $(".parallax > .section2 > .git-wrap").addClass("active"); 
        
        $(".parallax > .section2 > .c-lang-wrap").addClass("active"); 
        }
        
        else{
       $(".parallax > .section2 > .python-wrap").removeClass("active");
         
       $(".parallax > .section2 > .git-wrap").removeClass("active"); 
        
        $(".parallax > .section2 > .c-lang-wrap").removeClass("active"); 
        }
       
        
    
     /*header effect*/     
    });
    
    
});




$(document).ready(function(){
    //typed.js st
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
     typeSpeed:150,
     showCursor:false,
      startDelay:100,
  });
    
    var typed = new Typed('#typed_2', {
    stringsElement: '#typed-string-2',
      typeSpeed:150,
      startDelay:2700,
     showCursor:false,
  });
    
    //typed.js ed
 
$("header > .header-wrap > nav > ul > li:first-child").click(function(){
     $("html, body").animate({scrollTop : 900 }, 300);    
}); 
    
$("header > .header-wrap > nav > ul > li:nth-child(2)").click(function(){
     $("html, body").animate({scrollTop : 2250 }, 300);    
}); 
    
$("header > .header-wrap > nav > ul > li:nth-child(3)").click(function(){
     $("html, body").animate({scrollTop : 5450 }, 300);    
}); 
    
$("header > .header-wrap > nav > ul > li:nth-child(4)").click(function(){
     $("html, body").animate({scrollTop : 8000 }, 300);    
}); 
    
    
$(".header-2 > .header-wrap > nav > ul > li:first-child").click(function(){
     $("html, body").animate({scrollTop : 450 }, 300);    
}); 
    
$(".header-2 > .header-wrap > nav > ul > li:nth-child(2)").click(function(){
     $("html, body").animate({scrollTop : 1250 }, 300);    
}); 
    
$(".header-2 > .header-wrap > nav > ul > li:nth-child(3)").click(function(){
     $("html, body").animate({scrollTop : 2900 }, 300);    
}); 
    
$(".header-2 > .header-wrap > nav > ul > li:nth-child(4)").click(function(){
     $("html, body").animate({scrollTop : 4250 }, 300);    
});    
    
$("aside > .nav-2-wrap > .section-wrap > ul > li:first-child").click(function(){
     $("html, body").animate({scrollTop : 370 }, 300);    
}); 
    
$("aside > .nav-2-wrap > .section-wrap > ul > li:nth-child(2)").click(function(){
     $("html, body").animate({scrollTop : 1670 }, 300);    
});  
    
$("aside > .nav-2-wrap > .section-wrap > ul > li:nth-child(3)").click(function(){
     $("html, body").animate({scrollTop : 3070 }, 300);    
}); 
    
$("aside > .nav-2-wrap > .section-wrap > ul > li:nth-child(4)").click(function(){
     $("html, body").animate({scrollTop : 4870 }, 300);    
});    
        
    

//main scroll-event    
  setInterval(function(){
      $(".parallax > .main_one > .scroll-wrap > .sc-img").toggleClass("active");

      
  },700); 
//main scroll-event ed

    
//section3 effect    
    $("section > .section3 > .portfolio-wrap > .more-wrap").click(function(){
       $(this).addClass("active");
        
        $("section > .section3 > .portfolio-wrap > .third-port").addClass("active");
        
        $("section > .section3").addClass("active");
        
    });
    

   
 //section3 effect nav   
    $("section > .section3 > .port-menu > .menu-wrap > ul > li").click(function(){
        
       $(this).addClass("active");
        $(this).siblings().removeClass("active");
        
    });
    
       $("section > .section3 > .port-menu > .menu-wrap > ul > li:nth-child(2)").click(function(){
       
        $("section > .section3 > .portfolio-wrap > .second-port > .port:last-child").addClass("active");
        
        $("section > .section3 > .portfolio-wrap > .more-wrap").addClass("active");
           
        $("section > .section3 > .portfolio-wrap > .third-port").removeClass("active");   
        
        $("section > .section3 > .port-wrap-2").removeClass("active"); 
           
        $("section > .section3 > .portfolio-wrap").removeClass("active");
           
          $("section > .section3 > .portfolio-wrap-2").removeClass("active");   
           
        $(".parallax > .section3 > .portfolio-wrap-2 > .third-port > .port:nth-child(2)").addClass("active");
           
        $(".parallax > .section3 > .portfolio-wrap-2 > .forth-port").addClass("active");  
           
     
           
    });
    
     $("section > .section3 > .port-menu > .menu-wrap > ul > li:nth-child(1)").click(function(){
       
        $("section > .section3 > .portfolio-wrap > .second-port > .port:last-child").removeClass("active");
           
        $("section > .section3 > .portfolio-wrap > .more-wrap").removeClass("active");
         
          $("section > .section3 > .portfolio-wrap").removeClass("active");
         
           $("section > .section3 > .portfolio-wrap-2").removeClass("active");
         
         $("section > .section3 > .port-wrap-2").removeClass("active");
         
           $(".parallax > .section3 > .portfolio-wrap-2 > .third-port > .port:nth-child(2)").removeClass("active");
           
        $(".parallax > .section3 > .portfolio-wrap-2 > .forth-port").removeClass("active");   
         
         
    });
    
     $("section > .section3 > .port-menu > .menu-wrap > ul > li:nth-child(3)").click(function(){
         
         $("section > .section3 > .portfolio-wrap").addClass("active");
         
           $("section > .section3 > .portfolio-wrap-2").addClass("active");
         
         $("section > .section3 > .port-wrap-2").addClass("active");
     });
    
    $("section > .section3 > .port-menu > .menu-wrap > ul > li:nth-child(4)").click(function(){
         
         $("section > .section3 > .portfolio-wrap").addClass("active");
         
         $("section > .section3 > .port-wrap-2").removeClass("active");
     });
    //section3 effect nav ed
    
    
   //section3 explain    
$(".portfolio-wrap > .first-port > .port:first-child > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .conver-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .conver-ex-wrap").click(function(){
    $(this).removeClass("active"); 
 });    
    
$(".section3 > .conver-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .conver-ex-wrap").removeClass("active");
    
}); 
    
$(".portfolio-wrap-2 > .first-port > .port:first-child > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .conver-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .conver-ex-wrap").click(function(){
    $(this).removeClass("active"); 
 });    
    
$(".section3 > .conver-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .conver-ex-wrap").removeClass("active");
    
});      
    
    
$(".portfolio-wrap > .first-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .kixx-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .kixx-ex-wrap").click(function(){
    $(this).removeClass("active"); 
 });    
    
$(".section3 > .kixx-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .kixx-ex-wrap").removeClass("active");
    
}); 
    
$(".portfolio-wrap-2 > .first-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .kixx-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .kixx-ex-wrap").click(function(){
    $(this).removeClass("active"); 
 });    
    
$(".section3 > .kixx-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .kixx-ex-wrap").removeClass("active");
    
});      
    
    
    
$(".portfolio-wrap > .first-port > .port:nth-child(3) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .hotel-ex-wrap").addClass("active");
}); 
    
$(".section3 > .hotel-ex-wrap").click(function(){
     $(this).removeClass("active"); 
});    
    
$(".section3 > .hotel-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .hotel-ex-wrap").removeClass("active");
    
});
    
$(".portfolio-wrap-2 > .second-port > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .hotel-ex-wrap").addClass("active");
}); 
    
$(".section3 > .hotel-ex-wrap").click(function(){
     $(this).removeClass("active"); 
});    
    
$(".section3 > .hotel-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .hotel-ex-wrap").removeClass("active");
    
});     
    
$(".portfolio-wrap > .second-port > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .enbor-ex-wrap").addClass("active");
}); 
    
$(".section3 > .enbor-ex-wrap").click(function(){
     $(this).removeClass("active"); 
});    
    
$(".section3 > .enbor-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .enbor-ex-wrap").removeClass("active");
    
}); 
    
$(".portfolio-wrap-2 > .second-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .enbor-ex-wrap").addClass("active");
}); 
    
$(".section3 > .enbor-ex-wrap").click(function(){
     $(this).removeClass("active"); 
});    
    
$(".section3 > .enbor-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .enbor-ex-wrap").removeClass("active");
    
});     
    
$(".portfolio-wrap > .second-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .O2UX-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .O2UX-ex-wrap").click(function(){
     $(this).removeClass("active"); 
 });    
    
$(".section3 > .O2UX-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .O2UX-ex-wrap").removeClass("active");
    
}); 
    
$(".portfolio-wrap-2 > .third-port > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .O2UX-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .O2UX-ex-wrap").click(function(){
     $(this).removeClass("active"); 
 });    
    
$(".section3 > .O2UX-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .O2UX-ex-wrap").removeClass("active");
    
});     
    
$(".portfolio-wrap > .second-port > .port:nth-child(3) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .tiffany-ex-wrap").addClass("active");
});
    
$(".section3 > .tiffany-ex-wrap").click(function(){
     $(this).removeClass("active"); 
 });    
    
$(".section3 > .tiffany-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .tiffany-ex-wrap").removeClass("active");
    
});
    
$(".portfolio-wrap-2 > .third-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .tiffany-ex-wrap").addClass("active");
});
    
$(".section3 > .tiffany-ex-wrap").click(function(){
     $(this).removeClass("active"); 
 });    
    
$(".section3 > .tiffany-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .tiffany-ex-wrap").removeClass("active");
    
});    
    
$(".portfolio-wrap > .third-port > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .drg-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .drg-ex-wrap").click(function(){
    $(this).removeClass("active");  
 });    
    
$(".section3 > .drg-ex-wrap > .detail-wrap > .close").click(function(){
    $(".section3 > .drg-ex-wrap").removeClass("active");
    
});
    
$(".portfolio-wrap-2 > .forth-port > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .drg-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .drg-ex-wrap").click(function(){
    $(this).removeClass("active");  
 });    
    
$(".section3 > .drg-ex-wrap > .detail-wrap > .close").click(function(){
    $(".section3 > .drg-ex-wrap").removeClass("active");
    
});     
    
    
$(".portfolio-wrap > .third-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .port-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .port-ex-wrap").click(function(){
    $(this).removeClass("active");  
 });    
    
$(".section3 > .port-ex-wrap > .detail-wrap > .close").click(function(){
    $(".section3 > .port-ex-wrap").removeClass("active");
    
});
    
$(".portfolio-wrap-2 > .forth-port > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .port-ex-wrap").addClass("active");
}); 
    
 $(".section3 > .port-ex-wrap").click(function(){
    $(this).removeClass("active");  
 });    
    
$(".section3 > .port-ex-wrap > .detail-wrap > .close").click(function(){
    $(".section3 > .port-ex-wrap").removeClass("active");
    
});       
       
    
    
$(".port-wrap-2 > .first-re > .port:nth-child(1) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .tiffany-ex-wrap").addClass("active");
});
    
$(".section3 > .tiffany-ex-wrap").click(function(){
    $(this).removeClass("active");  
});    
    
$(".section3 > .tiffany-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .tiffany-ex-wrap").removeClass("active");
    
}); 
    
    
$(".port-wrap-2 > .first-re > .port:nth-child(2) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .drg-ex-wrap").addClass("active");
});
    
$(".section3 > .drg-ex-wrap").click(function(){
     $(this).removeClass("active");  
});    
    
$(".section3 > .drg-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .drg-ex-wrap").removeClass("active");
    
});
    
$(".port-wrap-2 > .first-re > .port:nth-child(3) > .hover-box > .border-box > span").click(function(){
    
    $(".section3 > .port-ex-wrap").addClass("active");
});
    
$(".section3 > .port-ex-wrap").click(function(){
     $(this).removeClass("active");  
});    
    
$(".section3 > .port-ex-wrap > .detail-wrap > .close").click(function(){
     $(".section3 > .port-ex-wrap").removeClass("active");
    
});     
    
//section3 explain     
//section3 effect ed    

$(".header-2 > .header-wrap > .ham-menu").click(function(){
    $("aside").addClass("active");
}); 
    
$("aside > .nav-2-wrap > .top-bar > .close").click(function(){
     $("aside").removeClass("active");
});   
    
var controller = new ScrollMagic.Controller();
    
var tween1 = TweenMax.to('.parallax > .section1 > .introduction-wrap > .left-img-box', 1 , {
    left:"0%",
    opacity:1,
});


var scene1 = new ScrollMagic.Scene({
	triggerElement: ".section1", 
  triggerHook:  0.5 , 
  offset: 150, 
	
})

.setTween(tween1) 
.addTo(controller)

    
var tween2 = TweenMax.to('.parallax > .section1 > .introduction-wrap > .right-info-wrap', 1 , {
    marginRight:"0%",
    opacity:1,
});


var scene2 = new ScrollMagic.Scene({
	triggerElement: ".section1", 
  triggerHook:  0.5 , 
  offset: 150, 
	
})

.setTween(tween2) 
.addTo(controller)

    
    
var tween4 = TweenMax.to('.parallax > .section2 > .base', 1 , {
    left:"5%",
     opacity:1,
});


var scene4 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 500, 
	
})

.setTween(tween4) 
.addTo(controller) 

    
var tween5 = TweenMax.to('.parallax > .section2 > .design-tool', 1 , {
    left:"26.8%",
    opacity:1,
});


var scene5 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 1000, 
	
})

.setTween(tween5) 
.addTo(controller) 
 
    
var tween6 = TweenMax.to('.parallax > .section2 > .cooperation', 1 , {
    left:"73.5%",
    opacity:1,
});


var scene6 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 1320, 
	
})

.setTween(tween6) 
.addTo(controller) 
  
    
var tween7 = TweenMax.to('.parallax > .section2 > .base-2', 1 , {
    left:"5%",
     opacity:1,
});


var scene7 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 200, 
	
})

.setTween(tween7) 
.addTo(controller) 


var tween7_1 = TweenMax.to('.parallax > .section2 > .base-3', 1 , {
    left:"5%",
     opacity:1,
});


var scene7_1 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 130, 
	
})

.setTween(tween7_1) 
.addTo(controller) 
 
var tween8 = TweenMax.to('.parallax > .section2 > .design-tool-2', 1 , {
    left:"26.8%",
     opacity:1,
});


var scene8 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 550, 
	
})

.setTween(tween8) 
.addTo(controller) 

var tween8_1 = TweenMax.to('.parallax > .section2 > .design-tool-3', 1 , {
    left:"26.8%",
     opacity:1,
});


var scene8_1 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 380, 
	
})

.setTween(tween8_1) 
.addTo(controller) 
    
    
var tween9 = TweenMax.to('.parallax > .section2 > .cooperation-2', 1 , {
    left:"73.5%",
     opacity:1,
});


var scene9 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 750, 
	
})

.setTween(tween9) 
.addTo(controller) 

    
var tween9_1 = TweenMax.to('.parallax > .section2 > .cooperation-3', 1 , {
    left:"73.5%",
     opacity:1,
});


var scene9_1 = new ScrollMagic.Scene({
	triggerElement: ".section2",
  triggerHook:  0.5 , 
  offset: 480, 
	
})

.setTween(tween9_1) 
.addTo(controller) 
       
    
var tween10 = TweenMax.to('.parallax > .section1 > .introduction-wrap-2 > .left-img-box > .gray-box', 1 , {
     width:"43.5vw",
    opacity:1,
});


var scene10 = new ScrollMagic.Scene({
	triggerElement: ".section1",
  triggerHook:  0.5 , 
  offset: 100, 
	
})

.setTween(tween10) 
.addTo(controller) 

var tween11 = TweenMax.to('.parallax > .section1 > .introduction-wrap-2 > .left-img-box > .my-img', 1 , {
    marginLeft: "0%",
    opacity:1,
});


var scene11 = new ScrollMagic.Scene({
	triggerElement: ".section1",
  triggerHook:  0.5 , 
  offset: 150, 
	
})

.setTween(tween11) 
.addTo(controller) 


var tween12 = TweenMax.to('.parallax > .section1 > .introduction-wrap-2 > .right-info-wrap', 1 , {
    left:"0%",
    opacity:1,
});


var scene12 = new ScrollMagic.Scene({
	triggerElement: ".section1",
  triggerHook:  0.5 , 
  offset: 450, 
	
})

.setTween(tween12) 
.addTo(controller) 

     
  
});



  

