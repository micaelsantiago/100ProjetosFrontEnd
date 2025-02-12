document.getElementById('cepForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // remove caracteres não numéricos

    if (cep === '') {
        alert('Por favor, insira um CEP válido.');
        return;
    }

    if (cep.length !== 8) {
        alert('O CEP deve ter 8 dígitos.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
    
            if (data.erro) {
            resultDiv.innerHTML = '<p>CEP não encontrado.</p>';
            resultDiv.style.display = 'block';
            } else {
            resultDiv.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
            resultDiv.style.display = 'block';
            }
        })
        .catch(error => {
            alert('Ocorreu um erro. Tente novamente mais tarde.');
            console.error('Erro:', error);
    });
});
