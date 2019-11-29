//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    // loadData() {
    //you should make all your API requests here
    //each request should update the `data` object accordingly

    //Random User Generator API
    renderUsers() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {

                const firstProfile = data.results.map(u => {
                    return {
                        picture: u.picture.large,
                        firstName: u.name.first,
                        lastName: u.name.last,
                        city: u.location.city,
                        state: u.location.state,
                    }
                })

                this.data = firstProfile
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }

    //Random User Generator API should run 6 times
    renderFriends() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {

                const friendsProfile = data.results.map(u => {
                    return {
                        firstName: u.name.first,
                        lastName: u.name.last,
                    }
                })
                this.data = friendsProfile
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }

    //Random User Generator API should run 6 times
    renderFriends() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {

                const friendsProfile = data.results.map(u => {
                    return {
                        firstName: u.name.first,
                        lastName: u.name.last,
                    }
                })
                this.data = friendsProfile
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }
    
    // Kanya quote API

    renderQuote(){
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: function (data) {
                const quote = data
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }

    // Pokemon API
    renderPokemon(){
        
        const url = 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor((Math.random() * 949) + 1))
        $.ajax({
            method: "GET",
            url: url,
            dataType: 'json',
            success: function (data) {
                const name = data.species.name
                const picture = data.sprites.front_default
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }

    // Baconipsum API
    
    renderMeat(){
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1',
            dataType: 'json',
            success: function (data) {
                const aboutMe = data
            },

            error: function (xhr, text, error) {
                console.log(text)
            }

        })
    }



    // }
}
