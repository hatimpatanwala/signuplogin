(window.webpackJsonpsignuplogin=window.webpackJsonpsignuplogin||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),c=a(4),s=(a(24),a(25),a(7)),m=a(3);a(26);var u=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),i=u[0],p=u[1],g=Object(n.useState)(""),b=Object(m.a)(g,2),E=b[0],h=b[1],d=Object(s.f)();return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"admin@admin.com"==a&&"01234567"==i?d.push("/login"):h("Details do not match")}},l.a.createElement("h3",null,"LogIn Page"),l.a.createElement("p",null,E),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",value:a,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Number"),l.a.createElement("input",{type:"number",className:"form-control num",placeholder:"Enter Mobile Number",value:i,onChange:function(e){p(e.target.value)}})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),l.a.createElement("p",{className:"forgot-password text-right"},l.a.createElement(c.b,{to:"https://hatimpatanwala.github.io/signuplogin/forgotpass"},"Forgot Password?")),l.a.createElement("p",{className:"forgot-password "},l.a.createElement(c.b,{to:"https://hatimpatanwala.github.io/signuplogin/signup"},"SignUp")))};var i=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],p=Object(n.useState)(""),g=Object(m.a)(p,2),b=g[0],E=g[1],h=Object(n.useState)(""),d=Object(m.a)(h,2),f=d[0],v=d[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v("Successfully registered check console "),console.log({email:a}),console.log({name:u}),console.log({password:b})}},l.a.createElement("h3",null,"Sign Up"),l.a.createElement("p",null,f," "),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Name",value:u,onChange:function(e){i(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",value:a,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",value:b,onChange:function(e){E(e.target.value)}})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",l.a.createElement(c.b,{to:"https://hatimpatanwala.github.io/signuplogin/"},"Login")))},p=a(13);var g=function(){var e,t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),i=u[0],g=u[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),h=E[0],d=E[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r==i?(d("Password Changed"),o(""),g("")):d("Password do not match")}},l.a.createElement("h3",null,"Reset Password"),l.a.createElement("p",null,h),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"New Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter New Password",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",(e={type:"password",className:"form-control num",placeholder:"Enter Confirm Password",value:i},Object(p.a)(e,"value",i),Object(p.a)(e,"onChange",(function(e){return g(e.target.value)})),e))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),l.a.createElement("p",{className:"forgot-password text-right "},l.a.createElement(c.b,{to:"https://hatimpatanwala.github.io/signuplogin/"},"Login"))))};var b=function(){var e=Object(s.f)();return l.a.createElement("div",null,l.a.createElement("h1",null,"Weclome you have successfully logged in"),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(t){t.preventDefault(),e.push("https://hatimpatanwala.github.io/signuplogin/")}},"Logout"))};var E=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"https://hatimpatanwala.github.io/signuplogin/"},l.a.createElement(u,null)),l.a.createElement(s.a,{path:"https://hatimpatanwala.github.io/signuplogin//signup"},l.a.createElement(i,null)),l.a.createElement(s.a,{path:"https://hatimpatanwala.github.io/signuplogin//forgotpass"},l.a.createElement(g,null)),l.a.createElement(s.a,{path:"https://hatimpatanwala.github.io/signuplogin//login"},l.a.createElement(b,null)))))))};o.a.render(l.a.createElement(c.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6ab45d23.chunk.js.map