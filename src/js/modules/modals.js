const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true ){

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); // переменаня нужна что бы получить все модальные окна со страницы, это нужно будет что бы можно было закрыть все модальные окна при нажатии на подложку


        trigger.forEach(item =>{ 
            item.addEventListener('click', function(e){
                if (e.target){ // отменяет перезагрузку страницы при клике на ссылку
                    e.preventDefault();
                }

                windows.forEach(item =>{
                    item.style.display = 'none';
                })

                modal.style.display = 'block';
                document.querySelector('.data_forms').style.display = 'block';
                document.body.classList.add('modal-open');
                /* document.body.style.overflow = 'hidden'; */
            });
        })

        close.addEventListener('click', function(){ // функция закрывает модальное окно при нажатии на крестик
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            /* document.body.style.overflow = ''; */
        })

        modal.addEventListener('click', function(e){
            if (e.target === modal && closeClickOverlay){
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');

                windows.forEach(item =>{
                    item.style.display = 'none';
                })
                /* document.body.style.overflow = ''; */
            }
        })
    }

    function showModalByTime(selector, time){ // фунция автоматического появления формы через заданное время
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
        }, time);

    }

    bindModal('.btn_header', '.popup_callback', '.popup_close');
    bindModal('.link_feedback', '.popup_callspec', '.popup_close_callspec');
    bindModal('.btn_calc', '.popup_calc_step1', '.popup_close_calc');
    bindModal('.popup_calc_button', '.popup_calc_step2', '.popup_close_calc_step2', false);
    bindModal('.popup_calc_button_step2', '.popup_calc_step3', '.popup_close_calc_step3', false);

    /* showModalByTime('.popup', 2000); */
    

};

export default modals;