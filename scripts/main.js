const newsData = [
	{
		title: 'Objetivos: una guía filosófica para marcarlos y alcanzarlos',
		category: 'Sabiduría',
		content: 'Exploremos cómo la filosofía puede ser una herramienta útil en el establecimiento y logro de objetivos. A través del análisis de diferentes corrientes filosóficas, desde el estoicismo hasta el existencialismo, este artículo ofrece una guía práctica para establecer objetivos significativos y alcanzarlos de manera efectiva. Con ejemplos claros y reflexiones personales, este artículo invita al lector a reflexionar sobre su propia relación con los objetivos y cómo pueden ser utilizados como herramientas para alcanzar una vida más satisfactoria y plena. Si estás interesado en descubrir cómo la filosofía puede ayudarte a establecer y alcanzar tus objetivos, este artículo es para ti.',
		buttonText: 'LEA MÁS',
		link: '#'
	},
	{
		title: 'Cómo encontrar (y mantener) nuestra alegría',
		category: 'Archivos',
		content: 'Exploremos el tema de la felicidad desde una perspectiva estoica. A través del análisis de las enseñanzas de los filósofos estoicos, como Epicteto y Séneca, ofrecemos una guía práctica para encontrar y mantener la alegría en nuestras vidas. Exploremos cómo los estoicos creían que la felicidad no dependía de circunstancias externas, sino de la actitud interna y la autodisciplina. Con reflexiones personales y consejos prácticos, este artículo es una invitación a explorar el poder de la mente y cómo podemos encontrar la alegría en cualquier situación. Si estás interesado en descubrir cómo la filosofía estoica puede ayudarte a encontrar y mantener la alegría en tu vida, este artículo es para ti.',
		buttonText: 'LEA MÁS',
		link: '#'
	},
	{
		title: 'Estoicismo y epicureanismo',
		category: 'Sabiduría',
		content: 'Exploremos la diferencia de perspectivas entre dos de las escuelas filosóficas más importantes de la antigua Grecia: el estoicismo y el epicureanismo. A través del análisis de los principales conceptos de ambas escuelas, el artículo ofrece una comparativa entre las visiones estoicas y epicúreas en temas como la felicidad, la virtud y la naturaleza humana. Se exploran las similitudes y diferencias entre ambas corrientes, así como sus respectivas críticas hacia la otra. Con reflexiones profundas y rigurosas, este artículo es una invitación a explorar las diferentes perspectivas filosóficas y su relevancia en la vida moderna. Si estás interesado en descubrir las diferencias entre el estoicismo y el epicureanismo y cómo pueden aplicarse en tu vida, este artículo es para ti.',
		buttonText: 'LEA MÁS',
		link: '#'
	},
	{
		title: '¿Quién fue Posidonio? Sobre su vida y viajes',
		category: 'Perfiles',
		content: 'Exploremos la figura del filósofo griego Posidonio, quien fue uno de los principales representantes del estoicismo en la antigüedad. A través del análisis de sus escritos y los relatos de sus viajes, el artículo ofrece una visión detallada de la vida y obra de Posidonio, destacando su papel como filósofo, científico y viajero. Se exploran sus principales enseñanzas filosóficas, así como su influencia en otros filósofos posteriores. Con información detallada y rigurosa, este artículo es una invitación a conocer a uno de los filósofos estoicos más importantes de la antigüedad y su legado en la filosofía occidental. Si estás interesado en la vida y obra de Posidonio, este artículo es para ti.',
		buttonText: 'LEA MÁS',
		link: '#'
	}
	// Add more news articles here
];

const newsContainer = document.getElementById('news-container');
const seeMoreBtn = document.getElementById('see-more-btn');

let newsIndex = 0; //current index
const newsPerPage = 2; //news to load initially

function displayNews() {
	const endIndex = Math.min(newsIndex + newsPerPage, newsData.length);

	for (let i = newsIndex; i < endIndex; i++) {
		if (i >= newsData.length) {
			seeMoreBtn.style.display = 'none';
			break;
		}

		const article = newsData[i];

		//const alignmentClass = i % 2 === 0 ? 'grid-item-left' : 'grid-item-right';

		const articleHTML = `
			<div class="art-grid-wrapper">
				<a href="${article.link}" class="art-img">
					<div title="${article.title}" role="img" aria-label="${article.title}" id="img-art${i + 1}"></div>
				</a>
				<div class="feat-article-title grid-item-left">
					<div>
						<h3>
							<a class="article-link" href="#" data-replace="${article.title}">
								<span>${article.title}</span>
							</a>
						</h3>
						<h4>
							<a class="category-link" href="#" data-replace="${article.category}">
								<span>${article.category}</span>
							</a>
						</h4>
					</div>
				</div>
				<p class="grid-item">${article.content}</p>
				<a href="#" class="grid-item">
					<button class="btn btn-outline-light primary-btn-color col-12" type="button">LEA MÁS</button>
				</a>
			</div>
		`;

		newsContainer.insertAdjacentHTML('beforeend',articleHTML);
	}

	seeMoreBtn.style.display = endIndex >= newsData.length ? 'none' : 'block';
}

function loadMoreNews () {
	newsIndex += 2;
	displayNews();
}

seeMoreBtn.addEventListener('click',loadMoreNews);

displayNews(); //display initial news.