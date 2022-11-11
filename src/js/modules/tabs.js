const tabs = (allBtnSelector, cityBtnSelector, citySelector, activeSelector) => {
    
    const allBtn = document.querySelector(allBtnSelector);
    const cityBtn = document.querySelectorAll(cityBtnSelector);
    const city = document.querySelectorAll(citySelector);
    const active = document.querySelector(activeSelector);

    function hideCity (){
        city.forEach((item) => { // убирает по умолчанию все города
            item.style.display = 'none';
        })
    }

    function showTabContent (i = 0){ //покаывает по умолчанию первый город
        city[i].style.display = 'block';
    }

    function showCity(btnSelector){
        btnSelector.forEach((item, i) =>{ //показывает нужный город 
            item.addEventListener('click', function(){
                if (i < allBtn.childElementCount){
                    hideCity ();
                    city[i].style.display = 'block';
                };
            });
           
        });
    };
    

    hideCity();
    showTabContent();
    showCity(cityBtn);
};

export default tabs;