var attributes = ['', 'name'];

function doSearch() {
  var query = document.querySelector('#search-input').value;
  var outputDiv = document.querySelector('#search-results');
  displayRemoveChildren(outputDiv);
  
  searchByName(query).then(function(res) {
    if(res.length < 1) {
      addText('Found nothing', outputDiv);
      return;
    }

    for(var rI = 0; rI < res.length; rI++) {
      console.log(res[rI].name);
    }
  });
}

function displayPokemonList(pokemons) {}

function displayMakeTeam() {}
function displayDeleteTeam(teamId) {}

function displayPokemonTeams() {}
function displayPokemonTeam(team) {}

function displayRemoveChildren(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}
function addNode(tag, parent) {
  var node = document.createElement(tag);
  if (parent && parent.appendChild) {
    parent.appendChild(node);
  }
  return node;
}
function addText(text, parent) {
  var node = document.createTextNode(text);
  if (parent && parent.appendChild) {
    parent.appendChild(node);
  }
  return node;
}
