// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ users })
        $(".user-container").append(newHTML)
        debugger
    }

    _renderFriends(users) {

    }

    _renderQuote(quoteInfo) {

    }

    _renderPokemon(pokemonInfo) {

    }

    _renderMeat(meatText) {

    }

    render(data){
        this._renderUsers(data.firstProfile)
        debugger
        //invokes all the individual _render methods
    }
}