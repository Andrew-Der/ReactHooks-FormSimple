import React, {useEffect, useState, useContext, createContext} from 'react'

export const DateFieldContext = createContext()

export function DateField(props) {
	/* only concerned with date & onChange */
	const { children, date, onChange } = props
	// turn startDate into the variable that they all read from
	// and each one is hooked into it
	return(
		<DateFieldContext.Provider value={{
			date : date,
			onChange : onChange
		}}>
			<div>{children}</div>
		</DateFieldContext.Provider>
	)
}

export function Month() {
	const { date, onChange } = useContext(DateFieldContext)

	function createOptions(month) {
		const months = []
		for (let i = 0; i < 12; i++) {
			if (month === i) {
				months.push(<option selected value={i}>{i + 1}</option>)
			}
			else {
				months.push(<option value={i}>{i + 1}</option>)
			}
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
		<label for="monthSelect"/>
		<select onChange={handleEvent} id="monthSelect">
			{createOptions(date.getMonth())}
		</select>
		</span>
	)
}

export function Day(props) {
	const { date } = useContext(DateFieldContext)
}