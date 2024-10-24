import{I as f,_ as x}from"./Dca7RZ7x.js";import{o as n,c as s,a as t,b as c,u as m,t as p,F as _,m as d,w as g,T as h}from"./DEn9cQd8.js";import{_ as y}from"./BCsVfL3z.js";import{_ as b}from"./B-aQKxUG.js";import{_ as $}from"./DlAUqK2U.js";import"./CCtU9x1e.js";const T={class:"flex flex-col justify-center items-center gap-y-6"},k={class:"w-[144px] aspect-square rounded-full bg-accent_color flex justify-center items-center overflow-hidden"},v={class:"flex flex-col items-center font-bold uppercase gap-y-1"},D={class:"text-3xl text-center"},S={class:"text-xl"},w={__name:"DropHero",props:{title:{type:String,default:"80% of all income"},subTitle:{type:String,default:"Total drop"}},setup(r){return(l,i)=>(n(),s("div",T,[t("div",k,[c(m(f),{icon:"token:ton",class:"text-[64px] text-accent_text_color"})]),t("div",v,[t("h1",D,p(r.title),1),t("span",S,p(r.subTitle),1)])]))}},C={class:"flex flex-col justify-center items-center bg-accent_gradient p-6 rounded-3xl gap-y-3"},B={__name:"ConnectWalletButton",setup(r){const l=()=>{console.log("Connect Wallet")};return(i,o)=>(n(),s("div",C,[o[0]||(o[0]=t("span",{class:"font-bold text-accent_text_color"},"How to get rewards?",-1)),t("button",{onClick:l,class:"bg-white text-accent_color w-full rounded-2xl h-12 uppercase font-bold text-sm"},"Connect wallet")]))}},N={class:"bg-secondary_bg_color rounded-3xl uppercase flex flex-col"},E={class:"flex flex-col p-4 gap-y-4"},P={class:"grid grid-cols-2 gap-4"},A={class:"font-semibold"},O={key:0,class:"text-lg font-bold text-accent_color"},j={key:1,class:"text-lg font-bold text-accent_color"},I={class:"flex flex-col p-4 gap-y-4"},R={class:"text-3xl font-bold bg-accent_gradient bg-clip-text text-transparent"},W={__name:"DropStat",props:{dropDate:{type:String,default:"December 1, 2024"}},setup(r){const l=[{id:0,title:"in - APP PURCHASES",count:70,percentType:!0},{id:1,title:"in - APP ADVERTISING",count:10,percentType:!0},{id:2,title:"INVESTMENTS OF OUR PARTNERS",count:20,percentType:!0}];return(i,o)=>{const a=B;return n(),s("div",N,[t("div",E,[o[0]||(o[0]=t("h3",{class:"font-bold text-lg"},"Where does the money come from?",-1)),t("div",P,[(n(),s(_,null,d(l,e=>t("div",{key:e.id,class:"flex flex-col text-sm justify-between"},[t("span",A,p(e.title),1),e.percentType?(n(),s("span",O,p(e.count)+"%",1)):(n(),s("span",j,p(e.count?e.count.toLocaleString("en-EN"):0),1))])),64))])]),c(a),t("div",I,[o[1]||(o[1]=t("span",{class:"text-lg font-bold"},"When will we receive them?",-1)),t("h2",R,p(r.dropDate),1)])])}}},H={class:"flex flex-col gap-y-4"},U={__name:"DropTerms",setup(r){const l=[{id:0,title:"Title",description:"Description"}];return(i,o)=>{const a=y;return n(),s("div",H,[o[0]||(o[0]=t("h4",{class:"px-4 text-lg font-bold uppercase"},"About our project:",-1)),(n(),s(_,null,d(l,e=>c(a,{key:e.id,title:e.title,description:e.description},null,8,["title","description"])),64))])}}},V={class:"flex flex-col gap-y-4"},F={__name:"DropContacts",setup(r){const l=[{id:0,title:"Our news - Official channel",link:"https://t.me/OnlyUpNews"},{id:1,title:"Support team",link:"https://t.me/OnlyUpSupportBot"}];return(i,o)=>{const a=b;return n(),s("div",V,[o[0]||(o[0]=t("h4",{class:"px-4 text-lg font-bold uppercase"},"Contacts:",-1)),(n(),s(_,null,d(l,e=>c(a,{key:e.id,title:e.title,link:e.link},null,8,["title","link"])),64))])}}},L={},M={class:"flex flex-col gap-y-6"};function q(r,l){const i=w,o=W,a=U,e=F,u=x;return n(),s(_,null,[c(h,{name:"fade",appear:""},{default:g(()=>[t("div",M,[c(i),c(o),c(a),c(e)])]),_:1}),c(u,{activePage:2})],64)}const Y=$(L,[["render",q]]);export{Y as default};