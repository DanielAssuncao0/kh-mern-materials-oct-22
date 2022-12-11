
function Greetings(props) {
    let name = props.name;
    console.log(name);
    if(name != undefined) {
        return <div>
            <h2>Hello {name}</h2>
        </div>
    } else {
        return <div>
            <h2>Hello Guest!</h2>
        </div>
    }
}
export default Greetings;