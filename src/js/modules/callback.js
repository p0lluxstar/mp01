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

    bindModal('.btn_header', '.popup', '.popup_close');
    bindModal('.link_feedback', '.popup', '.popup_close');

};

export default callback;