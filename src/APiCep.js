import { toastAlert } from "./menuCar.js";

export async function getAddress(cep) {
    let url =`https://viacep.com.br/ws/${cep}/json/`
    try{

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        let dataCep = document.getElementById('getApiCep');
        let msgCep = document.getElementById('msgCep');
        
        dataCep.innerText = `${data.logradouro} - ${data.bairro} - ${data.localidade}/${data.uf}`;
        msgCep.innerText = 'Chegará gratis quarta feira'
    }catch{
        toastAlert('error','Cep não encontrado')
    }
}
