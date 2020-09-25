
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

// Invoked by the "Encode" command
nova.commands.register("url.encode", (editor) => {
    // Replaces the selected text with Base-64-encoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = encodeURIComponent(text)
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

// Invoked by the "Decode" command
nova.commands.register("url.decode", (editor) => {
    // Replaces the selected text with Base-64-decoded text
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
        for (var range of selectedRanges) {
            var text = editor.getTextInRange(range);
            var newText = decodeURIComponent(text)
            e.delete(range);
            e.insert(range.start, newText);
        }
    });
});

