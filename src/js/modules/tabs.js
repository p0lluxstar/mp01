const tabs = (allBtnSelector, cityBtnSelector, citySelector, activeSelector) => {
    
    const allBtn = document.querySelector(allBtnSelector);
    const cityBtn = document.querySelectorAll(cityBtnSelector);
    const city = document.querySelectorAll(citySelector);
    const active = document.querySelector(activeSelector);

    function hideCity (){ // убирает по умолчанию все города
        city.forEach((item) => { 
            item.style.display = 'none';
        });
    }

    function showTabContent (i = 0){ //покаывает по умолчанию первый город
        city[i].style.display = 'block';
        allBtn.childNodes[i + 1].classList.add(activeSelector);
    }

    function delClass(){ // удаляет в элементе класс переданный в activeSelector
        cityBtn.forEach(item => {
            item.classList.remove(activeSelector);
        });
    }

    function showCity(btnSelector){ //показывает описание выбранного города 
        btnSelector.forEach((item, i) =>{ 
            item.addEventListener('click', function(){
                if (i < allBtn.childElementCount){
                    hideCity ();
                    delClass();
                    city[i].style.display = 'block';
                    allBtn.children[i].classList.add(activeSelector);
                };
            });
        });
    };
    
   

    hideCity();
    showTabContent();
    showCity(cityBtn);
};

export default tabs;