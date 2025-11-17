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
                console.log('Data:', data);
                //procesar datos e enviar generar html dinamico
                const main = document.getElementById('main');
                main.innerHTML='';
                //let html = `<h2>Usuarios</h2> `;
                
                data.forEach(user => {
                     const div = document.createElement('div');
                     div.innerHTML = `
                        <h3>👤 ${user.name}</h3>
                        <p><strong>ID:</strong> ${user.idUser}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Status:</strong> ${user.status}</p>
                        <p><strong>Creado:</strong> ${new Date(user.created_at).toLocaleString()}</p>
                    `;
                     main.appendChild(div);
                });
                //main.innerHTML = html;
               
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