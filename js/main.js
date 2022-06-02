const API = "https://api.github.com/users/";
const nombre = document.querySelector('#nombre')


const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenidos!',
          busqueda: null,
          result: null,
          error: null,
          favorito: new Map()
        }
        //la palabra function ya no es necesario para ya que se usa el method




        //created hace parte de los ciclos de vida de vue
        //aqui vamos a obtener los favoritos que esten en el localStorage
      },created(){
        //parseamos a un array lo que nos trae el localStorage
        const favoritosG = JSON.parse(window.localStorage.getItem("misFavoritos"));
        console.log(favoritosG);
        /*if(favoritosG.lenght){
          const favoritonew = new Map(favorito=>)

        }*/
        
      },computed:{
        //queremos saber si esta en los favoritos

        estaFavorito(){
         return this.favorito.has(this.result.id) 
        },
        todosFavorite(){
          //pasamos la informacion a un autentico array
          return Array.from(this.favorito.values())
          //el metodo values() traera solo los valores sin las claves
        }
        
      
      
      
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
          
      },
      addFavorito(){
        this.favorito.set(this.result.id, this.result);
        this.actualizarStorage();
      },
      removeFavorito(){
        this.favorito.delete(this.result.id)
        this.actualizarStorage();
      },
      //agregamos los datos al localStorage por eso creamos esta funcion
      actualizarStorage(){
        //debemos convertir los valores de el array a string entonces usamos JSON.stringify
    window.localStorage.setItem('misFavoritos',JSON.stringify(this.todosFavorite));
      }
      }
      
      
})//.mount('#app')//montamos esta informacion en el div app del html


