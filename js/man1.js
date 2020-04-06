$( function() {
    $( '.figure' ).draggable({ revert: "invalid" });
    $( "#orange_elephant" ).droppable({
        accept: '.tron',
        classes: {
            "ui-droppable-active": "ui-state-highlight",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            // jQuery("#voi______sai").css('display','block');
            addtron(ui.draggable);
        }
    });

    $( "#blue_elephant" ).droppable({
        accept: '.vuong',
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
           addvuong(ui.draggable);
            jQuery(this)
                .addClass(ui-state-highlight)
                .find('#mouth').css('display','block');
        }
    });
    var mangA=[[1028,490],[950,522],[1000,400],[960,450]];
    var count=0
    function addtron($item){

        $item.animate({
            left: mangA[count][0],
            top: mangA[count][1]
        },2000);
        count++;
        if(count>=4) count=0;

    }
    var mangB=[[394,490],[293,522],[367,400],[274,450]];
    var countB=0
    function addvuong($item){
        $item.animate({
            left: mangB[countB][0],
            top: mangB[countB][1]
        },2000);
        countB++;
        if(count>=4) countB=0;

    }
    jQuery('body').click(function (e) {
        console.log(e.pageX);
        console.log(e.pageY);
    })

} );

