(this["webpackJsonptip-cal"]=this["webpackJsonptip-cal"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var c=a(0),s=a(1),n=a.n(s),i=a(4),r=a.n(i),l=a(9),j=a(5),b=a(6),o=a(11),u=a(10),d=(a(17),a(20)),h=(new Date).getFullYear(),O=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var c;return Object(j.a)(this,a),(c=e.call(this,t)).handleClick=function(){c.setState({custData:[].concat(Object(l.a)(c.state.custData),[{tempData:c.state.tempData,tip:c.state.AtempData*c.state.service}]),AtempData:"",tempData:""})},c.handlecal=function(t){c.setState({len:[c.state.custData.length]});var e=c.state.custData.map((function(t){return t.tip})).reduce((function(t,e){return t+e}),0);c.setState({total:e})},c.state={custData:[],ammountData:[],tempData:"",AtempData:"",total:[],service:"",len:""},c}return Object(b.a)(a,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"outer-div",children:Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"form-div",children:Object(c.jsxs)("form",{class:"",children:[Object(c.jsx)("h1",{className:"form-header",children:" TIP CALCULATOR"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{className:"e-b",children:" Enter your bill amount"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"ent-amt",type:"number",value:this.state.AtempData,onChange:function(e){t.setState({AtempData:e.target.value})},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{className:"h-s",children:"How was the service"}),Object(c.jsxs)("select",{name:"service",className:"opt",required:!0,value:this.state.service,onChange:function(e){t.setState({service:e.target.value})},children:[Object(c.jsx)("option",{children:" --Select-- "}),Object(c.jsx)("option",{value:"0.2",children:"Excellent - 20% "}),Object(c.jsx)("option",{value:"0.1",children:"Medium - 10% "}),Object(c.jsx)("option",{value:"0.05",children:"Not so good - 5%"})]}),Object(c.jsx)("input",{className:"cstm-inp",value:this.state.tempData,onChange:function(e){t.setState({tempData:e.target.value})},type:"text",placeholder:"Customer Name"}),Object(c.jsx)("input",{className:"add-btn",onClick:function(){t.handleClick()},type:"button",value:"Add Customer"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:" Customer List "}),Object(c.jsx)("div",{id:"out1",children:Object(c.jsx)("ul",{children:this.state.custData.map((function(t){return Object(c.jsxs)("li",{children:[" ","".concat(t.tempData," offering tip of ").concat(t.tip," rupees.")," "]})}))})}),Object(c.jsx)("input",{className:"f-submit",type:"Button",value:"Calculate Tip & Customer",onClick:function(){t.handlecal()}}),Object(c.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"TOTAL PERSON"}),Object(c.jsx)("th",{children:"TOTAL AMOUNT"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[this.state.len," "]}),Object(c.jsx)("td",{children:this.state.total})]})})]}),Object(c.jsx)("div",{className:"foot",children:Object(c.jsxs)("h5",{children:[" \xa9",h," TIP-CALCULATOR . All Rights Reserved "]})})]})})})})})}}]),a}(n.a.Component);r.a.render(Object(c.jsx)("div",{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef7a8cd0.chunk.js.map