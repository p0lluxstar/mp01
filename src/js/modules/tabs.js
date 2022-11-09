const tabs = (allSelector, boxSelector, contentSelector, activeSelector) => {
    
    const all = document.querySelector(allSelector);
    const box = document.querySelectorAll(boxSelector);
    const content = document.querySelectorAll(contentSelector);


    function hideTabContent (){
        content.forEach(item => {
            item.style.display = none;
        })
    }

    function showTabContent (i){
        console.log(content[i])
    }


    hideTabContent();
    showTabContent(0);
};

export default tabs;