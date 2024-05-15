// import chalk from "chalk";
function getName(d: number): string {
  const error = new Error();
  if (error.stack == null) {
    return "";
  }

  // const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
  // const chromeMatch = ((((error.stack.split('at ') || [])[1 + d] || '').match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '').split('.').pop();
  // const safariMatch = error.stack.split('\n')[0 + d];

  const firefoxMatch = error.stack.split("\n")[0 + d];
  const chromeMatch = error.stack.split("at ")[1 + d];
  const safariMatch = error.stack.split("\n")[0 + d];

  // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
  // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
  // safariMatch ? console.log('safariMatch', safariMatch) : void 0;

  let res = firefoxMatch || chromeMatch || safariMatch;

  res = res.replace("at", "");
  res = res.trim();

  const idxOfPathent = res.indexOf("(");
  if (idxOfPathent == -1) {
    return "";
  }
  return res.substring(0, idxOfPathent);
}
export function LOG(tag: string, message: string) {
  console.log(`${tag}\t${message}`);
}

export function FUNC_LOG() {
  console.log(
    "   %cENTER:",
    "color:white; background-color:purple;",
    getName(3)
  );
}
