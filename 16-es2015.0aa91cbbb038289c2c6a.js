(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Y8v8:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),a=u("oBZk"),h=u("ZZ/e"),b=u("OfWr"),o=u("zRqx");class r{constructor(l,n){this.route=l,this.calendarsServices=n}ngOnInit(){this.route.paramMap.subscribe(l=>this.hatchId=+l.get("hatchId")),this.hatchCalendar=this.calendarsServices.getCalendarFromHatchId(this.hatchId),this.calendarTitle=this.hatchCalendar.title,this.hatch=this.calendarsServices.getHatch(this.hatchId),this.hatchTitle=this.hatch.hatchTitle,this.videos=this.hatch.hatchContentRef.filter(l=>l.hatchContentType===o.a.video),this.photos=this.hatch.hatchContentRef.filter(l=>l.hatchContentType===o.a.photo),this.texts=this.hatch.hatchContentRef.filter(l=>l.hatchContentType===o.a.text),this.audio=this.hatch.hatchContentRef.filter(l=>l.hatchContentType===o.a.audio)}}var c=u("iInd"),s=t.pb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,6,"ion-header",[],null,null,null,a.S,a.o)),t.qb(1,49152,null,0,h.A,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.hb,a.D)),t.qb(3,49152,null,0,h.Bb,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-title",[],null,null,null,a.gb,a.C)),t.qb(5,49152,null,0,h.zb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["hatch-details"])),(l()(),t.rb(7,0,null,null,65,"ion-content",[],null,null,null,a.P,a.l)),t.qb(8,49152,null,0,h.t,[t.h,t.k,t.x],null,null),(l()(),t.rb(9,0,null,0,63,"ion-card",[],null,null,null,a.N,a.f)),t.qb(10,49152,null,0,h.l,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,7,"ion-card-header",[],null,null,null,a.K,a.h)),t.qb(12,49152,null,0,h.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(13,0,null,0,2,"ion-card-title",[],null,null,null,a.M,a.j)),t.qb(14,49152,null,0,h.p,[t.h,t.k,t.x],null,null),(l()(),t.Ib(15,0,["",""])),(l()(),t.rb(16,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.L,a.i)),t.qb(17,49152,null,0,h.o,[t.h,t.k,t.x],null,null),(l()(),t.Ib(18,0,["",""])),(l()(),t.rb(19,0,null,0,53,"ion-card-content",[],null,null,null,a.J,a.g)),t.qb(20,49152,null,0,h.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(21,0,null,0,12,"ion-list",[],null,null,null,a.Y,a.t)),t.qb(22,49152,null,0,h.N,[t.h,t.k,t.x],null,null),(l()(),t.rb(23,0,null,0,10,"ion-list-header",[],null,null,null,a.X,a.u)),t.qb(24,49152,null,0,h.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(25,0,null,0,8,"ion-item",[["style","width: 100%"]],null,null,null,a.V,a.r)),t.qb(26,49152,null,0,h.G,[t.h,t.k,t.x],null,null),(l()(),t.rb(27,0,null,0,1,"ion-icon",[["name","film"],["slot","start"]],null,null,null,a.T,a.p)),t.qb(28,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(29,0,null,0,2,"ion-label",[],null,null,null,a.W,a.s)),t.qb(30,49152,null,0,h.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Videos"])),(l()(),t.rb(32,0,null,0,1,"ion-icon",[["name","add-circle-outline"],["slot","end"]],null,null,null,a.T,a.p)),t.qb(33,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(34,0,null,0,12,"ion-list",[],null,null,null,a.Y,a.t)),t.qb(35,49152,null,0,h.N,[t.h,t.k,t.x],null,null),(l()(),t.rb(36,0,null,0,10,"ion-list-header",[],null,null,null,a.X,a.u)),t.qb(37,49152,null,0,h.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(38,0,null,0,8,"ion-item",[["style","width: 100%"]],null,null,null,a.V,a.r)),t.qb(39,49152,null,0,h.G,[t.h,t.k,t.x],null,null),(l()(),t.rb(40,0,null,0,1,"ion-icon",[["name","image"],["slot","start"]],null,null,null,a.T,a.p)),t.qb(41,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(42,0,null,0,2,"ion-label",[],null,null,null,a.W,a.s)),t.qb(43,49152,null,0,h.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Fotos"])),(l()(),t.rb(45,0,null,0,1,"ion-icon",[["name","add-circle-outline"],["slot","end"]],null,null,null,a.T,a.p)),t.qb(46,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(47,0,null,0,12,"ion-list",[],null,null,null,a.Y,a.t)),t.qb(48,49152,null,0,h.N,[t.h,t.k,t.x],null,null),(l()(),t.rb(49,0,null,0,10,"ion-list-header",[],null,null,null,a.X,a.u)),t.qb(50,49152,null,0,h.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(51,0,null,0,8,"ion-item",[["style","width: 100%"]],null,null,null,a.V,a.r)),t.qb(52,49152,null,0,h.G,[t.h,t.k,t.x],null,null),(l()(),t.rb(53,0,null,0,1,"ion-icon",[["name","document"],["slot","start"]],null,null,null,a.T,a.p)),t.qb(54,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(55,0,null,0,2,"ion-label",[],null,null,null,a.W,a.s)),t.qb(56,49152,null,0,h.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Tekst"])),(l()(),t.rb(58,0,null,0,1,"ion-icon",[["name","add-circle-outline"],["slot","end"]],null,null,null,a.T,a.p)),t.qb(59,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(60,0,null,0,12,"ion-list",[],null,null,null,a.Y,a.t)),t.qb(61,49152,null,0,h.N,[t.h,t.k,t.x],null,null),(l()(),t.rb(62,0,null,0,10,"ion-list-header",[],null,null,null,a.X,a.u)),t.qb(63,49152,null,0,h.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(64,0,null,0,8,"ion-item",[["style","width: 100%"]],null,null,null,a.V,a.r)),t.qb(65,49152,null,0,h.G,[t.h,t.k,t.x],null,null),(l()(),t.rb(66,0,null,0,1,"ion-icon",[["name","mic"],["slot","start"]],null,null,null,a.T,a.p)),t.qb(67,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(68,0,null,0,2,"ion-label",[],null,null,null,a.W,a.s)),t.qb(69,49152,null,0,h.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Audio"])),(l()(),t.rb(71,0,null,0,1,"ion-icon",[["name","add-circle-outline"],["slot","end"]],null,null,null,a.T,a.p)),t.qb(72,49152,null,0,h.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,28,0,"film"),l(n,33,0,"add-circle-outline"),l(n,41,0,"image"),l(n,46,0,"add-circle-outline"),l(n,54,0,"document"),l(n,59,0,"add-circle-outline"),l(n,67,0,"mic"),l(n,72,0,"add-circle-outline")}),(function(l,n){var u=n.component;l(n,15,0,u.calendarTitle),l(n,18,0,u.hatchTitle)}))}function m(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"app-hatch-details",[],null,null,null,d,s)),t.qb(1,114688,null,0,r,[c.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.nb("app-hatch-details",r,m,{},{},[]),x=u("SVse"),q=u("s7LF");class p{}u.d(n,"HatchDetailsPageModuleNgFactory",(function(){return f}));var f=t.ob(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[i.a,k]],[3,t.j],t.v]),t.Ab(4608,x.l,x.k,[t.s,[2,x.t]]),t.Ab(4608,q.m,q.m,[]),t.Ab(4608,h.b,h.b,[t.x,t.g]),t.Ab(4608,h.Fb,h.Fb,[h.b,t.j,t.p]),t.Ab(4608,h.Ib,h.Ib,[h.b,t.j,t.p]),t.Ab(1073742336,x.b,x.b,[]),t.Ab(1073742336,q.l,q.l,[]),t.Ab(1073742336,q.e,q.e,[]),t.Ab(1073742336,h.Db,h.Db,[]),t.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Ab(1073742336,p,p,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);