import Main from './src/main';

const main = new Main();

main.print('Hello world!');

if (global && global.window) {
    // @ts-ignore
    global.window.Main = Main;
}

export {Main};
