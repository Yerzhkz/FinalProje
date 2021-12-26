Vue.component('card',{
    template:`<div class = "design-item">
    <div class = "design-img">
      <img v-bind:src = " 'images/' + imgs" alt = "">
      <span><i class = "far fa-heart"></i> {{heart}}</span>
      <span>Art & Design</span>
    </div>
    <div class = "design-title">
      <a href = "#">{{title}}</a>
    </div>
  </div>`,
  props:['title','heart','imgs']
})

const vue = new Vue({
    el:"#app",
    data:{
        cards:[
            {title:"make an awesome art portfolio for college or university", 
            heart:"22", 
            imgsrc:"art-design-1.jpg"},
            {title:"make an awesome art portfolio for college or university", heart:"20", imgsrc:"art-design-2.jpg"},
            {title:"make an awesome art portfolio for college or university", heart:"19", imgsrc:"art-design-3.jpg"},
            {title:"make an awesome art portfolio for college or university", heart:"30", imgsrc:"art-design-4.jpg"},
            {title:"make an awesome art portfolio for college or university", heart:"10", imgsrc:"art-design-5.jpg"},
            {title:"make an awesome art portfolio for college or university", heart:"16", imgsrc:"art-design-6.jpg"}
        ]
    }
})