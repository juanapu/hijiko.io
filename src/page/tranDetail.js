webpackJsonp([5],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Administrator
* @Date:   2017-11-10 15:15:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-15 15:22:10
*/


__webpack_require__(1);
__webpack_require__(33);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(6);

var _mm=__webpack_require__(0);
var tranList={
	init: function(){
		var _this=this;
		_this.addPOP();  /*** pop up message box when click button ****/
		_this.pagination();
		_this.changeCss();
		_this.insertImg();
		_this.bindEvent();
	},
	bindEvent: function(){
	},
	insertImg: function(){
		var img=__webpack_require__(50);
		$(".userImg>img").attr('src',img);
	},
	changeCss: function(){
		var elem1 = document.getElementById("cmtListWrap");
		var style = window.getComputedStyle(elem1, null).overflow;
		if(style==='scroll'){
			var htEm=$(window).height()/parseFloat($("body").css("font-size"));
			var htForm=$(".formWrap").height()/parseFloat($("body").css("font-size"));
			var htBt=$(".actionWrap.mobile>div").height()/parseFloat($("body").css("font-size"));
			var htCmt=htEm-htForm-htBt-8;
			$("#cmtListWrap").css({"max-height":""+htCmt+"em"});
		};
	},
	pagination: function(){
			var _this=this;
			_this.pageLogic();/******use to divide pages*******/
			$('#pagination-demo').twbsPagination({
		        totalPages: 16,
		        visiblePages: 6,
		        next: 'Next',
		        prev: 'Prev',
		        onPageClick: function (event, page) {
		            //fetch content and render here
		            $('#page-content').text('Page ' + page) + ' content here';
		        }
		    });
	},
	pageLogic: function(){
			var cmtNum=$('.commentListWrap .cmtInner').length;
	},
	addPOP: function(){
		$(".js-POP").click(function(){
			var popCnt='<div class="popWrap"><div class="desc"></div><form action=""><textarea rows="4" value="please input here"></textarea><div class="buttonWrap"><input class="cancel cmnBtn light" type="button" value="取消"/> <input type="submit" class="cmnBtn" value="确认" /></div></form></div>';
			var $this=$(this);
			$this.after(popCnt);
			/******description of each form*********/
			var dataTy=$(this).data('type'); //get data type
			 switch(dataTy){
			 	case 'pauseRlease': //pause release button click => html
			 			$this.siblings('.popWrap').find('.desc').html('请输入暂停放款的原因，例：与收款人协商一致暂停放款');
			 		break;
			 	case 'comment':  //comment button click => html
			 			$this.siblings('.popWrap').find('.desc').html('请输入留言内容。注意：此条留言将与收款方&HiJiko管理员共享');
			 		break;
			 };
			 $this.siblings('.popWrap').show('slow');
			$(".popWrap .cancel").click(function(e){
				var $inside=$(this);
				$inside.parents('.popWrap').hide('slow',function(){
					$(this).remove();
				});
				e.stopPropagation();  
			});
			$(".popWrap input[type='submit']").click(function(e){
				var $inside=$(this);
				$inside.parents('.popWrap').hide('slow',function(){
					$(this).remove();
				});
				e.stopPropagation();  
			});
			$(".popWrap form").bind('click keypress submit',function(e){
				e.stopPropagation();  
			})
		});
	}
};

$(function(){
	tranList.init();
});

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = "C:/Users/Administrator/desktop/company/work/quickPayProject/dist/resource/img/avatar.png";

/***/ })

},[32]);