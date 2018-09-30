class CustomCombo{

    constructor(id){
        // Get the combobox element
        this.element = document.getElementById(id);

        // Get the options parent element
        this.options_container = this.element.getElementsByClassName("options")[0];

        // Get the all options in array
        this.option_doms = this.element.getElementsByClassName("option");

        // Get the element to show selected option
        this.selected_option = this.element.getElementsByClassName("selected-option")[0];

        // Show first option selected default.
        this.selected_option.innerHTML = this.option_doms[0].innerHTML;

        // Initialize component
        this.init();
    }

    init(){
        // Set options container hidden by default
        this.options_container.style.display = "none";

        // Add click event to selected option element to hide show the options
        this.selected_option.addEventListener("click", this.on_click.bind(this));
        
        // Add click event to document to hide options list when click outside of the combobox
        document.addEventListener("click" , this.closecombo.bind(this));       

        // Add click event to all options to pick that option.
        for(var i=0; i<this.option_doms.length; i++){
            this.option_doms[i].addEventListener("click", this.on_select_option.bind(this));
        }
    }

    // Click handler to show hide options list
    on_click(e){
        e.stopPropagation();
        if(this.options_container.style.display == "none"){
            this.options_container.style.display = "block";   
        }else{
            this.options_container.style.display = "none";
        }    
    }

    // Click handler to hide options list while click outside of the combobox
    closecombo(e){
        this.options_container.style.display = "none";
    }
    
    // Select handler to pick the option and set it as current selected option
    on_select_option(e){
        for(var i=0; i<this.option_doms.length; i++){
            this.option_doms[i].classList.remove("active");
        }
        var option = e.target;
        option.classList.add("active");
        this.selected_option.innerHTML = option.innerHTML;
    }
}