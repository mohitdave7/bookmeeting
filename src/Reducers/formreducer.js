let registerState = {};

const loginReducer = (state = registerState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA': {
			const valueInState = {
				...state.formData
			}
			const key = action && action.payload ? action.payload.key : '';
			const newFormData = {
				...valueInState,
				[key]: action.payload.value
			}
            console.log("loginReducer -> newFormData", newFormData)

			return {
				...state,
				formData: newFormData
			};
		}


        default:
            return state;
    }
};

export default loginReducer;
