import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowSearch = searchOption === 'shows';

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onSearch = () => {
        // Call browser API to fetch remote data
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
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
            return results[0].show ? (
                <div>
                    {results.map(item => (
                        <div key={item.show.id}>
                            <br />
                            {item.show.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {results.map(item => (
                        <div key={item.person.id}>
                            <br />
                            {item.person.name}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const OnRadioChange = ev => {
        setSearchOption(ev.target.value);
    };

    return (
        <MainPageLayout>
            This is HOME page
            <br />
            <br />
            <input
                type="text"
                placeholder="Search for something"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <div>
                <label htmlFor="show-search">
                    Shows
                    <input
                        id="show-search"
                        type="radio"
                        value="shows"
                        checked={isShowSearch}
                        onChange={OnRadioChange}
                    />
                </label>
                <label htmlFor="actor-search">
                    Actors
                    <input
                        id="actor-search"
                        type="radio"
                        value="people"
                        checked={!isShowSearch}
                        onChange={OnRadioChange}
                    />
                </label>
            </div>
            <button type="button" onClick={onSearch}>
                Search
            </button>
            {renderResults()}
        </MainPageLayout>
    );
};
export default Home;
