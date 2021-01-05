function createArticle() {
	
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent')
	let articles = document.getElementById('articles');

	let titleInputValue = titleElement.value;
	let contentInputValue = contentElement.value;

	if(!titleInputValue || !contentInputValue){
		
		return;
	}

	let articleElement = document.createElement('article')
	let headingElement = document.createElement('h3');
	let paragraphElement = document.createElement('p')
	
	articleElement.appendChild(headingElement);
	articleElement.appendChild(paragraphElement)

	articles.appendChild(articleElement)

	headingElement.innerHTML = titleInputValue;
	paragraphElement.innerHTML = contentInputValue
	
	titleElement.value = ''
	contentElement.value = ''
	
}

