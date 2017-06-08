$(function(){
	
	var go = $('.toTop');
//	var view = $('body');
//		console.log(go);
	
//	$('body').scroll( function() {
	window.onscroll = function(){
		var scrollTop=document.documentElement.scrollTop ||document.body.scrollTop;
//		console.log(scrollTop);
		if(scrollTop>=400){
			$('.toTop').css({'display':'block'});
		}else{
			$('.toTop').css({'display':'none'});
		}
		
	}
//	);
	go.click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
	})
	
	function show_time(year,month,day,hour,minute,second){
		month = month+1;
	    var time_start = new Date().getTime(); //设定当前时间
	    var time_end =  new Date(year,month,day,hour,minute,second).getTime(); //设定目标时间
	    // 计算时间差 
	    var time_distance = time_end - time_start; 
	    // 天
	    var int_day = Math.floor(time_distance/86400000) 
	    time_distance -= int_day * 86400000; 
	    // 时
	    var int_hour = Math.floor(time_distance/3600000) 
	    time_distance -= int_hour * 3600000; 
	    // 分
	    var int_minute = Math.floor(time_distance/60000) 
	    time_distance -= int_minute * 60000; 
	    // 秒 
	    var int_second = Math.floor(time_distance/1000) 
	    // 时分秒为单数时、前面加零 
	    if(int_day < 10){ 
	        int_day = "0" + int_day; 
	    } 
	    if(int_hour < 10){ 
	        int_hour = "0" + int_hour; 
	    } 
	    if(int_minute < 10){ 
	        int_minute = "0" + int_minute; 
	    } 
	    if(int_second < 10){
	        int_second = "0" + int_second; 
	    } 
	    // 显示时间 
//	    $("#time_d").val(int_day); 
	    $("#timeHour").html(int_hour); 
	    $("#timeMinute").html(int_minute); 
	    $("#timeSecond").html(int_second); 
	    // 设置定时器
	    setTimeout(function(){
	    	show_time(2017,04,16,23,59,59);
	    },1000);
	}
	show_time(2017,04,16,23,59,59);
	
	var onPos;
	var outPos;
	$('.carouselBox').on('mousedown',function(e){
		onPos = e.pageX;
		e.preventDefault();
		$('.carouselBox').on('mouseup',function(e){
			outPos = e.pageX;
//			console.log(onPos,outPos)
			if(onPos - outPos > 0){
				console.log('next');
				
				$("#carousel-example-generic").carousel('next'); 
			}else{
				console.log('prve');
				$("#carousel-example-generic").carousel('prev');
			}
//				next();
		})
	})
	
	$('.selectCoupon').delegate('a', 'click',function() {
		console.log(this)
		$('.btn-info1').html($(this).html());
	});
	
	$('.select').on('click',function(){
		if(parseInt($('.dot').css('left')) == 0){
			$('.dot').stop().animate({'left':'0.3rem'});
		}else{
			$('.dot').stop().animate({'left':'0'});
		}
		
	})
})
	
