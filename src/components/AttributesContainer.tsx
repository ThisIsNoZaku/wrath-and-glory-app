import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, TextField} from "@material-ui/core";
import * as Attributes from "../model/Attribute";
import ApplicationState from "../model/ApplicationState";

export class AttributesContainer extends React.Component<AttributesContainerProps, AttributesContainerState> {

    constructor(props: any) {
        super(props);
        this.state = {
            attributes: attributesArray.reduce((reduced: { [name: string]: number }, attributeName: string) => {
                if (!reduced[attributeName]) {
                    reduced[attributeName] = 0;
                }
                return reduced;
            }, props.attributes || {})
        }
        this.attributes = this.attributes.bind(this);
    }

    attributes() {
        return attributesArray.map((attributeName: string) => {
            return (<React.Fragment key={attributeName}>
                    <Grid
                        item
                        xs={4}>{attributeName}</Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <TextField
                            value={this.props.attributes[attributeName]}
                            fullWidth
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}></Grid>
                </React.Fragment>
            )
        });
    }

    render() {
        console.log(this.props);
        return (<Grid
            container
            spacing={24}>
            <Grid
                item
                xs={4}>Attribute</Grid>
            <Grid
                item
                xs={4}>Rating</Grid>
            <Grid
                item
                xs={4}>Adjusted Rating</Grid>
            {this.attributes()}
        </Grid>)
    }
}

const attributesArray = [
    Attributes.Strength,
    Attributes.Agility,
    Attributes.Toughness,
    Attributes.Intellect,
    Attributes.Willpower,
    Attributes.Fellowship,
    Attributes.Initiative
];

const connected = connect((state: ApplicationState) => {
    return {
        attributes: (state.character && state.character.attributes) || {}
    };
}, (dispatch: any) => {
    return {};
})(AttributesContainer);

export default connected;

class AttributesContainerProps {
    attributes?: { [attributeName: string]: number };
}

class AttributesContainerState {
}