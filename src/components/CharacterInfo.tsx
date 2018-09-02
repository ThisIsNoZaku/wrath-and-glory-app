import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';
import {Grid, TextField} from "@material-ui/core";
import Character from "../model/Character";

export class CharacterInfo extends React.Component<CharacterInfoProps, CharacterInfoState> {


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
                    value={this.props.character.name}></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Tier"
                    value={this.props.character.tier}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Rank"
                    value={this.props.character.rank}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Rank Bonus"
                    value={this.props.rankBonus}></TextField>
            </Grid>
        </Grid>)
    }
}

const connected = connect((state: any) => {
    if (!state.character) {
        return {};
    }
    return state.character;
}, (dispatch: any) => {
    return {};
})(CharacterInfo);

export default connected;

class CharacterInfoProps {
    character: Character;
    rankBonus:number;
}

class CharacterInfoState {
}