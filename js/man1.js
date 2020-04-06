$( function() {
    $( '.figure' ).draggable({ revert: "invalid" });
    $( "#orange_elephant" ).droppable({
        accept: 'svg .tron',
        classes: {
            "ui-droppable-active": "ui-state-highlight",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            addtron();ui
        }
    });

    $( "#blue_elephant" ).droppable({
        accept: 'svg .vuong',
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
    fuction addtron($item){
       
    }
} );

