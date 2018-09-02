import React from 'react';
import CharacterInfo from "../components/CharacterInfo";
import AttributesContainer from "../components/AttributesContainer";
import {Grid} from "@material-ui/core";

export default class CharacterSheet extends React.Component<CharacterSheetProps, CharacterSheetState> {
    render() {
        return (
            <Grid
                container
                direction={"row"}
                style={{
                    margin: 6
                }}>
                <Grid
                    container
                    direction={"row"}
                    spacing={24}
                    lg={6}
                >
                    <Grid
                        item xs={12}>
                        <CharacterInfo/>
                    </Grid>
                    <Grid
                        item xs={12}>
                        <AttributesContainer/>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    direction={"column"}
                    spacing={24}></Grid>
            </Grid>
        )
    }

}

class CharacterSheetProps {
}

class CharacterSheetState {
}