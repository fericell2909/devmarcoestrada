<?php 
    $dominio =  "https://fericell2909.github.io/devmarcoestrada";
    $number= "51902530468";
    $number_split= "+51 902 530 468";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Marco Estrada Lopez - Portafolio</title>
    <meta name="description" content="Sitio Web de Marco Estrada Lopez en donde encontraras informacion profesional" />
    <meta name="keywords" content="Portafolio , Desarrollador Web Full Stack , Remote , Emprendedor , Entusiadas Arquitecto Cloud" />
    <meta name="author" content="Marco Estrada Lopez" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Marco Estrada Lopez - Portafolio" />
    <meta property="og:description" content="Sitio Web de Marco Estrada Lopez en donde encontraras informacion profesional para trabajos personales y consultoría" />
    <meta property="og:image" content="<?php echo  $dominio;?>/assets/img/main_image.png" />
    <meta property="og:image:width" content="1328" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="<?php echo  $dominio;?>" />
    <meta property="og:site_name" content="Sitio Web de Marco Estrada Lopez en donde encontraras informacion profesional" />
    
    <meta property="fb:app_id" content="101410998343668" />
    <!--  FavIcon  -->
    
     <link rel="shortcut icon" type="image/x-icon" href="/assets/img/ico.ico" />

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Muli:400,600" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" rel="stylesheet">

        <!--  bootstrap Css  -->
        <link rel="stylesheet" href="assets/css/bootstrap.css">
        <!--  pagepiling Css  -->
        <link rel="stylesheet" type="text/css" href="assets/css/jquery.pagepiling.css" />
        <!--  LineIcon Css  -->
        <link rel="stylesheet" href="assets/css/LineIcons.css">
        <!--  MagnificPopup Css  -->
        <link rel="stylesheet" href="assets/css/magnific-popup.css">
        <!--  OwlCarousel Css  -->
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <!--  Custom Style CSS  -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <style>
        .float{
            position:fixed;
            width:60px;
            height:60px;
            bottom:40px;
            right:40px;
            background-color:#25d366;
            color:#FFF;
            border-radius:50px;
            text-align:center;
            font-size:30px;
            box-shadow: 2px 2px 3px #999;
            z-index:100;
        }
    .my-float{
        margin-top:16px;
    }
    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180713703-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', 'UA-180713703-1');

      
    </script>
    </head>
    <body class="pilling-page nill-dark"  data-spy="scroll" data-target="#scrollspy" data-offset="1">

    <!--  Pre Loader  -->
    <div id="overlayer">
        <span class="spinner-grow spinner-grow-lg loader" role="status" aria-hidden="true"></span>
    </div>
    <div id="pagepiling" class="pagepiling">
    <a href="https://api.whatsapp.com/send?phone=<?php echo $number;?>&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Tus%20Servicios%20" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    
    </a>
        <!--   Header Start -->
        <header>
            <div class="logo-area">
                <a href="/" class="logo">
                    <span class="size-sm mb-0 font-weight-bold pl-3 text-dark text-left">M<span class="base-color">E</span></span>
                </a>
            </div>
            <div class="header-info-area">
                <a class="overlay-menu-toggler lni-menu size-md" href="javascript:void(0);"></a>
                <!--    Overlay Menu Start    -->
                <div class="overlay-menu bg-blue py-3 px-4 text-center center-item">
                    <!-- Overlay Menu -->
                    <div id="scrollspy" class="overlay-menu-list">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2 overlay-nav">
                                    <ul class="list-group text-left" id="myMenu">
                                        <li data-menuanchor="hero" class="list-group-item"><a href="#hero">Inicio</a></li>
                                        <li data-menuanchor="about" class="list-group-item"><a href="#about">Sobre mi</a></li>
                                        <li data-menuanchor="services" class="list-group-item"><a href="#resume">Resumen</a></li>
                                        <li data-menuanchor="services" class="list-group-item"  style="display: none;"><a href="#services">Servicios</a></li>
                                        <li data-menuanchor="portfolio" class="list-group-item"><a href="#portfolio">Portafolio</a></li>
                                        <li data-menuanchor="client" class="list-group-item"  style="display: none;"><a href="#testimonial">Clientes</a></li>
                                        <li data-menuanchor="blog" class="list-group-item" style="display: none;"><a href="#blog">Blog</a></li>
                                        <li data-menuanchor="contact" class="list-group-item" ><a href="#contact">Contactame</a></li>
                                    </ul>
                                    <ul class="list-group contact-info text-left mb-0">
                                        <li class="list-group-item"><span>INFORMACION DE CONTACTO</span></li>
                                        <li class="list-group-item"><span><i class="lni-map-marker"></i> Nuevo Chimbote, Perú</span></li>
                                        <li class="list-group-item"><span><i class="lni-phone-handset"></i> +51 902530468</span></li>
                                        <li class="list-group-item"><span><i class="lni-envelope"></i> fericell2909@gmail.com</span></li>
                                        <li class="list-group-item"><span>Sígueme me :</span></li>
                                        <li class="list-group-item">
                                            <ul class="list-inline socails">
                                                <li class="list-inline-item"><a href="https://github.com/fericell2909" target="_blanck"><i class="lni-github-original"></i></a></li>
                                                <li class="list-inline-item"><a href="https://www.linkedin.com/in/marcoestradalopez/"  target="_blanck"><i class="lni-linkedin-original"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--    Overlay Menu End    -->
            </div>
        </header>
        <!--   Header End   -->

        <!--    Hero Start    -->
        <section class="section pp-scrollable hero hero-02 full-screen p-0 bg-dark" id="hero" data-navigation-color="#fff" data-navigation-tooltip="INICIO">
            <div class="container-fluid">
                <div class="title-small">
                    <p class="text-dark">Inicio</p>
                </div>
                <div class="row justify-content-center" id="hero-slider">
                    <div class="owl-carousel owl-theme">
                        <!--  Item1 -->
                        <div class="hero-slide hero-item1 full-screen"></div>
                        <!--  Item2 -->
                        <div class="hero-slide hero-item2 full-screen"></div>
                        <!--  Item3 -->
                        <div class="hero-slide hero-item3 full-screen"></div>
                    </div>
                </div>
                <div class="text-center hero-content">
                    <div class="col-lg-12">
                        <div class="hero-content text-center">
                            <img src="assets/img/home_perfil.jpg" alt="" class="rounded-circle img-thumbnail">
                            <h3 class="text-dark mb-0 mt-3">Soy Marco Estrada Lopez</h3>
                            <h1 class="text-dark text-capitalize mb-3"><span class="base-color">Un  </span> <span class="element" data-elements="Desarrollador de Software Full Stack"></span></h1>
  
                            <div>
                                    <ul class="list-inline socails ">
                                        <li class="list-inline-item"><a href="https://github.com/fericell2909" target="_blanck"><i class="lni-github-original" style="color: white;"></i></a></li>
                                        <li class="list-inline-item"><a href="https://www.linkedin.com/in/marcoestradalopez/"  target="_blanck"><i class="lni-linkedin-original" style="color: white;"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-icon">
                    <a href="#about">
                        <i class="lni-arrow-down text-dark size-sm"></i>
                    </a>
                </div>
            </div>
        </section>
        <!--    Hero End    -->
        <!--   About Start   -->
        <section id="about" class="section pp-scrollable about text-dark bg-dark" data-navigation-color="#fff" data-navigation-tooltip="SOBRE MI">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">Sobre mí</p>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <img src="assets/img/about.jpg" alt="/" class="rounded img-thumbnail w-100">
                            </div>
                            <div class="col-lg-6 personal-item  mb-4 mb-lg-0">
                                <h2 class="text-dark mb-2">Sobre <span class="base-color">Mí</span></h2>
                                <h5 class="text-dark mb-3">Desarrollador Web Senior | Scrum Developer Certified |  PHP , React - Vue Lover</h5>
                                <div class="row">
                                    <div class="col-lg-5 col-sm-6 personal-info">
                                        <p class="text-dark">Nacimiento : <span class="text-gray"> 29 Setiembre 1987</span></p>
                                        <p class="text-dark">web : <span class="text-gray"><?php echo  $dominio;?></span></p>
                                        <p class="text-dark">Ciudad : <span class="text-gray"> Nuevo Chimbote, Perú</span></p>
                                    </div>
                                    <div class="col-lg-5 col-sm-6 personal-info">
                                        <p class="text-dark">Email : <span class="text-gray">fericell2909@gmail.com</span></p>
                                        <p class="text-dark">Hobby : <span class="text-gray">Leer - Escuchar Musica </span></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <a href="<?php echo  $dominio;?>/assets/cv/MARCO_ESTRADA_LOPEZ.pdf" download="ES_MARCO_ESTRADA_LOPEZ" class="pill-button mt-3 mb-lg-0 mr-4">Descargar CV</a>
                                        <a href="#contact" class="pill-button mt-3 mb-lg-0">Enviame un Mensaje</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="count-up" class="text-center" style="display:none;">
                            <div class="container">
                                <div class="row mt-4">
                                    <!-- Item-01 -->
                                    <div class="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div class="count-icon">
                                            <i class="lni-download size-md"></i>
                                        </div>
                                        <div class="count-content">
                                            <span class="timer count-number" data-from="0" data-to="286" data-speed="5000">286</span>
                                        </div>
                                        <p class="mb-0 ">Files Download</p>
                                    </div>
                                    <!-- Item-02 -->
                                    <div class="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div class="count-icon">
                                            <i class="lni-pencil-alt size-md"></i>
                                        </div>
                                        <div class="count-content">
                                            <span class="timer count-number" data-from="0" data-to="6549" data-speed="5000">6549</span>
                                        </div>
                                        <p class="mb-0">Project Done</p>
                                    </div>
                                    <!-- Item-03 -->
                                    <div class="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div class="count-icon">
                                            <i class="lni-medall size-md"></i>
                                        </div>
                                        <div class="count-content">
                                            <span class="timer count-number" data-from="0" data-to="793" data-speed="5000">793</span>
                                        </div>
                                        <p class="mb-0">Get Award</p>
                                    </div>
                                    <!-- Item-04 -->
                                    <div class="col-6 col-md-3 mt-5 mb-md-0 count-item">
                                        <div class="count-icon">
                                            <i class="lni-emoji-smile size-md"></i>
                                        </div>
                                        <div class="count-content">
                                            <span class="timer count-number" data-from="0" data-to="286" data-speed="5000">286</span>
                                        </div>
                                        <p class="mb-0">Happy Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--    About End    -->

        <!--   Resume Start   -->
        <section id="resume" class="section pp-scrollable resume bg-dark" data-navigation-color="#fff" data-navigation-tooltip="RESUMEN">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">Resumen</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h2 class="text-dark mb-3">Mi <span class="base-color">Resumen</span></h2>
                                    <p class="text-muted">Desarrollador Web Senior con más de 12 años de experiencia en el back-end y front-end. Capacitado profesionalmente para trabajar bajo presión acorde con las metas y objetivos definidos por el usuario, y enfocado en alcanzar la entrega a tiempo, considerando todas las etapas del ciclo de desarrollo para proyectos web dinámicos.

                                        Competente en numerosos lenguajes de programación y framework, incluidos PHP, Laravel, Javascript, Vue.js, React.js , .Net, con experiencia consolidada en SCRUM Developer Certified - SDC y gestión de proyectos.
                                        
                                        Fácil de trabajar en equipo, adaptable y dispuesto a aprovechar una próxima oportunidad desafiante.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-6">
                            <div class="col-lg-6">
                                <div class="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                                    <div class="skillbar clearfix" data-percent="95%">
                                        <div class="skillbar-title"><span>PHP - Laravel</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">95%</div>
                                    </div>
                                    <div class="skillbar clearfix " data-percent="85%">
                                        <div class="skillbar-title"><span>C# - ASP.NET MVC</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">85%</div>
                                    </div>
                                    <div class="skillbar clearfix" data-percent="75%">
                                        <div class="skillbar-title"><span>JavaScript - Vue.js - React.js</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                    <div class="skillbar clearfix" data-percent="80%">
                                        <div class="skillbar-title"><span>GraphQL</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                                    <div class="skillbar clearfix" data-percent="95%">
                                        <div class="skillbar-title"><span>PostgreSQL - MySQL - SQL Server - Oracle</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                    <div class="skillbar clearfix " data-percent="85%">
                                        <div class="skillbar-title"><span>Git - Subversion - Team Foundation Server</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                    <div class="skillbar clearfix" data-percent="75%">
                                        <div class="skillbar-title"><span>Scrum Developer Certified - SDC</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                    <div class="skillbar clearfix" data-percent="80%">
                                        <div class="skillbar-title"><span>Wordpress</span></div>
                                        <div class="skillbar-bar"></div>
                                        <div class="skill-bar-percent">100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <h3 class="text-dark mb-2"><i class="lni-graduation base-color"></i>Educación</h3>
                                <ul class="timeline">
                                    <li>
                                        <h6 class="base-color mb-0">Maestría en Gestión de Tecnologías de Información</h6>
                                        <small class="text-muted ">2018 - 2020</small>
                                        <p class="text-dark py-3">Universidad Nacional del Santa</p>
                                    </li>
                                    <li>
                                        <h6 class="base-color mb-0">Ingeniero de Sistemas e Informática</h6>
                                        <small class="text-muted ">2006 - 2010</small>
                                        <p class="text-dark py-3">Universidad Nacional del Santa</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <h3 class="text-dark mb-2 mt-5 mt-lg-0"><i class="lni-pencil base-color"></i>Experiencia</h3>
                                <ul class="timeline">
                                    <li>
                                        <h6 class="base-color mb-0">Desarrollador Web Full Stack Remoto</h6>
                                        <small class="text-muted ">Enero 2021 - Hoy</small>
                                        <p class="text-dark py-3">Gux</p>
                                    </li>
                                    <li>
                                        <h6 class="base-color mb-0">Desarrollador Web Full Stack Remoto</h6>
                                        <small class="text-muted ">Julio 2020 - Dic.2020</small>
                                        <p class="text-dark py-3">Brandfood</p>
                                    </li>
                                    <li>
                                        <h6 class="base-color mb-0">Desarrollador de Software Senior</h6>
                                        <small class="text-muted ">2018 - 2020</small>
                                        <p class="text-dark py-3">Uladech Catolica</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <!--   Resume End   -->

        <!--   Services Start   -->
     
        <!--   Services End   -->

        <!--  Portfolio Start  -->
        <section id="portfolio" class="section pp-scrollable portfolio bg-dark" data-navigation-color="#fff" data-navigation-tooltip="PORTAFOLIO">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">Portafolio</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h2 class="text-dark"><span class="base-color">Portafolio</span></h2>
                                    <p class="text-muted mx-auto section-subtitle mt-3">Trabajos realizados y/o participado.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <ul id="portfolio-filter" class="list-unstyled list-inline mb-0 col-lg-12 text-left portfolio-filter">
                                <li class="list-inline-item">
                                    <a href="#" data-filter="*" class="active my-1">Todos</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" data-filter=".webdesign" class="my-1">Web</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" data-filter=".mobiledesign" class="my-1">Tienda Virtual</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" data-filter=".seo" class="my-1">Wordpress</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" data-filter=".graphic" class="my-1">Libre</a>
                                </li>
                            </ul>
                        </div>
                        <div class="portfolio-items mt-4 row" >
                           
                            <!-- <div class="col-lg-4 portfolio-item my-3 seo" >
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/tienda_joeburguer.png" alt="Tienda Virtual de JoeBurguer">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://joesburguer.com/product" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/tienda_joeburguer.png" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">JoeBurguer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 portfolio-item my-3 graphic">
                                <div class="portfolio-item-content rounded">
                                <img src="<?php echo  $dominio;?>/assets/proyectos/wordpress_brandfood.PNG" alt="Landing Page de Brandfood">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://brandfood.com.pe/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/wordpress_brandfood.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">BrandFood</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 portfolio-item my-3 webdesign graphic">
                                <div class="portfolio-item-content rounded">
                                <img src="<?php echo  $dominio;?>/assets/proyectos/wordpress_casascruz.PNG" alt="Landing Page de Casas Cruz">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://www.casascruz.com/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/wordpress_casascruz.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Casas Cruz</h5>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="col-lg-4 portfolio-item my-3 webdesign">
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/tienda_taglio.PNG" alt="Tienda Virtual Taglio">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="http://taglio.daleclick.pe/taglio/carta" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/tienda_taglio.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Taglio</h5>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="col-lg-4 portfolio-item my-3 mobiledesign seo">
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/web_tecnolaw.PNG" alt="Landing Page Tecnolaw">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://tecnolaw.com/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/web_tecnolaw.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Tecnolaw</h5>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="col-lg-4 portfolio-item my-3 webdesign seo">
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/web_consultorio.png" alt="Web Corporativa de Consultorio y Reserva de Citas">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://consultoriosgarcia.com/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/web_consultorio.png" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Consultorio García</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 portfolio-item my-3 mobiledesign">
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/wordpress_costabella.PNG" alt="Landing Page Costabella">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://hotelcostabela.com/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/wordpress_costabella.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Costabella</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 portfolio-item my-3 mobiledesign webdesign">
                                <div class="portfolio-item-content rounded">
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/web_marcoestrada.PNG" alt="Pagina Web de Marco Estrada">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="<?php echo  $dominio;?>/" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/web_marcoestrada.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Marco Estrada</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 portfolio-item my-3 mobiledesign webdesign">
                                <div class="portfolio-item-content rounded">    
                                    <img src="<?php echo  $dominio;?>/assets/proyectos/tienda_bipolar.PNG" alt="Pagina Web de Bipolar">
                                    <div class="img-overlay text-center">
                                        <div class="img-overlay-content">
                                            <div class="portfolio-icon">
                                                <a href="https://www.bipolar.com.pe" target="_blanck">
                                                    <i class="lni-link"></i>
                                                </a>
                                                <a href="<?php echo  $dominio;?>/assets/proyectos/tienda_bipolar.PNG" class="js-zoom-gallery">
                                                    <i class="lni-search"></i>
                                                </a>
                                            </div>
                                            <h5 class="text-white mt-3 mb-0">Bipolar</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonial Start -->
        <!-- <section id="testimonial" class="section pp-scrollable testimonial text-center bg-dark" data-navigation-color="#fff" data-navigation-tooltip="CLIENTES">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">Testimonial</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h2 class="text-dark">My  <span class="base-color">Clients</span></h2>
                                    <p class="text-muted mt-1">What my clients say about me</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12">
                                <div class="owl-carousel">
                                    <div class="testimonial-item text-left">
                                        <p class="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                        <div class="float-left mt-4 mr-3 mr-sm-4">
                                            <img src="https://placehold.it/125x125" alt="/" class="rounded-circle">
                                        </div>
                                        <h4 class="float-left mt-5">-Jone Doe, <span class="font-weight-bold">Seo Manager</span></h4>
                                    </div>
                                    <div class="testimonial-item text-left">
                                        <p class="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                        <div class="float-left mt-4 mr-3 mr-sm-4">
                                            <img src="https://placehold.it/125x125" alt="/" class="rounded-circle">
                                        </div>
                                        <h4 class="float-left mt-5">-Jessy Doe, <span class="font-weight-bold">UI Designer</span></h4>
                                    </div>
                                    <div class="testimonial-item text-left">
                                        <p class="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                        <div class="float-left mt-4 mr-3 mr-sm-4">
                                            <img src="https://placehold.it/125x125" alt="/" class="rounded-circle">
                                        </div>
                                        <h4 class="float-left mt-5">-Jully Doe, <span class="font-weight-bold">UX Designer</span></h4>
                                    </div>
                                    <div class="testimonial-item text-left">
                                        <p class="mb-2 text-muted">" In a professional context it often happens that private or corporate clients corder a publication to be made.In a professional context it often happens that private or corporate clients corder a publication to be made. "</p>
                                        <div class="float-left mt-4 mr-3 mr-sm-4">
                                            <img src="https://placehold.it/125x125" alt="/" class="rounded-circle">
                                        </div>
                                        <h4 class="float-left mt-5">-Jully Doe, <span class="font-weight-bold">UX Designer</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!--  Testimonial End  -->

        <!--   Blog Start   -->
       <!--    <section id="blog" class="section pp-scrollable blog bg-dark" data-navigation-color="#fff" data-navigation-tooltip="BLOG" style="display:none;">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">Blog</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h2 class="text-dark">Latest <span class="base-color">News</span></h2>
                                    <p class="text-muted mt-1">Check Out My Latest Blog Posts</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="image-blog">
                                        <img src="https://placehold.it/600x400" alt="/" class="img-fluid rounded-top">
                                    </div>
                                    <div class="blog-content rounded-bottom text-left p-3">
                                        <h5 class="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" class="text-dark font-weight-light">Be Your Best Version</a></h5>
                                        <ul class="list-inline mt-3">
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    <i class="base-color font-weight-bold">by</i>
                                                    <span class="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div class="blog-link pb-3">
                                            <button type="button" class="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="image-blog">
                                        <img src="https://placehold.it/600x400" alt="/" class="img-fluid rounded-top">
                                    </div>
                                    <div class="blog-content rounded-bottom text-left p-3">
                                        <h5 class="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" class="text-dark font-weight-light">5 Tips In UI/UX Web Design</a></h5>
                                        <ul class="list-inline mt-3">
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    <i class="base-color font-weight-bold">by</i>
                                                    <span class="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div class="blog-link pb-3">
                                            <button type="button" class="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="image-blog">
                                        <img src="https://placehold.it/600x400" alt="/" class="img-fluid rounded-top">
                                    </div>
                                    <div class="blog-content rounded-bottom text-left p-3">
                                        <h5 class="mb-0 mt-3"><a href="javascript:void(0)" data-toggle="modal" data-target="#blog-single" class="text-dark font-weight-light">Write Your Dreams</a></h5>
                                        <ul class="list-inline mt-3">
                                            <li class="list-inline-item">
                                                <a href="#">
                                                    <i class="base-color font-weight-bold">by</i>
                                                    <span class="text-dark font-italic">John Doe</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <div class="blog-link pb-3">
                                            <button type="button" class="base-color" data-toggle="modal" data-target="#blog-single">Read More...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->


        <!--   Contact Start   -->
        <section id="contact" class="section pp-scrollable contact bg-dark" data-navigation-color="#fff" data-navigation-tooltip="CONTACTAME">
            <div class="display-table">
                <div class="display-content">
                    <div class="container">
                        <div class="row">
                            <div class="title-small">
                                <p class="text-dark">CONCTACTAME</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h2 class="text-dark">A <span class="base-color">quí</span></h2>
                                    <p class="text-muted mx-auto section-subtitle mt-3">No dudes en contactarme</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row mt-5">
                            <div class="col-lg-12">
                                <div id="my-map" data-location-lat="-9.121018941533201"  data-location-lng="-78.53201262380091" data-location-icon="https://developers.google.com/maps/images/maps-icon.svg"></div>
                            </div>
                        </div> -->
                        <div class="row mt-5">
                            <div class="col-lg-6 text-left">
                                <div class="contact-form">
                                    <h6 class="font-weight-semibold">Enviame un Mensaje </h6>
                                    <p class="text-muted mt-3">Cualquier duda y/o consulta estoy a tu disposicion</p>
                                    <div class="mt-4">
                                        <p class="mt-2 font-weight-bold"> Direccion : <span class="text-muted"> Nuevo Chimbote, Perú </span></p>
                                        <p class="mt-2 font-weight-bold"> Celular : <span class="text-muted"> <?php echo $number_split;?></span></p>
                                        <p class="mt-2 font-weight-bold"> Correo : <span class="text-muted">fericell2909@gmail.com</span></p>
                                        <p class="mt-2 font-weight-bold"> Web : <span class="text-muted"><?php echo $dominio;?></span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 text-left">
                                <h6 class="font-weight-semibold">¿ Cómo puedo ayudarte ? </h6>
                                <form id="contactForm" class="form mt-3">
                                    <div class="row">
                                        <div class="col-lg-12 form-item">
                                            <div class="form-group">
                                                <input name="name" id="name" type="text" class="form-control" data-name-error="Tu Nombre es solicitado" placeholder="Ingrese un Nombre" required >
                                            </div>
                                        </div>
                                        <div class="col-lg-12 form-item">
                                            <div class="form-group">
                                                <input name="email" id="email" type="email" class="form-control" data-email-error="Correo es solicitado" data-email-valid="Correo no valido" placeholder="Ingrese un correo" required >
                                            </div>
                                        </div>
                                        <div class="col-12 form-item">
                                            <div class="form-group">
                                                <textarea name="comments" id="comments" rows="2" class="form-control h-auto" data-comment-error="Mensaje es solicitado" placeholder="Escribeme un mensaje"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 mt-1 text-left">
                                            <button type="button" class="pill-button" id="submit-btn" onclick="sendEmail()">Enviar Mensaje</button>
                                            <div id="message" class="toast text-white shadow-none border-0" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000" >
                                                <div class="toast-body d-inline-block"></div>
                                                <button type="button" class="pr-3 close" data-dismiss="toast" aria-label="Close">
                                                    <span aria-hidden="true" class="lni-close size-xs text-white"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--   Contact End   -->

        <!--   Footer Start   -->
       <!-- <div id="footer" class="section pp-scrollable footer" data-navigation-color="#fff" data-navigation-tooltip="FOOTER" data-background-image="https://placehold.it/1920x1280">
            <div class="container-fluid">
                <div class="row py-6">
                    <div class="title-small">
                        <p class="text-dark">Footer</p>
                    </div>
                    <div class="text-center m-auto">
                        <p class="text-dark size-sm">N<span class="base-color">ILL</span></p>
                        <ul class="list-inline socails">
                            <li class="list-inline-item"><a class="text-white" href="#"><i class="lni-facebook-filled text-dark mr-2"></i></a></li>
                            <li class="list-inline-item"><a class="text-white" href="#"><i class="lni-twitter-filled text-dark mr-2"></i></a></li>
                            <li class="list-inline-item"><a class="text-white" href="#"><i class="lni-github-original text-dark mr-2"></i></a></li>
                            <li class="list-inline-item"><a class="text-white" href="#"><i class="lni-linkedin-original text-dark mr-2"></i></a></li>
                        </ul>
                        <p class="pl-3 text-dark">Copyright © 2019. Template has been designed by <a class="base-color" href="javascript:void(0);">Retrina</a></p>
                    </div>
                </div>
            </div>
        </div>
        -->

        <!--   Color Scheme  -->
        <a class="color-scheme text-white bg-base-color d-inline-block" href="javascript:void(0)"><i class="lni-sun"></i></a>

    </div>
    <!--  Page Pilling  End -->


    <!--  JavaScripts  -->
    <script src="assets/js/jquery-3.4.1.min.js"></script>
    <!--   Page Pilling Js     -->
    <script src="assets/js/jquery.pagepiling.js"></script>
    <!--  Bootstrap Js  -->
    <script src="assets/js/bootstrap.js"></script>
    <!--  Typed Js  -->
    <script src="assets/js/typed.js"></script>
    <!--  Count Js  -->
    <script src="assets/js/jquery.countTo.js"></script>
    <!--  Isotope Js  -->
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <!--  Pop UP JS  -->
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <!--  Owl carousel Js  -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- Map Js -->
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7S0_s247v3nTkrVLa1A_1Nq6G13uw9U0"></script>-->
    <!--  Custom JS  -->
    <script src="assets/js/nill.js"></script>
    </body>
</html>
