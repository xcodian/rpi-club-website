// used in the main page (index.html)
// sets vars and defines functions

prefix = '<span style="color: #ff5454">root@rpi-club</span> ~<span style="color: #ff5454">#</span> ';
content = 'Welcome to the Raspberry Pi Club Website!\nType "help" for command help.\n';
shname = 'sh';

// commands exclusive to the shell
commands = {
    'help': sh_showHelp,

    'clear': clearScreen,
    'cls': clearScreen,

    'credits': showCredits,

    'ls': sh_listDir,
    'dir': sh_listDir,

    'cat': sh_readFile,
    'show': sh_readFile,

    'uname': sh_uname,
}

// filesystem
filemap = {
    "secret.txt": "You found me!",
    "bruh.txt": "bruh",
}

function sh_listDir() {
    for (key in filemap) {
        content += key + "  "
    }
    content += "\n"
}

function sh_readFile() {
    if ((buffer.split(" ").length < 1)) {
        content += 'sh: file not specified\n'
    } else {
        let f = filemap[buffer.split(" ")[1]]
        if (f === undefined) {
            content += 'sh: file not found: "'+ buffer.slice(3, buffer.length).trimLeft() +'"\n'
        } else {
            content += f + "\n"
        }}
}

function sh_uname() {
    if (buffer.split(" ").length > 1 && buffer.split(" ")[1] == "-a") {
        content += "ToasterOs rpi-club 1.0.4-toast1-1 #1 PREEMPT Mon, 1 Jan 1990 00:00:00 +0000 x86_64 GNU/Wholegrain\n"
    } else {
        content += "ToasterOs\n"
    }
}

function sh_showHelp() {
    content +=
        'Command Help\n' +
        '='.repeat(50) +
        '\nhelp - shows this message' +
        '\nclear - clears the screen' +
        '\ncredits - information about this website' +
        '\nls - lists files in current directory' +
        '\ncat - reads the contents of a file' +
        '\nuname - prints information about the os, use uname -a for more info\n' +
        '='.repeat(50) + '\n';
}