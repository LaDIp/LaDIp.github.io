(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,t,a){e.exports={wrapper:"Column_wrapper__6RSpk",hidden:"Column_hidden__1aj1A",column:"Column_column__xhyzx",titleColumn:"Column_titleColumn__3ck0i",deleteColumn:"Column_deleteColumn__3XkcY"}},15:function(e,t,a){e.exports={board:"App_board__3VfDh",addButton:"App_addButton__3etbf"}},17:function(e,t,a){e.exports={card:"Card_card__3NhfH"}},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(5),c=a.n(r),d=a(15),o=a.n(d),i=a(4),l=a(7),u=a(3),s=a(8),p=a(17),j=a.n(p),b=[{id:"column-1",title:"Task#1",list:[{id:"card-1",text:"ead group of squamate reptiles"}]},{id:"column-2",title:"TODO",list:[{id:"card-2",text:"Lizards are a widespread group of squamate reptiles"}]}],m="ADD_CARD",O="DELETE_CARD",x="ADD_COLUMN",C="DELETE_COLUMN",_="REORDER_CARDS",f="SET_TITLE",h=a(2);var y=function(e){var t=e.item,a=e.columnId,n=e.index,r=Object(u.c)(),c=function(){r({type:O,payload:{columnId:a,cardId:t.id}})};return Object(h.jsx)(s.b,{draggableId:t.id,index:n,children:function(e){return Object(h.jsxs)("li",Object(i.a)(Object(i.a)(Object(i.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:j.a.card,id:t.id,children:[Object(h.jsx)("p",{children:t.text}),Object(h.jsx)("button",{className:j.a.button,onClick:c,children:"X"})]}))}})},v=a(9),I=a.n(v);var g=function(e){var t=e.columnID,a=Object(u.c)(),r=(Object(u.d)((function(e){return e.board})),Object(n.useState)(!1)),c=Object(l.a)(r,2),d=c[0],o=c[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),p=s[0],j=s[1];return Object(h.jsx)(h.Fragment,{children:d?Object(h.jsxs)("div",{className:I.a.wrapper,children:[Object(h.jsx)("textarea",{className:I.a.inputCard,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:p,onChange:function(e){var t=e.target.value;j(t)}}),Object(h.jsx)("button",{className:I.a.addCard,onClick:function(){if(o(!1),j(""),""!=p){var e={id:"card-".concat(Date.now()),text:p};a({type:m,payload:{id:t,card:e}})}},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(h.jsx)("button",{className:I.a.exitCard,onClick:function(e){e.target.value;j(""),o(!1)},children:"X"})]}):Object(h.jsx)("button",{className:I.a.createCard,onClick:function(){o(!0)},children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})})},D=a(11),N=a.n(D);var k=function(e){var t=e.column,a=Object(u.c)(),r=Object(n.useState)(t.title),c=Object(l.a)(r,2),d=c[0],o=c[1];return Object(h.jsxs)("div",{className:N.a.wrapper,children:[Object(h.jsx)("textarea",{className:N.a.titleColumn,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:d,onChange:function(e){var t=e.target.value;o(t)},onBlur:function(){t.title=d,a({type:f,payload:{column:t}})},rows:1}),Object(h.jsx)("button",{className:N.a.deleteColumn,onClick:function(){a({type:C,payload:t.id})},children:"X"}),Object(h.jsx)(s.c,{type:"COLUMN",droppableId:t.id,children:function(e){return Object(h.jsxs)("ul",Object(i.a)(Object(i.a)({ref:e.innerRef},e.droppableProps),{},{className:N.a.column,children:[t.list.map((function(e,a){return Object(h.jsx)(y,{columnId:t.id,item:e,index:a},e.id)})),e.placeholder]}))}}),Object(h.jsx)(g,{columnID:t.id})]})};var w=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e}));return Object(h.jsxs)("div",{className:o.a.board,children:[Object(h.jsx)(s.a,{onDragEnd:function(t){var a=t.source,n=t.destination;n&&(a.droppableId===n.droppableId&&a.index===n.index||e({type:_,payload:{sourceColumn:a.droppableId,sourceIndex:a.index,destinationColumn:n.droppableId,destinationIndex:n.index}}))},children:t.map((function(e){return Object(h.jsx)(k,{column:e},e.id)}))}),Object(h.jsx)("button",{className:o.a.addButton,onClick:function(){var t={id:"column-".concat(Date.now()),title:"",list:[]};e({type:x,payload:t})},children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443"})]})},E=a(6),R=a(18),A=Object(E.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return e.map((function(e){return e.id===t.payload.id?t.payload.column:e}));case _:var a={},n={};e.forEach((function(e){t.payload.sourceColumn===e.id&&(a=e),t.payload.destinationColumn===e.id&&(n=e)}));var r=a.list.splice(t.payload.sourceIndex,1),c=Object(l.a)(r,1),d=c[0];return n.list.splice(t.payload.destinationIndex,0,d),e.map((function(e){return e.id==a.id?a:e.id==n.id?n:e}));case x:return[].concat(Object(R.a)(e),[t.payload]);case C:return e.filter((function(e){return e.id!=t.payload}));case m:return e.map((function(e){return e.id==t.payload.id?Object(i.a)(Object(i.a)({},e),{},{list:[].concat(Object(R.a)(e.list),[t.payload.card])}):e}));case O:return console.log(t),e.map((function(e){return e.id==t.payload.columnId?Object(i.a)(Object(i.a)({},e),{},{list:e.list.filter((function(e){return e.id!==t.payload.cardId}))}):e}));default:return e}}));c.a.render(Object(h.jsx)(u.a,{store:A,children:Object(h.jsx)(w,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={card:"CardForm_card__1KK5N",wrapper:"CardForm_wrapper__14j4j",inputCard:"CardForm_inputCard__33hCS",createCard:"CardForm_createCard__3HVkc",addCard:"CardForm_addCard__2W9Kc",exitCard:"CardForm_exitCard__1-QDV"}}},[[28,1,2]]]);
//# sourceMappingURL=main.55672a0f.chunk.js.map