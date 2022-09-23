let root = document.getElementById("root");
let data = fetch("https://api.github.com/users").then(data=>{
    data.json().then(
        ex_data=>{
            // console.log(ex_data);
            for (value of ex_data){
                console.log(value.login);
                console.log(value.avatar_url);

                root.innerHTML+=`
                <div class = "card">
                    <img src = ${value.avatar_url} alt = ${value.login}>
                    <div class = "info">
                        <h2 class = "name"> ${value.login}</h2>
                        <a href = ${value.html_url} target = "_blank">Profile</a>
                    </div>
                </div>
                `
            }
        }
    ).catch(err=>console.log(err))
}).catch(err=>console.log(err))