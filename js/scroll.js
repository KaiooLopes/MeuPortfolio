export default function scrolls(){
    const alvo = Array.from(document.querySelectorAll(".section-article article"))
    let doc = document.body.clientHeight;
    let win = window.innerHeight;
    if(doc > win){
        window.addEventListener("scroll", showArticle)
    } else {
        alvo.forEach(article => {article.style.opacity = 1})
    }
    function showArticle(){
            alvo.forEach(article => {
                if(article.getBoundingClientRect().top < innerHeight / 1.8){
                    article.classList.add("show")
                }
            })
    
            if(Array.from(document.querySelectorAll(".show")).length === alvo.length){
                window.removeEventListener("scroll", showArticle)
            }
    }

}