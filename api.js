var pd = new Pokedex.Pokedex({
  protocol: 'https',
  timeout: 20 * 1000,
});

function getPokemon(id) {}

function searchByName(query) {
  return pd.getPokemonsList().then(function(result) {
    var found = [];
    for(var rI = 0; rI < result.results.length; rI++) {
      var score = 0;
      var item = result.results[rI];
      if(item.name.includes(query)) {
        score += 1;
        if(item.name.startsWith(query)) {
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

function createTeam(name) {}
function getTeams() {}
function getTeam(id) {}
function deleteTeam(id) {}
function editTeam(id, name) {}

function addToTeam(teamId, pokemonId) {}
function removeFromTeam(teamId, pokemonId) {}
function resetTeams() {}
