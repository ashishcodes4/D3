console.log('form the js file');

d3.selectAll('li')
    .style('font-size', function() {
        return Math.random() * 50 +'px';
    })
    .style('background-color', function(_, idx) {
        return idx % 2 === 0 ? '#00feab' : '#00efab';
    });

d3.selectAll('li')
    .style('margin-bottom', '.1em') ;

