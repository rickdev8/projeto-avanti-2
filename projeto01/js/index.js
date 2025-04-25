import divs from "./divs.js";

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const divprodutos = document.querySelector(".section-produtos");
  const divproduto2 = document.querySelector(".section-produtos2");
  const sectionfooter = document.querySelector(".section-footer");

  if (window.innerWidth <= 480) {
    header.insertAdjacentHTML("beforeend", divs.headermobile);
    sectionfooter.insertAdjacentHTML("beforeend", divs.sectionFooterMobile);
    divprodutos.innerHTML += divs.divProdutosMobile;
    divproduto2.innerHTML += divs.divProdutosMobile;
  } else {
    header.insertAdjacentHTML("beforeend", divs.headerpc);
    sectionfooter.insertAdjacentHTML("beforeend", divs.sectionFooterPc);
    divprodutos.innerHTML += divs.divProdutosPc;
    divproduto2.innerHTML += divs.divProdutosPc;
  }

  setTimeout(() => {
    const institucionalDIV = document.getElementById("inst");
    const atendimentoDIV = document.getElementById("atendimento");
    const centralDIV = document.getElementById("central");

    const institucionalbtn = document.getElementById("institucional");
    const centralbtn = document.getElementById("centralbtn");
    const atendimentobtn = document.getElementById("atendimentobtn");

    if (institucionalbtn) {
      institucionalbtn.addEventListener("click", () => {
        const existente = institucionalDIV.querySelector(
          ".institucional-content"
        );
        if (existente) {
          existente.remove();
          institucionalbtn.style.transform = "rotate(0deg)";
        } else {
          institucionalDIV.insertAdjacentHTML(
            "beforeend",
            divs.institucionaldiv
          );
          institucionalbtn.style.transform = "rotate(180deg)";
        }
      });
    }

    if (centralbtn) {
      centralbtn.addEventListener("click", () => {
        const existente = centralDIV.querySelector(".central-content");
        if (existente) {
          existente.remove();
          centralbtn.style.transform = "rotate(0deg)";
        } else {
          centralDIV.insertAdjacentHTML("beforeend", divs.centraldiv);
          centralbtn.style.transform = "rotate(180deg)";
        }
      });
    }

    if (atendimentobtn) {
      atendimentobtn.addEventListener("click", () => {
        const existente = atendimentoDIV.querySelector(".atendimento-content");
        if (existente) {
          existente.remove();
          atendimentobtn.style.transform = "rotate(0deg)";
        } else {
          atendimentoDIV.insertAdjacentHTML("beforeend", divs.atendimentodiv);
          atendimentobtn.style.transform = "rotate(180deg)";
        }
      });
    }
  });

  new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".div-seta",
      prevEl: ".div-seta-2",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: false,
    },
    history: {
      key: "slide",
    },
  });

  const abrirmenumobile = document.querySelector("#open-nav");
  const nav = document.querySelector(".div-nav");
  const fecharmenumobile = document.querySelector("#close-nav");

  if (abrirmenumobile && nav) {
    abrirmenumobile.addEventListener("click", () => {
      nav.style.display = "flex";
    });
  }

  if (fecharmenumobile && nav) {
    fecharmenumobile.addEventListener("click", () => {
      nav.style.display = "none";
    });
  }

  const divNav = document.querySelector(".divHover");
  const navHover = document.querySelector(".nav-hover");
  const depHover = document.querySelector(".depHover");
  const divDepartamento = document.querySelector(".div-departamento");

  if (divNav && navHover) {
    divNav.addEventListener("mouseenter", () => {
      navHover.classList.add("visivel");
    });

    divNav.addEventListener("mouseleave", () => {
      navHover.classList.remove("visivel");
    });

    navHover.addEventListener("mouseenter", () => {
      navHover.classList.add("visivel");
    });

    navHover.addEventListener("mouseleave", () => {
      navHover.classList.remove("visivel");
    });
  } else {
    console.warn("Elementos do menu de categorias não encontrados.");
  }

  if (depHover && divDepartamento) {
    depHover.addEventListener("mouseenter", () => {
      divDepartamento.classList.add("visivel");
    });

    depHover.addEventListener("mouseleave", () => {
      divDepartamento.classList.remove("visivel");
    });

    divDepartamento.addEventListener("mouseenter", () => {
      divDepartamento.classList.add("visivel");
    });

    divDepartamento.addEventListener("mouseleave", () => {
      divDepartamento.classList.remove("visivel");
    });
  } else {
    console.warn("Elementos do menu de departamentos não encontrados.");
  }

  const divinputsearch = document.querySelector('.result-search')
  const result = document.getElementById('result')
  const inputvalue = document.getElementById('inputsearch')

  document.addEventListener('keydown', (e) => {
    const target = e.target;
    if (target && target.id === 'inputsearch' && e.key === 'Enter') {
      divinputsearch.innerHTML = divs.divsearch.replace('{text}', inputvalue.value)
    }
  });
});
