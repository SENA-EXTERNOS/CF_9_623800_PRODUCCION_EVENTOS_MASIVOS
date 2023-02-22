export default {
  global: {
    componenteFormativo:
      'Requerimientos técnicos de productos y servicios para eventos',
    descripcionCurso:
      'Los eventos masivos se definen por el gran número de invitados, regularmente los requerimientos para su ejecución son complejos y se hacen mediante una coordinación de múltiples actividades técnicas durante varios días, todos deben compartir el mismo objetivo y orientarse en la misma dirección, cumpliendo con los requerimientos técnicos necesarios para el fin propuesto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Productos y servicios para eventos ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ficha técnica de productos y servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estándares de calidad y de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Requisiciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos y servicios para eventos ',
      referencia:
        'EBC Academia (2019) <i>¿Cómo se desarrolla un evento masivo?<i> (Video) Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=gJFFCFH-EEs&ab_channel=EBCAcademia',
    },
    {
      tema: 'Ficha técnica de productos y servicios',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. <i>Guía Técnica para la reglamentación local de eventos con aglomeraciones de público.<i> Bogotá, 2018.',
      tipo: 'Manual',
      link:
        ' https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/27735/Guia_aglomeraciones_publico.pdf?sequence=6&isAllowed=y',
    },
    {
      tema: 'Estándares de calidad y de servicio',
      referencia:
        'Decreto 277 de 2021. [Alcaldesa Mayor de Bogotá] Reactivación de eventos masivos en Bogotá. Julio 30 de 2021. Corporación CICCE',
      tipo: 'Decreto',
      link:
        'https://www.secretariajuridica.gov.co/decreto-277-de-2021-reactivacion-de-eventos-masivos-en-bogota',
    },
    {
      tema: 'Estándares de calidad y de servicio ',
      referencia: 'ISO 20121:2013 Sostenibilidad de eventos',
      tipo: 'Norma',
      link:
        'https://www.normas-iso.com/iso-201212013-sostenibilidad-de-eventos/',
    },
    {
      tema: 'Estándares de calidad y de servicio',
      referencia:
        'Corporación CICCE. <i>Guía para la implementación de la Norma Técnica Sectorial Colombiana NTS-TS 006-2<i>',
      tipo: 'Norma',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=499d6265-6663-4c1d-b4c2-7e0f166be5f5',
    },
    {
      tema: 'Requisiciones',
      referencia: 'Colombia compra eficiente. <i>Órdenes de compra<i>',
      tipo: 'Formato',
      link:
        'https://www.colombiacompra.gov.co/tienda-virtual-del-estado-colombiano/ordenes-compra',
    },
  ],
  glosario: [
    {
      termino: 'Audiovisuales',
      significado:
        'estos medios se identifican como sistemas de comunicación relacionados con imagen, fotografía y audio.',
    },
    {
      termino: 'Calidad',
      significado:
        'percepción de satisfacción de cómo un producto se ajusta a requerimientos del cliente de acuerdo con un criterio específico cumpliendo con un requisito.',
    },
    {
      termino: 'Catering',
      significado:
        'es la actividad de proporcionar comida y bebida a un gran número de personas.',
    },
    {
      termino: 'Evento',
      significado:
        'cualquier cosa que ocurra, principalmente  algo importante o inusual como ejemplo mundial catar 2022.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento conciso con datos técnicos de un producto o servicio.',
    },
    {
      termino: 'Producto',
      significado:
        'artículo que se ofrece a la venta. Un producto puede ser un servicio o un artículo, físico, virtual o cibernético. Cada producto tiene un costo y se vende a un precio.',
    },
    {
      termino: 'Requisición',
      significado:
        'se conoce también con el nombre de solicitud de compra, documento interno que describe los bienes y servicios requeridos para compra por una empresa.',
    },
    {
      termino: '<i>Streaming<i>',
      significado:
        'sistema tecnológico que permite ver y escuchar contenido enviado desde Internet u otra red sin tener que descargar datos al dispositivo desde el que se está viendo y escuchando el archivo.',
    },
    {
      termino: 'Transporte',
      significado:
        'sistema de vehículos, como autobuses, trenes, aviones, etc. para ir de un lugar a otro.',
    },
    {
      termino: '<i>Venue<i>',
      significado:
        'lugar donde ocurre algo, especialmente un evento organizado como un concierto, una conferencia o una competición deportiva.',
    },
  ],
  referencias: [
    {
      referencia:
        'Almécija, A. (s.f.). Herramientas de la OMS para la evaluación y atenuación de riesgos en eventos multitudinarios en el contexto del COVID-19. Universidad Politécnica de Cataluña, Barcelona. SEGUES',
      link:
        'https://segues.upc.edu/es/covid19/anna-almecija-casanova/herramientas-de-la-oms-para-la-evaluacion-y-atenuacion-de-riesgos-en-eventos-multitudinarios-en-el-contexto-del-covid-19',
    },
    {
      referencia:
        'Armstrong Ceilings (9 de septiembre de 2022). nubes acústicas y marquesinas. Recuperado de',
      link:
        'https://www.armstrongceilings.com/commercial/es/search.html?q=nubes+acusticas+y+marquesinas#bbbh=%7B%22selectedItem%22%3A%7B%22name%22%3A%22searchOther%22%2C%22itemIndex%22%3Anull%7D%7D',
    },
    {
      referencia:
        'Cuadrado, C (2018). El ABC en la organización de eventos.  Fund. Confemetal.',
      link: '',
    },
    {
      referencia:
        'Cuadrado, C (2008). Protocolo y comunicación en la empresa y los negocios. Fund, Confemetal.',
      link: '',
    },
    {
      referencia:
        'Escriva, Saval y Martínez (Ed.). (2018). Gestión de compras. Mc-Graw-Hill/España.',
      link: '',
    },
    {
      referencia:
        'Estébanez, B. (2004). Protocolo Empresarial y Social. Editorial London Diplomatic Academy.',
      link: '',
    },
    {
      referencia:
        'Fenich, G. (2014). Planificación y gestión de reuniones, exposiciones, eventos y convenciones. Pearson.',
      link: '',
    },
    {
      referencia:
        'Jijena, R. (Ed.).  (2018). Cómo organizar eventos con éxito.  Alfaomega Colombia S.A.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
