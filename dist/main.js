/******/
(function (modules) { // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string')
      for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/
({

  /***/
  "./js/main.js":
    /*!********************!*\
      !*** ./js/main.js ***!
      \********************/
    /*! no static exports found */
    /***/
    (function (module, exports) {

      $(document).ready(function () {
        $(window).on("load resize", function () {
          var imgWidth = $('.img_box').width();
          var imgBox = $('.img_box');
          imgBox.height(imgWidth);
        }); // $('.member_info img').on('click',function(){
        //    $(this).parent().next($('.text_content')).slideToggle()
        // })

        // var owl = $('.owl-carousel');
        // owl.owlCarousel({
        //   margin: 10,
        //   nav: false,
        //   dots: false,
        //   loop: true,
        //   responsive:

        //   {
        //     0: {
        //       items: 1
        //     },
        //     600: {
        //       items: 3
        //     },
        //     1000: {
        //       items: 6
        //     }
        //   }
      });
      $('[data-ui="open"]').on('click', function () {
        $(this).toggleClass('active');
        $(".header_navigation ul").slideToggle();
      });
      $(".back_icon").click(function () {
        window.history.back();
      });
      $('.member_info img').on('click', function () {
        $(this).parent().next($('.text_content')).slideToggle();
      });
      $('.container .product_section .product_info .product_title img').on('click', function () {
        $(this).parent().next($('.text_content')).slideToggle();
      });
    }); // window.onscroll = function() {myFunction()};
  //     var headernav = document.getElementByClassName("header_navigation")[0];
  //     var sticky = headernav.offsetTop;
  //     function myFunction() {
  //     if (window.pageYOffset > sticky) {
  //         headernav.classList.add("sticky");
  //     } else {
  //         headernav.classList.remove("sticky");
  //     }
  //     }

  /***/
}),

/***/
"./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/
(function (module, exports) {

<<<<<<< HEAD
  // removed by extract-text-webpack-plugin
=======
throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\r\n        margin: 2px 0 15px;\r\n                         ^\r\n      Expected \"{\".\n   ╷\n29 │         margin: 2px 0 15px;\r\n   │                           ^\n   ╵\n  sass\\pages\\_my_account.scss 29:27  @import\n  stdin 16:9                         root stylesheet\r\n      in C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\sass\\pages\\_my_account.scss (line 29, column 27)\n    at runLoaders (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\webpack\\lib\\NormalModule.js:313:20)\n    at C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at render (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass-loader\\lib\\loader.js:52:13)\n    at Function.call$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:53412:16)\n    at _render_closure1.call$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:33231:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19633:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19637:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18105:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18390:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:3449:88)\n    at _Future._completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18226:9)\n    at _SyncCompleter._completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18092:19)\n    at _SyncCompleter.completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18061:12)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:17598:25)\n    at Object._asyncRethrow (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:3205:17)\n    at C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:10386:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:3228:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:17633:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:17625:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19633:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19637:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18105:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18390:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:3449:88)\n    at _Future._completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18226:9)\n    at _SyncCompleter._completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18092:19)\n    at _SyncCompleter.completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18061:12)\n    at Object.eval (eval at Closure_forwardCallTo (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:1494:14), <anonymous>:3:41)\n    at _RootZone.runBinary$3$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19633:18)\n    at _RootZone.runBinary$3 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:19637:19)\n    at _FutureListener.handleError$1 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18105:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18390:40)\n    at Object._Future__propagateToListeners (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:3449:88)\n    at _Future._completeError$2 (C:\\Users\\nmgeliashvili\\Desktop\\Gallery\\node_modules\\sass\\sass.dart.js:18226:9)");
>>>>>>> aa3e3e6b1d875af1049983c2a66082f269245327

  /***/
}),

/***/
0:
  /*!*******************************************!*\
    !*** multi ./js/main.js ./sass/main.scss ***!
    \*******************************************/
  /*! no static exports found */
  /***/
  (function (module, exports, __webpack_require__) {

    __webpack_require__( /*! C:\Users\nmgeliashvili\Desktop\Gallery\js\main.js */ "./js/main.js");
    module.exports = __webpack_require__( /*! C:\Users\nmgeliashvili\Desktop\Gallery\sass\main.scss */ "./sass/main.scss");


    /***/
  })

/******/
});