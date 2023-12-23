// API 
const gitHubUsersApi = 'https://api.github.com/users';
const privateExchangeApi = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const monoKurs = 'https://api.monobank.ua/bank/currency'
//const gismeteoApi = 'https://api.gismeteo.net/v2/weather/current/?latitude=54.35&longitude=52.52';
//const gismeteoApi = 'https://api.open-meteo.com/v1/forecast?latitude=50.6231&longitude=26.2274&hourly=temperature_2m';

//1
//  const responce = await fetch(gitHubUsersApi)
//  console.log(responce);

// //2
// async function showGitHubUsers() {
//     const response = await fetch(gitHubUsersApi);
//     console.log(response);    
// }
// showGitHubUsers()

// //3
// async function showGitHubUsers() {
//     const response = await fetch(gitHubUsersApi);
//     const result = await response.json();
//     console.log(result);    
// }
// showGitHubUsers()
//4
// async function showGitHubUsers() {
//     const response = await fetch(gitHubUsersApi);
//     console.log("Responce status : "+ response.status);    
//     const json = await response.json();
//     console.log(json);    
//     console.log("First user login : " + json[0].login);        
// }
// showGitHubUsers()

 //console.log(responce);

//5
// // asynchronius: async + await
async function showApiResult(api) {
    const response = await fetch(api);
    console.log("Response Status: " + response.status);

    const result = await response.json();

    console.log(result);
}
async function showGitHubUserAvatar(login) {
    const response = await fetch(gitHubUsersApi + '/' + login);
    const result = await response.json();

    const avatarImg = document.getElementById('avatar-img');
    avatarImg.src = result.avatar_url;
}

//showApiResult(privateExchangeApi);
//showApiResult(monoKurs);
//showApiResult(gismeteoApi);

//showGitHubUserAvatar('IliushynOlena');
//showGitHubUserAvatar('mojombo');
showGitHubUserAvatar('vladtymo');