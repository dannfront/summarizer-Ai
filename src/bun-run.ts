import { spawn } from "child_process";

const process = spawn("bun", ["run", "src/app.ts"]);

process.stdout.on("data", (data) => {
    console.log(`Salida: ${data}`);
});

process.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
});
