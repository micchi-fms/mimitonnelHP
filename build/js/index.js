(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(function () {
	$("#pagepiling").pagepiling({
		menu: '#menu',
		anchors: ["page1", "page2", "page3", "page4", "page5"],
		navigation: {
			"position": "right",
			"tooltips": ["TOP", "What's ミミトンネル", "実験内容", "仕組み", "受賞", "コンタクト"]
		},
		normalScrollElements: ".youtube",
		scrollingSpeed: 1000,
		sectionSelector: ".contents"
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFVO0FBQ1gsR0FBRSxhQUFGLEVBQWlCLFVBQWpCLENBQTRCO0FBQzNCLFFBQU0sT0FEcUI7QUFFM0IsV0FBUSxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE9BQWpCLEVBQXlCLE9BQXpCLEVBQWlDLE9BQWpDLENBRm1CO0FBRzNCLGNBQVc7QUFDVixlQUFXLE9BREQ7QUFFVixlQUFXLENBQUMsS0FBRCxFQUFPLGVBQVAsRUFBdUIsTUFBdkIsRUFBOEIsS0FBOUIsRUFBb0MsSUFBcEMsRUFBeUMsT0FBekM7QUFGRCxHQUhnQjtBQU8zQix3QkFBc0IsVUFQSztBQVEzQixrQkFBZSxJQVJZO0FBUzNCLG1CQUFnQjtBQVRXLEVBQTVCO0FBV0EsQ0FaRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGZ1bmN0aW9uKCl7XHJcblx0JChcIiNwYWdlcGlsaW5nXCIpLnBhZ2VwaWxpbmcoe1xyXG5cdFx0bWVudTogJyNtZW51JyxcclxuXHRcdGFuY2hvcnM6W1wicGFnZTFcIixcInBhZ2UyXCIsXCJwYWdlM1wiLFwicGFnZTRcIixcInBhZ2U1XCJdLFxyXG5cdFx0bmF2aWdhdGlvbjp7XHJcblx0XHRcdFwicG9zaXRpb25cIjpcInJpZ2h0XCIsXHJcblx0XHRcdFwidG9vbHRpcHNcIjpbXCJUT1BcIixcIldoYXQncyDjg5/jg5/jg4jjg7Pjg43jg6tcIixcIuWun+mok+WGheWuuVwiLFwi5LuV57WE44G/XCIsXCLlj5fos55cIixcIuOCs+ODs+OCv+OCr+ODiFwiXVxyXG5cdFx0fSxcclxuXHRcdG5vcm1hbFNjcm9sbEVsZW1lbnRzOiBcIi55b3V0dWJlXCIsXHJcblx0XHRzY3JvbGxpbmdTcGVlZDoxMDAwLFxyXG5cdFx0c2VjdGlvblNlbGVjdG9yOlwiLmNvbnRlbnRzXCJcclxuXHR9KTtcclxufSk7Il19
