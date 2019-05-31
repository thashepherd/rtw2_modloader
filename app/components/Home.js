// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Form} from 'semantic-ui-react';
import routes from '../constants/routes';
import ModListComponent from './ModListComponent'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Grid container padded>
        <Grid.Column width={9}>
          <Form>
            <Form.Field>
              <label>Path to Rule The Waves 2</label>
              <input placeholder="C:/Program Files (x86)/Rule The Waves 2" />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <ModListComponent />
        </Grid.Column>
      </Grid>
    );
  }
}
