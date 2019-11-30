// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const renderData = new Renderer()
const apiCaller = new APIManager()

const saveUserData = function(){
    let savedUser = apiCaller.data
    localStorage.setItem("user",JSON.stringify(savedUser))
    console.log(savedUser)
}

const getUserData = function(){
    let getUser = JSON.parse(localStorage.user || "[]")
    renderData.render(getUser)
}

$('#load-user-data').on('click', function(){
    apiCaller.loadData()
})

$('#display-user').on('click', function(){
    renderData.render(apiCaller.data)
})

$('#save-user-page').on('click', function(){
    saveUserData()

})

$('#load-user-page').on('click', function(){
        getUserData()
})
