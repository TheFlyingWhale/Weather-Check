export const DevTools = props => {
    const getData = () => {
        console.log(props.data);
    }

    const getLocation = () => {
        console.log(props.location);
    }

    return (
        <aside className="devTools">
            <button onClick={getData}>getData</button>
            <button onClick={getLocation}>getLocation</button>
        </aside>
    )
}