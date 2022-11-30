const forms = (state) =>{

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const checkPhone = document.querySelectorAll('input[name="user_phone"]');
    const valueInput = document.querySelectorAll('.control_input');
    const formDataModal = document.querySelectorAll('[data-modal]');

/*  const mount = document.querySelectorAll('.mount_icons_calc');
    const disr = document.querySelectorAll('.discription_calc'); */


    checkPhone.forEach(item => { // функция проверка ввода номера телефона, если вводится не цифра то ничего не будет прописываться

        item.addEventListener('input' , () => {
            item.value = item.value.replace(/\D/, '') // метод replace() выполняет внутри строки поиск с использованием регулярного выражения (объект RegExp), или строкового значения и возвращает новую строку, в которой будут заменены найденные значения
        }) 
    })

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => { // функция для отравки запроса на сервер, url - это адреус куда будут уходить данные и data это сами данные. async говорит о том что в функции есть асинхронные операции
        document.querySelector('.status').textContent = message.loading; // Свойство textContent позволяет считывать или задавать текстовое содержимое элемента
        let res = await fetch(url, { // await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
            method: "POST",
            body: data
        });

        // С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные

        return await res.text();
    }

    const clearInputs = () => { // функция очищает инпуты после отравки
        inputs.forEach(item => {
            item.value = '';
        })
    } 

    form.forEach(item => {

        item.addEventListener('submit', (e) => { //submit означает срабатывание события при отравки формы
            e.preventDefault();

/*             let sumEmptySting = 0;

            inputs.forEach(items => { // функция считает сколько не заполненных инпутов
                if ( items.value == ''){
                   sumEmptySting ++;
                } 
            }) */

/*             if ( sumEmptySting > 0){
                for(let i = 0; i < valueInput.length; i++){ // цикл который проверяет все поля формы на заполняемость
                    if(valueInput[i].value == ''){
                        valueInput[i].classList.add('error');
                    } else {
                        valueInput[i].classList.remove('error');
                    }
                }  
            } else {
     
            } */

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key, state[key]);
                }    
                
/*                 for ( let i = 0; i < mount.length; i++){
                    if (i > 0){
                        mount[i].classList.remove('active_calc');
                        disr[i].style.display = 'none';
                    } else {
                        mount[i].classList.add('active_calc');
                        disr[i].style.display = 'block';
                    }
                } */
            }

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res)
                statusMessage.textContent = message.success;
                document.querySelector('.data_forms').style.display = 'none';
            })

            .catch(() => statusMessage.textContent = message.failure) // метод .catch() объекта Promise добавляет обработчик или обработчики, которые будут вызваны при изменении состояния объекта Promise на rejected (выполнение отклонено).
            .finally(() =>{  // метод .finally() объекта Promise добавляет обработчик, который будет вызван вне зависимости от того с каким результатом объект Promise был выполнен (rejected - выполнение отклонено, или fulfilled - успешное выполнение
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    document.querySelector('.popup_callback').style.display = 'none';
                }, 5000);
            })

        })

    })

}

export default forms;