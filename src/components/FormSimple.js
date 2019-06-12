import React, { useContext, createContext } from 'react';
import { Form } from 'react-bootstrap'

export const FormSimpleContext = createContext()

/* a simple wrapper around the children */
export default function FormSimple(props) {
	const { onSubmit, onSuccess, children } = props
	return (
		<FormSimpleContext.Provider value={{
			onSubmit : onSubmit,
			onSuccess : onSuccess
		}}>
			<div>
				<Form>
					{children}
				</Form>
			</div>
		</FormSimpleContext.Provider>
	)
}
