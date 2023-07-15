//-------------------------------------DECLARAÇÃO DA DOM-------------------------------------------------//
const form = document.querySelector('form')
const input = document.querySelector('input')
//DECLARAÇÃO DAS DIVS ESCONDIDAS
const errorfigure = document.querySelector('.error')
const errorphrase = document.querySelector('.hiddediv')
//------------------------------------FIM DA DECLARAÇÃO DA DOM-------------------------------------------//
// CRIAÇÃO DE UMA FUNÇÃO QUE VALIDA O E-MAIL DO USUÁRIO  //
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
//-----------------------------------------------------------------------------------------------------//
//-------------------------------CRIAÇÃO DE VARIÁVEIS, FUNÇÕES E ETC-----------------------------------//

function submitForm (event) {
    event.preventDefault();

    if(validateEmail(input.value) != "") {
        form.submit()
    } else {
        errorfigure.style.display = "block";
        errorphrase.style.display = "block";
    } 

}
//-----------------------------------------------------------------------------------------------------------//