(this.webpackJsonpnewreact=this.webpackJsonpnewreact||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n(1),r=n.n(i),o=n(3),s=n.n(o),c=(n(13),n(4)),l=n(5),m=n(7),d=n(6),h=function(e){var a=e.name,n=e.email,i=e.id;return Object(t.jsxs)("div",{className:"tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(t.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(i,"?200x200")}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:a}),Object(t.jsx)("p",{children:n})]})]})},b=function(e){var a=e.robots,n=a.map((function(e,n){return Object(t.jsx)(h,{id:a[n].id,name:a[n].name,email:a[n].email})}));return Object(t.jsx)("div",{children:n})},u=[{id:1,name:"Mickey",username:"Bret",email:"Mickey@april.biz"},{id:2,name:"Antonette",username:"Antonette",email:"Antonette@melissa.tv"},{id:3,name:"Simmba",username:"Samantha",email:"simmba@yesenia.net"},{id:4,name:"Goofy",username:"Karianne",email:"Goofy@kory.org"},{id:5,name:"Lilo",username:"Kamren",email:"Lilo@annie.ca"},{id:6,name:"Chotta Bheem",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Doraemon",username:"Moriah.Stanton",email:"Nobita@karina.biz"},{id:12,name:"Baby Yoda",username:"Starwars.Stanton",email:"groot@yoda.com"}],j=function(e){e.searchfield;var a=e.searchChange;return Object(t.jsx)("div",{className:"pa2",children:Object(t.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a})})},f=function(e){return Object(t.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},g=(n(14),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:u,searchfield:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(t.jsxs)("div",{className:"tc",children:[Object(t.jsx)("h1",{className:"f1",children:"Welcome to Robert Land"}),Object(t.jsx)(j,{searchChange:this.onSearchChange}),Object(t.jsx)(f,{children:Object(t.jsx)(b,{robots:a})})]})}}]),n}(i.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,r=a.getLCP,o=a.getTTFB;n(e),t(e),i(e),r(e),o(e)}))};n(15);s.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(g,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.58560a56.chunk.js.map