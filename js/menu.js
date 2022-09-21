export default function Menu(data){
    this.nav = document.querySelector(data.container)

    this.btn = document.querySelector(data.toggleBtn)

    this.maxWidth = data.widthEnabled || false;
    
    let _open = false;

    let _this = this;

    if(_this.btn.nodeName === "BUTTON"){
        this.btn.removeAttribute("style");
    } else if(_this.btn.nodeName !== "BUTTON"){
        closeMenu();
    }
    
    if(this.maxWidth){
        window.addEventListener("resize", e => {
            if(window.innerWidth > _this.maxWidth) {
                _this.nav.removeAttribute("style")
                _open = true;
            } else if(!this.nav.getAttribute("style")){
                closeMenu()
            }
        })

        if(window.innerWidth <= _this.maxWidth){
            closeMenu();
        }
    }

    this.btn.addEventListener('click', openOrClose )

    function openOrClose(){
        if(!_open){
            openMenu();
        } else {
            closeMenu();
        }
    }
    
    function applyStyleToNav(_style){
        Object.keys(_style).forEach(stl => {
            _this.nav.style[stl] = _style[stl]
        })
    }

    function openMenu(){
        let _top = _this.nav.getBoundingClientRect().top + "px"

        let _style = {
            maxHeight: "calc(100vh - "+ _top + ") ",
            overflow: "hidden"
        }

        if(_this.btn.nodeName !== "BUTTON"){
            document.querySelector(".fa-arrow-down").style.transform = "rotate(0)"
        }

        applyStyleToNav(_style)

        _open = true;
    }

    function closeMenu(){
        let _style = {
            maxHeight: "0px",
            overflow: "hidden"
        }

        if(_this.btn.nodeName !== "BUTTON"){
            document.querySelector(".fa-arrow-down").style.transform = "rotate(178deg)"
        }

        applyStyleToNav(_style)

        _open = false;
    }

}