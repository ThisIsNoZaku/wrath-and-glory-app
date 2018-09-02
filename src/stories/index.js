import React from 'react';

import {storiesOf} from '@storybook/react';

import {CharacterInfo} from "../components/CharacterInfo";

storiesOf('CharacterInfo', module)
    .add('with no character', () => <CharacterInfo character={{}}></CharacterInfo>)
    .add('with a character', () => <CharacterInfo character={{
        name: "Some Name",
        tier: 1,
        rank: 1
    }}
                                                       rankBonus={1}
    ></CharacterInfo>);
