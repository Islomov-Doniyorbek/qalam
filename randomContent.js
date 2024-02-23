function randomText() {
    let texts = [
        "Abu Hurayra raziyallohu anhu rivoyat qiladilar: \"Rasululloh sallallohu alayhi vasallam: \"Birortangiz (nafl yoki farz) namozi o'qiyotgan bo'lsangiz, shayton kelib fikringizni chalg'ita boshlaydi, hatto necha rak'at o'qiganingizni bilmay qolarsiz. Agar shunday ahvolga tushgaydirsiz, o'tirgan holda sahv uchun ikki marta sajda qiling!\"-deb aytganlar\". <br><br> <i>Al-Jome As-Sahih, Namozda qilinadigan harakatlar kitobi, 25-bob",
        "Rasululloh sallallohu alayhi vasallam: \"Kimki (nima bo'lsa ham) juft sadaqa qilgan bo'lsa, jannat darvozasidan (\"Ey falonchi!\"  deb) chaqiriladi\" - deb aytganlar. Janob Rasulullohning shunday deganlari haqida Uboda raziyallohu anhu rivoyat qilganlar. <br><br> <i> Al-Jome As-Sahih, Dastlabki yaratish haqida kitob, 8-bob",
        "Hasan Basriy aytib berganlar: \"Sahobalar sajdaga bosh qo'yadirgan joyning nihoyatda issiqlig'idan qo'llarini kiyimlarining yengidan chiqarmay, salla va qalansuvalarini oldilariga qo'yib ustiga sajda qilar edilar\". <br><br> <i>Al-Jome As-Sahih, Salot kitobi, 23-bob",
        "Bas eslatgin, albatta sen eslatuvchidirsan. <br> G'oshiya surasi 21-oyat",
        "Rasululloh sollallohu alayhi vasallam: \"Tahorati singan kishining, tahorat olmaguncha namozi qabul qilinmaydi\",-dedilar. Hazramavtlik bir kishi dedi: \"Ey Abu Hurayra, tahorat sinish degani, nima degani?\" Abu Hurayra: \"Ovozsiz yoki ovozli yel\",-dedilar. <br><br> <i>Al-Jome As-Sahih, Tahorat kitobi,2-bob</i>",
        "Anas raziyallohu anhu naql qiladilar: \"Rasululloh sallallohu alayhi vasallam bir necha xurmo yeb olmasdan hayit namoziga chiqmas edilar\".<br><br> <i>Al-Jome As-Sahih, Ikki Hayit kitobi,4-bob</i>",
        "Abu Barza raziyallohu anhu: \"Rasululloh sallallohu alayhi vasallam xuftondan oldin uxlamakni va xuftondan keyin so'zlashib o'ltirmakni makruh der edilar\", - deydilar. <br> <br> <i> Al-Jome As-Sahih, Namoz vaqtlari haqida kitob, 22-bob",
        "Abu Ma'sud raziyallohu anhu rivoyat qiladilar: \"Abu Shu'ayb ansoriy o'zining qassob g'ulomi qoshiga kelib, \"Besh kishilik ovqat tayyorla! Men Janob Rasulullohni chaqirmoqchiman, chunki u zotning yuzlarida ochlik alomatini ko'rdim\"-dedi. Keyin, u Janob Rasululloh boshliq besh kishini mehmonga taklif etdi. Lekin ularga yana bir kishi ergashib keldi. Shunda Janob Rasululloh Abu Shu'aybga: \"Bu odam biz bilan (ergashib) kelaverdi. Ruxsat bersang, uyingga kiradi, yo'q desang, qaytib ketadi\",-dedilar. Uy egasi:\"Mayli, kiraversin!\"-dedi.",
        ""
    ]
    let section = document.querySelector(".section")
    let number = Math.floor(Math.random() * texts.length)
    section.innerHTML = texts[number]
}
randomText()