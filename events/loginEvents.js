import home from '../components/home.js';
import status from '../components/status.js'


const handleLogin = async () => {
   
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: user, password: pass })
        });

        if (!response.ok) {
           // throw new Error('Error en la respuesta de la API');
           return { error: errorData.message || 'Hubo un error con tu solicitud.' };
        }

        const data = await response.json();
        const username = data.username;
        const token = data.token;

        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);

        home();
        status();
    
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Error de red:', error.message);
            alert('No se pudo conectar con el servidor ❌❌. Verifica tu conexión o intenta más tarde.');
        }
        else{
            console.error('Hubo un problema con la solicitud fetch:', error);
            alert('Sorry, user not found 🤦‍♂️.');
        }
    }
};

export default handleLogin;