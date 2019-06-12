import React, { useContext, createContext } from 'react'
import { useState, useEffect } from 'react'
import { Tabs } from 'react-bootstrap'

export const TabBarContext = createContext()

export default function TabBar(props) {
	const { activeIndex, setIndex, children } = props
	//const [ activeIndex, setActiveIndex ] = useState(selected)

	return (
		<TabBarContext.Provider value={{
		}}>
			<Tabs 
				activeKey={activeIndex}
				onSelect={(eventKey, e) => {
					setIndex(eventKey)
				}}
			>
			{children}</Tabs>
		</TabBarContext.Provider>
	)
}

