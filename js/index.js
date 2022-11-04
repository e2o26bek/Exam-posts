let elSignBtn = document.querySelector(".sign");
let elLoginWindow = document.querySelector(".login-div");
let elLoginInput = document.querySelector(".login");
let elPasswordInput = document.querySelector(".password");
let elLoginBtn = document.querySelector(".login-btn");
let elShow = document.querySelector(".fa-eye-slash")
let elHide = document.querySelector(".fa-eye")


elSignBtn.addEventListener("click", () => {
    elLoginWindow.classList.add("flex")
})

elLoginBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        let username = elLoginInput.value;
        let password = elPasswordInput.value;
        if (username !== '' && password !== '') {
            let auth = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            let res = await auth.json();
            if (res.token) {
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('userId', res.id);
                location = './posts.html'
            } else {
                localStorage.removeItem('access_token');
                location.reload();
            }
        }
    } catch (error) {
        console.log(error);
    }
});

elShow.addEventListener("click", () => {
    if (elPasswordInput.value !== "" && elPasswordInput.type == "password") {
        elShow.classList.add('none')
        elHide.classList.remove('none')
        elHide.classList.add('block')
        elPasswordInput.type = 'text'
    }
})
elHide.addEventListener("click", () => {
    if (elPasswordInput.value !== "" && elPasswordInput.type == "text") {
        elHide.classList.add('none')
        elShow.classList.remove('none')
        elShow.classList.add('block')
        elHide.classList.remove('block')
        elPasswordInput.type = 'password'
    }
})