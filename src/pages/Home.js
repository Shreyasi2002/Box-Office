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
    WelcomeImage,
} from './Home.styled';
import Title from '../components/Title';

import NO_RESULTS from '../images/no_results - sad.png';
import WELCOME from '../images/welcome.png';

const renderResults = results => {
    if (results && results.length === 0) {
        return (
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'monospace',
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

    useWhyDidYouUpdate('home', { onInputChange, onKeyDown });

    return (
        <div>
            <div>
                <Title
                    title="BOX OFFICE"
                    subtitle="Are you looking for a movie or an actor?"
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <WelcomeImage>
                        <div className="image">
                            <img src={WELCOME} alt="welcome" />
                        </div>
                    </WelcomeImage>

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
                            <br />
                            <br />
                            <br />
                        </SearchButtonWrapper>
                    </MainPageLayout>
                </div>
            </div>
            {renderResults(results)}
        </div>
    );
};
export default Home;
