
document.addEventListener('DOMContentLoaded', function () {
    const cepInput = document.getElementById('cepInput');
    const consultarBtn = document.getElementById('consultarBtn');
    const resultadoCEP = document.getElementById('resultadoCEP');
    const nomeSpan = document.getElementById('nome');
    const cepSpan = document.getElementById('cep');
    const logradouroSpan = document.getElementById('logradouro');
    const bairroSpan = document.getElementById('bairro');
    const estadoSpan = document.getElementById('estado');

    consultarBtn.addEventListener('click', function () {
        const cep = cepInput.value;

        // Construa a URL da API com o CEP fornecido
        const cepURL = `https://viacep.com.br/ws/${cep}/json/`;

        // Realize a requisição à API
        fetch(cepURL)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    nomeSpan.textContent = data.localidade;
                    cepSpan.textContent = data.cep;
                    logradouroSpan.textContent = data.logradouro;
                    bairroSpan.textContent = data.bairro;
                    estadoSpan.textContent = data.uf;
                    resultadoCEP.style.display = 'block';
                } else {
                    resultadoCEP.style.display = 'none';
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                resultadoCEP.style.display = 'none';
                console.error('Erro ao consultar o CEP:', error);
            });
    });
});