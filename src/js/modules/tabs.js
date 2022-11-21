const tabs = (allBtnSelector, mountBtnSelector, mountSelector, activeSelector) => {
    
    const allBtn = document.querySelector(allBtnSelector);
    const mountBtn = document.querySelectorAll(mountBtnSelector);
    const mount = document.querySelectorAll(mountSelector);

    function hidemount (){ // убирает по умолчанию все города
        mount.forEach((item) => { 
            item.style.display = 'none';
        });
    }

    function showTabContent (i = 0){ //покаывает по умолчанию первую гору
        mount[i].style.display = 'block';
        allBtn.childNodes[i + 1].classList.add(activeSelector);
    }

    function delClass(){ // удаляет в элементе класс переданный в activeSelector
        mountBtn.forEach(item => {
            item.classList.remove(activeSelector);
        });
    }

    function showmount(){ //показывает описание выбранной горы
        mountBtn.forEach((item, i) =>{ 
            
            item.addEventListener('click', function(){
                if (i < allBtn.childElementCount){
                    hidemount ();
                    delClass();
                    mount[i].style.display = 'block';
                    allBtn.children[i].classList.add(activeSelector);
                };
            });
        });
    };
    
    
    hidemount();
    showmount();
    showTabContent();
    
};

export default tabs;