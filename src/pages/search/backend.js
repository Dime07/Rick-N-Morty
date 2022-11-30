  // Note: deps array kosong [] buat
    // this useEffect jalan sekali
    function App() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("https://rickandmortyapi.com/api/character")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                /* here we map over the element and display each item as a card  */
                <div className="wrapper">
                    <ul className="card-grid">
                        {items.map((item) => (
                            <li>
                                <article className="card" key={item.callingCodes}>
                                    <div className="card-image">
                                        <img src={item.flag} alt={item.name} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="card-name">{item.name}</h2>
                                        <ol className="card-list">
                                            
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    ReactDOM.render(<App />, document.getElementById("root"));