const API = "https://api.github.com/users/";
const nombre = document.querySelector('#nombre')
const app = Vue.createApp({
    data() {
        return {
          message: 'Bienvenidos!'          
        }
      }
})//.mount('#app')//montamos esta informacion en el div app del html
async function buscar(){
    const response = await fetch (API + "maicolalexis")
    const data = await response.json()
    console.log(data)
}
buscar();