import osm from "os";

export const os = (option) => {
  switch (option) {
    case "--EOL":
      console.log(JSON.stringify(osm.EOL));
      break;

    case "--cpus":
      osm.cpus().forEach(({ model, speed }, idx) => {
        console.log(`\nCPU: ${idx + 1}`);
        console.log(`Model: ${model}`);
        console.log(`Speed: ${speed}\n`);
      });
      console.log(`Total CPUs: ${osm.cpus().length}`);
      break;

    case "--homedir":
      console.log(osm.homedir());
      break;

    case "--username":
      console.log(osm.userInfo().username);
      break;

    case "--architecture":
      console.log(osm.arch());
      break;

    default:
      console.log("\nInvalid input");
  }
};
