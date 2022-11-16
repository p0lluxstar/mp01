const forms = () =>{

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const checkPhone = document.querySelectorAll('input[name="user_phone"]');


    checkPhone.forEach(item => {

        /* const valueInput = document.querySelectorAll('.control_input');
        const btnInput = document.querySelector('.form_button'); */

        console.log(item)
        item.addEventListener('input' , () => {
            item.value = item.value.replace(/\D/, '') // метод replace() выполняет внутри строки поиск с использованием регулярного выражения (объект RegExp), или строкового значения и возвращает новую строку, в которой будут заменены найденные значения
       
/*         for(let i = 0; i < valueInput.length; i++){ // цикл который проверяет все поля формы на заполняемость
            if(valueInput[i].value == ''){
                valueInput[i].classList.add('error');
            } else {
                valueInput[i].classList.remove('error');
            }
        }  */
       
        }) 
    })

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
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

        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

           
            const formData = new FormData(item);

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res)
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