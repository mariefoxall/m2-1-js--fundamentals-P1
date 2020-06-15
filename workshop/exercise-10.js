// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let line = "";

for (let number = 0; number < 7; number++) {
  line = line + "#";
  console.log(line);
}
