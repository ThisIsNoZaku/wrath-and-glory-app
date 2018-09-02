export default (state:any, action:any):any => {
    console.info(state);
    if(state == undefined){
        return {}
    }
    return state;
}