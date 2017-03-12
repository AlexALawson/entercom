import React, { Component } from 'react';
import '../stylesheets/Table.css';

class Table extends Component {
  render() {
    return (
      <div className="Rtable Rtable--5cols">

        <div className="Rtable-cell">P25-54</div>
        <div className="Rtable-cell">Radio 100 GRPs</div>
        <div className="Rtable-cell">TV 100 GRPs</div>
        <div className="Rtable-cell">Radio 130 GRPs</div>
        <div className="Rtable-cell">Radio 170 GRPs</div>

        <div className="Rtable-cell">Spots</div>
        <div className="Rtable-cell">168</div>
        <div className="Rtable-cell">307</div>
        <div className="Rtable-cell">216</div>
        <div className="Rtable-cell">264</div>

        <div className="Rtable-cell">GR Imp</div>
        <div className="Rtable-cell">898,900</div>
        <div className="Rtable-cell">1,529,000</div>
        <div className="Rtable-cell">1,168,600</div>
        <div className="Rtable-cell">1,528,100</div>

        <div className="Rtable-cell">Reach %</div>
        <div className="Rtable-cell">46.80%</div>
        <div className="Rtable-cell">49.70%</div>
        <div className="Rtable-cell">52.30%</div>
        <div className="Rtable-cell">57.1%</div>

        <div className="Rtable-cell">Frequency</div>
        <div className="Rtable-cell">2.1</div>
        <div className="Rtable-cell">2</div>
        <div className="Rtable-cell">2.5</div>
        <div className="Rtable-cell">3</div>

      </div>
    )
  }
}

export default Table;
