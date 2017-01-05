import React, { Component, PropTypes } from 'react'

class Compute extends Component {
	render(){
		const { onResult, onInput1, onInput2, onSelect, result} = this.props

		return (
			<div>
				<input type="text" defaultValue="0" onChange={onInput1} />
				<select defaultValue="0" onChange={onSelect}>
					<option value="0">+</option>
					<option value="1">-</option>
					<option value="2">*</option>
					<option value="3">/</option>
				</select>
				<input type="text" defaultValue="0" onChange={onInput2} />
				<button onClick={onResult}>=</button>
				<span>{result}</span>
			</div>
		)
	}
}

Compute.propTypes = {
	onResult: PropTypes.func.isRequired,
	onInput1: PropTypes.func.isRequired,
	onInput2: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	result: PropTypes.number.isRequired
}

export default Compute