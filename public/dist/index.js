var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var allUsers = [];
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
function getUser() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var user, response, userResponse, userFiltered, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    user = prompt('Qual usuário do github gostaria de pesquisar');
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(user))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    userResponse = _a.sent();
                    if (userResponse.message || userResponse.login === null) {
                        console.log("User not found");
                    }
                    else {
                        console.log(userResponse);
                        userFiltered = {
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
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    reject(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function showUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userName, findUser, response, userRepos, listOfRepository_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userName = prompt('De qual usuário gostaria de ver os repositórios?');
                    findUser = allUsers.find(function (user) { return user.login === userName; });
                    console.log(findUser);
                    if (!findUser) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(findUser.reposUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    userRepos = _a.sent();
                    listOfRepository_1 = "";
                    userRepos.forEach(function (repository, index) {
                        listOfRepository_1 += "".concat(index + 1, " - Name: ").concat(repository.name, ", Description: ").concat(repository.description, ", Fork: ").concat(repository.fork, ", Stargazers Count: ").concat(repository.stargazersCount, "\n");
                    });
                    alert(listOfRepository_1);
                    return [3 /*break*/, 4];
                case 3:
                    alert("Usu\u00E1rio n\u00E3o encontrado na lista");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function sumRepos() {
    var totalRepos = 0;
    allUsers.map(function (user) {
        totalRepos += user.publicRepos;
    });
    alert("No total h\u00E1 na lista ".concat(totalRepos, " na lista"));
}
function shouUsers() {
    allUsers.forEach(function (user) {
        alert("\n        Name: ".concat(user.name, "\n        Login:").concat(user.login, "\n        Bio: ").concat(user.bio, "\n        Id: ").concat(user.id, "\n        Public repositories: ").concat(user.publicRepos));
    });
}
function topFive() {
    allUsers.sort(function (a, b) { return b.publicRepos - a.publicRepos; });
    for (var index = 0; index < 5; index++) {
        alert("Usu\u00E1rios com mais reposit\u00F3rios p\u00FAblicos:\n        ".concat(index + 1, " - Name: ").concat(allUsers[index].name, ", Public Repositories: ").concat(allUsers[index].publicRepos));
    }
}
function iniciate() {
    var option;
    do {
        option = Number(prompt("Escolha uma das op\u00E7\u00F5es abaixo:\n        1 - Cadastrar usu\u00E1rio do github\n        2 - Pesquisar usu\u00E1rio cadastrado\n        3 - Total de reposit\u00F3rios na lista\n        4 - Exibir todos os usu\u00E1rios\n        5 - Top 5 usu\u00E1rios com mais reposit\u00F3rios p\u00FAblicos\n        6 - sair"));
        switch (option) {
            case 1:
                getUser().then(function () {
                }).catch(function (error) {
                    console.log('Erro ao cadastrar suário:', error);
                });
                break;
            case 2:
                showUser();
                break;
            case 3:
                sumRepos();
                break;
            case 4:
                shouUsers();
                break;
            case 5:
                topFive();
                break;
            case 6:
                break;
            default:
                alert('Opção inválida');
        }
    } while (option != 6);
    alert("Saindo...");
}
iniciate();
