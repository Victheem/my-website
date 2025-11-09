import { execSync } from "child_process";
import fs from "fs";

function run(cmd) {
  console.log(`\n🧩 Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

// delete old folders safely
[".next", "node_modules", "package-lock.json", ".vercel"].forEach((item) => {
  if (fs.existsSync(item)) {
    console.log(`🧹 Removing ${item}...`);
    fs.rmSync(item, { recursive: true, force: true });
  }
});

console.log("\n📦 Reinstalling dependencies...");
run("npm install");

console.log("\n🔍 Type-checking...");
run("npx tsc --project tsconfig.json --noEmit");

console.log("\n🚀 Building project...");
run("npm run build");

console.log("\n✅ All done! Fresh build completed successfully.");
