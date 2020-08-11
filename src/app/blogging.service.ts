import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        titulo: 'Xiaomi Mi Band 5, análisis: la mejor Mi Band hasta la fecha no es para todo el mundo',
        texto: 'Analizamos a fondo la Xiaomi Mi Band 5, esto es todo lo que da de sí la nueva pulsera de actividad de Xiaomi. Deportiva, barata y muy funcional.',
        autor: 'IVÁN LINARES',
        imagen: 'https://i.blogs.es/002322/xiaomi-mi-band-5-30/1024_682.jpg',
        fecha: new Date(2020, 6, 29),
        categoria: 'ANÁLISIS'
      },
      {
        titulo: 'Mega-guía para montarte un cine en casa: proyector, pantalla, sistema de sonido y más',
        texto: 'Esto es todo lo que necesitas si quieres montarte un cine en casa: proyector, pantalla, sistema de sonido y mucho más.',
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/12bdd1/cine/1024_682.jpg',
        fecha: new Date(2020, 7, 8),
        categoria: 'SELECCIÓN'
      },
      {
        titulo: 'Samsung Galaxy Note 20 y Note 20 Ultra: aún más grandes y con un S Pen preparado para la productividad y el juego',
        texto: 'Los nuevos Galaxy Note 20 de Samsung vienen con mayor tamaño, potencia y batería y heredando aspectos de los Galaxy S20.',
        autor: 'ANNA MARTÍ',
        imagen: 'https://i.blogs.es/caba0d/samsung-galaxy-note-20--note-20-ultra-00/1024_682.jpg',
        fecha: new Date(2020, 7, 5),
        categoria: 'MÓVILES'
      },
      {
        titulo: 'Cada vez hay más personas con alergias y la ciencia aún no tiene una respuesta para eliminarlas',
        texto: 'Las alergias acompañan al ser humano desde que comenzó a ser su propia especie. Sin embargo, parece que es ahora, y no hace un siglo, por ejemplo, cuando más hablamos de ellas. Esto se debe, en gran parte, a que están aumentando.',
        autor: 'SANTIAGO CAMPILLO',
        imagen: 'https://i.blogs.es/26fbe7/photo-1470217957101-da7150b9b681/1024_682.jpg',
        fecha: new Date(2020, 7, 7),
        categoria: 'CIENCIA'
      },
      {
        titulo: '"Rick y Morty" se transforman en personajes de anime con guiños a clásicos de la animación japonesa como "Akira" o "Dragon Ball"',
        texto: 'Por segundo año, para promocionar la programación de Toonami (el bloque dedicado al anime de Adult Swim, la facción de animación para adultos de Cartoon Network), "Rick y Morty" presenta una breve pieza de animación que hereda los temas y personajes de la serie norteamericana, pero le da un baño de estética y ritmo netamente nipones.',
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/d6eeab/rickanime/1366_2000.jpg',
        fecha: new Date(2020, 6, 27),
        categoria: 'CINE Y TV'
      },
      {
        titulo: 'Motorola Moto G 5G, análisis: la vuelta de la familia "G" a la mejor gama media es un gran rival',
        texto: 'Analizamos a fondo el Motorola Moto G 5G Plus, un teléfono de gran calidad, muy equilibrado y con toda la esencia de la familia "Moto G".',
        autor: 'IVÁN LINARES',
        imagen: 'https://i.blogs.es/085c06/motorola-moto-g-5g-plus-5/1024_682.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'ANÁLISIS'
      },
      {
        titulo: 'Guía de compra para disfrutar de las noches estrelladas: 24 telescopios, prismáticos, gadgets, accesorios y más',
        texto: 'Las cálidas y despejadas noches de verano son la época ideal para iniciarse en la astronomía. Si además tenemos en cuenta la tradicional — pero no por ello menos espectacular — lluvia de estrellas de San Lorenzo, mejor todavía. Si este 2020 quieres disfrutar de las Perseidas al detalle, en esta guía de compra encontrarás una selección de dispositivos, accesorios y gadget para observar al cielo: telescopios, binoculares y mucho más',
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/0c69af/astrology-astronomy-constellation-2034892/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'SELECCIÓN'
      },
      {
        titulo: 'Xiaomi Mi 10 Ultra: el primer móvil de la historia con carga súper rápida a 120W y zoom de hasta 120x',
        texto: 'El nuevo titán de Xiaomi viene armado hasta los dientes y estrena carga súper rápida, batiendo todos los récords en los móviles actuales.',
        autor: 'ANNA MARTÍ ',
        imagen: 'https://i.blogs.es/280562/xiaomi-mi-10-ultra-01/500_333.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'MÓVILES'
      },
      {
        titulo: 'Rusia dice que ya tiene una vacuna contra el coronavirus; el mundo les mira con incredulidad',
        texto: 'El presidente de Rusia, Vladímir Putin, acaba de anunciar que el país ha conseguido desarrollar con éxito la que sería la primera vacuna contra el coronavirus. Es más, según explica Reuters, Putin no solo ha asegurado que la vacuna ha sido registrada y aprobada por las autoridades sanitarias del país, sino que su propia hija se ha vacunado con ella.',
        autor: 'JAVIER JIMÉNEZ',
        imagen: 'https://i.blogs.es/c8e4ff/putin-the-kremlin-government-russia-policy-2847423/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CIENCIA'
      },
      {
        titulo: 'Netflix estrena en agosto "High Score", serie documental sobre los videojuegos y consolas clásicas',
        texto: 'Un poco por sorpresa, ya que no aparecía en su listado de estrenos previstos para agosto, Netflix ha deslizado entre sus próximos programas para finales de verano la serie documental "High Score". En ella hablará de la edad dorada de los videojuegos: la invención del medio, las primeras recreativas y las generaciones inaugurales de videoconsolas y microordenadores. Su estreno está previsto el próximo 19 de agosto.',
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/22d934/ee5fasdxyaa8mwb/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CINE Y TV'
      }

    ]
  }



  agregarPost(post: Post): void {
    const arrTemp = JSON.parse(localStorage.getItem("posts"));
    arrTemp.push(post);
    localStorage.setItem("posts", JSON.stringify(arrTemp));
    // this.arrPost.push(post);
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {

      if (localStorage.getItem("posts") == null) {
        localStorage.setItem("posts", JSON.stringify(this.arrPost));
      }
      resolve(JSON.parse(localStorage.getItem("posts")));
      // resolve(this.arrPost);
      reject('ERROR: No se han podido recuperar los posts');
    });
  }

  getPostsByCategoria(cat: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrTemp = JSON.parse(localStorage.getItem("posts"));
      resolve(arrTemp.filter(post => post.categoria === cat));
      reject(`ERROR: No se han podido obtener los posts de la categoria ${cat}`);
    });
  }
}
