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

/***/ "./your-extensions/widgets/EvapoRegionV2/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx":
/*!******************************************************************************************************!*\
  !*** ./your-extensions/widgets/EvapoRegionV2/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx ***!
  \******************************************************************************************************/
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
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/EvapoRegionV2/EvapoDashboardV30/src/setting/setting.tsx ***!
  \*****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _agri_polygon_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agri-polygon-setting */ "./your-extensions/widgets/EvapoRegionV2/EvapoDashboardV30/src/setting/agri-polygon-setting.tsx");





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
            const safeValue = Math.min(48, Math.max(32, Number(value) || 40));
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
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { min: 32, max: 48, size: "sm", value: cfg.rightPanelWidthPercent || 40, onAcceptValue: this.onWidthChange })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9FdmFwb1JlZ2lvblYyL0V2YXBvRGFzaGJvYXJkVjMwL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbUI7QUFFeUM7QUFDSDtBQXdCMUMsTUFBTSx1QkFBd0IsU0FBUSw0Q0FBSyxDQUFDLGFBRzFEO0lBS0MsWUFBWSxLQUFzQzs7UUFDaEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTGYsVUFBSyxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLDRDQUFLLENBQUMsU0FBUyxFQUFrQixDQUFDO1FBQ3RELDJCQUFzQixHQUFHLDRDQUFLLENBQUMsU0FBUyxFQUFrQixDQUFDO1FBK0VuRCxxQkFBZ0IsR0FBRyxDQUFDLEtBQWlDLEVBQUUsRUFBRTtZQUMvRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN6QyxNQUFNLE1BQU0sbUNBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFLLEtBQUssQ0FBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLHVCQUFrQixHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDN0MsSUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTztnQkFDOUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBYyxDQUFDLEVBQzFELENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUNELElBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU87Z0JBQ25DLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQWMsQ0FBQyxFQUMvRCxDQUFDO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDLENBQUM7UUFFTSx3QkFBbUIsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFOztZQUN2QyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE1BQU0sMENBQUUsT0FBTyxFQUFDO1lBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3BCLFFBQVEsa0NBQ0gsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxLQUN4QixlQUFlLEVBQUUsR0FBRyxHQUNyQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLDBCQUFxQixHQUFHLEdBQVMsRUFBRTs7WUFDekMsSUFBSSxVQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsMENBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQXVCLENBQzNELENBQUM7WUFDSixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNILENBQUMsRUFBQztRQUVNLHVCQUFrQixHQUFHLEdBQUcsRUFBRTs7WUFDaEMsVUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxZQUFZO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRU0sc0JBQWlCLEdBQUcsQ0FBTyxPQUEwQixFQUFFLEVBQUU7WUFDL0QsTUFBTSxLQUFLLEdBQWlCLEVBQUUsQ0FBQztZQUMvQixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUM7b0JBQ0gsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLEVBQUU7d0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFBQyxXQUFNLENBQUM7b0JBQ1AsWUFBWTtnQkFDZCxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQUM7UUFFTSx3QkFBbUIsR0FBRyxHQUFHLEVBQUU7O1lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO1lBQ1QsQ0FBQztZQUNELE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQVEsQ0FBQztZQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsU0FBUyxrREFBSSxDQUFDO1lBQ2pDLE1BQU0sU0FBUyxHQUFHLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEtBQUksRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sTUFBTSxHQUFnQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM3RCxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLEVBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLE1BQUksQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsS0FBSSxHQUFHO29CQUNuQyxLQUFLLEVBQUUsRUFBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLEtBQUssTUFBSSxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsV0FBVyxNQUFJLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLEtBQUksR0FBRztvQkFDbkQsSUFBSSxFQUFFLEVBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLE1BQUksQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFFBQVEsS0FBSSxTQUFTO2lCQUMxQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBUU0sZ0JBQVcsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtZQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7WUFDeEMsSUFBSSxJQUFjLENBQUM7WUFDbkIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUM7WUFDaEQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLEtBQUssR0FBRyxvREFBUyxDQUFDLE1BQU0sQ0FBUSxDQUFDO1lBQ3ZDLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLElBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxPQUFvQixFQUFFLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixpQkFBaUIsRUFBRSxPQUFvQjthQUN4QyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFTSxxQkFBZ0IsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtZQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDdkMsSUFBSSxJQUFjLENBQUM7WUFDbkIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUM7WUFDaEQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFTSx5QkFBb0IsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFOztZQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFFBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxNQUFNLDBDQUFFLE9BQU8sR0FBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO1FBRU0sc0JBQWlCLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxNQUFNLDBDQUFFLEtBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQztRQUVNLHVCQUFrQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRU0sdUJBQWtCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFFTSxpQkFBWSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7O1lBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsTUFBTSwwQ0FBRSxPQUFPLEVBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3BCLFFBQVEsa0NBQ0gsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxLQUN4QixlQUFlLEVBQUUsR0FBRyxHQUNyQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLGtCQUFhLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7WUFDakMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxNQUFNLDBDQUFFLE9BQU8sRUFBQztZQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDcEIsUUFBUSxrQ0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEtBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRTthQUMxRCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFTSxzQkFBaUIsR0FBRyxDQUMxQixhQUF1QixFQUN2QixRQUFnQyxFQUNoQyxNQUFlLEVBQ2YsWUFBd0IsRUFDeEIsV0FBNEMsRUFDNUMsV0FBbUIsRUFDbkIsRUFBRTtZQUNGLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE1BQU0sY0FBYyxHQUFHLGFBQWE7aUJBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNaLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sRUFBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLEtBQUssS0FBSSxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVkLE9BQU8sQ0FDTCxvRUFBSyxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQywyQkFBMkIsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO2dCQUMxRixvRUFDRSxTQUFTLEVBQUMsbUNBQW1DLEVBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLEtBQUssRUFBRTt3QkFDTCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGlDQUFpQzt3QkFDekMsWUFBWSxFQUFFLENBQUM7d0JBQ2YsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLFVBQVUsRUFBRSx3QkFBd0I7d0JBQ3BDLEtBQUssRUFBRSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUN2RCxRQUFRLEVBQUUsRUFBRTt3QkFDWixPQUFPLEVBQUUsTUFBTTt3QkFDZixVQUFVLEVBQUUsUUFBUTt3QkFDcEIsY0FBYyxFQUFFLGVBQWU7d0JBQy9CLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFVBQVUsRUFBRSxNQUFNO3dCQUNsQixLQUFLLEVBQUUsTUFBTTt3QkFDYixTQUFTLEVBQUUsWUFBWTtxQkFDeEI7b0JBRUQscUVBQ0UsS0FBSyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxRQUFROzRCQUNsQixZQUFZLEVBQUUsVUFBVTs0QkFDeEIsVUFBVSxFQUFFLFFBQVE7NEJBQ3BCLElBQUksRUFBRSxDQUFDO3lCQUNSLElBRUEsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUN2QixDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxlQUFlLGNBQWMsRUFBRTt3QkFDeEQsQ0FBQyxDQUFDLFdBQVcsQ0FDVjtvQkFDUCxxRUFDRSxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLENBQUM7NEJBQ2IsVUFBVSxFQUFFLGdCQUFnQjs0QkFDNUIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQWM7NEJBQ3JELFFBQVEsRUFBRSxFQUFFO3lCQUNiLGFBR0ksQ0FDSDtnQkFFTCxNQUFNLElBQUksQ0FDVCxvRUFDRSxTQUFTLEVBQUMsZ0NBQWdDLEVBQzFDLEtBQUssRUFBRTt3QkFDTCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsR0FBRyxFQUFFLE1BQU07d0JBQ1gsSUFBSSxFQUFFLENBQUM7d0JBQ1AsS0FBSyxFQUFFLENBQUM7d0JBQ1IsTUFBTSxFQUFFLElBQUk7d0JBQ1osVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLE1BQU0sRUFBRSxpQ0FBaUM7d0JBQ3pDLFlBQVksRUFBRSxDQUFDO3dCQUNmLFNBQVMsRUFBRSxHQUFHO3dCQUNkLFNBQVMsRUFBRSxNQUFNO3dCQUNqQixTQUFTLEVBQUUsNEJBQTRCO3dCQUN2QyxTQUFTLEVBQUUsQ0FBQztxQkFDYjtvQkFFQSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUN6QixvRUFDRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSwwQkFHMUQsQ0FDUDtvQkFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ25CLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsRCxPQUFPLENBQ0wsb0VBQ0UsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQy9CLEtBQUssRUFBRTtnQ0FDTCxPQUFPLEVBQUUsVUFBVTtnQ0FDbkIsTUFBTSxFQUFFLFNBQVM7Z0NBQ2pCLE9BQU8sRUFBRSxNQUFNO2dDQUNmLFVBQVUsRUFBRSxRQUFRO2dDQUNwQixHQUFHLEVBQUUsQ0FBQztnQ0FDTixZQUFZLEVBQUUsa0NBQWtDO2dDQUNoRCxVQUFVLEVBQUUsVUFBVTtvQ0FDcEIsQ0FBQyxDQUFDLHNCQUFzQjtvQ0FDeEIsQ0FBQyxDQUFDLGFBQWE7Z0NBQ2pCLFVBQVUsRUFBRSxrQkFBa0I7Z0NBQzlCLFFBQVEsRUFBRSxFQUFFO2dDQUNaLEtBQUssRUFBRSxTQUFTOzZCQUNqQjs0QkFFRCxxRUFDRSxLQUFLLEVBQUU7b0NBQ0wsS0FBSyxFQUFFLEVBQUU7b0NBQ1QsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsWUFBWSxFQUFFLENBQUM7b0NBQ2YsTUFBTSxFQUFFLFVBQVU7d0NBQ2hCLENBQUMsQ0FBQyxtQkFBbUI7d0NBQ3JCLENBQUMsQ0FBQyxpQ0FBaUM7b0NBQ3JDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYTtvQ0FDbEQsT0FBTyxFQUFFLE1BQU07b0NBQ2YsVUFBVSxFQUFFLFFBQVE7b0NBQ3BCLGNBQWMsRUFBRSxRQUFRO29DQUN4QixVQUFVLEVBQUUsQ0FBQztpQ0FDZCxJQUVBLFVBQVUsSUFBSSxDQUNiLHFFQUNFLEtBQUssRUFBRTtvQ0FDTCxLQUFLLEVBQUUsTUFBTTtvQ0FDYixRQUFRLEVBQUUsRUFBRTtvQ0FDWixVQUFVLEVBQUUsTUFBTTtpQ0FDbkIsYUFHSSxDQUNSLENBQ0k7NEJBQ1AscUVBQU0sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQVE7NEJBQzFDLHFFQUNFLEtBQUssRUFBRTtvQ0FDTCxRQUFRLEVBQUUsRUFBRTtvQ0FDWixLQUFLLEVBQUUsU0FBUztvQ0FDaEIsYUFBYSxFQUFFLFdBQVc7aUNBQzNCLElBRUEsQ0FBQyxDQUFDLElBQUksS0FBSyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVE7Z0NBQ3RELENBQUMsQ0FBQyxLQUFLO2dDQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHFCQUFxQjtvQ0FDOUIsQ0FBQyxDQUFDLElBQUksS0FBSyxxQkFBcUI7b0NBQ2hDLENBQUMsQ0FBQyxJQUFJLEtBQUssc0JBQXNCO29DQUNqQyxDQUFDLENBQUMsSUFBSSxLQUFLLDJCQUEyQjtvQ0FDdEMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRO29DQUNyQixDQUFDLENBQUMsS0FBSztvQ0FDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07d0NBQ25ELENBQUMsQ0FBQyxJQUFJO3dDQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSzs0Q0FDakQsQ0FBQyxDQUFDLEtBQUs7NENBQ1AsQ0FBQyxDQUFDLEdBQUcsQ0FDUixDQUNILENBQ1AsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FDRSxDQUNQLENBQ0csQ0FDUCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBcFpBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFFBQVEsR0FBRyxvREFBUyxDQUFDLEVBQUUsQ0FBYyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxHQUFHLENBQUMsVUFBSSxDQUFDLGlCQUFpQixtQ0FBSSxRQUFRLENBQWMsQ0FBQztRQUVuRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsR0FBRyxFQUFFLElBQUk7WUFDVCxpQkFBaUIsRUFBRSxRQUFRO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDakMsZUFBZSxFQUFFLFdBQUksQ0FBQyxRQUFRLDBDQUFFLGVBQWUsTUFBSyxLQUFLO1lBQ3pELFlBQVksRUFBRSxDQUFDLENBQUMsV0FBSSxDQUFDLFFBQVEsMENBQUUsWUFBWTtZQUMzQyxTQUFTLEVBQUUsRUFBRTtZQUNiLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsdUJBQXVCLEVBQUUsS0FBSztTQUMvQixDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQStDO1FBQ2hFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxPQUFRLEtBQWEsQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDbkQsT0FBUSxLQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELHlCQUFhLEtBQTJCLEVBQUc7SUFDN0MsQ0FBQztJQUVPLGFBQWE7O1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLHFCQUFxQjs7UUFDM0IsT0FBTyxDQUNMLFVBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxtQ0FDakIsb0RBQVMsQ0FBQztZQUNSLG1CQUFtQixFQUFFLElBQUk7WUFDekIsMEJBQTBCLEVBQUUsSUFBSTtZQUNoQyx5QkFBeUIsRUFBRSxJQUFJO1lBQy9CLG1CQUFtQixFQUFFLElBQUk7WUFDekIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixjQUFjLEVBQUUsVUFBVTtZQUMxQixzQkFBc0IsRUFBRSxFQUFFO1lBQzFCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFO29CQUNSLGVBQWUsRUFBRSxJQUFJO29CQUNyQixZQUFZLEVBQUUsS0FBSztvQkFDbkIsZUFBZSxFQUFFLElBQUk7aUJBQ3RCO2dCQUNELFlBQVksRUFBRSxLQUFLO2dCQUNuQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsVUFBVSxFQUFFLFNBQVM7YUFDdEI7U0FDRixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFzRk8sV0FBVzs7UUFDakIsTUFBTSxJQUFJLEdBQ1IsQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLDBDQUFFLFNBQVMsa0RBQTBCLEtBQUksRUFBRSxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQWEsQ0FBQztJQUN0RSxDQUFDO0lBbVBELE1BQU07O1FBQ0osTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQzdDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3pDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBRWhELE9BQU8sQ0FDTCxvRUFDRSxLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsU0FBUyxFQUFFLDRCQUE0QjthQUN4QztZQUVELG1FQUFJLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsb0JBQW9CO1lBQ3BELGtFQUFHLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRKQUk1RDtZQUVILFdBQVcsSUFBSSxDQUNkLHdFQUFTLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7Z0JBQ2xDLG1FQUFJLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsd0JBQXdCO2dCQUN4RCxrRUFBRyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSwrREFFeEQ7Z0JBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUNyQixZQUFZLEVBQ1osSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDN0IsR0FBRyxFQUFFLENBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEIsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO29CQUN6Qyx1QkFBdUIsRUFBRSxLQUFLO2lCQUMvQixDQUFDLENBQUMsRUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLHdCQUF3QixDQUN6QixDQUNPLENBQ1g7WUFFQSxXQUFXLElBQUksQ0FDZCx3RUFDRSxLQUFLLEVBQUU7b0JBQ0wsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE1BQU0sRUFBRSwyQkFBMkI7b0JBQ25DLFlBQVksRUFBRSxDQUFDO29CQUNmLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9CO2dCQUVELG9FQUNFLEtBQUssRUFBRTt3QkFDTCxPQUFPLEVBQUUsTUFBTTt3QkFDZixVQUFVLEVBQUUsUUFBUTt3QkFDcEIsY0FBYyxFQUFFLGVBQWU7d0JBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEM7b0JBRUQsbUVBQUksS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSx5QkFBZTtvQkFDdkMsMkRBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQUUsWUFBWSxFQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixHQUNuQyxDQUNFO2dCQUVMLFlBQVksSUFBSSxDQUNmLG9FQUNFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO29CQUU1RDt3QkFDRSxzRUFDRSxLQUFLLEVBQUU7Z0NBQ0wsT0FBTyxFQUFFLE9BQU87Z0NBQ2hCLFlBQVksRUFBRSxDQUFDO2dDQUNmLFFBQVEsRUFBRSxFQUFFO2dDQUNaLEtBQUssRUFBRSxTQUFTOzZCQUNqQixpQkFHSzt3QkFDUiwyREFBQywyQ0FBTSxJQUNMLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFFLFNBQVMsRUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDaEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTs0QkFFeEIsMkRBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsS0FBSyw2QkFBc0I7NEJBQ3pDLDJEQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLE1BQU0sOEJBQXVCLENBQ3BDLENBQ0w7b0JBRU47d0JBQ0Usc0VBQ0UsS0FBSyxFQUFFO2dDQUNMLE9BQU8sRUFBRSxPQUFPO2dDQUNoQixZQUFZLEVBQUUsQ0FBQztnQ0FDZixRQUFRLEVBQUUsRUFBRTtnQ0FDWixLQUFLLEVBQUUsU0FBUzs2QkFDakIsdUJBR0s7d0JBQ1IsMkRBQUMsOENBQVMsSUFDUixJQUFJLEVBQUMsSUFBSSxFQUNULFdBQVcsRUFBQyx3QkFBd0IsRUFDcEMsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDeEQsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUN4QixDQUNFO29CQUVOO3dCQUNFLHNFQUNFLEtBQUssRUFBRTtnQ0FDTCxPQUFPLEVBQUUsT0FBTztnQ0FDaEIsWUFBWSxFQUFFLENBQUM7Z0NBQ2YsUUFBUSxFQUFFLEVBQUU7Z0NBQ1osS0FBSyxFQUFFLFNBQVM7NkJBQ2pCLHVCQUdLO3dCQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FDckIsV0FBVyxFQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFDbEMsR0FBRyxFQUFFLENBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDcEIsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCOzRCQUNuRCxrQkFBa0IsRUFBRSxLQUFLO3lCQUMxQixDQUFDLENBQUMsRUFDTCxJQUFJLENBQUMsc0JBQXNCLEVBQzNCLG9DQUFvQyxDQUNyQyxDQUNHO29CQUVOO3dCQUNFLHNFQUNFLEtBQUssRUFBRTtnQ0FDTCxPQUFPLEVBQUUsT0FBTztnQ0FDaEIsWUFBWSxFQUFFLENBQUM7Z0NBQ2YsUUFBUSxFQUFFLEVBQUU7Z0NBQ1osS0FBSyxFQUFFLFNBQVM7NkJBQ2pCLGtCQUdLO3dCQUNSLG9FQUNFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFOzRCQUV4RCwyREFBQyxtRUFBVyxJQUNWLEtBQUssRUFBRSxVQUFVLEVBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEdBQ2pDOzRCQUNGLHFFQUFNLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUM1QyxVQUFVLENBQ04sQ0FDSCxDQUNGLENBQ0YsQ0FDUCxDQUNPLENBQ1g7WUFFRCx3RUFBUyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUNsQyxtRUFBSSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWU7Z0JBQy9DLG9FQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtvQkFDdEMsc0VBQU8sS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7d0JBQzdELDJEQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FDM0I7d0JBQ0YsNkZBQThCLENBQ3hCO29CQUNSLHNFQUFPLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO3dCQUM3RCwyREFBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDaEMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQzVCO3dCQUNGLCtGQUFnQyxDQUMxQjtvQkFDUixzRUFBTyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTt3QkFDN0QsMkRBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQUUsV0FBSSxDQUFDLFFBQVEsMENBQUUsZUFBZSxNQUFLLEtBQUssRUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FDbEM7d0JBQ0YsZ0hBQXFELENBQy9DLENBQ0osQ0FDRSxDQUNOLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7O0FDNW9CRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaEM7QUFDd0Q7QUFDSDtBQUNWO0FBRUQ7QUFFOUMsTUFBTSxPQUFRLFNBQVEsNENBQUssQ0FBQyxhQUUxQztJQUZEOztRQUdtQixtQkFBYyxHQUFHLG9EQUFTLENBQUMsQ0FBQyxzREFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFvRHBFLHdCQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBUSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixlQUFlO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLHVCQUFrQixHQUFHLENBQUMsY0FBdUIsRUFBUSxFQUFFO1lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRU0scUJBQWdCLEdBQ3RCLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQ3hCLENBQUMsR0FBd0MsRUFBUSxFQUFFOztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBRyxDQUFDLE1BQU0sMENBQUUsT0FBTyxFQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBRUksa0JBQWEsR0FBRyxDQUFDLEtBQWEsRUFBUSxFQUFFO1lBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO1FBRU0sc0JBQWlCLEdBQUcsQ0FDMUIsR0FBeUMsRUFDbkMsRUFBRTs7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxTQUFHLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUM7SUFpSUosQ0FBQztJQWhOUyxZQUFZOztRQUNsQixPQUFPLENBQ0wsVUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLG1DQUNqQixvREFBUyxDQUFDO1lBQ1IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QiwwQkFBMEIsRUFBRSxJQUFJO1lBQ2hDLHlCQUF5QixFQUFFLElBQUk7WUFDL0IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixVQUFVLEVBQUUsRUFBRTtnQkFDZCxNQUFNLEVBQUUsRUFBRTtnQkFDVixRQUFRLEVBQUU7b0JBQ1IsZUFBZSxFQUFFLElBQUk7b0JBQ3JCLFlBQVksRUFBRSxLQUFLO29CQUNuQixlQUFlLEVBQUUsSUFBSTtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUUsRUFBRTtnQkFDZCxXQUFXLEVBQUUsRUFBRTtnQkFDZixVQUFVLEVBQUUsU0FBUzthQUN0QjtTQUNGLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFtQixFQUFFLEtBQWM7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN2QyxJQUFJLE9BQVEsS0FBYSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNuRCxPQUFRLEtBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxPQUFRLEtBQWEsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDakQsT0FBUSxLQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQWlDRCxNQUFNO1FBQ0osTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBRXpDLE9BQU8sQ0FDTCxvRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3pCLG1FQUFJLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsd0JBQXdCO1lBQ3ZELGtFQUFHLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDJXQU8xRDtZQUVKLG9FQUFLLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7Z0JBQzlCLG9FQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxpQkFBa0I7Z0JBQ2xFLDJEQUFDLGtGQUFpQixJQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQzNDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEdBQ2xDLENBQ0U7WUFFTixvRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUM5QixvRUFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsa0NBRTFDO2dCQUNOLDJEQUFDLHFGQUFrQixJQUNqQixpQkFBaUIsUUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQzFCLGNBQWMsRUFBRSxvREFBUyxDQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQzdDLEVBQ0QsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN2QixZQUFZLFFBQ1osVUFBVSxTQUNWLENBQ0U7WUFFTixvRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUM5QiwyREFBQywwQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSw0QkFFM0M7Z0JBQ1IsMkRBQUMsaURBQVksSUFDWCxHQUFHLEVBQUUsRUFBRSxFQUNQLEdBQUcsRUFBRSxFQUFFLEVBQ1AsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixJQUFJLEVBQUUsRUFDdkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQ2pDLENBQ0U7WUFFTixvRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUM5QiwyREFBQywwQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSwwQkFFM0M7Z0JBQ1IsMkRBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7b0JBQ2xFLDJEQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLEtBQUssVUFBYTtvQkFDaEMsMkRBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsTUFBTSxXQUFjO29CQUNsQywyREFBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxNQUFNLFdBQWM7b0JBQ2xDLDJEQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLEtBQUssVUFBYSxDQUN6QixDQUNMO1lBRU4sc0VBQU8sS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7Z0JBQzdELHNFQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyx5QkFBeUIsS0FBSyxLQUFLLEVBQ2hELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsR0FDNUQ7Z0JBQ0YsOEZBQStCLENBQ3pCO1lBRVIsc0VBQ0UsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxRQUFRO29CQUNwQixHQUFHLEVBQUUsQ0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQztpQkFDYjtnQkFFRCxzRUFDRSxJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsbUJBQW1CLEtBQUssS0FBSyxFQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEdBQ3REO2dCQUNGLHdGQUF5QixDQUNuQjtZQUVSLHNFQUNFLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsUUFBUTtvQkFDcEIsR0FBRyxFQUFFLENBQUM7b0JBQ04sU0FBUyxFQUFFLENBQUM7aUJBQ2I7Z0JBRUQsc0VBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLDBCQUEwQixLQUFLLEtBQUssRUFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxHQUM3RDtnQkFDRiwrRkFBZ0MsQ0FDMUI7WUFFUixzRUFDRSxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLE1BQU07b0JBQ2YsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLEdBQUcsRUFBRSxDQUFDO29CQUNOLFNBQVMsRUFBRSxDQUFDO2lCQUNiO2dCQUVELHNFQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLEVBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsR0FDdEQ7Z0JBQ0YsdUZBQXdCLENBQ2xCO1lBRVIsMkRBQUMsNkRBQXVCLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FDdkMsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRXZhcG9SZWdpb25WMi9FdmFwb0Rhc2hib2FyZFYzMC9zcmMvc2V0dGluZy9hZ3JpLXBvbHlnb24tc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRXZhcG9SZWdpb25WMi9FdmFwb0Rhc2hib2FyZFYzMC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXHJcbiAgSU1GaWVsZFNjaGVtYSxcclxuICBJTVVzZURhdGFTb3VyY2UsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIEltbXV0YWJsZUFycmF5LFxyXG4gIEltbXV0YWJsZU9iamVjdCxcclxuICBSZWFjdCxcclxufSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7IE9wdGlvbiwgU2VsZWN0LCBTd2l0Y2gsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCI7XHJcbmltcG9ydCB7IHR5cGUgQWdyaVBvbHlnb25Db25maWcsIHR5cGUgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG50eXBlIEZpZWxkc01hcCA9IEltbXV0YWJsZU9iamVjdDx7XHJcbiAgW2RzSWQ6IHN0cmluZ106IEltbXV0YWJsZUFycmF5PElNRmllbGRTY2hlbWE+O1xyXG59PjtcclxuXHJcbnR5cGUgRmllbGRJbmZvID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhbGlhczogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgZHNzOiBEYXRhU291cmNlW10gfCBudWxsO1xyXG4gIHNlbGVjdGVkRmllbGRzTWFwOiBGaWVsZHNNYXA7XHJcbiAgdGl0bGVGaWVsZDogc3RyaW5nO1xyXG4gIHpvb21Ub1NlbGVjdGlvbjogYm9vbGVhbjtcclxuICBzaG93TWFwUG9wdXA6IGJvb2xlYW47XHJcbiAgYWxsRmllbGRzOiBGaWVsZEluZm9bXTtcclxuICBmaWVsZHNEcm9wZG93bk9wZW46IGJvb2xlYW47XHJcbiAgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmlQb2x5Z29uU2V0dGluZ1BhbmVsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxyXG4gIFN0YXRlXHJcbj4ge1xyXG4gIGRzTWdyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICBmaWVsZHNEcm9wZG93blJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBjaGFydEZpZWxkc0Ryb3Bkb3duUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgY29uc3QgZW1wdHlNYXAgPSBJbW11dGFibGUoe30pIGFzIEZpZWxkc01hcDtcclxuICAgIGNvbnN0IGluY29taW5nID0gKGFncmkuc2VsZWN0ZWRGaWVsZHNNYXAgPz8gZW1wdHlNYXApIGFzIEZpZWxkc01hcDtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkc3M6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkRmllbGRzTWFwOiBpbmNvbWluZyxcclxuICAgICAgdGl0bGVGaWVsZDogYWdyaS50aXRsZUZpZWxkIHx8IFwiXCIsXHJcbiAgICAgIHpvb21Ub1NlbGVjdGlvbjogYWdyaS5zZXR0aW5ncz8uem9vbVRvU2VsZWN0aW9uICE9PSBmYWxzZSxcclxuICAgICAgc2hvd01hcFBvcHVwOiAhIWFncmkuc2V0dGluZ3M/LnNob3dNYXBQb3B1cCxcclxuICAgICAgYWxsRmllbGRzOiBbXSxcclxuICAgICAgZmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSxcclxuICAgICAgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0aWFsaXplRGF0YVNvdXJjZXMoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXY6IFJlYWRvbmx5PEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4+KTogdm9pZCB7XHJcbiAgICBpZiAocHJldi51c2VEYXRhU291cmNlcyAhPT0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVEYXRhU291cmNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFudXBEYXRhU291cmNlcygpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvUGxhaW5BZ3JpKHZhbHVlOiB1bmtub3duKTogQWdyaVBvbHlnb25Db25maWcge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHt9O1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUgYXMgYW55KS5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gKHZhbHVlIGFzIGFueSkuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLih2YWx1ZSBhcyBBZ3JpUG9seWdvbkNvbmZpZykgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWdyaUNvbmZpZygpOiBBZ3JpUG9seWdvbkNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy50b1BsYWluQWdyaSh0aGlzLnByb3BzLmNvbmZpZz8uYWdyaVBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbnN1cmVEYXNoYm9hcmRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZyA/P1xyXG4gICAgICBJbW11dGFibGUoe1xyXG4gICAgICAgIGVuYWJsZU1pbk1heENvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlQ29sb3JSZW5kZXJlckNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlUmVnaW9uRmlsdGVyQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBlbmFibGVMb2dvdXRDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdGlvblBlcmNlbnRhZ2U6IDEwLFxyXG4gICAgICAgIHBvbHlnb25JZEZpZWxkOiBcIkdsb2JhbElEXCIsXHJcbiAgICAgICAgcmlnaHRQYW5lbFdpZHRoUGVyY2VudDogNDAsXHJcbiAgICAgICAgY2hhcnRUeXBlOiBcImJhclwiLFxyXG4gICAgICAgIGFncmlQb2x5Z29uOiB7XHJcbiAgICAgICAgICBmaWVsZHNUb1Nob3c6IFtdLFxyXG4gICAgICAgICAgdGl0bGVGaWVsZDogXCJcIixcclxuICAgICAgICAgIGxhYmVsczoge30sXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICB6b29tVG9TZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dNYXBQb3B1cDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dBdHRhY2htZW50czogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjaGFydEVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hhcnRUeXBlOiBcImJhclwiLFxyXG4gICAgICAgICAgY2hhcnRUaXRsZTogXCJcIixcclxuICAgICAgICAgIGNoYXJ0RmllbGRzOiBbXSxcclxuICAgICAgICAgIGNoYXJ0Q29sb3I6IFwiIzNiODJmNlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVBZ3JpQ29uZmlnID0gKHBhdGNoOiBQYXJ0aWFsPEFncmlQb2x5Z29uQ29uZmlnPikgPT4ge1xyXG4gICAgY29uc3QgY2ZnID0gdGhpcy5lbnN1cmVEYXNoYm9hcmRDb25maWcoKTtcclxuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcy5nZXRBZ3JpQ29uZmlnKCksIC4uLnBhdGNoIH07XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IGNmZy5zZXQoXCJhZ3JpUG9seWdvblwiLCBtZXJnZWQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGlja091dHNpZGUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkc0Ryb3Bkb3duUmVmLmN1cnJlbnQgJiZcclxuICAgICAgIXRoaXMuZmllbGRzRHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWVsZHNEcm9wZG93bk9wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNoYXJ0RmllbGRzRHJvcGRvd25SZWYuY3VycmVudCAmJlxyXG4gICAgICAhdGhpcy5jaGFydEZpZWxkc0Ryb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25BdHRhY2htZW50c1RvZ2dsZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHZhbCA9ICEhZT8udGFyZ2V0Py5jaGVja2VkO1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHtcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAuLi4oYWdyaS5zZXR0aW5ncyB8fCB7fSksXHJcbiAgICAgICAgc2hvd0F0dGFjaG1lbnRzOiB2YWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVEYXRhU291cmNlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5sZW5ndGgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVEYXRhU291cmNlcyhcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmFzTXV0YWJsZSgpIGFzIElNVXNlRGF0YVNvdXJjZVtdLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRzczogbnVsbCwgYWxsRmllbGRzOiBbXSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNsZWFudXBEYXRhU291cmNlcyA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVkcykgPT4ge1xyXG4gICAgICBpZiAodWRzPy5kYXRhU291cmNlSWQpIHRoaXMuZHNNZ3IuZGVzdHJveURhdGFTb3VyY2UodWRzLmRhdGFTb3VyY2VJZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNyZWF0ZURhdGFTb3VyY2VzID0gYXN5bmMgKHVzZUxpc3Q6IElNVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBjb25zdCBkc0FycjogRGF0YVNvdXJjZVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHVkcyBvZiB1c2VMaXN0KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRzTWdyLmNyZWF0ZURhdGFTb3VyY2VCeVVzZURhdGFTb3VyY2UodWRzKTtcclxuICAgICAgICBpZiAoZHMpIGRzQXJyLnB1c2goZHMpO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICAvKiBpZ25vcmUgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRzczogZHNBcnIgfSwgKCkgPT4gdGhpcy5leHRyYWN0RmllbGRzRnJvbURzKCkpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdEZpZWxkc0Zyb21EcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRzcyA9IHRoaXMuc3RhdGUuZHNzO1xyXG4gICAgaWYgKCFkc3MgfHwgZHNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWxsRmllbGRzOiBbXSB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZHMgPSBkc3NbMF0gYXMgYW55O1xyXG4gICAgY29uc3Qgc2NoZW1hID0gZHM/LmdldFNjaGVtYT8uKCk7XHJcbiAgICBjb25zdCBmaWVsZHNPYmogPSBzY2hlbWE/LmZpZWxkcyB8fCB7fTtcclxuICAgIGNvbnN0IGZpZWxkczogRmllbGRJbmZvW10gPSBPYmplY3Qua2V5cyhmaWVsZHNPYmopLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGYgPSBmaWVsZHNPYmpba2V5XTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBmPy5uYW1lIHx8IGY/LmppbXVOYW1lIHx8IGtleSxcclxuICAgICAgICBhbGlhczogZj8uYWxpYXMgfHwgZj8uZGlzcGxheU5hbWUgfHwgZj8ubmFtZSB8fCBrZXksXHJcbiAgICAgICAgdHlwZTogZj8udHlwZSB8fCBmPy5lc3JpVHlwZSB8fCBcInVua25vd25cIixcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFsbEZpZWxkczogZmllbGRzIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0QWxsRHNJZHMoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgbGlzdCA9XHJcbiAgICAgICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5hc011dGFibGU/LigpIGFzIElNVXNlRGF0YVNvdXJjZVtdKSB8fCBbXTtcclxuICAgIHJldHVybiBsaXN0Lm1hcCgoeCkgPT4geD8uZGF0YVNvdXJjZUlkKS5maWx0ZXIoQm9vbGVhbikgYXMgc3RyaW5nW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUZpZWxkID0gKGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBhZ3JpID0gdGhpcy5nZXRBZ3JpQ29uZmlnKCk7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gYWdyaS5maWVsZHNUb1Nob3cgfHwgW107XHJcbiAgICBsZXQgbmV4dDogc3RyaW5nW107XHJcbiAgICBpZiAoY3VycmVudC5pbmNsdWRlcyhmaWVsZE5hbWUpKSB7XHJcbiAgICAgIG5leHQgPSBjdXJyZW50LmZpbHRlcigoZikgPT4gZiAhPT0gZmllbGROYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHQgPSBbLi4uY3VycmVudCwgZmllbGROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGxEc0lkcyA9IHRoaXMuZ2V0QWxsRHNJZHMoKTtcclxuICAgIGNvbnN0IGFsbEZpZWxkcyA9IHRoaXMuc3RhdGUuYWxsRmllbGRzO1xyXG4gICAgY29uc3QgcGlja2VkID0gYWxsRmllbGRzLmZpbHRlcigoZikgPT4gbmV4dC5pbmNsdWRlcyhmLm5hbWUpKTtcclxuICAgIGNvbnN0IGltQXJyID0gSW1tdXRhYmxlKHBpY2tlZCkgYXMgYW55O1xyXG4gICAgbGV0IG5leHRNYXA6IGFueSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHNNYXAgfHwgSW1tdXRhYmxlKHt9KTtcclxuICAgIGZvciAoY29uc3QgZHNJZCBvZiBhbGxEc0lkcykge1xyXG4gICAgICBuZXh0TWFwID0gbmV4dE1hcC5zZXQoZHNJZCwgaW1BcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpZWxkc01hcDogbmV4dE1hcCBhcyBGaWVsZHNNYXAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoe1xyXG4gICAgICBmaWVsZHNUb1Nob3c6IG5leHQsXHJcbiAgICAgIHNlbGVjdGVkRmllbGRzTWFwOiBuZXh0TWFwIGFzIEZpZWxkc01hcCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlQ2hhcnRGaWVsZCA9IChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgYWdyaSA9IHRoaXMuZ2V0QWdyaUNvbmZpZygpO1xyXG4gICAgY29uc3QgY3VycmVudCA9IGFncmkuY2hhcnRGaWVsZHMgfHwgW107XHJcbiAgICBsZXQgbmV4dDogc3RyaW5nW107XHJcbiAgICBpZiAoY3VycmVudC5pbmNsdWRlcyhmaWVsZE5hbWUpKSB7XHJcbiAgICAgIG5leHQgPSBjdXJyZW50LmZpbHRlcigoZikgPT4gZiAhPT0gZmllbGROYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHQgPSBbLi4uY3VycmVudCwgZmllbGROYW1lXTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQWdyaUNvbmZpZyh7IGNoYXJ0RmllbGRzOiBuZXh0IH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DaGFydEVuYWJsZWRUb2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoeyBjaGFydEVuYWJsZWQ6ICEhZT8udGFyZ2V0Py5jaGVja2VkIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DaGFydFR5cGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoeyBjaGFydFR5cGU6IGU/LnRhcmdldD8udmFsdWUgYXMgXCJiYXJcIiB8IFwibGluZVwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DaGFydFRpdGxlQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoeyBjaGFydFRpdGxlOiB2YWwgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYXJ0Q29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy51cGRhdGVBZ3JpQ29uZmlnKHsgY2hhcnRDb2xvcjogY29sb3IgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblpvb21Ub2dnbGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSAhIWU/LnRhcmdldD8uY2hlY2tlZDtcclxuICAgIGNvbnN0IGFncmkgPSB0aGlzLmdldEFncmlDb25maWcoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB6b29tVG9TZWxlY3Rpb246IHZhbCB9KTtcclxuICAgIHRoaXMudXBkYXRlQWdyaUNvbmZpZyh7XHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgLi4uKGFncmkuc2V0dGluZ3MgfHwge30pLFxyXG4gICAgICAgIHpvb21Ub1NlbGVjdGlvbjogdmFsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblBvcHVwVG9nZ2xlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gISFlPy50YXJnZXQ/LmNoZWNrZWQ7XHJcbiAgICBjb25zdCBhZ3JpID0gdGhpcy5nZXRBZ3JpQ29uZmlnKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01hcFBvcHVwOiB2YWwgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUFncmlDb25maWcoe1xyXG4gICAgICBzZXR0aW5nczogeyAuLi4oYWdyaS5zZXR0aW5ncyB8fCB7fSksIHNob3dNYXBQb3B1cDogdmFsIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbmRlck11bHRpU2VsZWN0ID0gKFxyXG4gICAgc2VsZWN0ZWRJdGVtczogc3RyaW5nW10sXHJcbiAgICBvblRvZ2dsZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIGlzT3BlbjogYm9vbGVhbixcclxuICAgIG9uVG9nZ2xlT3BlbjogKCkgPT4gdm9pZCxcclxuICAgIGRyb3Bkb3duUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+LFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgYWxsRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMYWJlbHMgPSBzZWxlY3RlZEl0ZW1zXHJcbiAgICAgIC5tYXAoKG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBmID0gYWxsRmllbGRzLmZpbmQoKGZmKSA9PiBmZi5uYW1lID09PSBuYW1lKTtcclxuICAgICAgICByZXR1cm4gZj8uYWxpYXMgfHwgbmFtZTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHJlZj17ZHJvcGRvd25SZWZ9IGNsYXNzTmFtZT1cImV2YXBvLXBvbHlnb24tbXVsdGlzZWxlY3RcIiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2YXBvLXBvbHlnb24tbXVsdGlzZWxlY3QtdHJpZ2dlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZU9wZW59XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjZweCAxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDYpXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgPyBcIiNlOWY4ZmZcIiA6IFwiIzljYzdkZFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTMsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogMzIsXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXHJcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBgJHtzZWxlY3RlZEl0ZW1zLmxlbmd0aH0gdGFubGFuZ2FuOiAke3NlbGVjdGVkTGFiZWxzfWBcclxuICAgICAgICAgICAgICA6IHBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA4LFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnNcIixcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/IFwicm90YXRlKDE4MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDilrxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2YXBvLXBvbHlnb24tbXVsdGlzZWxlY3QtbWVudVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICB0b3A6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgIG1heEhlaWdodDogMjIwLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjQpXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWxsRmllbGRzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHggMTJweFwiLCBjb2xvcjogXCIjOWNjN2RkXCIsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1heWRvbmxhciB0b3BpbG1hZGlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2FsbEZpZWxkcy5tYXAoKGYpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhmLm5hbWUpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Zi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZShmLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDAsMTc0LDIzOSwwLjE1KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgMC4xNXNcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2U5ZjhmZlwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIycHggc29saWQgIzAwYWVlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc1NlbGVjdGVkID8gXCIjMDBhZWVmXCIgOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyTXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmbGV4OiAxIH19PntmLmFsaWFzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzZiYTNjMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2YudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlU3RyaW5nXCIgfHwgZi50eXBlID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiQUJDXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogZi50eXBlID09PSBcImVzcmlGaWVsZFR5cGVEb3VibGVcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGYudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlU2luZ2xlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmLnR5cGUgPT09IFwiZXNyaUZpZWxkVHlwZUludGVnZXJcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGYudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlU21hbGxJbnRlZ2VyXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmLnR5cGUgPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjEyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZi50eXBlID09PSBcImVzcmlGaWVsZFR5cGVEYXRlXCIgfHwgZi50eXBlID09PSBcImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLwn5OFXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGYudHlwZSA9PT0gXCJlc3JpRmllbGRUeXBlT0lEXCIgfHwgZi50eXBlID09PSBcIm9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiT0lEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLigJRcIn1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGFncmkgPSB0aGlzLmdldEFncmlDb25maWcoKTtcclxuICAgIGNvbnN0IGRzQ29ubmVjdGVkID0gISEodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCk7XHJcbiAgICBjb25zdCBmaWVsZHNUb1Nob3cgPSBhZ3JpLmZpZWxkc1RvU2hvdyB8fCBbXTtcclxuICAgIGNvbnN0IGNoYXJ0RW5hYmxlZCA9ICEhYWdyaS5jaGFydEVuYWJsZWQ7XHJcbiAgICBjb25zdCBjaGFydFR5cGUgPSBhZ3JpLmNoYXJ0VHlwZSB8fCBcImJhclwiO1xyXG4gICAgY29uc3QgY2hhcnRUaXRsZSA9IGFncmkuY2hhcnRUaXRsZSB8fCBcIlwiO1xyXG4gICAgY29uc3QgY2hhcnRGaWVsZHMgPSBhZ3JpLmNoYXJ0RmllbGRzIHx8IFtdO1xyXG4gICAgY29uc3QgY2hhcnRDb2xvciA9IGFncmkuY2hhcnRDb2xvciB8fCBcIiMzYjgyZjZcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICBwYWRkaW5nVG9wOiAxNixcclxuICAgICAgICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgwLDAsMCwwLjEyKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCA2cHhcIiB9fT5Qb2x5Z29uIFBvcHVwPC9oND5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDE0cHhcIiwgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjNWI2YjdhXCIgfX0+XHJcbiAgICAgICAgICBYYXJpdGEgdmEgRmVhdHVyZSBsYXllciBzb3psYW1hbGFyaSB5dXFvcmlkYWdpIHVtdW1peSBibyZhcG9zO2xpbWRhblxyXG4gICAgICAgICAgZm95ZGFsYW5hZGkuIFBvbGlnb24gYm9zaWxnYW5kYSBjaGlxYWRpZ2FuIHBvcHVwIHVjaHVuIHF1eWlkYWdpXHJcbiAgICAgICAgICBzb3psYW1hbGFybmkgdGFubGFuZy5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIHtkc0Nvbm5lY3RlZCAmJiAoXHJcbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCA4cHhcIiB9fT5GaWVsZHMgdG8gRGlzcGxheTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgOHB4XCIsIGNvbG9yOiBcIiM2NjZcIiwgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgICAgIFBvbHlnb24gYm9zaWxnYW5kYSBrbyZhcG9zO3JzYXRpbGFkaWdhbiBhdHJpYnV0bGFybmkgdGFubGFuZy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJNdWx0aVNlbGVjdChcclxuICAgICAgICAgICAgICBmaWVsZHNUb1Nob3csXHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVGaWVsZCxcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpZWxkc0Ryb3Bkb3duT3BlbixcclxuICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgZmllbGRzRHJvcGRvd25PcGVuOiAhcy5maWVsZHNEcm9wZG93bk9wZW4sXHJcbiAgICAgICAgICAgICAgICAgIGNoYXJ0RmllbGRzRHJvcGRvd25PcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICB0aGlzLmZpZWxkc0Ryb3Bkb3duUmVmLFxyXG4gICAgICAgICAgICAgIFwiTWF5ZG9ubGFybmkgdGFubGFuZy4uLlwiLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtkc0Nvbm5lY3RlZCAmJiAoXHJcbiAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSlcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuMDIpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBjaGFydEVuYWJsZWQgPyAxNCA6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IDAgfX0+8J+TiiBDaGFydDwvaDQ+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hhcnRFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFydEVuYWJsZWRUb2dnbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Y2hhcnRFbmFibGVkICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiAxNCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNWI2YjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXJ0IHR1cmlcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXJ0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYXJ0VHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJiYXJcIj7wn5OKIEJhciBDaGFydDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsaW5lXCI+8J+TiCBMaW5lIENoYXJ0PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1YjZiN2FcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhcnQgc2FybGF2aGFzaVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoYXJ0IG5vbWluaSB5b3ppbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFydFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYXJ0VGl0bGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1YjZiN2FcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhcnQgbWF5ZG9ubGFyaVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNdWx0aVNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgICBjaGFydEZpZWxkcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNoYXJ0RmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGFydEZpZWxkc0Ryb3Bkb3duT3BlbixcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRGaWVsZHNEcm9wZG93bk9wZW46ICFzLmNoYXJ0RmllbGRzRHJvcGRvd25PcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEcm9wZG93bk9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRGaWVsZHNEcm9wZG93blJlZixcclxuICAgICAgICAgICAgICAgICAgICBcIkNoYXJ0IHVjaHVuIG1heWRvbmxhcm5pIHRhbmxhbmcuLi5cIixcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNWI2YjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXJ0IHJhbmdpXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4IH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjaGFydENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFydENvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogXCIjNWI2YjdhXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2hhcnRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDhweFwiIH19PkJlaGF2aW9yPC9oND5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdhcDogMTAgfX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4IH19PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuem9vbVRvU2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25ab29tVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Wm9vbSB0byBzZWxlY3Rpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4IH19PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2hvd01hcFBvcHVwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Qb3B1cFRvZ2dsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkFsc28gb3BlbiBtYXAgcG9wdXA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiA4IH19PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Fncmkuc2V0dGluZ3M/LnNob3dBdHRhY2htZW50cyAhPT0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkF0dGFjaG1lbnRzVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SW5jbHVkZSBhdHRhY2htZW50cyAoUGhvdG9zICZhbXA7IEZpbGVzKTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7XG4gIERhdGFTb3VyY2VUeXBlcyxcbiAgSW1tdXRhYmxlLFxuICBSZWFjdCxcbiAgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGFiZWwsIE51bWVyaWNJbnB1dCwgT3B0aW9uLCBTZWxlY3QgfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBBZ3JpUG9seWdvblNldHRpbmdQYW5lbCBmcm9tIFwiLi9hZ3JpLXBvbHlnb24tc2V0dGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPlxuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKTtcblxuICBwcml2YXRlIGVuc3VyZUNvbmZpZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5jb25maWcgPz9cbiAgICAgIEltbXV0YWJsZSh7XG4gICAgICAgIGVuYWJsZU1pbk1heENvbnRyb2w6IHRydWUsXG4gICAgICAgIGVuYWJsZUNvbG9yUmVuZGVyZXJDb250cm9sOiB0cnVlLFxuICAgICAgICBlbmFibGVSZWdpb25GaWx0ZXJDb250cm9sOiB0cnVlLFxuICAgICAgICBlbmFibGVMb2dvdXRDb250cm9sOiB0cnVlLFxuICAgICAgICBzZWxlY3Rpb25QZXJjZW50YWdlOiAxMCxcbiAgICAgICAgcG9seWdvbklkRmllbGQ6IFwiR2xvYmFsSURcIixcbiAgICAgICAgcmlnaHRQYW5lbFdpZHRoUGVyY2VudDogNDAsXG4gICAgICAgIGNoYXJ0VHlwZTogXCJiYXJcIixcbiAgICAgICAgYWdyaVBvbHlnb246IHtcbiAgICAgICAgICBmaWVsZHNUb1Nob3c6IFtdLFxuICAgICAgICAgIHRpdGxlRmllbGQ6IFwiXCIsXG4gICAgICAgICAgbGFiZWxzOiB7fSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgem9vbVRvU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2hvd01hcFBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dBdHRhY2htZW50czogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoYXJ0RW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgY2hhcnRUeXBlOiBcImJhclwiLFxuICAgICAgICAgIGNoYXJ0VGl0bGU6IFwiXCIsXG4gICAgICAgICAgY2hhcnRGaWVsZHM6IFtdLFxuICAgICAgICAgIGNoYXJ0Q29sb3I6IFwiIzNiODJmNlwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb25maWcoa2V5OiBrZXlvZiBJTUNvbmZpZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5lbnN1cmVDb25maWcoKS5zZXQoa2V5LCB2YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRvUGxhaW5BcnJheSh2YWx1ZTogdW5rbm93bik6IHVua25vd25bXSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIGlmICh0eXBlb2YgKHZhbHVlIGFzIGFueSkuYXNNdXRhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiAodmFsdWUgYXMgYW55KS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mICh2YWx1ZSBhcyBhbnkpLnRvQXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuICh2YWx1ZSBhcyBhbnkpLnRvQXJyYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkcyxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHRoaXMudG9QbGFpbkFycmF5KHVzZURhdGFTb3VyY2VzKSxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIG9uQ2hlY2tib3hDaGFuZ2UgPVxuICAgIChrZXk6IGtleW9mIElNQ29uZmlnKSA9PlxuICAgIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbmZpZyhrZXksICEhZXZ0LnRhcmdldD8uY2hlY2tlZCk7XG4gICAgfTtcblxuICBwcml2YXRlIG9uV2lkdGhDaGFuZ2UgPSAodmFsdWU6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNhZmVWYWx1ZSA9IE1hdGgubWluKDQ4LCBNYXRoLm1heCgzMiwgTnVtYmVyKHZhbHVlKSB8fCA0MCkpO1xuICAgIHRoaXMudXBkYXRlQ29uZmlnKFwicmlnaHRQYW5lbFdpZHRoUGVyY2VudFwiLCBzYWZlVmFsdWUpO1xuICB9O1xuXG4gIHByaXZhdGUgb25DaGFydFR5cGVDaGFuZ2UgPSAoXG4gICAgZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4sXG4gICk6IHZvaWQgPT4ge1xuICAgIHRoaXMudXBkYXRlQ29uZmlnKFwiY2hhcnRUeXBlXCIsIGV2dC50YXJnZXQ/LnZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2ZnID0gdGhpcy5lbnN1cmVDb25maWcoKTtcbiAgICBjb25zdCBjaGFydFR5cGUgPSBjZmcuY2hhcnRUeXBlIHx8IFwiYmFyXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNiB9fT5cbiAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+RXZhcG9EYXNoYm9hcmRWMzA8L2g0PlxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0LCBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiM1YjZiN2FcIiB9fT5cbiAgICAgICAgICBTZWxlY3QgdGhlIHNhbWUgbWFwIGFuZCBmZWF0dXJlIGxheWVycyB1c2VkIGJ5IExvY2FsaXphdGlvbldpZGdldFYyMC5cbiAgICAgICAgICBUaGUgZGFzaGJvYXJkIHJldXNlcyBFdmFwb0luZGljYXRvcnNWMzAsIEV2YXBvQ29tYmluZWRWMzAsXG4gICAgICAgICAgRXZhcG9XYXRlckNhbmFsVjMwLCBFdmFwb0Nyb3BWMiwgYW5kIEFncmlQb2x5Z29uNCBwb3B1cCBpbnNpZGUgb25lXG4gICAgICAgICAgcmVzcG9uc2l2ZSB3aWRnZXQuXG4gICAgICAgICAgTGluayBhIE1hcCB3aWRnZXQgYmVsb3cgYW5kIGl0IHdpbGwgYXV0b21hdGljYWxseSBzbmFwIHRvIHRoZSByZXNlcnZlZFxuICAgICAgICAgIGxlZnQgbWFwIGFyZWEuIFRoZSBjcm9wIGJhciBpcyBlbWJlZGRlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYXAgc2xvdC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2IH19Pk1hcCB3aWRnZXQ8L2Rpdj5cbiAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNCB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgRGF0YSBzb3VyY2UgKEZlYXR1cmUgbGF5ZXIpXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIHR5cGVzPXt0aGlzLnN1cHBvcnRlZFR5cGVzfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShcbiAgICAgICAgICAgICAgdGhpcy50b1BsYWluQXJyYXkodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyksXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcbiAgICAgICAgICAgIGlzTXVsdGlwbGVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgUmlnaHQgcGFuZWwgd2lkdGggKCUpXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICBtaW49ezMyfVxuICAgICAgICAgICAgbWF4PXs0OH1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICB2YWx1ZT17Y2ZnLnJpZ2h0UGFuZWxXaWR0aFBlcmNlbnQgfHwgNDB9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXt0aGlzLm9uV2lkdGhDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIENvbWJpbmVkIGNoYXJ0IHR5cGVcbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxTZWxlY3Qgc2l6ZT1cInNtXCIgdmFsdWU9e2NoYXJ0VHlwZX0gb25DaGFuZ2U9e3RoaXMub25DaGFydFR5cGVDaGFuZ2V9PlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImJhclwiPkJhcjwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImxpbmVcIj5MaW5lPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYXJlYVwiPkFyZWE8L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJwaWVcIj5QaWU8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IDggfX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17Y2ZnLmVuYWJsZVJlZ2lvbkZpbHRlckNvbnRyb2wgIT09IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja2JveENoYW5nZShcImVuYWJsZVJlZ2lvbkZpbHRlckNvbnRyb2xcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5TaG93IHJlZ2lvbiBmaWx0ZXI8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGdhcDogOCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17Y2ZnLmVuYWJsZU1pbk1heENvbnRyb2wgIT09IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja2JveENoYW5nZShcImVuYWJsZU1pbk1heENvbnRyb2xcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5TaG93IE1pbi9NYXg8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGdhcDogOCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17Y2ZnLmVuYWJsZUNvbG9yUmVuZGVyZXJDb250cm9sICE9PSBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3hDaGFuZ2UoXCJlbmFibGVDb2xvclJlbmRlcmVyQ29udHJvbFwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlNob3cgY29sb3IgcmVuZGVyZXI8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGdhcDogOCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17Y2ZnLmVuYWJsZUxvZ291dENvbnRyb2wgIT09IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja2JveENoYW5nZShcImVuYWJsZUxvZ291dENvbnRyb2xcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5TaG93IGxvZ291dDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8QWdyaVBvbHlnb25TZXR0aW5nUGFuZWwgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9