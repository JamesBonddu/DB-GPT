"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{15506:function(e,l,t){t.r(l),t.d(l,{default:function(){return ew}});var a=t(85893),s=t(67294),n=t(2093),r=t(43446),o=t(39332),i=t(99513),c=t(24019),d=t(50888),u=t(97937),m=t(63606),x=t(50228),h=t(87547),p=t(89035),f=t(33035),v=t(12767),g=t(94184),j=t.n(g),b=t(66309),y=t(81799),w=t(41468),_=t(29158),N=t(98165),Z=t(14079),k=t(38426),C=t(61607),S=t(44442),P=t(74627),R=t(36782),E=t(13135),D=t(71577),I=t(2453),O=t(57132),M=t(79166),A=t(93179),L=t(20640),F=t.n(L);function q(e){let{code:l,language:t}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(D.ZP,{className:"absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700",type:"text",icon:(0,a.jsx)(O.Z,{}),onClick:()=>{let e=F()(l);I.ZP[e?"success":"error"](e?"Copy success":"Copy failed")}}),(0,a.jsx)(A.Z,{language:t,style:M.Z,children:l})]})}let z=["custom-view","chart-view","references","summary"],T={code(e){var l;let{inline:t,node:s,className:n,children:r,style:o,...i}=e,{context:c,matchValues:d}=function(e){let l=z.reduce((l,t)=>{let a=RegExp("<".concat(t,"[^>]*/?>"),"gi");return e=e.replace(a,e=>(l.push(e),"")),l},[]);return{context:e,matchValues:l}}(Array.isArray(r)?r.join("\n"):r),u=/language-(\w+)/.exec(n||"");return(0,a.jsxs)(a.Fragment,{children:[!t&&u?(0,a.jsx)(q,{code:c,language:null!==(l=null==u?void 0:u[1])&&void 0!==l?l:"javascript"}):(0,a.jsx)("code",{...i,style:o,className:"px-[6px] py-[2px] rounded bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-800 text-sm",children:r}),(0,a.jsx)(f.D,{components:T,rehypePlugins:[v.Z],children:d.join("\n")})]})},ul(e){let{children:l}=e;return(0,a.jsx)("ul",{className:"py-1",children:l})},ol(e){let{children:l}=e;return(0,a.jsx)("ol",{className:"py-1",children:l})},li(e){let{children:l,ordered:t}=e;return(0,a.jsx)("li",{className:"text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ".concat(t?"list-decimal":"list-disc"),children:l})},table(e){let{children:l}=e;return(0,a.jsx)("table",{className:"my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-900 text-sm rounded-lg overflow-hidden",children:l})},thead(e){let{children:l}=e;return(0,a.jsx)("thead",{className:"bg-[#fafafa] dark:bg-black font-semibold",children:l})},th(e){let{children:l}=e;return(0,a.jsx)("th",{className:"!text-left p-4",children:l})},td(e){let{children:l}=e;return(0,a.jsx)("td",{className:"p-4 border-t border-[#f0f0f0] dark:border-gray-700",children:l})},h1(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-2xl font-bold my-4 border-b border-slate-300 pb-4",children:l})},h2(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-xl font-bold my-3",children:l})},h3(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-lg font-semibold my-2",children:l})},h4(e){let{children:l}=e;return(0,a.jsx)("h3",{className:"text-base font-semibold my-1",children:l})},a(e){let{children:l,href:t}=e;return(0,a.jsxs)("div",{className:"inline-block text-blue-600 dark:text-blue-400",children:[(0,a.jsx)(_.Z,{className:"mr-1"}),(0,a.jsx)("a",{href:t,target:"_blank",children:l})]})},img(e){let{src:l,alt:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(k.Z,{className:"min-h-[1rem] max-w-full max-h-full border rounded",src:l,alt:t,placeholder:(0,a.jsx)(b.Z,{icon:(0,a.jsx)(N.Z,{spin:!0}),color:"processing",children:"Image Loading..."}),fallback:"/images/fallback.png"})})},blockquote(e){let{children:l}=e;return(0,a.jsx)("blockquote",{className:"py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm",children:l})},"chart-view":function(e){var l,t,s;let n,{content:r,children:o}=e;try{n=JSON.parse(r)}catch(e){console.log(e,r),n={type:"response_table",sql:"",data:[]}}let i=(null==n?void 0:null===(l=n.data)||void 0===l?void 0:l[0])?null===(t=Object.keys(null==n?void 0:null===(s=n.data)||void 0===s?void 0:s[0]))||void 0===t?void 0:t.map(e=>({title:e,dataIndex:e,key:e})):[],c={key:"chart",label:"Chart",children:(0,a.jsx)(E._z,{data:null==n?void 0:n.data,chartType:(0,E.aG)(null==n?void 0:n.type)})},d={key:"sql",label:"SQL",children:(0,a.jsx)(q,{code:(0,R.WU)(null==n?void 0:n.sql,{language:"mysql"}),language:"sql"})},u={key:"data",label:"Data",children:(0,a.jsx)(C.Z,{dataSource:null==n?void 0:n.data,columns:i})},m=(null==n?void 0:n.type)==="response_table"?[u,d]:[c,d,u];return(0,a.jsxs)("div",{children:[(0,a.jsx)(S.Z,{defaultActiveKey:(null==n?void 0:n.type)==="response_table"?"data":"chart",items:m,size:"small"}),o]})},references:function(e){let l,{title:t,references:s,children:n}=e;if(n)try{t=(l=JSON.parse(n)).title,s=l.references}catch(e){return console.log("parse references failed",e),(0,a.jsx)("p",{className:"text-sm text-red-500",children:"Render Reference Error!"})}else try{s=JSON.parse(s)}catch(e){return console.log("parse references failed",e),(0,a.jsx)("p",{className:"text-sm text-red-500",children:"Render Reference Error!"})}return!s||(null==s?void 0:s.length)<1?null:(0,a.jsxs)("div",{className:"border-t-[1px] border-gray-300 mt-3 py-2",children:[(0,a.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:[(0,a.jsx)(_.Z,{className:"mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:t})]}),s.map((e,l)=>{var t;return(0,a.jsxs)("div",{className:"text-sm font-normal block ml-2 h-6 leading-6 overflow-hidden",children:[(0,a.jsxs)("span",{className:"inline-block w-6",children:["[",l+1,"]"]}),(0,a.jsx)("span",{className:"mr-2 lg:mr-4 text-blue-400",children:e.name}),null==e?void 0:null===(t=e.chunks)||void 0===t?void 0:t.map((l,t)=>(0,a.jsxs)("span",{children:["object"==typeof l?(0,a.jsx)(P.Z,{content:(0,a.jsxs)("div",{className:"max-w-4xl",children:[(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"Content:"}),(0,a.jsx)("p",{children:(null==l?void 0:l.content)||"No Content"}),(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"MetaData:"}),(0,a.jsx)("p",{children:(null==l?void 0:l.meta_info)||"No MetaData"}),(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"Score:"}),(0,a.jsx)("p",{children:(null==l?void 0:l.recall_score)||""})]}),title:"Chunk Information",children:(0,a.jsx)("span",{className:"cursor-pointer text-blue-500 ml-2",children:null==l?void 0:l.id},"chunk_content_".concat(null==l?void 0:l.id))}):(0,a.jsx)("span",{className:"cursor-pointer text-blue-500 ml-2",children:l},"chunk_id_".concat(l)),t<(null==e?void 0:e.chunks.length)-1&&(0,a.jsx)("span",{children:","},"chunk_comma_".concat(t))]},"chunk_".concat(t)))]},"file_".concat(l))})]})},summary:function(e){let{children:l}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"mb-2",children:[(0,a.jsx)(Z.Z,{className:"mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:"Document Summary"})]}),(0,a.jsx)("div",{children:l})]})}},V={todo:{bgClass:"bg-gray-500",icon:(0,a.jsx)(c.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,a.jsx)(d.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,a.jsx)(u.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,a.jsx)(m.Z,{className:"ml-2"})}};function G(e){return e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}var H=(0,s.memo)(function(e){let{children:l,content:t,isChartChat:n,onLinkClick:r}=e,{scene:o}=(0,s.useContext)(w.p),{context:i,model_name:c,role:d}=t,u="view"===d,{relations:m,value:g,cachePluginContext:_}=(0,s.useMemo)(()=>{if("string"!=typeof i)return{relations:[],value:"",cachePluginContext:[]};let[e,l]=i.split("	relations:"),t=l?l.split(","):[],a=[],s=0,n=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var l;let t=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),n=JSON.parse(t),r="<custom-view>".concat(s,"</custom-view>");return a.push({...n,result:G(null!==(l=n.result)&&void 0!==l?l:"")}),s++,r}catch(l){return console.log(l.message,l),e}});return{relations:t,cachePluginContext:a,value:n}},[i]),N=(0,s.useMemo)(()=>({"custom-view"(e){var l;let{children:t}=e,s=+t.toString();if(!_[s])return t;let{name:n,status:r,err_msg:o,result:i}=_[s],{bgClass:c,icon:d}=null!==(l=V[r])&&void 0!==l?l:{};return(0,a.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,a.jsxs)("div",{className:j()("flex px-4 md:px-6 py-2 items-center text-white text-sm",c),children:[n,d]}),i?(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,a.jsx)(f.D,{components:T,rehypePlugins:[v.Z],children:null!=i?i:""})}):(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:o})]})}}),[i,_]);return u||i?(0,a.jsxs)("div",{className:j()("relative flex flex-wrap w-full px-2 sm:px-4 py-2 sm:py-4 rounded-xl break-words",{"bg-slate-100 dark:bg-[#353539]":u,"lg:w-full xl:w-full pl-0":["chat_with_db_execute","chat_dashboard"].includes(o)}),children:[(0,a.jsx)("div",{className:"mr-2 flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full text-lg sm:mr-4",children:u?(0,y.A)(c)||(0,a.jsx)(x.Z,{}):(0,a.jsx)(h.Z,{})}),(0,a.jsxs)("div",{className:"flex-1 overflow-hidden items-center text-md leading-8",children:[!u&&"string"==typeof i&&i,u&&n&&"object"==typeof i&&(0,a.jsxs)("div",{children:["[".concat(i.template_name,"]: "),(0,a.jsxs)("span",{className:"text-[#1677ff] cursor-pointer",onClick:r,children:[(0,a.jsx)(p.Z,{className:"mr-1"}),i.template_introduce||"More Details"]})]}),u&&"string"==typeof i&&(0,a.jsx)(f.D,{components:{...T,...N},rehypePlugins:[v.Z],children:G(g)}),!!(null==m?void 0:m.length)&&(0,a.jsx)("div",{className:"flex flex-wrap mt-2",children:null==m?void 0:m.map((e,l)=>(0,a.jsx)(b.Z,{color:"#108ee9",children:e},e+l))})]}),l]}):(0,a.jsx)("div",{className:"h-12"})}),J=t(59301),U=t(41132),W=t(74312),$=t(3414),B=t(72868),Q=t(59562),K=t(14553),X=t(25359),Y=t(7203),ee=t(48665),el=t(26047),et=t(99056),ea=t(57814),es=t(63955),en=t(33028),er=t(40911),eo=t(66478),ei=t(83062),ec=t(50489),ed=t(67421),eu=e=>{var l;let{conv_index:t,question:n,knowledge_space:r,select_param:o}=e,{t:i}=(0,ed.$G)(),{chatId:c}=(0,s.useContext)(w.p),[d,u]=(0,s.useState)(""),[m,x]=(0,s.useState)(4),[h,p]=(0,s.useState)(""),f=(0,s.useRef)(null),[v,g]=I.ZP.useMessage(),j=(0,s.useCallback)((e,l)=>{l?(0,ec.Vx)((0,ec.Eb)(c,t)).then(e=>{var l,t,a,s;let n=null!==(l=e[1])&&void 0!==l?l:{};u(null!==(t=n.ques_type)&&void 0!==t?t:""),x(parseInt(null!==(a=n.score)&&void 0!==a?a:"4")),p(null!==(s=n.messages)&&void 0!==s?s:"")}).catch(e=>{console.log(e)}):(u(""),x(4),p(""))},[c,t]),b=(0,W.Z)($.Z)(e=>{let{theme:l}=e;return{backgroundColor:"dark"===l.palette.mode?"#FBFCFD":"#0E0E10",...l.typography["body-sm"],padding:l.spacing(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,width:"100%",height:"100%"}});return(0,a.jsxs)(B.L,{onOpenChange:j,children:[g,(0,a.jsx)(ei.Z,{title:i("Rating"),children:(0,a.jsx)(Q.Z,{slots:{root:K.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(J.Z,{})})}),(0,a.jsxs)(X.Z,{children:[(0,a.jsx)(Y.Z,{disabled:!0,sx:{minHeight:0}}),(0,a.jsx)(ee.Z,{sx:{width:"100%",maxWidth:350,display:"grid",gap:3,padding:1},children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault();let l={conv_uid:c,conv_index:t,question:n,knowledge_space:r,score:m,ques_type:d,messages:h};console.log(l),(0,ec.Vx)((0,ec.VC)({data:l})).then(e=>{v.open({type:"success",content:"save success"})}).catch(e=>{v.open({type:"error",content:"save error"})})},children:(0,a.jsxs)(el.Z,{container:!0,spacing:.5,columns:13,sx:{flexGrow:1},children:[(0,a.jsx)(el.Z,{xs:3,children:(0,a.jsx)(b,{children:i("Q_A_Category")})}),(0,a.jsx)(el.Z,{xs:10,children:(0,a.jsx)(et.Z,{action:f,value:d,placeholder:"Choose one…",onChange:(e,l)=>u(null!=l?l:""),...d&&{endDecorator:(0,a.jsx)(K.ZP,{size:"sm",variant:"plain",color:"neutral",onMouseDown:e=>{e.stopPropagation()},onClick:()=>{var e;u(""),null===(e=f.current)||void 0===e||e.focusVisible()},children:(0,a.jsx)(U.Z,{})}),indicator:null},sx:{width:"100%"},children:o&&(null===(l=Object.keys(o))||void 0===l?void 0:l.map(e=>(0,a.jsx)(ea.Z,{value:e,children:o[e]},e)))})}),(0,a.jsx)(el.Z,{xs:3,children:(0,a.jsx)(b,{children:(0,a.jsx)(ei.Z,{title:(0,a.jsx)(ee.Z,{children:(0,a.jsx)("div",{children:i("feed_back_desc")})}),variant:"solid",placement:"left",children:i("Q_A_Rating")})})}),(0,a.jsx)(el.Z,{xs:10,sx:{pl:0,ml:0},children:(0,a.jsx)(es.Z,{"aria-label":"Custom",step:1,min:0,max:5,valueLabelFormat:function(e){return({0:i("Lowest"),1:i("Missed"),2:i("Lost"),3:i("Incorrect"),4:i("Verbose"),5:i("Best")})[e]},valueLabelDisplay:"on",marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],sx:{width:"90%",pt:3,m:2,ml:1},onChange:e=>{var l;return x(null===(l=e.target)||void 0===l?void 0:l.value)},value:m})}),(0,a.jsx)(el.Z,{xs:13,children:(0,a.jsx)(en.Z,{placeholder:i("Please_input_the_text"),value:h,onChange:e=>p(e.target.value),minRows:2,maxRows:4,endDecorator:(0,a.jsx)(er.ZP,{level:"body-xs",sx:{ml:"auto"},children:i("input_count")+h.length+i("input_unit")}),sx:{width:"100%",fontSize:14}})}),(0,a.jsx)(el.Z,{xs:13,children:(0,a.jsx)(eo.Z,{type:"submit",variant:"outlined",sx:{width:"100%",height:"100%"},children:i("submit")})})]})})})]})]})},em=t(32983),ex=t(12069),eh=t(96486),ep=t(19409),ef=t(98399),ev=t(87740),eg=t(80573),ej=e=>{var l;let{messages:t,onSubmit:r}=e,{dbParam:c,currentDialogue:d,scene:u,model:m,refreshDialogList:x,chatId:h,agentList:p,docId:f}=(0,s.useContext)(w.p),{t:v}=(0,ed.$G)(),g=(0,o.useSearchParams)(),b=null!==(l=g&&g.get("spaceNameOriginal"))&&void 0!==l?l:"",[_,N]=(0,s.useState)(!1),[Z,k]=(0,s.useState)(!1),[C,S]=(0,s.useState)(t),[P,R]=(0,s.useState)(""),[E,D]=(0,s.useState)(),M=(0,s.useRef)(null),A=(0,s.useMemo)(()=>"chat_dashboard"===u,[u]),L=(0,eg.Z)(),q=(0,s.useMemo)(()=>{switch(u){case"chat_agent":return p.join(",");case"chat_excel":return null==d?void 0:d.select_param;default:return b||c}},[u,p,d,c,b]),z=async e=>{if(!_&&e.trim())try{N(!0),await r(e,{select_param:null!=q?q:""})}finally{N(!1)}},T=e=>{try{return JSON.parse(e)}catch(l){return e}},[V,G]=I.ZP.useMessage(),J=async e=>{let l=null==e?void 0:e.replace(/\trelations:.*/g,""),t=F()(l);t?l?V.open({type:"success",content:v("Copy_success")}):V.open({type:"warning",content:v("Copy_nothing")}):V.open({type:"error",content:v("Copry_error")})},U=async()=>{!_&&f&&(N(!0),await L(f),N(!1))};return(0,n.Z)(async()=>{let e=(0,ef.a_)();e&&e.id===h&&(await z(e.message),x(),localStorage.removeItem(ef.rU))},[h]),(0,s.useEffect)(()=>{let e=t;A&&(e=(0,eh.cloneDeep)(t).map(e=>((null==e?void 0:e.role)==="view"&&"string"==typeof(null==e?void 0:e.context)&&(e.context=T(null==e?void 0:e.context)),e))),S(e.filter(e=>["view","human"].includes(e.role)))},[A,t]),(0,s.useEffect)(()=>{(0,ec.Vx)((0,ec.Lu)()).then(e=>{var l;D(null!==(l=e[1])&&void 0!==l?l:{})}).catch(e=>{console.log(e)})},[]),(0,s.useEffect)(()=>{setTimeout(()=>{var e;null===(e=M.current)||void 0===e||e.scrollTo(0,M.current.scrollHeight)},50)},[t]),(0,a.jsxs)(a.Fragment,{children:[G,(0,a.jsx)("div",{ref:M,className:"flex flex-1 overflow-y-auto pb-8 w-full flex-col",children:(0,a.jsx)("div",{className:"flex items-center flex-1 flex-col text-sm leading-6 text-slate-900 dark:text-slate-300 sm:text-base sm:leading-7",children:C.length?C.map((e,l)=>{var t;return(0,a.jsx)(H,{content:e,isChartChat:A,onLinkClick:()=>{k(!0),R(JSON.stringify(null==e?void 0:e.context,null,2))},children:"view"===e.role&&(0,a.jsxs)("div",{className:"flex w-full pt-2 md:pt-4 border-t border-gray-200 mt-2 md:mt-4 pl-2",children:["chat_knowledge"===u&&e.retry?(0,a.jsxs)(eo.Z,{onClick:U,slots:{root:K.ZP},slotProps:{root:{variant:"plain",color:"primary"}},children:[(0,a.jsx)(ev.Z,{}),"\xa0",(0,a.jsx)("span",{className:"text-sm",children:v("Retry")})]}):null,(0,a.jsxs)("div",{className:"flex w-full flex-row-reverse",children:[(0,a.jsx)(eu,{select_param:E,conv_index:Math.ceil((l+1)/2),question:null===(t=null==C?void 0:C.filter(l=>(null==l?void 0:l.role)==="human"&&(null==l?void 0:l.order)===e.order)[0])||void 0===t?void 0:t.context,knowledge_space:b||c||""}),(0,a.jsx)(ei.Z,{title:v("Copy"),children:(0,a.jsx)(eo.Z,{onClick:()=>J(null==e?void 0:e.context),slots:{root:K.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(O.Z,{})})})]})]})},l)}):(0,a.jsx)(em.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"flex items-center justify-center flex-col h-full w-full",description:"Start a conversation"})})}),(0,a.jsx)("div",{className:j()("relative after:absolute after:-top-8 after:h-8 after:w-full after:bg-gradient-to-t after:from-white after:to-transparent dark:after:from-[#212121]",{"cursor-not-allowed":"chat_excel"===u&&!(null==d?void 0:d.select_param)}),children:(0,a.jsxs)("div",{className:"flex flex-wrap w-full py-2 sm:pt-6 sm:pb-10 items-center",children:[m&&(0,a.jsx)("div",{className:"mr-2 flex",children:(0,y.A)(m)}),(0,a.jsx)(ep.Z,{loading:_,onSubmit:z,handleFinish:N})]})}),(0,a.jsx)(ex.default,{title:"JSON Editor",open:Z,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{k(!1)},onCancel:()=>{k(!1)},children:(0,a.jsx)(i.Z,{className:"w-full h-[500px]",language:"json",value:P})})]})},eb=t(34625),ey=t(45247),ew=()=>{var e;let l=(0,o.useSearchParams)(),{scene:t,chatId:i,model:c,setModel:d,history:u,setHistory:m}=(0,s.useContext)(w.p),x=(0,r.Z)({}),h=null!==(e=l&&l.get("initMessage"))&&void 0!==e?e:"",[p,f]=(0,s.useState)(!1),[v,g]=(0,s.useState)(),b=async()=>{f(!0);let[,e]=await (0,ec.Vx)((0,ec.$i)(i));m(null!=e?e:[]),f(!1)},y=e=>{var l;let t=null===(l=e[e.length-1])||void 0===l?void 0:l.context;if(t)try{let e=JSON.parse(t);g((null==e?void 0:e.template_name)==="report"?null==e?void 0:e.charts:void 0)}catch(e){g(void 0)}};(0,n.Z)(async()=>{let e=(0,ef.a_)();e&&e.id===i||await b()},[h,i]),(0,s.useEffect)(()=>{var e,l;if(!u.length)return;let t=null===(e=null===(l=u.filter(e=>"view"===e.role))||void 0===l?void 0:l.slice(-1))||void 0===e?void 0:e[0];(null==t?void 0:t.model_name)&&d(t.model_name),y(u)},[u.length]),(0,s.useEffect)(()=>()=>{m([])},[]);let _=(0,s.useCallback)((e,l)=>new Promise(a=>{let s=[...u,{role:"human",context:e,model_name:c,order:0,time_stamp:0},{role:"view",context:"",model_name:c,order:0,time_stamp:0}],n=s.length-1;m([...s]),x({data:{...l,chat_mode:t||"chat_normal",model_name:c,user_input:e},chatId:i,onMessage:e=>{s[n].context=e,m([...s])},onDone:()=>{y(s),a()},onClose:()=>{y(s),a()},onError:e=>{s[n].context=e,m([...s]),a()}})}),[u,x,c]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ey.Z,{visible:p}),(0,a.jsx)(eb.Z,{refreshHistory:b,modelChange:e=>{d(e)}}),(0,a.jsxs)("div",{className:"px-4 flex flex-1 flex-wrap overflow-hidden relative",children:[!!(null==v?void 0:v.length)&&(0,a.jsx)("div",{className:"w-full xl:w-3/4 h-3/5 xl:pr-4 xl:h-full overflow-y-auto",children:(0,a.jsx)(E.ZP,{chartsData:v})}),!(null==v?void 0:v.length)&&"chat_dashboard"===t&&(0,a.jsx)(em.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"w-full xl:w-3/4 h-3/5 xl:h-full pt-0 md:pt-10"}),(0,a.jsx)("div",{className:j()("flex flex-1 flex-col overflow-hidden",{"px-0 xl:pl-4 h-2/5 xl:h-full border-t xl:border-t-0 xl:border-l":"chat_dashboard"===t,"h-full lg:px-8":"chat_dashboard"!==t}),children:(0,a.jsx)(ej,{messages:u,onSubmit:_})})]})]})}},19409:function(e,l,t){t.d(l,{Z:function(){return D}});var a=t(85893),s=t(27496),n=t(59566),r=t(71577),o=t(67294),i=t(2487),c=t(83062),d=t(2453),u=t(46735),m=t(74627),x=t(39479),h=t(51009),p=t(58299),f=t(577),v=t(30119),g=t(67421);let j=e=>{let{data:l,loading:t,submit:s,close:n}=e,{t:r}=(0,g.$G)(),o=e=>()=>{s(e),n()};return(0,a.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,a.jsx)(i.Z,{dataSource:null==l?void 0:l.data,loading:t,rowKey:e=>e.prompt_name,renderItem:e=>(0,a.jsx)(i.Z.Item,{onClick:o(e.content),children:(0,a.jsx)(c.Z,{title:e.content,children:(0,a.jsx)(i.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:r("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+r("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var b=e=>{let{submit:l}=e,{t}=(0,g.$G)(),[s,n]=(0,o.useState)(!1),[r,i]=(0,o.useState)("common"),{data:b,loading:y}=(0,f.Z)(()=>(0,v.PR)("/prompt/list",{prompt_type:r}),{refreshDeps:[r],onError:e=>{d.ZP.error(null==e?void 0:e.message)}});return(0,a.jsx)(u.ZP,{theme:{components:{Popover:{minWidth:250}}},children:(0,a.jsx)(m.Z,{title:(0,a.jsx)(x.Z.Item,{label:"Prompt "+t("Type"),children:(0,a.jsx)(h.default,{style:{width:150},value:r,onChange:e=>{i(e)},options:[{label:t("Public")+" Prompts",value:"common"},{label:t("Private")+" Prompts",value:"private"}]})}),content:(0,a.jsx)(j,{data:b,loading:y,submit:l,close:()=>{n(!1)}}),placement:"topRight",trigger:"click",open:s,onOpenChange:e=>{n(e)},children:(0,a.jsx)(c.Z,{title:t("Click_Select")+" Prompt",children:(0,a.jsx)(p.Z,{className:"bottom-[30%]"})})})})},y=t(41468),w=t(50489),_=t(80573),N=t(5392),Z=t(84553);function k(e){let{dbParam:l,setDocId:t}=(0,o.useContext)(y.p),{onUploadFinish:s,handleFinish:n}=e,i=(0,_.Z)(),[c,d]=(0,o.useState)(!1),u=async e=>{d(!0);let a=new FormData;a.append("doc_name",e.file.name),a.append("doc_file",e.file),a.append("doc_type","DOCUMENT");let r=await (0,w.Vx)((0,w.iG)(l||"default",a));if(!r[1]){d(!1);return}t(r[1]),s(),d(!1),null==n||n(!0),await i(r[1]),null==n||n(!1)};return(0,a.jsx)(Z.default,{customRequest:u,showUploadList:!1,maxCount:1,multiple:!1,className:"absolute z-10 top-2 left-2",accept:".pdf,.ppt,.pptx,.xls,.xlsx,.doc,.docx,.txt,.md",children:(0,a.jsx)(r.ZP,{loading:c,size:"small",shape:"circle",icon:(0,a.jsx)(N.Z,{})})})}var C=t(11163),S=t(5455),P=t(1051);function R(e){let{document:l}=e;switch(l.status){case"RUNNING":return(0,a.jsx)(S.Rp,{});case"FINISHED":default:return(0,a.jsx)(S.s2,{});case"FAILED":return(0,a.jsx)(P.Z,{})}}function E(e){let{documents:l,dbParam:t}=e,s=(0,C.useRouter)(),n=e=>{s.push("/knowledge/chunk/?spaceName=".concat(t,"&id=").concat(e))};return(null==l?void 0:l.length)?(0,a.jsx)("div",{className:"absolute flex overflow-scroll h-12 top-[-35px] w-full z-10",children:l.map(e=>{let l;switch(e.status){case"RUNNING":l="#2db7f5";break;case"FINISHED":default:l="#87d068";break;case"FAILED":l="#f50"}return(0,a.jsx)(c.Z,{title:e.result,children:(0,a.jsxs)(r.ZP,{style:{color:l},onClick:()=>{n(e.id)},className:"shrink flex items-center mr-3",children:[(0,a.jsx)(R,{document:e}),e.doc_name]})},e.id)})}):null}var D=function(e){let{children:l,loading:t,onSubmit:i,handleFinish:c,...d}=e,{dbParam:u,scene:m}=(0,o.useContext)(y.p),[x,h]=(0,o.useState)(""),p=(0,o.useMemo)(()=>"chat_knowledge"===m,[m]),[f,v]=(0,o.useState)([]),g=(0,o.useRef)(0);async function j(){if(!u)return null;let[e,l]=await (0,w.Vx)((0,w._Q)(u,{page:1,page_size:g.current}));v(null==l?void 0:l.data)}(0,o.useEffect)(()=>{p&&j()},[u]);let _=async()=>{g.current+=1,await j()};return(0,a.jsxs)("div",{className:"flex-1 relative",children:[(0,a.jsx)(E,{documents:f,dbParam:u}),p&&(0,a.jsx)(k,{handleFinish:c,onUploadFinish:_,className:"absolute z-10 top-2 left-2"}),(0,a.jsx)(n.default.TextArea,{className:"flex-1 ".concat(p?"pl-10":""," pr-10"),size:"large",value:x,autoSize:{minRows:1,maxRows:4},...d,onPressEnter:e=>{if(x.trim()&&13===e.keyCode){if(e.shiftKey){h(e=>e+"\n");return}i(x),setTimeout(()=>{h("")},0)}},onChange:e=>{if("number"==typeof d.maxLength){h(e.target.value.substring(0,d.maxLength));return}h(e.target.value)}}),(0,a.jsx)(r.ZP,{className:"ml-2 flex items-center justify-center absolute right-2 bottom-0",size:"large",type:"text",loading:t,icon:(0,a.jsx)(s.Z,{}),onClick:()=>{i(x)}}),(0,a.jsx)(b,{submit:e=>{h(x+e)}}),l]})}},45247:function(e,l,t){var a=t(85893),s=t(50888);l.Z=function(e){let{visible:l}=e;return l?(0,a.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,a.jsx)(s.Z,{})}):null}},43446:function(e,l,t){var a=t(1375),s=t(2453),n=t(67294),r=t(58989),o=t(83454);l.Z=e=>{let{queryAgentURL:l="/api/v1/chat/completions"}=e,t=(0,n.useMemo)(()=>new AbortController,[]),i=(0,n.useCallback)(async e=>{let{data:n,chatId:i,onMessage:c,onClose:d,onDone:u,onError:m}=e;if(!(null==n?void 0:n.user_input)&&!(null==n?void 0:n.doc_id)){s.ZP.warning(r.Z.t("NoContextTip"));return}let x={...n,conv_uid:i};if(!x.conv_uid){s.ZP.error("conv_uid 不存在，请刷新后重试");return}try{var h;await (0,a.L)("".concat(null!==(h=o.env.API_BASE_URL)&&void 0!==h?h:"").concat(l),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x),signal:t.signal,openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===a.a)return},onclose(){t.abort(),null==d||d()},onerror(e){throw Error(e)},onmessage:e=>{var l;let t=null===(l=e.data)||void 0===l?void 0:l.replaceAll("\\n","\n");"[DONE]"===t?null==u||u():(null==t?void 0:t.startsWith("[ERROR]"))?null==m||m(null==t?void 0:t.replace("[ERROR]","")):null==c||c(t)}})}catch(e){t.abort(),null==m||m("Sorry, We meet some error, please try agin later.",e)}},[l]);return(0,n.useEffect)(()=>()=>{t.abort()},[]),i}},80573:function(e,l,t){var a=t(41468),s=t(67294),n=t(43446),r=t(50489);l.Z=()=>{let{history:e,setHistory:l,chatId:t,model:o,docId:i}=(0,s.useContext)(a.p),c=(0,n.Z)({queryAgentURL:"/knowledge/document/summary"}),d=(0,s.useCallback)(async e=>{let[,a]=await (0,r.Vx)((0,r.$i)(t)),s=[...a,{role:"human",context:"",model_name:o,order:0,time_stamp:0},{role:"view",context:"",model_name:o,order:0,time_stamp:0,retry:!0}],n=s.length-1;l([...s]),await c({data:{doc_id:e||i,model_name:o},chatId:t,onMessage:e=>{s[n].context=e,l([...s])}})},[e,o,i,t]);return d}}}]);