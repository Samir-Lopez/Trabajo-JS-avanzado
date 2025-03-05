fetch("../data/news.json").then((response) => {
    response.json().then((data) => {
        const leftNews = document.querySelector('.js-news-left-side');
        const rightNews = document.querySelector('.js-news-right-side');
        let newsHtml = '';

        data.forEach((dataElement) => {
            newsHtml = `
                <div class="new-container">
                    <img src="${dataElement.img}" alt="${dataElement.title}" class="new-img">
                    <h2 class="new-title">${dataElement.title}</h2>
                    <p class="new-text">${dataElement.description}</p>
                    <a href="${dataElement.url}" class="new-link">Read more ></a>
                </div>
            `;

            if (dataElement.id === '1') {
                leftNews.innerHTML = newsHtml;
            } else {
                rightNews.innerHTML += newsHtml;
            }
        })
    })
})