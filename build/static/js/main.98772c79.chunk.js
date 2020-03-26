(this.webpackJsonpQodewords=this.webpackJsonpQodewords||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"blueCardColor":"#83B1DE","redCardColor":"#F37472","yellowCardColor":"#E8E889","greenCardColor":"#52AB6E","spymasterButtonSelectedColor":"#4f7567","spymasterButtonHoveringColor":"grey","spymasterButtonColor":"white","spymasterButtonTextColor":"black","spymasterButtonSelectedTextColor":"white"}')},11:function(e,t,r){e.exports={loadingInfo:"loadingInfo_loadingInfo__2fRMN",introText:"loadingInfo_introText__3y4LZ",headingText:"loadingInfo_headingText__1QVV1",appLoadingSpinner:"loadingInfo_appLoadingSpinner__3X0bb"}},13:function(e,t,r){e.exports={tileContainer:"tile_tileContainer__32zlQ",tile:"tile_tile__2O8iQ",word:"tile_word__2ydKx"}},15:function(e,t,r){e.exports={button:"spymasterButton_button__2AjQb",buttonText:"spymasterButton_buttonText__1887W"}},16:function(e,t,r){e.exports={scorecard:"scorecard_scorecard__3r-JK",scorecardText:"scorecard_scorecardText__3C8Ga"}},17:function(e,t,r){e.exports={inputBox:"gameform_inputBox__1QSDc",input:"gameform_input__qpxww"}},24:function(e,t,r){e.exports=r(43)},29:function(e,t,r){},31:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),n=r(20),s=r.n(n),c=(r(29),r(2)),l=r.n(c),i=r(8),u=r(3),d=r(4),p=r(5),m=r(6),C=(r(31),r(7)),h=r(13),f=r.n(h),w=r(1),S=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={lastColor:w.neutralCardColor,colorShown:w.neutralCardColor},o.toggleColor=o.toggleColor.bind(Object(C.a)(o)),o}return Object(d.a)(r,[{key:"componentWillReceiveProps",value:function(e){e.spymasterSelected!==this.props.spymasterSelected&&(!0===e.spymasterSelected?this.setState({lastColor:w.neutralCardColor,colorShown:this.props.color}):this.setState({lastColor:this.props.color,colorShown:w.neutralCardColor}))}},{key:"toggleColor",value:function(){this.props.spymasterSelected?this.state.colorShown===w.neutralCardColor?this.setState({lastColor:w.neutralCardColor,colorShown:this.props.color},this.sendColorChangeToBoard):this.state.colorShown===w.greenCardColor?this.setState({lastColor:w.greenCardColor,colorShown:w.neutralCardColor},this.sendColorChangeToBoard):this.setState({lastColor:this.props.color,colorShown:w.greenCardColor},this.sendColorChangeToBoard):this.state.colorShown===w.neutralCardColor?this.setState({lastColor:w.neutralCardColor,colorShown:this.props.color},this.sendColorChangeToBoard):this.setState({lastColor:this.props.color,colorShown:w.neutralCardColor},this.sendColorChangeToBoard)}},{key:"sendColorChangeToBoard",value:function(){this.props.spymasterSelected||this.props.trackClick(this.state.lastColor,this.state.colorShown)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:f.a.tileContainer},a.a.createElement("div",{className:f.a.tile,style:{backgroundColor:this.state.colorShown},onClick:function(){return e.toggleColor()}},a.a.createElement("div",{className:f.a.word},a.a.createElement("span",null,this.props.word))))}}]),r}(a.a.PureComponent),y=r(15),b=r.n(y),v=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={clicked:!1},o.buttonClickedColorChange=o.buttonClickedColorChange.bind(Object(C.a)(o)),o}return Object(d.a)(r,[{key:"buttonClickedColorChange",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"getBackgroundColor",value:function(){return!0===this.state.clicked?w.spymasterButtonSelectedColor:w.spymasterButtonColor}},{key:"getTextColor",value:function(){return!0===this.state.clicked?w.spymasterButtonSelectedTextColor:w.spymasterButtonTextColor}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:b.a.button,style:{backgroundColor:this.getBackgroundColor(),color:this.getTextColor()},onClick:function(){e.props.onClick(),e.buttonClickedColorChange()}},a.a.createElement("div",{className:b.a.buttonText},"SpyMaster"))}}]),r}(a.a.PureComponent),k=r(9),g=r.n(k),E=r(16),L=r.n(E),_=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:L.a.scorecard,style:{backgroundColor:this.props.color}},a.a.createElement("div",{className:L.a.scorecardText},this.props.tilesRemaining))}}]),r}(a.a.PureComponent),O=r(17),x=r.n(O),j=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).isAlphabeticOrEmpty=o.isAlphabeticOrEmpty.bind(Object(C.a)(o)),o}return Object(d.a)(r,[{key:"isAlphabeticOrEmpty",value:function(e){return!(!/^[a-zA-Z]+$/.test(e)&&""!==e)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:x.a.inputBox},a.a.createElement("input",{type:"text",className:x.a.input,maxLength:"15",onChange:function(t){e.isAlphabeticOrEmpty(t.target.value)&&e.props.gameIdChanged(t.target.value)},value:this.props.gameId}))}}]),r}(a.a.PureComponent),T=r(14),B=r(32);function A(){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(l.a.mark((function e(){var t,r,o,a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,B.get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/words").set("Content-Type","application/json").set("Accept","application/json");case 3:return r=e.sent,o=r.body,a=o.nouns,n=o.verbs,s=o.adjectives,t=[].concat(Object(T.a)(a),Object(T.a)(n),Object(T.a)(s)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=r(21),R=r.n(I);function W(e){return e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)}function P(e,t){for(var r=[],o=Array.from(t),a=0;a<25;a++){var n=parseInt("11111111111111",2)<<a,s=0;if(32<"11111111111111".length+a){for(var c="11111111111111".length+a-32,l="",i=0;i<c;i++)l=l.concat("1");s=parseInt(l,2)}var u=n+s,d=Math.abs(e&u)%o.length;r.push(o[d]),o.splice(d,1)}return r}function Q(e){for(var t=function(e){for(var t=["grey"],r=0;r<7;r++)t.push("#E8E889");for(var o=0;o<8;o++)t.push("#83B1DE"),t.push("#F37472");return t.push(e?"#83B1DE":"#F37472"),t}(e%2===1),r=[],o=0;o<25;o++){var a=parseInt("11111",2)<<o,n=Math.abs(e&a)%t.length;r.push(t[n]),t.splice(n,1)}return r}function D(e,t){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(l.a.mark((function e(t,r){var o,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r,void 0!==r){e.next=5;break}return e.next=4,A();case 4:o=e.sent;case 5:return void 0!==(a=t)&&""!==a||(a=R()()),n=W(a),e.abrupt("return",{gameId:a,words:P(n,o),colors:Q(n)});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=r(55),z=r(11),F=r.n(z),H=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:F.a.loadingInfo},a.a.createElement("h4",{className:F.a.introText},this.props.introText),a.a.createElement("h1",{className:F.a.headingText},this.props.headingText),a.a.createElement(M.a,{id:F.a.appLoadingSpinner,size:"15%"}))}}]),r}(a.a.Component),U=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={spymasterSelected:!1,colorCounter:o.initColorCounter(),loading:!0},o.initColorCounter=o.initColorCounter.bind(Object(C.a)(o)),o.setColorCounters=o.setColorCounters.bind(Object(C.a)(o)),o.showAllColors=o.showAllColors.bind(Object(C.a)(o)),o.updateScore=o.updateScore.bind(Object(C.a)(o)),o.updateBoard=o.updateBoard.bind(Object(C.a)(o)),o}return Object(d.a)(r,[{key:"initColorCounter",value:function(){var e={},t=w.neutralCardColor,r=w.blueCardColor,o=w.redCardColor,a=w.yellowCardColor,n=w.endCardColor;return e[t]=25,e[r]=0,e[o]=0,e[a]=0,e[n]=0,e}},{key:"componentWillMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(void 0,this.props.masterWordList);case 2:t=e.sent,this.setState({wordList:t.words,colorList:t.colors,gameId:t.gameId}),this.setColorCounters(),this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showAllColors",value:function(){this.setState({spymasterSelected:!this.state.spymasterSelected,colorCounter:this.initColorCounter()})}},{key:"updateScore",value:function(e,t){var r={};Object.assign(r,this.state.colorCounter),void 0!==e?r[e]--:r.white--,r[t]++,this.setState({colorCounter:r})}},{key:"updateBoard",value:function(){var e=Object(i.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,this.props.masterWordList);case 2:r=e.sent,this.setState({wordList:r.words,colorList:r.colors,gameId:t,spymasterSelected:!1}),this.setColorCounters();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setColorCounters",value:function(){this.blueCount=this.state.colorList.reduce((function(e,t){return t===w.blueCardColor?++e:e}),0),this.redCount=r.TOTAL_PLAYER_CARDS-this.blueCount}},{key:"render",value:function(){var e=this,t=function(){return a.a.createElement("div",{className:g.a.boardHeader},function(){if(!0===!e.state.spymasterSelected)return a.a.createElement("div",{className:g.a.scoreboard},a.a.createElement(_,{color:w.blueCardColor,tilesRemaining:e.blueCount-e.state.colorCounter[w.blueCardColor]}),a.a.createElement(_,{color:w.redCardColor,tilesRemaining:e.redCount-e.state.colorCounter[w.redCardColor]}))}(),a.a.createElement(j,{gameId:e.state.gameId,gameIdChanged:function(){var t=Object(i.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateBoard(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),a.a.createElement(v,{onClick:function(){return e.showAllColors()}}))};return this.state.loading?a.a.createElement(H,{introText:"Loading Board",headingText:"Qodenames"}):a.a.createElement("div",{className:g.a.board},t(),a.a.createElement("hr",null),function(){var t=0;return a.a.createElement("div",{className:g.a.boardTiles},a.a.createElement("div",{className:g.a.tileRow},a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:g.a.tileRow},a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:g.a.tileRow},a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:g.a.tileRow},a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})),a.a.createElement("div",{className:g.a.tileRow},a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}}),a.a.createElement(S,{spymasterSelected:e.state.spymasterSelected,word:e.state.wordList[t],color:e.state.colorList[t++],trackClick:function(t,r){return e.updateScore(t,r)}})))}())}}]),r}(a.a.PureComponent);U.TOTAL_PLAYER_CARDS=17;var Z=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var o;return Object(u.a)(this,r),(o=t.call(this,e)).state={loading:!0},o}return Object(d.a)(r,[{key:"componentWillMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:this.wordList=e.sent,this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loading?a.a.createElement(H,{introText:"Welcome To",headingText:"Qodenames"}):a.a.createElement(U,{masterWordList:this.wordList})}}]),r}(a.a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/codewords",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/codewords","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var o=r.headers.get("content-type");404===r.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},9:function(e,t,r){e.exports={board:"board_board__PF3JZ",boardHeader:"board_boardHeader__f63no",boardTiles:"board_boardTiles__3JFxb",tileRow:"board_tileRow__1yOWJ",scoreboard:"board_scoreboard__3G7tD"}}},[[24,1,2]]]);
//# sourceMappingURL=main.98772c79.chunk.js.map