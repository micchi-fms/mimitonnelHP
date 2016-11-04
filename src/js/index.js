$(function(){
	$("#pagepiling").pagepiling({
		menu: '#menu',
		anchors:["page1","page2","page3","page4"],
		navigation:{
			"position":"right",
			"tooltips":["TOP","What's ミミトンネル","実験内容","仕組み","受賞","コンタクト"]
		},
		normalScrollElements: ".youtube",
		scrollingSpeed:1000,
		sectionSelector:".contents"
	});
});