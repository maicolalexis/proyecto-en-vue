const API = "https://graph.facebook.com/"
const app = Vue.createApp({
  data() {
    return {
      busqueda: null,
      result: null,
      error: null,
      favorito: new Map()

    }
  },created(){
    const favoritosG = JSON.parse(window.localStorage.getItem("misFavoritos"));
    if(favoritosG?.lenght){
      const favoritonew = new Map(favoritosG.map(favoritosN=>[favoritosN.id, favoritosN]))
      this.favorito = favoritonew;

    }
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
      },
  methods: {

    async buscar() {
      try {
        const response = await fetch(API + this.busqueda + '?fields=name,email,picture,birthday,link&access_token=EAAFaNshrhkgBAAK1DZAnz2NaWUAZBs5FXbDI8c5LKu3X9OfrVhC5TIgsLitSzN9ZAm774JzZBcF45HAeoMryBOOLbjcZCeg2IVjtFWgkaJ5exBiBJQMqJLZCB4CBhdlLBhbvohUov6RLV6iMZAyX78BZBop8xkIdZBwUgcUdzlqIvucbRzwCgM39fWPUSjYa4BVZCAqIZAjPMS5qzpQEGAZCLQlZCh7OAgz9SI5mJe2CgKH7DAKo1v6Dp2vPa')
        const data = await response.json()
        console.log(data)

        this.result = data;
      } catch (error) {
        this.error = error

        //cuando termin el proceso limpia haciendo vacia la busqueda
      } finally {
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
    },

    mostrarFavorito(parametro){
      //tipo array con objetos de javascripts o tipo Json
      this.result = parametro;
    }

    
    }
  
})