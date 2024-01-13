const usersApi = 'https://api.github.com/users';

const tableBody = document.getElementById('users-table-body');

fetch(usersApi)
    .then(res => res.json()).then(users => {

        for (const u of users) {
            tableBody.innerHTML += `
            <tr>
                <td>${u.id}</td>
                <td>${u.login}</td>
                <td>${u.type}</td>
            </tr>`
        }
    });