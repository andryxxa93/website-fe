import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function() {
    'use strict'

    tabs('.tab__nav', '.tab__nav-item', '.tab__content', 'tab__nav-item_active');
});

