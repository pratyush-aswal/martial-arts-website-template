function toggle() {
    var element = document.getElementById("nav");
    var rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    if (rect.left < 0) {
        element.classList.remove('hide');
        element.classList.add('show');
        console.log("shown");
    }
    else{
        element.classList.remove('show');
        element.classList.add('hide');
        console.log("hidden");
    }

}

var contentDiv = ['home', 'programs', 'events', 'about', 'blog', 'program_mma'];
function hideAllContentDiv(){
    for(let i=0; i<contentDiv.length; i++){
        document.getElementById(contentDiv[i]).style.display = 'none';

    }
}

function showContentDiv(e){
    hideAllContentDiv();
    document.getElementById(contentDiv[e]).style.display='block';
}

showContentDiv(0);