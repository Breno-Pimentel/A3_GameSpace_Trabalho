const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Redirecionando...");
// funciona Brasil!!!!
  const data = {
    email: email.value,
    password: password.value,
  };
// #
  async function login() {
    try {
      const result = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          const id = data.id;
          if (data.msg === "Autenticação realizada com sucesso") {
           
          window.location.replace(`http://localhost:5500/client/dashboard.html`);
            
          }
          else{
            alert("Login não realizado, por favor verifique os dados")
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  login();
});
