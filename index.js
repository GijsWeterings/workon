#!/usr/bin/env node

const program = require("commander");

program
    .version("1.0.0")
    .description("A command-line tool to log work quickly and painlessly");

program
    .command("start <job> <project>")
    .alias("s")
    .description("Start work on a job, optionally for a given project")
    .action((job, project) => {});

program.parse(process.argv);

