const darkmodeReducer = (state, action) => {
    switch(action.type){

        case 'DARK':
            return{
                dark:true
            } 
        case 'LIGHT':
            return{
                dark:false
            }
        case 'TOGGLE':
            return{
                dark:!state.dark
            }
        default:
            return state
    }
}

export default darkmodeReducer