async function populate() {

	const requestURL = 'data/mainfolders.json';
	const request = new Request(requestURL);

	const response = await fetch(request);
	const idleDrive = await response.json();

	populateCategory(idleDrive);
	populateFolders(idleDrive);

}

function populateCategory(obj) {
	const header = document.querySelector('header');
	const myH1 = document.createElement('h1');
	myH1.textContent = obj.category;
	header.appendChild(myH1);
}

function populateFolders(obj) {
	const container = document.querySelector('container');
	const folderNames = obj.folders;

	for (const folder of folderNames) {
		const idleArticles = document.createElement('contend-card');
		const folderTitle = document.createElement('h2');
		const driveLink = new Image(50,50);

		folderTitle.textContent = folder.name;
		driveLink.src ='images/idledrive.png';
		driveLink.onclick = function() {
			window.location.href = 'folder.url';
		}
		driveLink.className += "driveIMG";
		idleArticles.appendChild(folderTitle);
		idleArticles.appendChild(driveLink);
		container.appendChild(idleArticles);
	}
}

populate();
