//NAVEGAÇÃO POR TAB
function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo')
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            })
        })
    }
}
initTabNav();

//ACCORDION LIST
function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'
    if(accordionList.length){
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion(event){
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        })
    }
}
initAccordion();

//SCROLL SUAVE 
function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
            //so funciona em firefox e chrome
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /*const topo = section.offsetTop;

                //com window.scrollTo
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });*/
        
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();


//ANIMATION SCROLL
function initAnimationScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        //verifica o tamanho da tela com window.innerHeight e faz 60% dela
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section) =>{
                //verifica a posição do topo de cada section
                const sectionTop = section.getBoundingClientRect().top;
                //inicia a animação calculando o top - 60%..ou seja em 40% da section exibida em tela
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible){
                    section.classList.add('ativo')
                }else{ //remove a section ao subir
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimationScroll();