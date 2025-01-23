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