async function populate() {

  const requestURL = 'data/mainfolders.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateCategories(categories);

}

function populateCategories(obj) {
  const section = document.querySelector('section');
  const categories = obj.mainFolders;

  for (const category of categories) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = categories.name;
    myPara1.textContent = `${categories.fullPath}`;
    myPara2.textContent = `Drive Link: ${categories.URL}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}