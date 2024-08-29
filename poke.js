const pokemon_id=[
    {"id":"001", "name":"Bulbasaur", "ability": "grass, poison"},
    {"id":"002", "name":"Ivysaur","ability": "grass, poison"},
    {"id":"003", "name":"Venusaur", "ability": "grass, poison"},
    {"id":"004", "name":"Charmander","ability": "fire"},
    {"id":"005", "name":"Charmeleon", "ability": "fire"},
    {"id":"006", "name":"Charizard", "ability": "fire, flying"},
    {"id":"007", "name":"Squirtle", "ability": "water"},
    {"id":"008", "name":"Wartortle", "ability": "water"},
    {"id":"009", "name":"Blastoise", "ability": "water"},
    {"id":"010", "name":"Caterpie", "ability": "bug"},
    {"id":"011", "name":"Metapod", "ability": "bug"},
    {"id":"012", "name":"Butterfree", "ability": "bug, flying"},
    {"id":"013", "name":"Weedle", "ability": "bug, poison"},
    {"id":"014", "name":"Kakuna", "ability": "bug, poison"},
    {"id":"015", "name":"Beedrill", "ability": "bug, poison"},
    {"id":"016", "name":"Pidgey", "ability": "normal, flying"},
    {"id":"017", "name":"Pidgeoto", "ability": "normal, flying"},
    {"id":"018", "name":"Pidgeot", "ability": "normal, flying"},
    {"id":"019", "name":"Rattata", "ability": "normal"},
    {"id":"020", "name":"Raticate", "ability": "normal"}
    
]

function search_by_name(){
    
    var result=document.getElementById("search_name").value;
    var found=pokemon_id.filter(foundpokemon=>{
        if (foundpokemon.name.toLowerCase().includes(result.toLowerCase()))
        {
            return foundpokemon;
            
        }       
    })
    alert(JSON.stringify((found).slice(0,5)));
}

function search_by_number(){

    var result=document.getElementById("search_num").value;
    var found=pokemon_id.filter(foundpokemon=>{
        if (foundpokemon.id.includes(result)){

            return foundpokemon;
        }
    })
    alert(JSON.stringify((found).slice(0,5))); 
}