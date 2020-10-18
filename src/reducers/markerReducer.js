const markerReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MARKERS':
        const initJobs = action.data
        return initJobs
      default:
        return state
    }
  }
  
  export default markerReducer