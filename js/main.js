const API = "https://api.github.com/users/";
const nombre = document.querySelector('#nombre')


const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenidos!',
          busqueda: null,
          result: null,
          error: null        
        }
        //la palabra function ya no es necesario para ya que se usa el method
      },methods: {
        
          async buscar(){

            this.result = this.error = null
          try {
              
          const response = await fetch (API + this.busqueda)
          if(!response.ok) throw new Error("Usuario no encontrado")
          //
          const data = await response.json()
          console.log(data)
          
          this.result = data;
            
          } catch (error) {
           this.error = error
          
          //cuando termin el proceso limpia haciendo vacia la busqueda
          }finally{
            this.busqueda = null
          }
          
      }
      },
      
})//.mount('#app')//montamos esta informacion en el div app del html


