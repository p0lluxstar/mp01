import './slider';
import callback from "./modules/callback";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => { //этот обработчик отвечает за то, что скрипты начинают выполнятся когда DOM дерево будет готова
  /*  'use strict'; */
    callback();
    tabs( '.all_tabs', '.city_btn_tabs', '.city', 'active');
    forms();
});