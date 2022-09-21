export default function Projects(data){
    this.id = data.id;
    this.link = data.link;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.img = data.img

    let _this = this

    let container = document.querySelector(".container")

    container.innerHTML += `<article class="card${_this.id} cards">
    <img class="project-cards" src="${_this.img}" alt="">
    
    <div class="project-content">
        <a href="${_this.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square square"></i><p class="link-project">Link!</p></a>
        <h2>${_this.title}</h2>
        <p>${this.subtitle}</p>
    </div>
</article>`
}