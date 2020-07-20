const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        // Hide all content and remove active class from tabs
        function hideTabContent() {
            content.forEach(item => {
                if(item.parentNode.classList.contains(tabSelector.slice(1, 4))) {
                    item.style.display = 'none';
                }
            });
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
        }
        // show tab content which coresponds to recievd number
        function showTabContent(i = 0) { 
            tabs[i].classList.add(activeClass);
            content[i].style.display = display;
        }
        hideTabContent();
        showTabContent();


        // add event listener to tabs, and show content after click
        header.addEventListener('click', (e) => {
            const target = e.target;
            if(target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tabs.forEach((item, i) => {
                    if(target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

} 

export default tabs;