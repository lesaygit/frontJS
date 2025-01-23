import status from '../components/status.js'

describe('tests to status component method', () => {
    let userContainer;
    beforeEach(() => {
        document.body.innerHTML = '<div class="loginStatus" id="loginStatus"></div>';
        userContainer = document.getElementById('loginStatus');
        sessionStorage.clear();
    });

    it('should show error if the loginStatus element id html does not exist', () => {
        document.body.innerHTML = '';
        expect(() => status()).toThrow('element <div class="loginStatus" id="loginStatus"></div> not found ');//espero que al llamar el meth lance un error de no existir el elment html
    });

    it('should render login link when user is not logged in', () => {
        status();
        userContainer = document.getElementById('loginStatus');
        expect(userContainer.innerHTML).toContain('<p>Please log in</p>')
    });

    it('reendering if exist username and token vars in sessionStorage', () => {

        sessionStorage.setItem('username', 'testUser');
        status();
        expect(userContainer.innerHTML).toContain('<h4>Logged in as testUser</h4>');
       
    });

/*     it('should handle logout event', () => {
        sessionStorage.setItem('username', 'testUser');
        sessionStorage.setItem('token', 'testToken');
        status();

        const closeLink = document.getElementById('linkClose');
        closeLink.click();

        expect(sessionStorage.getItem('username')).toBeNull();
        expect(sessionStorage.getItem('token')).toBeNull();
        expect(userContainer.innerHTML).toContain('login 🔑 in <a id="link_login"> login...</a>');
    });

    it('should handle login link click event', () => {
        status();

        const loginLink = document.getElementById('link_login');
        loginLink.click();

        // Aquí puedes verificar la redirección o llamada a la función que maneja el login
        // Esto puede depender de tu implementación específica
        // Por ejemplo:
        // expect(window.location.href).toBe('/login');

    });
 */

});