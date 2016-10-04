 Github.userActivity({
    username: "mistertjen",
    selector: ".user-2",
    limit: 20
 });

 Github.repoProfile({
    username: 'mistertjen',
    reponame: 'NYCDA',
    selector: '.repo-1'
 });


if (document.getElementsByClassName('showcase-slider')) {
	var domSlider = document.getElementsByClassName('showcase-slider');
	// console.log(domSlider);
	var githubRepos = new XMLHttpRequest();
	
	githubRepos.onreadystatechange = function () {
		console.log('state-changed to ' + this.readyState);
		if (this.readyState == 4 && this.status == 200 ) {
			githubRepos = JSON.parse(githubRepos.responseText);
			console.log(githubRepos);
		}
	}

	githubRepos.open('GET', 'https://api.github.com/users/mistertjen/repos', true)
	githubRepos.send();

	


	
}
