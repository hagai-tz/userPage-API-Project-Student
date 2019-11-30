// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $('.user-container').empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({users})
        $(".user-container").append(newHTML)

    }

    _renderFriends(users) {
        $('.friends-container').empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({users})
        $(".friends-container").append(newHTML)
        
    }

    _renderQuote(quoteInfo) {
        $('.quote-container').empty()
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({quoteInfo})
        $(".quote-container").append(newHTML)
        
    }

    _renderPokemon(pokemonInfo) {
        $('.pokemon-container').empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({pokemonInfo})
        $(".pokemon-container").append(newHTML)
        

    }

    _renderMeat(meatText) {
        $('.meat-container').empty()
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({meatText})
        $(".meat-container").append(newHTML)
        

    }

    render(data){
        this._renderUsers(data.mainProfile)
        this._renderFriends(data.friendsProfile)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)  
        this._renderMeat(data.aboutMe)    
    }
}