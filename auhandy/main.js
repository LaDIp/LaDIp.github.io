/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './src/styles/styles.scss':
      /*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://auhandy/./src/styles/styles.scss?'
        )

        /***/
      },

    /***/ './src/main.js':
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\nconst burger = document.querySelector('.header__burger')\nconst nav = document.querySelector('.header__nav')\nconst modal = document.querySelector('.g-modal')\nconst modalInner = modal.querySelector('.g-modal__inner')\nconst showModal = document.querySelector('#showmodal')\nconst modalInputs = modal.querySelectorAll('.g-input')\n\nconst regexps = {\n  name: /^[a-zA-Zа-яА-Я']+[a-zA-Zа-яА-Я']?$/,\n  phone: /\\+7?\\(\\d{3}\\)?\\d{3}-\\d{2}-\\d{2}/,\n  mail: /.+@.+\\..+/,\n}\n\nfunction validate(input) {\n  return regexps[input.getAttribute('name')].test(input.value)\n}\ndocument.addEventListener('click', (e) => {\n  const { target } = e\n  const isBurger = target === burger\n  const isModalInner = modalInner.contains(target)\n  const menuIsActive = nav.classList.contains('header__nav--active')\n  const modalIsActive = modal.classList.contains('g-modal--active')\n  if (!isBurger && menuIsActive) {\n    nav.classList.toggle('header__nav--active')\n  }\n  if (!isModalInner && modalIsActive) {\n    modal.classList.toggle('g-modal--active')\n  }\n})\nburger.addEventListener('click', (e) => {\n  e.stopPropagation()\n  nav.classList.toggle('header__nav--active')\n})\n\nshowModal.addEventListener('click', (e) => {\n  e.stopPropagation()\n  modal.classList.toggle('g-modal--active')\n})\n\nmodal.querySelector('.phone').addEventListener('focus', (e) => {\n  e.target.value = e.target.value || `+7`\n})\n\nmodal.querySelector('.phone').addEventListener('input', (e) => {\n  const x = e.target.value\n    .replace(/\\D/g, '')\n    .match(/7(\\d{0,3})(\\d{0,3})(\\d{0,2})(\\d{0,2})/)\n  e.target.value = `+7(${x[1]}${x[2] && `)${x[2]}`}${x[3] && `-${x[3]}`}${\n    x[4] && `-${x[4]}`\n  }`\n})\n\nmodal.addEventListener('submit', (e) => {\n  e.preventDefault()\n  modalInputs.forEach((input) => {\n    if (validate(input)) input.classList.remove('g-input--wrong')\n    else input.classList.add('g-input--wrong')\n  })\n})\n\n\n//# sourceURL=webpack://auhandy/./src/main.js?"
        )

        /***/
      },

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/main.js')
  /******/
  /******/
})()
