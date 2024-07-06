export default {
  presets: ["next/babel", ["@babel/env", { modules: false }]],
  env: {
    test: {
      presets: [
        ["next/babel", { modules: "commonjs" }],
        ["@babel/env", { modules: "commonjs" }],
      ],
    },
  },
};
