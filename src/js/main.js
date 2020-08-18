import tabs from './modules/tabs';
import slider from './modules/slider';
import filter from './modules/filter';
import animationStat from './modules/animationStat';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let modalState = {}
    tabs('.tab__nav', '.tab__nav-item', '.tab__content', 'tab__nav-item_active', 'flex');
    slider('.follow');
    slider('.testimonial');
    slider('.quote', 5000);
    filter('.additional__menu', '.additional__portfolio', '.additional__block', '.additional__button');
    forms(modalState);
    // animationStat();
});




