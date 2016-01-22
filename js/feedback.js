window.onload=function(){
	var initial = $(document).scrollTop();
	var d = document.getElementsByClassName("feedback-button")["0"];
	window.onscroll=function(){
		var current = $(document).scrollTop();
		console.log(initial, current);
		d.className = "button feedback-button visible";
	}
	setTimeout(function(){
		d.className+=" full";
	},2000)
	setTimeout(function(){
		d.className="button feedback-button visible";
	},4000);
	console.log($(".slider img:first-child"));
	$(".slider img:first-child").addClass("active");
	$("#next").click(function(){
		var currentSlide = $(".active");
		var next = currentSlide.next();
		if(next.length==0){
			next = $(".slider img:first-child");
		}
		currentSlide.fadeOut(500).removeClass("active");
		next.fadeIn(500).addClass("active");
	});
	$("#prev").click(function(){
		var currentSlide = $(".active");
		var prev = currentSlide.prev();
		if(prev.length==0){
			prev = $(".notActive").last();
		}
		currentSlide.fadeOut(500).removeClass("active");
		prev.fadeIn(500).addClass("active");
	});
}