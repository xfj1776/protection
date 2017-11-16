$(function(){
			var oDiv=$('<div class="box">❄</div>').css('top','-50px')
			var maxBox = $('#maxBox');
			var documentWidth = $(document).width();
			var documentHeight = $(document).height();

			var interval = setInterval( function(){
							//开始的Left
							var actLeft = Math.abs(Math.random() * documentWidth - 100);

							//透明度的随机数
							var actOpacity = 0.5 + Math.random();

							//雪花的大小
							var sizeFlake = 10 + Math.random() * 20;

							//top的结束位置
							var endPositionTop = documentHeight - 40;

							//left的结束位置
							var endPositionLeft	= actLeft - 100 + Math.random() * 500;

							//雪花走到底部的毫秒数
							var durationFall = documentHeight * 10 + Math.random() * 5000;
				//每30毫秒克隆一个oDiv并appendTo到maxBox中，克隆的oDiv的样式left：随机数，opacity：随机。。。
				oDiv.clone().appendTo(maxBox).css({
							left: actLeft,
							opacity: actOpacity,
							'font-size': sizeFlake,
							color: '#fff'
						}).animate({//动画 从top为-50px处飘到top结束位置  left从oDiv的left飘到left结束的位置 透明度为0.2
							top: endPositionTop,   //animate的第一个参数：params:一组包含作为动画属性和终值的样式属性和及其值的集合
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){   //animate的第二个参数：speed:三种预定速度之一的字符串("slow","normal", or "fast")																或表示动画时长的毫秒数值(如：1000)

						//animate的第三个参数：easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".
																
						//animate的第三个参数：fn:在动画完成时执行的函数，每个元素执行一次。
						
							//此函数为动画完后成执行的函数 删除当前的div
							$(this).remove()
						}
				);
			}, 300);	
		})