function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos'
   let htmlRequest =  new XMLHttpRequest();
   let resElements = document.getElementById('res')

   htmlRequest.addEventListener('loadend', function () {
      let repos = JSON.parse(this.responseText)
      resElements.innerHTML = repos.map(x => `<p><a href="${x.html_url}" target="_blank">${x.name}</a></p>`).join('')
   })

   htmlRequest.open('GET', url)
   htmlRequest.send()

}