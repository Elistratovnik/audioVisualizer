(this["webpackJsonpaudio-player"]=this["webpackJsonpaudio-player"]||[]).push([[0],[,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"SET_CONTEXT",(function(){return a})),n.d(t,"ADD_SONG",(function(){return r})),n.d(t,"CHANGE_PATH",(function(){return c})),n.d(t,"CHANGE_CURRENT_SONG_INDEX",(function(){return o})),n.d(t,"SET_CURRENT_TRACK_TIME",(function(){return l})),n.d(t,"SET_CURRENT_TRACK_DURATION",(function(){return i})),n.d(t,"DISABLE_SONG_SELECT",(function(){return u})),n.d(t,"ENABLE_SONG_SELECT",(function(){return s})),n.d(t,"SET_PAUSED",(function(){return m})),n.d(t,"CHANGE_VOLUME",(function(){return d})),n.d(t,"ADD_SONG_DURATION",(function(){return f})),n.d(t,"HIDE_SPINNER",(function(){return _}));var a="SET_CONTEXT",r="ADD_SONG",c="CHANGE_PATH",o="CHANGE_CURRENT_SONG_INDEX",l="SET_CURRENT_TRACK_TIME",i="SET_CURRENT_TRACK_DURATION",u="DISABLE_SONG_SELECT",s="ENABLE_SONG_SELECT",m="SET_PAUSED",d="CHANGE_VOLUME",f="ADD_SONG_DURATION",_="HIDE_SPINNER"},,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/song1.3c036f40.mp3"},,,function(e,t,n){e.exports=n(58)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=(n(39),n(16)),i=(n(40),n(7)),u=n(4),s=n(8),m=s.SET_CONTEXT,d=s.ADD_SONG,f=s.CHANGE_PATH,_=s.CHANGE_CURRENT_SONG_INDEX,p=(s.SET_CURRENT_TRACK_TIME,s.DISABLE_SONG_SELECT),E=s.ENABLE_SONG_SELECT,b=s.SET_PAUSED,y=s.CHANGE_VOLUME,O=s.SET_CURRENT_TRACK_DURATION,N=s.ADD_SONG_DURATION,v=s.HIDE_SPINNER;function g(e){return{type:f,payload:e}}function h(e){return{type:_,payload:e}}function j(e){return{type:O,payload:e}}function T(){return{type:E}}function S(e){return{type:b,payload:e}}n(45),n(46);var R=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(u.c)((function(e){return{paused:e.paused,analyzer:e.analyzer}})),o=c.paused,l=c.analyzer,i=Object(a.useCallback)((function(){var a=new Uint8Array(l.frequencyBinCount);l.getByteFrequencyData(a),a[0]>190&&(n.current.style.filter="hue-rotate(".concat(Math.round(360*Math.random()),"deg)")),t.current.style.width=a[0]/5+"%",t.current.style.paddingBottom=a[0]/5+"%",n.current.style.boxShadow="0 0 ".concat(a[0]/3,"px #0f0, inset 0 0 ").concat(a[0]/3,"px #0f0"),e.current=requestAnimationFrame(i)}),[l]);return Object(a.useEffect)((function(){return o?cancelAnimationFrame(e.current):e.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(e.current)}}),[o,i]),r.a.createElement("div",{ref:t,className:"circle"},r.a.createElement("div",{ref:n,className:"circle__before"}),r.a.createElement("div",{className:"circle__after"}))},A=n(2),C=(n(47),n(20)),x=n.n(C);var D=function(e){var t=e.audioRef,n=Object(a.useState)(0),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useRef)(),m=Object(u.c)((function(e){return{duration:e.currentTrackDuration,paused:e.paused}})),d=m.duration,f=m.paused;return Object(a.useEffect)((function(){return f?clearInterval(s.current):s.current=setInterval((function(){l(t.current.currentTime)}),200),function(){clearInterval(s.current)}}),[f,t]),r.a.createElement("div",{onClick:function(e){var n=e.currentTarget.getBoundingClientRect().width;e.stopPropagation(),t.current.currentTime=t.current.duration/n*e.clientX,l(t.current.duration/n*e.clientX)},className:"controls__band"},r.a.createElement("div",{style:{width:t.current?t.current.currentTime/(d/100)+"%":0},className:"controls__current-time"}),r.a.createElement("div",{className:"controls__timer"},r.a.createElement(x.a,{format:"mm:ss / "},1e3*o),r.a.createElement(x.a,{format:"mm:ss"},d?Math.floor(1e3*d):0)))};var w=function(e){var t=e.stopSongHandler,n=e.backwardSongHandler,a=e.clickHandler,c=e.nextSongHandler,o=Object(u.b)(),l=Object(u.c)((function(e){return{paused:e.paused,volume:e.volume}})),i=l.paused,s=l.volume;return r.a.createElement("div",{className:"controls__buttons"},r.a.createElement("i",{className:"fa fa-stop controls__stop","aria-hidden":"true",onClick:t}),r.a.createElement("i",{className:"fa fa-step-backward controls__step-backward","aria-hidden":"true",onClick:n}),r.a.createElement("div",{className:"controls__play-stop",onClick:a},i?r.a.createElement("i",{className:"fa fa-play controls__play","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-pause controls__pause","aria-hidden":"true"})),r.a.createElement("i",{className:"fa fa-step-forward controls__step-forward","aria-hidden":"true",onClick:c}),r.a.createElement("input",{className:"controls__volume",type:"range",min:"0",max:"100",value:s,onChange:function(e){var t;o((t=e.currentTarget.value,{type:y,payload:t}))}}))};var k=function(e){var t=e.open,n=["c","o","n","t","r","o","l","s"],a=Object(A.e)(n.length,{opacity:t?0:1,transform:t?"translateX(100%)":"translateX(0%)",config:A.b.wobbly});return r.a.createElement("div",{className:"controls__title"},a.map((function(e,t){return r.a.createElement(A.a.div,{className:"controls__letter",style:e,key:t},n[t])})))};var I=function(e){var t=e.clickHandler,n=e.connection,c=e.rewindToTheend,o=e.rewindToTheStart,l=e.stop,s=e.audioRef,m=Object(a.useState)(!1),d=Object(i.a)(m,2),f=d[0],_=d[1],p=Object(u.b)(),E=Object(u.c)((function(e){return{currentIndex:e.currentIndex,songSelectDisabled:e.songSelectDisabled,songs:e.songs}})),b=E.currentIndex,y=E.songSelectDisabled,O=E.songs,N=Object(A.d)({rotate:f?"rotate(-45deg)":"rotate(45deg)",height:f?"100px":"0px"}),v=N.rotate,j=N.height,T=function(){o(),l()};return r.a.createElement(A.a.div,{style:{height:j},className:"controls",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"controls__hide-button",onClick:function(){_(!f)}},r.a.createElement(k,{open:f}),r.a.createElement(A.a.span,{style:{transform:v},className:"controls__icon-line controls__icon-line_top"}),r.a.createElement(A.a.span,{style:{transform:v.interpolate((function(e){return"".concat(e," rotate(90deg)")}))},className:"controls__icon-line controls__icon-line_bottom"})),r.a.createElement(D,{audioRef:s}),r.a.createElement(w,{stopSongHandler:T,backwardSongHandler:function(){b>0?y||(n(),p(h(b-1)),p(g(O[b-1].path))):T()},clickHandler:t,nextSongHandler:function(){y||c()}}))};n(29);var G=function(e){var t=e.connect,n=Object(A.d)((function(){return{to:{opacity:0},from:{opacity:1},immediate:!t}})),a=Object(i.a)(n,1)[0];return r.a.createElement(A.a.div,{style:a,className:"icon icon_pause"})};var U=function(){var e=Object(A.d)({to:{opacity:0},from:{opacity:1}});return r.a.createElement(A.a.div,{style:e,className:"icon icon_play"})};n(50);var H=function(e){var t=e.loading;return r.a.createElement("span",{className:"playlist__empty"},t?"loading...":"Playlist is empty")};n(51);var L=function(e){var t=e.duration,n=e.name,a=e.path,c=e.index,o=e.connection,l=e.props,i=Object(u.b)(),s=Object(u.c)((function(e){return{currentIndex:e.currentIndex,songSelectDisabled:e.songSelectDisabled}})),m=s.currentIndex,d=s.songSelectDisabled,f=m===c?"song playlist__song song_active":"song playlist__song";return r.a.createElement(A.a.div,{style:l,className:f,onClick:function(){d||(o(),i(g(a)),i(h(c)))}},r.a.createElement("h3",{className:"song__name"},n),r.a.createElement("span",{className:"song__duration"},t?r.a.createElement(x.a,{format:"mm:ss"},Math.floor(1e3*t)):"--:--"))};var M=function(e){var t=e.connection,n=Object(a.useState)(!1),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(!1),m=Object(i.a)(s,2),f=m[0],_=m[1],p=Object(u.c)((function(e){return e.songs})),E=Object(u.b)(),b=Object(a.useRef)(),y=Object(A.d)({ref:b,width:o?"400px":"0px",opacity:o?0:1}),O=y.width,N=y.opacity,v=Object(a.useRef)(),g=Object(A.f)(o?p:[],(function(e){return e.name}),{ref:v,unique:!0,trail:50,from:{opacity:0,right:"-100%"},enter:{opacity:1,right:"0%"},leave:{opacity:0,right:"0%"}}),h=Object(A.d)({rotate:o?"rotate(45deg)":"rotate(-45deg)"}).rotate;return Object(A.c)(o?[b,v]:[v,b],[0,o?.1:.8]),r.a.createElement(A.a.div,{style:{width:O},className:"playlist",onClick:function(e){return e.stopPropagation()}},r.a.createElement("header",{className:"playlist__header"},r.a.createElement("label",{className:"playlist__download",htmlFor:"download"},r.a.createElement("i",{className:"fa fa-cloud-download playlist__icon","aria-hidden":"true"})),r.a.createElement("input",{style:{display:"none"},name:"download",type:"file",id:"download",onChange:function(e){e.stopPropagation(),Object.values(e.currentTarget.files).forEach((function(e){var t="",n=p.find((function(t){return t.name===e.name}));if("audio/mpeg"!==e.type&&(t="\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430 \u0443 ".concat(e.name," - \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 mp3")),n||t)t&&alert(t);else{var a=new FileReader;a.readAsDataURL(e),a.onloadstart=function(){_(!0)},a.onload=function(){var t;_(!1),E((t={name:e.name,path:a.result},{type:d,payload:t}))},a.onerror=function(){console.log(a.error)}}}))},multiple:!0})),!p.length&&r.a.createElement(H,{loading:f}),r.a.createElement("div",{className:"playlist__songs"},g.map((function(e,n){var a=e.item,c=e.props;return r.a.createElement(L,{key:n,index:n,name:a.name,duration:a.duration,path:a.path,connection:t,props:c})}))),r.a.createElement("div",{className:"playlist__button",onClick:function(){l(!o)}},r.a.createElement(A.a.h3,{style:{opacity:N},className:"playlist__title"},"playlist"),r.a.createElement(A.a.span,{style:{transform:h},className:"playlist__icon-line playlist__icon-line_top"}),r.a.createElement(A.a.span,{style:{transform:h.interpolate((function(e){return"".concat(e," rotate(90deg)")}))},className:"playlist__icon-line playlist__icon-line_bottom"})))},z=n(6);n(52);var B=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),i=Object(a.useRef)(),s=Object(a.useRef)(),m=Object(u.c)((function(e){return{paused:e.paused,analyzer:e.analyzer}})),d=m.paused,f=m.analyzer,_=Object(a.useCallback)((function(){var a=new Uint8Array(f.frequencyBinCount);f.getByteFrequencyData(a),a[0]>190&&(s.current.style.filter="hue-rotate(".concat(Math.round(360*Math.random()),"deg)")),t.current.style.transform="scale(".concat(1+a[0]/25/300,")"),n.current.style.transform="scale(".concat(1+a[0]/25/100,")"),c.current.style.width="".concat(a[40]/2.5,"%"),o.current.style.width="".concat(a[40]/2.5,"%"),l.current.style.height="calc(100% - ".concat(a[40]/2.5,"%)"),i.current.style.height="calc(100% - ".concat(a[40]/2.5,"%)"),s.current.style.boxShadow="0 0 ".concat(a[0]/10,"px #0f0, inset 0 0 ").concat(a[0]/10,"px #0f0"),e.current=requestAnimationFrame(_)}),[f]);return Object(a.useEffect)((function(){return d?cancelAnimationFrame(e.current):e.current=requestAnimationFrame(_),function(){return cancelAnimationFrame(e.current)}}),[d,_]),r.a.createElement("div",{className:"text"},r.a.createElement("div",{ref:t,className:"text__background"}),r.a.createElement("div",{ref:n,className:"text__container"},r.a.createElement("div",{ref:c,className:"text__line text__line_top"}),r.a.createElement("div",{ref:l,className:"text__line text__line_left"}),r.a.createElement("h3",{ref:s,className:"text__title"},"TEXT"),r.a.createElement("div",{ref:o,className:"text__line text__line_bottom"}),r.a.createElement("div",{ref:i,className:"text__line text__line_right"})))};n(53);var P=function(){var e=new Array(80).fill(""),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),o=Object(a.useRef)(!0),l=Object(u.c)((function(e){return{paused:e.paused,analyzer:e.analyzer}})),i=l.paused,s=l.analyzer,m=Object(a.useCallback)((function(){var e=new Uint8Array(s.frequencyBinCount);if(s.getByteFrequencyData(e),e[0]>210&&(c.current.style.filter="brightness(120%)"),e[0]>190&&o.current){o.current=!1;var a=Math.round(360*Math.random());t.current.style.filter="hue-rotate(".concat(a,"deg)"),c.current.style.filter="hue-rotate(".concat(a,"deg)"),setTimeout((function(){o.current=!0}),1e3)}c.current.style.backgroundImage="linear-gradient(45deg, transparent ".concat(60-e[0]/10,"%, rgba(34, 101, 163, .5)), linear-gradient(-45deg, transparent ").concat(60-e[0]/10,"%, rgba(34, 101, 163, .5))"),Array.from(t.current.children).forEach((function(t,n){t.style.transform="rotate(".concat(5*n-45,"deg) translateY(").concat(e[10*n]/2.5,"%)")})),n.current=requestAnimationFrame(m)}),[s]);return Object(a.useEffect)((function(){return i?cancelAnimationFrame(n.current):n.current=requestAnimationFrame(m),function(){return cancelAnimationFrame(n.current)}}),[i,m]),r.a.createElement("div",{className:"spotlight"},r.a.createElement("div",{ref:c,className:"spotlight__background"}),r.a.createElement("div",{className:"spotlight__container"},r.a.createElement("div",{ref:t,className:"spotlight__circle"},e.map((function(e,t){return r.a.createElement("div",{key:t,className:"spotlight__line"})}))),r.a.createElement("div",{className:"spotlight__photo"})))};var F=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(u.b)(),l=Object(u.c)((function(e){return{currentSongIndex:e.currentIndex,path:e.path,songs:e.songs,context:e.context,analyzer:e.analyzer,src:e.src,paused:e.paused,volume:e.volume}})),s=l.currentSongIndex,d=l.path,f=l.songs,_=l.context,E=l.analyzer,b=l.src,y=l.paused,O=l.volume,A=Object(a.useRef)();Object(a.useEffect)((function(){o(function(e,t){return{type:m,payload:{context:e,audioRef:t}}}(new AudioContext,A.current)),setTimeout((function(){o(j(A.current.duration))}),1e3)}),[o]),Object(a.useEffect)((function(){n&&(o({type:p}),x(),setTimeout((function(){o(j(A.current.duration)),o({type:N,payload:s}),o(T())}),1e3))}),[d,o]),Object(a.useEffect)((function(){if(n)return document.addEventListener("keyup",w),function(){document.removeEventListener("keypup",w)}}),[n]),Object(a.useEffect)((function(){A.current.volume=O/100}),[O]);var C=function(){_&&!n&&(_.resume(),b.connect(E),E.connect(_.destination),c(!0))},x=function(){A.current.play(),o(S(!1))},D=function(){A.current.pause(),o(S(!0))},w=function(e){32!==e.keyCode&&void 0!==e.keyCode||(C(),A.current.paused?x():D())};return r.a.createElement("div",{className:"visualizer",onClick:w},r.a.createElement("audio",{src:d,ref:A,onEnded:function(){f.length>s+1?(o(g(f[s+1].path)),o(h(s+1))):(console.log("\u043f\u0435\u0441\u043d\u0438 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c"),o(S(!0)),o(T()))},onCanPlay:function(){return o({type:v})}}),r.a.createElement("div",{className:"visualizer__effect"},r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/audioVisualizer",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(z.a,{path:"/text",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(z.a,{path:"/spotlight",component:P})),y?r.a.createElement(G,{connect:n}):r.a.createElement(U,null)),r.a.createElement(I,{audioRef:A,clickHandler:w,connection:C,rewindToTheend:function(){A.current.currentTime=A.current.duration},rewindToTheStart:function(){A.current.currentTime=0},stop:D}),r.a.createElement(M,{connection:C}))},X=(n(55),n(3)),q=n(33);n(56);var K=function(){return r.a.createElement("div",{className:"menu__logo"},r.a.createElement("i",{className:"fa fa-music menu__logo-icon","aria-hidden":"true"}))};var V=function(e){var t=e.props,n=e.item,c=e.path,o=Object(a.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(A.d)({gradient:s?0:100}).gradient.interpolate((function(e){return"linear-gradient(to left, white 0%, white ".concat(e,"%, gold 0%, gold 100%)")}));return r.a.createElement(l.b,{className:"menu__nav",activeClassName:"menu__nav_active",to:c,exact:!0},r.a.createElement(A.a.div,{key:n.id,className:"menu__item",style:Object(X.a)({},t),onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},r.a.createElement(A.a.span,{style:{backgroundImage:d},className:"menu__link"},n.title)))};var J=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useRef)(),l=Object(A.d)({ref:o,width:n?"40%":"0%",transform:n?"transtaleX(350px)":"translateX(-100px)",from:{width:"0%"}}),u=l.transform,s=l.width,m=Object(q.a)(l,["transform","width"]),d=Object(a.useRef)(),f=Object(A.f)(n?[{title:"circle",path:"/audioVisualizer",id:"0"},{title:"text",path:"/text",id:"1"},{title:"spotlight",path:"/spotlight",id:"2"}]:[],(function(e){return e.title}),{ref:d,unique:!0,from:{opacity:0,transform:"scale(0)"},enter:[{opacity:0,transform:"scale(1)"},{opacity:1,transform:"scale(1)"}],leave:{opacity:0,transform:"scale(0)"},config:{duration:300}}),_=Object(a.useRef)(),p=Object(A.e)(3,{ref:_,transform:n?"scale(0)":"scale(1)",config:{duration:200}});return Object(A.c)(n?[_,o,d]:[d,o,_],[0,n?.1:.2]),r.a.createElement(A.a.div,{style:Object(X.a)(Object(X.a)({},m),{},{width:s}),className:"menu",onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)}},r.a.createElement(K,null),r.a.createElement("div",{className:"menu__icon"},p.map((function(e,t){return r.a.createElement(A.a.div,{className:"menu__line",style:e,key:t})}))),f.map((function(e){var t=e.item,n=e.props;return r.a.createElement(V,{item:t,key:t.id,props:n,path:t.path})})),r.a.createElement(A.a.div,{style:Object(X.a)(Object(X.a)({},m),{},{transform:u,width:s}),className:"menu__blink"}))};n(57);var W=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"spinner__loader"},r.a.createElement("span",null)))};var Y=function(){var e=Object(u.c)((function(e){return e.loaded}));return r.a.createElement("div",{className:"audio-player"},!e&&r.a.createElement(W,null),r.a.createElement(J,null),r.a.createElement(F,null))};var $=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(19),Z=n(13),ee=n(8),te=n(31),ne={context:null,analyzer:null,src:null,songs:[],path:n.n(te).a,currentIndex:-1,currentTime:0,currentTrackDuration:0,songSelectDisabled:!1,paused:!0,volume:100,loaded:!1};var ae=n(32),re=Object(Q.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.SET_CONTEXT:return Object(X.a)(Object(X.a)({},e),{},{context:t.payload.context,analyzer:t.payload.context.createAnalyser(),src:t.payload.context.createMediaElementSource(t.payload.audioRef)});case ee.ADD_SONG:return Object(X.a)(Object(X.a)({},e),{},{songs:[].concat(Object(Z.a)(e.songs),[t.payload])});case ee.CHANGE_PATH:return Object(X.a)(Object(X.a)({},e),{},{path:t.payload});case ee.CHANGE_CURRENT_SONG_INDEX:return Object(X.a)(Object(X.a)({},e),{},{currentIndex:t.payload});case ee.SET_CURRENT_TRACK_TIME:return Object(X.a)(Object(X.a)({},e),{},{currentTime:t.payload});case ee.SET_CURRENT_TRACK_DURATION:return Object(X.a)(Object(X.a)({},e),{},{currentTrackDuration:t.payload});case ee.DISABLE_SONG_SELECT:return Object(X.a)(Object(X.a)({},e),{},{songSelectDisabled:!0});case ee.ENABLE_SONG_SELECT:return Object(X.a)(Object(X.a)({},e),{},{songSelectDisabled:!1});case ee.SET_PAUSED:return Object(X.a)(Object(X.a)({},e),{},{paused:t.payload});case ee.CHANGE_VOLUME:return Object(X.a)(Object(X.a)({},e),{},{volume:t.payload});case ee.HIDE_SPINNER:return Object(X.a)(Object(X.a)({},e),{},{loaded:!0});case ee.ADD_SONG_DURATION:return Object(X.a)(Object(X.a)({},e),{},{songs:e.songs.map((function(n,a){return t.payload===a&&(n.duration=e.currentTrackDuration),n}))});default:return e}}),Object(Q.a)(ae.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:re},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.2633de2b.chunk.js.map