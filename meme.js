const form = document.querySelector("form");
const inputurl = document.querySelector("#url");
const inputtop = document.querySelector("#top");
const inputbottom = document.querySelector("#bottom");
const output = document.querySelector(".output_class");
const myswitch = document.querySelector("input[type = checkbox]");
var remove_mode;

    form.addEventListener('submit',function(e){
        e.preventDefault();
        create_image();
    })
    
    output.addEventListener("click",function(e){
        if(remove_mode == true){
            if(e.target.localName == "img" ||  e.target.localName == "p"){
                remove_image(e.target.parentElement);
            }
        }
    })

    myswitch.addEventListener("click",function(e){
        if(e.target.checked == true){
            remove_mode = true;
        }else{
            remove_mode = false;
        }
    })
    
    function create_image(){
       const new_image = document.createElement("div");
       const div_for_text = document.createElement("div");
       const div_for_text_class = document.createAttribute("class");
        const image_ = document.createElement("img");
        const text_top = document.createElement("p");
        const text_top_class = document.createAttribute("class");
        const text_bottom = document.createElement("p");
        const text_bottom_class = document.createAttribute("class");

        text_top.innerText = inputtop.value;
        text_bottom.innerText = inputbottom.value;

        text_top_class.value = "topclass";
        text_bottom_class.value = "bottomclass";
        div_for_text_class.value = "textclass";

        text_top.setAttributeNode(text_top_class);
        text_bottom.setAttributeNode(text_bottom_class);
        div_for_text.setAttributeNode(div_for_text_class);

        image_.src = inputurl.value;
        appender(div_for_text,image_);
        appender(div_for_text,text_top);
        appender(div_for_text,text_bottom);
        appender(new_image,div_for_text);
        appender(output,new_image);
        inputurl.value = "";
        inputtop.value = "";
        inputbottom.value = "";

    }

    function appender(where,items){
        where.append(items);
    }

    function remove_image(classname){
        classname.parentElement.remove();
    }