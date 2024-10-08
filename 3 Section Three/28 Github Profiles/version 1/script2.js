const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username){
    try{
        const {data} = await axios (APIURL + username)

        creatUserCard(data)
        getRepos(username)
    } catch(err){
        if(err.response.status == 404){
            createErrorCard('No Profile with this username!')
        }
    }

}

async function getRepos(username) {
    
    try{
        const {data} = await axios(APIURL + username + '/repos? sort = created')

        addReposToCard(data)
    } catch (err){
        createErrorCard('Problem Fetching Repos')
    }
}