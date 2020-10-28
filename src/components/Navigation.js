import React from 'react';
import {motion} from 'framer-motion';
import {Grid, Segment, Menu, Icon, Image, Header, GridColumn} from 'semantic-ui-react';

const square = { width: 175, height: 175 };

const Navigation = () => (
        <Grid>
            <Grid.Row verticalAlign='middle' style={{ paddingBottom: '2px' }}>
                <Grid.Column width={3}>
                    <Image src='/assets/portfolio-avatar.png' size='small' circular centered='true'/>
                </Grid.Column>
                <Grid.Column width={13} floated='left' textAlign='center'>
                    <Header as='h1' style={{ fontsize: '5rem' }}>
                        Hey! Glad you stopped by.
                    </Header>
                </Grid.Column>
            </Grid.Row>
                
            <Grid.Row>
                <Grid.Column>
                    <Header as='h2'>
                        I will be a menu component
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
)


export default Navigation;