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



// async function getUser(){
//     const user = prompt('Qual usuário do github gostaria de pesquisar')
//     const response = await fetch(`https://api.github.com/users/${user}`)
//     const userResponse = await response.json()
    
//     if(userResponse.message || userResponse.login === null){
//         console.log("User not found")
//     }else{
//         console.log(userResponse)
//         let userFiltered:User = {
//             id: userResponse.id,
//             login: userResponse.login,
//             name: userResponse.name,
//             bio: userResponse.bio,
//             publicRepos: userResponse.public_repos,
//             reposUrl: userResponse.repos_url
//         }
//         console.log(userFiltered)
//         console.log(allUsers)
//         allUsers.push(userFiltered)
//     }
// }

function getUser(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const user = prompt('Qual usuário do github gostaria de pesquisar');
            const response = await fetch(`https://api.github.com/users/${user}`);
            const userResponse = await response.json();
            
            if (userResponse.message || userResponse.login === null) {
                console.log("User not found");
            } else {
                console.log(userResponse);
                let userFiltered: User = {
                    id: userResponse.id,
                    login: userResponse.login,
                    name: userResponse.name,
                    bio: userResponse.bio,
                    publicRepos: userResponse.public_repos,
                    reposUrl: userResponse.repos_url
                };
                console.log(userFiltered);
                console.log(allUsers);
                allUsers.push(userFiltered);
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

async function showUser() {
    const userName = prompt('De qual usuário gostaria de ver os repositórios?');
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
        alert(`Usuário não encontrado na lista`);
    }
}

function sumRepos(){
    let totalRepos:number = 0
    allUsers.map((user) => {
        totalRepos += user.publicRepos
    })
    alert(`No total há na lista ${totalRepos} na lista`)
}

function shouUsers(){
    allUsers.forEach(user => {
        alert(`
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
        alert(`Usuários com mais repositórios públicos:
        ${index + 1} - Name: ${allUsers[index].name}, Public Repositories: ${allUsers[index].publicRepos}`);
    }
}

function iniciate(){
    let option:number
    do{
        option = Number(prompt(`Escolha uma das opções abaixo:
        1 - Cadastrar usuário do github
        2 - Pesquisar usuário cadastrado
        3 - Total de repositórios na lista
        4 - Exibir todos os usuários
        5 - Top 5 usuários com mais repositórios públicos
        6 - sair`))
        switch(option){
            case 1:
                getUser().then(() => {

                }).catch((error) => {
                    console.log('Erro ao cadastrar suário:', error)
                })
                break
            case 2:
                showUser()
                break
            case 3: 
                sumRepos()
                break
            case 4:
                shouUsers()
                break
            case 5:
                topFive()
                break
            case 6:
                break
            default:
                alert('Opção inválida')
        }
    }while(option != 6)
    
    alert(`Saindo...`)
    }
iniciate()