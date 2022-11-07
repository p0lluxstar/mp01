const callback = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector){

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach(item =>{
            item.addEventListener('click', function(e){
                if (e.target){ // отменяет перезагрузку страницы при клике на ссылку
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                /* document.body.style.overflow = 'hidden'; */
            });
        })

        close.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            /* document.body.style.overflow = ''; */
        })

        modal.addEventListener('click', function(e){
            if (e.target === modal){
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
                /* document.body.style.overflow = ''; */
            }
        })
    }

    function checkInputValue(boxesInput, selectorBtn){ // функция которая проверяет все поля формы на заполняемость
        const valueInput = document.querySelectorAll(boxesInput);
        const btnInput = document.querySelector(selectorBtn);

        btnInput.addEventListener('click', function(e){
            if(e.target){
                e.preventDefault();
            }

            for(let i = 0; i < valueInput.length; i++){
                if(valueInput[i].value == ''){
                    valueInput[i].classList.add('error');
                } else {
                    valueInput[i].classList.remove('error');
                }
            } 

        })
    };

    function showModalByTime(selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
        }, time);

    }

    

    bindModal('.btn_header', '.popup', '.popup_close');
    bindModal('.link_feedback', '.popup', '.popup_close');
    /* showModalByTime('.popup', 2000); */
    checkInputValue('.form_input', '.form_button')

};

export default callback;