import React, { useContext, createContext } from 'react';

export const FormSimpleContext = createContext()

/* a simple wrapper around the children */
export default function FormSimple(props) {
	const { onSubmit, onSuccess, children } = props
	return (
		<FormSimpleContext.Provider value={{
			onSubmit : onSubmit,
			onSuccess : onSuccess
		}}>
			<div>{children}</div>
		</FormSimpleContext.Provider>
	)
}
