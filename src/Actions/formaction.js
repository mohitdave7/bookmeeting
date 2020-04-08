export function handleChange(event) {
    const key = event && event.target ? event.target.name : '';
    let value = event && event.target ? event.target.value : event.target.checked
    console.log("handleChange -> value", value)
    
    return {
        type: "SET_FORM_DATA",
        payload: { 
            key,
            value
        }
    }
}