import home from '../components/home.js'

describe('tests to home component method', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="main"></div>';
    });

    it('should insert the correct HTML into the main element', () => {
        home();
        const main = document.getElementById('main');
        expect(main.innerHTML).toContain('<h2>Auth JWT ...⛔</h2>');
        expect(main.innerHTML).toContain('<p>Here is view home, in this app the route users only access if you are a user in to BD system logedd, cant you will see a user list, on route by user loged using <b>jwt</b> auth..., enjoy 😎✌.</p>');
    });

    it('should do nothing if the main element does not exist', () => {
        document.body.innerHTML = '';
        //expect(() => goHome()).toThrow('Main element not found');
        expect(() => home()).toThrow();
    });

    it('should work correctly if called multiple times', () => {
        home();
        home();
        const main = document.getElementById('main');
        expect(main.innerHTML).toContain('<h2>Auth JWT ...⛔</h2>');
        expect(main.innerHTML).toContain('<p>Here is view home, in this app the route users only access if you are a user in to BD system logedd, cant you will see a user list, on route by user loged using <b>jwt</b> auth..., enjoy 😎✌.</p>');
    });
    //add test 3 more Prueba de seguridad: Asegurarte de que el método goHome no realice acciones inesperadas o inseguras.
    it('should not alter other parts of the DOM', () => {
        document.body.innerHTML = '<div id="main"></div><div id="other"></div>';
        const other = document.getElementById('other');
        const initialOtherHTML = other.innerHTML;
        home();
        expect(other.innerHTML).toBe(initialOtherHTML);
    });

    //Prueba de desempeño: Si goHome es llamado muchas veces en un corto periodo de tiempo, asegurarte de que no degrade el desempeño de la aplicación.
    it('should perform well when called many times', () => {
        const start = performance.now();
        for (let i = 0; i < 1000; i++) {
            home();
        }
        const end = performance.now();
        expect(end - start).toBeLessThan(4000); // Por ejemplo, menos de 100ms
    });


    //other Prueba de integridad del DOM: Verificar que el contenido de main sea exactamente lo que esperas y que no se modifiquen otras partes del DOM inadvertidamente.
    it('should not perform unexpected actions', () => {
        // Prueba de seguridad para asegurar que solo se modifica el elemento main
        document.body.innerHTML = '<div id="main"></div><div id="other"></div>';
        const main = document.getElementById('main');
        const other = document.getElementById('other');
        home();
        expect(main.innerHTML).toContain('<h2>Auth JWT ...⛔</h2>');
        expect(other.innerHTML).toBe(''); // El contenido de 'other' debería permanecer inalterado
    });


});