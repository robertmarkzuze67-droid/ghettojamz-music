



const searchMusic = () =>{
    const searchbox = document.getElementById("search-music").value.toUpperCase();
    const product = document.querySelectorAll(".musicitem")
    const pname = document.getElementsByTagName("div")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('div')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
    
}








function openSideMenu(){
const sidemenu = document.querySelector('.sidemenu')
sidemenu.style.display = 'block'
};

function closeSideMenu(){
const sidemenu = document.querySelector('.sidemenu')
sidemenu.style.display = 'none'
};



function openLogInForm(){
    const sidemenu = document.querySelector('.login-form')
    sidemenu.style.display = 'block'
    
    };
        
function closeLogInForm(){
    const sidemenu = document.querySelector('.login-form')
    sidemenu.style.display = 'none'
    };











const search = () =>{
    const searchbox = document.getElementById("search-music").value.toUpperCase();
    const storeitems = document.getElementById("main-content")
    const product = document.querySelectorAll(".musicitem")
    const pname = document.getElementsByTagName("a")
    
    for(var i=0; i < pname.length; i++){
        let match = musicitem[i].getElementsByTagName('a')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toLocaleUpperCase().indexOf(searchbox) > -1) {
                musicitem[i].style.display = "block";
            } else {
                musicitem[i].style.display = "none";
            }
        }
    }
};





