let buttons=document.querySelectorAll('.button');
let defaultStyle;
console.log('hello')
let fact=false
function ChangeStyle(pro){
    if(fact)
    {
     defaultStyle.style.backgroundColor="hsl(210, 9%, 23%) "
     defaultStyle.style.color="hsl(216, 12%, 54%)"
    }
    pro.style.backgroundColor="hsl(25, 97%, 53%)"
    pro.style.color="white"
    defaultStyle=pro;
    fact=true
    console.log(defaultStyle)
}







function displayThanks(value){
document.querySelector('.submit').addEventListener('click',(e)=>{
document.querySelector('.rating-state').
style.display="none"
document.querySelector('.thank-you').
style.display="flex"
document.querySelector('.selected').innerText=value
})
}
buttons.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
ChangeStyle(e.target)
    displayThanks(e.target.innerText)
})

})

