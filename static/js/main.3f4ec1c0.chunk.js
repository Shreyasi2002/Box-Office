(this["webpackJsonpbox-office-app"]=this["webpackJsonpbox-office-app"]||[]).push([[0],{40:function(n,e,t){},49:function(n,e,t){},54:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,l,d,b=t(1),u=t(25),j=t.n(u),x=t(11),p=(t(40),t(4)),f=t(2),h=t(6),m=t(26),g=t.n(m),O=t(33),y=t.n(O),v=t(3),w=t(27),k=t.n(w),S=Object(f.b)(k.a)(i||(i=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n"]))),C=f.b.div(r||(r=Object(v.a)(["\n    width: 300px;\n    height: 100%;\n    margin: 0 15px 40px;\n    justify-content: center;\n\n    .img-wrapper {\n        width: 100%;\n        border-radius: 40px;\n        height: 420px;\n        overflow: hidden;\n        border: 1px solid #ddd;\n\n        img {\n            object-fit: cover;\n            height: 100%;\n            width: 100%;\n        }\n    }\n\n    h1 {\n        margin: 10px 0;\n        font-size: 21px;\n    }\n\n    p {\n        margin: 0;\n    }\n"]))),L=f.b.div(a||(a=Object(v.a)(["\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    background-color: ",";\n    clip-path: polygon(\n        50% 0%,\n        61% 35%,\n        98% 35%,\n        68% 57%,\n        79% 91%,\n        50% 70%,\n        21% 91%,\n        32% 57%,\n        2% 35%,\n        39% 35%\n    );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),P=Object(f.b)(C)(o||(o=Object(v.a)(["\n    .deathday {\n        margin: 0;\n        margin-top: 15px;\n        font-weight: bold;\n    }\n"]))),N=t(0),E=function(n){var e=n.image,t=n.name,i=n.gender,r=n.country,a=n.birthday,o=n.deathday;return Object(N.jsxs)(P,{children:[Object(N.jsx)("div",{className:"img-wrapper",children:Object(N.jsx)("img",{src:e,alt:"actor"})}),Object(N.jsxs)("h1",{children:[t," ",i?"(".concat(i,")"):null]}),Object(N.jsx)("p",{children:r?"Comes from ".concat(r):"No country known"}),a?Object(N.jsxs)("p",{children:["Born ",a]}):null,Object(N.jsx)("p",{className:"deathday",children:o?"Died ".concat(o):"Alive"}),Object(N.jsx)("br",{})]})},A=t.p+"static/media/not-found.1668c579.png",z=function(n){var e=n.data;return Object(N.jsx)(S,{children:e.map((function(n){var e=n.person;return Object(N.jsx)(E,{birthday:e.birthday,name:e.name,image:e.image?e.image.medium:A,country:e.country?e.country.name:null,deathday:e.deathday,gender:e.gender},e.id)}))})},F=t(10),I=t(35),R=["label"],T=f.b.label(c||(c=Object(v.a)(["\n    display: block;\n    position: relative;\n    padding-left: 25px;\n    cursor: pointer;\n    font-size: 15px;\n    user-select: none;\n    font-weight: 700;\n    line-height: 1.65;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\n    input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n    }\n\n    span {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 16px;\n        width: 16px;\n        background-color: #fff;\n        border: 2px solid ",";\n        border-radius: 50%;\n    }\n\n    input:checked ~ span {\n        background-color: #fff;\n        border: 2px solid ",";\n    }\n\n    span:after {\n        content: '';\n        position: absolute;\n        display: none;\n    }\n\n    input:checked ~ span:after {\n        display: block;\n    }\n\n    span:after {\n        top: 4px;\n        left: 4px;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: ",";\n    }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),G=function(n){var e=n.label,t=Object(I.a)(n,R);return Object(N.jsxs)(T,{htmlFor:t.id,children:[e,Object(N.jsx)("input",Object(F.a)(Object(F.a)({},t),{},{type:"radio"})),Object(N.jsx)("span",{})]})},X=Object(b.memo)(G),D=f.b.ul(s||(s=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    margin: 0 0 20px;\n    padding: 0;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n"]))),B=Object(f.b)(x.b)(l||(l=Object(v.a)(["\n    margin: 0 5px;\n    padding: 3px 10px;\n    position: relative;\n    text-decoration: navy;\n    text-align: center;\n    color: ",";\n    &.active {\n        color: ",";\n        &:after {\n            content: '';\n            position: absolute;\n            display: block;\n            height: 2px;\n            left: 0%;\n            bottom: 0;\n            background-color: ",";\n            animation: slide-in 0.5s ease-in forwards;\n            @keyframes slide-in {\n                from {\n                    left: 50%;\n                    width: 0;\n                }\n                to {\n                    left: 0%;\n                    width: 100%;\n                }\n            }\n        }\n    }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),M=[{to:"/",text:"HOME Page"},{to:"/starred",text:"Starred Page"}],U=function(){var n=Object(p.f)();return Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)(D,{children:M.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(B,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})]})},_=Object(b.memo)(U),W=function(n){var e=n.children;return Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{}),e]})},H=Object(f.b)(C)(d||(d=Object(v.a)(["\n    .btns {\n        margin-top: 15px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        a {\n            text-decoration-color: #000;\n            color: #000;\n            &:hover {\n                text-decoration-color: blue;\n                color: blue;\n            }\n        }\n        button {\n            outline: none;\n            border: 1px solid #8e8e8e;\n            border-radius: 15px;\n            padding: 5px 20px;\n            background-color: #fff;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            &:hover {\n                cursor: pointer;\n            }\n        }\n    }\n"]))),V=function(n){var e=n.id,t=n.image,i=n.name,r=n.summary,a=n.onStarClick,o=n.isStarred,c=r?"".concat(r.split(" ").slice(0,30).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(N.jsxs)(H,{children:[Object(N.jsx)("div",{className:"img-wrapper",children:Object(N.jsx)("img",{src:t,alt:"show"})}),Object(N.jsx)("h1",{children:i}),Object(N.jsx)("p",{children:c}),Object(N.jsxs)("div",{className:"btns",children:[Object(N.jsx)(x.b,{to:"/show/".concat(e),children:"Read more"}),Object(N.jsx)("button",{type:"button",onClick:a,children:Object(N.jsx)(L,{active:o})})]}),Object(N.jsx)("br",{})]})},J=Object(b.memo)(V),Y=t(34);function K(n,e){switch(e.type){case"ADD":return[].concat(Object(Y.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function q(n,e,t){var i=Object(b.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),r=Object(h.a)(i,2),a=r[0],o=r[1];return Object(b.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,o]}function Q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return q(K,[],n)}var $,Z,nn,en,tn,rn=function(n){var e=n.data,t=Q(),i=Object(h.a)(t,2),r=i[0],a=i[1];return Object(N.jsx)(S,{children:e.map((function(n){var e=n.show,t=r.includes(e.id),i=Object(b.useCallback)((function(){a(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})}),[t,e.id]);return Object(N.jsx)(J,{id:e.id,name:e.name,image:e.image?e.image.medium:A,summary:e.summary,onStarClick:i,isStarred:t},e.id)}))})},an=t(22),on=t.n(an),cn=t(32),sn="https://api.tvmaze.com";function ln(n){return dn.apply(this,arguments)}function dn(){return(dn=Object(cn.a)(on.a.mark((function n(e){var t;return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(sn).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var bn,un,jn,xn,pn,fn,hn,mn,gn,On,yn,vn,wn,kn,Sn,Cn,Ln,Pn,Nn,En,An,zn,Fn,In=f.b.input($||($=Object(v.a)(["\n    display: block;\n    font-family: 'Roboto', sans-serif;\n    width: 200px;\n    margin: auto;\n    outline: none;\n    padding: 13px 15px;\n    border: 1px solid #dbdbdb;\n    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n    font-size: 14px;\n    border-radius: 12px;\n    color: #8d8d8d;\n\n    &::placeholder {\n        font-weight: 300;\n        color: #8d8d8d;\n    }\n"]))),Rn=f.b.div(Z||(Z=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    div {\n        margin: 0 15px;\n    }\n"]))),Tn=f.b.div(nn||(nn=Object(v.a)(["\n    text-align: center;\n    margin-bottom: 35px;\n\n    button {\n        color: #fff;\n        background-color: ",";\n        margin: auto;\n        padding: 10px 50px;\n        font-size: 15px;\n        border: none;\n        outline: none;\n        border-radius: 32px;\n        box-shadow: 0px 5px 15px -5px #0046d5;\n        &:hover {\n            cursor: pointer;\n        }\n    }\n"])),(function(n){return n.theme.mainColors.blue})),Gn=f.b.div(en||(en=Object(v.a)(["\n    padding: 0 -20px;\n    margin: -45px -75px;\n\n    .image {\n        float: left;\n    }\n"]))),Xn=f.b.div(tn||(tn=Object(v.a)(["\n    opacity: 0;\n    animation: fadeOut 20s;\n\n    @keyframes fadeOut {\n        from {\n            opacity: 10;\n        }\n        to {\n            opacity: 0;\n        }\n    }\n"]))),Dn=f.b.div(bn||(bn=Object(v.a)(["\n    text-align: center;\n    margin: 0 0 40px;\n\n    h1 {\n        color: ",";\n        letter-spacing: 5px;\n        text-transform: uppercase;\n        margin: 0 0 10px;\n        font-size: 90px;\n        font-weight: 9000;\n        text-shadow: 10px 14px 15px 5px #0046d8;\n        font-family: 'MontSerrat';\n\n        transform: translateX(2%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-size: cover;\n        background-position: center;\n\n        background-clip: text;\n        background-image: url('https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg');\n    }\n\n    p {\n        color: ",";\n        margin: 0;\n        font-size: 20px;\n        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n            'Lucida Sans', Arial, sans-serif;\n        padding-left: 5%;\n    }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),Bn=function(n){var e=n.title,t=n.subtitle;return Object(N.jsxs)(Dn,{children:[Object(N.jsx)("h1",{children:Object(N.jsx)("b",{children:e})}),Object(N.jsx)("p",{children:t})]})},Mn=Object(b.memo)(Bn),Un=t.p+"static/media/no_results - sad.d98395d7.png",_n=t.p+"static/media/welcome.6468cbb6.png",Wn=(t(49),function(n){return n&&0===n.length?Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",fontFamily:"monospace"},children:"No Results Found"}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(N.jsx)("img",{alt:"nothing found",src:Un})}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingLeft:"10px",fontFamily:"monospace"},children:"Dont Be Sad! We will find it! ......"})]}):n&&n.length>0?n[0].show?Object(N.jsx)(rn,{data:n}):Object(N.jsx)(z,{data:n}):null}),Hn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(b.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(h.a)(e,2),i=t[0],r=t[1],a=Object(b.useCallback)((function(e){r(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[i,a]}(),e=Object(h.a)(n,2),t=e[0],i=e[1],r=Object(b.useState)(null),a=Object(h.a)(r,2),o=a[0],c=a[1],s=Object(b.useState)("shows"),l=Object(h.a)(s,2),d=l[0],u=l[1],j="shows"===d,x=Object(b.useCallback)((function(n){i(n.target.value)}),[i]),p=function(){ln("/search/".concat(d,"?q=").concat(t)).then((function(n){c(n)}))},f=function(n){13===n.keyCode&&p()},m=Object(b.useCallback)((function(n){u(n.target.value)}),[]);!function(n,e){var t=Object(b.useRef)();Object(b.useEffect)((function(){if(t.current){var i=Object.keys(Object(F.a)(Object(F.a)({},t.current),e)),r={};i.forEach((function(n){t.current[n]!==e[n]&&(r[n]={from:t.current[n],to:e[n]})})),Object.keys(r).length&&console.log("[why-did-you-update]",n,r)}t.current=e}))}("home",{onInputChange:x,onKeyDown:f});var O=y()(),v=O.width,w=O.height;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(Mn,{title:"BOX OFFICE",subtitle:"Are you looking for a movie or an actor?"}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(N.jsx)(Gn,{children:Object(N.jsx)("div",{className:"image",children:Object(N.jsx)("img",{src:_n,alt:"welcome"})})}),Object(N.jsxs)(W,{children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(In,{type:"text",placeholder:"Search for something",onChange:x,onKeyDown:f,value:t}),Object(N.jsxs)(Rn,{children:[Object(N.jsx)("div",{children:Object(N.jsx)(X,{label:"Shows",id:"show-search",value:"shows",checked:j,onChange:m})}),Object(N.jsx)("div",{children:Object(N.jsx)(X,{label:"Actors",id:"actor-search",value:"people",checked:!j,onChange:m})})]}),Object(N.jsxs)(Tn,{children:[Object(N.jsx)("button",{type:"button",onClick:p,children:"Search"}),Object(N.jsx)("br",{})]})]})]})]}),Object(N.jsx)("div",{id:"welcome",children:"Welcome to BOX OFFICE!"}),Object(N.jsx)(Xn,{children:Object(N.jsx)(g.a,{width:v,height:w,opacity:.8,numberOfPieces:100,tweenDuration:1e4})}),Wn(o)]})},Vn=f.b.div(un||(un=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n\n    .cast-item {\n        flex: 1 0 50%;\n        display: flex;\n        margin-bottom: 20px;\n        align-items: center;\n\n        @media only screen and (max-width: 768px) {\n            flex: 1 0 100%;\n        }\n    }\n\n    .pic-wrapper {\n        width: 100px;\n        min-width: 100px;\n        height: 100px;\n        overflow: hidden;\n        border-radius: 70%;\n        img {\n            object-fit: cover;\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    .actor {\n        margin-left: 25px;\n\n        .bold {\n            font-weight: bold;\n        }\n    }\n"]))),Jn=function(n){var e=n.cast;return Object(N.jsx)(Vn,{children:e.map((function(n,e){var t=n.person,i=n.character,r=n.voice;return Object(N.jsxs)("div",{className:"cast-item",children:[Object(N.jsx)("div",{className:"pic-wrapper",children:Object(N.jsx)("img",{src:t.image?t.image.medium:A,alt:"cast-person"})}),Object(N.jsx)("div",{className:"actor",children:Object(N.jsxs)("span",{children:[Object(N.jsx)("span",{className:"bold",children:t.name})," |"," ",i.name," ",r?"| Voice":""]})}),Object(N.jsx)("br",{})]},e)}))})},Yn=f.b.div(jn||(jn=Object(v.a)(["\n    p {\n        margin: 5px 0;\n\n        span {\n            font-weight: bold;\n        }\n    }\n"]))),Kn=function(n){var e=n.status,t=n.premiered,i=n.network,r=n.runtime,a=n.officialSite;return Object(N.jsxs)(Yn,{children:[Object(N.jsxs)("p",{children:["Status: ",Object(N.jsx)("span",{children:e})]}),Object(N.jsxs)("p",{children:["Average Runtime: ",Object(N.jsxs)("span",{children:[r," mins"]})]}),Object(N.jsxs)("p",{children:["Premiered ",Object(N.jsx)("b",{children:t})," ",i?"on ".concat(i.name):null]}),Object(N.jsxs)("p",{children:["Official Site:"," ",Object(N.jsx)("a",{href:a,target:"_blank",children:a?" Click Here ":"N/A"})]})]})},qn=f.b.div(xn||(xn=Object(v.a)(["\n    p {\n        margin: 5px 0;\n    }\n\n    span {\n        font-weight: 700;\n    }\n"]))),Qn=f.b.div(pn||(pn=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .season-item {\n        display: flex;\n        align-items: center;\n        margin: 10px 0;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n\n        .left {\n            flex: 0 0 30%;\n            border-right: 1px solid #b0b0b0;\n            padding-right: 20px;\n        }\n\n        .right {\n            padding-left: 20px;\n            flex: 1;\n        }\n    }\n"]))),$n=function(n){var e=n.seasons;return Object(N.jsxs)(qn,{children:[Object(N.jsxs)("p",{children:["Seasons in total: ",Object(N.jsx)("span",{children:e.length})]}),Object(N.jsxs)("p",{children:["Episodes in total:"," ",Object(N.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(N.jsx)(Qn,{children:e.map((function(n){return Object(N.jsxs)("div",{className:"season-item",children:[Object(N.jsxs)("div",{className:"left",children:[Object(N.jsxs)("p",{children:["Season ",n.number]}),Object(N.jsxs)("p",{children:["Episodes: ",Object(N.jsx)("span",{children:n.episodeOrder})]})]}),Object(N.jsxs)("div",{className:"right",children:["Aired:"," ",Object(N.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},Zn=f.b.div(fn||(fn=Object(v.a)(["\n    display: flex;\n    margin-bottom: 40px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    img {\n        min-width: 250px;\n        width: 300px;\n        max-height: 450px;\n        border: 1px solid #ddd;\n        border-radius: 40px;\n    }\n\n    .text-side {\n        margin-left: 20px;\n        .summary {\n            color: #5f5f5f;\n            line-height: 1.5;\n        }\n\n        .language {\n            color: #5f5f5f;\n            line-height: 1.5;\n        }\n    }\n\n    @media only screen and (max-width: 768px) {\n        flex-wrap: wrap;\n        img {\n            margin-bottom: 20px;\n            margin: auto;\n        }\n        .text-side {\n            margin-left: 0;\n            margin-top: 20px;\n        }\n    }\n"]))),ne=f.b.div(hn||(hn=Object(v.a)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\n    h1 {\n        margin: 0;\n        border-right: 1px solid #ddd;\n        padding-right: 25px;\n        margin-right: 20px;\n        font-size: 35px;\n    }\n\n    div {\n        display: flex;\n        align-items: center;\n        span {\n            margin-left: 10px;\n        }\n    }\n"]))),ee=f.b.div(mn||(mn=Object(v.a)(["\n    display: inline-flex;\n    flex-wrap: wrap;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\n    span {\n        margin: 6px;\n        margin-bottom: 0;\n        color: blue;\n        background-color: #d0c9ff;\n        padding: 3px 13px;\n        border-radius: 20px;\n        font-size: 14px;\n    }\n"]))),te=function(n){var e=n.name,t=n.rating,i=n.summary,r=n.tags,a=n.image,o=n.language;return Object(N.jsxs)(Zn,{children:[Object(N.jsx)("img",{src:a?a.original:A,alt:"show-cover"}),Object(N.jsxs)("div",{className:"text-side",children:[Object(N.jsxs)(ne,{children:[Object(N.jsx)("h1",{children:e}),Object(N.jsxs)("div",{children:[Object(N.jsx)(L,{active:!0}),Object(N.jsx)("span",{children:t.average||"N/A"})]})]}),Object(N.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:i}}),Object(N.jsxs)("div",{className:"language",children:[Object(N.jsx)("b",{style:{color:"black"},children:"Language:"})," ",o,Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"Tags:"})," ",Object(N.jsx)(ee,{children:r.map((function(n,e){return Object(N.jsx)("span",{children:n},e)}))})]})]})]})},ie=f.b.div(gn||(gn=Object(v.a)(["\n    padding: 0 20px;\n\n    @media only screen and (min-width: 516px) {\n        padding: 0 40px;\n    }\n\n    @media only screen and (min-width: 768px) {\n        padding: 0 60px;\n    }\n\n    @media only screen and (min-width: 992px) {\n        padding: 0 80px;\n    }\n"]))),re=f.b.div(On||(On=Object(v.a)(["\n    margin-bottom: 40px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    h2 {\n        margin: 0;\n        margin-bottom: 30px;\n        padding-bottom: 5px;\n        border-bottom: 1px solid #ddd;\n        border-right: 1px;\n        padding-right: 25px;\n        margin-right: 20px;\n        font-size: 22px;\n    }\n"]))),ae=f.b.div(yn||(yn=Object(v.a)(["\n    h3 {\n        display: flex;\n        justify-content: center;\n    }\n    .loading {\n        display: flex;\n        justify-content: center;\n    }\n    .loading::after {\n        content: '';\n        width: 100px;\n        height: 100px;\n        border: 30px solid aliceblue;\n        border-top: 35%;\n        border-top-color: blue;\n        border-radius: 50%;\n        animation: loading 1s ease-in infinite;\n    }\n\n    @keyframes loading {\n        to {\n            transform: rotate(1turn);\n        }\n    } ;\n"]))),oe=t(23),ce=f.b.div(vn||(vn=Object(v.a)(["\n    .slider {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .image {\n        min-width: 250px;\n        max-width: 900px;\n        max-height: 450px;\n        min-height: 240px;\n        border: 1px solid #ddd;\n        border-radius: 40px;\n    }\n\n    .right-arrow {\n        position: absolute;\n        top: 40%;\n        right: 12px;\n        font-size: 3rem;\n        color: #000;\n        z-index: 10;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .left-arrow {\n        position: absolute;\n        top: 40%;\n        left: 12px;\n        font-size: 3rem;\n        color: #000;\n        z-index: 10;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .slide {\n        opacity: 0;\n        transition-duration: 1s ease;\n    }\n\n    .slide.active {\n        opacity: 1;\n        transition-duration: 1s;\n        transform: scale(1.08);\n    }\n\n    @media only screen and (max-width: 768px) {\n        flex-wrap: wrap;\n        .image {\n            margin-bottom: 20px;\n            margin: auto;\n        }\n    }\n    @media only screen and (max-width: 780px) {\n        flex-wrap: wrap;\n        .image {\n            margin-bottom: 20px;\n            margin: auto;\n            display: flex;\n            justify-content: center;\n            max-width: 95%;\n            min-height: 100px;\n            height: unset;\n        }\n    }\n"]))),se=function(n){var e=n.slides,t=Object(b.useState)(0),i=Object(h.a)(t,2),r=i[0],a=i[1],o=e.length,c=e.map((function(n){return n.resolutions.original.url}));return!Array.isArray(e)||e.length<=0?null:Object(N.jsx)(ce,{children:Object(N.jsxs)("section",{className:"slider",children:[1!==o?Object(N.jsx)(oe.a,{className:"left-arrow",onClick:function(){a(0===r?o-1:r-1)}}):null,1!==o?Object(N.jsx)(oe.b,{className:"right-arrow",onClick:function(){a(r===o-1?0:r+1)}}):null,c.map((function(n,e){return Object(N.jsx)("div",{className:e===r?"slide active":"slide",children:e===r&&Object(N.jsx)("img",{alt:"Posters",src:n,className:"image"})},e)}))]})})},le={show:null,isLoading:!0,error:null},de=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(F.a)(Object(F.a)({},n),{},{isLoading:!1,error:e.error});default:return n}},be=function(){var n=Object(p.g)().id,e=Object(b.useReducer)(de,le),t=Object(h.a)(e,2),i=t[0],r=i.show,a=i.isLoading,o=i.error,c=t[1];return Object(b.useEffect)((function(){var e=!0;return ln("/shows/".concat(n,"?embed[]=seasons&embed[]=episodes&embed[]=cast&embed[]=images")).then((function(n){setTimeout((function(){e&&c({type:"FETCH_SUCCESS",show:n})}),1e3)})).catch((function(n){e&&c({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),a?Object(N.jsxs)(ae,{children:[Object(N.jsx)("div",{className:"loading"}),Object(N.jsx)("h3",{style:{fontFamily:"monospace"},children:"Data is being loaded ..."})]}):o?Object(N.jsxs)("div",{style:{display:"flex",fontSize:"18px",justifyContent:"center"},children:["Error Occured : ",o]}):Object(N.jsxs)(ie,{children:[Object(N.jsx)(te,{image:r.image,name:r.name,rating:r.rating,summary:r.summary,language:r.language,tags:r.genres}),Object(N.jsxs)(re,{children:[Object(N.jsx)("h2",{style:{fontSize:"27px"},children:"Details"}),Object(N.jsx)(Kn,{status:r.status,runtime:r.runtime,network:r.network,premiered:r.premiered,officialSite:r.officialSite})]}),Object(N.jsxs)(re,{children:[Object(N.jsx)("h2",{style:{fontSize:"27px"},children:"Images"}),Object(N.jsx)(se,{slides:r._embedded.images})]}),Object(N.jsxs)(re,{children:[Object(N.jsx)("h2",{style:{fontSize:"27px"},children:"Seasons"}),Object(N.jsx)($n,{seasons:r._embedded.seasons})]}),Object(N.jsxs)(re,{children:[Object(N.jsx)("h2",{style:{fontSize:"27px"},children:"Cast"}),Object(N.jsx)(Jn,{cast:r._embedded.cast})]})]})},ue=t.p+"static/media/nothing added.58afb2bd.png",je=(t(54),!1);function xe(){Nn=Math.floor(Sn.width/3),En=Math.floor(Sn.height/3),Ln=3*Nn,Pn=3*En,kn=document.getElementById("canvas"),wn=kn.getContext("2d"),kn.width=Ln,kn.height=Pn,kn.style.border="1px solid black",pe()}function pe(){var n;Cn=[],Fn={x:0,y:0},An=null,zn=null,wn.drawImage(Sn,0,0,Ln,Pn,0,0,Ln,Pn),n="Click to Start Puzzle",wn.fillStyle="#000000",wn.globalAlpha=.5,wn.fillRect(50,Pn-40,Ln-100,40),wn.fillStyle="#FFFFFF",wn.globalAlpha=1,wn.textAlign="center",wn.textBaseline="middle",wn.font="20px monospace",wn.fillText(n,Ln/2,Pn-20),function(){var n,e,t=0,i=0;for(n=0;n<9;n++)(e={}).sx=t,e.sy=i,Cn.push(e),(t+=Nn)>=Ln&&(t=0,i+=En);document.onmousedown=fe}()}function fe(){var n,e;Cn=function(n){for(var e,t,i=n.length;i;e=parseInt(Math.random()*i,10),t=n[--i],n[i]=n[e],n[e]=t);return n}(Cn),wn.clearRect(0,0,Ln,Pn);var t=0,i=0;for(n=0;n<Cn.length;n++)(e=Cn[n]).xPos=t,e.yPos=i,wn.drawImage(Sn,e.sx,e.sy,Nn,En,t,i,Nn,En),wn.strokeRect(t,i,Nn,En),(t+=Nn)>=Ln&&(t=0,i+=En);document.onmousedown=he}function he(n){n.clientX||0===n.clientX?(Fn.x=n.clientX-kn.offsetLeft,Fn.y=n.clientY-kn.offsetTop):(n.offsetX||0===n.offsetX)&&(Fn.x=n.offsetX-kn.offsetLeft,Fn.y=n.offsetY-kn.offsetTop),null!=(An=function(){var n,e;for(n=0;n<Cn.length;n++)if(e=Cn[n],!(Fn.x<e.xPos||Fn.x>e.xPos+Nn||Fn.y<e.yPos||Fn.y>e.yPos+En))return e;return null}())&&(wn.clearRect(An.xPos,An.yPos,Nn,En),wn.save(),wn.globalAlpha=.9,wn.drawImage(Sn,An.sx,An.sy,Nn,En,Fn.x-Nn/2,Fn.y-En/2,Nn,En),wn.restore(),document.onmousemove=me,document.onmouseup=ge)}function me(n){var e,t;for(zn=null,n.clientX||0===n.clientX?(Fn.x=n.clientX-kn.offsetLeft,Fn.y=n.clientY-kn.offsetTop):(n.offsetX||0===n.offsetX)&&(Fn.x=n.offsetX-kn.offsetLeft,Fn.y=n.offsetY-kn.offsetTop),wn.clearRect(0,0,Ln,Pn),e=0;e<Cn.length;e++)(t=Cn[e])!==An&&(wn.drawImage(Sn,t.sx,t.sy,Nn,En,t.xPos,t.yPos,Nn,En),wn.strokeRect(t.xPos,t.yPos,Nn,En),null==zn&&(Fn.x<t.xPos||Fn.x>t.xPos+Nn||Fn.y<t.yPos||Fn.y>t.yPos+En||(zn=t,wn.save(),wn.globalAlpha=.4,wn.fillStyle="#009900",wn.fillRect(zn.xPos,zn.yPos,Nn,En),wn.restore())));wn.save(),wn.globalAlpha=.6,wn.drawImage(Sn,An.sx,An.sy,Nn,En,Fn.x-Nn/2,Fn.y-En/2,Nn,En),wn.restore(),wn.strokeRect(Fn.x-Nn/2,Fn.y-En/2,Nn,En)}function ge(){if(document.onmousemove=null,document.onmouseup=null,null!=zn){var n={xPos:An.xPos,yPos:An.yPos};An.xPos=zn.xPos,An.yPos=zn.yPos,zn.xPos=n.xPos,zn.yPos=n.yPos}!function(){var n,e;for(wn.clearRect(0,0,Ln,Pn),je=!0,n=0;n<Cn.length;n++)e=Cn[n],wn.drawImage(Sn,e.sx,e.sy,Nn,En,e.xPos,e.yPos,Nn,En),wn.strokeRect(e.xPos,e.yPos,Nn,En),e.xPos===e.sx&&e.yPos===e.sy||(je=!1);je&&setTimeout(Oe,1e3)}()}function Oe(){document.onmousedown=null,document.onmousemove=null,document.onmouseup=null,document.body.insertAdjacentHTML("afterend",'<div id="wonGame">CONGRATULATIONS!!!</div>'),pe()}var ye,ve=function(){var n=Q(),e=Object(h.a)(n,1)[0],t=Object(b.useState)(null),i=Object(h.a)(t,2),r=i[0],a=i[1],o=Object(b.useState)(!0),c=Object(h.a)(o,2),s=c[0],l=c[1],d=Object(b.useState)(null),u=Object(h.a)(d,2),j=u[0],x=u[1];return Object(b.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return ln("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){a(n),l(!1)})).catch((function(n){x(n.message),l(!1)}))}else l(!1)}),[e]),Object(N.jsxs)("div",{children:[Object(N.jsx)(Mn,{title:"BOX OFFICE",subtitle:"Are you looking for a movie or an actor?"}),Object(N.jsxs)(W,{children:[s&&Object(N.jsxs)(ae,{children:[Object(N.jsx)("div",{className:"loading"}),Object(N.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"Shows are still Loading ..."})]}),j&&Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:["Error Occured : ",j]}),!s&&!r&&Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center",fontFamily:"monospace",paddingLeft:"40px",textAlign:"center"},children:[Object(N.jsx)("br",{}),"Looks like no shows were added ... ",Object(N.jsx)("br",{}),"You can Try Out This Puzzle in the meantime !",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingLeft:"25px"},onLoad:((Sn=new Image).addEventListener("load",xe,!1),void(Sn.src=ue)),children:Object(N.jsx)("canvas",{id:"canvas"})}),Object(N.jsxs)("div",{style:{color:"darkgray",display:"flex",justifyContent:"center",fontFamily:"monospace",paddingLeft:"40px",textAlign:"center",fontSize:"15px"},children:[Object(N.jsx)("br",{}),"Please note that the above code is not compatible for mobile devices"]}),Object(N.jsx)("br",{})]}),!s&&!j&&r&&Object(N.jsx)(rn,{data:r})]})]})},we=f.b.div(ye||(ye=Object(v.a)(["\n    font-family: 'Montserrat';\n    h1 {\n        font-size: 160px;\n        margin: 10px;\n        font-weight: 900;\n        position: absolute;\n        left: 50%;\n\n        transform: translateX(-50%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-size: cover;\n        background-position: center;\n\n        background-clip: text;\n        background-image: url('https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg');\n    }\n\n    h2 {\n        font-family: sans-serif;\n        color: #000;\n        font-size: 24px;\n        font-weight: 700;\n        text-transform: uppercase;\n        margin-top: 0;\n    }\n\n    a {\n        font-family: 'Montserrat', sans-serif;\n        font-size: 14px;\n        text-decoration: none;\n        text-transform: uppercase;\n        background: #0046d5;\n        display: inline-block;\n        padding: 15px 30px;\n        border-radius: 40px;\n        color: #fff;\n        font-weight: 700;\n        box-shadow: 0px 4px 15px -5px #0046d5;\n        &:hover {\n            cursor: pointer;\n        }\n    }\n    p {\n        font-family: sans-serif;\n        color: #000;\n        font-size: 15px;\n        font-weight: 400;\n        margin-bottom: 20px;\n        margin-top: 0px;\n    }\n\n    .notfound {\n        padding-top: 200px;\n        text-align: center;\n    }\n"]))),ke=t.p+"static/media/Go back.afbdbfac.png",Se={mainColors:{blue:"#0047AB",gray:"#c6c6c6",dark:"#353535"}};var Ce=function(){return Object(N.jsx)(f.a,{theme:Se,children:Object(N.jsxs)(p.c,{children:[Object(N.jsx)(p.a,{exact:!0,path:"/",children:Object(N.jsx)(Hn,{})}),Object(N.jsx)(p.a,{exact:!0,path:"/starred",children:Object(N.jsx)(ve,{})}),Object(N.jsx)(p.a,{exact:!0,path:"/show/:id",children:Object(N.jsx)(be,{})}),Object(N.jsx)(p.a,{children:Object(N.jsxs)(we,{children:[Object(N.jsx)("h1",{children:"Oops!"}),Object(N.jsxs)("div",{className:"notfound",children:[Object(N.jsx)("h2",{children:"404 - Page not found"}),Object(N.jsxs)("p",{children:["The page you are looking for might have been removed,",Object(N.jsx)("br",{})," had its name changed or is temporarily unavailable."]}),Object(N.jsx)("br",{}),Object(N.jsx)("img",{alt:"go back",src:ke}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("a",{href:".",children:"GO TO HOMEPAGE"})]})]})})]})})},Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var Ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};j.a.render(Object(N.jsx)(x.a,{children:Object(N.jsx)(Ce,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/Box-Office",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Box-Office","/service-worker.js");Le?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Pe(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Pe(e,n)}))}}(),Ne()}},[[55,1,2]]]);
//# sourceMappingURL=main.3f4ec1c0.chunk.js.map