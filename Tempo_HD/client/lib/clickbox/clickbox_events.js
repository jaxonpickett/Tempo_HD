/**
 * Created by JXP1195 on 6/25/2015.
 */
//Event for close button on clickbox
Template.clickbox.events = {
    'click span#close': function () {
        //Fade clickbox out
        d3.select('#clickbox').style('pointer-events', 'none')
            .transition()
            .duration(400)
            .style('opacity',0);
        //reset html so that it doesn't repeat itself
        d3.select('#viz-container').html('');
    },
    'click span#minimize': function () {
        var clickbox = d3.select('#clickbox');

        if(clickbox.attr('class') == 'miniclickbox'){
            //Fade clickbox out
            clickbox.transition()
                .duration(400)
                .attr('class','clickbox');
            //reset html so that it doesn't repeat itself
            clickbox.html('<div id="toolbar" class="close"><span id="minimize">_ </span><span id="close">X</span></div>');//.style('pointer-events','none');
        }
        else{
            //Fade clickbox out
            clickbox.transition()
                .duration(400)
                .attr('class','miniclickbox');
            //reset html so that it doesn't repeat itself
            d3.select('#clickbox').html('<div id="toolbar" class="close"><span id="minimize">_ </span><span id="close">X</span></div>');//.style('pointer-events','none');
        }
    }
};