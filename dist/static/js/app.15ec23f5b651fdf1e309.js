webpackJsonp([1],{"3DgZ":function(t,s){},"5OHe":function(t,s){},"6xHT":function(t,s){},GuuD:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("xd7I"),i=e("2bvH"),o=e("3XdE"),n={computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}},props:["size","score"]},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("div",{staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var c=e("C7Lr")(n,r,!1,function(t){e("GuuD")},"data-v-3951d58c",null).exports,l={data:function(){return{detailShow:!1,classMap:["decrease","discount","special","invoice","guarantee"]}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},props:["store"],created:function(){},components:{star:c}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64px",height:"64px",src:t.store.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.store.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.store.description)+"/"+t._s(t.store.deliveryTime)+"分钟送达")]),t._v(" "),t.store.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.store.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.store.supports[0].description))])]):t._e()]),t._v(" "),t.store.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.store.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"iconfont"},[t._v("")])]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.store.bulletin))]),t._v(" "),e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.store.avatar,width:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"detail"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.store.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.store.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.store.supports?e("ul",{staticClass:"supports"},t._l(t.store.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.store.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"iconfont"},[t._v("")])])])])],1)},staticRenderFns:[]};var d=e("C7Lr")(l,v,!1,function(t){e("3DgZ")},"data-v-7d40ba3e",null).exports,u=e("84iU"),p=e.n(u),h={data:function(){return{store:{}}},created:function(){var t=this;p()({method:"get",url:"http://94.191.55.232:2001/api/store"}).then(function(s){0===s.data.errno&&(t.store=s.data.data)})},components:{myheader:d}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("myheader",{attrs:{store:t.store}}),t._v(" "),e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{to:"/goods"}},[t._v("商品")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/ratings"}},[t._v("评论")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/store"}},[t._v("商家")])],1),t._v(" "),e("keep-alive",[e("router-view",{attrs:{store:t.store}})],1)],1)},staticRenderFns:[]};var _=e("C7Lr")(h,f,!1,function(t){e("X3Dn")},"data-v-2b85cd72",null).exports,C=e("/QXl"),m=e("wSez"),g=e.n(m),w={props:{food:{type:Object},msg:{type:Object}},methods:{addCar:function(){var t={name:this.food.name,price:this.food.price,count:1};this.$store.commit("addFood",t)},decreaseCar:function(){var t={name:this.food.name,price:this.food.price,count:1};this.$store.commit("decreaseFood",t)}},computed:{foodCount:function(){var t=0,s=this.food.name;this.food.price;return this.$store.state.shopCar.some(function(e){e.name==s&&(t=e.count)}),t}},created:function(){}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"carcontrol"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.foodCount>0,expression:"foodCount>0"}],staticClass:"car-decrease",on:{click:t.decreaseCar}},[e("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.foodCount>0,expression:"foodCount>0"}],staticClass:"car-count"},[t._v(t._s(t.foodCount))]),t._v(" "),e("div",{staticClass:"car-add",on:{click:t.addCar}},[e("i",{staticClass:"iconfont"},[t._v("")])])])},staticRenderFns:[]};var x=e("C7Lr")(w,y,!1,function(t){e("sV42")},"data-v-7f42ba5a",null).exports,S={data:function(){return{fold:!0,carCount:0}},props:{deliveryPrice:{type:Number},minPrice:{type:Number},selectFoods:{type:Array}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||Object(m.Toast)({message:"您已支付"+this.totalPrice+"元",position:"middle",duration:2e3})}},watch:{carCount:function(t,s){0===t&&this.$emit("hideCar")}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),this.carCount=t,t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new C.a(t.$refs.listContent,{click:!0})}),s}},components:{carcontrol:x}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"iconfont",class:{highlight:t.totalCount>0}},[t._v("")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n\t\t\t\t\t"+t._s(t.payDesc)+"\n\t\t\t\t")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcar-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:s.count>0,expression:"food.count>0"}],staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])}),0)])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask"})])},staticRenderFns:[]};var k=e("C7Lr")(S,T,!1,function(t){e("S5c/")},"data-v-4affe1a6",null).exports,b=(e("EqYI"),{render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]});var F=e("C7Lr")({},b,!1,function(t){e("6xHT")},"data-v-27a3edb3",null).exports,$={data:function(){return{selectType:2,onlyContent:!1}},props:{ratings:{type:Array,default:function(){return[]}},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t){this.selectType=t,this.$emit("changeSelectType",t)},toggleContent:function(){this.onlyContent=!this.onlyContent,this.$emit("changeOnlyContent",this.onlyContent)}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v("\n\t\t\t"+t._s(t.desc.all)+"\n\t\t\t"),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v("\n\t\t\t"+t._s(t.desc.positive)+"\n\t\t\t"),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v("\n\t\t\t"+t._s(t.desc.negative)+"\n\t\t\t"),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[t._m(0),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont"},[this._v("")])])}]};var N=e("C7Lr")($,P,!1,function(t){e("r4Mu")},"data-v-fbd3a882",null).exports,D={props:{food:{type:Object}},data:function(){return{selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{foodCount:function(){var t=0,s=this.food.name;this.food.price;return this.$store.state.shopCar.some(function(e){e.name==s&&(t=e.count)}),t}},filters:{formatDate:function(t){var s=new Date(t);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+(s.getDate()>9?s.getDate():"0"+s.getDate())+"  "+(s.getHours()>9?s.getHours():"0"+s.getHours())+":"+(s.getMinutes()>9?s.getMinutes():"0"+s.getMinutes())+":"+(s.getSeconds()>9?s.getSeconds():"0"+s.getSeconds())}},methods:{changeSelectType:function(t){this.selectType=t},changeOnlyContent:function(t){this.onlyContent=t},close:function(){this.$emit("closeFood")},addFirst:function(){var t={name:this.food.name,price:this.food.price,count:1};this.$store.commit("addFood",t)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},created:function(){var t=this;this.$nextTick(function(){t.foodScroll?t.foodScroll.refresh():t.foodScroll=new C.a(t.$refs.food,{click:!0})})},mounted:function(){var t=!1,s=0,e=0,a=this.$refs.food,i=this;a.addEventListener("touchstart",function(t){s=t.touches[0].clientX}),a.addEventListener("touchmove",function(a){t=!0;var i=a.touches[0].clientX;e=i-s}),a.addEventListener("touchend",function(a){t&&Math.abs(e)>100&&i.close(),t=!1,s=0,e=0})},components:{carcontrol:x,split:F,ratingselect:N}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"img-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"food-close",on:{click:t.close}},[e("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.foodCount,expression:"foodCount === 0"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("加入购物车")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{desc:t.desc,ratings:t.food.ratings},on:{changeOnlyContent:t.changeOnlyContent,changeSelectType:t.changeSelectType}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("p",{staticClass:"text"},[e("span",[0===s.rateType?e("i",{staticClass:"iconfont good"},[t._v("")]):e("i",{staticClass:"iconfont bad"},[t._v("")])]),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(s.text))])])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])},staticRenderFns:[]};var E={props:["store"],data:function(){return{goods:[],classMap:["decrease","discount","special","invoice","guarantee"],listHeight:[],scrollY:0,carShow:!1,selectedFood:{},foodShow:!1}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=this,s=this.$store.state.shopCar;return s.forEach(function(s){s.count&&(t.carShow=!0)}),s}},methods:{hideCar:function(){this.carShow=!1},closeFood:function(){this.foodShow=!1},selectFood:function(t){this.selectedFood=t,this.foodShow=!0},selectMenu:function(t){var s=this.$refs.foodsWrapper.getElementsByClassName("foods-list-hook")[t];this.foodsScroll.scrollToElement(s,400)},initScroll:function(){var t=this;this.menuScroll=new C.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new C.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("foods-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}console.log(this.listHeight)}},created:function(){var t=this;p()({method:"get",url:"http://94.191.55.232:2001/api/goods"}).then(function(s){0===s.data.errno&&(t.goods=s.data.data,t.$nextTick(function(){t.initScroll(),t.calculateHeight()}))})},components:{shopcar:k,carcontrol:x,food:e("C7Lr")(D,M,!1,function(t){e("uP20")},"data-v-753c5442",null).exports}},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods-container"},[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"foods-list foods-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item"},[e("div",{staticClass:"icon",on:{click:function(e){return t.selectFood(s)}}},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcar",{directives:[{name:"show",rawName:"v-show",value:t.carShow,expression:"carShow"}],attrs:{selectFoods:t.selectFoods,deliveryPrice:t.store.deliveryPrice,minPrice:t.store.minPrice},on:{hideCar:t.hideCar}})],1),t._v(" "),e("transition",{attrs:{name:"food"}},[e("food",{directives:[{name:"show",rawName:"v-show",value:t.foodShow,expression:"foodShow"}],attrs:{food:t.selectedFood},on:{closeFood:t.closeFood}})],1)],1)},staticRenderFns:[]};var O=e("C7Lr")(E,H,!1,function(t){e("WxVI")},"data-v-0ca66180",null).exports,L={props:{store:{type:Object}},data:function(){return{selectType:2,onlyContent:!1,ratings:[]}},methods:{changeSelectType:function(t){this.selectType=t},changeOnlyContent:function(t){this.onlyContent=t},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+(s.getDate()>9?s.getDate():"0"+s.getDate())+"  "+(s.getHours()>9?s.getHours():"0"+s.getHours())+":"+(s.getMinutes()>9?s.getMinutes():"0"+s.getMinutes())+":"+(s.getSeconds()>9?s.getSeconds():"0"+s.getSeconds())}},created:function(){var t=this;p()({method:"get",url:"http://94.191.55.232:2001/api/ratings"}).then(function(s){0===s.data.errno&&(t.ratings=s.data.data,t.$nextTick(function(){t.scroll=new C.a(t.$refs.ratings,{click:!0})}))})},components:{star:c,split:F,ratingselect:N}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.store.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.store.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.store.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.store.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.store.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.store.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery-time"},[t._v(t._s(t.store.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{ratings:t.ratings},on:{changeOnlyContent:t.changeOnlyContent,changeSelectType:t.changeSelectType}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{staticClass:"star",attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0)])],1)])},staticRenderFns:[]};var j=e("C7Lr")(L,R,!1,function(t){e("etpi")},"data-v-18607431",null).exports,z={props:{store:{type:Object}},data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"],favorite:!1}},methods:{toggleFavorite:function(){this.favorite=!this.favorite}},computed:{favoriteText:function(){return this.favorite?"以收藏":"未收藏"}},mounted:function(){this.scroll=new C.a(this.$refs.store,{click:!0})},components:{star:c,split:F}},W={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"store",staticClass:"store"},[e("div",{staticClass:"store-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.store.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("star",{staticClass:"star",attrs:{size:36,score:t.store.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.store.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.store.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.store.minPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.store.deliveryPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.store.deliveryTime))]),t._v("分钟\n\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("i",{staticClass:"iconfont",class:{active:t.favorite}},[t._v("")]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.store.bulletin))]),t._v(" "),t.store.supports?e("ul",{staticClass:"supports"},t._l(t.store.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e()])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.store.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var I=e("C7Lr")(z,W,!1,function(t){e("tb5a")},"data-v-74328681",null).exports;a.default.use(o.a);var Y=new o.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:O},{path:"/ratings",component:j},{path:"/store",component:I}],linkActiveClass:"my-active",base:"/hot/"});e("5OHe");a.default.prototype.$axios=p.a,a.default.use(o.a),a.default.use(g.a),a.default.use(i.a),a.default.config.productionTip=!1;var X=new i.a.Store({state:{shopCar:localStorage.getItem("car")||[]},mutations:{addFood:function(t,s){var e=!1;t.shopCar.some(function(t){if(t.name==s.name)return 0===t.count?t.count=1:t.count++,e=!0,!0}),e||t.shopCar.push(s)},decreaseFood:function(t,s){t.shopCar.some(function(t){t.name==s.name&&t.count--})}}});new a.default({el:"#app",router:Y,components:{App:_},render:function(t){return t(_)},store:X})},"S5c/":function(t,s){},WxVI:function(t,s){},X3Dn:function(t,s){},etpi:function(t,s){},r4Mu:function(t,s){},sV42:function(t,s){},tb5a:function(t,s){},uP20:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.15ec23f5b651fdf1e309.js.map