//é uma caixinha de texto que aparece quando para com o mouse em cima de algo
export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  //PARA KD [data-tooltip] quando tiver 'mouseover' execute a função onMouseOver
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })
  //FUNÇÃO QUANDO POEM O MOUSE EM CIMA
    //1 - executa a criarToolTipBox, 2 - onMouseMove, 3 - onMouseLeave
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  //REMOVER AS FUNCTIONS AO TIRAR O MOUSE
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  //FAZ o MOUSE SEGUIR
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }
  
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

