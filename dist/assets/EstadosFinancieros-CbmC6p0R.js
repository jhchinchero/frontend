import{a as F}from"./accountingService-BkHKg6Hl.js";import{B as G,C as W,E as f,aJ as ee,a5 as O,o as v,c as g,F as E,l as B,aQ as J,z as C,w as m,a6 as D,i as P,n as H,aR as te,aS as ae,aD as ne,aT as k,aU as j,ak as ie,aV as L,aH as M,ag as re,a as r,r as z,t as p,p as se,j as _,H as oe,b as c,u,g as $,ae as q,A as x,L as S,K as y,J as le,M as de}from"./index-CGlp8Azh.js";var ce={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},ue=G.extend({name:"tabpanel",classes:ce}),be={name:"BaseTabPanel",extends:W,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:ue,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},V={name:"TabPanel",extends:be,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ee((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function pe(t,e,n,a,l,s){var T,o;return s.$pcTabs?(v(),g(E,{key:1},[t.asChild?O(t.$slots,"default",{key:1,class:H(t.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs}):(v(),g(E,{key:0},[!((T=s.$pcTabs)!==null&&T!==void 0&&T.lazy)||s.active?B((v(),C(D(t.as),f({key:0,class:t.cx("root")},s.attrs),{default:m(function(){return[O(t.$slots,"default")]}),_:3},16,["class"])),[[J,(o=s.$pcTabs)!==null&&o!==void 0&&o.lazy?!0:s.active]]):P("",!0)],64))],64)):O(t.$slots,"default",{key:0})}V.render=pe;var ve=`
    .p-tabview-tablist-container {
        position: relative;
    }

    .p-tabview-scrollable > .p-tabview-tablist-container {
        overflow: hidden;
    }

    .p-tabview-tablist-scroll-container {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tabview-tablist-scroll-container::-webkit-scrollbar {
        display: none;
    }

    .p-tabview-tablist {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
        background: dt('tabview.tab.list.background');
        border: 1px solid dt('tabview.tab.list.border.color');
        border-width: 0 0 1px 0;
        position: relative;
    }

    .p-tabview-tab-header {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        border-style: solid;
        border-width: 0 0 1px 0;
        border-color: transparent transparent dt('tabview.tab.border.color') transparent;
        color: dt('tabview.tab.color');
        padding: 1rem 1.125rem;
        font-weight: 600;
        border-top-right-radius: dt('border.radius.md');
        border-top-left-radius: dt('border.radius.md');
        transition:
            color dt('tabview.transition.duration'),
            outline-color dt('tabview.transition.duration');
        margin: 0 0 -1px 0;
        outline-color: transparent;
    }

    .p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: -1px;
    }

    .p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {
        color: dt('tabview.tab.hover.color');
    }

    .p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {
        color: dt('tabview.tab.active.color');
    }

    .p-tabview-tab-title {
        line-height: 1;
        white-space: nowrap;
    }

    .p-tabview-next-button,
    .p-tabview-prev-button {
        position: absolute;
        top: 0;
        margin: 0;
        padding: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabview.nav.button.background');
        color: dt('tabview.nav.button.color');
        width: 2.5rem;
        border-radius: 0;
        outline-color: transparent;
        transition:
            color dt('tabview.transition.duration'),
            outline-color dt('tabview.transition.duration');
        box-shadow: dt('tabview.nav.button.shadow');
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-tabview-next-button:focus-visible,
    .p-tabview-prev-button:focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-tabview-next-button:hover,
    .p-tabview-prev-button:hover {
        color: dt('tabview.nav.button.hover.color');
    }

    .p-tabview-prev-button {
        left: 0;
    }

    .p-tabview-next-button {
        right: 0;
    }

    .p-tabview-panels {
        background: dt('tabview.tab.panel.background');
        color: dt('tabview.tab.panel.color');
        padding: 0.875rem 1.125rem 1.125rem 1.125rem;
    }

    .p-tabview-ink-bar {
        z-index: 1;
        display: block;
        position: absolute;
        bottom: -1px;
        height: 1px;
        background: dt('tabview.tab.active.border.color');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,fe={root:function(e){var n=e.props;return["p-tabview p-component",{"p-tabview-scrollable":n.scrollable}]},navContainer:"p-tabview-tablist-container",prevButton:"p-tabview-prev-button",navContent:"p-tabview-tablist-scroll-container",nav:"p-tabview-tablist",tab:{header:function(e){var n=e.instance,a=e.tab,l=e.index;return["p-tabview-tablist-item",n.getTabProp(a,"headerClass"),{"p-tabview-tablist-item-active":n.d_activeIndex===l,"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-tabview-tab-header",headerTitle:"p-tabview-tab-title",content:function(e){var n=e.instance,a=e.tab;return["p-tabview-panel",n.getTabProp(a,"contentClass")]}},inkbar:"p-tabview-ink-bar",nextButton:"p-tabview-next-button",panelContainer:"p-tabview-panels"},he=G.extend({name:"tabview",style:ve,classes:fe}),me={name:"BaseTabView",extends:W,props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},style:he,provide:function(){return{$pcTabs:void 0,$pcTabView:this,$parentInstance:this}}},Q={name:"TabView",extends:me,inheritAttrs:!1,emits:["update:activeIndex","tab-change","tab-click"],data:function(){return{d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{activeIndex:function(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted:function(){console.warn("Deprecated since v4. Use Tabs component instead."),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated:function(){this.updateInkBar(),this.scrollable&&this.updateButtonState()},methods:{isTabPanel:function(e){return e.type.name==="TabPanel"},isTabActive:function(e){return this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.$id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.$id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var l=this.tabs.length,s={props:e.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:l,first:a===0,last:a===l-1,active:this.isTabActive(a)}};return f(this.ptm("tabpanel.".concat(n),{tabpanel:s}),this.ptm("tabpanel.".concat(n),s),this.ptmo(this.getTabProp(e,"pt"),n,s))},onScroll:function(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=k(e),a=e.scrollLeft-n;e.scrollLeft=a<=0?0:a},onNextButtonClick:function(){var e=this.$refs.content,n=k(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+n,l=e.scrollWidth-n;e.scrollLeft=a>=l?l:a},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowRightKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey:function(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling;return a?L(a,"data-p-disabled")||L(a,"data-pc-section")==="inkbar"?this.findNextHeaderAction(a):M(a,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling;return a?L(a,"data-p-disabled")||L(a,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(a):M(a,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex:function(e,n,a){!this.getTabProp(n,"disabled")&&this.d_activeIndex!==a&&(this.d_activeIndex=a,this.$emit("update:activeIndex",a),this.$emit("tab-change",{originalEvent:e,index:a}),this.scrollInView({index:a}))},changeFocusedTab:function(e,n){if(n&&(ie(n),this.scrollInView({element:n}),this.selectOnFocus)){var a=parseInt(n.parentElement.dataset.pcIndex,10),l=this.tabs[a];this.changeActiveIndex(e,l,a)}},scrollInView:function(e){var n=e.element,a=e.index,l=a===void 0?-1:a,s=n||this.$refs.nav.children[l];s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest"})},updateInkBar:function(){var e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=k(e)+"px",this.$refs.inkbar.style.left=j(e).left-j(this.$refs.nav).left+"px"},updateButtonState:function(){var e=this.$refs.content,n=e.scrollLeft,a=e.scrollWidth,l=k(e);this.isPrevButtonDisabled=n===0,this.isNextButtonDisabled=parseInt(n)===a-l},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevBtn,a=e.nextBtn;return[n,a].reduce(function(l,s){return s?l+k(s):l},0)}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isTabPanel(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(l){e.isTabPanel(l)&&n.push(l)}),n},[])},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:ne},components:{ChevronLeftIcon:ae,ChevronRightIcon:te}};function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U(Object(n),!0).forEach(function(a){ye(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ye(t,e,n){return(e=ge(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ge(t){var e=we(t,"string");return N(e)=="symbol"?e:e+""}function we(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(N(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Te=["tabindex","aria-label"],xe=["data-p-active","data-p-disabled","data-pc-index"],Ae=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],Pe=["tabindex","aria-label"],Ie=["id","aria-labelledby","data-pc-index","data-p-active"];function ke(t,e,n,a,l,s){var T=re("ripple");return v(),g("div",f({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[r("div",f({class:t.cx("navContainer")},t.ptm("navContainer")),[t.scrollable&&!l.isPrevButtonDisabled?B((v(),g("button",f({key:0,ref:"prevBtn",type:"button",class:t.cx("prevButton"),tabindex:t.tabindex,"aria-label":s.prevButtonAriaLabel,onClick:e[0]||(e[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},w(w({},t.prevButtonProps),t.ptm("prevButton")),{"data-pc-group-section":"navbutton"}),[O(t.$slots,"previcon",{},function(){return[(v(),C(D(t.prevIcon?"span":"ChevronLeftIcon"),f({"aria-hidden":"true",class:t.prevIcon},t.ptm("prevIcon")),null,16,["class"]))]})],16,Te)),[[T]]):P("",!0),r("div",f({ref:"content",class:t.cx("navContent"),onScroll:e[1]||(e[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},t.ptm("navContent")),[r("ul",f({ref:"nav",class:t.cx("nav")},t.ptm("nav")),[(v(!0),g(E,null,z(s.tabs,function(o,b){return v(),g("li",f({key:s.getKey(o,b),style:s.getTabProp(o,"headerStyle"),class:t.cx("tab.header",{tab:o,index:b}),role:"presentation"},{ref_for:!0},w(w(w({},s.getTabProp(o,"headerProps")),s.getTabPT(o,"root",b)),s.getTabPT(o,"header",b)),{"data-pc-name":"tabpanel","data-p-active":l.d_activeIndex===b,"data-p-disabled":s.getTabProp(o,"disabled"),"data-pc-index":b}),[B((v(),g("a",f({id:s.getTabHeaderActionId(b),class:t.cx("tab.headerAction"),tabindex:s.getTabProp(o,"disabled")||!s.isTabActive(b)?-1:t.tabindex,role:"tab","aria-disabled":s.getTabProp(o,"disabled"),"aria-selected":s.isTabActive(b),"aria-controls":s.getTabContentId(b),onClick:function(I){return s.onTabClick(I,o,b)},onKeydown:function(I){return s.onTabKeyDown(I,o,b)}},{ref_for:!0},w(w({},s.getTabProp(o,"headerActionProps")),s.getTabPT(o,"headerAction",b))),[o.props&&o.props.header?(v(),g("span",f({key:0,class:t.cx("tab.headerTitle")},{ref_for:!0},s.getTabPT(o,"headerTitle",b)),p(o.props.header),17)):P("",!0),o.children&&o.children.header?(v(),C(D(o.children.header),{key:1})):P("",!0)],16,Ae)),[[T]])],16,xe)}),128)),r("li",f({ref:"inkbar",class:t.cx("inkbar"),role:"presentation","aria-hidden":"true"},t.ptm("inkbar")),null,16)],16)],16),t.scrollable&&!l.isNextButtonDisabled?B((v(),g("button",f({key:1,ref:"nextBtn",type:"button",class:t.cx("nextButton"),tabindex:t.tabindex,"aria-label":s.nextButtonAriaLabel,onClick:e[2]||(e[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},w(w({},t.nextButtonProps),t.ptm("nextButton")),{"data-pc-group-section":"navbutton"}),[O(t.$slots,"nexticon",{},function(){return[(v(),C(D(t.nextIcon?"span":"ChevronRightIcon"),f({"aria-hidden":"true",class:t.nextIcon},t.ptm("nextIcon")),null,16,["class"]))]})],16,Pe)),[[T]]):P("",!0)],16),r("div",f({class:t.cx("panelContainer")},t.ptm("panelContainer")),[(v(!0),g(E,null,z(s.tabs,function(o,b){return v(),g(E,{key:s.getKey(o,b)},[!t.lazy||s.isTabActive(b)?B((v(),g("div",f({key:0,id:s.getTabContentId(b),style:s.getTabProp(o,"contentStyle"),class:t.cx("tab.content",{tab:o}),role:"tabpanel","aria-labelledby":s.getTabHeaderActionId(b)},{ref_for:!0},w(w(w({},s.getTabProp(o,"contentProps")),s.getTabPT(o,"root",b)),s.getTabPT(o,"content",b)),{"data-pc-name":"tabpanel","data-pc-index":b,"data-p-active":l.d_activeIndex===b}),[(v(),C(D(o)))],16,Ie)),[[J,t.lazy?!0:s.isTabActive(b)]]):P("",!0)],64)}),128))],16)],16)}Q.render=ke;const _e={class:"card"},Se={class:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"},Be={class:"flex flex-wrap gap-2"},Ce={class:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"},De={class:"flex flex-wrap gap-2"},Oe={class:"col-12 md:col-4"},Ee={class:"col-12 md:col-4"},Ne={class:"col-12 md:col-4"},Le={class:"statement-container"},$e={class:"statement-header"},Ke={class:"statement-section"},He={class:"statement-total"},Ve={class:"statement-section mt-5"},Re={class:"statement-total"},Fe={class:"text-2xl font-bold"},je={class:"statement-container"},Me={class:"statement-header"},ze={class:"statement-section"},qe={class:"statement-total"},Ue={class:"statement-section mt-5"},Ge={class:"statement-total"},We={class:"statement-section mt-5"},Je={class:"equity-result"},Qe={class:"statement-total"},Ye={class:"balance-summary mt-5"},Xe={class:"balance-line"},Ze={class:"balance-line"},et={class:"balance-line final"},tt={key:0,class:"text-green-500 mt-3 font-medium"},at={key:1,class:"text-red-500 mt-3 font-medium"},nt={__name:"EstadosFinancieros",setup(t){const e=_(!1),n=_(0),a=_({start_date:new Date(new Date().getFullYear(),0,1),end_date:new Date}),l=_({income:[],expenses:[],total_income:0,total_expenses:0,net_income:0}),s=_({assets:[],liabilities:[],equity:[],total_assets:0,total_liabilities:0,total_equity:0,current_result:0}),T=de(()=>Number(s.value.total_assets||0)-(Number(s.value.total_liabilities||0)+Number(s.value.total_equity||0)));function o(h){return new Intl.NumberFormat("es-BO",{style:"currency",currency:"BOB",minimumFractionDigits:2}).format(Number(h||0))}function b(h){return h?new Date(h).toLocaleDateString("es-BO"):""}function A(h){if(!h)return null;const i=h.getFullYear(),d=String(h.getMonth()+1).padStart(2,"0"),Z=String(h.getDate()).padStart(2,"0");return`${i}-${d}-${Z}`}async function I(){var h;try{const i=await F.getIncomeStatement({start_date:A(a.value.start_date),end_date:A(a.value.end_date)}),d=((h=i.data)==null?void 0:h.data)||i.data;l.value={income:d.income||[],expenses:d.expenses||[],total_income:Number(d.total_income||0),total_expenses:Number(d.total_expenses||0),net_income:Number(d.net_income||0)}}catch(i){console.error("Error cargando Estado de Resultados:",i)}}async function Y(){var h;try{const i=await F.getBalanceSheet({start_date:A(a.value.start_date),end_date:A(a.value.end_date)});console.log("response: ",i);const d=((h=i.data)==null?void 0:h.data)||i.data;s.value={assets:d.assets||[],liabilities:d.liabilities||[],equity:d.equity||[],total_assets:Number(d.total_assets||0),total_liabilities:Number(d.total_liabilities||0),total_equity:Number(d.total_equity||0),current_result:Number(d.current_result||0)}}catch(i){console.error("Error cargando Balance General:",i)}}async function K(){e.value=!0;try{await Promise.all([I(),Y()])}finally{e.value=!1}}function X(){}function R(){window.print()}return oe(()=>{K()}),(h,i)=>(v(),g("div",_e,[r("div",Se,[i[3]||(i[3]=r("div",null,[r("h2",{class:"m-0"},"Estados Financieros"),r("p",{class:"text-500 mt-2 mb-0"},"Información financiera de la empresa")],-1)),r("div",Be,[c(u($),{icon:"pi pi-refresh",label:"Actualizar",severity:"secondary",outlined:"",loading:e.value,onClick:K},null,8,["loading"]),c(u($),{icon:"pi pi-print",label:"Imprimir",onClick:R}),c(u($),{icon:"pi pi-file-pdf",label:"PDF",severity:"danger",onClick:R})])]),r("div",Ce,[i[7]||(i[7]=r("div",null,null,-1)),r("div",De,[r("div",Oe,[i[4]||(i[4]=r("label",{class:"block font-medium mb-2"}," Desde ",-1)),c(u(q),{modelValue:a.value.start_date,"onUpdate:modelValue":i[0]||(i[0]=d=>a.value.start_date=d),dateFormat:"yy-mm-dd",showIcon:"",class:"w-full"},null,8,["modelValue"])]),r("div",Ee,[i[5]||(i[5]=r("label",{class:"block font-medium mb-2"}," Hasta ",-1)),c(u(q),{modelValue:a.value.end_date,"onUpdate:modelValue":i[1]||(i[1]=d=>a.value.end_date=d),dateFormat:"yy-mm-dd",showIcon:"",class:"w-full"},null,8,["modelValue"])]),r("div",Ne,[i[6]||(i[6]=r("label",{class:"block font-medium mb-2"}," Generar",-1)),c(u($),{label:"Generar estados",icon:"pi pi-chart-bar",onClick:K})])])]),c(u(Q),{activeIndex:n.value,"onUpdate:activeIndex":i[2]||(i[2]=d=>n.value=d),onTabChange:X},{default:m(()=>[c(u(V),{header:"Estado de Resultados"},{default:m(()=>[r("div",Le,[r("div",$e,[i[10]||(i[10]=r("h3",null,"ESTADO DE RESULTADOS",-1)),r("div",null,[i[8]||(i[8]=x(" Del ",-1)),r("strong",null,p(b(a.value.start_date)),1),i[9]||(i[9]=x(" al ",-1)),r("strong",null,p(b(a.value.end_date)),1)])]),r("div",Ke,[i[13]||(i[13]=r("div",{class:"section-title"},"INGRESOS",-1)),c(u(S),{value:l.value.income,responsiveLayout:"scroll",class:"p-datatable-sm statement-table"},{empty:m(()=>[...i[11]||(i[11]=[r("div",{class:"text-center p-3 text-500"},"No existen ingresos.",-1)])]),default:m(()=>[c(u(y),{field:"code",header:"Código",style:{width:"130px"}}),c(u(y),{field:"name",header:"Cuenta"}),c(u(y),{header:"Importe",style:{width:"200px","text-align":"right"}},{body:m(({data:d})=>[x(p(o(d.amount)),1)]),_:1})]),_:1},8,["value"]),r("div",He,[i[12]||(i[12]=r("span",null," TOTAL INGRESOS ",-1)),r("span",null,p(o(l.value.total_income)),1)])]),r("div",Ve,[i[16]||(i[16]=r("div",{class:"section-title"},"GASTOS",-1)),c(u(S),{value:l.value.expenses,responsiveLayout:"scroll",class:"p-datatable-sm statement-table"},{empty:m(()=>[...i[14]||(i[14]=[r("div",{class:"text-center p-3 text-500"},"No existen gastos.",-1)])]),default:m(()=>[c(u(y),{field:"code",header:"Código",style:{width:"130px"}}),c(u(y),{field:"name",header:"Cuenta"}),c(u(y),{header:"Importe",style:{width:"200px","text-align":"right"}},{body:m(({data:d})=>[x(p(o(d.amount)),1)]),_:1})]),_:1},8,["value"]),r("div",Re,[i[15]||(i[15]=r("span",null," TOTAL GASTOS ",-1)),r("span",null,p(o(l.value.total_expenses)),1)])]),r("div",{class:H(["result-box mt-5",l.value.net_income>=0?"result-positive":"result-negative"])},[r("div",null,p(l.value.net_income>=0?"UTILIDAD DEL PERÍODO":"PÉRDIDA DEL PERÍODO"),1),r("div",Fe,p(o(Math.abs(l.value.net_income))),1)],2)])]),_:1}),c(u(V),{header:"Balance General"},{default:m(()=>[r("div",je,[r("div",Me,[i[18]||(i[18]=r("h3",null,"BALANCE GENERAL",-1)),r("div",null,[i[17]||(i[17]=x(" Al ",-1)),r("strong",null,p(b(a.value.end_date)),1)])]),r("div",ze,[i[20]||(i[20]=r("div",{class:"section-title"},"ACTIVOS",-1)),c(u(S),{value:s.value.assets,responsiveLayout:"scroll",class:"p-datatable-sm statement-table"},{default:m(()=>[c(u(y),{field:"code",header:"Código",style:{width:"130px"}}),c(u(y),{field:"name",header:"Cuenta"}),c(u(y),{header:"Saldo",style:{width:"200px","text-align":"right"}},{body:m(({data:d})=>[x(p(o(Math.abs(d.amount))),1)]),_:1})]),_:1},8,["value"]),r("div",qe,[i[19]||(i[19]=r("span",null," TOTAL ACTIVOS ",-1)),r("span",null,p(o(s.value.total_assets)),1)])]),r("div",Ue,[i[22]||(i[22]=r("div",{class:"section-title"},"PASIVOS",-1)),c(u(S),{value:s.value.liabilities,responsiveLayout:"scroll",class:"p-datatable-sm statement-table"},{default:m(()=>[c(u(y),{field:"code",header:"Código",style:{width:"130px"}}),c(u(y),{field:"name",header:"Cuenta"}),c(u(y),{header:"Saldo",style:{width:"200px","text-align":"right"}},{body:m(({data:d})=>[x(p(o(Math.abs(d.amount))),1)]),_:1})]),_:1},8,["value"]),r("div",Ge,[i[21]||(i[21]=r("span",null," TOTAL PASIVOS ",-1)),r("span",null,p(o(s.value.total_liabilities)),1)])]),r("div",We,[i[25]||(i[25]=r("div",{class:"section-title"},"PATRIMONIO",-1)),c(u(S),{value:s.value.equity,responsiveLayout:"scroll",class:"p-datatable-sm statement-table"},{default:m(()=>[c(u(y),{field:"code",header:"Código",style:{width:"130px"}}),c(u(y),{field:"name",header:"Cuenta"}),c(u(y),{header:"Saldo",style:{width:"200px","text-align":"right"}},{body:m(({data:d})=>[x(p(o(Math.abs(d.amount))),1)]),_:1})]),_:1},8,["value"]),r("div",Je,[i[23]||(i[23]=r("span",null," Resultado del período ",-1)),r("span",null,p(o(Math.abs(s.value.current_result))),1)]),r("div",Qe,[i[24]||(i[24]=r("span",null," TOTAL PATRIMONIO ",-1)),r("span",null,p(o(s.value.total_equity)),1)])]),r("div",Ye,[r("div",Xe,[i[26]||(i[26]=r("span",null," TOTAL ACTIVOS ",-1)),r("strong",null,p(o(s.value.total_assets)),1)]),r("div",Ze,[i[27]||(i[27]=r("span",null," PASIVOS + PATRIMONIO ",-1)),r("strong",null,p(o(Number(s.value.total_liabilities)+Number(s.value.total_equity))),1)]),c(u(le)),r("div",et,[i[28]||(i[28]=r("span",null," DIFERENCIA CONTABLE ",-1)),r("strong",{class:H(Math.abs(T.value)<.01?"text-green-500":"text-red-500")},p(o(Math.abs(T.value))),3)]),Math.abs(T.value)<.01?(v(),g("div",tt,[...i[29]||(i[29]=[r("i",{class:"pi pi-check-circle mr-2"},null,-1),x(" El balance se encuentra cuadrado. ",-1)])])):(v(),g("div",at,[...i[30]||(i[30]=[r("i",{class:"pi pi-exclamation-triangle mr-2"},null,-1),x(" Existe una diferencia contable. ",-1)])]))])])]),_:1})]),_:1},8,["activeIndex"])]))}},st=se(nt,[["__scopeId","data-v-0877e754"]]);export{st as default};
