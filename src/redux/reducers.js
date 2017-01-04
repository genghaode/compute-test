const counter = (state = {result: 0, val1: 0, val2: 0, selVal: 0}, action) => {
	console.log(state)
	switch(action.type){
		case 'compute':
			let obj = {val1: state.val1, val2: state.val2, selVal: state.selVal}
			if(state.selVal == 0){
				return {result: Number(state.val1)+Number(state.val2), ...obj}
			}else if(state.selVal == 1){
				return {result: Number(state.val1)-Number(state.val2), ...obj}
			}else if(state.selVal == 2){
				return {result: Number(state.val1)*Number(state.val2), ...obj}
			}else if(state.selVal == 3){
				return {result: Number(state.val1)/Number(state.val2), ...obj}
			}
		case 'input': 
			state.val1 = action.val
			return state
		case 'input2': 
			state.val2 = action.val
			return state
		case 'select': 
			state.selVal = action.val
			return state
		default: 
			return state
	}
}

export default counter