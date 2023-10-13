function tanh(x) {
  return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
}

function skillsMember(skills) {
  let sum = 0;
  for (let i = 0; i < skills.length; i++) {
    sum += skills[i];
  }
  return tanh(sum / skills.length);
}
