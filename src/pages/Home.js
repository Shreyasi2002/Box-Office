import React, { useState, useCallback } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery, useWhyDidYouUpdate } from '../misc/custom-hooks';
import {
    RadioInputsWrapper,
    SearchButtonWrapper,
    SearchInput,
} from './Home.styled';

const renderResults = results => {
    if (results && results.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                No Results
            </div>
        );
    }
    if (results && results.length > 0) {
        return results[0].show ? (
            <ShowGrid data={results} />
        ) : (
            <ActorGrid data={results} />
        );
    }
    return null;
};

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowSearch = searchOption === 'shows';

    const onInputChange = useCallback(
        ev => {
            setInput(ev.target.value);
        },
        [setInput]
    );

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

    const OnRadioChange = useCallback(ev => {
        setSearchOption(ev.target.value);
    }, []);

    useWhyDidYouUpdate('home', { onInputChange, onKeyDown });

    return (
        <MainPageLayout>
            <br />
            <br />
            <SearchInput
                type="text"
                placeholder="Search for something"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label="Shows"
                        id="show-search"
                        value="shows"
                        checked={isShowSearch}
                        onChange={OnRadioChange}
                    />
                </div>

                <div>
                    <CustomRadio
                        label="Actors"
                        id="actor-search"
                        value="people"
                        checked={!isShowSearch}
                        onChange={OnRadioChange}
                    />
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
                <button type="button" onClick={onSearch}>
                    Search
                </button>
            </SearchButtonWrapper>
            {renderResults(results)}
        </MainPageLayout>
    );
};
export default Home;
