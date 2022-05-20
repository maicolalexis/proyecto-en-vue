const API = "https://api.github.com/users/";
const nombre = document.querySelector('#nombre')


const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenidos!',
          busqueda: null,
          result: null         
        }
        //la palabra function ya no es necesario para ya que se usa el method
      },methods: {

        async buscar(){
          const response = await fetch (API + this.busqueda)
          const data = await response.json()
          console.log(data)
          this.result = true;
      }
      },
      
})//.mount('#app')//montamos esta informacion en el div app del html


