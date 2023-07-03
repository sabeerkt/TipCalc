


const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)





// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
 const bill = Number(billInput.value)
  console.log(bill)
    // get the tip from user & convert it into a percentage (divide by 100)
const tipPercentage= Number(tipInput.value)/100
console.log(tipPercentage)

    // get the total tip amount
 const tipAmount = bill*tipPercentage
  console.log({tipAmount});
    // calculate the total (tip amount + bill)
 const total= tipAmount+bill
 console.log({total});

    // calculate the per person total (total divided by number of people)
  const perPersonTotal = total/numberOfPeople
  console.log(perPersonTotal);
   
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText=`${perPersonTotal.toFixed(1).toLocaleString('en-us')}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
      numberOfPeople +=1

    // update the DOM with the new number of people
numberOfPeopleDiv.innerText=numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
 if (numberOfPeople<=1) {
    alert("sorrry!")
    return
 }

    // decrement the amount of people
    numberOfPeople -=1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText=numberOfPeople

    // calculate the bill based on the new number of people
calculateBill()
}
