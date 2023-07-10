const newsContainer = document.getElementById('news-container');
const seeMoreBtn = document.getElementById('see-more-btn');

let newsIndex = 0; //current index
const newsPerPage = 2; //news to load initially

async function fetchNewsData() {
	try {
		const response = await fetch('../storage/data.json');
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error fetching news data:', error);
		return [];
	}
}

function displayNews(articles) {
	const endIndex = Math.min(newsIndex + newsPerPage, articles.length);

	for (let i = newsIndex; i < endIndex; i++) {
		if (i >= articles.length) {
			seeMoreBtn.style.display = 'none';
			break;
		}

		const article = articles[i];

		const articleWrapper = document.createElement('div');
		articleWrapper.className = 'art-grid-wrapper';

		const articleLink = document.createElement('a');
		articleLink.href = article.link;
		articleLink.className = 'art-img';

		const articleImg = document.createElement('div');
		articleImg.title = article.title;
		articleImg.setAttribute('role', 'img');
		articleImg.setAttribute('aria-label', article.title);
		const imgIndex = i % 4 + 1
		articleImg.className = `img-art${imgIndex}`;

		articleLink.appendChild(articleImg);
		articleWrapper.appendChild(articleLink);

		const featArticleTitle = document.createElement('div');
		featArticleTitle.className = 'feat-article-title grid-item-left';

		const titleLink = document.createElement('a');
		titleLink.className = 'article-link';
		titleLink.href = '#';
		titleLink.dataset.replace = article.title;

		const titleSpan = document.createElement('span');
		titleSpan.textContent = article.title;

		const categoryLink = document.createElement('a');
		categoryLink.className = 'category-link';
		categoryLink.href = '#';
		categoryLink.dataset.replace = article.category;

		const categorySpan = document.createElement('span');
		categorySpan.textContent = article.category;

		const contentParagraph = document.createElement('p');
		contentParagraph.className = 'grid-item';
		contentParagraph.textContent = article.content;

		const buttonLink = document.createElement('a');
		buttonLink.href = '#';
		buttonLink.className = 'grid-item';

		const button = document.createElement('button');
		button.className = 'btn btn-outline-light primary-btn-color col-12';
		button.type = 'button';
		button.textContent = 'LEA MÁS';

		buttonLink.appendChild(button);

		featArticleTitle.appendChild(titleLink);
		featArticleTitle.appendChild(categoryLink);
		titleLink.appendChild(titleSpan);
		categoryLink.appendChild(categorySpan);

		articleWrapper.appendChild(featArticleTitle);
		articleWrapper.appendChild(contentParagraph);
		articleWrapper.appendChild(buttonLink);

		newsContainer.append(articleWrapper);
	}

	seeMoreBtn.style.display = endIndex >= articles.length ? 'none' : 'block';
}

async function loadMoreNews() {
  const newsData = await fetchNewsData();
  newsIndex += newsPerPage;
  displayNews(newsData);
}

seeMoreBtn.addEventListener('click', loadMoreNews);

// Load initial news
fetchNewsData().then(newsData => {
  displayNews(newsData);
});
