/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
import React, { useState, useCallback } from 'react';
// import useWindowSize from 'react-use/lib/useWindowSize';

import ActorGrid from '../components/actors/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
    RadioInputsWrapper,
    SearchButtonWrapper,
    SearchInput,
} from './Home.styled';
import Title from '../components/Title';

import NO_RESULTS from '../images/no_results - sad.png';

import popularResults from '../components/shows/PopularShow.json';

import './Home.css';

const renderResults = results => {
    if (results && results.length === 0) {
        return (
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'monospace',
                        fontSize: '16px',
                    }}
                >
                    No Results Found
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img alt="nothing found" src={NO_RESULTS} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingLeft: '10px',
                        fontFamily: 'monospace',
                        fontSize: '16px',
                    }}
                >
                    Dont Be Sad! We will find it! ......
                </div>
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

    const element = (
        <>
            <Title
                title="BOX OFFICE"
                subtitle="Millions of TV shows and people to discover. Explore Now..."
            />
            <MainPageLayout>
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
                            label="People"
                            id="actor-search"
                            value="people"
                            checked={!isShowSearch}
                            onChange={OnRadioChange}
                        />
                    </div>
                </RadioInputsWrapper>

                <SearchButtonWrapper>
                    <button type="button" onClick={onSearch} id="SearcButton">
                        Search
                    </button>
                    <br />
                </SearchButtonWrapper>
            </MainPageLayout>
            <div id="welcome">Welcome to BOX OFFICE!</div>
        </>
    );

    return (
        <div>
            {element}

            {renderResults(results)}
            <br />
            <div>
                <h2>Popular Shows</h2>
                <ShowGrid data={popularResults} />
            </div>
            <br />
            <br />
        </div>
    );
};
export default Home;
