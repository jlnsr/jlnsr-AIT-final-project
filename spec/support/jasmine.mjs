export default {
  spec_dir: "spec",
  spec_files: [
    "**/*[sS]pec.?(m)js",
    "**/tests.mjs"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}

