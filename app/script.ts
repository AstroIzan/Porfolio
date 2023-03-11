// Selectors
    var selectors:any = document.getElementsByName("selector");
    var examples:any = document.getElementsByName("example");
    var unityCounter:any = document.getElementById("unityCounter"); 

// Slides
    var htmlOptionsHtml:any = document.getElementsByName("htmlOptionsHtml");
    var htmlOptionsJs:any = document.getElementsByName("htmlOptionsJs");

// Functions
    // Page loader
        /**
         * Carga la página
         * @param page Página que se va a cargar
         */
        function goToPage(page:string) { window.open("https://"+page, "_blank"); }

    // Skill selector
        /**
         * Selecciona la habilidad que se ha pulsado
         * @param skill Nombre de la habilidad que se ha pulsado
         */
        function selectSkill(skill:string) {
            // Obtenemos el selector que se ha pulsado
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i].id == skill) {
                    var selector = selectors[i];
                }
            }

            // En caso de que no tenga la clase "selected"
            if (!selector.classList.contains("selected")) {
                // Ponemos a todos los selectores la clase "non-selected"
                for (var i = 0; i < selectors.length; i++) {
                    selectors[i].classList.remove("selected");
                    selectors[i].classList.add("non-selected");
                }
                // Cambiamos la clase non-selected por selected
                selector.classList.remove("non-selected");
                selector.classList.add("selected");

                // Cambiamos el ejemplo
                for (var i = 0; i < examples.length; i++) {
                    examples[i].classList.remove("visible");
                    examples[i].classList.add("hidden");
                }

                for (var i = 0; i < examples.length; i++) {
                    if (examples[i].id == skill) {
                        examples[i].classList.remove("hidden");
                        examples[i].classList.add("visible");
                    }
                }

            } 
        }

    // Contador
        /**
         * Cuenta los días que quedan para el 28 de mayo de 2023
         */
        const countDown = () => {
            const endDate = new Date("2023-05-28").getTime();
            const now = new Date().getTime();
            const gap = endDate - now;

            const dd = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hh = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mm = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const ss = Math.floor((gap % (1000 * 60)) / 1000);

            unityCounter.innerHTML = dd + "d " + hh + "h " + mm + "m " + ss + "s ";
        }
        
        // Llamamos a la función cada segundo
        setInterval(countDown, 1000);

    // Menu
        /**
         * Muestra el menú
         */
        function dropMenu() {
            var header:any = document.getElementById("header");
            var headerHeight = header.offsetHeight;
            var menu:any = document.getElementById("menu");
            var menuHeight = menu.offsetHeight;
            var menuButton:any = document.getElementById("menuActivator");

            if (header.style.height == "10vh") {
                menuButton.classList.remove("bx-menu");
                menuButton.classList.add("bx-menu-alt-right");
                header.style.height = (headerHeight + menuHeight) + "px";
            } else {
                menuButton.classList.remove("bx-menu-alt-right");
                menuButton.classList.add("bx-menu");
                header.style.height = "10vh";
            }
        }

    // Dark mode
        /**
         * Activa el modo oscuro
         */
        function darkMode(number:number) {
            switch (number) {
                case 0:
                    var colorModeButton:any = document.getElementById("colorModeButton0");
                    break;
                case 1:
                    var colorModeButton:any = document.getElementById("colorModeButton1");
                    break;
            }
                
            if (colorModeButton.classList.contains("bx-moon")) {    
                colorModeButton.classList.add("bxs-sun");
                colorModeButton.classList.remove("bx-moon");
            } else {
                colorModeButton.classList.remove("bxs-sun");
                colorModeButton.classList.add("bx-moon");
            }
        }

    // Slider
        function slide(page:string, direction:string) {
            switch (page) {
                case "html":
                    if (direction == "right") {
                        for (var i = 0; i < htmlOptionsHtml.length; i++) {
                            if (htmlOptionsHtml[i].classList.contains("visible")) {
                                htmlOptionsHtml[i].classList.remove("visible");
                                htmlOptionsHtml[i].classList.add("hidden");
                                if (i == htmlOptionsHtml.length - 1) {
                                    htmlOptionsHtml[0].classList.remove("hidden");
                                    htmlOptionsHtml[0].classList.add("visible");
                                } else {
                                    htmlOptionsHtml[i + 1].classList.remove("hidden");
                                    htmlOptionsHtml[i + 1].classList.add("visible");
                                }
                                break;
                            }
                        }
                    } else {
                        for (var i = 0; i < htmlOptionsHtml.length; i++) {
                            if (htmlOptionsHtml[i].classList.contains("visible")) {
                                htmlOptionsHtml[i].classList.remove("visible");
                                htmlOptionsHtml[i].classList.add("hidden");
                                if (i == 0) {
                                    htmlOptionsHtml[htmlOptionsHtml.length - 1].classList.remove("hidden");
                                    htmlOptionsHtml[htmlOptionsHtml.length - 1].classList.add("visible");
                                } else {
                                    htmlOptionsHtml[i - 1].classList.remove("hidden");
                                    htmlOptionsHtml[i - 1].classList.add("visible");
                                }
                                break;
                            }
                        }
                    }
                    break;
                case "js":
                    if (direction == "right") {
                        for (var i = 0; i < htmlOptionsJs.length; i++) {
                            if (htmlOptionsJs[i].classList.contains("visible")) {
                                htmlOptionsJs[i].classList.remove("visible");
                                htmlOptionsJs[i].classList.add("hidden");
                                if (i == htmlOptionsJs.length - 1) {
                                    htmlOptionsJs[0].classList.remove("hidden");
                                    htmlOptionsJs[0].classList.add("visible");
                                } else {
                                    htmlOptionsJs[i + 1].classList.remove("hidden");
                                    htmlOptionsJs[i + 1].classList.add("visible");
                                }
                                break;
                            }
                        }
                    } else {
                        for (var i = 0; i < htmlOptionsJs.length; i++) {
                            if (htmlOptionsJs[i].classList.contains("visible")) {
                                htmlOptionsJs[i].classList.remove("visible");
                                htmlOptionsJs[i].classList.add("hidden");
                                if (i == 0) {
                                    htmlOptionsJs[htmlOptionsJs.length - 1].classList.remove("hidden");
                                    htmlOptionsJs[htmlOptionsJs.length - 1].classList.add("visible");
                                } else {
                                    htmlOptionsJs[i - 1].classList.remove("hidden");
                                    htmlOptionsJs[i - 1].classList.add("visible");
                                }
                                break;
                            }
                        }
                    }
                    break;
            }
        }

