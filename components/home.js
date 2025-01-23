const home = () => {
    const main = document.getElementById('main');
    if (!main) {throw new Error('Main element not found')}
    const html_main = `
                    <h2>Auth JWT ...⛔</h2>
                    <p>Here is view home, in this app the route users only access if you are a user in to BD system logedd, cant you will see a user list, on route by user loged using <b>jwt</b> auth..., enjoy 😎✌.</p>
                    <h3>App user List from Mysql auth. JWT 👍</h3>
                    <p>In this app, cant you will see a list user by user loged using <b>jwt</b> auth. app to study dev web seq auth by jwt 🔑.</p>`;

    main.innerHTML = html_main;
};
export default home;