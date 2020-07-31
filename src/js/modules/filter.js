const filter = function(menuSelector, wrapperSelector, itemSelector, buttonSelector) {

    const menu = document.querySelector(menuSelector),
        menuItems = menu.querySelectorAll('li'),
        wrapper = document.querySelector(wrapperSelector),
        items = wrapper.querySelectorAll(itemSelector),
        button = document.querySelector(buttonSelector);

        menuItems.forEach(el => {
            el.addEventListener('click', () => {
                menuItems.forEach(item => item.classList.remove('active'));
                el.classList.add('active');
                items.forEach(item => {
                    item.style.display = 'none';
                    if(item.classList.item(2) == el.classList.item(0) || item.classList.item(1) == el.classList.item(0)) {
                        item.style.display = 'block';
                    }
                });
            });
        });

        button.addEventListener('click', (e) => {
            items.forEach(item => item.classList.remove('d-none'));
            e.target.remove();
        });
        

}

export default filter;