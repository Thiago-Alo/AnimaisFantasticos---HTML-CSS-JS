import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais(){

    async function fetchAnimais(url){
        try{
        //Lê o arquivo JSON e q e passado atraves do parametro url
        const animaisResponse = await fetch(url);
        //transforma o arquivo lido em JSON em um objeto
        const animaisJson = await animaisResponse.json()
        //seleciona a classe .numeros-grid
        const numerosGrid = document.querySelector('.numeros-grid')

        //Para cada animal no arquivo JSON
        animaisJson.forEach(animal => {
            //Executa a função createAnimal
            const divAnimal = createAnimal(animal)
            //o apprendChild diz ... logo após a classe pai, adicione a divAnimal
            numerosGrid.appendChild(divAnimal)
        });
        //So inicia a animação dos numeros, depois do fetch ocorrer
        initAnimaNumeros();
        }catch(erro){
        console.log(Error(erro))
        }
    }

    function createAnimal(animal){
        //Cria uma div
        const div = document.createElement('div');
        //Parra a class numero-animal para a div criada
        div.classList.add('numero-animal');
        //Insere conteudo HTML na div criada
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        
        //Retorna a div
        return div;
    }
    //link do JSON
    fetchAnimais('./animaisapi.json')
}