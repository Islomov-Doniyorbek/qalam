function userConnectMeTgBot() {
    let form = document.querySelector("form")

    let bot = {
        TOKEN: "7051132521:AAF_mDQuFa3XNS1P_FKwaRycZGvJSrM7dIk",
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();

        let msg = document.querySelector("#msg");
        let username = document.querySelector("#ism");
        let email = document.querySelector("#email");
        let information = `Ism: ${username.value}<br> \n Email: ${email.value}<br>\n Xabar: ${msg.value}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
            .then(success => {
            alert("Xabar yuborildi! \nElektron pochtangizga izoh qoldiriladi, salomat bo'ling!")
            }, error => {
                alert("Xabar yuborilmadi!")
                console.log(error);
            })
    
    
        

    })
}

userConnectMeTgBot()
