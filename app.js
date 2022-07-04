const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();     // 브라우저의 기본 동작을 막는다
    // const username = loginInput.value;
    // console.log(username);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);