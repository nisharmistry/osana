(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1725:function(v,e,t){"use strict";var d=function(){var a=this,u=a.$createElement,n=a._self._c||u;return n("w-text",{attrs:{editable:a.editable,contents:a.content,formats:a.textFormats,"font-size":a.fontSize,"font-family":a.fontFamily,align:a.align,color:a.color}})},i=[],T={name:"TextElement",inheritAttrs:!1,props:{fontSize:{type:String,default:"medium"},fontFamily:{type:String,default:""},align:{type:String,default:""},color:{type:String,default:null},content:[String,Object],track:{type:Object,default:function(){return{}}},editable:{type:Boolean,default:!0}},data:function(){return{textFormats:["bold","italic","list","wLink","color","align"]}}},r=T,o=t(6),l=Object(o.a)(r,d,i,!1,null,null,null),c=e.a=l.exports},1735:function(v,e,t){"use strict";t.d(e,"q",function(){return f}),t.d(e,"z",function(){return s}),t.d(e,"y",function(){return g}),t.d(e,"x",function(){return E}),t.d(e,"t",function(){return P}),t.d(e,"w",function(){return p}),t.d(e,"v",function(){return I}),t.d(e,"r",function(){return h}),t.d(e,"u",function(){return m}),t.d(e,"s",function(){return A}),t.d(e,"l",function(){return L}),t.d(e,"o",function(){return U}),t.d(e,"n",function(){return x}),t.d(e,"j",function(){return y}),t.d(e,"m",function(){return O}),t.d(e,"k",function(){return B}),t.d(e,"i",function(){return S}),t.d(e,"p",function(){return G}),t.d(e,"f",function(){return R}),t.d(e,"d",function(){return N}),t.d(e,"h",function(){return D}),t.d(e,"g",function(){return M}),t.d(e,"a",function(){return C}),t.d(e,"b",function(){return j}),t.d(e,"c",function(){return Y}),t.d(e,"e",function(){return F});var d="text-and-image-title",i="text-and-image-text",T="text-and-image-image",r="text-and-image-button",o="text-and-image-callout",l="title",c="text",a="image",u="button",n="callout",f="groups",s="style",g="sectionTitle",E="sectionText",P="image",p="title",I="text",h="button",m="secondaryButton",A="callout",L="images",U="titles",x="texts",y="buttons",O="secondaryButtons",B="callouts",S="layout",G="section-style",R=f+"/:id",N=f+"/:id/"+P,D=f+"/:id/"+p,M=f+"/:id/"+I,C=f+"/:id/"+h,j=f+"/:id/"+m,Y=f+"/:id/"+A,F=f+"/:id(\\d+)/:option?"},1757:function(v,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"c",function(){return c}),t.d(e,"b",function(){return a}),t.d(e,"e",function(){return u}),t.d(e,"d",function(){return n});var d=t(2),i=t.n(d),T=t(36),r=t(1796),o=t(1735),l=function(s){return{id:s,image:{figure:{}},title:{content:r.a.defaultTitle},text:{content:r.a.defaultText},button:{label:r.a.defaultButton},secondaryButton:{label:r.a.defaultSecondaryButton},callout:{content:r.a.defaultCallout}}},c=function(){return{title:r.a.defaultSectionTitle,hidden:!0}},a=function(){return{content:r.a.defaultSectionText,hidden:!0}},u=function(s){return Array(s).fill().map(function(g,E){return l(E+1)})},n=function(){var s;return s={},i()(s,o.l,{hidden:!1,aspectRatio:"1_1",shape:null,size:T.v}),i()(s,o.n,{hidden:!1,fontFamily:"--secondary-font",fontSize:"medium"}),i()(s,o.o,{hidden:!1,tag:"h3",fontFamily:"--primary-font",fontSize:"medium",bold:!1,italic:!1}),i()(s,o.j,{hidden:!0,presetSize:"large",presetStyle:"primary",fullwidthMobile:!0}),i()(s,o.m,{hidden:!0,presetSize:"large",presetStyle:"secondary",fullwidthMobile:!0}),i()(s,o.k,{hidden:!1,tag:"h3",fontSize:"medium"}),s}},1796:function(v,e,t){"use strict";e.a={addGroupLabel:"Add group",sectionTitleLabel:"Section title",sectionTextLabel:"Section description",imageLabel:"Image",titleLabel:"Title",textLabel:"Text",calloutLabel:"Label",designLabel:"Section style",actionButtonLabel:"Button",secondaryButtonLabel:"Secondary button",allCapsLabel:"All CAPS",defaultTitle:"Distinctive and Bold",defaultText:"One of our most popular items. Perfect for everyday use. Exceptional quality and choice.",defaultButton:"View products",defaultSecondaryButton:"Learn more",defaultCallout:"Quality Craftsmanship",defaultSectionTitle:"Live in moments that matter",defaultSectionText:"Simple, affordable, memorable",groupLabel:"Group",groupsItemDuplicate:"Duplicate",groupsItemRemove:"Remove",ftuxLabel:"Add group",ftuxInfo:"Upload images and add descriptive text for this section",ftuxButton:"Add",limitWarning:"You can add up to %(number)s groups in a section",optionsGroupContent:"Content",optionsGroupCustomize:"Customize",setup:{editText:"Edit text to complete section setup"}}},1805:function(v,e,t){"use strict";var d=t(5),i=t.n(d),T=t(182),r=t.n(T),o=t(9),l=t(1718),c=t(1726),a=t(1725),u=t(1729),n=t(1838),f=t(1757),s={components:{TitleElement:c.a,TextElement:a.a,ButtonElement:u.a,ContentStack:n.a},props:{styles:{type:Object,default:function(){return{}}},background:{type:Object,default:function(){return{}}},repeatables:{type:Array,default:function(){return[]}},settings:{type:Object,default:function(){return{}}},columnCount:{type:Number,default:2},textAlign:{type:String,default:null},sectionTitle:{type:Object,default:function(){return{}}},sectionText:{type:Object,default:function(){return{}}}},computed:i()({},Object(o.mapState)(["environment"]),{blockBackground:function(){var A=this.background,L=this.defaultBackground;return i()({},L,A)},resolvedSettings:function(){return r()({},Object(f.d)(),this.settings)},shouldHideBlock:function(){return this.environment.published&&this.repeatables.length===0},resolvedRepeatables:function(){return this.repeatables.map(function(A){return A.secondaryButton?A:i()({},A,{secondaryButton:f.a.secondaryButton})})},resolvedTextAlign:function(){return this.textAlign||this.defaultTextAlign||"left"},resolvedSectionTitle:function(){return r()({},Object(f.c)(),this.sectionTitle)},resolvedSectionText:function(){return r()({},Object(f.b)(),this.sectionText)}}),methods:{resolveProps:function(){return{properties:{styles:this.styles,background:this.background,repeatables:this.repeatables,settings:this.resolvedSettings,textAlign:this.resolvedTextAlign,sectionTitle:this.resolvedSectionTitle,sectionText:this.resolvedSectionText}}},blockContentGutters:l.a}},g=s,E=t(6),P,p,I=Object(E.a)(g,P,p,!1,null,null,null),h=e.a=I.exports},182:function(v,e,t){var d=t(667),i=t(661),T=i(function(r,o,l){d(r,o,l)});v.exports=T},1824:function(v,e,t){"use strict";var d=function(){var s=this,g=s.$createElement,E=s._self._c||g;return E("wrapper",{attrs:{id:s.TYPE_GROUPS+"/"+s.id+"/"+s.TYPE_GROUPS_IMAGE}},[E("image-element",s._b({},"image-element",s.imageProps,!1))],1)},i=[],T=t(5),r=t.n(T),o=t(1759),l=t(1735),c={name:"ImageWrapper",components:{ImageElement:o.a},props:{id:{type:[String,Number],required:!0},image:{type:Object,required:!0},settings:{type:Object,required:!0}},data:function(){return{TYPE_GROUPS:l.q,TYPE_GROUPS_IMAGE:l.t}},computed:{imageProps:function(){var g=this.image,E=g.figure,P=g.link,p=g.alt;return r()({key:E.source,image:E,link:P,alt:p},this.settings)}}},a=c,u=t(6),n=Object(u.a)(a,d,i,!1,null,null,null),f=e.a=n.exports},1899:function(v,e,t){"use strict";var d=function(){var n=this,f=n.$createElement,s=n._self._c||f;return s("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_BUTTON}},[s("button-element",{attrs:{label:n.button.label,link:n.button.link,"preset-size":n.settings.presetSize,"preset-style":n.settings.presetStyle,"preset-color":n.settings.presetColor,"fullwidth-mobile":n.settings.fullwidthMobile}})],1)},i=[],T=t(1729),r=t(1735),o={name:"TextWrapper",components:{ButtonElement:T.a},props:{id:{type:[String,Number],required:!0},button:{type:Object,required:!0},settings:{type:Object,required:!0}},data:function(){return{TYPE_GROUPS:r.q,TYPE_GROUPS_BUTTON:r.r}}},l=o,c=t(6),a=Object(c.a)(l,d,i,!1,null,null,null),u=e.a=a.exports},1900:function(v,e,t){"use strict";var d=function(){var u=this,n=u.$createElement,f=u._self._c||n;return f("wrapper",{attrs:{id:u.TYPE_GROUPS+"/"+u.id+"/"+u.TYPE_GROUPS_TITLE}},[f("w-text",u._b({attrs:{contents:u.title}},"w-text",u.settings,!1))],1)},i=[],T=t(1735),r={name:"TitleWrapper",props:{id:{type:[String,Number],required:!0},title:{type:[String,Object],required:!0},settings:{type:Object,required:!0}},data:function(){return{TYPE_GROUPS:T.q,TYPE_GROUPS_TITLE:T.w}}},o=r,l=t(6),c=Object(l.a)(o,d,i,!1,null,null,null),a=e.a=c.exports},1901:function(v,e,t){"use strict";var d=function(){var n=this,f=n.$createElement,s=n._self._c||f;return s("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_TEXT}},[s("text-element",{attrs:{content:n.text.content,color:n.text.color,"font-family":n.settings.fontFamily,"font-size":n.settings.fontSize,align:n.settings.align}})],1)},i=[],T=t(1725),r=t(1735),o={name:"TextWrapper",components:{TextElement:T.a},props:{id:{type:[String,Number],required:!0},text:{type:[String,Object],required:!0},settings:{type:Object,required:!0}},data:function(){return{TYPE_GROUPS:r.q,TYPE_GROUPS_TEXT:r.v}}},l=o,c=t(6),a=Object(c.a)(l,d,i,!1,null,null,null),u=e.a=a.exports},298:function(v,e,t){var d=t(144),i=t(310),T=t(311);function r(o,l){return T(i(o,l,d),o+"")}v.exports=r},309:function(v,e,t){var d=t(116),i=t(61);function T(r){return i(r)&&d(r)}v.exports=T},368:function(v,e,t){var d=t(42),i=t(130),T=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt;function u(n){if(typeof n=="number")return n;if(i(n))return T;if(d(n)){var f=typeof n.valueOf=="function"?n.valueOf():n;n=d(f)?f+"":f}if(typeof n!="string")return n===0?n:+n;n=n.replace(r,"");var s=l.test(n);return s||c.test(n)?a(n.slice(2),s?2:8):o.test(n)?T:+n}v.exports=u},369:function(v,e,t){var d=t(131),i=t(116),T=t(148),r=t(42);function o(l,c,a){if(!r(a))return!1;var u=typeof c;return(u=="number"?i(a)&&T(c,a.length):u=="string"&&c in a)?d(a[c],l):!1}v.exports=o},661:function(v,e,t){var d=t(298),i=t(369);function T(r){return d(function(o,l){var c=-1,a=l.length,u=a>1?l[a-1]:void 0,n=a>2?l[2]:void 0;for(u=r.length>3&&typeof u=="function"?(a--,u):void 0,n&&i(l[0],l[1],n)&&(u=a<3?void 0:u,a=1),o=Object(o);++c<a;){var f=l[c];f&&r(o,f,c,u)}return o})}v.exports=T},662:function(v,e,t){var d=t(178),i=t(131);function T(r,o,l){(l!==void 0&&!i(r[o],l)||l===void 0&&!(o in r))&&d(r,o,l)}v.exports=T},663:function(v,e){function t(d,i){if(!(i==="constructor"&&typeof d[i]=="function")&&i!="__proto__")return d[i]}v.exports=t},667:function(v,e,t){var d=t(189),i=t(662),T=t(602),r=t(934),o=t(42),l=t(177),c=t(663);function a(u,n,f,s,g){u!==n&&T(n,function(E,P){if(g||(g=new d),o(E))r(u,n,P,f,a,s,g);else{var p=s?s(c(u,P),E,P+"",u,n,g):void 0;p===void 0&&(p=E),i(u,P,p)}},l)}v.exports=a},934:function(v,e,t){var d=t(662),i=t(343),T=t(344),r=t(342),o=t(345),l=t(134),c=t(45),a=t(309),u=t(146),n=t(220),f=t(42),s=t(68),g=t(219),E=t(663),P=t(935);function p(I,h,m,A,L,U,x){var y=E(I,m),O=E(h,m),B=x.get(O);if(B){d(I,m,B);return}var S=U?U(y,O,m+"",I,h,x):void 0,G=S===void 0;if(G){var R=c(O),N=!R&&u(O),D=!R&&!N&&g(O);S=O,R||N||D?c(y)?S=y:a(y)?S=r(y):N?(G=!1,S=i(O,!0)):D?(G=!1,S=T(O,!0)):S=[]:s(O)||l(O)?(S=y,l(y)?S=P(y):(!f(y)||n(y))&&(S=o(O))):G=!1}G&&(x.set(O,S),L(S,O,A,U,x),x.delete(O)),d(I,m,S)}v.exports=p},935:function(v,e,t){var d=t(110),i=t(177);function T(r){return d(r,i(r))}v.exports=T}}]);
