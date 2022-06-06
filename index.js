function scuberGreetingForFeet(feet){
  // Write your code here!
  let sample
  if (feet <= 400) {
    sample = 'This one is on me!'
  } else if (feet > 400 && feet <= 2500) {
    sample = 'I will gladly take your thirty bucks.'
  } else {
    sample = 'No can do.'
  }
  return sample
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
}
}