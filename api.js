var pd = new Pokedex.Pokedex({
  protocol: 'https',
  timeout: 40 * 1000,
});

var teamTable = 'teams';
if(!localStorage.getItem(teamTable)) {
  localStorage.setItem(teamTable, '{}');
}

function getPokemon(id) {}

function searchByName(query) {
  query = query.toLowerCase();
  return pd.getPokemonsList().then(function(result) {
    var found = [];
    for(var rI = 0; rI < result.results.length; rI++) {
      var score = 0;
      var item = result.results[rI];
      var nameLower = item.name.toLowerCase();
      if(nameLower.includes(query)) {
        score += 1;
        if(nameLower.startsWith(query)) {
          score += 1;
        }
        score += query.length / item.name.length;
      }

      if(score > 0) {
        found.push([score, item.name]);
      }
    }
    found.sort();
    found.reverse();

    var promises = [];
    for(var pI = 0; pI < found.length; pI++) {
      promises.push(pd.getPokemonByName(found[pI][1]));
    }

    return Promise.all(promises);
  });
}

function createTeam(name) {
  var db = JSON.parse(localStorage.getItem(teamTable));
  db[name] = {name: name, members: []};
  localStorage.setItem(teamTable, JSON.stringify(db));
}

function getTeams() {
  var db = JSON.parse(localStorage.getItem(teamTable));
  return db;
}
function getTeam(id) {
  return getTeams()[id];
}

function deleteTeam(id) {}
function editTeam(id, data) {
  var db = JSON.parse(localStorage.getItem(teamTable));
  if(!db[id]) {
    throw new Error('No team found');
  }

  db[id] = data;
  localStorage.setItem(teamTable, JSON.stringify(db));
}

function addToTeam(teamId, pokemonId) {}
function removeFromTeam(teamId, pokemonId) {}
function resetTeams() {}
