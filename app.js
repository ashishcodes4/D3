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



// for events in D3 testing .....

d3.select('#new-note').on('submit', function() {
    //we can access the event obejct by calling a special D3 method.
    d3.event.preventDefault();

    var input = d3.select('input');
    d3.select('#notes')
        .append('p')
        .classed('note', true)
        .text(input.property('value'))
    input.property('value', '')

});
