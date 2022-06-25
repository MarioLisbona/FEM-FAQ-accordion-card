// let accordion = document.getElementsByClassName("accordion");
// let i;


// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px"
//         }
//     });
// }


let accordion = document.querySelectorAll(".accordion");
let active = null;

accordion.forEach((item, i) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    
    if(active) {
        active.style.maxHeight = null;
    }
    if(panel !== active) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      active = panel
     
    } else {
      active = null
    }

  });
});




