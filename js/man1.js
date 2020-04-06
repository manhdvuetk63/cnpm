$( function() {
    $( '.figure' ).draggable({ revert: "invalid" });
    $( "#orange_elephant" ).droppable({
        accept: ' .tron',
        classes: {
            "ui-droppable-active": "ui-state-highlight",
            "ui-droppable-hover": "ui-state-hover"
        }


    });

    $( "#blue_elephant" ).droppable({
        accept: ' .vuong',
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        }
    });
} );

