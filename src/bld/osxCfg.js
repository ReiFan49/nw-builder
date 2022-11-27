import fs from "node:fs/promises";
import path from "node:path";

import plist from "plist";

/**
 * OSX specific configuration steps
 *
 * @param {object} pkg          The srcDir/package.json as a JSON
 * @param {string} outDir       The directory to hold build artifacts
 * @param {object} releaseInfo  NW binary release metadata
 */
const setOsxConfig = async (pkg, outDir) => {
// const setOsxConfig = async (pkg, outDir, releaseInfo) => {
  const outApp = path.resolve(outDir, `${pkg.name}.app`);
  await fs.rename(path.resolve(outDir, "nwjs.app"), outApp);

  // Rename CFBundleDisplayName in Contents/Info.plist
  const contentsInfoPlistPath = path.resolve(outApp, "Contents/Info.plist");
  const contentsInfoPlistJson = plist.parse(await fs.readFile(contentsInfoPlistPath, "utf-8"));
  contentsInfoPlistJson.CFBundleDisplayName = pkg.name;
  const contentsInfoPlist = plist.build(contentsInfoPlistJson);
  await fs.writeFile(contentsInfoPlistPath, contentsInfoPlist);

  // Rename CFBundleDisplayName in Contents/Resources/en.lproj/InfoPlist.strings
  const contentsInfoPlistStringsPath = path.resolve(outApp, "Contents/Resources/en.lproj/InfoPlist.strings");
  const contentsInfoPlistStrings = await fs.readFile(contentsInfoPlistStringsPath, "utf-8");
  const newPlistStrings = contentsInfoPlistStrings.replace(/CFBundleGetInfoString = "nwjs /, `CFBundleGetInfoString = "${pkg.name} `);
  await fs.writeFile(contentsInfoPlistStringsPath, newPlistStrings);

  // Add product_string property to package.json
  // const packageJsonPath = path.resolve(outApp, "Contents/Resources/app.nw/package.json");
  // pkg.product_string = pkg.name;
  // await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 4));

  // Update Helper apps
  // TODO: determine why this prevents app from launching
  // for (const helperName of [" (Alerts)", " (GPU)", " (Plugin)", " (Renderer)", ""]) {
  //   const helperPath = (name = "nwjs") => path.resolve(
  //     outApp,
  //     `Contents/Frameworks/nwjs Framework.framework/Versions/${releaseInfo.components.chromium}/Helpers/`,
  //     `${name} Helper${helperName}.app`
  //   );

  //   // Rename Helper apps in Contents/Framework.framework/Versions/n.n.n.n/Helpers
  //   await fs.rename(helperPath(), helperPath(pkg.name));

  //   // Update Helper app Info.plist files in Contents/Framework.framework/Versions/n.n.n.n/Helpers
  //   const helperPlistPath = path.resolve(helperPath(pkg.name), "Contents/Info.plist");
  //   const helperPlistJson = plist.parse(await fs.readFile(helperPlistPath, "utf-8"));
  //   helperPlistJson.CFBundleDisplayName = pkg.name;
  //   const helperPlist = plist.build(helperPlistJson);
  //   await fs.writeFile(helperPlistPath, helperPlist);
  // }
};

export { setOsxConfig };