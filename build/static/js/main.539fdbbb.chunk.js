(this.webpackJsonpqodenames=this.webpackJsonpqodenames||[]).push([[0],[,,function(e,t,o){e.exports={tileRow:"board_tileRow__1yOWJ",boardTiles:"board_boardTiles__3JFxb",board:"board_board__PF3JZ"}},,,,,function(e,t,o){e.exports={tile:"tile_tile__2O8iQ",word:"tile_word__2ydKx"}},function(e,t,o){e.exports={button:"button_button__3_GL1",buttonText:"button_buttonText__1CVKS"}},,,function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var s=o(0),r=o.n(s),i=o(10),a=o.n(i),n=(o(16),o(17),o(3)),c=o(4),l=o(1),p=o(5),d=o(6),h=o(7),u=o.n(h),m=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(n.a)(this,o),(s=t.call(this,e)).state={colorShown:"white"},s.toggleColor=s.toggleColor.bind(Object(l.a)(s)),s}return Object(c.a)(o,[{key:"componentWillReceiveProps",value:function(e){e.spymasterSelected!==this.props.spymasterSelected&&(!0===e.spymasterSelected?this.setState({colorShown:this.props.color}):this.setState({colorShown:"white"}))}},{key:"toggleColor",value:function(){this.props.spymasterSelected?"white"===this.state.colorShown?this.setState({colorShown:this.props.color}):"#52AB6E"===this.state.colorShown?this.setState({colorShown:"white"}):this.setState({colorShown:"#52AB6E"}):"white"===this.state.colorShown?this.setState({colorShown:this.props.color}):this.setState({colorShown:"white"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:u.a.tile,style:{backgroundColor:this.state.colorShown},onClick:function(){return e.toggleColor()}},r.a.createElement("div",{className:u.a.word},this.props.word))}}]),o}(r.a.Component),w=o(8),f=o.n(w),S=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(n.a)(this,o),(s=t.call(this,e)).state={clicked:!1,hovering:!1},s.buttonClickedColorChange=s.buttonClickedColorChange.bind(Object(l.a)(s)),s.buttonHoverColorChange=s.buttonHoverColorChange.bind(Object(l.a)(s)),s}return Object(c.a)(o,[{key:"buttonClickedColorChange",value:function(){console.log("Clicked b4: ".concat(this.state.clicked)),this.setState({clicked:!this.state.clicked}),console.log("Clicked now: ".concat(this.state.clicked))}},{key:"buttonHoverColorChange",value:function(){this.setState({hovering:!this.state.hovering})}},{key:"getBackgroundColor",value:function(){return!0===this.state.clicked?"#4f7567":this.state.hovering?"grey":"white"}},{key:"getTextColor",value:function(){return!0===this.state.clicked||!0===this.state.hovering?"white":"black"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:f.a.button,style:{backgroundColor:this.getBackgroundColor(),color:this.getTextColor()},onClick:function(){e.props.onClick(),e.buttonClickedColorChange()},onMouseOver:function(){return e.buttonHoverColorChange()},onMouseLeave:function(){return e.buttonHoverColorChange()}},r.a.createElement("div",{className:f.a.buttonText},this.props.text)))}}]),o}(r.a.Component),y=o(2),b=o.n(y),v=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(n.a)(this,o),(s=t.call(this,e)).state={spymasterSelected:!1},s.showAllColors=s.showAllColors.bind(Object(l.a)(s)),s}return Object(c.a)(o,[{key:"showAllColors",value:function(){this.setState({spymasterSelected:!this.state.spymasterSelected})}},{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{className:b.a.board},r.a.createElement(S,{onClick:function(){return e.showAllColors()},text:"SpyMaster"}),r.a.createElement("div",{className:b.a.boardTiles},r.a.createElement("div",{className:b.a.tileRow},r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]})),r.a.createElement("div",{className:b.a.tileRow},r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]})),r.a.createElement("div",{className:b.a.tileRow},r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]})),r.a.createElement("div",{className:b.a.tileRow},r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]})),r.a.createElement("div",{className:b.a.tileRow},r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}),r.a.createElement(m,{spymasterSelected:this.state.spymasterSelected,word:this.props.wordList[t],color:this.props.colorList[t++]}))))}}]),o}(r.a.Component);var g=Object.keys({apple:{definitions:[],partsOfSpeech:["Noun"]},run:{definitions:[],partsOfSpeech:["Verb"]},cat:{definitions:[],partsOfSpeech:["Noun"]},walk:{definitions:[],partsOfSpeech:["Verb"]},number:{definitions:[],partsOfSpeech:["Noun"]},workout:{definitions:[],partsOfSpeech:["Verb"]},oil:{definitions:[],partsOfSpeech:["Noun"]},wait:{definitions:[],partsOfSpeech:["Verb"]},time:{definitions:[],partsOfSpeech:["Noun"]},climb:{definitions:[],partsOfSpeech:["Verb"]},people:{definitions:[],partsOfSpeech:["Noun"]},turn:{definitions:[],partsOfSpeech:["Verb"]},car:{definitions:[],partsOfSpeech:["Noun"]},close:{definitions:[],partsOfSpeech:["Verb"]},turtle:{definitions:[],partsOfSpeech:["Noun"]},play:{definitions:[],partsOfSpeech:["Verb"]},model:{definitions:[],partsOfSpeech:["Noun"]},grind:{definitions:[],partsOfSpeech:["Verb"]},mouse:{definitions:[],partsOfSpeech:["Noun"]},swim:{definitions:[],partsOfSpeech:["Verb"]},dog:{definitions:[],partsOfSpeech:["Noun"]},listen:{definitions:[],partsOfSpeech:["Verb"]},music:{definitions:[],partsOfSpeech:["Noun"]},watch:{definitions:[],partsOfSpeech:["Verb"]},movie:{definitions:[],partsOfSpeech:["Noun"]}}),L=function(e){for(var t=["grey"],o=0;o<9;o++)t.push("#E8E889");for(var s=0;s<8;s++)t.push("#83B1DE"),t.push("#F37472");return t.push(e?"#83B1DE":"#F37472"),t.sort((function(){return Math.random()-.5})),t}(Math.random()>=.5);var E=function(){return r.a.createElement("div",null,r.a.createElement(v,{colorList:L,wordList:g}))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/codenames",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/codenames","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var s=o.headers.get("content-type");404===o.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.539fdbbb.chunk.js.map