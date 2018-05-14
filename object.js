const me = {};
me['age'] = 23;
me['current location'] = "Brisbane";

console.log(`You are ${me['age']} years old. You are located in ${me['current location']}.`);

me['hobbies'] = ["reading", "programming", "patting cats"];

me['age'].delete;
console.log(me);

me['hobbies'].forEach(function(hobby) {
  console.log(`You are interested in ${hobby}`);
});


me['hobbies'].push("Breaking code");
me['hobbies'].shift();
console.log(me['hobbies'][0]);


function print_details(object) {
  console.log("This is the method");
  Object.keys(object).forEach(function(key) {
    if (typeof object[key] === "object") {
      Object.keys(object[key]).forEach(function (difKey) {
        console.log(`Your ${[key]} attributes include ${me[key][difKey]}`);
      });
    } else {
    console.log(`Your ${key} is ${object[key]}`);
  }
  });
}

me["mother"] = {};
me["mother"]["name"] = "Helen";
me["mother"]["age"] = 49;
me["mother"]["location"] = "Cairns";


me.print_details = print_details(me);
