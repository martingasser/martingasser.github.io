import{a as r,o as c,b as s}from"./entry.09307a11.js";const n={name:"DynamicImage",props:{src:{type:String,required:!0}},computed:{dynamicImage(){return require(`~/content/${this.src}`).srcSet}}},a=["srcset"];function o(e,m,i,p,u,t){return c(),s("img",{srcset:t.dynamicImage},null,8,a)}const d=r(n,[["render",o]]);export{d as default};
