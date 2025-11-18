const users = () => {

    const url = 'http://localhost:3000/users';
    const username = sessionStorage.getItem('username');
    const token = sessionStorage.getItem('token');
    const optionFetch = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    // Verifica si los valores existen
    if (username && token) {
        // Configura la solicitud fetch
        fetch(url, optionFetch)
            .then(response => {
                // Verifica si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Maneja los datos de la respuesta
               // console.log('Data:', data);
                //procesar datos e enviar generar html dinamico
                const main = document.getElementById('main');
                main.innerHTML = ""; // limpiar
                const table = document.createElement('table');
                table.innerHTML = `
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Options</th>
                                    </tr>
                                </thead>
                            `;
                const tbody = document.createElement('tbody');
                data.forEach(user => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                                    <td>${user.idUser}</td>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.status}</td>
                                    <td>${new Date(user.created_at).toLocaleString()}</td>
                                     <td> 
                                      <i class="fa fa-pencil action-icon"></i>
                                      <i class="fa fa-trash action-icon"></i>
                                      <i class="fa fa-search action-icon"></i>
                                    </td>

                                `;
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                main.appendChild(table);


            })
            .catch(error => {
                // Maneja cualquier error que ocurra
                console.error('Error:', error);
            });
    } else {
        console.error('Username or token not found in sessionStorage');
        alert('Username or token not found in sessionStorage, only loged users cant acces!🔑😉');
    }

};

export default users;