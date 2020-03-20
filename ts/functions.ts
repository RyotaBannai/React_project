export function clog(input) {
  console.log(input);
}

function test_export(){
  console.log('this is just a test.')
}
function test_fn(){
  console.log('this is a fn as different name.')
}

export {
  test_export,
  test_fn as test,
}