/* Patrón Módulo mediante IIFE */
const video = (() => {
    // Función privada que reciba la url del video y el id de la etiqueta iframe
    const fuenteVideo = (url, id) => {
        // Obtiene el elemento iframe del DOM usando su id
        const reproductor = document.getElementById(id);
        // Utiliza setAttribute para establecer el atributo 'src' con la nueva URL del video
        reproductor.setAttribute('src', url);
    }
    // Retorna una función pública que expone la funcionalidad de cargar un video mediante la URL y el id del iframe
    return {
        cargarVideo: (url, id) => {
            fuenteVideo(url, id)
        }
    }
})();

/* Clase padre */
class Multimedia {
    constructor(url) {
        // Proteger el atributo de la clase implementado closures
        let _url = url;
        // Método privado para obtener la URL
        this.getUrl = () => _url;
        // Método privado para establecer una nueva URL
        this.setUrl = (nuevaUrl) => {
            _url = nuevaUrl;
        };
    }
    // Getter para acceder a la URL pública
    get url() {
        return this.getUrl();
    }
    // Setter para modificar la URL pública
    set url(nuevaUrl) {
        this.setUrl(nuevaUrl);
    }
    // Método que devuelve un mensaje indicando la funcionalidad de setInicio
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

/* Clase hijo */
class Reproductor extends Multimedia {
    constructor(url, id) {
        // Llama al constructor de la clase padre, pasando la URL
        super(url);
        // Almacena el id del iframe
        this._id = id;
    }
    // Getter para acceder al id del iframe
    get id() {
        return this._id;
    }
    // Setter para modificar el id del iframe
    set id(nuevoId) {
        this._id = nuevoId;
    }
    // Método para cargar el video 
    playMultimedia() {
        return video.cargarVideo(this.url, this.id);
    }
    // Método setInicio para agregar un parámetro de tiempo a la URL del video
    setInicio(tiempo) {
        return this.setUrl(`${this.url}&start=${tiempo}`);
    }
}

// Creación de una instancia de Reproductor para un video de música el cual se reproduce desde un tiempo específico
let playMusica = new Reproductor('https://www.youtube.com/embed/Oo8H5vUKMlk?si=nUMUp8fPowyQOSSQ', 'musica')
playMusica.setInicio(25);
playMusica.playMultimedia();

// Creación de una instancia de Reproductor para una película y la reproduce desde un tiempo específico
let playPelicula = new Reproductor('https://www.youtube.com/embed/hf8EYbVxtCY?si=w67wJ4j1Xg_UOxcq', 'peliculas');
playPelicula.setInicio(56);
playPelicula.playMultimedia();

// Creación de una instancia de Reproductor para una serie y la reproduce desde un tiempo específico
let playSerie = new Reproductor('https://www.youtube.com/embed/OODneEUWUQY?si=fcwaB_sPQTzhnvWg', 'series');
playSerie.setInicio(5);
playSerie.playMultimedia();

