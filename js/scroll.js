export default function scrolls(){
    const alvo = Array.from(document.querySelectorAll(".section-article article"))

    function showArticle(){
        alvo.forEach(article => {
            if(article.getBoundingClientRect().top < innerHeight / 1.8){
                article.classList.add("show")
            }
            console.log("oi")
        })

        if(Array.from(document.querySelectorAll(".show")).length === alvo.length){
            window.removeEventListener("scroll", showArticle)
        }
    }

    window.addEventListener("scroll", showArticle)
}