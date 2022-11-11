const tabs = (allBtnSelector, cityBtnSelector, citySelector, activeSelector) => {
    
    const allBtn = document.querySelector(allBtnSelector);
    const cityBtn = document.querySelectorAll(cityBtnSelector);
    const city = document.querySelectorAll(citySelector);

    function hideCity (){
        city.forEach((item) => {
            item.style.display = 'none';
        })
    }

    function showTabContent (i = 0){
        city[i].style.display = 'block';
    }
 

    
    cityBtn.forEach((item, i) =>{
       
    })
    

    hideCity();
    showTabContent();

};

export default tabs;