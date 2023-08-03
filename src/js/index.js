const container= document.querySelector(".container")
const labelError=document.querySelector(".label-error")
const inputEmail=document.querySelector(".email")
const btnSubscribe=document.querySelector(".btn-subscribe")
const thanks=document.querySelector(".thanks")

btnSubscribe.addEventListener("click", (e)=>{
    e.preventDefault()
    validEmail()
    
   
    })

  
function validEmail(){
    if(inputEmail.value){
        container.style.display="none"
        thanks.style.display="block"
    }else{
        inputEmail.classList.add("error")
        labelError.style.display="block"
    }
}
