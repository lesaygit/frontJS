import login from '../components/login.js';
import { jest } from '@jest/globals'; 

describe('tests to login comonent method', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div class="main" id="main"></div>';
        window.history.pushState = jest.fn();
        global.handleLogin = jest.fn();

        // Mock del addEventListener para el evento personalizado
        document.addEventListener = jest.fn((event, callback) => {
            if (event === 'loginFormReady') {
                callback();
            }
        });
    });

    it('should render the login form html into the main div', () => {
        login();

        const mainDiv = document.getElementById('main');
        expect(mainDiv).not.toBeNull();

        const loginDiv = mainDiv.querySelector('.login');
        expect(loginDiv).not.toBeNull();

        const form = loginDiv.querySelector('.form_login');
        expect(form).not.toBeNull();

        const userLabel = form.querySelector('label[for="user"]');
        expect(userLabel).not.toBeNull();
        expect(userLabel.textContent.trim()).toBe('user');

        const userInput = form.querySelector('input#user');
        expect(userInput).not.toBeNull();
        expect(userInput.getAttribute('type')).toBe('text');
        expect(userInput.getAttribute('name')).toBe('user');
        expect(userInput.getAttribute('placeholder')).toBe('user');

        const passLabel = form.querySelector('label[for="pass"]');
        expect(passLabel).not.toBeNull();
        expect(passLabel.textContent.trim()).toBe('password');

        const passInput = form.querySelector('input#pass');
        expect(passInput).not.toBeNull();
        expect(passInput.getAttribute('type')).toBe('pass');
        expect(passInput.getAttribute('name')).toBe('pass');
        expect(passInput.getAttribute('placeholder')).toBe('pass');

        const btn = loginDiv.querySelector('button#btn');
        expect(btn).not.toBeNull();
        expect(btn.getAttribute('type')).toBe('button');
        expect(btn.textContent.trim()).toBe('send');
    });

    it('should update the browser history to /login', () => {
        login();
        expect(window.history.pushState).toHaveBeenCalledWith({}, 'Login', '/login');
    });

    it('should dispatch the loginFormReady event', () => {
        const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent');
        login();
        expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(Event));
    });

    it('should attach a click event to the button on loginFormReady', () => {
        login();
        const btn = document.getElementById('btn');
        btn.click();
        expect(global.handleLogin).toHaveBeenCalled();
    });

});