const tabs = (headerSelector,tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        // Hide all content and remove active class from tabs
        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
        }
        // show tab content which coresponds to recievd number
        function showTabContent(i = 0) { 
            tabs[i].classList.add(activeClass);
            content[i].style.display = 'block';
        }
        hideTabContent();
        showTabContent();


        // add event listener to tabs, and show content after click
        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                hideTabContent();
                showTabContent(i);
            });
        });

} 

export default tabs;