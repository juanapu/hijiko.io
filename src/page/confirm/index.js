/*
* @Author: Administrator
* @Date:   2017-11-10 15:15:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-16 12:48:43
*/
"use strict";

require('../common/layout.css');
require('./index.css');
require('../common/footer/index.js');
require('../common/header/index.js');
var _mm=require('../../util/mm.js');
var img=require('../../resource/img/qrcode.png');
var confirmPg={
	init: function(){
	 		var _this=this;
	 		$(".confirmPg .QRImg>img.img").attr('src',img);
	 		_this.bindEvent();
	 		_this.pageMove();
	},
	bindEvent: function(){
		var _this=this;
		document.getElementById('copyButton').addEventListener('click',function(){
			_this.copyToClipboard(document.getElementById("copyTarget"));
			$("button#copyButton~span").show('slow').delay(1000).hide('slow');
			$("#copyTarget").select();
		});
	},
	copyToClipboard: function(elem){
		  elem.focus();
	       elem.select();
		document.execCommand("copy",true);
	},
	pageMove: function(){
		$(".confirmPg>.notice>div>a.link").click(function(){
			window.location.href='./transaction.html';
		});
	}
};

$(function(){
	confirmPg.init();
});