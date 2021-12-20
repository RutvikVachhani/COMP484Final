//this is the api which fetches info from the database
export const getInfo = () => fetch("http://localhost:4000/display")
.then(response => {
    return response.json()
})