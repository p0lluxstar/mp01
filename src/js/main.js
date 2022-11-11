import './slider';
import callback from "./modules/callback";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => { //этот обработчик отвечает за то, что скрипты начинают выполнятся когда DOM дерево будет готова
    callback();
    tabs( '.all_tabs', '.city_btn_tabs', '.city');
});