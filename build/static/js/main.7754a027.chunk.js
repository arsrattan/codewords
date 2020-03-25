(this.webpackJsonpqodewords=this.webpackJsonpqodewords||[]).push([[0],{12:function(e,t,r){e.exports={tile:"tile_tile__2O8iQ",word:"tile_word__2ydKx"}},13:function(e,t,r){e.exports={button:"spymasterButton_button__2AjQb",buttonText:"spymasterButton_buttonText__1887W"}},14:function(e,t,r){e.exports={scorecard:"scorecard_scorecard__3r-JK",scorecardText:"scorecard_scorecardText__3C8Ga"}},18:function(e,t,r){e.exports={input:"gameform_input__qpxww"}},23:function(e,t,r){e.exports=r(42)},28:function(e,t,r){},30:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),n=r(17),s=r.n(n),c=(r(28),r(2)),i=r.n(c),l=r(7),u=r(3),d=r(4),p=r(5),h=r(6),m=(r(30),r(1)),f=r(53),w=r(12),v=r.n(w),C=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={lastColor:void 0,colorShown:"white"},o.toggleColor=o.toggleColor.bind(Object(m.a)(o)),o}return Object(d.a)(r,[{key:"componentWillReceiveProps",value:function(e){e.spymasterSelected!==this.props.spymasterSelected&&(!0===e.spymasterSelected?this.setState({lastColor:"white",colorShown:this.props.color}):this.setState({lastColor:this.props.color,colorShown:"white"}))}},{key:"toggleColor",value:function(){this.props.spymasterSelected?"white"===this.state.colorShown?this.setState({lastColor:"white",colorShown:this.props.color},this.sendColorChangeToBoard):"#52AB6E"===this.state.colorShown?this.setState({lastColor:"#52AB6E",colorShown:"white"},this.sendColorChangeToBoard):this.setState({lastColor:this.props.color,colorShown:"#52AB6E"},this.sendColorChangeToBoard):"white"===this.state.colorShown?this.setState({lastColor:"white",colorShown:this.props.color},this.sendColorChangeToBoard):this.setState({lastColor:this.props.color,colorShown:"white"},this.sendColorChangeToBoard)}},{key:"sendColorChangeToBoard",value:function(){this.props.spymasterSelected||this.props.trackClick(this.state.lastColor,this.state.colorShown)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:v.a.tile,style:{backgroundColor:this.state.colorShown},onClick:function(){return e.toggleColor()}},a.a.createElement("div",{className:v.a.word},this.props.word))}}]),r}(a.a.Component),S=r(13),g=r.n(S),y=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={clicked:!1,hovering:!1},o.buttonClickedColorChange=o.buttonClickedColorChange.bind(Object(m.a)(o)),o.buttonHoverColorChange=o.buttonHoverColorChange.bind(Object(m.a)(o)),o}return Object(d.a)(r,[{key:"buttonClickedColorChange",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"buttonHoverColorChange",value:function(){this.setState({hovering:!this.state.hovering})}},{key:"getBackgroundColor",value:function(){return!0===this.state.clicked?"#4f7567":this.state.hovering?"grey":"white"}},{key:"getTextColor",value:function(){return!0===this.state.clicked||!0===this.state.hovering?"white":"black"}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:g.a.button,style:{backgroundColor:this.getBackgroundColor(),color:this.getTextColor()},onClick:function(){e.props.onClick(),e.buttonClickedColorChange()},onMouseOver:function(){return e.buttonHoverColorChange()},onMouseLeave:function(){return e.buttonHoverColorChange()}},a.a.createElement("div",{className:g.a.buttonText},this.props.text))}}]),r}(a.a.Component),b=r(8),k=r.n(b),E=r(14),L=r.n(E),j=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:L.a.scorecard,style:{backgroundColor:this.props.color}},a.a.createElement("div",{className:L.a.scorecardText},this.props.tilesRemaining))}}]),r}(a.a.Component),O=r(18),x=r.n(O),B=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={value:""},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.refreshBoard=o.refreshBoard.bind(Object(m.a)(o)),o}return Object(d.a)(r,[{key:"handleChange",value:function(e){!0!==/^[a-zA-Z]+$/.test(e.target.value)&&""!==e.target.value||this.setState({value:e.target.value},this.refreshBoard)}},{key:"refreshBoard",value:function(){console.log("Refreshing board, current value: ".concat(this.state.value)),""===this.state.value?this.props.handleGameIdChange(this.props.startingWord):this.props.handleGameIdChange(this.state.value)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{type:"text",className:x.a.input,placeholder:this.props.startingWord,maxLength:"15",onChange:this.handleChange,value:this.state.value})))}}]),r}(a.a.Component),_=r(11),W=r(31);function A(){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(i.a.mark((function e(){var t,r,o,a,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,W.get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/words").set("Content-Type","application/json").set("Accept","application/json");case 3:return r=e.sent,o=r.body,a=o.nouns,n=o.verbs,s=o.adjectives,t=[].concat(Object(_.a)(a),Object(_.a)(n),Object(_.a)(s)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=r(19),R=r.n(N);function I(e){return e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)}function F(e,t){for(var r=[],o=Array.from(t),a=0;a<25;a++){var n=parseInt("11111111111111",2)<<a,s=0;if(32<"11111111111111".length+a){for(var c="11111111111111".length+a-32,i="",l=0;l<c;l++)i=i.concat("1");s=parseInt(i,2)}var u=n+s,d=Math.abs(e&u)%o.length;r.push(o[d]),o.splice(d,1)}return r}function D(e){for(var t=function(e){for(var t=["grey"],r=0;r<7;r++)t.push("#E8E889");for(var o=0;o<8;o++)t.push("#83B1DE"),t.push("#F37472");return t.push(e?"#83B1DE":"#F37472"),t}(e%2===1),r=[],o=0;o<25;o++){var a=parseInt("11111",2)<<o,n=Math.abs(e&a)%t.length;r.push(t[n]),t.splice(n,1)}return r}function H(e,t){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(i.a.mark((function e(t,r){var o,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r,void 0!==r){e.next=5;break}return e.next=4,A();case 4:o=e.sent;case 5:return void 0!==(a=t)&&""!==a||(a=R()()),n=I(a),e.abrupt("return",{gameId:a,words:F(n,o),colors:D(n)});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={spymasterSelected:!1,colorCounter:{white:25,"#83B1DE":0,"#F37472":0,"#52AB6E":0,E8E889:0},loading:!0},o.setColorCounters=o.setColorCounters.bind(Object(m.a)(o)),o.showAllColors=o.showAllColors.bind(Object(m.a)(o)),o.updateScore=o.updateScore.bind(Object(m.a)(o)),o.updateBoard=o.updateBoard.bind(Object(m.a)(o)),o.setLoading=o.setLoading.bind(Object(m.a)(o)),o}return Object(d.a)(r,[{key:"componentWillMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:t=e.sent,this.setState({wordList:t.words,colorList:t.colors,gameId:t.gameId}),this.startingWord=t.gameId,this.setColorCounters(),this.setState({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showAllColors",value:function(){this.setState({spymasterSelected:!this.state.spymasterSelected,colorCounter:{white:25,"#83B1DE":0,"#F37472":0,"#52AB6E":0,E8E889:0}})}},{key:"updateScore",value:function(e,t){var r={};Object.assign(r,this.state.colorCounter),void 0!==e?r[e]--:r.white--,r[t]++,this.setState({colorCounter:r})}},{key:"setLoading",value:function(){var e=Object(l.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({loading:!0});case 2:t(r),this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateBoard",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,this.props.masterWordList);case 2:r=e.sent,this.setState({wordList:r.words,colorList:r.colors,gameId:t,spymasterSelected:!1},this.setColorCounters);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setColorCounters",value:function(){this.blueCount=this.state.colorList.reduce((function(e,t){return"#83B1DE"===t?e+1:e}),0),this.redCount=17-this.blueCount}},{key:"render",value:function(){var e=this,t=0;return a.a.createElement("div",null,a.a.createElement("div",{className:k.a.board},a.a.createElement("div",{className:k.a.boardHeader},!0===e.state.spymasterSelected||e.state.loading?a.a.createElement("div",null,a.a.createElement(j,{id:"blueScorecard",color:"#83B1DE",tilesRemaining:0}),a.a.createElement(j,{id:"redScorecard",color:"#F37472",tilesRemaining:0})):a.a.createElement("div",null,a.a.createElement(j,{id:"blueScorecard",color:"#83B1DE",tilesRemaining:e.blueCount-e.state.colorCounter["#83B1DE"]}),a.a.createElement(j,{id:"redScorecard",color:"#F37472",tilesRemaining:e.redCount-e.state.colorCounter["#F37472"]})),a.a.createElement(B,{startingWord:this.startingWord,handleGameIdChange:function(t){return e.setLoading(e.updateBoard,t)}}),a.a.createElement(y,{onClick:function(){return e.showAllColors()},text:"SpyMaster"}))),a.a.createElement("div",null,!0===e.state.loading?a.a.createElement(f.a,null):a.a.createElement("div",{className:k.a.boardTiles},a.a.createElement("div",{className:k.a.tileRow},a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:k.a.tileRow},a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:k.a.tileRow},a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:k.a.tileRow},a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:k.a.tileRow},a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(C,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})))))}}]),r}(a.a.Component),G=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={loading:!0},o}return Object(d.a)(r,[{key:"componentWillMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("App refreshing"),e.next=3,A();case 3:this.wordList=e.sent,this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,(console.log("Wordlist in app: ".concat(e.wordList)),!0===e.state.loading?a.a.createElement(f.a,null):a.a.createElement(J,{masterWordList:e.wordList})))}}]),r}(a.a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/codewords",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/codewords","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var o=r.headers.get("content-type");404===r.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()},8:function(e,t,r){e.exports={tileRow:"board_tileRow__1yOWJ",boardTiles:"board_boardTiles__3JFxb",board:"board_board__PF3JZ",boardHeader:"board_boardHeader__f63no"}}},[[23,1,2]]]);
//# sourceMappingURL=main.7754a027.chunk.js.map