const js = import("./node_modules/@lionferguson/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("Ryan");
});
