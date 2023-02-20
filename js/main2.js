const loginform = document.forms.namedItem("Logform");
let username="";
loginform.addEventListener(
  "submit",
  (event) => {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://pristine-dahlia-377509.ey.r.appspot.com/login",
      true
    );
    request.withCredentials = true;
    request.setRequestHeader("content-type", "application/json");
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        username= data[0].FirstName;
        console.log(username);
        //window.location.assign('https://blots-site.github.io/main/Frontend/Home.html');
      }
    };
    const email = document.getElementById("loginmail").value;
    const password = document.getElementById("loginPassword").value;
    request.send(JSON.stringify({ Username: email, Password: password }));

    event.preventDefault();
  },
  false
);
