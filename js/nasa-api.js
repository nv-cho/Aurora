const app = new Vue({
    el: '#api',
    data: {
        imagen: '',
        explicacion: '',
        titulo: '',
        fecha: '',
        tipo: '',
        api: 'https://api.nasa.gov/planetary/apod?api_key=pacDnJuijzb6fou2EZFS8OHMue94LJaE4W2viSwq'
    },
    created(){
        this.fetchURL(this.api)
    },
    methods: {
        fetchURL(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.titulo = data.title
                    this.imagen = data.url
                    this.explicacion = data.explanation
                    this.fecha = data.date
                    this.tipo = data.media_type
                    
                    console.log(data)
                })
                .catch(error => {
                    console.log(error);
                })
                
        }
    },

    
})
