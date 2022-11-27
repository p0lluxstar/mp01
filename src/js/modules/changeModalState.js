const changeModalState = (state) => {

    const mount = document.querySelectorAll('.mount_icons_calc');
    const dateWith = document.querySelectorAll('#date_with');
    const dateTo = document.querySelectorAll('#date_to');
    const level = document.querySelectorAll('.form_level');
    const kids = document.querySelectorAll('.checkbox');

    function bindActionToElems (event, elem, prop){ //функция которая собриает информацию из модульных окон и записывает это в объект state
        elem.forEach((item, i) => {
            item.addEventListener(event, () =>{
                if (elem.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value
                }
                console.log(state)
            })
        }
    )}

    bindActionToElems('click', mount, 'from')
    bindActionToElems('input', dateWith, 'dateWith')
    bindActionToElems('input', dateTo, 'dateTo')

}

export default changeModalState;