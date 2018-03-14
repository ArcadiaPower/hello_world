var subscriptionsList = [];

subscriptionsList.push({name: "LED", balance: 100, term_start: "2018-01-01", term_end: "2018-11-01", term_length: 10, cost: 100})
subscriptionsList.push({name: "Fridge", balance: 1040, term_start: "2018-01-01", term_end: "2018-11-01", term_length: 10, cost: 1300})

//3 months have passed
//we're going to avoid doing date math in programming because it's a pain in the ass
//but keep in mind this would be even worse if we had to deal with finding how much time has elapsed in the term
function amount_due(subscriptions) {
var amount_due = 0;
  for(i=0; i < subscriptions.length; i++){
    amount_due = (3 * (subscriptions[i].cost/subscriptions[i].term_length)) - (subscriptions[i].cost - subscriptions[i].balance)
    console.log("Amount due for " + subscriptions[i].name + " is " +  amount_due)
  }
}

amount_due(subscriptionsList)