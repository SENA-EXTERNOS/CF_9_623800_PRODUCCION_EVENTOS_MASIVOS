<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Requisiciones

    .row.justify-content-center.mt-5
          .col-lg-10
            .crd.crd--avatarHorizontal-5.py-3
              .row.align-items-center
                .col-lg-auto(data-aos="fade-right")
                  figure
                    img.img-a.img-t(src="@/assets/curso/temas/tema4/img1.png", alt="alt")
                .col
                  p #[strong Las requisiciones son documentos importantes en donde se establece la información detallada de los productos o servicios que se van a contratar con los proveedores.]  Se invita a observar el siguiente video en donde se contextualizan los elementos para tener en cuenta para la elaboración de las órdenes de compra, de acuerdo con las necesidades presentadas en las requisiciones.


    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.mt-5 Tipos de requisiciones 

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
              p Existen diferentes tipos de órdenes de compra o requisiciones, si bien todos tienen el mismo aspecto, conocer las características de cada tipo puede ser una verdadera ventaja competitiva

    .row.mt-5
      b A continuación se presentan los diferentes tipos de requisición y sus principales características:

    .row.justify-content-center.mt-5
      .col-lg-9
        TabsA.color-acento-contenido.mb-5                  
          .tarjeta.tarjeta-amarilla.p-4(titulo="Estándar")
            p Esta orden de compra se utiliza normalmente para adquisiciones irregulares, poco frecuentes o únicas. Son las que contienen una especificación completa de la compra, estableciendo el precio, la cantidad y los plazos de pago y entrega.
            p Un restaurante puede emitir una orden de compra estándar cuando adquiere nuevas mesas y sillas. Si todo va bien, ésta debería ser una compra única para el restaurante, y el contrato se cumplirá una vez que las sillas se entreguen en buen estado.
      
          .tarjeta.tarjeta-amarilla.p-4(titulo="Planificada")
            p Al igual que una orden de compra estándar, una orden de compra planificada es relativamente completa. Esta orden requiere detalles completos de los bienes y servicios que se van a comprar y sus costos. Las fechas de pago y entrega también se incluyen en esta orden, pero se tratan como fechas provisionales. La emisión de una orden de compra planificada permite realizar pedidos individuales.
            p Por ejemplo, un restaurante puede necesitar 50.000 manteles individuales desechables en un año: el gerente podría crear una orden de compra planificada con una imprenta comercial detallando el precio y la cantidad con un calendario de entrega tentativo. Después de utilizar los primeros 5.000 manteles individuales, el restaurante crearía una liberación contra la orden de compra para pedir más.

          .tarjeta.tarjeta-amarilla.p-4(titulo="General")
            p Esta orden implica que el comprador se compromete a adquirir determinados bienes o servicios de un proveedor específico, pero no en una cantidad concreta. El precio puede confirmarse o no en un pedido global. Este tipo de pedido suele utilizarse para la adquisición repetitiva de un conjunto específico de artículos a un proveedor, como materiales y suministros básicos.
            p En el ejemplo del restaurante anterior, también podrían optar por utilizar un pedido general para adquirir los manteles individuales desechables; el hecho de no tener que confirmar una cantidad específica puede hacer que esta opción sea preferible si la cantidad requerida no está clara.

          .tarjeta.tarjeta-amarilla.p-4(titulo="Compra por<br> contrato")
            p Un pedido de compra por contrato, establece los datos del proveedor y posiblemente, también las condiciones de pago y entrega. No se especifican los productos que se van a comprar. Un pedido de compra por contrato se utiliza para crear un acuerdo y unas condiciones de suministro entre un comprador y un vendedor como base para una relación comercial continua. Para pedir un producto, el comprador puede remitirse a la orden de compra por contrato al plantear una orden de compra estándar.

      .col-lg-3(data-aos="fade-left")
        figure
          img.img-a.img-t(src="@/assets/curso/temas/tema4/img2.png", alt="alt")

    h3.mt-5 Técnicas de elaboración  

    .row.mt-5
      .col-lg-3.mt-5(data-aos="fade-right")
        figure
          img.img-a.img-t(src="@/assets/curso/temas/tema4/img3.png", alt="alt")
      
      .col-lg-4
        .bloque-texto-b6.color-secundario.p-4
            .bloque-texto-b6__texto
              p Comprar puede parecer una actividad tan fácil y cotidiana, sin embargo, es necesario pensar en todos los errores que se cometen en este proceso, como  comprar cosas por impulso, ya sea por antojo o comprar algo no requerido por falta de planificación.
              p Comprar a gran escala no es diferente. Las empresas se encuentran a menudo con un exceso de existencias que les perjudica más de lo que les beneficia.

      .col-lg-4
        .bloque-texto-b5.color-secundario.p-4
            .bloque-texto-b5__texto
              p Aquí es donde entra en juego la necesidad de una ‘requisición de compra’, pero antes de profundizar en estas, es necesario aclarar que este documento necesita la aprobación de las partes pertinentes, lo que inicia con el proceso de solicitud de compra y termina con el envío de la orden de compra por parte del equipo de compras al proveedor. Este proceso debe ser flexible y puede adaptarse a cualquier empresa.

    .row
      b.text-center.mt-5 En el siguiente anexo se presenta un modelo básico para elaborar la orden de compra.

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img.img-a.img-t(src="@/assets/curso/temas/tema4/img4.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 PDF - Anexo 2
                  p.mb-0 Ejemplo orden de compra
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_2-5.pdf')" target="_blank").posicion-boton
                    span Descargar
                    i.fas.fa-file-download
    p.mb-5 A continuación podrá identificar una propuesta de flujo de trabajo de la solicitud de compra: 

    .tarjeta.tarjeta-amarilla.p-5
      PasosB.color-acento-contenido
        .row.justify-content-center.align-items-center.mt-3(titulo="Paso 1")
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/tema4/img5.png", alt="alt")

          .col-lg-7
            p.mt-5 #[strong Identificar la necesidad:] esta necesidad de compra puede ser cualquier cosa, desde algo mínimo de oficina hasta grandes cantidades o volúmenes de productos que se describen en el formulario de solicitud de compra.
        
        .row.justify-content-center.align-items-center.mt-3(titulo="Paso 2")
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/tema4/img7.png", alt="alt")

          .col-lg-7
            p.mt-5 <b>Aprobación de solicitud de compra:</b> a partir de aprobación, el departamento de compras adquirirá presupuestos de diferentes proveedores. Estos presupuestos facilitarán la comparación de los diferentes precios, la fiabilidad y el plazo de entrega.
        
        .row.justify-content-center.align-items-center.mt-3(titulo="Paso 3")
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/tema4/img8.png", alt="alt")

          .col-lg-7
            p.mt-5 <b>Designación de presupuesto:</b> el departamento de compras ganará un presupuesto y emitirá una orden de compra que se enviará al proveedor como un contrato legalmente vinculante entre el comprador y el proveedor.
        
        .row.justify-content-center.align-items-center.mt-3(titulo="Paso 4")
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/tema4/img10.png", alt="alt")

          .col-lg-7
            p.mt-5 <b>Recepción de la compra:</b> se entregarán los artículos y se comprobará si son  la cantidad y calidad solicitadas, a partir del cotejo a tres bandas entre la solicitud de compra, la orden de compra y la factura entregada.
            p En este paso también se procesan las devoluciones (si las hay).
          
    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 




</template>

<script>
export default {
  name: 'Tema3',
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
