<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-10
        .row.justify-content-center
          .col-11.col-lg-6
            p Bienvenido, aprendiz!, en este componente se abordarán los conceptos para identificar los productos y servicios, ficha técnica, estándares de servicio y requisiciones, con el fin de lograr los objetivos e identificar necesidades de contratación para eventos masivos. Basados en los objetivos clave de la organización antes de la planificación y mediante la aplicación de los temas abordados, el OPE (Organizador Profesional de Eventos) podrá asegurarse de que cada parte de su evento esté optimizado. 
          .col-8.col-lg-6(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.text-center Lo invitamos a ver el siguiente video para que tenga una idea general de la temática que se abordará y le deseamos éxitos en su proceso de aprendizaje. ¡Ánimo!.

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
