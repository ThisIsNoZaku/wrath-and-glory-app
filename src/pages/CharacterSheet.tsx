import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid } from "@material-ui/core";

class CharacterSheet extends React.Component<CharacterSheetProps, CharacterSheetState> {
    render() {
        return (<div>
            <CharacterInfo/>
        </div>)
    }

}

const connected = connect((state: any) => {
    console.info(state);
    return state;
}, (dispatch: any) => {
    return {};
})(CharacterSheet);

export default connected;

class CharacterSheetProps {
}

class CharacterSheetState {
}