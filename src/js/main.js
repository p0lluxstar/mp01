import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => { //этот обработчик отвечает за то, что скрипты начинают выполнятся когда DOM дерево будет готова
  'use strict'; 
    modals();
    tabs( '.all_tabs_mounts', '.mount_btn_tabs', '.mount', 'active');
    tabs( '.all_tabs_mounts_calc', '.mount_icons_calc', '.discription_calc', 'active_calc');
    forms();
});