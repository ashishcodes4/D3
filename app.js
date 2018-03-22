console.log('form the js file');

d3.selectAll('li')
    .style('font-size', function() {
        return Math.random() * 50 +'px';
    });