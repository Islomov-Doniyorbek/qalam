function randomText() {
    let texts = [
        "Abu Hurayra raziyallohu anhu rivoyat qiladilar: \"Rasululloh sallallohu alayhi vasallam: \"Birortangiz (nafl yoki farz) namozi o'qiyotgan bo'lsangiz, shayton kelib fikringizni chalg'ita boshlaydi, hatto necha rak'at o'qiganingizni bilmay qolarsiz. Agar shunday ahvolga tushgaydirsiz, o'tirgan holda sahv uchun ikki marta sajda qiling!\"-deb aytganlar\". <br> <i>Al-Jome As-Sahih, Namozda qilinadigan harakatlar kitobi, 25",
        "Rasululloh sallallohu alayhi vasallam: \"Kimki (nima bo'lsa ham) juft sadaqa qilgan bo'lsa, jannat darvozasidan (\"Ey falonchi!\"  deb) chaqiriladi\" - deb aytganlar. Janob Rasulullohning shunday deganlari haqida Uboda raziyallohu anhu rivoyat qilganlar. <br> <i> Al-Jome As-Sahih, Dastlabki yaratish haqida kitob, 8",
        "Hasan Basriy aytib berganlar: \"Sahobalar sajdaga bosh qo'yadirgan joyning nihoyatda issiqlig'idan qo'llarini kiyimlarining yengidan chiqarmay, salla va qalansuvalarini oldilariga qo'yib ustiga sajda qilar edilar\". <br> <i>Al-Jome As-Sahih, Salot kitobi, 23",
        "Bas eslatgin, albatta sen eslatuvchidirsan. <br> G'oshiya surasi 21-oyat",
        "Rasululloh sollallohu alayhi vasallam: \"Tahorati singan kishining, tahorat olmaguncha namozi qabul qilinmaydi\",-dedilar. Hazramavtlik bir kishi dedi: \"Ey Abu Hurayra, tahorat sinish degani, nima degani?\" Abu Hurayra: \"Ovozsiz yoki ovozli yel\",-dedilar. <br> <i>Al-Jome As-Sahih, Tahorat kitobi,2</i>",
        "Anas raziyallohu anhu naql qiladilar: \"Rasululloh sallallohu alayhi vasallam bir necha xurmo yeb olmasdan hayit namoziga chiqmas edilar\".<br> <i>Al-Jome As-Sahih, Ikki Hayit kitobi,4</i>",
        ""
    ]
    let section = document.querySelector(".section")
    let number = Math.floor(Math.random() * texts.length)
    section.innerHTML = texts[number]
}
randomText()