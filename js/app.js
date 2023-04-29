const projects = [
	{image: './images/project1.png', title: 'Página de Cadastro', description: 'Desenvolva uma simples página de cadastro usando HTML e CSS!', url: ''}
];

const container = document.querySelector('.projectsContainer');

if (projects.length < 1) {
	container.innerHTML = `
		<h2>Projetos indisponíveis no momento...</h2>
	`;
} else {
	let i = 1;
	projects.forEach(project => {
		const html = document.createElement('div');
		html.classList.add('project');
		html.innerHTML = `
			<div class="projectImage">
		    <img src="${project.image}" alt="">
		  </div>

		  <div class="projectTitle">
		    <h3><span>${i}.</span> ${project.title}</h3>
		  </div>

		  <div class="projectDescription">
		    <p>${project.description}</p>
		  </div>

		  <div class="projectLink">
		    <a href="${project.url}" target="_blank">Acesse!</a>
		  </div>
		`;
		
		container.appendChild(html);
		i++;
	});
}