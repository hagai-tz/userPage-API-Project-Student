// //This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    fetchUser() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: data => {

                let mainProfile = data.results.map(u => {
                    return {
                        picture: u.picture.large,
                        firstName: u.name.first,
                        lastName: u.name.last,
                        city: u.location.city,
                        state: u.location.state,
                    }
                })

                this.data.mainProfile = mainProfile
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }

    fetchFriends() {

    }

    fetchQuote() {
        
    }

    loadData() {
        fetchUser();
    //Random User Generator API
    // renderUsers() {
       
    // }

    //Random User Generator API should run 6 times

    // renderFriends() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: data => {

                let friendsProfile = data.results.map(u => {
                    return {
                        firstName: u.name.first,
                        lastName: u.name.last,
                    }
                })
                this.data.friendsProfile = friendsProfile
            },
            

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    
    // }

    // Kanya quote API

    // renderQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: data => {
                // debugger
                this.data.quote = data.quote


            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    // }

    // Pokemon API
    // renderPokemon() {

        const url = 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor((Math.random() * 400) + 1))
        $.ajax({
            method: "GET",
            url: url,
            dataType: 'json',
            success: data => {
                let pokemon = {
                    pokemonName: data.species.name,
                    pokemonPicture: data.sprites.front_default
                }
                this.data.pokemon = pokemon
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    // }

    // Baconipsum API

    // renderMeat() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1',
            dataType: 'json',
            success: data => {
                this.data.aboutMe = data
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    // }

    console.log(this.data)
    
    }

}