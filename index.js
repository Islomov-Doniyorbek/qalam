function asideLeft() {
    let menu = document.querySelector("#menu")
    let aside = document.querySelector(".aside")
    let close = document.querySelector("#close")
    menu.addEventListener("click", function () {
        aside.classList.toggle("left-to-rigth")
    })
    close.addEventListener("click", function () {
        aside.classList.remove("left-to-rigth")
    })
}
asideLeft()
function configuration() {
    let config = document.querySelector("#config")
    let closeConfig = document.querySelector("#closeConfig")
    let configuration = document.querySelector(".configuration")
    config.addEventListener("click", function () {
        configuration.classList.toggle("ninetyDegree")
    })
    closeConfig.addEventListener("click", function () {
        configuration.classList.remove("ninetyDegree")
    })
}
configuration()
function rejim() {
    let bgDarkElements = document.querySelectorAll(".bg-dark")
    let txtElements = document.querySelectorAll(".txt")
    let sun = document.querySelector("#sun")
    let moon = document.querySelector("#moon")

    moon.addEventListener("click", function () {
        // txtElements.forEach(e => {
        //     e.classList.toggle("moon")
        // })
        bgDarkElements.forEach(e => {
            e.classList.toggle("moon")
        })
    })
    sun.addEventListener("click", function () {
        // txtElements.forEach(e => {
        //     e.classList.remove("moon")
        // })
        bgDarkElements.forEach(e => {
            e.classList.remove("moon")
        })
    })
}
rejim()
function rivoyat() {
    let section = document.querySelector(".section")
    let div = document.createElement("div")
    let rAsideLiElements = document.querySelectorAll(".aside2 li")
    rAsideLiElements.forEach((e, i) => {
        e.addEventListener("click", function () {
            let nom = e.innerText;
            if (section.innerHTML == "") {
                div.innerHTML = rivoyatTheme[i]
                section.appendChild(div)
            } else {
                let sectionChild = document.querySelectorAll(".section div")
                for (let j = 0; j < sectionChild.length; j++) {
                    section.innerHTML = ""
                }
                div.innerHTML = rivoyatTheme[i] + `<form method="post">
                <div class="fluid">
                    <label for="name">
                        Ism:
                    </label>
                    <br>
                    <input required type="text" placeholder="ism" id="ism1">                    
                </div>
                <div class="fluid">
                    <label for="msg1">
                        Xabar:
                    </label>
                    <br>
                    <textarea required name="msg" id="msg1" cols="20" rows="3" placeholder="Izoh qoldiring..."></textarea> 
                    <button id="btn" type="submit"><i class="fa fa-send"></i></button> 
                </div>
            </form>`
                section.appendChild(div)
            }
            let form = document.querySelector("form")

    let bot = {
        TOKEN: "7051132521:AAF_mDQuFa3XNS1P_FKwaRycZGvJSrM7dIk",
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();

        let msg = document.querySelector("#msg1");
        let username = document.querySelector("#ism1");
        let information = `Kim tomonidan: ${username.value} \n ${nom} uchun izoh!\n "${msg.value}"`

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
        })
    })

}
function tarix() {
    let section = document.querySelector(".section")
    let div = document.createElement("div")
    let rAsideLiElements = document.querySelectorAll(".aside2 li")
    rAsideLiElements.forEach((e, i) => {
        e.addEventListener("click", function () {
            if (section.innerHTML == "") {
                div.innerHTML = tarixTheme[i]
                section.appendChild(div)
            } else {
                let sectionChild = document.querySelectorAll(".section div")
                // let rAsideLiElements = document.querySelectorAll(".aside2 li")
                for (let j = 0; j < sectionChild.length; j++) {
                    section.innerHTML = ""
                }
                div.innerHTML = tarixTheme[i]
                section.appendChild(div)
            }
        })
    })

}
function asideRight() {
    let asdR = document.querySelector(".aside2")
    let close2 = document.querySelector("#close2")
    let open = document.querySelector("#open")
    // menu.addEventListener("click", function () {
    //     asdR.classList.toggle("left-to-rigth")
    // })
    close2.addEventListener("click", function () {
        asdR.classList.remove("rigth-to-left")
    })
    let Llist = document.querySelector(".aside2 .list")
    let asidelistElements = document.querySelectorAll(".aside p")
    let rivoyatlar = ["Qatiqchi haqida rivoyat", "Ikki Sulaymon va Uch gavhar", "Taqdir haqida", "Temirchi","Bedana rivoyati", "Boy va kambag'al qo'shni", "Ikki do'st va yetti farzand","Shayton qochgan inson", "Cho'pon yutib ketdi","Bemor podshoh"]


    let tarixlar = ["Odamato qissasi I","Odamato qissasi II", "Idris alayhissalom","Nuh alayhissalom","Hud alayhissalom","Solih alayhissalom", "Ibrohim alayhissalom", "Lut alayhissalom", "Ismoil alayhissalom", "Isxoq alayhissalom", "Yaqub alayhissalom", "Yusuf alayhissalom", "Shuayb alayhissalom", "Muso alayhissalom", "Xorun alayhissalom", "Yunus alayhissalom", "Dovud alayhissalom", "Sulaymon alayhissalom", "Ilyos alayhissalom", "Al Yasa alayhissalom", "Zakariyo alayhissalom", "Iso alayhissalom", "Muhammad alayhissalom"]
    let manbalar = ["Fikr"]
    let lists = [rivoyatlar, tarixlar, manbalar]
    let aside = document.querySelector(".aside")
    asidelistElements.forEach((e, i) => {
        e.addEventListener("click", function () {
            open.style.display = "block";
            asdR.classList.toggle("rigth-to-left")
            if (Llist.innerHTML == "") {
                aside.classList.remove("left-to-rigth")
                for (let j = 0; j < lists[i].length; j++) {
                    let li = document.createElement("li")
                    li.textContent = lists[i][j];
                    Llist.appendChild(li)
                }
            } else {
                let rAsideLiElements = document.querySelectorAll(".aside2 li")
                for (let j = 0; j < rAsideLiElements.length; j++) {
                    Llist.removeChild(rAsideLiElements[j])
                }
                aside.classList.remove("left-to-rigth")
                for (let j = 0; j < lists[i].length; j++) {
                    let li = document.createElement("li")
                    li.textContent = lists[i][j];
                    Llist.appendChild(li)
                }
            }

            if (e == asidelistElements[0]) {
                rivoyat()
            } else if (e == asidelistElements[1]) {
                tarix()
            }
        })

    })
    open.onclick = () => {
        asdR.classList.toggle("rigth-to-left")
    }
}
asideRight()
function share() {
    let shareIcon = document.querySelector("#share");
    shareIcon.addEventListener("click", function () {
        navigator.clipboard.writeText("https://qalamuz.netlify.app").then(function () {
            alert("Havola nusxalandi! https://qalamuz.netlify.app")
        }).catch(function (error) {
            alert("Xatolik yuz berdi!")
        })
    })
}
share()


function contact() {
    location.href = "./contact/contact.html"
}

function comment() {
    let form = document.querySelector("form")

    let bot = {
        TOKEN: "7051132521:AAF_mDQuFa3XNS1P_FKwaRycZGvJSrM7dIk",
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();

        let msg = document.querySelector("#msg1");
        let username = document.querySelector("#ism1");
        let information = `Ism: ${username.value} \n Xabar: ${msg.value}`

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