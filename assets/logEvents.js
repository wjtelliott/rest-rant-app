module.exports = (text, type = 0, reset = true) => {
    let colorCode = '';
    switch (type) {
        default:
        case 0: // White / Reset
            colorCode = '\u001b[37m';
            break;
        case 1: // Purple
            colorCode = '\u001b[35m';
            break;
        case 2: // Yellow
            colorCode = '\u001b[33m';
            break;
        case 3: // Red
            colorCode = '\u001b[31m';
    }
    console.log(`[Server] ${colorCode}${text}${reset ? '\u001b[37m' : ''}`);
};