if(!self.define){let s,e={};const c=(c,i)=>(c=new URL(c+".js",i).href,e[c]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=c,s.onload=e,document.head.appendChild(s)}else s=c,importScripts(c),e()})).then((()=>{let s=e[c];if(!s)throw new Error(`Module ${c} didn’t register its module`);return s})));self.define=(i,t)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const r=s=>c(s,a),f={module:{uri:a},exports:o,require:r};e[a]=Promise.all(i.map((s=>f[s]||r(s)))).then((s=>(t(...s),o)))}}define(["./workbox-36728dbf"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css/games/tic-tac-toe.css",revision:"2c22a89a036ff9784022d9b24df965db"},{url:"assets/css/styles.css",revision:"8ac86ccf9aec258ac7b9a101fdc5ee45"},{url:"assets/css/tools/bmi.css",revision:"f5de81ca1c9889d767c1efe17c2a66c8"},{url:"assets/css/tools/calculator.css",revision:"1fcafc4709d145f986bf96a5731a1991"},{url:"assets/img/bmi.png",revision:"17d29826ba59d83afcc0d6bd753f82b3"},{url:"assets/img/calculator.png",revision:"36398c54027281ab0a31817d3dfb6070"},{url:"assets/img/close.svg",revision:"c5f234384de83cb1780f6f7f79c615cd"},{url:"assets/img/tic-tac-toe.png",revision:"4711a221362793b46189555e8cc78002"},{url:"assets/js/games/tic-tac-toe.js",revision:"c3ec36760d83181fbc2dd102aa26821b"},{url:"assets/js/main.js",revision:"639b0cc4adb2f48466b8b316798be916"},{url:"assets/js/tools/bmi.js",revision:"486736a843c0f3f42275f3be5a2f96e7"},{url:"assets/js/tools/calculator.js",revision:"9327749167d92f4a0d18940810ef0264"},{url:"games/index.html",revision:"ff712fd8beaa50c9316d19442984f734"},{url:"games/tic-tac-toe/index.html",revision:"970aab2c3767d4f2ed7e245582745394"},{url:"index.html",revision:"e0a5ee9dc746566d6f69ef9fff6bc919"},{url:"README.md",revision:"c0587e131429ba60c3d8df3f08ecb6a7"},{url:"tools/bmi/index.html",revision:"f5f1814e95f3633cc92f53fa46fb9ce0"},{url:"tools/calculator/index.html",revision:"3fc8f99d2810c26407f64032be25191d"},{url:"tools/index.html",revision:"c241a19529cc5340c40178456910a23d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map