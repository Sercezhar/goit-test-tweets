import{j as e,a as n,L as i}from"./index-b0ff31b4.js";import{m as s}from"./motion-5c86f8ad.js";const a="_home_1lo1n_1",o="_wrapper_1lo1n_15",l="_title_1lo1n_27",c="_goit_1lo1n_39",r="_tweets_1lo1n_67",p="_button_1lo1n_103",m="_link_1lo1n_115",t={home:a,wrapper:o,title:l,goit:c,tweets:r,button:p,link:m};function _(){return e("div",{className:t.home,children:n("div",{className:t.wrapper,children:[e(s.div,{initial:{rotate:-20,scale:0},animate:{rotate:0,scale:1},transition:{type:"spring",stiffness:260,damping:20},children:n("h1",{className:t.title,children:[e("span",{className:t.goit,children:"GOIT"})," ",e("span",{className:t.tweets,children:"Tweets"})]})}),e(s.button,{className:t.button,type:"button",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{opacity:0},whileHover:{scale:1.1},whileTap:{scale:1},transition:{type:"spring",stiffness:500,damping:40},children:e(i,{className:t.link,to:"tweets",children:"Explore"})})]})})}function w(){return e(_,{})}export{w as default};
