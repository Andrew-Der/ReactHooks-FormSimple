import React from 'react'
import { Form, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export function EmailSimple (props) {
	const {placeHolder, onChange} = props
	return (
		<Form.Control 
		placeholder={placeHolder}
		onChange={(e) => {
			onChange(e.target.value)
		}}
		/>
	)
}

export function EmailForced (props) {
	const { options, placeHolder, onChange } = props
	const [ selected, setSelected ] = useState(options[0])
	const [ emailText, setEmailText ] = useState(null)

	useEffect(() => {
		onChange(emailText + "@" + selected)
	}, [emailText, selected])

	return (
		<Form.Group>
		<label>IDK</label>
		<InputGroup>
			<Form.Control 
			onChange={(e) => {
				setEmailText(e.target.value)
			}}
			placeholder={placeHolder}/>
			<InputGroup.Append>
				<InputGroup.Text>@</InputGroup.Text>
			</InputGroup.Append>
			<DropdownButton
			id={"emailDropDownButton"}
			as={InputGroup.Append}
			title={selected}
			>
			{options && options.length > 1 &&
			options.map((curr, index, arr) => {
				if (curr !== selected) {
					return (
						<Dropdown.Item
						key={curr}
						onSelect={(eventKey) => {
							setSelected(eventKey)
						}}
						>{curr}
						</Dropdown.Item>
					)
				}
			})
			}
			</DropdownButton>
		</InputGroup>
		</Form.Group>
	)
}