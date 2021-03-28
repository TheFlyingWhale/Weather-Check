import { clearStorage, createTempStorage, printJsonStorage, printStorage } from "../../common/scripts/storage";

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
            <button onClick={printStorage}>printStorage</button>
            <button onClick={printJsonStorage}>printJsonStorage</button>
            <button onClick={clearStorage}>clearStorage</button>
            <button onClick={createTempStorage}>createTempStorage</button>
        </aside>
    )
}