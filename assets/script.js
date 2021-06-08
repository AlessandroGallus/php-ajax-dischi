const app = new Vue({

  el: '#app',

  created(){
    axios.get("http://localhost/php/api.php")
    .then(dato =>{
      console.log(dato);
      this.db = dato.data;
    })
  },

  data:{
    db:[]
  },

  methods:{
  }

})