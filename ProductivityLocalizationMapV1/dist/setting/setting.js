System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ === 'undefined') { var e = new Error("Cannot find module 'jimu-for-builder'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ === 'undefined') { var e = new Error("Cannot find module 'jimu-layouts/layout-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/EvapoRegionV2/ProductivityLocalizationMapV1/src/setting/setting.tsx ***!
  \*****************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.waitForAppConfigAndAutoDetectMap = () => {
            var _a, _b;
            const widgets = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets;
            if (widgets && Object.keys(widgets).length > 0) {
                this.autoDetectMapWidget();
                return;
            }
            setTimeout(this.waitForAppConfigAndAutoDetectMap, 200);
        };
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({ id: this.props.id, useMapWidgetIds });
        };
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: this.toPlainArray(useDataSources),
            });
        };
        this.onWidthChange = (value) => {
            const safeValue = Math.min(48, Math.max(28, Number(value) || 34));
            this.updateConfig("rightPanelWidthPercent", safeValue);
        };
    }
    componentDidMount() {
        this.waitForAppConfigAndAutoDetectMap();
        this.tryExpandWidgetToFullPage();
    }
    tryExpandWidgetToFullPage() {
        var _a, _b, _c;
        try {
            if (!((_a = window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder))
                return;
            const { getAppConfigAction } = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
            const edit = getAppConfigAction === null || getAppConfigAction === void 0 ? void 0 : getAppConfigAction();
            if (!edit)
                return;
            const { LayoutItemType } = __webpack_require__(/*! jimu-core */ "jimu-core");
            const { searchUtils, utils } = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const layoutInfo = (_b = searchUtils.getLayoutInfosHoldContent(state.appConfig, LayoutItemType.Widget, this.props.id, state.browserSizeMode)) === null || _b === void 0 ? void 0 : _b[0];
            if (!layoutInfo)
                return;
            const layoutId = (_c = utils.getCurrentPageRootLayoutId) === null || _c === void 0 ? void 0 : _c.call(utils);
            const container = layoutId
                ? document.querySelector(`[data-layoutid="${layoutId}"]`)
                : null;
            if (!container)
                return;
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width < 120 || containerRect.height < 120)
                return;
            const item = searchUtils.findLayoutItem(state.appConfig, layoutInfo);
            if (!item)
                return;
            const targetRect = new DOMRect(0, 0, containerRect.width, containerRect.height);
            if (!item.bbox) {
                edit
                    .editLayoutItemSize(layoutInfo, Math.round(containerRect.width), Math.round(containerRect.height))
                    .exec();
            }
            else {
                const newBbox = utils.replaceBoundingBox(item.bbox, targetRect, containerRect);
                edit.editLayoutItemProperty(layoutInfo, "bbox", newBbox).exec();
            }
        }
        catch (_d) {
            /* builder helper */
        }
    }
    isMapWidget(widget) {
        var _a;
        const manifestName = String(((_a = widget === null || widget === void 0 ? void 0 : widget.manifest) === null || _a === void 0 ? void 0 : _a.name) || "").toLowerCase();
        const uri = String((widget === null || widget === void 0 ? void 0 : widget.uri) || "").toLowerCase();
        return (manifestName === "map" ||
            uri.includes("arcgis-map") ||
            uri.includes("arcgis/arcgis-map"));
    }
    autoDetectMapWidget() {
        var _a, _b;
        if (this.props.useMapWidgetIds && this.props.useMapWidgetIds.length > 0) {
            return;
        }
        const widgets = ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets) || {};
        const mapWidgetId = Object.keys(widgets).find((id) => this.isMapWidget(widgets[id]));
        if (mapWidgetId) {
            this.props.onSettingChange({ id: this.props.id, useMapWidgetIds: [mapWidgetId] });
        }
    }
    ensureConfig() {
        var _a;
        return ((_a = this.props.config) !== null && _a !== void 0 ? _a : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            rightPanelWidthPercent: 34,
            defaultYear: "2025",
            defaultRegion: "Farg'ona viloyati",
        }));
    }
    toPlainArray(value) {
        if (!value)
            return [];
        if (Array.isArray(value))
            return value;
        if (typeof value.asMutable === "function") {
            return value.asMutable({ deep: true });
        }
        if (typeof value.toArray === "function") {
            return value.toArray();
        }
        return [];
    }
    updateConfig(key, value) {
        this.props.onSettingChange({
            id: this.props.id,
            config: this.ensureConfig().set(key, value),
        });
    }
    render() {
        const cfg = this.ensureConfig();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { padding: 16 } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { marginBottom: 10 } }, "ProductivityLocalizationMapV1"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { marginBottom: 14, fontSize: 12, color: "#5b6b7a" } }, "Select the Map widget and the same FeatureLayer data sources used by EvapoDashboardV30. Link a Map widget below or add one to the page and it will automatically snap to the reserved left map area and fill the screen when this widget is placed on the page."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: 600, marginBottom: 6 } }, "Map widget"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: 600, marginBottom: 6 } }, "Data sources (Feature layers)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.toPlainArray(this.props.useDataSources)), onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true, isMultiple: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { display: "block", marginBottom: 6 } }, "Chart panel width (%)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { min: 28, max: 48, size: "sm", value: cfg.rightPanelWidthPercent || 34, onAcceptValue: this.onWidthChange })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { display: "block", marginBottom: 6 } }, "Default year"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { defaultValue: cfg.defaultYear || "2025", onAcceptValue: (value) => this.updateConfig("defaultYear", value) })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { display: "block", marginBottom: 6 } }, "Default region"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { defaultValue: cfg.defaultRegion || "Farg'ona viloyati", onAcceptValue: (value) => this.updateConfig("defaultRegion", value) }))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9FdmFwb1JlZ2lvblYyL1Byb2R1Y3Rpdml0eUxvY2FsaXphdGlvbk1hcFYxL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQSwwRUFBMEUsNERBQTRELDZCQUE2Qjs7QUFFbks7Ozs7Ozs7Ozs7O0FDRkEscUZBQXFGLHVFQUF1RSw2QkFBNkI7O0FBRXpMOzs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWhDO0FBQ3dEO0FBQ0g7QUFDZjtBQUcxQyxNQUFNLE9BQVEsU0FBUSw0Q0FBSyxDQUFDLGFBRTFDO0lBRkQ7O1FBR21CLG1CQUFjLEdBQUcsb0RBQVMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQWtEcEUscUNBQWdDLEdBQUcsR0FBUyxFQUFFOztZQUNwRCxNQUFNLE9BQU8sR0FBRyxZQUFDLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQVUsMENBQUUsU0FBUywwQ0FBRSxPQUFPLENBQUM7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QUUzQztnQkFDUiwyREFBQyw4Q0FBUyxJQUNSLFlBQVksRUFBRSxHQUFHLENBQUMsV0FBVyxJQUFJLE1BQU0sRUFDdkMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsR0FDakUsQ0FDRTtZQUVOLG9FQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLDJEQUFDLDBDQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLHFCQUUzQztnQkFDUiwyREFBQyw4Q0FBUyxJQUNSLFlBQVksRUFBRSxHQUFHLENBQUMsYUFBYSxJQUFJLG1CQUFtQixFQUN0RCxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxHQUNuRSxDQUNFLENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRXZhcG9SZWdpb25WMi9Qcm9kdWN0aXZpdHlMb2NhbGl6YXRpb25NYXBWMS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiaWYodHlwZW9mIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fID09PSAndW5kZWZpbmVkJykgeyB2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnamltdS1mb3ItYnVpbGRlcidcIik7IGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJzsgdGhyb3cgZTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fOyIsImlmKHR5cGVvZiBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfbGF5b3V0c19sYXlvdXRfcnVudGltZV9fID09PSAndW5kZWZpbmVkJykgeyB2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lJ1wiKTsgZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnOyB0aHJvdyBlOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcbiAgRGF0YVNvdXJjZVR5cGVzLFxuICBJbW11dGFibGUsXG4gIFJlYWN0LFxuICB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyxcbiAgZ2V0QXBwU3RvcmUsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGFiZWwsIE51bWVyaWNJbnB1dCwgVGV4dElucHV0IH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IHR5cGUgQ29uZmlnLCB0eXBlIElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPlxuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLndhaXRGb3JBcHBDb25maWdBbmRBdXRvRGV0ZWN0TWFwKCk7XG4gICAgdGhpcy50cnlFeHBhbmRXaWRnZXRUb0Z1bGxQYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIHRyeUV4cGFuZFdpZGdldFRvRnVsbFBhZ2UoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLmppbXVDb25maWc/LmlzQnVpbGRlcikgcmV0dXJuO1xuICAgICAgY29uc3QgeyBnZXRBcHBDb25maWdBY3Rpb24gfSA9IHJlcXVpcmUoXCJqaW11LWZvci1idWlsZGVyXCIpIGFzIGFueTtcbiAgICAgIGNvbnN0IGVkaXQgPSBnZXRBcHBDb25maWdBY3Rpb24/LigpO1xuICAgICAgaWYgKCFlZGl0KSByZXR1cm47XG4gICAgICBjb25zdCB7IExheW91dEl0ZW1UeXBlIH0gPSByZXF1aXJlKFwiamltdS1jb3JlXCIpO1xuICAgICAgY29uc3QgeyBzZWFyY2hVdGlscywgdXRpbHMgfSA9IHJlcXVpcmUoXCJqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWVcIikgYXMgYW55O1xuICAgICAgY29uc3Qgc3RhdGUgPSAoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpIGFzIGFueSk7XG4gICAgICBjb25zdCBsYXlvdXRJbmZvID0gc2VhcmNoVXRpbHMuZ2V0TGF5b3V0SW5mb3NIb2xkQ29udGVudChcbiAgICAgICAgc3RhdGUuYXBwQ29uZmlnLFxuICAgICAgICBMYXlvdXRJdGVtVHlwZS5XaWRnZXQsXG4gICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHN0YXRlLmJyb3dzZXJTaXplTW9kZSxcbiAgICAgICk/LlswXTtcbiAgICAgIGlmICghbGF5b3V0SW5mbykgcmV0dXJuO1xuICAgICAgY29uc3QgbGF5b3V0SWQgPSB1dGlscy5nZXRDdXJyZW50UGFnZVJvb3RMYXlvdXRJZD8uKCk7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBsYXlvdXRJZFxuICAgICAgICA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1sYXlvdXRpZD1cIiR7bGF5b3V0SWR9XCJdYCkgYXMgSFRNTEVsZW1lbnQgfCBudWxsKVxuICAgICAgICA6IG51bGw7XG4gICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmIChjb250YWluZXJSZWN0LndpZHRoIDwgMTIwIHx8IGNvbnRhaW5lclJlY3QuaGVpZ2h0IDwgMTIwKSByZXR1cm47XG4gICAgICBjb25zdCBpdGVtID0gc2VhcmNoVXRpbHMuZmluZExheW91dEl0ZW0oc3RhdGUuYXBwQ29uZmlnLCBsYXlvdXRJbmZvKTtcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IG5ldyBET01SZWN0KDAsIDAsIGNvbnRhaW5lclJlY3Qud2lkdGgsIGNvbnRhaW5lclJlY3QuaGVpZ2h0KTtcbiAgICAgIGlmICghaXRlbS5iYm94KSB7XG4gICAgICAgIGVkaXRcbiAgICAgICAgICAuZWRpdExheW91dEl0ZW1TaXplKFxuICAgICAgICAgICAgbGF5b3V0SW5mbyxcbiAgICAgICAgICAgIE1hdGgucm91bmQoY29udGFpbmVyUmVjdC53aWR0aCksXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGNvbnRhaW5lclJlY3QuaGVpZ2h0KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLmV4ZWMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0Jib3ggPSB1dGlscy5yZXBsYWNlQm91bmRpbmdCb3goaXRlbS5iYm94LCB0YXJnZXRSZWN0LCBjb250YWluZXJSZWN0KTtcbiAgICAgICAgZWRpdC5lZGl0TGF5b3V0SXRlbVByb3BlcnR5KGxheW91dEluZm8sIFwiYmJveFwiLCBuZXdCYm94KS5leGVjKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBidWlsZGVyIGhlbHBlciAqL1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2FpdEZvckFwcENvbmZpZ0FuZEF1dG9EZXRlY3RNYXAgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgd2lkZ2V0cyA9IChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkgYXMgYW55KT8uYXBwQ29uZmlnPy53aWRnZXRzO1xuICAgIGlmICh3aWRnZXRzICYmIE9iamVjdC5rZXlzKHdpZGdldHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdE1hcFdpZGdldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMud2FpdEZvckFwcENvbmZpZ0FuZEF1dG9EZXRlY3RNYXAsIDIwMCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpc01hcFdpZGdldCh3aWRnZXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1hbmlmZXN0TmFtZSA9IFN0cmluZyh3aWRnZXQ/Lm1hbmlmZXN0Py5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdXJpID0gU3RyaW5nKHdpZGdldD8udXJpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIG1hbmlmZXN0TmFtZSA9PT0gXCJtYXBcIiB8fFxuICAgICAgdXJpLmluY2x1ZGVzKFwiYXJjZ2lzLW1hcFwiKSB8fFxuICAgICAgdXJpLmluY2x1ZGVzKFwiYXJjZ2lzL2FyY2dpcy1tYXBcIilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhdXRvRGV0ZWN0TWFwV2lkZ2V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdpZGdldHMgPSAoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpIGFzIGFueSk/LmFwcENvbmZpZz8ud2lkZ2V0cyB8fCB7fTtcbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IE9iamVjdC5rZXlzKHdpZGdldHMpLmZpbmQoKGlkKSA9PlxuICAgICAgdGhpcy5pc01hcFdpZGdldCh3aWRnZXRzW2lkXSksXG4gICAgKTtcbiAgICBpZiAobWFwV2lkZ2V0SWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIHVzZU1hcFdpZGdldElkczogW21hcFdpZGdldElkXSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZUNvbmZpZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5jb25maWcgPz9cbiAgICAgIEltbXV0YWJsZSh7XG4gICAgICAgIHJpZ2h0UGFuZWxXaWR0aFBlcmNlbnQ6IDM0LFxuICAgICAgICBkZWZhdWx0WWVhcjogXCIyMDI1XCIsXG4gICAgICAgIGRlZmF1bHRSZWdpb246IFwiRmFyZydvbmEgdmlsb3lhdGlcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9QbGFpbkFycmF5KHZhbHVlOiB1bmtub3duKTogdW5rbm93bltdIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiAodmFsdWUgYXMgYW55KS5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuICh2YWx1ZSBhcyBhbnkpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhbHVlIGFzIGFueSkudG9BcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gKHZhbHVlIGFzIGFueSkudG9BcnJheSgpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbmZpZyhrZXk6IGtleW9mIENvbmZpZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5lbnN1cmVDb25maWcoKS5zZXQoa2V5LCB2YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIHVzZU1hcFdpZGdldElkcyB9KTtcbiAgfTtcblxuICBwcml2YXRlIG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHRoaXMudG9QbGFpbkFycmF5KHVzZURhdGFTb3VyY2VzKSxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIG9uV2lkdGhDaGFuZ2UgPSAodmFsdWU6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNhZmVWYWx1ZSA9IE1hdGgubWluKDQ4LCBNYXRoLm1heCgyOCwgTnVtYmVyKHZhbHVlKSB8fCAzNCkpO1xuICAgIHRoaXMudXBkYXRlQ29uZmlnKFwicmlnaHRQYW5lbFdpZHRoUGVyY2VudFwiLCBzYWZlVmFsdWUpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjZmcgPSB0aGlzLmVuc3VyZUNvbmZpZygpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDE2IH19PlxuICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5Qcm9kdWN0aXZpdHlMb2NhbGl6YXRpb25NYXBWMTwvaDQ+XG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQsIGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzViNmI3YVwiIH19PlxuICAgICAgICAgIFNlbGVjdCB0aGUgTWFwIHdpZGdldCBhbmQgdGhlIHNhbWUgRmVhdHVyZUxheWVyIGRhdGEgc291cmNlcyB1c2VkIGJ5XG4gICAgICAgICAgRXZhcG9EYXNoYm9hcmRWMzAuIExpbmsgYSBNYXAgd2lkZ2V0IGJlbG93IG9yIGFkZCBvbmUgdG8gdGhlIHBhZ2UgYW5kXG4gICAgICAgICAgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IHNuYXAgdG8gdGhlIHJlc2VydmVkIGxlZnQgbWFwIGFyZWEgYW5kIGZpbGwgdGhlXG4gICAgICAgICAgc2NyZWVuIHdoZW4gdGhpcyB3aWRnZXQgaXMgcGxhY2VkIG9uIHRoZSBwYWdlLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDYgfX0+TWFwIHdpZGdldDwvZGl2PlxuICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICBEYXRhIHNvdXJjZXMgKEZlYXR1cmUgbGF5ZXJzKVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICB0eXBlcz17dGhpcy5zdXBwb3J0ZWRUeXBlc31cbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoXG4gICAgICAgICAgICAgIHRoaXMudG9QbGFpbkFycmF5KHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgaGlkZURhdGFWaWV3XG4gICAgICAgICAgICBpc011bHRpcGxlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIENoYXJ0IHBhbmVsIHdpZHRoICglKVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgbWluPXsyOH1cbiAgICAgICAgICAgIG1heD17NDh9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgdmFsdWU9e2NmZy5yaWdodFBhbmVsV2lkdGhQZXJjZW50IHx8IDM0fVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5vbldpZHRoQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICBEZWZhdWx0IHllYXJcbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2ZnLmRlZmF1bHRZZWFyIHx8IFwiMjAyNVwifVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KHZhbHVlKSA9PiB0aGlzLnVwZGF0ZUNvbmZpZyhcImRlZmF1bHRZZWFyXCIsIHZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgRGVmYXVsdCByZWdpb25cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2ZnLmRlZmF1bHRSZWdpb24gfHwgXCJGYXJnJ29uYSB2aWxveWF0aVwifVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KHZhbHVlKSA9PiB0aGlzLnVwZGF0ZUNvbmZpZyhcImRlZmF1bHRSZWdpb25cIiwgdmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==