import React from 'react'

import Header from './components/Header'
import Card from './components/Card'

import { useState } from 'react'
import data from './data.json'

import './css/main.css'

const App = () => {
  
  const [time, setTime] = useState('monthly')

    const dataTitles = data.map(({title, timeframes: {daily, weekly, monthly}}) => {

    const checkTime = (period) => time === 'daily' ? daily[period] : time === 'weekly' ? weekly[period] : monthly[period]

    return <Card 
      key={title}
      title={title}
      current={checkTime('current')}
      previous={checkTime('previous')}
      className={title}
    />
  })

  return (
    <div className='container'>
      <Header 
        setTimeDaily={() => setTime('daily')}
        setTimeWeekly={() => setTime('weekly')}
        setTimeMonthly={() => setTime('monthly')}
        state={time}
      /> 
      {dataTitles}
    </div>
  )
}

export default App


