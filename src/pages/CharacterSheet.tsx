import React from 'react';
import CharacterInfo from "../components/CharacterInfo";

export default class CharacterSheet extends React.Component<CharacterSheetProps, CharacterSheetState> {
    render() {
        return (<div>
            <CharacterInfo/>
        </div>)
    }

}

class CharacterSheetProps {
}

class CharacterSheetState {
}