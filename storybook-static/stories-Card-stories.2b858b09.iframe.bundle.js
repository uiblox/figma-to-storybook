"use strict";(self.webpackChunkfigma_to_storybook=self.webpackChunkfigma_to_storybook||[]).push([[16],{"./src/stories/Card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:function(){return Error},Primary:function(){return Primary},Success:function(){return Success},Warning:function(){return Warning},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Card_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_jss_esm=__webpack_require__("./node_modules/react-jss/dist/react-jss.esm.js"),Button=__webpack_require__("./src/components/button/Button.tsx"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),asn_WarningOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},AntdIcon=__webpack_require__("./node_modules/@ant-design/icons/es/components/AntdIcon.js"),WarningOutlined_WarningOutlined=function WarningOutlined(props,ref){return react.createElement(AntdIcon.Z,(0,esm_extends.Z)({},props,{ref:ref,icon:asn_WarningOutlined}))};var icons_WarningOutlined=react.forwardRef(WarningOutlined_WarningOutlined),asn_CloseCircleOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"},CloseCircleOutlined_CloseCircleOutlined=function CloseCircleOutlined(props,ref){return react.createElement(AntdIcon.Z,(0,esm_extends.Z)({},props,{ref:ref,icon:asn_CloseCircleOutlined}))};var icons_CloseCircleOutlined=react.forwardRef(CloseCircleOutlined_CloseCircleOutlined),asn_CheckCircleOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},CheckCircleOutlined_CheckCircleOutlined=function CheckCircleOutlined(props,ref){return react.createElement(AntdIcon.Z,(0,esm_extends.Z)({},props,{ref:ref,icon:asn_CheckCircleOutlined}))};var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Success$parameters,_Success$parameters2,_Success$parameters2$,_Warning$parameters,_Warning$parameters2,_Warning$parameters2$,_Error$parameters,_Error$parameters2,_Error$parameters2$do,icons_CheckCircleOutlined=react.forwardRef(CheckCircleOutlined_CheckCircleOutlined),InfoCircleOutlined=__webpack_require__("./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,react_jss_esm.QM)({card:{color:"#EFEFEF",background:"#353535",borderRadius:"4px",display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px 24px",textAlign:"center",width:"124px",fontFamily:"Montserrat, sans-serif","&$card--success":{},"&$card--warn":{},"&$card--error":{}},"card--success":{color:"#BEF93F"},"card--warn":{color:"#F9E73F"},"card--error":{color:"#F96C3F"},cardIcon:{fontSize:"28px",marginBottom:"8px"},cardTitle:{fontSize:"18px",fontWeight:"400",margin:0},cardContent:{color:"#FFF",fontSize:"14px"}}),Card=function Card(_ref){var label=_ref.label,msg=_ref.msg,type=_ref.type,handleCardConfirmClick=_ref.handleCardConfirmClick,styles=useStyles();return(0,jsx_runtime.jsxs)("div",{className:"".concat(type?"".concat(styles.card," ").concat(styles["card--".concat(type)]):styles.card),children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:styles.cardIcon,children:function icon(){switch(type){case"warn":return(0,jsx_runtime.jsx)(icons_WarningOutlined,{});case"error":return(0,jsx_runtime.jsx)(icons_CloseCircleOutlined,{});case"success":return(0,jsx_runtime.jsx)(icons_CheckCircleOutlined,{});default:return(0,jsx_runtime.jsx)(InfoCircleOutlined.Z,{})}}()}),(0,jsx_runtime.jsx)("h2",{className:styles.cardTitle,children:label&&label||"Default Title"})]}),(0,jsx_runtime.jsx)("div",{className:styles.cardContent,children:(0,jsx_runtime.jsx)("p",{children:msg})}),(0,jsx_runtime.jsx)(Button.z,{handleClick:function handleClick(){return handleCardConfirmClick()},label:"Confirm"})]})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},msg:{defaultValue:null,description:"",name:"msg",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"warn"'},{value:'"error"'},{value:'"success"'}]}},handleCardConfirmClick:{defaultValue:null,description:"",name:"handleCardConfirmClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Card_stories={title:"Components/Card",component:Card,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{handleCardConfirmClick:{action:"Confirm card button selected"}}},Primary={args:{label:"Default",msg:"short informative message."}},Success={args:{label:"Success",msg:"informative message.",type:"success"}},Warning={args:{label:"Warning",msg:"informative message.",type:"warn"}},Error={args:{label:"Error",msg:"informative message.",type:"error"}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    label: 'Default',\n    msg: 'short informative message.'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Success.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Success.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    label: 'Success',\n    msg: 'informative message.',\n    type: 'success'\n  }\n}"},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2$=_Success$parameters2.docs)||void 0===_Success$parameters2$?void 0:_Success$parameters2$.source)})}),Warning.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Warning.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Warning$parameters=Warning.parameters)||void 0===_Warning$parameters?void 0:_Warning$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    label: 'Warning',\n    msg: 'informative message.',\n    type: 'warn'\n  }\n}"},null===(_Warning$parameters2=Warning.parameters)||void 0===_Warning$parameters2||null===(_Warning$parameters2$=_Warning$parameters2.docs)||void 0===_Warning$parameters2$?void 0:_Warning$parameters2$.source)})}),Error.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Error.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    label: 'Error',\n    msg: 'informative message.',\n    type: 'error'\n  }\n}"},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2$do=_Error$parameters2.docs)||void 0===_Error$parameters2$do?void 0:_Error$parameters2$do.source)})});var __namedExportsOrder=["Primary","Success","Warning","Error"]},"./src/components/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var react_jss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-jss/dist/react-jss.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useStyles=(0,react_jss__WEBPACK_IMPORTED_MODULE_1__.QM)({btn:{background:"#E1FB3D",border:"none",borderRadius:"4px",color:"#4D4C4C",cursor:"pointer",fontFamily:"Montserrat, sans-serif",padding:"8px 12px",transition:"0.4s ease","&:hover":{background:"#ECF99B"},"& $btn--sm":{},"& $btn--lg":{},"& $btn--secondary":{}},"btn-content":{whiteSpace:"nowrap"},"btn-text":{paddingLeft:0,textWrap:"nowrap"},"btn-text-icon":{paddingLeft:"4px",textWrap:"nowrap"},"btn--sm":{fontSize:"10px",padding:"4px 8px"},"btn--lg":{fontSize:"18px",padding:"12px 12px"},"btn--secondary":{background:"transparent",boxShadow:"0 0 0 1px #4D4C4C","&:hover":{background:"transparent",boxShadow:"0 0 0 1px #E1FB3D",color:"#E1FB3D"}}}),Button=function Button(_ref){var children=_ref.children,label=_ref.label,size=_ref.size,type=_ref.type,handleClick=_ref.handleClick,styles=useStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(styles.btn," ").concat(size?styles["btn--".concat(size)]:""," ").concat(type?styles["btn--".concat(type)]:""),onClick:function onClick(){return handleClick()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:styles["btn-content"],children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:children?styles["btn-text-icon"]:styles["btn-text"],children:label})]})})})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);