(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1950:function(h,i,e){"use strict";var u=function(){var r=this,g=r.$createElement,l=r._self._c||g;return l("wrapper",{attrs:{id:r.TYPE_GROUPS+"/"+r.id+"/"+r.TYPE_GROUPS_CALLOUT}},[l("w-text",r._b({attrs:{contents:r.title.content}},"w-text",r.settings,!1))],1)},c=[],n=e(1735),d={name:"TitleWrapper",props:{id:{type:[String,Number],required:!0},title:{type:Object,required:!0},settings:{type:Object,required:!0}},data:function(){return{TYPE_GROUPS:n.q,TYPE_GROUPS_CALLOUT:n.s}}},o=d,m=e(6),p=Object(m.a)(o,u,c,!1,null,null,null),f=i.a=p.exports},2165:function(h,i,e){"use strict";var u=function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("wrapper",{attrs:{id:t.TYPE_GROUPS+"/"+t.state.id}},[a("container",{class:t.rowClasses,attrs:{direction:"row"}},[a("column",t._b({},"column",t.imageColumn,!1),[t.settings.images.hidden?t._e():a("image-wrapper",{attrs:{id:t.state.id,image:t.state.image,settings:t.settings.images}})],1),t._v(" "),a("column",t._b({},"column",t.textColumn,!1),[a("container",{attrs:{direction:"col"}},[t.settings.titles.hidden?t._e():a("row",[a("title-wrapper",{attrs:{id:t.state.id,title:t.state.title.content,settings:t.settings.titles}})],1),t._v(" "),t.settings.callouts.hidden?t._e():a("row",[a("callout-wrapper",{attrs:{id:t.state.id,title:t.state.callout,settings:t.settings.callouts}})],1),t._v(" "),t.settings.texts.hidden?t._e():a("row",[a("text-wrapper",{attrs:{id:t.state.id,text:t.state.text,settings:t.settings.texts}})],1),t._v(" "),t.settings.buttons.hidden?t._e():a("row",[a("button-wrapper",{attrs:{id:t.state.id,button:t.state.button,settings:t.settings.buttons}})],1)],1)],1)],1)],1)},c=[],n=e(36),d=e(1735),o=e(1824),m=e(1900),p=e(1901),f=e(1899),r=e(1950),g={name:"TextAndImageStoryLandscapeBase",components:{ImageWrapper:o.a,TitleWrapper:m.a,TextWrapper:p.a,ButtonWrapper:f.a,CalloutWrapper:r.a},props:{state:{type:Object,required:!0},settings:{type:Object,required:!0},mirror:{type:Boolean,default:!1}},data:function(){return{TYPE_GROUPS:d.q}},computed:{imageSize:function(){return this.settings.images.size},rowClasses:function(){return{"direction--mirrored":this.mirror===!0}},imageColumn:function(){var v=this;return{columns:{xs:12,sm:function(){switch(v.settings.images.size){case n.A:return 4;case n.w:return 5;default:return 6}}()},options:{gutterMultiplier:{row:{xs:{bottom:2},sm:{bottom:0}}},offsets:{sm:this.mirror?1:0}}}},textColumn:function(){var v=this;return{columns:{xs:12,sm:function(){switch(v.settings.images.size){case n.A:return 7;case n.w:return 6;default:return 5}}()},options:{offsets:{sm:this.mirror?0:1}}}}}},l=g,y=e(6),s=Object(y.a)(l,u,c,!1,null,"099520db",null),x=i.a=s.exports},3063:function(h,i,e){"use strict";e.r(i);var u=function(){var s=this,x=s.$createElement,t=s._self._c||x;return s.shouldHideBlock?t("div"):t("block",{attrs:{background:s.blockBackground,"text-align":s.resolvedTextAlign}},[t("text-image-story-landscape",{attrs:{state:s.state,settings:s.resolvedSettings,mirror:""}})],1)},c=[],n=e(182),d=e.n(n),o=e(1757),m=e(2165),p=e(1805),f={name:"TextAndImageStoryLandscapeMirror",components:{TextImageStoryLandscape:m.a},extends:p.a,computed:{state:function(){return this.repeatables.length?this.repeatables[0]:Object(o.e)(1)[0]},resolvedSettings:function(){var x={callouts:{tag:"h2"},titles:{tag:"h6",fontFamily:"--ui-font"},buttons:{hidden:!1},images:{aspectRatio:"3_4"}};return d()({},Object(o.d)(),x,this.settings)}}},r=f,g=e(6),l=Object(g.a)(r,u,c,!1,null,null,null),y=i.default=l.exports}}]);
