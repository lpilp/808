import{bk as v,ad as z,aH as o,o as k,$ as C,a0 as e,a6 as l,a4 as u,a as d}from"./vendor-5256128d.js";const U="/img/tricountse/bgrabcbgr.svg",B="/img/tricountse/bgrabcbgr1.svg",N="/img/tricountse/bgrabcbgr15.svg",M=d("div",{class:"card-header",style:{"text-align":"center","font-size":"16px"}},[d("span",null,"请选择试题参数")],-1),F=d("img",{src:U,width:"60"},null,-1),H=d("img",{src:B,width:"60"},null,-1),I=d("img",{src:N,width:"60"},null,-1),$={__name:"SeInstView",setup(R){const g=v(),_=12,i=10,c="c",m=3,t=z({nq:_,nqs:i,type:c,rid:m});function V(){g.push({path:"/serial/main",query:{...t}})}function y(){t.nq=_,t.nqs=i,t.type=c,t.rid=m}return(S,a)=>{const p=o("el-input"),s=o("el-form-item"),r=o("el-radio"),f=o("el-radio-group"),b=o("el-button"),w=o("el-form"),q=o("el-card"),x=o("el-col"),h=o("el-row");return k(),C(h,{gutter:20},{default:e(()=>[l(x,{span:10,offset:7},{default:e(()=>[l(q,{shadow:"always","body-style":{padding:"20px"}},{header:e(()=>[M]),default:e(()=>[l(w,{"label-width":"100px",class:"demo-ruleForm"},{default:e(()=>[l(s,{label:"每组题数"},{default:e(()=>[l(p,{modelValue:t.nq,"onUpdate:modelValue":a[0]||(a[0]=n=>t.nq=n),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),l(s,{label:"一共多少组"},{default:e(()=>[l(p,{modelValue:t.nqs,"onUpdate:modelValue":a[1]||(a[1]=n=>t.nqs=n),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),l(s,{label:"题型"},{default:e(()=>[l(f,{modelValue:t.rid,"onUpdate:modelValue":a[2]||(a[2]=n=>t.rid=n),class:"ml-4"},{default:e(()=>[l(r,{label:3,size:"large"},{default:e(()=>[u("计算外圈颜色相同数 + 计算内圈颜色相同数")]),_:1}),l(r,{label:2,size:"large"},{default:e(()=>[u("计算外圈颜色相同数 + 计算内里形状相同数")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"图例类型"},{default:e(()=>[l(f,{modelValue:t.type,"onUpdate:modelValue":a[3]||(a[3]=n=>t.type=n),class:"ml-4"},{default:e(()=>[l(r,{label:"c",size:"large"},{default:e(()=>[F]),_:1}),l(r,{label:"b",size:"large"},{default:e(()=>[H]),_:1}),l(r,{label:"a",size:"large"},{default:e(()=>[I]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(s,null,{default:e(()=>[l(b,{type:"primary",onClick:V},{default:e(()=>[u("提交")]),_:1}),l(b,{onClick:y},{default:e(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{$ as default};
