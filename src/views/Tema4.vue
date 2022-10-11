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
            .crd.crd--avatarHorizontal-2.py-3
              .row.align-items-center
                .col-lg-auto(data-aos="fade-right")
                  figure
                    img(src="@/assets/curso/temas/tema4/img1.png", alt="alt").tema1-img-1
                .col
                  p #[strong Las requisiciones son documentos importantes en donde se establece la información detallada de los productos o servicios que se van a contratar con los proveedores.]  Se invita a observar el siguiente video en donde se contextualizan los elementos para tener en cuenta para la elaboración de las órdenes de compra, de acuerdo con las necesidades presentadas en las requisiciones.


    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_4_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 4.1 Tipos de requisiciones 

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

          .tarjeta.tarjeta-amarilla.p-4(titulo="Compra por contrato")
            p Un pedido de compra por contrato establece los datos del proveedor y, posiblemente, también las condiciones de pago y entrega. No se especifican los productos que se van a comprar. Un pedido de compra por contrato se utiliza para crear un acuerdo y unas condiciones de suministro entre un comprador y un vendedor como base para una relación comercial continua. Para pedir un producto, el comprador puede remitirse a la orden de compra por contrato al plantear una orden de compra estándar.

      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/img2.png", alt="alt")

    #t_4_2

    .titulo-segundo.color-acento-contenido.my-5
      h2 4.2 Técnicas de elaboración  

    .row.mt-5
      .col-lg-3.mt-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema4/img3.png", alt="alt")
      
      .col-lg-4
        .bloque-texto-b6.color-secundario.p-4
            .bloque-texto-b6__texto
              p Comprar puede parecer una actividad tan fácil y cotidiana, sin embargo, es necesario pensar en todos los errores que se cometen en este proceso; de repente se compran cosas que no se necesitan en el afán del momento o saliendo de la tienda por un antojo.
              p Comprar a gran escala no es diferente. Las empresas se encuentran a menudo con un exceso de existencias que les perjudica más de lo que les beneficia.

      .col-lg-4
        .bloque-texto-b5.color-secundario.p-4
            .bloque-texto-b5__texto
              p Aquí es donde entra en juego la necesidad de una ‘requisición de compra’, pero antes de profundizar en estas, es necesario aclarar que este documento necesita la aprobación de las partes pertinentes, lo que inicia con el proceso de solicitud de compra y termina con el envío de la orden de compra por parte del equipo de compras al proveedor. Este proceso debe ser flexible y puede adaptarse a cualquier empresa.

    .row
      b.text-center A continuación, se presenta un modelo básico para elaborar la orden de compra.

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema4/img4.png").img12-tema-2
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 2
                  p Ejemplo orden de compra
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/anexos/Anexo_2-5.xlsx')" target="_blank").posicion-boton
                    span Descargar
                    i.fas.fa-file-download

    .row
      .tarjeta.tarjeta-amarilla.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img5.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong Las técnicas van de acuerdo con el flujo de trabajo de la solicitud de compra,] que comienza cuando la empresa necesita realizar una compra. Esta necesidad de compra puede ser cualquier cosa, desde algo mínimo de oficina hasta grandes cantidades o volúmenes de productos que se describen en el formulario de solicitud de compra.
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img6.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong Una vez rellenado el formulario de solicitud,] pasará por un sistema interno de aprobaciones en el que será revisado y aprobado por el jefe del departamento.
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img7.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong Una vez aprobada,] la solicitud de compra será revisada por el departamento de compras y el departamento financiero, que pueden decidir si rechazan o aprueban la compra en función de sus necesidades.
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img8.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong A partir de la solicitud de compra aprobada,] el departamento de compras adquirirá presupuestos de diferentes proveedores. Estos presupuestos facilitarán la comparación de los diferentes precios, la fiabilidad y el plazo de entrega.
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img9.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong El departamento de compras ganará un presupuesto y emitirá una orden de compra] que se enviará al proveedor como un contrato legalmente vinculante entre el comprador y el proveedor.
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img10.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong A continuación, se entregarán los artículos] y se comprobará si son de la cantidad y calidad adecuadas. En este paso también se procesan las devoluciones (si las hay).
          
          .row(titulo="")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img11.png", alt="alt").img5-tema4

            .col-lg-8
              p.mt-5 #[strong Por último, para garantizar su exactitud,] se realiza un cotejo a tres bandas entre la solicitud de compra, la orden de compra y la factura entregada.
          
    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p #[strong Para un estudio completo del tema,] , recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 




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
