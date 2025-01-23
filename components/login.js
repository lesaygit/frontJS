const login = () => {
    const main = document.getElementById('main');
    if (!main) { throw new Error('element not found') }
    let html = `
             <div class="login">
              <form class="form_login">
               <label for="user">user </label>
               <input type="text" name="user" id="user" placeholder="user">
               <label for="pass">password </label>
               <input type="pass" name="pass" id="pass" placeholder="pass">
              </form>
              <button class="btn" type="button" id="btn">send</button>
             </div>`;
    main.innerHTML = html;
    //event
    const event = new Event('loginFormReady');
    document.dispatchEvent(event);
};

export default login;
