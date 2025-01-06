function canVote(age) {
    if (age >= 18) {
      return "You can vote"; 
    } else {
      return "You must be at least 18 years old to vote.";
    }
  }
let vote = canVote(20)
console.log (vote)