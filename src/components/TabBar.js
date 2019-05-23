import React, { useContext, createContext } from 'react'
import { useState, useEffect } from 'react'
import { Tabs } from 'react-bootstrap'

export const TabBarContext = createContext()

export default function TabBar(props) {
	const { selected, children } = props

	return (
		<TabBarContext.Provider value={{
		}}>
			<Tabs activeKey={selected}>{children}</Tabs>
		</TabBarContext.Provider>
	)
}

