<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="" titulo="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-puzzle-piece.texto-blanco
      h1 Actividad didáctica  

    .titulo-segundo.color-acento-contenido.my-5
      h2 Arrastrar y soltar 


    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Arrastrar_soltar.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        p.mb-4 Esta es una actividad de “Arrastrar y Soltar, donde encontrará 2 columnas, una de ellas entrega los posibles conceptos y la otra presenta las definiciones vistas a lo largo del componente. Asocie las definiciones con los conceptos correspondientes. Se debe seleccionar una columna, arrastrar y soltar la respuesta relacionada con las definiciones dadas en la siguiente columna.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
