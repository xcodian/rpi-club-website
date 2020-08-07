// shell so far
content = '[ 1561.519943 ] [Hardware Error]: CPU 4: Machine Check Exception: 5 Bank 3: be00000000800400\n'+
    '[ 1561.519946 ] [Hardware Error]: RIP !INEXACT! 33:&#6000007fe99ae93e54>\n' +
    '[ 1561.519948 ] [Hardware Error]: TSC 539b174dead ADDR 3fe98d264ebd MISC 1\n' +
    '[ 1561.519950 ] [Hardware Error]: PROCESSOR 0:206a7 TIME 1357862746 SOCKET 0 APIC 1 microcode 28\n' +
    "[ 1561.519951 ] [Hardware Error]: Run the above through 'mcelog --ascii'\n" +
    '[ 1561.519953 ] [Hardware Error]: CPU 0: Machine Check Exception: 4 Bank 3: be00000000800400\n' +
    '[ 1561.519955 ] [Hardware Error]: TSC 539b174de9d ADDR 3fe98d264ebd MISC 1\n' +
    '[ 1561.519957 ] [Hardware Error]: PROCESSOR 0:206a7 TIME 1357862746 SOCKET 0 APIC 0 microcode 28\n' +
    "[ 1561.519958 ] [Hardware Error]: Run the above through 'mcelog --ascii'\n" +
    '[ 1561.519959 ] [Hardware Error]: Machine check: Processor context corrupt\n' +
    '[ 1561.519960 ] Kernel panic - not syncing: Fatal Machine check\n' +
    '[ 1561.519962 ] Pid: 0, comm: swapper/5 Tainted: P   M     C O 3.2.0-35-generic #55-ToasterOs\n' +
    '[ 1561.519963 ] Call Trace:\n' +
    '[ 1561.519964 ]  &#60#MC>  [&#60ffffffff81644340>] panic+0x91/0x1a4\n' +
    '[ 1561.519971 ]  [&#60ffffffff8102abeb>] mce_panic.part.14+0x18b/0x1c0\n' +
    '[ 1561.519973 ]  [&#60ffffffff8102ac80>] mce_panic+0x60/0xb0\n' +
    '[ 1561.519975 ]  [&#60ffffffff8102aec4>] mce_reign+0x1f4/0x200\n' +
    '[ 1561.519977 ]  [&#60ffffffff8102b175>] mce_end+0xf5/0x100\n' +
    '[ 1561.519979 ]  [&#60ffffffff8102b92c>] do_machine_check+0x3fc/0x600\n' +
    '[ 1561.519982 ]  [&#60ffffffff8136d48f>] ? intel_idle+0xbf/0x150\n' +
    '[ 1561.519984 ]  [&#60ffffffff8165d78c>] machine_check+0x1c/0x30\n' +
    '[ 1561.519986 ]  [&#60ffffffff8136d48f>] ? intel_idle+0xbf/0x150\n' +
    '[ 1561.519987 ]  &#60&#60EOE>>  [&#60ffffffff81509697>] ? menu_select+0xe7/0x2c0\n' +
    '[ 1561.519991 ]  [&#60ffffffff815082d1>] cpuidle_idle_call+0xc1/0x280\n' +
    '[ 1561.519994 ]  [&#60ffffffff8101322a>] cpu_idle+0xca/0x120\n' +
    '[ 1561.519992 ]  [&#60ffffffff8163aa9a>] start_secondary+0xd9/0xdb\n' +
    '[ 1561.519998 ]  <span style="color: #ff5454">404 Not Found</span>\n' +

    '[ 1561.519996 ] Dropping into emergency shell...\n\nGRUB v2.4.12 Emergency Shell (rescue)\n'

prefix = '<span style="color: grey">grub rescue> </span>';
shname = 'grub'

commands = {
    'help': grub_showHelp,

    'clear': clearScreen,
    'cls': clearScreen,

    'credits': showCredits,

    'poweroff': grub_shutdown,
    'shutdown': grub_shutdown,

    'reboot': grub_reboot,
    'restart': grub_reboot
}

// COMMANDS

function grub_showHelp() {
    content +=
        'GRUB2 Emergency Shell Help\n' +
        '='.repeat(50) +
        '\nhelp - shows this message' +
        '\nclear - clears the screen' +
        '\ncredits - information about this website' +
        '\nreboot - reboots shell' +
        '\nshutdown - ends session\n' +
        '='.repeat(50) + '\n';
}

function grub_reboot() {
    blockInput = true;
    content = "Rebooting...";
    refresh()
    sleep(1500);
    // window.location.href = "/";
}
function grub_shutdown() {
    blockInput = true;
    content += "Powering Down...\n\n";
    sleep(1500);
    clearScreen();

    // wait here forever
    while (true) {};
}
