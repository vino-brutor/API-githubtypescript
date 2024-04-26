interface User {
    id:number,
    login:string,
    name:string,
    bio:string,
    publicRepos:number,
    reposUrl:string
}

interface Repos {
    name: string,
    description: string,
    fork: boolean,
    stargazersCount: number
}

let allUsers:User[] = []



async function getUser(user:string){
    // const user = prompt('Qual usuário do github gostaria de pesquisar')
    const response = await fetch(`https://api.github.com/users/${user}`)
    const userResponse = await response.json()
    
    if(userResponse.message || userResponse.login === null){
        console.log("User not found")
    }else{
        console.log(userResponse)
        let userFiltered:User = {
            id: userResponse.id,
            login: userResponse.login,
            name: userResponse.name,
            bio: userResponse.bio,
            publicRepos: userResponse.public_repos,
            reposUrl: userResponse.repos_url
        }
        console.log(userFiltered)
        console.log(allUsers)
        allUsers.push(userFiltered)
    }
}


async function showUser(userName:string) {
    // const userName = prompt('De qual usuário gostaria de ver os repositórios?');
    const findUser = allUsers.find((user) => user.login === userName);
    console.log(findUser)
    if (findUser) {
        const response = await fetch(findUser.reposUrl);
        const userRepos = await response.json() as Repos[];
        let listOfRepository: string = "";
        userRepos.forEach((repository, index) => {
            listOfRepository += `${index + 1} - Name: ${repository.name}, Description: ${repository.description}, Fork: ${repository.fork}, Stargazers Count: ${repository.stargazersCount}\n`;
        });
        alert(listOfRepository);
    } else {
        console.log(`Usuário não encontrado na lista`);
    }
}

function sumRepos(){
    let totalRepos:number = 0
    allUsers.map((user) => {
        totalRepos += user.publicRepos
    })
    console.log(`No total há na lista ${totalRepos} na lista`)
}

function shouUsers(){
    allUsers.forEach(user => {
        console.log(`
        Name: ${user.name}
        Login:${user.login}
        Bio: ${user.bio}
        Id: ${user.id}
        Public repositories: ${user.publicRepos}`)
    });
}

function topFive() {
    allUsers.sort((a, b) => b.publicRepos - a.publicRepos);
    for (let index = 0; index < 5; index++) {
        console.log(`Usuários com mais repositórios públicos:
        ${index + 1} - Name: ${allUsers[index].name}, Public Repositories: ${allUsers[index].publicRepos}`);
    }
}
