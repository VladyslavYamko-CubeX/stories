import{j as e}from"./jsx-runtime-CkxqCPlQ.js";/* empty css               */import"./index-DJO9vBfz.js";const l=({tabIdx:u=0,locked:p=!1,title:m,chip:f,desc:g,img:a,ext:h})=>e.jsxs("div",{tabIndex:u,className:"group-target:hocus  max-w-[360px] bg-white border border-neutral4 rounded-2xl shadow-blue-00 overflow-hidden hocus:bg-neutralColored1 hocus:shadow-blue-05 hocus:cursor-pointer active:shadow-none active:bg-brandPrimary9 active:border-brandPrimary9 focus:border-2 focus:border-brandPrimary11",children:[e.jsx("div",{className:"h-40 max-h-40 overflow-hidden",children:e.jsx("img",{className:"object-cover w-full h-full",src:`/src/stories/assets/${a}.${h}`,alt:a})}),e.jsxs("div",{className:"p-4 h-16 border border-brandSecondary3 flex items-center relative bg-[#FBFCFF] group-hocus:bg-[#F6F8FF] group-active:bg-[#E8EFFF]",children:[e.jsx("h5",{className:"text-brandPrimary9 font-bold group-hocus:underline group-hocus:text-brandPrimary11 group-active:text-brandPrimary13",children:m}),e.jsxs("p",{className:"font-montserrat absolute right-4 top-[-24px] border border-neutral4 text-neutralColored10 rounded-3xl bg-neutral2 px-[14px] py-1 font-bold flex gap-2 h-[30px] items-center shadow-secondary-01",children:[p&&e.jsx("img",{src:"/src/assets/lock.svg",className:"w-3 h-4",alt:"lock"})," ",f]})]}),e.jsxs("div",{className:"p-4 bg-white group-hocus:bg-neutralColored1 group-active:bg-brandPrimary2",children:[e.jsx("span",{className:"text-[13px] font-bold text-neutralColored9",children:"Description"}),e.jsx("p",{className:"line-clamp-2",children:g}),e.jsxs("div",{className:"flex w-full justify-end gap-2",children:[e.jsx("img",{src:"/src/assets/clock.svg",alt:"clock"}),e.jsx("p",{className:"text-neutralColored10",children:"18m6s"})]})]})]});l.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Card",props:{tabIdx:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chip:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},desc:{required:!0,tsType:{name:"string"},description:""},img:{required:!0,tsType:{name:"string"},description:""},ext:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const y={component:l},r={args:{locked:!1,chip:"Power BI",title:"Power BI 101",desc:"Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf",img:"accessibility",ext:"png"}},s={args:{locked:!0,chip:"Power BI",title:"Power BI 101",desc:"Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf",img:"accessibility",ext:"png"}};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    locked: false,
    chip: 'Power BI',
    title: 'Power BI 101',
    desc: 'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf',
    img: 'accessibility',
    ext: 'png'
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,i,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    locked: true,
    chip: 'Power BI',
    title: 'Power BI 101',
    desc: 'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf',
    img: 'accessibility',
    ext: 'png'
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Unlocked","Locked"];export{s as Locked,r as Unlocked,k as __namedExportsOrder,y as default};
