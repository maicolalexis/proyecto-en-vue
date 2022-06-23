const API = "https://graph.facebook.com/"
const app = Vue.createApp({
  data() {
    return {
      busqueda: null,
      result: null,
      error: null,
    }
  }, methods: {

    async buscar() {
      try {
        const response = await fetch(API + this.busqueda +'?fields=id,name,email,picture&access_token=EAAFaNshrhkgBAMJYcYrcbs4kDOOy6IcxQYmU0oIbBzbZB8DShij4KBO0vVjwlcZBrRSfYAbHPrKPQ1Qq446jVD41jdUarCZCtm70NXh3suTEUTWb1hF5F1frW1ZC6G2x7MV3PTyZCnFkPoZBaEe0requJGn1TDoG4HpN4NdS244QZDZD')
        const data = await response.json()
        console.log(data)

        this.result = data;
      } catch (error) {
        this.error = error

        //cuando termin el proceso limpia haciendo vacia la busqueda
      } finally {
        this.busqueda = null
      }

    }
  }
})