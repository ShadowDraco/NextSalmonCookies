'use client'

import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieLocation from './cookieLocation'

import { defaultState } from './cookieLocation'

export default function Sales() {
  let times = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
  ]
  const [locations, setLocations] = useState(defaultState)
  const [totals, setTotals] = useState([])
  const [grandTotal, setGrandTotal] = useState(0)

  const addLocation = location => {
    setLocations([...locations, location])
  }

  useEffect(() => {
    locations.map(location => {
      location.randomCustomers()
      location.dailyCookiesSold()
    })

    let newTotals = []
    let newGrandTotal = 0

    times.forEach((time, i) => {
      let newTotal = locations.reduce((acc, location) => {
        newGrandTotal += location.cookiesPerHour[i]
        return acc + location.cookiesPerHour[i]
      }, 0)

      newTotals.push(newTotal)
    })

    setGrandTotal(newGrandTotal)
    setTotals(newTotals)

    //? No need to include totals or times in this dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations])

  const handleSubmit = e => {
    e.preventDefault()

    let { stand, min, max, avg } = e.target
    stand = stand.value
    min = parseInt(min.value)
    max = parseInt(max.value)
    avg = parseInt(avg.value)

    let location = new CookieLocation(stand, min, max, avg)

    location.randomCustomers()
    location.dailyCookiesSold()

    addLocation(location)
  }

  return (
    <>
      <Header page='sales' />

      <main id='salesData'>
        <form className='w-full' id='addCookieStand' onSubmit={handleSubmit}>
          <fieldset className='w-full py-[10px] px-[20px] flex justify-between items-center flex-wrap'>
            <legend className='text-[1.2rem]'>Add New Cookie Stand</legend>
            <div className='flex flex-column'>
              <label htmlFor='standLocation'>Location</label>
              <input
                type='text'
                name='stand'
                id='standLocation'
                placeholder='New Stand Location'
              />
            </div>
            <div className='flex flex-column'>
              <label htmlFor='minCust'>Minimum Customers</label>
              <input
                type='number'
                name='min'
                id='minCust'
                placeholder='# Min Customers'
              />
            </div>
            <div className='flex flex-column'>
              <label htmlFor='maxCust'>Maximum Customers</label>
              <input
                type='number'
                name='max'
                id='maxCust'
                placeholder='# Max Customers'
              />
            </div>
            <div className='flex flex-column'>
              <label htmlFor='avgCookiesSold'>Average Cookies Sold/Hr</label>
              <input
                type='number'
                name='avg'
                id='avgCookiesSold'
                placeholder='Average Cookies per Customer'
              />
            </div>
            <button type='submit'>Add Store Location</button>
          </fieldset>
        </form>

        <table id='dataTable'>
          <thead id='tableHeader'>
            <tr>
              <td></td>
              {times.map((time, i) => {
                return <td key={i}>{time}</td>
              })}
              <td>Total</td>
            </tr>
          </thead>
          <tbody id='tableBody'>
            {locations.map((location, i) => {
              return (
                <tr key={`${location.stand}-${i}`}>
                  <td>{location.location}</td>
                  {location.cookiesPerHour.map((hour, i) => {
                    return <td key={i}>{hour}</td>
                  })}
                  <td>{location.totalCookiesSold}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot id='tableFooter'>
            <tr>
              <td></td>
              {times.map((time, i) => {
                return <td key={i}>{totals[i]}</td>
              })}
              <td>{grandTotal}</td>
            </tr>
          </tfoot>
        </table>
      </main>

      <Footer />
    </>
  )
}
