const animationStat = function() {

      const circles = document.querySelectorAll('.skills__stat-round svg .circle-percent');
     
    const circlesStrokeValues = [];  
    circles.forEach((circle, i) => {
        circlesStrokeValues[i] = circle.getAttribute('stroke');
        circle.setAttribute('stroke', circle.nextElementSibling.getAttribute('stroke'));
            
            circle.setAttribute('stroke', circlesStrokeValues[i]);
    });
    
}

export default animationStat;