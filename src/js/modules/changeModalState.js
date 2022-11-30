const changeModalState = (state) => {

    const mount = document.querySelectorAll('.mount_icons_calc');
    const dateWith = document.querySelectorAll('#date_with');
    const dateTo = document.querySelectorAll('#date_to');
    const level = document.querySelectorAll('.form_level');
    const kids = document.querySelectorAll('.checkbox');

    function bindActionToElems (event, elem, prop){ //функция которая собриает информацию из модульных окон и записывает это в объект state
        elem.forEach((item, i) => {
            item.addEventListener(event, () =>{
                switch(item.nodeName){
                    case 'DIV' :
                        state[prop] = i;
                    break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'date'){
                            state[prop] = item.value;
                        } else {
                            i === 0 ? state[prop] = 'Без детей' : state[prop] = 'С детьми';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            })
                        }
                    break;
                    case 'SELECT' :
                        state[prop] = item.value;
                    break;
                }
                console.log(state);
            })
        }
        
    )}

    bindActionToElems('click', mount, 'mount')
    bindActionToElems('input', dateWith, 'dateWith')
    bindActionToElems('input', dateTo, 'dateTo')
    bindActionToElems('change', level, 'level')
    bindActionToElems('change', kids, 'kids')

}

export default changeModalState;