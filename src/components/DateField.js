import React, {useEffect, useState, useContext, createContext} from 'react'

export const DateFieldContext = createContext()

export function DateField(props) {
	/* only concerned with date & onChange */
	const { children, date, onChange } = props
	return(
		<DateFieldContext.Provider value={{
			date : date,
			onChange : onChange
		}}>
			<div>{children}</div>
		</DateFieldContext.Provider>
	)
}

/* Month dropdown w/ preselected value */
export function Month() {
	const { date, onChange } = useContext(DateFieldContext)

	function createOptions() {
		const months = []
		for (let i = 0; i < 12; i++) {
			months.push(<option key={i} value={i}>{i + 1}</option>)
		}
		return months
	}
	const handleEvent = (event) => {
	    const newDate = new Date(date.getTime())
	    newDate.setMonth(parseInt(event.target.value))
	    onChange(newDate)
	}
	return (
		<span>
		<label htmlFor="monthSelect"/>
		<select value={date.getMonth()} onChange={handleEvent} id="monthSelect">
			{createOptions()}
		</select>
		</span>
	)
}

/* Year dropdown with preselected and min/max */
export function Year(props) {
	const { minYear, maxYear } = props
	const { date, onChange } = useContext(DateFieldContext)
	const difference = maxYear - minYear + 1
	function createYears() {
		const years = []
		for (let i = 0; i < difference; i++) {
			years.push(<option key={minYear + i} value={minYear + i}>{minYear + i}</option>)	
		}
		return years
	}
	function handleEvent(event) {
		const newDate = new Date(date.getTime())
		newDate.setFullYear(event.target.value)
		onChange(newDate)
	}
	return (
		<span>
		<label htmlFor="yearSelect"/>
		<select value={date.getFullYear()} id="yearSelect" onChange={handleEvent}>
			{createYears()}
		</select>
		</span>
	)
}

/* Day dropdown with max days based on month and year */
export function Day() {
	const { date, onChange } = useContext(DateFieldContext)
	const maxDay = daysInMonth(date.getMonth(), date.getFullYear())

	function createDays() {
		const days = []
		for (let i = 0; i < maxDay; i++) {
			days.push(<option key={i+1} value={i + 1}>{i + 1}</option>)

		}
		return days
	}
	function handleEvent (event) {
		const newDate = new Date(date.getTime())
		newDate.setDate(event.target.value)
		onChange(newDate)
	}
	return (
		<span>
			<label htmlFor="daySelect"/>
			<select value={date.getDate()} id="daySelect" onChange={handleEvent}>
				{createDays()}
			</select>
		</span>
	)
}

// Thanks!
// https://stackoverflow.com/questions/1433030/validate-number-of-days-in-a-given-month/1433119#1433119
function daysInMonth(m, y) {
  switch (m + 1) {
    case 1:
      return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28
    case 8:
    case 3:
    case 5:
    case 10:
      return 30
    default:
      return 31
  }
}


