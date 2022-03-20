const {NODE_ENV} = process.env;
/**
 * @class
 * Module comment
 */

/** Main class comment */
export default class Main {
    /** A public readonly property. */
    readonly message: string = 'Main class initialized!';

    /**
     * The constructor of the `Main` class.
     */
    constructor() {
        this.print(this.message);
    }

    /**
     * @param message  Comment for parameter ´message´.
     * @returns Comment for special return value.
     */
    print(message: string): void {
        console.log(`[${NODE_ENV}]: ${message}`);
    }
}
