const filter = function(menuSelector, wrapperSelector, itemSelector) {

    const menu = document.querySelector(menuSelector),
        menuItems = menu.querySelectorAll('li'),
        wrapper = document.querySelector(wrapperSelector),
        items = wrapper.querySelectorAll(itemSelector);

        menuItems.forEach(el => {
            el.addEventListener('click', () => {
                menuItems.forEach(item => item.classList.remove('active'));
                el.classList.add('active');
                items.forEach(item => {
                    if(item.classList.item(2) == el.classList.item(0) || item.classList.item(1) == el.classList.item(0)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

}

export default filter;