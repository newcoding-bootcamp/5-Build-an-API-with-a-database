var attributes = ['', 'name'];

function doSearch() {}

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
