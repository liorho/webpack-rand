// import 'handlebars'
// import template from "./templates/template.handlebars";
// var template = require("./templates/template.handlebars");
let meatTemplate = require('./templates/meat-template.handlebars')
let pokemonTemplate = require('./templates/pokemon-template.handlebars')
let quoteTemplate = require('./templates/quote-template.handlebars')
let userFriendsTemplate = require('./templates/user-friends-template.handlebars')
let userTemplate = require('./templates/user-template.handlebars')
class Renderer {
    renderUsers(users) {
        // let source = $("#user-template").html()
        // let template = Handlebars.compile(source)
        let newHTML = userTemplate(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        // let sourceFriends = $("#user-friends-template").html()
        // let templateFriends = Handlebars.compile(sourceFriends)
        let friendsHTML = userFriendsTemplate({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        // let sourceQuote = $("#quote-template").html()
        // let templateQuote = Handlebars.compile(sourceQuote)
        let quoteHTML = quoteTemplate(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        // let sourcePokemon = $("#pokemon-template").html()
        // let templatePokemon = Handlebars.compile(sourcePokemon)
        let pokemonHTML = pokemonTemplate(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        // let sourceMeat = $("#meat-template").html()
        // let templateMeat = Handlebars.compile(sourceMeat)
        let meatHTML = meatTemplate({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}

export default Renderer