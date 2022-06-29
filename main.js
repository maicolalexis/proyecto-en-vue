const API = "https://graph.facebook.com/"
const app = Vue.createApp({
  data() {
    return {
      busqueda: null,
      result: null,
      error: null,
    }
  },
  methods: {

    async buscar() {
      try {
        const response = await fetch(API + this.busqueda + '?fields=name,email,picture,birthday&access_token=EAAFaNshrhkgBAGES8rNKip9mClrfdlqVoky8yNQoZAFa2BUZC4MV86fKYdBFNRMCgGDYBzfa18vj280FnDVLhM7GECvZCxBLjuMnb2KWpCXbHIjYbMEUAvGdVfblmhOgC84sjI376tGNR2zS7VAkvUOs2bIgWuDL2FxPMD6XwZDZD')
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