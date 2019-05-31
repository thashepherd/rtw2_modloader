// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class ModListComponent extends Component<Props> {
  props: Props;

  // getAvailableMods = () => {
  //   fs.readDir('C:\Users\malioto\Dropbox\Rule the Waves 2\mods', function(dir) {
  //     for(let filePath of dir) {
  //       console.log(filePath);
  //     }
  //   });
  // }

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    return (
      <Fragment>
        PLACEHOLDER FOR MOD LIST
        {/* {this.getAvailableMods()} */}
      </Fragment>
    );
  }
}
