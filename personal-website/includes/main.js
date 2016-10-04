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
	githubRepos.onreadystatechange = parseGithubRepos;
	githubRepos.open('GET', 'https://api.github.com/users/mistertjen/repos', true)
	githubRepos.send();

	function parseGithubRepos () {
		// console.log('state-changed to ' + githubRepos.readyState);
		// console.log('works');
		if (githubRepos.readyState == 4 && githubRepos.status == 200 ) {
			githubRepos = JSON.parse(githubRepos.responseText);
			console.log(githubRepos);
			for (var i = 0, repos = {}; i < githubRepos.length; i++) {
				// in the future only show repos that have forks > 0;
				if (githubRepos[i]['size'] > 1000) {
					repos[githubRepos[i]['name']] = githubRepos[i];
				};
			}
			// console.log(repos);
			var counter = 0;
			for (keys in repos) {
				var projectLastPush = 
				document.getElementsByClassName('showcase-project-title')[counter].innerHTML = repos[keys]['name'];
				document.getElementsByClassName('showcase-project-link')[counter].href = repos[keys]['html_url'];
				document.getElementsByClassName('showcase-lastest-push')[counter].innerHTML = 'Lastest push on: ' +	String(new Date(repos[keys]['pushed_at'])).slice(4,15);
				document.getElementsByClassName('showcase-project-languages')[counter].innerHTML = 'Languages: ' + repos[keys]['language'];
			}
			document.getElementsByClassName('ajax-show')[0].style.visibility = "visible";

					// console.log(githubRepos[i]['name']);
					// console.log(githubRepos[i]['html_url']);
					// console.log(githubRepos[i]['language']);
					// console.log('stars: ' + githubRepos[i]['stargazers_count']);
					// console.log('watchers: ' + githubRepos[i]['watchers_count']);
					// console.log('forks: ' + githubRepos[i]['forks_count']);
					// // save to array[i] or object[i]
					// // do stuff with that data.
					// // fix authentication.
		}
		// I need to build my own API to host images of my projects?
		// Also need to add descriptions.
	}	
}
