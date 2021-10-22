class Main {
    constructor() {
        this.print('Main class initialized!');
    }

    print(message: string) {
        console.log(message);
    }
}

const main = new Main();

main.print('Hello world!');
