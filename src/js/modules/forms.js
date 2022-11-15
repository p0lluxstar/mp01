const forms = () =>{

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        console.log(data)
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    } 

    form.forEach(item => {

        const valueInput = document.querySelectorAll('.control_input');
        const btnInput = document.querySelector('.form_button');

        item.addEventListener('submit', (e) => {
            e.preventDefault();

/*             for(let i = 0; i < valueInput.length; i++){ // цикл который проверяет все поля формы на заполняемость
                if(valueInput[i].value == ''){
                    valueInput[i].classList.add('error');
                } else {
                    valueInput[i].classList.remove('error');
                }
            }  */

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

           
            const formData = new FormData(item);

            postData('assets/server.php', formData)
            .then(res => {
                
                statusMessage.textContent = message.success;
            })

            .catch(() => statusMessage.textContent = message.failure)
            .finally(() =>{
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove()
                }, 5000);
            })

        })
    })

    
}

export default forms;