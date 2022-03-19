import Main from './src/main';

const main = new Main();

main.print('Hello world!');

// If you would like to set library to window - uncomment below

// if (global && global.window) {
//     // @ts-ignore
//     global.window.Main = Main;
// }

export {Main};
