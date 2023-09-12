const cepURL = 'https://viacep.com.br/ws/{cep}/json/';
function consultarCep (){
    fetch(cepURL)
    .then(response =>response.json())
    .then(data =>{
        if (!data.erro){
            console.log('CEP:', data.cep);
            console.log('Logradouro:', data.logradouro);
            console.log('Bairro:'), data.bairro;
            console.log('Cidade:', data.localidade);
            console.log('Estado:', data.uf);
        } else{
            console.log('CEP não encontrado', error);
        }})
        .catch(error=>{
            console.error('Erro ao consultar CEP:', error);
});
        }

        
    
