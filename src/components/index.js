import React, { Component, PropTypes } from 'react'

class Compute extends Component {
	render(){
		const { onResult, result, onInput1, onInput2, onSelect} = this.props
		console.log('sss',this.props)
		return (
			<div>
				<input type="text" onChange={onInput1} />
				<select onChange={onSelect}>
					<option value="0">+</option>
					<option value="1">-</option>
					<option value="2">*</option>
					<option value="3">/</option>
				</select>
				<input type="text" onChange={onInput2} />
				<button onClick={onResult}>=</button>
				<span>{result}</span>
			</div>
		)
	}
}

Compute.propTypes = {
	onResult: PropTypes.func.isRequired,
	result: PropTypes.number.isRequired,
}

export default Compute