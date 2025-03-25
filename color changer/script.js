const bg_changer = document.querySelector("#bg")
const body = document.querySelector("body")
const code = document.querySelector("#code")
const copy_btn = document.querySelector("#copy_btn")


bg.addEventListener("click",() =>{
    changebackgroundcolor();
});

copy_btn.addEventListener("click", () => {
    navigator.clipboard.writeText(code.innerHTML).then(() => {
        alert("Copied: " + code.innerHTML);
    });
});
 

function changebackgroundcolor(){

    const randomnumber  = Math.floor(Math.random() * (256) * (256) * (256))
    const randomcolor = "#" + randomnumber.toString(16);
    console.log(randomcolor);
    body.style.backgroundColor = randomcolor;
    code.innerHTML = randomcolor ;
}