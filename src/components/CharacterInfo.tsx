import React from 'react';
import {connect} from 'react-redux';
import {Grid, TextField} from "@material-ui/core";
import Character from "../model/Character";

class _CharacterInfo extends React.Component<CharacterInfoProps, CharacterInfoState> {

    constructor(props: CharacterInfoProps) {
        super(props);
    }

    render() {
        return (<Grid
            container
            spacing={24}>
            <Grid item xs={12}>
                <TextField
                    label="Name"
                    value={this.props.character.name}
                    fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Tier"
                    value={this.props.character.tier}
                    fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Rank"
                    value={this.props.character.rank}
                    fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Rank Bonus"
                    value={this.props.rankBonus}
                    fullWidth></TextField>
            </Grid>
        </Grid>)
    }
}

export {_CharacterInfo as CharacterInfo};

const connected = connect((state: any) => {
    if (!state.character) {
        return {
            character: {}
        };
    }
    return {
        character: state.character
    };
}, (dispatch: any) => {
    return {};
})(_CharacterInfo);

export default connected;

class CharacterInfoProps {
    character?: Character;
    rankBonus?: number;
}

class CharacterInfoState {
}