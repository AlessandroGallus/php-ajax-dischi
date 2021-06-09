const app = new Vue({

  el: '#app',

  created(){
    axios.get("http://localhost/php/api.php")
    .then(dato =>{
      this.db = dato.data;
      this.compilazioneGeneri();
      this.ordinamento();
      this.stampa();
    })
    .catch(err =>{
      console.log(err)
    });
    
  },
  data:{
    key:0,
    dischi_filtrati:[],
    generi:[],
    db:[],
    array_ordinato:[],
    array_date: []
  },

  methods:{
    compilazioneGeneri(){
      this.db.forEach(element => {
        if(!this.generi.includes(element.genre)){
          this.generi.push(element.genre);
        }
      });
      console.log(this.generi)
    },

    stampa(){
      this.dischi_filtrati = [];
      if(this.key == 0){
        this.dischi_filtrati = this.array_ordinato;
      }else{
        this.array_ordinato.forEach(element => {
          if(element.genre == this.generi[this.key-1]){
            this.dischi_filtrati.push(element)
          }
        });
      }
      },
      
      ordinamento(){
        this.db.forEach(element => {
          this.array_date.push(element.year);
        });
        this.array_date.sort()
        this.array_date.forEach(year => {
          this.db.forEach(element_db => {
            if(element_db.year == year && !this.array_ordinato.includes(element_db)){
              this.array_ordinato.push(element_db);
            }
          });
        });
      }
    }
})