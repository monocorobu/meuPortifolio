window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch('json/Projetos.JSON')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro HTTP! status: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const projeto = data.projetos.find(proj => proj.id == id);
        if (projeto) {
            // Aqui você pode atualizar a página projetos_page.html com as informações do projeto
            // Por exemplo, você pode atualizar o título da página para ser o título do projeto:
            document.title = projeto.title;
            // Continue atualizando a página com as informações do projeto como desejar
        } else {
            console.error('Projeto não encontrado!');
        }
    })
    .catch(error => console.error(error));
}
