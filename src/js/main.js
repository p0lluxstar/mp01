import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => { //этот обработчик отвечает за то, что скрипты начинают выполнятся когда DOM дерево будет готова
  'use strict'; 

    let modalState = {};

    modals(); //функци которая позволяет отоброжать модальные окна
    tabs( '.all_tabs_mounts', '.mount_btn_tabs', '.mount', 'active'); // функция работы табов гор
    tabs( '.all_tabs_mounts_calc', '.mount_icons_calc', '.discription_calc', 'active_calc'); // функция работы табов гор в калькуляторе
    forms(modalState);
    changeModalState(modalState);
});