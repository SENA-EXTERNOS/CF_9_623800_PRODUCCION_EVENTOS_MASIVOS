<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ficha técnica de productos y servicios

    .row.justify-content-center.mt-5
      .col-lg-10
        .crd.crd--avatarHorizontal-1.py-3
          .row.align-items-center
            .col-lg-auto(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/tema2/img1.png", alt="alt").tema1-img-1
            .col
              p La ficha técnica es un documento conciso con datos técnicos de un producto o servicio. El intercambio de estos datos técnicos es un paso importante en el proceso que conduce al comercio. Los compradores exigen datos técnicos detallados y una muestra para su análisis a fin de determinar la calidad del producto y servicio para asegurarse que cumple sus requisitos.
              p.mt-3 #[strong Usualmente toda ficha técnica incluye los siguientes elementos clave.]
 


    .row.justify-content-center.mt-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2
          br
          i Imagen construcción del experto. 
        .tabla-a.color-secundario.mt-5
          table
            thead
              tr.tarjeta--naranja
                th(data-aos="fade-down") FICHA TÉCNICA
            tbody
              tr.tarjeta--amarilla
                td(data-aos="fade-right") Detalles generales del producto o servicio

              tr
                td Requisición para la entrega

              tr.tarjeta--amarilla
                td(data-aos="fade-left") Calidad y presentación

              tr
                td(data-aos="fade-right") Características técnicas

              tr.tarjeta--amarilla
                td(data-aos="fade-right") Referencias de productos

              tr
                td(data-aos="fade-right") Información adicional

    .row.my-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p #[strong Una ficha técnica se caracteriza por ser tanto informativa como publicitaria.] Desde el punto de vista informativo, contiene consejos útiles sobre el producto, como por ejemplo cómo utilizarlo, de qué está hecho, qué cosas hay que tener en cuenta al utilizar el producto, y su nombre oficial y las especificaciones estándar de la industria. Desde el punto de vista del #[i marketing], puede contener fotos e ilustraciones en color, así como secciones enteras en las que se describen los beneficios que el producto aportará al usuario final.

    .row.justify-content-center.mt-5
          .col-lg-10
            .crd.crd--avatarHorizontal-2.py-3
              .row.align-items-center
                .col-lg-auto(data-aos="fade-right")
                  figure
                    img(src="@/assets/curso/temas/tema2/img3.png", alt="alt").tema1-img-1
                .col
                  p #[strong Para tener en cuenta:] una ficha técnica no debe confundirse con una hoja de datos de seguridad de productos o servicios. El objetivo es informar específicamente al usuario final de las características específicas del producto o servicio. Una hoja de datos técnicos puede presentarse a discreción del proveedor del producto y contener la información que considere oportuna.

    .row.my-5
      h4 ¿Para qué sirve la ficha técnica?

    .row.justify-content-center
        .col-lg-4
          .bloque-texto-b1.color-secundario.p-1
            .bloque-texto-b1__texto
              p #[strong La hoja de datos o ficha técnica es única para cada producto y se utiliza para explicar todos los detalles valiosos.] La idea es que, estudiando el perfil del producto o servicio, se pueda aprender exactamente cómo funciona y sus características más importantes. Aunque no es una herramienta de #[i marketing], muchas personas revisan las especificaciones del producto antes de comprarlo, pero para hacerlo, debe entenderse bien y organizarse.
              p.mt-3 Esto significa que, si se desea crear una hoja de datos, se debe saber claramente qué tipo de personas leerán el documento y qué harán con él. De lo contrario, se corre el riesgo de escribir información que no le interesa al consumidor o proveedor.
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema2/img4.png", alt="alt").img4-tema2
        .col-lg-4
          .bloque-texto-b2.color-secundario.p-1
            .bloque-texto-b2__texto
              p La mejor manera de utilizar las hojas de datos es animar a los lectores a aprender más sobre el producto, de modo que puedan leer informes técnicos y comparar el producto con los productos de la competencia. Las hojas de datos también se utilizan para ayudar a los lectores a tomar decisiones más rápidamente.
              p.mt-3 Cualquier definición que pretenda explicar qué es una ficha técnica y para qué sirve, debe indicar la utilidad y uso en las especificaciones de un producto para su comercialización. #[strong Si bien una hoja de datos no es necesaria para las ventas, ayuda a una parte de la audiencia de una empresa a decidir comprar sus productos.]

    .row.my-5
      h4 Tips de una ficha técnica

    .row.justify-content-center.mt-5
      .col-lg-9
        .row
          .col-lg-9
            .hr--line
            .row
              .col-lg-2(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen').img5-tema2
              .col-lg-10
                p Presentar al público la información adecuada sobre los productos en una ficha técnica, tiene un amplio número de ventajas, entre las que se encuentran: mejorar la experiencia de compra de los usuarios y generar fidelidad con la marca.

            .hr--line
            .row
              .col-lg-2(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen').img5-tema2
              .col-lg-10
                p En este punto se exponen algunos consejos para que la ficha técnica cumpla con el propósito de dar información valiosa a los usuarios, y les permita conocer todo lo que necesitan para tomar una decisión de compra.
            .hr--line
           
    .row.my-5
      p #[strong La idea es que se pueda escribir una hoja de datos para:]

    .row.my-5(data-aos="fade-right")
      figure
        img(src="@/assets/curso/temas/tema2/img9.png", alt="alt")


    .row.justify-content-center.mt-5
      .col-lg-10
        .crd.crd--avatarHorizontal-4.p-2
          .row.align-items-center
            .col
              p Se debe tener en cuenta que, dependiendo del sector al que pertenezca la marca, la utilidad de la ficha técnica puede ser mayor o menor.  #[strong Se debe tener en cuenta que usualmente las fichas técnicas son cortas, y no es por casualidad, sino por razones prácticas.] La mayoría de la gente ni siquiera sabe lo que es una hoja de datos, así que se tiene la dificultad añadida de escribir para alguien que no necesariamente maneja este documento.
            .col-lg-auto(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/tema2/img10.png", alt="alt").tema1-img-1

    .row.mt-5
      p He aquí algunos ejemplos de preguntas que se pueden hacer para asegurarse de que se incluye la información esencial en la ficha técnica; sin embargo, es necesario recordar que para responder a estas preguntas y ver si una ficha técnica es eficaz, se debe tener presente su público objetivo y respuestas breves. Siguiendo estos consejos, la hoja de datos puede ser una buena referencia para suplir las necesidades de la empresa.


    .row.mt-5(data-aos="fade-right")
      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="51%" y="22%" numero="1")
          h3.text-center ¿Cómo resuelve este producto las necesidades?

        .tarjeta.color-acento-botones.p-3(x="63%" y="9%" numero="2")
          h3.text-center ¿Qué hace el producto? ¿Para qué sirve?

        .tarjeta.color-acento-botones.p-3(x="75%" y="26%" numero="3")
          h3.text-center ¿Qué diferencia a su producto del evento?

        .tarjeta.color-acento-botones.p-3(x="83%" y="15%" numero="4")
          h3.text-center ¿Cuáles son los factores técnicos que permiten su funcionamiento?


    .row.mt-5
      p Para algunas personas, la descripción no es una parte importante de una hoja de datos, sin embargo, se cree que utilizarla ayudará a proyectar la idea que se tiene sobre el producto y, en cierto modo, esto puede ayudar a encontrarlo más fácilmente. Se sugiere destacar algunas de las características más importantes del producto, incluso incluir algunos detalles sobre los beneficios que este puede aportar a los usuarios.

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          b Con el siguiente ejemplo, se puede observar lo importante que es una ficha técnica que incluya una breve descripción del producto que se vende.


    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/img12.png").img12-tema-2
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 1
                  p Ejemplo ficha técnica
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexos/Anexo_1-3.jpg')" target="_blank").posicion-boton
                    span Descargar
                    i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
