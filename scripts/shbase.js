// shell so far
let content = '';
// shell name
let shname = '';
// what the user has typed in
let buffer = '';
// prefix before the line
let prefix = '';
// history of typed in messages
let history = [];
// current history index
let cHist = 0;
// command mappings
let commands = {}
// blocks input
let blockInput = false

// puts the content to the html element
function refresh() {
    console.log('refresh called with blocking: ' + blockInput)
    console.log('[refresh] content before: ' + content.length + ' chars')

    let after_content = '';
    if (!blockInput) {
        after_content = prefix + buffer + '_';
    }
    const shell = document.getElementById('shell');
    shell.innerHTML = content + after_content;

    console.log('[refresh] content after: ' + content.length + ' chars long')
    window.scrollTo(0, document.body.scrollHeight);
}
// manage keypresses
document.onkeydown = function (e) {
    e = e || window.event;

    if (blockInput) { return; }

    var k = e.key;
    if (k === "ArrowUp" && cHist < history.length) {
        buffer = history[cHist]
        cHist += 1
    }
    if (k === "ArrowDown" && cHist === 0) {
        buffer = ""
    } else if (k === "ArrowDown" && cHist-1 >= 0) {
        cHist -= 1
        buffer = history[cHist]
    }

    if (e.key.length === 1) {
        buffer += k;

    } else if (k === 'Enter' && buffer.length > 0) {
        // show the prefix once more
        content += prefix + buffer + '\n';

        // set current position in history to 0
        cHist = 0

        // get command from callback
        const func = commands[buffer.split(" ")[0]];
        if (func === undefined) {
            // function does not exist
            content += shname + ': command not found: "'+ buffer +'"\n'
        } else {
            // run the found function
            console.log('function started!')
            func();
            console.log('function exited!')
            history.unshift(buffer)
        }
        // clear the buffer ready for the new command
        buffer = '';
    } else if (k === 'Backspace' && buffer.length > 0) {
        // remove last char from buffer
        buffer = buffer.slice(0, buffer.length - 1)
    }
    // refresh the screen
    refresh();
};

// synchronous sleep method
function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    while (currentDate - date < ms) {
        currentDate = Date.now();
    }
}

// UNIVERSAL COMMANDS
// all other commands should be defined in webpage-specific js files
// eg. home.js for index.html
// eg. 404.js for 404.html

// shows who made this website :thatsok:
function showCredits() {
    console.log('hello');
    content +=
        'Raspberry Pi Club Website\n' +
        '='.repeat(50) +
        '\n2020 Martin Velikov & Patrick Thompson' +
        '\nSource Code: <a href="https://github.com/xxcodianxx/rpi-club-website">xxcodianxx/rpi-club-website</a>\n' +
        '='.repeat(50) + '\n';
}

// clears the screen
function clearScreen() { content = ''; }