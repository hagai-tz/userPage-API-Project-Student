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
        
    // }
}