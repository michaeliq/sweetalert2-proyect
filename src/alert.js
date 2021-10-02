/* trabaja solo con npm cuando desees usar react o VTTCue, mas adelante estudiaremos eso, por el momento has uso del CDN y ubica las opciones en la página de Sweetalert */

const buttons_list = document.querySelector("#buttons_list")

document.addEventListener('DOMContentLoaded',()=>{
    
    buttons_list.addEventListener('click',(e)=>{

        if(e.target.getAttribute('id') == 'normal'){
            console.log('normal alert')
            Swal.fire({
                title:'Normal button',
                text:'This is a normal button, do not will do nothig',
                showCloseButton: true,
                showConfirmButton:false,
            })
        }else if(e.target.getAttribute('id') == 'question'){
            console.log('Ask button')
            Swal.fire({
                title:'Ask button',
                icon:'question',
                text:'This is a question alert, do you o not?',
                showDenyButton: true,
                showConfirmButton: true,
                allowOutsideClick:false,
                allowEscapeKey:false,
                allowEnterKey:false,
            })
        }
        else if(e.target.getAttribute('id') == 'allow'){
            console.log('Allow button')
            Swal.fire({
                title:'Allow alert',
                icon:'question',
                text:'This is a allow alert, do you o not?',
                showDenyButton: true,
                showConfirmButton: true,
                allowOutsideClick:false,
                allowEscapeKey:false,
                allowEnterKey:false,
                buttonsStyling: false,
                confirmButtonText:'Confirm',
                denyButtonText:'Cancel',
                customClass:{
                    confirmButton:'btn btn-success m-2',
                    denyButton:'btn btn-danger m-2'
                }
            })
        }else if(e.target.getAttribute('id') == 'inform'){
            console.log('Allow button')
            Swal.fire({
                title:'Informative alert',
                icon:'info',
                text:'This is a informative alert!',
                showConfirmButton: false,
                toast:true,
                timer:5000,
                timerProgressBar:true,
                position:'bottom-end'
            })
        }else if(e.target.getAttribute('id') == 'input'){
            console.log('Input button')
            const inputAlert = Swal.fire({
                title:'Input alert',
                icon:'info',
                html:'<label class="text-center" for=""> you should answare the question bellow <input type="text" class="form-control w-75 m-3" placeholder="Insert your fullname"></label><br><button class="btn btn-primary w-100" id="send-info">Send</button>',
                showConfirmButton: false,
                allowOutsideClick:false,
                allowEscapeKey:false,
                allowEnterKey:false,
            })

            const infoFromAlertInput = document.querySelector('#send-info')
            infoFromAlertInput.addEventListener('click',(e)=>{
                e.preventDefault()
                let valueInp = document.querySelector('.form-control').value
                inputAlert.close()  
                setTimeout(()=>{
                    Swal.fire({
                        title:'Thanks for comming',
                        toast:true,
                        text:`It is a plasure met you, ${valueInp}`,
                        timer:225000,
                        position:'top-end',
                        timerProgressBar:true,
                    })
                },1000)
            })
        }else{
            console.log('unasigned button')
        }
    })

})

