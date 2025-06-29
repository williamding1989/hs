const { execSync } = require("child_process");

const args = process.argv.slice(2);
const script = args[0];
const project = args[1];

if (!script || !project) {
  process.exit(1);
}

const scope = `hs-${project}`;

const command = `cross-env ALLOW_LOCAL_RUN=yes npm run ${script}`;

execSync(`npx lerna exec --scope ${scope} -- ${command}`, {
  stdio: "inherit",
});
