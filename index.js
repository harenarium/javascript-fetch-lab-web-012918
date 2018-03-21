const url = 'https://api.github.com'

function getIssues() {
  //2. GET /repos/:owner/:repo/issues
  fetch(url + '/repos/harenarium/javascript-fetch-lab/issues', {
    headers: {Authorization: `token ${getToken()}`}
  }).then(resp => resp.json()).then(json => showIssues(json))
}



function showIssues(json) {
  json.forEach(issue => $('#issues').append(issue))
}

function createIssue() {
  //1. POST /repos/:owner/:repo/issues
  const issueTitle = document.getElementById('title').value
  const issueText = document.getElementById('body').value
  fetch(url + '/repos/harenarium/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify({title: issueTitle, body: issueText})
  }).then(resp => getIssues())
}

function showResults(json) {
  $('#results').append(json[0].name)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(url + '/repos/' + repo + '/forks', {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  return ''
}
