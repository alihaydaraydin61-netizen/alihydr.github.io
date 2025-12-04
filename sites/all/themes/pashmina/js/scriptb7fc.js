/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
//  * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
// (function($, Drupal, window, document) {
//   "use strict";
//   // To understand behaviors, see https://drupal.org/node/756722#behaviors
//   Drupal.behaviors.my_custom_behavior = {
//     attach: function(context, settings) {
// Place your code here.
// Auto Hide Sticky Header
jQuery(document).ready(function ($) {
  $(function () {
    var scrollY = window.pageYOffset,
        $header = $(".header, .meanmenu-reveal, .mean-nav");
    $(window).scroll(function () {
      var currentScrollY = window.pageYOffset;

      if (currentScrollY > $header.outerHeight()) {
        $header.addClass("is-hidden");
      } else {
        $header.removeClass("is-hidden");
      }

      if (currentScrollY > scrollY) {
        $header.removeClass("is-show");
      } else {
        $header.addClass("is-show");
      }

      scrollY = currentScrollY;
    });
  }); //Collapse

  $(".org-structure h2, #board-members h2").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  }); //verification block - placeholder for input

  if ($("body").hasClass("page-home")) {
    $("#edit-field-trade-mark").attr("placeholder", "Enter the tag number");
  } //pop to show result of trademark verification in homepage in popup


  $("#edit-submit-trade-mark-verification").click(function (e) {
    e.preventDefault(); //adds class js-colorbox-on to the body when the colorbox is opened

    $("body").addClass("js-colorbox-on"); //load colorbox

    var elementURL = $("#edit-field-trade-mark").val();
    $.get("trade-mark-verification?field_trade_mark=" + elementURL, function (data) {
      var width = "90%";
      var height = "auto";

      if ($(window).width() > 780) {
        width = "780";
      }

      if ($(window).height() > 760) {
        height = "auto";
      }

      $.colorbox({
        html: $(data).find(".js-trademark-popup"),
        width: width,
        height: height,
        href: "trade-mark-verification?field_trade_mark=" + elementURL,
        className: "js_verification_popup"
      });
    }); //unbinds the attached event from previous clicks

    $("#edit-submit-trade-mark-verification").unbind(event);
  }); //colorbox responsive
  //Customize colorbox dimensions

  var colorboxResize = function colorboxResize(resize) {
    var width = "90%";
    var height = "auto";

    if ($(window).width() > 780) {
      width = "780";
    }

    if ($(window).height() > 760) {
      height = "auto";
    }

    $.colorbox.settings.height = height;
    $.colorbox.settings.width = width; //if window is resized while lightbox open

    if (resize) {
      $.colorbox.resize({
        height: height,
        width: width
      });
    }
  }; //In case of window being resized for the verification popup only


  $(window).resize(function () {
    if ($("body").hasClass("front")) {
      colorboxResize(true);
    }
  }); //removed the class js-colorbox-on from the body and resets the trademark input field

  if ($("body").hasClass("js-colorbox-on")) {
    $("#edit-field-trade-mark").val("");
    $("body").removeClass("js-colorbox-on");
  } // placeholder for input box from the title


  if ($("div").hasClass("custom-exposed-form")) {
    var title = $.trim($(".custom-exposed-form").find(".views-widget label").text());
    $(".custom-exposed-form").find(".form-text").attr("placeholder", title);
  } //hide contact email and phone number div if there is no content


  $("div.js-check-empty").each(function () {
    if ($(this).has("a").length == 0) {
      $(this).hide();
    }
  }); //Form infield label.

  $("form .webform-component-textfield, form .webform-component-email, form .webform-component-textarea").infieldLabel(); //     }
  //   };
  // })(jQuery, Drupal, this, this.document);
});

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./assets/js/script.js ./assets/sass/app.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/punya/htdocs/old-projects/chyangra-pashmina/sites/all/themes/pashmina/assets/js/script.js */"./assets/js/script.js");
module.exports = __webpack_require__(/*! /Users/punya/htdocs/old-projects/chyangra-pashmina/sites/all/themes/pashmina/assets/sass/app.scss */"./assets/sass/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9mMjEzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwic2Nyb2xsWSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiJGhlYWRlciIsInNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwib3V0ZXJIZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiYXR0ciIsImNsaWNrIiwiZWxlbWVudFVSTCIsInZhbCIsImdldCIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yYm94IiwiaHRtbCIsImZpbmQiLCJocmVmIiwiY2xhc3NOYW1lIiwidW5iaW5kIiwiZXZlbnQiLCJjb2xvcmJveFJlc2l6ZSIsInJlc2l6ZSIsInNldHRpbmdzIiwidGl0bGUiLCJ0cmltIiwidGV4dCIsImVhY2giLCJoYXMiLCJsZW5ndGgiLCJoaWRlIiwiaW5maWVsZExhYmVsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdI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RCxFQS9GaUMsQ0FxR2pDOztBQUNBLE1BQUk5QixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVjLFFBQVYsQ0FBbUIsZ0JBQW5CLENBQUosRUFBMEM7QUFDeENkLEtBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCa0IsR0FBNUIsQ0FBZ0MsRUFBaEM7QUFDQWxCLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVMsV0FBVixDQUFzQixnQkFBdEI7QUFDRCxHQXpHZ0MsQ0EyR2pDOzs7QUFDQSxNQUFJVCxDQUFDLENBQUMsS0FBRCxDQUFELENBQVNjLFFBQVQsQ0FBa0IscUJBQWxCLENBQUosRUFBOEM7QUFDNUMsUUFBSW1CLEtBQUssR0FBR2pDLENBQUMsQ0FBQ2tDLElBQUYsQ0FDVmxDLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQ0d5QixJQURILENBQ1EscUJBRFIsRUFFR1UsSUFGSCxFQURVLENBQVo7QUFLQW5DLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQ0d5QixJQURILENBQ1EsWUFEUixFQUVHVixJQUZILENBRVEsYUFGUixFQUV1QmtCLEtBRnZCO0FBR0QsR0FySGdDLENBdUhqQzs7O0FBQ0FqQyxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm9DLElBQXhCLENBQTZCLFlBQVc7QUFDdEMsUUFBSXBDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCQyxNQUFqQixJQUEyQixDQUEvQixFQUFrQztBQUNoQ3RDLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVDLElBQVI7QUFDRDtBQUNGLEdBSkQsRUF4SGlDLENBOEhqQzs7QUFDQXZDLEdBQUMsQ0FDQyxvR0FERCxDQUFELENBRUV3QyxZQUZGLEdBL0hpQyxDQWtJakM7QUFDQTtBQUNBO0FBQ0QsQ0FySUQsRTs7Ozs7Ozs7Ozs7QUNyQkEseUMiLCJmaWxlIjoiL2pzL3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbi8vICAqIEBmaWxlXG4gKiBBIEphdmFTY3JpcHQgZmlsZSBmb3IgdGhlIHRoZW1lLlxuICpcbiAqIEluIG9yZGVyIGZvciB0aGlzIEphdmFTY3JpcHQgdG8gYmUgbG9hZGVkIG9uIHBhZ2VzLCBzZWUgdGhlIGluc3RydWN0aW9ucyBpblxuICogdGhlIFJFQURNRS50eHQgbmV4dCB0byB0aGlzIGZpbGUuXG4gKi9cblxuLy8gSmF2YVNjcmlwdCBzaG91bGQgYmUgbWFkZSBjb21wYXRpYmxlIHdpdGggbGlicmFyaWVzIG90aGVyIHRoYW4galF1ZXJ5IGJ5XG4vLyB3cmFwcGluZyBpdCB3aXRoIGFuIFwiYW5vbnltb3VzIGNsb3N1cmVcIi4gU2VlOlxuLy8gLSBodHRwczovL2RydXBhbC5vcmcvbm9kZS8xNDQ2NDIwXG4vLyAtIGh0dHA6Ly93d3cuYWRlcXVhdGVseWdvb2QuY29tLzIwMTAvMy9KYXZhU2NyaXB0LU1vZHVsZS1QYXR0ZXJuLUluLURlcHRoXG4vLyAoZnVuY3Rpb24oJCwgRHJ1cGFsLCB3aW5kb3csIGRvY3VtZW50KSB7XG4vLyAgIFwidXNlIHN0cmljdFwiO1xuXG4vLyAgIC8vIFRvIHVuZGVyc3RhbmQgYmVoYXZpb3JzLCBzZWUgaHR0cHM6Ly9kcnVwYWwub3JnL25vZGUvNzU2NzIyI2JlaGF2aW9yc1xuLy8gICBEcnVwYWwuYmVoYXZpb3JzLm15X2N1c3RvbV9iZWhhdmlvciA9IHtcbi8vICAgICBhdHRhY2g6IGZ1bmN0aW9uKGNvbnRleHQsIHNldHRpbmdzKSB7XG4vLyBQbGFjZSB5b3VyIGNvZGUgaGVyZS5cbi8vIEF1dG8gSGlkZSBTdGlja3kgSGVhZGVyXG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICAkKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgJGhlYWRlciA9ICQoXCIuaGVhZGVyLCAubWVhbm1lbnUtcmV2ZWFsLCAubWVhbi1uYXZcIik7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKGN1cnJlbnRTY3JvbGxZID4gJGhlYWRlci5vdXRlckhlaWdodCgpKSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJpcy1oaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiBzY3JvbGxZKSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcImlzLXNob3dcIik7XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy9Db2xsYXBzZVxuICAkKFwiLm9yZy1zdHJ1Y3R1cmUgaDIsICNib2FyZC1tZW1iZXJzIGgyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICAvL3ZlcmlmaWNhdGlvbiBibG9jayAtIHBsYWNlaG9sZGVyIGZvciBpbnB1dFxuICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJwYWdlLWhvbWVcIikpIHtcbiAgICAkKFwiI2VkaXQtZmllbGQtdHJhZGUtbWFya1wiKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciB0aGUgdGFnIG51bWJlclwiKTtcbiAgfVxuXG4gIC8vcG9wIHRvIHNob3cgcmVzdWx0IG9mIHRyYWRlbWFyayB2ZXJpZmljYXRpb24gaW4gaG9tZXBhZ2UgaW4gcG9wdXBcbiAgJChcIiNlZGl0LXN1Ym1pdC10cmFkZS1tYXJrLXZlcmlmaWNhdGlvblwiKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy9hZGRzIGNsYXNzIGpzLWNvbG9yYm94LW9uIHRvIHRoZSBib2R5IHdoZW4gdGhlIGNvbG9yYm94IGlzIG9wZW5lZFxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwianMtY29sb3Jib3gtb25cIik7XG5cbiAgICAvL2xvYWQgY29sb3Jib3hcbiAgICB2YXIgZWxlbWVudFVSTCA9ICQoXCIjZWRpdC1maWVsZC10cmFkZS1tYXJrXCIpLnZhbCgpO1xuICAgICQuZ2V0KFwidHJhZGUtbWFyay12ZXJpZmljYXRpb24/ZmllbGRfdHJhZGVfbWFyaz1cIiArIGVsZW1lbnRVUkwsIGZ1bmN0aW9uKFxuICAgICAgZGF0YVxuICAgICkge1xuICAgICAgdmFyIHdpZHRoID0gXCI5MCVcIjtcbiAgICAgIHZhciBoZWlnaHQgPSBcImF1dG9cIjtcblxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzgwKSB7XG4gICAgICAgIHdpZHRoID0gXCI3ODBcIjtcbiAgICAgIH1cbiAgICAgIGlmICgkKHdpbmRvdykuaGVpZ2h0KCkgPiA3NjApIHtcbiAgICAgICAgaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICB9XG5cbiAgICAgICQuY29sb3Jib3goe1xuICAgICAgICBodG1sOiAkKGRhdGEpLmZpbmQoXCIuanMtdHJhZGVtYXJrLXBvcHVwXCIpLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBocmVmOiBcInRyYWRlLW1hcmstdmVyaWZpY2F0aW9uP2ZpZWxkX3RyYWRlX21hcms9XCIgKyBlbGVtZW50VVJMLFxuICAgICAgICBjbGFzc05hbWU6IFwianNfdmVyaWZpY2F0aW9uX3BvcHVwXCJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy91bmJpbmRzIHRoZSBhdHRhY2hlZCBldmVudCBmcm9tIHByZXZpb3VzIGNsaWNrc1xuICAgICQoXCIjZWRpdC1zdWJtaXQtdHJhZGUtbWFyay12ZXJpZmljYXRpb25cIikudW5iaW5kKGV2ZW50KTtcbiAgfSk7XG5cbiAgLy9jb2xvcmJveCByZXNwb25zaXZlXG4gIC8vQ3VzdG9taXplIGNvbG9yYm94IGRpbWVuc2lvbnNcbiAgdmFyIGNvbG9yYm94UmVzaXplID0gZnVuY3Rpb24ocmVzaXplKSB7XG4gICAgdmFyIHdpZHRoID0gXCI5MCVcIjtcbiAgICB2YXIgaGVpZ2h0ID0gXCJhdXRvXCI7XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3ODApIHtcbiAgICAgIHdpZHRoID0gXCI3ODBcIjtcbiAgICB9XG4gICAgaWYgKCQod2luZG93KS5oZWlnaHQoKSA+IDc2MCkge1xuICAgICAgaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgJC5jb2xvcmJveC5zZXR0aW5ncy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgJC5jb2xvcmJveC5zZXR0aW5ncy53aWR0aCA9IHdpZHRoO1xuXG4gICAgLy9pZiB3aW5kb3cgaXMgcmVzaXplZCB3aGlsZSBsaWdodGJveCBvcGVuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgJC5jb2xvcmJveC5yZXNpemUoe1xuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy9JbiBjYXNlIG9mIHdpbmRvdyBiZWluZyByZXNpemVkIGZvciB0aGUgdmVyaWZpY2F0aW9uIHBvcHVwIG9ubHlcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJmcm9udFwiKSkge1xuICAgICAgY29sb3Jib3hSZXNpemUodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICAvL3JlbW92ZWQgdGhlIGNsYXNzIGpzLWNvbG9yYm94LW9uIGZyb20gdGhlIGJvZHkgYW5kIHJlc2V0cyB0aGUgdHJhZGVtYXJrIGlucHV0IGZpZWxkXG4gIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcImpzLWNvbG9yYm94LW9uXCIpKSB7XG4gICAgJChcIiNlZGl0LWZpZWxkLXRyYWRlLW1hcmtcIikudmFsKFwiXCIpO1xuICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwianMtY29sb3Jib3gtb25cIik7XG4gIH1cblxuICAvLyBwbGFjZWhvbGRlciBmb3IgaW5wdXQgYm94IGZyb20gdGhlIHRpdGxlXG4gIGlmICgkKFwiZGl2XCIpLmhhc0NsYXNzKFwiY3VzdG9tLWV4cG9zZWQtZm9ybVwiKSkge1xuICAgIHZhciB0aXRsZSA9ICQudHJpbShcbiAgICAgICQoXCIuY3VzdG9tLWV4cG9zZWQtZm9ybVwiKVxuICAgICAgICAuZmluZChcIi52aWV3cy13aWRnZXQgbGFiZWxcIilcbiAgICAgICAgLnRleHQoKVxuICAgICk7XG4gICAgJChcIi5jdXN0b20tZXhwb3NlZC1mb3JtXCIpXG4gICAgICAuZmluZChcIi5mb3JtLXRleHRcIilcbiAgICAgIC5hdHRyKFwicGxhY2Vob2xkZXJcIiwgdGl0bGUpO1xuICB9XG5cbiAgLy9oaWRlIGNvbnRhY3QgZW1haWwgYW5kIHBob25lIG51bWJlciBkaXYgaWYgdGhlcmUgaXMgbm8gY29udGVudFxuICAkKFwiZGl2LmpzLWNoZWNrLWVtcHR5XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuaGFzKFwiYVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcblxuICAvL0Zvcm0gaW5maWVsZCBsYWJlbC5cbiAgJChcbiAgICBcImZvcm0gLndlYmZvcm0tY29tcG9uZW50LXRleHRmaWVsZCwgZm9ybSAud2ViZm9ybS1jb21wb25lbnQtZW1haWwsIGZvcm0gLndlYmZvcm0tY29tcG9uZW50LXRleHRhcmVhXCJcbiAgKS5pbmZpZWxkTGFiZWwoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuICAvLyB9KShqUXVlcnksIERydXBhbCwgdGhpcywgdGhpcy5kb2N1bWVudCk7XG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==