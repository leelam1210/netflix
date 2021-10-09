import React from 'react';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ films, series });

    console.log(slides);

    return (
        <BrowseContainer slides={slides} />
    )
}

export default Browse