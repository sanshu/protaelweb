function initFileDND(id, callback) {
    function handleFileSelect(evt) {
        if (evt.originalEvent.dataTransfer) {
            if (evt.originalEvent.dataTransfer.files.length) {
                evt.stopPropagation();
                evt.preventDefault();
                var files = evt.originalEvent.dataTransfer.files ||evt.target.files ; // FileList object.
                callback(files);
            }
        }
    }

    function handleDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.originalEvent.dataTransfer) {
            evt.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }
        dropZone.className = (evt.type == "dragover" ? "hover" : "");
    }

    //  // Setup the dnd listeners.
    var dropZone = $(id);
    dropZone.on('dragover', handleDragOver);
    dropZone.on('drop', handleFileSelect);
}
;