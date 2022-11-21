const changeModalState = (state) => {

    const mount = document.querySelectorAll('.mount_icons_calc');
    const date = document.querySelector('#date_from');
    const dateTo = document.querySelector('#date_to');
    const level = document.querySelector('.form_level');
    const kids = document.querySelectorAll('.checkbox');

    mount.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state)
        })
    })

}

export default changeModalState;