const API = "https://graph.facebook.com/v14.0/"
const nombre = document.querySelector('#username');
const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenidos!',
          busqueda: null,
          result: null,
          error: null,
          favorito: new Map()
        },



        created() {
            
        },