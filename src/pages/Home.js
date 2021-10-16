import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        // Call browser API to fetch remote data
        apiGet(`/search/shows?q=${input}`).then(result => {
            setResults(result);
            console.log(result);
        });
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No Results</div>;
        }
        if (results && results.length > 0) {
            return (
                <div>
                    {results.map(item => (
                        <div key={item.show.id}>
                            <br />
                            {item.show.name}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <MainPageLayout>
            This is HOME page
            <br />
            <br />
            <input
                type="text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};
export default Home;
