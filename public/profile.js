(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    alert: "global/alert",
    loading: "global/loading",
    user: "auth/user"
  })), {}, {
    passwordConfirmationRule: function passwordConfirmationRule() {
      var _this = this;

      return function () {
        return _this.password === _this.confirmPassword || "Password must match";
      };
    }
  }),
  data: function data() {
    return {
      currentPasswordShow: false,
      passwordShow: false,
      confirmPasswordShow: false,
      valid: true,
      validPasswordForm: true,
      email: "",
      name: "",
      nameRules: [function (v) {
        return !!v || "E-mail is required";
      }],
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      password: "",
      confirmPassword: "",
      currentPassword: "",
      passwordRules: [function (v) {
        return !!v || "Password and Confirm password Required";
      }],
      currentPasswordRules: [function (v) {
        return !!v || "Current Password Required";
      }]
    };
  },
  methods: {
    validatePasswordForm: function validatePasswordForm() {
      if (this.$refs.formPassword.validate()) {
        this.$store.dispatch("auth/updateUserPassword", {
          id: this.user.id,
          current_password: this.currentPassword,
          password: this.password,
          password_confirmation: this.confirmPassword
        });
      }
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("auth/updateUser", {
          id: this.user.id,
          email: this.user.email,
          name: this.user.name
        });
      }
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("auth/getUser");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "container mx-auto flex justify-center items-center flex-column"
    },
    [
      _c("div", { staticClass: "w-1/3" }, [
        _c("h1", { staticClass: "mb-6 text-center text-3xl font-bold" }, [
          _vm._v("\n            Profile\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
          },
          [
            _c(
              "v-form",
              {
                ref: "form",
                attrs: { "lazy-validation": "" },
                model: {
                  value: _vm.valid,
                  callback: function($$v) {
                    _vm.valid = $$v
                  },
                  expression: "valid"
                }
              },
              [
                _c("v-text-field", {
                  attrs: { rules: _vm.nameRules, label: "Name", required: "" },
                  model: {
                    value: _vm.user.name,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "name", $$v)
                    },
                    expression: "user.name"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    rules: _vm.emailRules,
                    label: "E-mail",
                    required: ""
                  },
                  model: {
                    value: _vm.user.email,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "email", $$v)
                    },
                    expression: "user.email"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2",
                    attrs: { disabled: !_vm.valid, color: "primary" },
                    on: { click: _vm.validate }
                  },
                  [_vm._v("\n                    Submit\n                ")]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/3" }, [
        _c("h1", { staticClass: "mb-6 text-center text-3xl font-bold" }, [
          _vm._v("\n            Change Password\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
          },
          [
            _c(
              "v-form",
              {
                ref: "formPassword",
                attrs: { "lazy-validation": "" },
                model: {
                  value: _vm.validPasswordForm,
                  callback: function($$v) {
                    _vm.validPasswordForm = $$v
                  },
                  expression: "validPasswordForm"
                }
              },
              [
                _c("v-text-field", {
                  attrs: {
                    rules: _vm.currentPasswordRules,
                    label: "Current Password",
                    required: "",
                    type: "password"
                  },
                  on: {
                    "click:append": function($event) {
                      _vm.currentPasswordShow = !_vm.currentPasswordShow
                    }
                  },
                  model: {
                    value: _vm.currentPassword,
                    callback: function($$v) {
                      _vm.currentPassword = $$v
                    },
                    expression: "currentPassword"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    rules: _vm.passwordRules,
                    label: "Password",
                    required: "",
                    type: "password"
                  },
                  on: {
                    "click:append": function($event) {
                      _vm.passwordShow = !_vm.passwordShow
                    }
                  },
                  model: {
                    value: _vm.password,
                    callback: function($$v) {
                      _vm.password = $$v
                    },
                    expression: "password"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    label: "Confirm Password",
                    rules: [_vm.passwordRules, _vm.passwordConfirmationRule],
                    required: "",
                    type: "password"
                  },
                  on: {
                    "click:append": function($event) {
                      _vm.confirmPasswordShow = !_vm.confirmPasswordShow
                    }
                  },
                  model: {
                    value: _vm.confirmPassword,
                    callback: function($$v) {
                      _vm.confirmPassword = $$v
                    },
                    expression: "confirmPassword"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2",
                    attrs: {
                      disabled: !_vm.validPasswordForm,
                      color: "primary"
                    },
                    on: { click: _vm.validatePasswordForm }
                  },
                  [_vm._v("\n                    Submit\n                ")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/Show.vue":
/*!******************************************!*\
  !*** ./resources/js/views/auth/Show.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=a8538996& */ "./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/auth/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=a8538996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Show.vue?vue&type=template&id=a8538996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a8538996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);