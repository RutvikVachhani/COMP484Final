//this is the api which fetches info from the database
export const getInfo = () => fetch("https://comp484finalbackend.herokuapp.com/display")
.then(response => {
    return response.json()
})