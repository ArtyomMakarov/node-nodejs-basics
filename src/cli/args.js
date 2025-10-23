const parseArgs = () => {
  let result = "";

  process.argv.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      if (result !== "") {
        result += ", ";
      }

      result += `${arg} is ${process.argv[index + 1]}`;
    }
  });

  console.log(result);
};

parseArgs();
