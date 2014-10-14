function initFileDND(id) {
          function handleFileSelect(evt) {
              evt.stopPropagation();
              evt.preventDefault();
              var files = evt.target.files || evt.dataTransfer.files; // FileList object.
              $(id).value(files[0].name);
          }

          function handleDragOver(evt) {
              evt.stopPropagation();
              evt.preventDefault();
              evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
              evt.target.className = (evt.type == "dragover" ? "hover" : "");
          }

          //  // Setup the dnd listeners.
          var dropZone = $(id);
          dropZone.on('dragover', handleDragOver, false);
          dropZone.on('drop', handleFileSelect, false);
      };