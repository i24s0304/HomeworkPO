import { type Command } from "./types";

export const createHelpCommand = (commands: Command[]): Command => {
    return {
        accept(...argv: string[]) {
            const [name] = argv;
            return argv.length === 1 && ["h", "help"].indexOf(name) !== -1;
        },
        run() {
            console.log(
                [
                    "*** Commands list ***",
                    ...commands
                        .filter((c) => Boolean(c.description))
                        .map((c) => " * " + c.description),
                ].join("\n"),
            );
            return false;
        },
        description: null,
    };
};