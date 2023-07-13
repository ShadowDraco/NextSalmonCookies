let standOpen = 6
let standClose = 20
let hoursOpen = standClose - standOpen

class CookieLocation {
  constructor(standLocation, minCust, maxCust, avgSale) {
    this.location = standLocation
    this.min = minCust
    this.max = maxCust
    this.avgSale = avgSale
    this.customersPerHour = []
    this.cookiesPerHour = []
    this.totalCookiesSold = 0
  }

  randomCustomers = function () {
    let min = Math.ceil(this.min)
    let max = Math.floor(this.max)
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNum
  }

  resetCalc = function () {
    this.customersPerHour = []
    this.cookiesPerHour = []
    this.totalCookiesSold = 0
  }

  dailyCookiesSold = function () {
    this.resetCalc()

    // for loop
    for (let i = 0; i <= hoursOpen; i++) {
      let customers = this.randomCustomers()
      this.customersPerHour.push(customers)
      let cookies = Math.round(customers * this.avgSale)
      this.cookiesPerHour.push(cookies)
      this.totalCookiesSold += cookies
    } //end for loop
  }
}

let seattle = new CookieLocation('Seattle', 23, 65, 6.3)
let tokyo = new CookieLocation('Tokyo', 3, 24, 1.2)
let dubai = new CookieLocation('Dubai', 11, 38, 3.7)
let paris = new CookieLocation('Paris', 20, 38, 2.3)
let lima = new CookieLocation('Lima', 2, 16, 4.6)


const locations = [seattle, tokyo, dubai, paris, lima]
locations.map(location => {
  location.randomCustomers()
  location.dailyCookiesSold()
})

export const defaultState = locations
export default CookieLocation
