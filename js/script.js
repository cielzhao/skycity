window.onload = function() {
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var page4 = document.getElementById("page4");
	var page5 = document.getElementById("page5");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	//当音乐播放完停止的时候，自动停止光盘旋转效果
	audio.addEventListener("ended", function(event) {
		music.setAttribute("class", "");
	}, false);


    //点击音乐图标，控制音乐播放效果
    music.addEventListener("touchstart", function(event) {
		if (audio.paused) {
			audio.play();
		    this.setAttribute("class", "play");
		}
		else {
			audio.pause();
			this.setAttribute("class", "");
		};	
    }, false);

    //页面切换
    page1.addEventListener("touchstart", function(event){
    	page1.style.display = "none";
    	page2.style.display = "block";
     	page3.style.display = "block";
     	page3.style.top     = "100%";


    	setTimeout(function() {
    		page2.setAttribute("class", "page fadeOut");
	  		page3.setAttribute("class", "page fadeIn");

	  		page4.style.display = "block";
    	    page4.style.top = "100%";

    	    setTimeout(function() {
    		    page3.setAttribute("class", "page fadeOut");
	  		    page4.setAttribute("class", "page fadeIn");

	  		    page5.style.display = "block";
    	        page5.style.top = "100%";

    	        setTimeout(function() {
    		        page4.setAttribute("class", "page fadeOut");
	  		        page5.setAttribute("class", "page fadeIn");

    	        }, 5500);

    	    }, 5500);

    	}, 5500);

    }, false);
};
