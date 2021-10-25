(this["webpackJsonpchainalysis-website"]=this["webpackJsonpchainalysis-website"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(9),a=n.n(c),i=(n(14),n(15),n(2)),l=n.n(i),u=n(3),o=n(4),b=n(5),h=n(7),p=n(6);function d(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(t,n,r){var s,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={BTC_Gemini:"https://api.gemini.com/v1/pubticker/btcusd",ETH_Gemini:"https://api.gemini.com/v1/pubticker/ethusd",BTC_Coinbase_Buy:"https://api.coinbase.com/v2/prices/BTC-USD/buy",BTC_Coinbase_Sell:"https://api.coinbase.com/v2/prices/BTC-USD/sell",ETH_Coinbase_Buy:"https://api.coinbase.com/v2/prices/ETH-USD/buy",ETH_Coinbase_Sell:"https://api.coinbase.com/v2/prices/ETH-USD/sell"},e.t0=n,e.next="Gemini"===e.t0?4:"Coinbase"===e.t0?6:9;break;case 4:return a=String(t)+"_"+String(n),e.abrupt("break",10);case 6:return a=String(t)+"_"+String(n)+"_"+String(r),r="Coinbase",e.abrupt("break",10);case 9:a="undefined";case 10:if(a in s){e.next=13;break}return console.log("No key value found for "+a),e.abrupt("return");case 13:return e.next=15,x(s[a],r);case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t,n){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:s=e.sent,e.t0=n,e.next="Buy"===e.t0?9:"Sell"===e.t0?10:"Coinbase"===e.t0?11:12;break;case 9:return e.abrupt("return",s.bid);case 10:return e.abrupt("return",s.ask);case 11:return e.abrupt("return",s.data.amount);case 12:return console.log("Invalid action passed. Use 'Buy' or 'Sell'"),e.abrupt("return",0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(0),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={BTC_buy:0,BTC_sell:0,ETH_buy:0,ETH_sell:0},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.tick(),this.timerID=setInterval((function(){return e.tick()}),2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("BTC",this.props.exchange,"Buy");case 2:return t=e.sent,e.next=5,d("BTC",this.props.exchange,"Sell");case 5:return n=e.sent,e.next=8,d("ETH",this.props.exchange,"Buy");case 8:return r=e.sent,e.next=11,d("ETH",this.props.exchange,"Sell");case 11:s=e.sent,this.setState({BTC_buy:t,BTC_sell:n,ETH_buy:r,ETH_sell:s});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("table",{id:this.props.id,className:"price-table",children:[Object(y.jsxs)("thead",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:"3",className:"table-website-header",children:this.props.exchange})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:" "}),Object(y.jsx)("td",{children:"Buy Price"}),Object(y.jsx)("td",{children:"Sell Price"})]})]}),Object(y.jsxs)("tbody",{className:"price-section",children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:"Bitcoin (BTC)"}),Object(y.jsxs)("td",{className:"btc-buy-val",children:["$",this.state.BTC_buy]}),Object(y.jsxs)("td",{className:"btc-sell-val",children:["$",this.state.BTC_sell]})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:"Etherium (ETH)"}),Object(y.jsxs)("td",{className:"eth-buy-val",children:["$",this.state.ETH_buy]}),Object(y.jsxs)("td",{className:"eth-sell-val",children:["$",this.state.ETH_sell]})]})]})]})})}}]),n}(s.a.Component),v=O;function f(e,t){var n=String(e)+"-"+String(t)+"-val",r=("#left-table ."+n).toLowerCase(),s=("#right-table ."+n).toLowerCase(),c=document.querySelector(r).innerHTML.substring(1),a=document.querySelector(s).innerHTML.substring(1);if(c=parseFloat(c),a=parseFloat(a),"Buy"===t)c*=-1,a*=-1;else if("Sell"!==t)return console.log("Invalid action passed. Use 'Buy' or 'Sell'"),"ERROR";return c>a?document.querySelector("#left-table .table-website-header").innerHTML:document.querySelector("#right-table .table-website-header").innerHTML}var _=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={rec_buy_exchange:"LOADING",rec_sell_exchange:"LOADING"},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=f(this.props.currency,"Buy"),t=f(this.props.currency,"Sell");this.setState({rec_buy_exchange:e,rec_sell_exchange:t})}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("table",{className:"recommendations",children:Object(y.jsxs)("tbody",{className:"price-section",children:[Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{children:["You should buy ",this.props.currency," from ",this.state.rec_buy_exchange,"."]})}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{children:["You should sell ",this.props.currency," from ",this.state.rec_sell_exchange,"."]})})]})})})}}]),n}(s.a.Component);var T=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{className:"site-title",children:"BTC vs. ETH Price Comparison"}),Object(y.jsxs)("div",{className:"price-container",children:[Object(y.jsx)(v,{id:"left-table",exchange:"Gemini"}),Object(y.jsx)(v,{id:"right-table",exchange:"Coinbase"})]}),Object(y.jsx)("p",{className:"recommendation-header",children:"Recommendations"}),Object(y.jsx)(_,{currency:"BTC"}),Object(y.jsx)(_,{currency:"ETH"})]})};a.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9aee4afa.chunk.js.map