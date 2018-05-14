// function fullState(abbv) {
  // return `Looking up state: ${abbv}`;
  // if (abbv === 'NSW') {
  //   return 'New South Wales';
  // } else if (abbv === 'QLD') {
  //   return 'Queensland';
  // } else if (abbv === 'WA') {
  //   return 'Western Australia';
  // } else if (abbv === 'SA') {
  //   return 'South Australia'
  // } else if (abbv === 'NT') {
  //   return 'Northern Territory';
  // } else if (abbv === 'TAS') {
  //   return 'Tasmania';
  // } else if (abbv === 'VIC') {
  //   return 'Victoria';
  // } else {
  //   return 'No State'
  // }
//   switch(abbv) {
//     case 'NSW':
//     return 'New South Wales';
//     case 'QLD':
//     return 'Queensland';
//     case 'WA':
//     return 'Western Australia';
//     case 'SA':
//     return 'South Australia';
//     case 'NT':
//     return 'Northern Australia';
//     case 'TAS':
//     return 'Tasmania';
//     case 'VIC':
//     return 'Victoria';
//     default:
//     return 'You did not enter a state!';
//   }
// }

const states ={
  NSW: 'New South Wales',
  QLD: 'Queensland',
  WA: 'Western Australia',
  SA: 'Southern Australia',
  NT: 'Northern Territory',
  TAS: 'Tasmania',
  VIC: 'Victoria'
}

const state = prompt("Please enter a state abbreviation");
alert(states[state]);
