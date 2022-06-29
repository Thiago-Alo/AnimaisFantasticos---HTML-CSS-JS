/*Construtor DATE
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília
*/
/*const agora = new Date()
console.log(agora.getMonth())
//getTime() da em milisegundos
console.log(agora.getTime())
const futuro = new Date('10 25 2022 23:50')
console.log(futuro)

//transformando os milisegundos em dias
//Horas do dia * minutos de kd hora * segundos de kd minuto * milisegundo
function transformarDias(tempo){
    return tempo / (24 * 60 * 60  * 1000)
}
const diasAgora = transformarDias(agora.getTime())
const diasFuturo = transformarDias(futuro.getTime())
console.log(Math.floor(diasFuturo - diasAgora))*/

export default function initFuncionamento(){
    
    const funcionamento = document.querySelector('[data-semana]')
    //o Split transforma em uma array, e o map passa para numbers
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    console.log(diasSemana, horarioSemana)
    /* OU
    const arraySemana = []
    diasSemana.forEach((dia, index) => {
        arraySemana[index] = dia
    });
    console.log(arraySemana)
    */

    //Pega o dia e a hora de hoje
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()
    console.log(diaAgora, horarioAgora)
    //Verifica o dia da semana
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    console.log(semanaAberto)
    //verifica horario de agora, com o horario de funcionamento no index[0] e no index[1]
    let horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])
    console.log(horarioAberto)

    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}
