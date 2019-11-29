//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        //you should make all your API requests here
        //each request should update the `data` object accordingly

        //Random User Generator API

        $ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json'
            success: function (data) {
                
            }
            
            error: function (xhr, text, error) {
                console.log(text)
            }

        })

        //Random Kanye Quote Generator API

        $ajax({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/users'
            success: function (data) {

            }
            
            error: function (xhr, text, error) {
                console.log(text)
            }

        })

        //PokeAPI

        $ajax({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/users'
            success: function (data) {

            }
            
            error: function (xhr, text, error) {
                console.log(text)
            }

        })

        //Bacon Ipsum API


        $ajax({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/users'
            success: function (data) {

            }
            
            error: function (xhr, text, error) {
                console.log(text)
            }

        })


    }
}
