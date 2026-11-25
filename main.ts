// A tiny CLI for the one line every outage really deserves.

const OUTAGE_LINE =
  'We are down because someone asked the intern to just quickly fix one small thing.';

function renderLine(shout: boolean): string {
  return shout ? OUTAGE_LINE.toUpperCase() : OUTAGE_LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function printUsage(): void {
  console.error('Usage: node main.ts [--shout] [--help]');
}

function main(): void {
  const args = process.argv.slice(2);
  const unknownArgs = args.filter(
    (arg) => arg !== '--shout' && arg !== '--help',
  );

  if (hasFlag('--help')) {
    printUsage();
    process.exit(0);
  }

  if (unknownArgs.length > 0) {
    printUsage();
    process.exitCode = 2;
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
