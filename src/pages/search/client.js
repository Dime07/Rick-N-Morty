return items.filter((item) => {
    return searchParam.some((newItem) => {
        return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
        );
    });
});

return <>{error.message}</>;
          if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                /*
                                // nentuin value usestate
                                //  tiap kali user ngetik di search bar
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search Characters</span>
                        </label>
                    </div>
                    <ul className="card-grid">
                        {items.map((item) => (
                            <li>
                                <article className="card" key={item.callingCodes}>
                                    <div className="card-image">
                                        <img src={item.flag} alt={item.name} />
                                    </div>
                                    <div className="card-content">
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    

    ReactDOM.render(<App />, document.getElementById("root"));