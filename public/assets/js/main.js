/*
Template Name: Craft - Startup Landing Page Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        var preloader = document.querySelector('.preloader');
        if (!preloader) return;
        preloader.style.opacity = '0';
        preloader.style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
                var header_navbar = document.querySelector(".navbar-area");
                if (!header_navbar) return;
        var sticky = header_navbar.offsetTop;

                var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
                    if (logo) logo.src = '/assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
                    if (logo) logo.src = '/assets/images/logo/white-logo.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (backToTo) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTo.style.display = "flex";
            } else {
                backToTo.style.display = "none";
            }
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }

    //======= portfolio-btn active
	var elements = document.getElementsByClassName("portfolio-btn");
	for (var i = 0; i < elements.length; i++) {
		elements[i].onclick = function () {

			// remove class from sibling

			var el = elements[0];
			while (el) {
				if (el.tagName === "BUTTON") {
					//remove class
					el.classList.remove("active");

				}
				// pass to the new sibling
				el = el.nextSibling;
			}

			this.classList.add("active");
		};
	}


})();