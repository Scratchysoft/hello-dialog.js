(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext._getStatus = function() {
        return {status: 0, msg: 'Not ready'};
    };
    
    ext._getStatus = function() {
        return {status: 1, msg: 'Not quite ready'};
    };

    ext.HelloWorld = function() {
        // Code that gets executed when the block is run
        alert("HelloWorld");
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['Diolouge ', 'HelloWorld', 'HelloWorld'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Ben', descriptor, ext);
})({});
