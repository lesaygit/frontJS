import { getUsername, isUserLoggedIn } from '../util/util.js'

const status = () => {
    const loginStatus = document.getElementById('loginStatus');
    if (!loginStatus) { throw new Error('element <div class="user_container" id="user_container"></div> not found ') }

    if (isUserLoggedIn()) {
        loginStatus.innerHTML = `
        <h4>Logged in as ${getUsername()}</h4>
        <button class="btnLogout" id="btnLogout">logout</button>`;
    } else {
        loginStatus.innerHTML = '<p>Please log in</p>';
    }
};
export default status;