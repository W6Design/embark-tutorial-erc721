import React, { Fragment, Component } from 'react';
import Toggle from 'react-toggle'
import ShipList from './shipList.js'

class MarketPlace extends Component {

    constructor(props) {
      super(props);
    }

    render(){
      const {list, onAction} = this.props;
      return <div id="marketplace">
            <ShipList title="Marketplace" id="marketlist" list={list} onAction={onAction} wallet={false} marketplace={true} />
        </div>;
    }
  }
  
  export default MarketPlace;
  