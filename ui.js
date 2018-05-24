var attributes = ['', 'name'];

function doSearch() {
  var query = document.querySelector('#search-input').value;
  var outputDiv = document.querySelector('#search-results');
  displayRemoveChildren(outputDiv);

  addText(`Searching for ${query}...`, outputDiv);
  
  searchByName(query).then(function(res) {
    if(res.length < 1) {
      addText('Found nothing', outputDiv);
      return;
    }

    var table = displayPokemonList(res);
    displayRemoveChildren(outputDiv);
    outputDiv.appendChild(table);
  });
}

function displayPokemonList(pokemons) {
  var table = addNode('table');
  var body = addNode('tbody', table);

  for(var rI = 0; rI < pokemons.length; rI++) {
    var row = addNode('tr', body);
    var tdImg = addNode('td', row);
    var tdName = addNode('td', row);

    var imgUrl = pokemons[rI].sprites.front_default;
    if(!imgUrl) {
      imgUrl = 'missing.png';
    }
    var img = addNode('img', tdImg);
    img.src = imgUrl;
    addText(pokemons[rI].name, tdName);
  }

  return table;
}

function displayMakeTeam() {
  var teamName = prompt('What would you like to name your team?');
  if(teamName.length > 0) {
    createTeam(teamName);
  }
}
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
