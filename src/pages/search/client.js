import ".app.css";

function app() {
    return (
        <div classname="app">
            <input type="text" placeholder="Search whatever" classname="search" />
            <ul classname="list">
                <li classname="listItem">Rick</li>
                <li className="ListItems">Morty</li>
                <li className="list">Summer</li>
                <li className="list">Beth</li>
            </ul>
        </div>
    );
}