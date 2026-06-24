System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/EvapoRegionV2/evapo-widgets-src/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx":
/*!************************************************************************************************************************!*\
  !*** ./your-extensions/widgets/EvapoRegionV2/evapo-widgets-src/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AgriPolygonSettingPanel)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class AgriPolygonSettingPanel extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.dsMgr = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        this.fieldsDropdownRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.chartFieldsDropdownRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.updateAgriConfig = (patch) => {
            const cfg = this.ensureDashboardConfig();
            const merged = Object.assign(Object.assign({}, this.getAgriConfig()), patch);
            this.props.onSettingChange({
                id: this.props.id,
                config: cfg.set("agriPolygon", merged),
            });
        };
        this.handleClickOutside = (e) => {
            if (this.fieldsDropdownRef.current &&
                !this.fieldsDropdownRef.current.contains(e.target)) {
                this.setState({ fieldsDropdownOpen: false });
            }
            if (this.chartFieldsDropdownRef.current &&
                !this.chartFieldsDropdownRef.current.contains(e.target)) {
                this.setState({ chartFieldsDropdownOpen: false });
            }
        };
        this.onAttachmentsToggle = (e) => {
            var _a;
            const val = !!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked);
            const agri = this.getAgriConfig();
            this.updateAgriConfig({
                settings: Object.assign(Object.assign({}, (agri.settings || {})), { showAttachments: val }),
            });
        };
        this.initializeDataSources = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if ((_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.length) {
                yield this.createDataSources(this.props.useDataSources.asMutable());
            }
            else {
                this.setState({ dss: null, allFields: [] });
            }
        });
        this.cleanupDataSources = () => {
            var _a;
            (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.forEach((uds) => {
                if (uds === null || uds === void 0 ? void 0 : uds.dataSourceId)
                    this.dsMgr.destroyDataSource(uds.dataSourceId);
            });
        };
        this.createDataSources = (useList) => __awaiter(this, void 0, void 0, function* () {
            const dsArr = [];
            for (const uds of useList) {
                try {
                    const ds = yield this.dsMgr.createDataSourceByUseDataSource(uds);
                    if (ds)
                        dsArr.push(ds);
                }
                catch (_a) {
                    /* ignore */
                }
            }
            this.setState({ dss: dsArr }, () => this.extractFieldsFromDs());
        });
        this.extractFieldsFromDs = () => {
            var _a;
            const dss = this.state.dss;
            if (!dss || dss.length === 0) {
                this.setState({ allFields: [] });
                return;
            }
            const ds = dss[0];
            const schema = (_a = ds === null || ds === void 0 ? void 0 : ds.getSchema) === null || _a === void 0 ? void 0 : _a.call(ds);
            const fieldsObj = (schema === null || schema === void 0 ? void 0 : schema.fields) || {};
            const fields = Object.keys(fieldsObj).map((key) => {
                const f = fieldsObj[key];
                return {
                    name: (f === null || f === void 0 ? void 0 : f.name) || (f === null || f === void 0 ? void 0 : f.jimuName) || key,
                    alias: (f === null || f === void 0 ? void 0 : f.alias) || (f === null || f === void 0 ? void 0 : f.displayName) || (f === null || f === void 0 ? void 0 : f.name) || key,
                    type: (f === null || f === void 0 ? void 0 : f.type) || (f === null || f === void 0 ? void 0 : f.esriType) || "unknown",
                };
            });
            this.setState({ allFields: fields });
        };
        this.toggleField = (fieldName) => {
            const agri = this.getAgriConfig();
            const current = agri.fieldsToShow || [];
            let next;
            if (current.includes(fieldName)) {
                next = current.filter((f) => f !== fieldName);
            }
            else {
                next = [...current, fieldName];
            }
            const allDsIds = this.getAllDsIds();
            const allFields = this.state.allFields;
            const picked = allFields.filter((f) => next.includes(f.name));
            const imArr = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(picked);
            let nextMap = this.state.selectedFieldsMap || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
            for (const dsId of allDsIds) {
                nextMap = nextMap.set(dsId, imArr);
            }
            this.setState({ selectedFieldsMap: nextMap });
            this.updateAgriConfig({
                fieldsToShow: next,
                selectedFieldsMap: nextMap,
            });
        };
        this.toggleChartField = (fieldName) => {
            const agri = this.getAgriConfig();
            const current = agri.chartFields || [];
            let next;
            if (current.includes(fieldName)) {
                next = current.filter((f) => f !== fieldName);
            }
            else {
                next = [...current, fieldName];
            }
            this.updateAgriConfig({ chartFields: next });
        };
        this.onChartEnabledToggle = (e) => {
            var _a;
            this.updateAgriConfig({ chartEnabled: !!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked) });
        };
        this.onChartTypeChange = (e) => {
            var _a;
            this.updateAgriConfig({ chartType: (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value });
        };
        this.onChartTitleChange = (val) => {
            this.updateAgriConfig({ chartTitle: val });
        };
        this.onChartColorChange = (color) => {
            this.updateAgriConfig({ chartColor: color });
        };
        this.onZoomToggle = (e) => {
            var _a;
            const val = !!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked);
            const agri = this.getAgriConfig();
            this.setState({ zoomToSelection: val });
            this.updateAgriConfig({
                settings: Object.assign(Object.assign({}, (agri.settings || {})), { zoomToSelection: val }),
            });
        };
        this.onPopupToggle = (e) => {
            var _a;
            const val = !!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked);
            const agri = this.getAgriConfig();
            this.setState({ showMapPopup: val });
            this.updateAgriConfig({
                settings: Object.assign(Object.assign({}, (agri.settings || {})), { showMapPopup: val }),
            });
        };
        this.renderMultiSelect = (selectedItems, onToggle, isOpen, onToggleOpen, dropdownRef, placeholder) => {
            const { allFields } = this.state;
            const selectedLabels = selectedItems
                .map((name) => {
                const f = allFields.find((ff) => ff.name === name);
                return (f === null || f === void 0 ? void 0 : f.alias) || name;
            })
                .join(", ");
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { ref: dropdownRef, className: "evapo-polygon-multiselect", style: { position: "relative" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "evapo-polygon-multiselect-trigger", onClick: onToggleOpen, style: {
                        padding: "6px 10px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 4,
                        cursor: "pointer",
                        background: "rgba(255,255,255,0.06)",
                        color: selectedItems.length > 0 ? "#e9f8ff" : "#9cc7dd",
                        fontSize: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minHeight: 32,
                        userSelect: "none",
                        width: "100%",
                        boxSizing: "border-box",
                    } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            flex: 1,
                        } }, selectedItems.length > 0
                        ? `${selectedItems.length} tanlangan: ${selectedLabels}`
                        : placeholder),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                            marginLeft: 8,
                            transition: "transform 0.2s",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            fontSize: 10,
                        } }, "\u25BC")),
                isOpen && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "evapo-polygon-multiselect-menu", style: {
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                        background: "#212121",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 4,
                        maxHeight: 220,
                        overflowY: "auto",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                        marginTop: 2,
                    } },
                    allFields.length === 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { padding: "8px 12px", color: "#9cc7dd", fontSize: 12 } }, "Maydonlar topilmadi")),
                    allFields.map((f) => {
                        const isSelected = selectedItems.includes(f.name);
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: f.name, onClick: () => onToggle(f.name), style: {
                                padding: "6px 10px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                background: isSelected
                                    ? "rgba(0,174,239,0.15)"
                                    : "transparent",
                                transition: "background 0.15s",
                                fontSize: 13,
                                color: "#e9f8ff",
                            } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                    width: 16,
                                    height: 16,
                                    borderRadius: 3,
                                    border: isSelected
                                        ? "2px solid #00aeef"
                                        : "2px solid rgba(255,255,255,0.3)",
                                    background: isSelected ? "#00aeef" : "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                } }, isSelected && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                    color: "#fff",
                                    fontSize: 11,
                                    fontWeight: "bold",
                                } }, "\u2713"))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { flex: 1 } }, f.alias),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: {
                                    fontSize: 10,
                                    color: "#6ba3c0",
                                    textTransform: "uppercase",
                                } }, f.type === "esriFieldTypeString" || f.type === "string"
                                ? "ABC"
                                : f.type === "esriFieldTypeDouble" ||
                                    f.type === "esriFieldTypeSingle" ||
                                    f.type === "esriFieldTypeInteger" ||
                                    f.type === "esriFieldTypeSmallInteger" ||
                                    f.type === "number"
                                    ? "123"
                                    : f.type === "esriFieldTypeDate" || f.type === "date"
                                        ? "📅"
                                        : f.type === "esriFieldTypeOID" || f.type === "oid"
                                            ? "OID"
                                            : "—")));
                    })))));
        };
        const agri = this.getAgriConfig();
        const emptyMap = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        const incoming = ((_a = agri.selectedFieldsMap) !== null && _a !== void 0 ? _a : emptyMap);
        this.state = {
            dss: null,
            selectedFieldsMap: incoming,
            titleField: agri.titleField || "",
            zoomToSelection: ((_b = agri.settings) === null || _b === void 0 ? void 0 : _b.zoomToSelection) !== false,
            showMapPopup: !!((_c = agri.settings) === null || _c === void 0 ? void 0 : _c.showMapPopup),
            allFields: [],
            fieldsDropdownOpen: false,
            chartFieldsDropdownOpen: false,
        };
    }
    componentDidMount() {
        this.initializeDataSources();
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentDidUpdate(prev) {
        if (prev.useDataSources !== this.props.useDataSources) {
            this.initializeDataSources();
        }
    }
    componentWillUnmount() {
        this.cleanupDataSources();
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    toPlainAgri(value) {
        if (!value)
            return {};
        if (typeof value.asMutable === "function") {
            return value.asMutable({ deep: true });
        }
        return Object.assign({}, value);
    }
    getAgriConfig() {
        var _a;
        return this.toPlainAgri((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.agriPolygon);
    }
    ensureDashboardConfig() {
        var _a;
        return ((_a = this.props.config) !== null && _a !== void 0 ? _a : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            enableMinMaxControl: true,
            enableColorRendererControl: true,
            enableRegionFilterControl: true,
            enableLogoutControl: true,
            selectionPercentage: 10,
            polygonIdField: "GlobalID",
            rightPanelWidthPercent: 40,
            chartType: "bar",
            agriPolygon: {
                fieldsToShow: [],
                titleField: "",
                labels: {},
                settings: {
                    zoomToSelection: true,
                    showMapPopup: false,
                    showAttachments: true,
                },
                chartEnabled: false,
                chartType: "bar",
                chartTitle: "",
                chartFields: [],
                chartColor: "#3b82f6",
            },
        }));
    }
    getAllDsIds() {
        var _a, _b;
        const list = ((_b = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.asMutable) === null || _b === void 0 ? void 0 : _b.call(_a)) || [];
        return list.map((x) => x === null || x === void 0 ? void 0 : x.dataSourceId).filter(Boolean);
    }
    render() {
        var _a;
        const { useDataSources } = this.props;
        const agri = this.getAgriConfig();
        const dsConnected = !!(useDataSources && useDataSources.length > 0);
        const fieldsToShow = agri.fieldsToShow || [];
        const chartEnabled = !!agri.chartEnabled;
        const chartType = agri.chartType || "bar";
        const chartTitle = agri.chartTitle || "";
        const chartFields = agri.chartFields || [];
        const chartColor = agri.chartColor || "#3b82f6";
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px solid rgba(0,0,0,0.12)",
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { margin: "0 0 6px" } }, "Polygon Popup"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { margin: "0 0 14px", fontSize: 12, color: "#5b6b7a" } }, "Xarita va Feature layer sozlamalari yuqoridagi umumiy bo'limdan foydalanadi. Poligon bosilganda chiqadigan popup uchun quyidagi sozlamalarni tanlang."),
            dsConnected && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { style: { marginBottom: 20 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { margin: "0 0 8px" } }, "Fields to Display"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { margin: "0 0 8px", color: "#666", fontSize: 12 } }, "Polygon bosilganda ko'rsatiladigan atributlarni tanlang."),
                this.renderMultiSelect(fieldsToShow, this.toggleField, this.state.fieldsDropdownOpen, () => this.setState((s) => ({
                    fieldsDropdownOpen: !s.fieldsDropdownOpen,
                    chartFieldsDropdownOpen: false,
                })), this.fieldsDropdownRef, "Maydonlarni tanlang..."))),
            dsConnected && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { style: {
                    marginBottom: 20,
                    padding: 12,
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 8,
                    background: "rgba(0,0,0,0.02)",
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: chartEnabled ? 14 : 0,
                    } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { margin: 0 } }, "\uD83D\uDCCA Chart"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: chartEnabled, onChange: this.onChartEnabledToggle })),
                chartEnabled && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                display: "block",
                                marginBottom: 4,
                                fontSize: 12,
                                color: "#5b6b7a",
                            } }, "Chart turi"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", value: chartType, onChange: this.onChartTypeChange, style: { width: "100%" } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "bar" }, "\uD83D\uDCCA Bar Chart"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "line" }, "\uD83D\uDCC8 Line Chart"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                display: "block",
                                marginBottom: 4,
                                fontSize: 12,
                                color: "#5b6b7a",
                            } }, "Chart sarlavhasi"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { size: "sm", placeholder: "Chart nomini yozing...", value: chartTitle, onChange: (e) => this.onChartTitleChange(e.target.value), style: { width: "100%" } })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                display: "block",
                                marginBottom: 4,
                                fontSize: 12,
                                color: "#5b6b7a",
                            } }, "Chart maydonlari"),
                        this.renderMultiSelect(chartFields, this.toggleChartField, this.state.chartFieldsDropdownOpen, () => this.setState((s) => ({
                            chartFieldsDropdownOpen: !s.chartFieldsDropdownOpen,
                            fieldsDropdownOpen: false,
                        })), this.chartFieldsDropdownRef, "Chart uchun maydonlarni tanlang...")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                                display: "block",
                                marginBottom: 4,
                                fontSize: 12,
                                color: "#5b6b7a",
                            } }, "Chart rangi"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { color: chartColor, onChange: this.onChartColorChange }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: 12, color: "#5b6b7a" } }, chartColor))))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { style: { marginBottom: 10 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { margin: "0 0 8px" } }, "Behavior"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: "grid", gap: 10 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8 } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: this.state.zoomToSelection, onChange: this.onZoomToggle }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Zoom to selection")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8 } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: this.state.showMapPopup, onChange: this.onPopupToggle }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Also open map popup")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8 } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: ((_a = agri.settings) === null || _a === void 0 ? void 0 : _a.showAttachments) !== false, onChange: this.onAttachmentsToggle }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Include attachments (Photos & Files)"))))));
    }
}


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
/*!***********************************************************************************************************!*\
  !*** ./your-extensions/widgets/EvapoRegionV2/evapo-widgets-src/EvapoDashboardV30/src/setting/setting.tsx ***!
  \***********************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _agri_polygon_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agri-polygon-setting */ "./your-extensions/widgets/EvapoRegionV2/evapo-widgets-src/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx");





class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds,
            });
        };
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: this.toPlainArray(useDataSources),
            });
        };
        this.onCheckboxChange = (key) => (evt) => {
            var _a;
            this.updateConfig(key, !!((_a = evt.target) === null || _a === void 0 ? void 0 : _a.checked));
        };
        this.onWidthChange = (value) => {
            const safeValue = Math.min(80, Math.max(32, Number(value) || 40));
            this.updateConfig("rightPanelWidthPercent", safeValue);
        };
        this.onChartTypeChange = (evt) => {
            var _a;
            this.updateConfig("chartType", (_a = evt.target) === null || _a === void 0 ? void 0 : _a.value);
        };
    }
    ensureConfig() {
        var _a;
        return ((_a = this.props.config) !== null && _a !== void 0 ? _a : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            enableMinMaxControl: true,
            enableColorRendererControl: true,
            enableRegionFilterControl: true,
            enableLogoutControl: true,
            selectionPercentage: 10,
            polygonIdField: "GlobalID",
            rightPanelWidthPercent: 40,
            chartType: "bar",
            agriPolygon: {
                fieldsToShow: [],
                titleField: "",
                labels: {},
                settings: {
                    zoomToSelection: true,
                    showMapPopup: false,
                    showAttachments: true,
                },
                chartEnabled: false,
                chartType: "bar",
                chartTitle: "",
                chartFields: [],
                chartColor: "#3b82f6",
            },
        }));
    }
    updateConfig(key, value) {
        this.props.onSettingChange({
            id: this.props.id,
            config: this.ensureConfig().set(key, value),
        });
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
    render() {
        const cfg = this.ensureConfig();
        const chartType = cfg.chartType || "bar";
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { padding: 16 } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { marginBottom: 10 } }, "EvapoDashboardV30"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { marginBottom: 14, fontSize: 12, color: "#5b6b7a" } }, "Select the same map and feature layers used by LocalizationWidgetV20. The dashboard reuses EvapoIndicatorsV30, EvapoCombinedV30, EvapoWaterCanalV30, EvapoCropV2, and AgriPolygon4 popup inside one responsive widget. Link a Map widget below and it will automatically snap to the reserved left map area. The crop bar is embedded at the bottom of the map slot."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: 600, marginBottom: 6 } }, "Map widget"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: 600, marginBottom: 6 } }, "Data source (Feature layer)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.toPlainArray(this.props.useDataSources)), onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true, isMultiple: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { display: "block", marginBottom: 6 } }, "Right panel width (%)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { min: 32, max: 80, size: "sm", value: cfg.rightPanelWidthPercent || 40, onAcceptValue: this.onWidthChange })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { style: { display: "block", marginBottom: 6 } }, "Combined chart type"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { size: "sm", value: chartType, onChange: this.onChartTypeChange },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "bar" }, "Bar"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "line" }, "Line"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "area" }, "Area"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "pie" }, "Pie"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: cfg.enableRegionFilterControl !== false, onChange: this.onCheckboxChange("enableRegionFilterControl") }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Show region filter")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 8,
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: cfg.enableMinMaxControl !== false, onChange: this.onCheckboxChange("enableMinMaxControl") }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Show Min/Max")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 8,
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: cfg.enableColorRendererControl !== false, onChange: this.onCheckboxChange("enableColorRendererControl") }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Show color renderer")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 8,
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: cfg.enableLogoutControl !== false, onChange: this.onCheckboxChange("enableLogoutControl") }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "Show logout")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_agri_polygon_setting__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.props))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9FdmFwb1JlZ2lvblYyL2V2YXBvLXdpZGdldHMtc3JjL0V2YXBvRGFzaGJvYXJkVjMwL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbUI7QUFFeUM7QUFDSDtBQXdCMUMsTUFBTSx1QkFBd0IsU0FBUSw0Q0FBSyxDQUFDLGFBRzFEO0lBS0MsWUFBWSxLQUFzQzs7UUFDaEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTGYsVUFBSyxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLDRDQUFLLENBQUMsU0FBUyxFQUFrQixDQUFDO1FBQ3RELDJCQUFzQixHQUFHLDRDQUFLLENBQUMsU0FBUyxFQUFrQixDQUFDO1FBK0VuRCxxQkFBZ0IsR0FBRyxDQUFDLEtBQWlDLEVBQUUsRUFBRTtZQUMvRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN6QyxNQUFNLE1BQU0sbUNBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFLLEtBQUssQ0FBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLHVCQUFrQixHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDN0MsSUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTztnQkFDOUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDLEVBQzFELENBQUM7Z0JB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QixLQUFLLEtBQUssRUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxHQUM3RDtnQkFDRiwrRkFBZ0MsQ0FDMUI7WUFFUixzRUFDRSxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLE1BQU07b0JBQ2YsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLEdBQUcsRUFBRSxDQUFDO29CQUNOLFNBQVMsRUFBRSxDQUFDO2lCQUNiO2dCQUVELHNFQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLEVBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsR0FDdEQ7Z0JBQ0YsdUZBQXdCLENBQ2xCO1lBRVIsMkRBQUMsNkRBQXVCLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FDdkMsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRXZhcG9SZWdpb25WMi9ldmFwby13aWRnZXRzLXNyYy9FdmFwb0Rhc2hib2FyZFYzMC9zcmMvc2V0dGluZy9hZ3JpLXBvbHlnb24tc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRXZhcG9SZWdpb25WMi9ldmFwby13aWRnZXRzLXNyYy9FdmFwb0Rhc2hib2FyZFYzMC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXHJcbiAgSU1GaWVsZFNjaGVtYSxcclxuICBJTVVzZURhdGFTb3VyY2UsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIEltbXV0YWJsZUFycmF5LFxyXG4gIEltbXV0YWJsZU9iamVjdCxcclxuICBSZWFjdCxcclxufSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7IE9wdGlvbiwgU2VsZWN0LCBTd2l0Y2gsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCI7XHJcbmltcG9ydCB7IHR5cGUgQWdyaVBvbHlnb25Db25maWcsIHR5cGUgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG50eXBlIEZpZWxkc01hcCA9IEltbXV0YWJsZU9iamVjdDx7XHJcbiAgW2RzSWQ6IHN0cmluZ106IEltbXV0YWJsZUFycmF5PElNRmllbGRTY2hlbWE+O1xyXG59PjtcclxuXHJcbnR5cGUgRmllbGRJbmZvID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhbGlhczogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgZHNzOiBEYXRhU291cmNlW10gfCBudWxsO1xyXG4gIHNlbGVjdGVkRmllbGRzTWFwOiBGaWVsZHNNYXA7XHJcbiAgdGl0bGVGaWVsZDogc3RyaW5nO1xyXG4gIHpvb21Ub1NlbGVjdGlvbjogYm9vbGVhbjtcclxuICBzaG93TWFwUG9wdXA6IGJvb2xlYW47XHJcbiAgYWxsRmllbGRzOiBGaWVsZEluZm9bXTtcclxuICBmaWVsZHNEcm9wZG93bk9wZW46IGJvb2xlYW47XHJcbiAgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmlQb2x5Z29uU2V0dGluZ1BhbmVsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxyXG4gIFN0YXRlXHJcbj4ge1xyXG4gIGRzTWdyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICBmaWVsZHNEcm9wZG93blJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBjaGFydEZpZWxkc0Ryb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgY29uc3QgZW1wdHlNYXAgPSBJbW11dGFibGUoe30pIGFzIEZpZWxkc01hcDtcclxuICAgIGNvbnN0IGluY29taW5nID0gKGFncmkuc2VsZWN0ZWRGaWVsZHNNYXAgPz8gZW1wdHlNYXApIGFzIEZpZWxkc01hcDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkc3M6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkRmllbGRzTWFwOiBpbmNvbWluZyxcclxuICAgICAgdGl0bGVGaWVsZDogYWdyaS50aXRsZUZpZWxkIHx8IFwiXCIsXHJcbiAgICAgIHpvb21Ub1NlbGVjdGlvbjogYWdyaS5zZXR0aW5ncz8uem9vbVRvU2VsZWN0aW9uICE9PSBmYWxzZSxcclxuICAgICAgc2hvd01hcFBvcHVwOiAhIWFncmkuc2V0dGluZ3M/LnNob3dNYXBQb3B1cCxcclxuICAgICAgYWxsRmllbGRzOiBbXSxcclxuICAgICAgZmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSxcclxuICAgICAgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0aWFsaXplRGF0YVNvdXJjZXMoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXY6IFJlYWRvbmx5PEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4+KTogdm9pZCB7XHJcbiAgICBpZiAocHJldi51c2VEYXRhU291cmNlcyAhPT0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVEYXRhU291cmNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFudXBEYXRhU291cmNlcygpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvUGxhaW5BZ3JpKHZhbHVlOiB1bmtub3duKTogQWdyaVBvbHlnb25Db25maWcge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHt9O1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUgYXMgYW55KS5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gKHZhbHVlIGFzIGFueSkuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLih2YWx1ZSBhcyBBZ3JpUG9seWdvbkNvbmZpZykgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWdyaUNvbmZpZygpOiBBZ3JpUG9seWdvbkNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy50b1BsYWluQWdyaSh0aGlzLnByb3BzLmNvbmZpZz8uYWdyaVBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnN1cmVEYXNoYm9hcmRDb25maWcoKTogSU1Db25maWcge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wcm9wcy5jb25maWcgPz9cclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBlbmFibGVNaW5NYXhDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZUNvbG9yUmVuZGVyZXJDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZVJlZ2lvbkZpbHRlckNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlTG9nb3V0Q29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Rpb25QZXJjZW50YWdlOiAxMCxcclxuICAgICAgICBwb2x5Z29uSWRGaWVsZDogXCJHbG9iYWxJRFwiLFxyXG4gICAgICAgIHJpZ2h0UGFuZWxXaWR0aFBlcmNlbnQ6IDQwLFxyXG4gICAgICAgIGNoYXJ0VHlwZTogXCJiYXJcIixcclxuICAgICAgICBhZ3JpUG9seWdvbjoge1xyXG4gICAgICAgICAgZmllbGRzVG9TaG93OiBbXSxcclxuICAgICAgICAgIHRpdGxlRmllbGQ6IFwiXCIsXHJcbiAgICAgICAgICBsYWJlbHM6IHt9LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgem9vbVRvU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93TWFwUG9wdXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93QXR0YWNobWVudHM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2hhcnRFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoYXJ0VHlwZTogXCJiYXJcIixcclxuICAgICAgICAgIGNoYXJ0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICBjaGFydEZpZWxkczogW10sXHJcbiAgICAgICAgICBjaGFydENvbG9yOiBcIiMzYjgyZjZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQWdyaUNvbmZpZyA9IChwYXRjaDogUGFydGlhbDxBZ3JpUG9seWdvbkNvbmZpZz4pID0+IHtcclxuICAgIGNvbnN0IGNmZyA9IHRoaXMuZW5zdXJlRGFzaGJvYXJkQ29uZmlnKCk7XHJcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMuZ2V0QWdyaUNvbmZpZygpLCAuLi5wYXRjaCB9O1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBjZmcuc2V0KFwiYWdyaVBvbHlnb25cIiwgbWVyZ2VkKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZHNEcm9wZG93blJlZi5jdXJyZW50ICYmXHJcbiAgICAgICF0aGlzLmZpZWxkc0Ryb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jaGFydEZpZWxkc0Ryb3Bkb3duUmVmLmN1cnJlbnQgJiZcclxuICAgICAgIXRoaXMuY2hhcnRGaWVsZHNEcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0RmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQXR0YWNobWVudHNUb2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSAhIWU/LnRhcmdldD8uY2hlY2tlZDtcclxuICAgIGNvbnN0IGFncmkgPSB0aGlzLmdldEFncmlDb25maWcoKTtcclxuICAgIHRoaXMudXBkYXRlQWdyaUNvbmZpZyh7XHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgLi4uKGFncmkuc2V0dGluZ3MgfHwge30pLFxyXG4gICAgICAgIHNob3dBdHRhY2htZW50czogdmFsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplRGF0YVNvdXJjZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8ubGVuZ3RoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlRGF0YVNvdXJjZXMoXHJcbiAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5hc011dGFibGUoKSBhcyBJTVVzZURhdGFTb3VyY2VbXSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkc3M6IG51bGwsIGFsbEZpZWxkczogW10gfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjbGVhbnVwRGF0YVNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1ZHMpID0+IHtcclxuICAgICAgaWYgKHVkcz8uZGF0YVNvdXJjZUlkKSB0aGlzLmRzTWdyLmRlc3Ryb3lEYXRhU291cmNlKHVkcy5kYXRhU291cmNlSWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVEYXRhU291cmNlcyA9IGFzeW5jICh1c2VMaXN0OiBJTVVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgY29uc3QgZHNBcnI6IERhdGFTb3VyY2VbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB1ZHMgb2YgdXNlTGlzdCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy5kc01nci5jcmVhdGVEYXRhU291cmNlQnlVc2VEYXRhU291cmNlKHVkcyk7XHJcbiAgICAgICAgaWYgKGRzKSBkc0Fyci5wdXNoKGRzKTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgLyogaWdub3JlICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkc3M6IGRzQXJyIH0sICgpID0+IHRoaXMuZXh0cmFjdEZpZWxkc0Zyb21EcygpKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGV4dHJhY3RGaWVsZHNGcm9tRHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkc3MgPSB0aGlzLnN0YXRlLmRzcztcclxuICAgIGlmICghZHNzIHx8IGRzcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbEZpZWxkczogW10gfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRzID0gZHNzWzBdIGFzIGFueTtcclxuICAgIGNvbnN0IHNjaGVtYSA9IGRzPy5nZXRTY2hlbWE/LigpO1xyXG4gICAgY29uc3QgZmllbGRzT2JqID0gc2NoZW1hPy5maWVsZHMgfHwge307XHJcbiAgICBjb25zdCBmaWVsZHM6IEZpZWxkSW5mb1tdID0gT2JqZWN0LmtleXMoZmllbGRzT2JqKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gZmllbGRzT2JqW2tleV07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogZj8ubmFtZSB8fCBmPy5qaW11TmFtZSB8fCBrZXksXHJcbiAgICAgICAgYWxpYXM6IGY/LmFsaWFzIHx8IGY/LmRpc3BsYXlOYW1lIHx8IGY/Lm5hbWUgfHwga2V5LFxyXG4gICAgICAgIHR5cGU6IGY/LnR5cGUgfHwgZj8uZXNyaVR5cGUgfHwgXCJ1bmtub3duXCIsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxGaWVsZHM6IGZpZWxkcyB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEFsbERzSWRzKCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGxpc3QgPVxyXG4gICAgICAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlPy4oKSBhcyBJTVVzZURhdGFTb3VyY2VbXSkgfHwgW107XHJcbiAgICByZXR1cm4gbGlzdC5tYXAoKHgpID0+IHg/LmRhdGFTb3VyY2VJZCkuZmlsdGVyKEJvb2xlYW4pIGFzIHN0cmluZ1tdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVGaWVsZCA9IChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgY29uc3QgY3VycmVudCA9IGFncmkuZmllbGRzVG9TaG93IHx8IFtdO1xyXG4gICAgbGV0IG5leHQ6IHN0cmluZ1tdO1xyXG4gICAgaWYgKGN1cnJlbnQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xyXG4gICAgICBuZXh0ID0gY3VycmVudC5maWx0ZXIoKGYpID0+IGYgIT09IGZpZWxkTmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0ID0gWy4uLmN1cnJlbnQsIGZpZWxkTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxsRHNJZHMgPSB0aGlzLmdldEFsbERzSWRzKCk7XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSB0aGlzLnN0YXRlLmFsbEZpZWxkcztcclxuICAgIGNvbnN0IHBpY2tlZCA9IGFsbEZpZWxkcy5maWx0ZXIoKGYpID0+IG5leHQuaW5jbHVkZXMoZi5uYW1lKSk7XHJcbiAgICBjb25zdCBpbUFyciA9IEltbXV0YWJsZShwaWNrZWQpIGFzIGFueTtcclxuICAgIGxldCBuZXh0TWFwOiBhbnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzTWFwIHx8IEltbXV0YWJsZSh7fSk7XHJcbiAgICBmb3IgKGNvbnN0IGRzSWQgb2YgYWxsRHNJZHMpIHtcclxuICAgICAgbmV4dE1hcCA9IG5leHRNYXAuc2V0KGRzSWQsIGltQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWVsZHNNYXA6IG5leHRNYXAgYXMgRmllbGRzTWFwIH0pO1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHtcclxuICAgICAgZmllbGRzVG9TaG93OiBuZXh0LFxyXG4gICAgICBzZWxlY3RlZEZpZWxkc01hcDogbmV4dE1hcCBhcyBGaWVsZHNNYXAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRvZ2dsZUNoYXJ0RmllbGQgPSAoZmllbGROYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGFncmkgPSB0aGlzLmdldEFncmlDb25maWcoKTtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBhZ3JpLmNoYXJ0RmllbGRzIHx8IFtdO1xyXG4gICAgbGV0IG5leHQ6IHN0cmluZ1tdO1xyXG4gICAgaWYgKGN1cnJlbnQuaW5jbHVkZXMoZmllbGROYW1lKSkge1xyXG4gICAgICBuZXh0ID0gY3VycmVudC5maWx0ZXIoKGYpID0+IGYgIT09IGZpZWxkTmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0ID0gWy4uLmN1cnJlbnQsIGZpZWxkTmFtZV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoeyBjaGFydEZpZWxkczogbmV4dCB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2hhcnRFbmFibGVkVG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHsgY2hhcnRFbmFibGVkOiAhIWU/LnRhcmdldD8uY2hlY2tlZCB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2hhcnRUeXBlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHsgY2hhcnRUeXBlOiBlPy50YXJnZXQ/LnZhbHVlIGFzIFwiYmFyXCIgfCBcImxpbmVcIiB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2hhcnRUaXRsZUNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHsgY2hhcnRUaXRsZTogdmFsIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DaGFydENvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMudXBkYXRlQWdyaUNvbmZpZyh7IGNoYXJ0Q29sb3I6IGNvbG9yIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25ab29tVG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gISFlPy50YXJnZXQ/LmNoZWNrZWQ7XHJcbiAgICBjb25zdCBhZ3JpID0gdGhpcy5nZXRBZ3JpQ29uZmlnKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgem9vbVRvU2VsZWN0aW9uOiB2YWwgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoe1xyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIC4uLihhZ3JpLnNldHRpbmdzIHx8IHt9KSxcclxuICAgICAgICB6b29tVG9TZWxlY3Rpb246IHZhbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25Qb3B1cFRvZ2dsZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9ICEhZT8udGFyZ2V0Py5jaGVja2VkO1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNYXBQb3B1cDogdmFsIH0pO1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHtcclxuICAgICAgc2V0dGluZ3M6IHsgLi4uKGFncmkuc2V0dGluZ3MgfHwge30pLCBzaG93TWFwUG9wdXA6IHZhbCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJNdWx0aVNlbGVjdCA9IChcclxuICAgIHNlbGVjdGVkSXRlbXM6IHN0cmluZ1tdLFxyXG4gICAgb25Ub2dnbGU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBpc09wZW46IGJvb2xlYW4sXHJcbiAgICBvblRvZ2dsZU9wZW46ICgpID0+IHZvaWQsXHJcbiAgICBkcm9wZG93blJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PixcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFsbEZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzID0gc2VsZWN0ZWRJdGVtc1xyXG4gICAgICAubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZiA9IGFsbEZpZWxkcy5maW5kKChmZikgPT4gZmYubmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGY/LmFsaWFzIHx8IG5hbWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiLCBcIik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9e2Ryb3Bkb3duUmVmfSBjbGFzc05hbWU9XCJldmFwby1wb2x5Z29uLW11bHRpc2VsZWN0XCIgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJldmFwby1wb2x5Z29uLW11bHRpc2VsZWN0LXRyaWdnZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17b25Ub2dnbGVPcGVufVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogXCI2cHggMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjA2KVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwID8gXCIjZTlmOGZmXCIgOiBcIiM5Y2M3ZGRcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxyXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gYCR7c2VsZWN0ZWRJdGVtcy5sZW5ndGh9IHRhbmxhbmdhbjogJHtzZWxlY3RlZExhYmVsc31gXHJcbiAgICAgICAgICAgICAgOiBwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogOCxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBpc09wZW4gPyBcInJvdGF0ZSgxODBkZWcpXCIgOiBcInJvdGF0ZSgwZGVnKVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg4pa8XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJldmFwby1wb2x5Z29uLW11bHRpc2VsZWN0LW1lbnVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgdG9wOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyMTIxMjFcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIyMCxcclxuICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC40KVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FsbEZpZWxkcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY29sb3I6IFwiIzljYzdkZFwiLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNYXlkb25sYXIgdG9waWxtYWRpXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthbGxGaWVsZHMubWFwKChmKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoZi5uYW1lKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2YubmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Ub2dnbGUoZi5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogOCxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNilcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSgwLDE3NCwyMzksMC4xNSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kIDAuMTVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNlOWY4ZmZcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiMnB4IHNvbGlkICMwMGFlZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXNTZWxlY3RlZCA/IFwiIzAwYWVlZlwiIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKck1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZmxleDogMSB9fT57Zi5hbGlhc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2YmEzYzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmLnR5cGUgPT09IFwiZXNyaUZpZWxkVHlwZVN0cmluZ1wiIHx8IGYudHlwZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIkFCQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGYudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlRG91YmxlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmLnR5cGUgPT09IFwiZXNyaUZpZWxkVHlwZVNpbmdsZVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZi50eXBlID09PSBcImVzcmlGaWVsZFR5cGVJbnRlZ2VyXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmLnR5cGUgPT09IFwiZXNyaUZpZWxkVHlwZVNtYWxsSW50ZWdlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZi50eXBlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGYudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlRGF0ZVwiIHx8IGYudHlwZSA9PT0gXCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi8J+ThVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmLnR5cGUgPT09IFwiZXNyaUZpZWxkVHlwZU9JRFwiIHx8IGYudHlwZSA9PT0gXCJvaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9JRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi4oCUXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhZ3JpID0gdGhpcy5nZXRBZ3JpQ29uZmlnKCk7XHJcbiAgICBjb25zdCBkc0Nvbm5lY3RlZCA9ICEhKHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApO1xyXG4gICAgY29uc3QgZmllbGRzVG9TaG93ID0gYWdyaS5maWVsZHNUb1Nob3cgfHwgW107XHJcbiAgICBjb25zdCBjaGFydEVuYWJsZWQgPSAhIWFncmkuY2hhcnRFbmFibGVkO1xyXG4gICAgY29uc3QgY2hhcnRUeXBlID0gYWdyaS5jaGFydFR5cGUgfHwgXCJiYXJcIjtcclxuICAgIGNvbnN0IGNoYXJ0VGl0bGUgPSBhZ3JpLmNoYXJ0VGl0bGUgfHwgXCJcIjtcclxuICAgIGNvbnN0IGNoYXJ0RmllbGRzID0gYWdyaS5jaGFydEZpZWxkcyB8fCBbXTtcclxuICAgIGNvbnN0IGNoYXJ0Q29sb3IgPSBhZ3JpLmNoYXJ0Q29sb3IgfHwgXCIjM2I4MmY2XCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgcGFkZGluZ1RvcDogMTYsXHJcbiAgICAgICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMilcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgNnB4XCIgfX0+UG9seWdvbiBQb3B1cDwvaDQ+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAxNHB4XCIsIGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzViNmI3YVwiIH19PlxyXG4gICAgICAgICAgWGFyaXRhIHZhIEZlYXR1cmUgbGF5ZXIgc296bGFtYWxhcmkgeXVxb3JpZGFnaSB1bXVtaXkgYm8mYXBvcztsaW1kYW5cclxuICAgICAgICAgIGZveWRhbGFuYWRpLiBQb2xpZ29uIGJvc2lsZ2FuZGEgY2hpcWFkaWdhbiBwb3B1cCB1Y2h1biBxdXlpZGFnaVxyXG4gICAgICAgICAgc296bGFtYWxhcm5pIHRhbmxhbmcuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICB7ZHNDb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgOHB4XCIgfX0+RmllbGRzIHRvIERpc3BsYXk8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDhweFwiLCBjb2xvcjogXCIjNjY2XCIsIGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgICAgICBQb2x5Z29uIGJvc2lsZ2FuZGEga28mYXBvcztyc2F0aWxhZGlnYW4gYXRyaWJ1dGxhcm5pIHRhbmxhbmcuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyTXVsdGlTZWxlY3QoXHJcbiAgICAgICAgICAgICAgZmllbGRzVG9TaG93LFxyXG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlRmllbGQsXHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWVsZHNEcm9wZG93bk9wZW4sXHJcbiAgICAgICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkc0Ryb3Bkb3duT3BlbjogIXMuZmllbGRzRHJvcGRvd25PcGVuLFxyXG4gICAgICAgICAgICAgICAgICBjaGFydEZpZWxkc0Ryb3Bkb3duT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgdGhpcy5maWVsZHNEcm9wZG93blJlZixcclxuICAgICAgICAgICAgICBcIk1heWRvbmxhcm5pIHRhbmxhbmcuLi5cIixcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ZHNDb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEyLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjAyKVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogY2hhcnRFbmFibGVkID8gMTQgOiAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiAwIH19PvCfk4ogQ2hhcnQ8L2g0PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoYXJ0RW5hYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhcnRFbmFibGVkVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2NoYXJ0RW5hYmxlZCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGdhcDogMTQgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzViNmI3YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaGFydCB0dXJpXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFydFR5cGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYmFyXCI+8J+TiiBCYXIgQ2hhcnQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibGluZVwiPvCfk4ggTGluZSBDaGFydDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNWI2YjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXJ0IHNhcmxhdmhhc2lcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGFydCBub21pbmkgeW96aW5nLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhcnRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFydFRpdGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNWI2YjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXJ0IG1heWRvbmxhcmlcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTXVsdGlTZWxlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaGFydEZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhcnRGaWVsZHNEcm9wZG93bk9wZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0RmllbGRzRHJvcGRvd25PcGVuOiAhcy5jaGFydEZpZWxkc0Ryb3Bkb3duT3BlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RmllbGRzRHJvcGRvd25SZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDaGFydCB1Y2h1biBtYXlkb25sYXJuaSB0YW5sYW5nLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzViNmI3YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaGFydCByYW5naVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2hhcnRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhcnRDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzViNmI3YVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NoYXJ0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCA4cHhcIiB9fT5CZWhhdmlvcjwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBnYXA6IDEwIH19PlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnpvb21Ub1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uWm9vbVRvZ2dsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlpvb20gdG8gc2VsZWN0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNob3dNYXBQb3B1cH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUG9wdXBUb2dnbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5BbHNvIG9wZW4gbWFwIHBvcHVwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogOCB9fT5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXthZ3JpLnNldHRpbmdzPy5zaG93QXR0YWNobWVudHMgIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BdHRhY2htZW50c1RvZ2dsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkluY2x1ZGUgYXR0YWNobWVudHMgKFBob3RvcyAmYW1wOyBGaWxlcyk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xuICBEYXRhU291cmNlVHlwZXMsXG4gIEltbXV0YWJsZSxcbiAgUmVhY3QsXG4gIHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzLFxufSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExhYmVsLCBOdW1lcmljSW5wdXQsIE9wdGlvbiwgU2VsZWN0IH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgQWdyaVBvbHlnb25TZXR0aW5nUGFuZWwgZnJvbSBcIi4vYWdyaS1wb2x5Z29uLXNldHRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz5cbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHN1cHBvcnRlZFR5cGVzID0gSW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSk7XG5cbiAgcHJpdmF0ZSBlbnN1cmVDb25maWcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnID8/XG4gICAgICBJbW11dGFibGUoe1xuICAgICAgICBlbmFibGVNaW5NYXhDb250cm9sOiB0cnVlLFxuICAgICAgICBlbmFibGVDb2xvclJlbmRlcmVyQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgZW5hYmxlUmVnaW9uRmlsdGVyQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgZW5hYmxlTG9nb3V0Q29udHJvbDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0aW9uUGVyY2VudGFnZTogMTAsXG4gICAgICAgIHBvbHlnb25JZEZpZWxkOiBcIkdsb2JhbElEXCIsXG4gICAgICAgIHJpZ2h0UGFuZWxXaWR0aFBlcmNlbnQ6IDQwLFxuICAgICAgICBjaGFydFR5cGU6IFwiYmFyXCIsXG4gICAgICAgIGFncmlQb2x5Z29uOiB7XG4gICAgICAgICAgZmllbGRzVG9TaG93OiBbXSxcbiAgICAgICAgICB0aXRsZUZpZWxkOiBcIlwiLFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHpvb21Ub1NlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dNYXBQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBzaG93QXR0YWNobWVudHM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFydEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGNoYXJ0VHlwZTogXCJiYXJcIixcbiAgICAgICAgICBjaGFydFRpdGxlOiBcIlwiLFxuICAgICAgICAgIGNoYXJ0RmllbGRzOiBbXSxcbiAgICAgICAgICBjaGFydENvbG9yOiBcIiMzYjgyZjZcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29uZmlnKGtleToga2V5b2YgSU1Db25maWcsIHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMuZW5zdXJlQ29uZmlnKCkuc2V0KGtleSwgdmFsdWUpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BsYWluQXJyYXkodmFsdWU6IHVua25vd24pOiB1bmtub3duW10ge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICBpZiAodHlwZW9mICh2YWx1ZSBhcyBhbnkpLmFzTXV0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gKHZhbHVlIGFzIGFueSkuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFsdWUgYXMgYW55KS50b0FycmF5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiAodmFsdWUgYXMgYW55KS50b0FycmF5KCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHMsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IHVua25vd24pOiB2b2lkID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzOiB0aGlzLnRvUGxhaW5BcnJheSh1c2VEYXRhU291cmNlcyksXG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvbkNoZWNrYm94Q2hhbmdlID1cbiAgICAoa2V5OiBrZXlvZiBJTUNvbmZpZykgPT5cbiAgICAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDb25maWcoa2V5LCAhIWV2dC50YXJnZXQ/LmNoZWNrZWQpO1xuICAgIH07XG5cbiAgcHJpdmF0ZSBvbldpZHRoQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzYWZlVmFsdWUgPSBNYXRoLm1pbig4MCwgTWF0aC5tYXgoMzIsIE51bWJlcih2YWx1ZSkgfHwgNDApKTtcbiAgICB0aGlzLnVwZGF0ZUNvbmZpZyhcInJpZ2h0UGFuZWxXaWR0aFBlcmNlbnRcIiwgc2FmZVZhbHVlKTtcbiAgfTtcblxuICBwcml2YXRlIG9uQ2hhcnRUeXBlQ2hhbmdlID0gKFxuICAgIGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+LFxuICApOiB2b2lkID0+IHtcbiAgICB0aGlzLnVwZGF0ZUNvbmZpZyhcImNoYXJ0VHlwZVwiLCBldnQudGFyZ2V0Py52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNmZyA9IHRoaXMuZW5zdXJlQ29uZmlnKCk7XG4gICAgY29uc3QgY2hhcnRUeXBlID0gY2ZnLmNoYXJ0VHlwZSB8fCBcImJhclwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTYgfX0+XG4gICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PkV2YXBvRGFzaGJvYXJkVjMwPC9oND5cbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNCwgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjNWI2YjdhXCIgfX0+XG4gICAgICAgICAgU2VsZWN0IHRoZSBzYW1lIG1hcCBhbmQgZmVhdHVyZSBsYXllcnMgdXNlZCBieSBMb2NhbGl6YXRpb25XaWRnZXRWMjAuXG4gICAgICAgICAgVGhlIGRhc2hib2FyZCByZXVzZXMgRXZhcG9JbmRpY2F0b3JzVjMwLCBFdmFwb0NvbWJpbmVkVjMwLFxuICAgICAgICAgIEV2YXBvV2F0ZXJDYW5hbFYzMCwgRXZhcG9Dcm9wVjIsIGFuZCBBZ3JpUG9seWdvbjQgcG9wdXAgaW5zaWRlIG9uZVxuICAgICAgICAgIHJlc3BvbnNpdmUgd2lkZ2V0LlxuICAgICAgICAgIExpbmsgYSBNYXAgd2lkZ2V0IGJlbG93IGFuZCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgc25hcCB0byB0aGUgcmVzZXJ2ZWRcbiAgICAgICAgICBsZWZ0IG1hcCBhcmVhLiBUaGUgY3JvcCBiYXIgaXMgZW1iZWRkZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgbWFwIHNsb3QuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiB9fT5NYXAgd2lkZ2V0PC9kaXY+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIERhdGEgc291cmNlIChGZWF0dXJlIGxheWVyKVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICB0eXBlcz17dGhpcy5zdXBwb3J0ZWRUeXBlc31cbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoXG4gICAgICAgICAgICAgIHRoaXMudG9QbGFpbkFycmF5KHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgaGlkZURhdGFWaWV3XG4gICAgICAgICAgICBpc011bHRpcGxlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIFJpZ2h0IHBhbmVsIHdpZHRoICglKVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgbWluPXszMn1cbiAgICAgICAgICAgIG1heD17ODB9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgdmFsdWU9e2NmZy5yaWdodFBhbmVsV2lkdGhQZXJjZW50IHx8IDQwfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5vbldpZHRoQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICBDb21iaW5lZCBjaGFydCB0eXBlXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8U2VsZWN0IHNpemU9XCJzbVwiIHZhbHVlPXtjaGFydFR5cGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhcnRUeXBlQ2hhbmdlfT5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJiYXJcIj5CYXI8L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsaW5lXCI+TGluZTwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImFyZWFcIj5BcmVhPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicGllXCI+UGllPC9PcHRpb24+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4IH19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NmZy5lbmFibGVSZWdpb25GaWx0ZXJDb250cm9sICE9PSBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoXCJlbmFibGVSZWdpb25GaWx0ZXJDb250cm9sXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+U2hvdyByZWdpb24gZmlsdGVyPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NmZy5lbmFibGVNaW5NYXhDb250cm9sICE9PSBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoXCJlbmFibGVNaW5NYXhDb250cm9sXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+U2hvdyBNaW4vTWF4PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NmZy5lbmFibGVDb2xvclJlbmRlcmVyQ29udHJvbCAhPT0gZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoZWNrYm94Q2hhbmdlKFwiZW5hYmxlQ29sb3JSZW5kZXJlckNvbnRyb2xcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5TaG93IGNvbG9yIHJlbmRlcmVyPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NmZy5lbmFibGVMb2dvdXRDb250cm9sICE9PSBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoXCJlbmFibGVMb2dvdXRDb250cm9sXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+U2hvdyBsb2dvdXQ8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPEFncmlQb2x5Z29uU2V0dGluZ1BhbmVsIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==