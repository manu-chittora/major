let initialShops;
if (localStorage.getItem("shops") === null) {
  initialShops = [];
}
else {
  initialShops = JSON.parse(localStorage.getItem("shops"));
}
const addshop=(state=initialShops,action)=>{
    switch(action.type){
        case "ADD":return [...shops, action.payload];
        default : return state;
    }
}
export default addshop;