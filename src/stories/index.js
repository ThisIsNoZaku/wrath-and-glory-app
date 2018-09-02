import React from 'react';

import {storiesOf} from '@storybook/react';

import {CharacterInfo} from "../components/CharacterInfo";
import {AttributesContainer} from "../components/AttributesContainer";

storiesOf('CharacterInfo', module)
    .add('with no character', () => <CharacterInfo character={{}}></CharacterInfo>)
    .add('with a character', () => <CharacterInfo character={{
        name: "Some Name",
        tier: 1,
        rank: 1
    }}
                                                       rankBonus={1}
    ></CharacterInfo>);

storiesOf("AttributesContainer", module)
.add("with empty attributes", () => <AttributesContainer attributes={{}}/>)
    .add("with some attributes with values", () => <AttributesContainer attributes={{
        Strength: 1,
        Agility: 2
    }}/>)