(this["webpackJsonpline-distribution-express"]=this["webpackJsonpline-distribution-express"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"0":{"name":"carnelian","hsb":[0,87,64],"hex":"#A40606","group":"red"},"1":{"name":"newcolor","hsb":[],"hex":"#cccccc","group":"white"},"11":{"name":"orange-soda","hsb":[11,75,96],"hex":"#F4603E","group":"white"},"34":{"name":"carrot-orange","hsb":[34,87,96],"hex":"#F58B00","group":"oranges"},"47":{"name":"saffron","hsb":[47,77,92],"hex":"#EAC435","group":"yellow"},"54":{"name":"minion-yellow","hsb":[54,82,95],"hex":"#F3DE2C","group":"yellow"},"59":{"name":"maximum-yellow","hsb":[59,72,100],"hex":"#FFFC47","group":"yellows"},"82":{"name":"apple-green","hsb":[82,87,71],"hex":"#7CB518","group":"white"},"89":{"name":"spring-green","hsb":[142,67,96],"hex":"#51F58D","group":"white"},"96":{"name":"maximum-green","hsb":[96,77,55],"hex":"#4B8C20","group":"greens"},"102":{"name":"spring-frost","hsb":[102,72,100],"hex":"#7EFF47","group":"white"},"168":{"name":"caribean-green","hsb":[168,99,91],"hex":"#03CEA4","group":"green"},"172":{"name":"turquoise","hsb":[172,64,92],"hex":"#54EAD6","group":"blues"},"201":{"name":"star-command-blue","hsb":[201,100,75],"hex":"#007CBE","group":"blue"},"206":{"name":"blue-jeans","hsb":[206,79,100],"hex":"#35A7FF","group":"blue"},"211":{"name":"lapis-lazuli","hsb":[211,60,55],"hex":"#38618C","group":"blue"},"251":{"name":"slate-blue","hsb":[251,58,87],"hex":"#735CDD","group":"white"},"257":{"name":"lavender-floral","hsb":[257,40,89],"hex":"#A288E3","group":"purple"},"278":{"name":"eminence","hsb":[278,63,46],"hex":"#5A2B75","group":"purples"},"288":{"name":"dark-orchid","hsb":[288,79,80],"hex":"#AB2ACC","group":"white"},"301":{"name":"patriarch","hsb":[301,100,49],"hex":"#7E007B","group":"white"},"333":{"name":"brillian-rose","hsb":[333,64,100],"hex":"#FF5CA5","group":"purple"},"343":{"name":"brink-prink","hsb":[343,70,100],"hex":"#FF4D80","group":"purples"},"352":{"name":"imperial-red","hsb":[352,91,97],"hex":"#F71735","group":"reds"}}')},,function(e){e.exports=JSON.parse('{"a001":{"name":"Squirrel Zone","members":["m001","m006","m002","m003","m004","m005","m007","m008","m009","m010","m011"]},"b002":{"name":"Squirrel Zone I","members":["m001","m002","m003","m004","m005"]},"a003":{"name":"Squirrel Zone 1.5","members":["m001","m006","m003","m004","m005"]},"a004":{"name":"Squirrel Zone II","members":["m007","m008","m009","m010","m011"]}}')},function(e){e.exports=JSON.parse('{"m001":{"name":"Zachary","color":"blue-jeans"},"m002":{"name":"Leo","color":"caribean-green"},"m003":{"name":"3J","color":"carrot-orange"},"m004":{"name":"Bobak","color":"imperial-red"},"m005":{"name":"Bryan","color":"lavender-floral"},"m006":{"name":"Fuduck","color":"spring-frost"},"m007":{"name":"Nicky","color":"brillian-rose"},"m008":{"name":"Robbie","color":"lapis-lazuli"},"m009":{"name":"Sypher","color":"patriarch"},"m010":{"name":"JQ","color":"maximum-yellow"},"m011":{"name":"Nathan","color":"spring-green"}}')},,,,,function(e,t,c){e.exports=c.p+"static/media/ld-express-logo.cee03cd6.svg"},function(e,t,c){e.exports=c.p+"static/media/ld-express-logo-negative.41eb13f4.svg"},function(e,t,c){e.exports=c(26)},,,,,function(e,t,c){},,,function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),l=c(14),r=c.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c(23);var i=c(1),o=c(3),s=c(15),u=c(4),m=c.n(u),h=c(8),b=c(2),v=c(10),d=c(11),p=c(12),E=c(9),g={HOME:Symbol("HOME"),PRESETS:Symbol("PRESETS"),CREATE:Symbol("CREATE"),DISTRIBUTE:Symbol("DISTRIBUTE")},f={AD_LIBS:"AD_LIBS",CHORUS:"CHORUS",HOOK:"HOOK",LINE:"LINE",PRE_CHORUS:"PRE_CHORUS",RAP:"RAP",VERSE:"VERSE"},M={AD_LIBS:"line-ad-libs",CHORUS:"line-chorus",HOOK:"line-hook",LINE:"line",PRE_CHORUS:"line-pre-chorus",RAP:"line-rap",VERSE:"line-verse"},C=["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],O=function e(t,c){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.LINE,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(E.a)(this,e),this.id=k(),this.memberId=t,this.duration=c,this.category=a,this.clonedFrom=n},y=function(){function e(t,c,a,n){Object(E.a)(this,e),this.id=t,this.name=c,this.key=a,this.color=n,this.duration=0}return Object(p.a)(e,[{key:"addDuration",value:function(e){this.duration+=e}},{key:"subtractDuration",value:function(e){this.duration-=e}},{key:"resetDuration",value:function(){this.duration=0}},{key:"durationInSeconds",get:function(){return Number(Number(this.duration/1e3).toFixed(1))}}]),e}(),z=function(){function e(t,c,a){Object(E.a)(this,e),this.id=t,this.name=c,this.memberIds=a,this.members={},this._keyMemberDict={},this._total=0}return Object(p.a)(e,[{key:"setMembers",value:function(e,t){return this.members=this.memberIds.reduce((function(c,a,n){var l=e[a],r=m.a.find(t,(function(e){return e.name===l.color}));return c[a]=new y(a,l.name,C[n],r),c}),{}),this._keyMemberDict=Object.values(this.members).reduce((function(e,t){return e[t.key]=t.id,e}),{}),this}},{key:"getMemberIdByKey",value:function(e){return this._keyMemberDict[e]}},{key:"getMemberPercentage",value:function(e){var t=this.members[e],c=t.duration>0?100*t.duration/this.total:0;return Number(c.toFixed(1))}},{key:"addMemberDuration",value:function(e,t){return this._total+=t,this.members[e].addDuration(t),this}},{key:"subtractMemberDuration",value:function(e,t){return this._total-=t,this.members[e].subtractDuration(t),this}},{key:"resetMemberDuration",value:function(e){return this._total-=this.members[e].duration,this.members[e].resetDuration(),this}},{key:"total",get:function(){return this._total}},{key:"groupSize",get:function(){return Object.keys(this.members).length||this.memberdIds.length||5}},{key:"boxSize",get:function(){return this.groupSize<=5?this.groupSize:this.groupSize<=7?3:this.groupSize<=8?4:this.groupSize<=10?5:this.groupSize<=12?4:this.groupSize<=15?1:this.groupSize<=16?4:5}}]),e}(),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#b5b59e",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return{backgroundColor:e,color:t>55?"#000000":"#FFFFFF"}},S=function(e){var t=v[e],c=new z(e,t.name,t.members);return c.setMembers(d,h),c},k=function(){var e=0;return function(){return e++,"p".concat(e)}}(),_={screen:g.HOME,palette:m.a.sortBy(h,[function(e){return e.hsb[0]},function(e){return e.hsb[1]}]),presets:function(){var e=Object.entries(v).map((function(e){var t=Object(i.a)(e,2),c=t[0],a=t[1],n=a.members.map((function(e){return Object(b.a)({},d[e])}));return{id:c,name:a.name,groupSize:n.length,members:n}}));return m.a.sortBy(e,[function(e){return e.name}])}(),customPresets:[],activeGroup:null,activeBoxes:{},activePill:null,log:[]},x=Object(s.createGlobalState)(_).useGlobalState,N=c(16),w=c.n(N),H={check:"M109,210c0-6,1-10,5-13l26-26c3-4,8-6,13-6s9,2,12,6l117,116l65-64c3-4,7-6,12-6s10,2,13,6l26,25c4,4,5,8,5,13 c0,6-1,10-5,13L295,378c-4,3-8,5-13,5s-10-2-13-5L114,223C110,219,109,215,109,210z M37,256c0,40,9,77,29,110c20,34,46,60,80,80 c33,20,70,29,110,29s77-9,110-29c34-20,60-46,80-80c20-33,29-70,29-110s-9-77-29-110c-20-34-46-60-80-80c-33-20-70-29-110-29 s-77,9-110,29c-34,20-60,46-80,80C46,179,37,216,37,256z",cog:"M191,264c0-20,7-37,21-52c15-14,32-21,52-21s37,7,52,21c14,15,21,32,21,52s-7,37-21,52c-15,14-32,21-52,21 s-37-7-52-21C198,301,191,284,191,264z M45,233v63c0,3,0,5,2,7c1,2,3,3,6,4l52,8c4,10,8,19,12,26c-7,9-17,22-31,39c-2,2-3,5-3,7 c0,3,1,5,3,7c5,7,14,17,28,31c14,13,23,20,27,20c2,0,5-1,7-3l40-31c8,5,17,8,26,11c3,26,6,44,8,53c1,6,5,8,10,8h64c2,0,5,0,7-2 s3-4,3-6l8-53c9-3,18-6,26-10l40,30c2,2,4,3,7,3s5-1,7-3c24-22,40-38,47-48c2-2,2-4,2-7c0-2,0-4-2-6c-3-4-8-11-14-19 c-7-9-12-16-16-21c5-9,9-19,12-28l52-8c3,0,5-1,6-3c2-2,2-4,2-7v-63c0-3,0-5-2-7c-1-2-3-3-5-4l-53-8c-3-8-7-17-12-26 c8-11,18-24,31-39c2-3,3-5,3-7s-1-4-3-7c-5-7-14-17-28-30c-14-14-23-21-27-21c-2,0-5,1-7,3l-40,31c-8-5-17-8-26-11c-3-26-6-44-8-53 c-1-6-5-8-10-8h-64c-2,0-5,0-7,2s-3,4-3,6l-8,53c-9,3-18,6-26,10l-40-30c-2-2-4-3-7-3s-5,1-7,3c-25,23-41,39-47,49c-2,1-2,3-2,6 c0,2,0,4,2,6c3,4,8,11,14,19c7,9,12,16,16,21c-5,9-9,18-12,28l-52,8c-3,0-5,1-6,3C45,228,45,230,45,233z",default:"M394.4,98.3c16.4,0,26.8,10.8,26.8,26.8v269.8c0,16.4-10.8,26.8-26.8,26.8H125.1c-16,0-26.8-10.8-26.8-26.8 V125.5c0-16,10.8-26.8,26.8-26.8h269.3 M394.4,44.4H125.1c-46.2,0-81.1,35-81.1,81.1v269.8c0,45.8,35,80.7,81.1,80.7h269.8 c45.8,0,81.1-35,81.1-81.1V125.5C475.6,79.3,440.6,44.4,394.4,44.4L394.4,44.4z M196.3,178.6v-32.8c0-10.8-8.6-19.4-19.4-19.4 h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8C187.7,198.5,196.3,189.4,196.3,178.6z M295.6,178.6v-32.8 c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8 C287,198.5,295.6,189.4,295.6,178.6z M394.9,178.6v-32.8c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8 c0,10.8,8.6,19.4,19.4,19.4h32.8C386.2,198.5,394.9,189.4,394.9,178.6z M196.3,276.6v-32.8c0-10.8-8.6-19.4-19.4-19.4h-32.8 c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8C187.7,296,196.3,287.4,196.3,276.6z M295.6,276.6v-32.8 c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8 C287,296,295.6,287.4,295.6,276.6z M394.9,276.6v-32.8c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8 c0,10.8,8.6,19.4,19.4,19.4h32.8C386.2,296,394.9,287.4,394.9,276.6z M196.3,374.6v-32.8c0-10.8-8.6-19.4-19.4-19.4h-32.8 c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8C187.7,394,196.3,385.4,196.3,374.6z M295.6,374.6v-32.8 c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8c0,10.8,8.6,19.4,19.4,19.4h32.8 C287,394,295.6,385.4,295.6,374.6z M394.9,374.6v-32.8c0-10.8-8.6-19.4-19.4-19.4h-32.8c-10.8,0-19.4,8.6-19.4,19.4v32.8 c0,10.8,8.6,19.4,19.4,19.4h32.8C386.2,394,394.9,385.4,394.9,374.6z",disc:"M264,167c54,0,97,43,97,97s-43,97-97,97s-97-43-97-97S210,167,264,167z M264,308c24,0,43-20,43-44 s-19-43-43-43s-44,19-44,43S240,308,264,308z M264,40c124,0,224,100,224,224S388,488,264,488S40,388,40,264S140,40,264,40z  M264,387c68,0,123-55,123-123s-55-123-123-123s-123,55-123,123S196,387,264,387z",duplicate:"M35,118c-7,0-14,2-19,8c-5,5-8,12-8,19v348c0,7,3,14,8,19s12,8,19,8h275c7,0,14-3,19-8s8-12,8-19v-83h156 c7,0,14-2,19-8c5-5,8-12,8-19V191c0-8-2-16-6-25s-8-17-13-22L384,27c-5-5-13-9-22-13s-17-6-25-6H218c-7,0-14,3-19,8s-8,12-8,19v94 c-13-7-25-11-37-11H35z M191,179l85,85h-85V179z M374,69l85,85h-85V69z M318,254l-91-91V45h110v118c0,8,3,15,8,20s12,8,20,8h118 v183H337v-73c0-8-2-16-6-26C328,266,323,259,318,254z M45,483V154h109v119c0,8,3,14,8,20c6,5,12,8,20,8h119v182H45z","floppy-disc":"M374,447H154V337h220V447z M118,447H81V191c0-3,1-6,3-11s4-8,6-10l80-80c2-2,5-4,10-6c4-2,8-3,11-3v119 c0,8,3,14,8,19c5,6,12,8,19,8h165c7,0,14-2,19-8c6-5,8-11,8-19V81h37v366h-37V328c0-8-2-14-8-19c-5-6-12-8-19-8H145c-7,0-14,2-19,8 c-6,5-8,11-8,19V447z M227,182V90c0-2,1-4,3-6s4-3,7-3h54c3,0,5,1,7,3s3,4,3,6v92c0,2-1,4-3,6s-4,3-7,3h-54c-3,0-5-1-7-3 S227,184,227,182z M45,191v265c0,8,2,14,8,19c5,6,11,8,19,8h384c8,0,14-2,19-8c6-5,8-11,8-19V72c0-8-2-14-8-19c-5-6-11-8-19-8H191 c-8,0-16,1-25,5s-17,9-22,14l-80,80c-5,5-10,13-14,22S45,183,45,191z",keyboard:"M44,110c-10,0-18,4-25,11S8,137,8,146v236c0,10,4,19,11,25c7,7,15,11,25,11h440c10,0,18-4,25-11 c7-6,11-15,11-25V146c0-9-4-18-11-25s-15-11-25-11H44 M238,162v51h-51v-51H238 M162,238h51v52h-51V238 M315,162v51h-51v-51H315  M238,238h52v52h-52V238 M392,162v51h-51v-51H392 M315,238h51v52h-51V238 M469,162v51h-51v-51H469 M392,238h51v52h-51V238 M418,366 v-51h51v51H418 M136,366v-51h256v51H136 M59,366v-51h51v51H59 M136,290H85v-52h51V290 M59,213v-51h103v51H59",line:"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M188.5,142.6l119.6-37.3v166.5c0,12.4-1.6,21.8-4.7,28.1c-3.2,6.3-8.5,11.5-16.1,15.6 c-7.6,4.1-16.1,6.2-25.6,6.2c-10.9,0-19.6-3.1-26.2-9.4c-6.5-6.3-9.8-14.4-9.8-24.3c0-10,3.9-18.7,11.6-25.9 c7.7-7.3,17.7-10.9,29.9-10.9c4,0,7.5,0.4,10.6,1.1c3.1,0.7,8,2.5,15,5.4V148.9l-89.4,27.8v125.7c0,12.1-1.6,21.6-4.8,28.3 c-3.2,6.8-8.7,12.1-16.5,16.2c-7.8,4-16.3,6-25.6,6c-10.9,0-19.6-3.1-25.9-9.2c-6.4-6.2-9.5-14.2-9.5-24.1 c0-10.5,3.8-19.4,11.4-26.5c7.6-7.2,17.6-10.7,29.9-10.7c7.8,0,16.5,2.3,26.2,6.9V142.6z","line-ad-libs":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M229.6,95.4l110.6,247.2h-52.8l-16.4-36.8h-83l-16.4,36.8h-52.6L229.6,95.4z M251.8,262.8l-22.1-51.3 l-22.4,51.3H251.8z","line-chorus":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M241.4,358.3c-33.9-0.1-62.8-12-86.7-35.8c-24-24-36.1-53-36.1-86.9c0-33.8,12-62.8,36.1-87 c24.1-24.1,53.1-36.2,86.7-36.2l-0.2,0.6c37.4,0,67.2,16.6,87.2,35.9l-34.7,34.7c-14.6-14.4-32-21.6-52.2-21.6 c-20.4,0-37.8,7.2-52,21.6c-14.4,14.6-21.6,32-21.6,52.2c0,20.3,7.2,37.7,21.6,52.2c14.3,14.3,31.7,21.5,52,21.5 c20.4,0,37.9-7.2,52.3-21.6l34.7,34.7C308.7,342.2,279.2,358.3,241.4,358.3z","line-hook":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M193.1,114.3v96.9h81v-96.9h48.5v242.3h-48.5v-97.1h-81v97.1h-48.5V114.3H193.1z","line-pre-chorus":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M143,283.9V114.3h85.1c23.5,0,43.6,8.3,60.1,24.8c16.7,16.6,25.1,36.7,25.1,60.1c0,23.6-8.4,43.6-25.1,59.8 c-16.7,16.5-36.8,24.8-60.1,24.8h-36.4v72.7H143L143,283.9z M228.1,162.6h-36.4v73l36.4,0.2c19.9,0,36.5-16.7,36.5-36.5 C264.6,179.5,247.9,162.6,228.1,162.6z","line-rap":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M159.2,107.3h79.1c27,0,48.8,10.2,63.4,24.6c14.8,14.7,23.4,28.2,23.4,55v6.3c0,16.3-5.1,31.7-15.3,46.1 c-8.5,11.9-15.2,17-29,22.4l56.4,87.8h-59.5l-69.6-107.2v107.2h-48.7L159.2,107.3z M275,188.5c0-8.8-3.2-16.6-9.6-23.3 c-6.3-6.1-18.3-9.6-30.1-9.6h-27.4v66.9h18.8v0.1H243C260.7,222.6,275,207,275,188.5z","line-verse":"M231.6,463.3c-61.9,0-120-24.1-163.8-67.8C24.1,351.7,0,293.5,0,231.6c0-61.9,24.1-120,67.8-163.8 S169.8,0,231.6,0c61.9,0,120,24.1,163.8,67.8c43.8,43.8,67.8,101.9,67.8,163.8c0,61.9-24.1,120-67.8,163.8 C351.7,439.2,293.5,463.3,231.6,463.3z M231.6,40C126,40,40,126,40,231.6s86,191.6,191.6,191.6s191.6-86,191.6-191.6 S337.3,40,231.6,40z M233.4,372L124.1,124.3h51.6L233.3,257L291,124.3h52.2L233.4,372z",list:"M480,408c0,5-4,9-9,9l0,0l0,0H236l0,0c-5,0-9-4-9-9l0,0l0,0l0,0l0,0v-33l0,0c0-5,4-9,9-9h235l0,0c5,0,9,4,9,9 l0,0V408z M480,331c0,5-4,9-9,9l0,0l0,0H236l0,0c-5,0-9-4-9-9l0,0l0,0l0,0v-32l0,0c0-5,4-10,9-10h235l0,0l0,0c5,0,9,5,9,10V331z  M176,408c0,5-4,9-9,9c-1,0-1,0-1,0H58c0,0,0,0-1,0c-5,0-9-4-9-9V299c0-5,4-10,9-10h110c5,0,9,5,9,10V408z M480,229c0,5-4,9-9,9 l0,0v1H236v-1c-5,0-9-4-9-9l0,0l0,0l0,0l0,0v-32l0,0c0-5,4-9,9-9h235l0,0l0,0c5,0,9,4,9,9V229z M480,153c0,5-4,9-9,9l0,0l0,0H236 l0,0c-5,0-9-4-9-9l0,0l0,0l0,0l0,0v-32v-1c0-5,4-9,9-9h235l0,0l0,0c5,0,9,4,9,9l0,0V153z M176,229c0,5-4,10-9,10c-1,0-1-1-1-1H58 c0,0,0,1-1,1c-5,0-9-5-9-10V120c0-5,4-9,9-9l0,0h110c5,0,9,4,9,9V229z",lock:"M116,199c-7,0-14,4-21,10c-7,7-10,14-10,21v200c0,16,8,28,24,34l31,9c14,5,31,8,49,8h149c19,0,36-3,50-8l31-9 c16-6,24-18,24-34V230c0-7-2-14-7-21c-6-6-12-10-18-10h-52v-35c0-38-8-67-26-87c-17-21-43-31-76-31s-59,10-76,31 c-18,20-26,49-26,87v35H116 M315,153v46H213v-46c0-17,4-31,14-41c9-10,21-15,37-15s28,5,37,15C311,122,315,136,315,153",pencil:"M380,447l-26-26l67-67l26,26v30h-37v37H380z M230,182c0-4,2-7,7-7c1,0,3,1,4,2l155,155c2,2,2,3,2,5 c0,4-2,6-6,6c-2,0-4,0-5-2L232,187C231,185,230,184,230,182z M246,127L127,246l238,237h118V365L246,127z M51,154c0,10,3,19,10,26 l48,47l118-118l-47-48c-7-7-15-10-26-10c-10,0-18,3-26,10l-67,67C54,136,51,144,51,154z","pencil-boxed":"M368,325l-43,43l14,15h16v-28h28v-16L368,325z M250,213c-3,3-3,5,1,9l83,83c3,3,6,3,8,1c3-3,3-6-1-9l-83-83 C255,211,252,210,250,213z M328,410L173,255l82-82l155,155v82H328z M154,237l-26-27c-5-5-8-12-8-19c0-8,3-14,8-20l43-43 c6-5,12-8,20-8c7,0,14,3,19,8l27,26L154,237z M45,127v274c0,23,8,42,24,58s35,24,58,24h274c23,0,42-8,58-24s24-35,24-58V127 c0-23-8-42-24-58s-35-24-58-24H127c-23,0-42,8-58,24S45,104,45,127z","pie-chart":"M301,262L145,418c20,21,43,37,70,48c27,12,56,17,86,17c39,0,76-9,110-29c33-20,60-46,80-80c19-33,29-70,29-110 s-10-77-29-110c-20-34-47-60-80-80c-34-20-71-29-110-29V262z M247,264H26c0,30,6,58,17,85c12,27,28,51,48,71L247,264z M45,227h219 V8c-40,0-77,10-110,29c-34,20-60,47-80,80C54,151,45,188,45,227z","plus-circle":"M136,282v-36c0-5,2-10,5-13c4-4,8-6,13-6h73v-73c0-5,2-9,6-13c3-3,8-5,13-5h36c5,0,10,2,13,5c4,4,6,8,6,13v73 h73c5,0,9,2,13,6c3,3,5,8,5,13v36c0,5-2,10-5,13c-4,4-8,6-13,6h-73v73c0,5-2,9-6,13c-3,3-8,5-13,5h-36c-5,0-10-2-13-5 c-4-4-6-8-6-13v-73h-73c-5,0-9-2-13-6C138,292,136,287,136,282z M45,264c0,40,9,77,29,110c20,34,46,60,80,80c33,20,70,29,110,29 s77-9,110-29c34-20,60-46,80-80c20-33,29-70,29-110s-9-77-29-110c-20-34-46-60-80-80c-33-20-70-29-110-29s-77,9-110,29 c-34,20-60,46-80,80C54,187,45,224,45,264z",refresh:"M468 210c0-1 0-1 0-2-12-51-38-92-77-124-38-32-84-47-136-47-28 0-55 5-81 15-26 11-49 26-69 45l-37-37c-4-3-8-5-13-5-5 0-9 2-13 5-4 4-5 8-5 13l0 128c0 5 1 9 5 13 4 4 8 5 13 5l128 0c5 0 9-1 13-5 3-4 5-8 5-13 0-5-2-9-5-13l-39-39c13-12 28-22 46-29 17-7 35-10 53-10 26 0 49 6 71 18 23 13 40 30 54 51 2 4 7 15 15 34 1 4 4 6 8 6l55 0c3 0 5 0 7-2 1-2 2-4 2-7z m7 229l0-128c0-5-1-9-5-13-4-4-8-5-13-5l-128 0c-5 0-9 1-13 5-3 4-5 8-5 13 0 5 2 9 5 13l40 39c-28 26-62 39-100 39-26 0-49-6-71-18-23-13-40-30-54-51-2-4-7-15-15-34-1-4-4-6-8-6l-57 0c-3 0-5 0-7 2-1 2-2 4-2 7l0 2c12 51 38 92 77 124 39 32 85 47 137 47 28 0 55-5 81-15 26-11 50-26 70-45l37 37c4 3 8 5 13 5 5 0 9-2 13-5 4-4 5-8 5-13z",trash:"M311,393V192c0-3,1-5,2-7c2-1,4-2,7-2h18c3,0,5,1,7,2c2,2,2,4,2,7v201c0,3,0,5-2,7c-2,1-4,2-7,2h-18 c-3,0-5-1-7-2C312,398,311,396,311,393z M238,393V192c0-3,1-5,2-7c2-1,4-2,7-2h18c3,0,5,1,7,2c1,2,2,4,2,7v201c0,3-1,5-2,7 c-2,1-4,2-7,2h-18c-3,0-5-1-7-2C239,398,238,396,238,393z M165,393V192c0-3,0-5,2-7c2-1,4-2,7-2h18c3,0,5,1,7,2c1,2,2,4,2,7v201 c0,3-1,5-2,7c-2,1-4,2-7,2h-18c-3,0-5-1-7-2C165,398,165,396,165,393z M320,110H192l14-34c1-1,3-2,5-3h90c2,1,4,2,5,3L320,110z  M55,119v18c0,3,1,5,2,7c2,1,4,2,7,2h27v271c0,16,5,30,14,41c9,12,20,17,32,17h238c12,0,23-5,32-16s14-25,14-41V146h27c3,0,5-1,7-2 c1-2,2-4,2-7v-18c0-3-1-5-2-7c-2-1-4-2-7-2h-88l-20-48c-3-7-8-13-16-18c-7-5-15-7-22-7h-92c-7,0-15,2-22,7c-8,5-13,11-16,18l-20,48 H64c-3,0-5,1-7,2C56,114,55,116,55,119z"};var V=function(e){var t,c=e.type,a=e.size,l=void 0===a?"12":a,r=e.inline,i=void 0!==r&&r,o=e.inverted,s=void 0!==o&&o,u=e.iconButton,m={svg:{display:"inline-block",verticalAlign:"middle",margin:i?"0 3px":0,transform:void 0!==u&&u?"translate(-5px, -2px)":"translateY(-2px)"},path:{fill:s?"#fdfffc":"#282c34"}};return n.a.createElement("svg",{title:c,style:m.svg,width:"".concat(l,"px"),height:"".concat(l,"px"),viewBox:"0 0 520 520"},n.a.createElement("path",{style:m.path,d:null!==(t=null===H||void 0===H?void 0:H[c])&&void 0!==t?t:H.default,className:"icon-".concat(c),"data-testid":"icon-path"},n.a.createElement("title",null,c)))};var D=function(){var e=x("screen"),t=Object(i.a)(e,2),c=t[0],l=t[1],r=Object(a.useCallback)((function(){c!==g.PRESETS&&l(g.PRESETS)}),[l,c]),o=Object(a.useCallback)((function(){c!==g.CREATE&&l(g.CREATE)}),[l,c]);return n.a.createElement("header",{className:"header"},n.a.createElement("button",{className:"header__btn",onClick:r},n.a.createElement(V,{type:"list",inline:!0,inverted:!0})," Presets"),n.a.createElement("img",{src:w.a,className:"header__logo",alt:"logo"}),n.a.createElement("button",{className:"header__btn",onClick:o},n.a.createElement(V,{type:"pencil-boxed",inline:!0,inverted:!0}),"Create"))},I=c(17),B=c.n(I);var L=function(){return n.a.createElement("main",{className:"content home"},n.a.createElement("img",{src:B.a,className:"home__logo",alt:"logo"}),n.a.createElement("p",null,"Select a preset or create a new set to start distributing"))};var R=function(){var e=x("palette"),t=Object(i.a)(e,1)[0];return n.a.createElement("main",{className:"content create"},n.a.createElement("h3",null,"Color Palette"),n.a.createElement("ul",{className:"color-palette"},t.map((function(e){return n.a.createElement("li",{className:"color",key:e.name,style:j(e.hex,e.hsb[2])},n.a.createElement("span",{className:"color__name"},e.name))}))))};var F=function(){return n.a.createElement("main",{className:"content create"},n.a.createElement("h2",null,"Create"),n.a.createElement("p",null,"TBD"),n.a.createElement(R,null))};var P=function(){var e=x("screen"),t=Object(i.a)(e,2)[1],c=x("activeGroup"),l=Object(i.a)(c,2),r=l[0],o=l[1],s=x("presets"),u=Object(i.a)(s,1)[0],m=x("customPresets"),h=Object(i.a)(m,1)[0],b=x("log"),v=Object(i.a)(b,2)[1],d=Object(a.useCallback)((function(e){var c=e.target.id;c&&c!==(null===r||void 0===r?void 0:r.id)&&(o(S(e.target.id)),v([])),t(g.DISTRIBUTE)}),[r,t,o,v]);return n.a.createElement("main",{className:"content preset"},n.a.createElement("h2",null,"Presets"),n.a.createElement("p",null,"Select the group preset you want to use:"),n.a.createElement("ul",{className:"presets-list"},u.map((function(e){return n.a.createElement("li",{key:e.id,className:"preset-item"},n.a.createElement("button",{className:"preset-button",id:e.id,onClick:d},e.name," (",e.groupSize," members)"))}))),n.a.createElement("h3",null,"Custom Presets"),h.length>0?n.a.createElement("ul",{className:"presets-list"},u.map((function(e){return n.a.createElement("li",{key:e.id,className:"ha"},e.name," (",e.groupSize,")")}))):n.a.createElement("p",null,"You have no custom presets saved on this browser."))};var A=function(){var e=x("activeGroup"),t=Object(i.a)(e,1)[0],c=x("activeBoxes"),a=Object(i.a)(c,1)[0];return n.a.createElement("h3",{className:"current-action"},function(e,t){var c=e.length;if(0===c)return"-";var a=e.map((function(e){var c,a,n=e.startsWith("box-")?function(e){return e.substring("box-id-".length)}(e):e;return null!==(c=null===(a=t[n])||void 0===a?void 0:a.name)&&void 0!==c?c:"Unknown"})).sort();return 1===c?"".concat(a[0]," is singing."):"".concat(a.join(", ")," are singing")}(Object.keys(a),t.members))};var T=function(){var e=x("activeGroup"),t=Object(i.a)(e,1)[0];return n.a.createElement("ul",{className:"progress-bar"},Object.values(t.members).map((function(e){var c="bar-".concat(e.id),a=t.getMemberPercentage(e.id);return n.a.createElement("li",{key:c,className:"bar",style:Object(b.a)({},j(e.color.hex,e.color.hsb[2]),{width:"".concat(Math.round(a),"%"),transition:"width 0.5s"})},a>5?"".concat(a,"%"):"")})))},U=c(5);var G=function(){var e=x("activeGroup"),t=Object(i.a)(e,1)[0],c=x("activeBoxes"),l=Object(i.a)(c,2),r=l[0],s=l[1],u=x("log"),m=Object(i.a)(u,2)[1],h=Object(a.useState)({}),v=Object(i.a)(h,2),d=v[0],p=v[1],E=Object(a.useCallback)((function(e){s((function(t){return Object(b.a)({},t,Object(o.a)({},e,Date.now()))}))}),[s]),g=Object(a.useCallback)((function(e){var t=r[e],c=Date.now()-t;m((function(t){return[].concat(Object(U.a)(t),[new O(e,c)])})),s((function(t){var c=Object(b.a)({},t);return delete c[e],c}))}),[s,r,m]),f=Object(a.useCallback)((function(e){var t=e.target.id||e.target.parentNode.id;"mousedown"===e.type?E(t):g(t)}),[E,g]),M=Object(a.useCallback)((function(e){var c=e.key,a=t.getMemberIdByKey(c);a&&void 0===d[c]&&(p((function(e){return Object(b.a)({},e,Object(o.a)({},c,!0))})),E(a))}),[d,t,E]),C=Object(a.useCallback)((function(e){var c=e.key,a=t.getMemberIdByKey(c);a&&d[c]&&(p((function(e){var t=Object(b.a)({},e);return delete t[c],t})),g(a))}),[d,p,t,g]);return Object(a.useEffect)((function(){return window.addEventListener("keydown",M),window.addEventListener("keyup",C),function(){window.removeEventListener("keydown",M),window.removeEventListener("keyup",C)}})),n.a.createElement("ul",{className:"boxes"},Object.values(t.members).map((function(e){var c="box-".concat(e.id);return n.a.createElement("li",{key:c,id:"box-id-".concat(e.id),className:"box box--".concat(t.boxSize),style:j(e.color.hex,e.color.hsb[2]),onMouseDown:f,onMouseUp:f},n.a.createElement("span",{className:"box__key"},e.key),n.a.createElement("span",{className:"box__name"},e.name),n.a.createElement("span",{className:"box__duration"},e.durationInSeconds,"s"))})))};var J=function(e){var t,c,l,r=e.pill,o=x("activeGroup"),s=Object(i.a)(o,2),u=s[0],h=s[1],b=x("log"),v=Object(i.a)(b,2)[1],d=x("activePill"),p=Object(i.a)(d,2)[1],E=Object(a.useCallback)((function(){p(r)}),[r,p]),g=Object(a.useCallback)((function(e){var t=new O("",r.duration,r.category,r.id);v((function(e){return[].concat(Object(U.a)(e),[t])}))}),[r,v]),f=Object(a.useCallback)((function(){h((function(e){return e.subtractMemberDuration(r.memberId,r.duration)})),v((function(e){return m.a.remove(Object(U.a)(e),(function(e){return e.id!==r.id}))}))}),[v,r,h]),C=u.members[r.memberId],y=Boolean(r.cloneFrom)?"pill--copy":"";return n.a.createElement("li",{className:"pill ".concat(y),style:j(null===C||void 0===C||null===(t=C.color)||void 0===t?void 0:t.hex,null===C||void 0===C||null===(c=C.color)||void 0===c?void 0:c.hsb[2])},n.a.createElement("span",{className:"pill__icon pill__icon--category",title:r.category},n.a.createElement(V,{type:M[r.category]})),(null===C||void 0===C?void 0:C.name)?n.a.createElement("span",{className:"pill__label"},null!==(l=null===C||void 0===C?void 0:C.name)&&void 0!==l?l:"[Assign]"," ",n.a.createElement("span",{className:"pill__timestamp"},"(",r.duration,"ms)")):n.a.createElement("span",{className:"pill__label"},n.a.createElement("button",{className:"pill__assign-button",onClick:E},"[Assign]"),n.a.createElement("span",{className:"pill__timestamp"},"(",r.duration,"ms)")),n.a.createElement("button",{className:"pill__icon pill__icon--button",onClick:E,title:"Edit Pill"},n.a.createElement(V,{type:"pencil",iconButton:!0})),n.a.createElement("button",{className:"pill__icon pill__icon--button",onClick:g,title:"Duplicate Pill"},n.a.createElement(V,{type:"duplicate",iconButton:!0})),n.a.createElement("button",{className:"pill__icon pill__icon--button",onClick:f,title:"Delete Pill"},n.a.createElement(V,{type:"trash",iconButton:!0})))};var q=function(){var e=x("activeGroup"),t=Object(i.a)(e,2)[1],c=x("log"),l=Object(i.a)(c,1)[0];return Object(a.useEffect)((function(){var e,c=null!==(e=l[l.length-1])&&void 0!==e?e:{},a=c.duration,n=void 0===a?0:a,r=c.memberId;r&&t((function(e){return e.addMemberDuration(r,n)}))}),[l,t]),n.a.createElement("ul",{className:"log"},Object(U.a)(l).reverse().map((function(e){return n.a.createElement(J,{pill:e,key:e.id})})))};var K=function(){var e,t,c,l=x("activeGroup"),r=Object(i.a)(l,2),o=r[0],s=r[1],u=x("log"),m=Object(i.a)(u,2)[1],h=x("activePill"),v=Object(i.a)(h,2),d=v[0],p=v[1],E=Object(a.useState)([d.memberId,d.duration]),g=Object(i.a)(E,1)[0],C=Object(a.useCallback)((function(){p(null)}),[p]),O=Object(a.useCallback)((function(){m((function(e){return e.map((function(e){return e.id===d.id?Object(b.a)({},d):e}))})),s((function(e){return g[0]&&e.subtractMemberDuration(g[0],g[1]),e.addMemberDuration(d.memberId,d.duration)})),p(null)}),[d,g,m,p,s]),y=Object(a.useCallback)((function(e){p((function(t){return Object(b.a)({},t,{category:e.target.value})}))}),[p]),z=Object(a.useCallback)((function(e){p((function(t){return Object(b.a)({},t,{memberId:e.target.value})}))}),[p]),S=Object(a.useCallback)((function(e){p((function(t){return Object(b.a)({},t,{duration:+e.target.value})}))}),[p]),k=o.members[d.memberId]||{};return n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"edit-widget"},n.a.createElement("h3",null,"Edit Pill"),n.a.createElement("div",{className:"pill-demo",style:j(null===k||void 0===k||null===(e=k.color)||void 0===e?void 0:e.hex,null===k||void 0===k||null===(t=k.color)||void 0===t?void 0:t.hsb[2])},n.a.createElement("span",{className:"pill-demo__category-icon"},n.a.createElement(V,{type:M[d.category],size:"30"})),n.a.createElement("span",{className:"pill-demo__info"},n.a.createElement("span",{className:"pill-demo__name"}," ",null!==(c=null===k||void 0===k?void 0:k.name)&&void 0!==c?c:"?"," "),n.a.createElement("span",{className:"pill-demo__timestamp"},"(",d.duration,"ms)"))),n.a.createElement("label",{htmlFor:"category"},"Song Part"),n.a.createElement("select",{name:"category",id:"category",onChange:y,value:d.category},Object.values(f).map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))),n.a.createElement("label",{htmlFor:"member"},"Member"),n.a.createElement("select",{name:"member",id:"member",onChange:z,value:d.memberId},n.a.createElement("option",{value:"",disabled:!0},"[Assign member]"),Object.values(o.members).map((function(e){return n.a.createElement("option",{key:"select-".concat(e.id),value:e.id},e.name)}))),n.a.createElement("label",{htmlFor:"member"},"Duration"),n.a.createElement("input",{type:"number",min:"0",onChange:S,value:d.duration}),n.a.createElement("div",{className:"edit-widget__buttons"},n.a.createElement("button",{className:"edit-widget__button",onClick:C},"Cancel"),n.a.createElement("button",{className:"edit-widget__button",onClick:O,disabled:!Boolean(d.memberId)},n.a.createElement(V,{type:"floppy-disc",inline:!0})," Save"))))};var Z,W=function(){var e=x("activeGroup"),t=Object(i.a)(e,2),c=t[0],l=t[1],r=x("log"),o=Object(i.a)(r,2)[1],s=x("activePill"),u=Object(i.a)(s,1)[0],m=Object(a.useCallback)((function(){o([]),l((function(e){return S(e.id)}))}),[o,l]);return n.a.createElement("main",{className:"content distribute"},n.a.createElement("h1",null,"Distribute - ",c.name),n.a.createElement("nav",{className:"distribute-nav"},n.a.createElement("button",{className:"distribute-nav__button",onClick:m},n.a.createElement(V,{type:"refresh",inline:!0})," Reset"),n.a.createElement("button",{className:"distribute-nav__button"},n.a.createElement(V,{type:"pie-chart",inline:!0})," Results")),n.a.createElement(A,null),n.a.createElement(T,null),n.a.createElement(G,null),n.a.createElement(q,null),Boolean(u)&&n.a.createElement(K,null))},Y=(Z={},Object(o.a)(Z,g.CREATE,n.a.createElement(F,null)),Object(o.a)(Z,g.DISTRIBUTE,n.a.createElement(W,null)),Object(o.a)(Z,g.HOME,n.a.createElement(L,null)),Object(o.a)(Z,g.PRESETS,n.a.createElement(P,null)),Z);var Q=function(){var e=x("screen"),t=Object(i.a)(e,1)[0];return n.a.createElement("div",{className:"container"},n.a.createElement(D,null),Y[t])};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.0c3f75b0.chunk.js.map