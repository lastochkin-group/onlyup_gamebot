import{_ as x,a as g}from"./D_cbbaC5.js";import{_ as v}from"./CCtU9x1e.js";import{_ as b}from"./DT8nVxch.js";import{I as y,_ as k}from"./Dca7RZ7x.js";import{o as c,c as i,a as e,t as u,b as t,u as h,r as w,q as m,w as a,s as $,T as f,F as T,d as C}from"./DEn9cQd8.js";import{_ as j}from"./DlAUqK2U.js";import"./CpY6G1uX.js";const N={class:"flex justify-between items-center bg-secondary_bg_color rounded-3xl p-4 gap-x-0.5"},B={class:"flex items-center"},V={class:"flex items-center justify-center shrink-0 gap-x-1 font-bold text-accent_color w-16 overflow-clip"},D={class:"font-medium text-sm line-clamp-2"},I={__name:"TaskItem",props:{reward:{type:Number,default:1},title:{type:String,default:"Task title"}},setup(r){return(s,n)=>(c(),i("div",N,[e("div",B,[e("div",V,[e("span",null,"+"+u(r.reward.toLocaleString("en-EN")),1),t(h(y),{icon:"solar:heart-bold",class:"shrink-0"})]),e("span",D,u(r.title),1)]),n[0]||(n[0]=e("button",{class:"bg-accent_color h-10 w-20 rounded-3xl shrink-0 text-accent_text_color uppercase font-semibold text-sm"},"Claim",-1))]))}},P={class:"flex flex-col gap-y-4"},S={class:"flex justify-around items-center font-bold text-hint_color"},q={key:0,class:"flex flex-col gap-y-2"},A={key:1,class:"flex flex-col gap-y-2"},E={__name:"Tasks",setup(r){const s=w(0),n=l=>{s.value!==l&&(s.value=l)};return(l,o)=>{const _=I;return c(),i("div",P,[e("div",S,[e("button",{onClick:o[0]||(o[0]=d=>n(0)),class:m([s.value===0&&"text-text_color","w-1/2 h-8"])},"Daily tasks",2),e("button",{onClick:o[1]||(o[1]=d=>n(1)),class:m([s.value===1&&"text-text_color","w-1/2 h-8"])},o[2]||(o[2]=[e("span",{class:"relative"},[e("span",null,"All tasks"),e("span",{class:"flex absolute top-0 -right-4 h-2 aspect-square bg-accent_color rounded-full"})],-1)]),2)]),t(f,{name:"fade",mode:"out-in"},{default:a(()=>[s.value===0?(c(),i("div",q,[t(_,{title:"Daily check-in"})])):s.value===1?(c(),i("div",A,[t(_,{title:"Join in Code Hawk"})])):$("",!0)]),_:1})])}}},F={},L={class:"flex flex-col gap-y-6"},z={class:"flex flex-col justify-center items-center gap-y-2"},H={class:"p-4 flex"},J={class:"flex justify-between items-center gap-x-2"};function M(r,s){const n=x,l=g,o=v,_=b,d=E,p=k;return c(),i(T,null,[t(f,{name:"fade",appear:""},{default:a(()=>[e("div",L,[e("div",z,[t(n),t(l,{value:200})]),t(_,null,{default:a(()=>[e("div",H,[t(o,{to:"/teams",class:"bg-bg_color flex w-full h-11 rounded-2xl justify-center items-center uppercase font-semibold text-accent_color"},{default:a(()=>s[0]||(s[0]=[e("span",null,"All teams",-1)])),_:1})])]),_:1}),t(d)])]),_:1}),t(p,{activePage:1},{default:a(()=>[t(f,{name:"slide-fade",mode:"out-in"},{default:a(()=>[e("div",J,[t(o,{to:"/game",class:"flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold"},{default:a(()=>s[1]||(s[1]=[C("Play now")])),_:1})])]),_:1})]),_:1})],64)}const X=j(F,[["render",M]]);export{X as default};
