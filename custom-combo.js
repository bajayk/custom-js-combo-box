class CustomCombo{

    constructor(id){
        this.element = document.getElementById(id);
        this.options_container = this.element.getElementsByClassName("options")[0];
        this.option_doms = this.element.getElementsByClassName("option");
        this.selected_option = this.element.getElementsByClassName("selected-option")[0];
        this.selected_option.innerHTML = this.option_doms[0].innerHTML;
        this.init();
    }

    init(){
        this.options_container.style.display = "none";
        this.selected_option.addEventListener("click", this.on_click.bind(this)); 
        document.addEventListener("click" , this.closecombo.bind(this));       

        for(var i=0; i<this.option_doms.length; i++){
            this.option_doms[i].addEventListener("click", this.on_select_option.bind(this));
        }
    }

    on_click(e){
        e.stopPropagation();
        if(this.options_container.style.display == "none"){
            this.options_container.style.display = "block";   
        }else{
            this.options_container.style.display = "none";
        }    
    }

    closecombo(e){
        this.options_container.style.display = "none";
    }
    
    on_select_option(e){
        for(var i=0; i<this.option_doms.length; i++){
            this.option_doms[i].classList.remove("active");
        }
        var option = e.target;
        option.classList.add("active");
        this.selected_option.innerHTML = option.innerHTML;
    }
}