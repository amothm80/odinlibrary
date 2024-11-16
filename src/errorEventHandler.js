// function showError(text){

// }


export function errorEventHandler(){
    const dialog = document.querySelector('#add-book-dialog');
    dialog.addEventListener('submit',(e)=>{
        const input = document.getElementById('booktitle')
        switch(e.target.id){
            case('add-book-form'):
                if(input.validity.valueMissing){
                    input.setCustomValidity("title missing")
                }
                break;
        }
    })
}