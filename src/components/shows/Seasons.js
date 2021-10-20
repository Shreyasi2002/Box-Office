/* eslint-disable no-unused-vars */
import React from 'react';

import { SeasonList } from './Seasons.styled';
import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Headline, MainDataWrapper } from './ShowMainData.styled';

const Seasons = ({ seasons }) => (
    <SeasonList>
        {seasons.map(season => (
            <div key={season.id} className="season-item">
                <MainDataWrapper>
                    <div className="image-container">
                        <img
                            src={
                                season.image
                                    ? season.image.original
                                    : IMG_PLACEHOLDER
                            }
                            alt="season-cover"
                        />
                    </div>
                    <div className="text-side">
                        <Headline>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    paddingRight: '15px',
                                }}
                            >
                                Season {season.number}
                            </h3>
                            <div
                                style={{
                                    fontSize: '17px',
                                    marginLeft: '-5px',
                                    color: '#5f5f5f',
                                }}
                            >
                                {season.episodeOrder
                                    ? season.episodeOrder
                                    : '__'}{' '}
                                Episodes
                            </div>
                        </Headline>
                        <div style={{ color: '#5f5f5f', lineHeight: '1.5' }}>
                            <br />
                            Premiered on{' '}
                            {
                                <b>
                                    <span>
                                        {season.premiereDate
                                            ? season.premiereDate
                                            : '__'}
                                    </span>
                                </b>
                            }
                        </div>
                        <div
                            className="summary"
                            dangerouslySetInnerHTML={{ __html: season.summary }}
                        />
                    </div>
                </MainDataWrapper>
            </div>
        ))}
        {/* {seasons.map(season => (
            <div key={season.id} className="season-item">
                <div className="left">
                    <p>Season {season.number}</p>
                    <p>
                        Episodes: <span>{season.episodeOrder}</span>
                    </p>
                </div>
                <div className="right">
                    
                </div>
            </div>
        ))} */}
    </SeasonList>
);

export default Seasons;
