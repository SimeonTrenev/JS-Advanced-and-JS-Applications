function loadRepos() {
	
	let htmlRequest =  new XMLHttpRequest();
	const userElement = document.getElementById('username')
	let reposElement = document.getElementById('repos')
 

	htmlRequest.addEventListener('loadend', function () {
	   let repos = JSON.parse(this.responseText)
	   reposElement.innerHTML = repos.map(x => `<li><a href="${x.html_url}" target="_blank">${x.name}</a></li>`).join('')
	})

	let url = `https://api.github.com/users/${userElement.value}/repos`
 
	htmlRequest.open('GET', url)
	htmlRequest.send()
 
}