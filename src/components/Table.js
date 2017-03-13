import React, { Component } from 'react';
import '../stylesheets/Table.css';

class Table extends Component {
  render() {

    var testStyle1 = {
      order: 1
    };

    var testStyle2 = {
      order: 2
    };

    var testStyle3 = {
      order: 3
    };

    var testStyle4 = {
      order: 4
    };

    var testStyle5 = {
      order: 5
    };

    return (
      <div>
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-cell Rtable-cell--head">P25-54</div>
          <div className="Rtable-cell Rtable-cell--head">Radio 100 GRPs</div>
          <div className="Rtable-cell Rtable-cell--head">TV 100 GRPs</div>
          <div className="Rtable-cell Rtable-cell--head">Radio 130 GRPs</div>
          <div className="Rtable-cell Rtable-cell--head Rtable-cell--foot">Radio 170 GRPs</div>

          <div className="Rtable-cell Rtable-cell--row">Spots</div>
          <div className="Rtable-cell">168</div>
          <div className="Rtable-cell">307</div>
          <div className="Rtable-cell">216</div>
          <div className="Rtable-cell Rtable-cell--foot">264</div>

          <div className="Rtable-cell Rtable-cell--row">GR Imp</div>
          <div className="Rtable-cell">898,900</div>
          <div className="Rtable-cell">1,529,000</div>
          <div className="Rtable-cell">1,168,600</div>
          <div className="Rtable-cell Rtable-cell--foot">1,528,100</div>

          <div className="Rtable-cell Rtable-cell--row">Reach %</div>
          <div className="Rtable-cell">46.80%</div>
          <div className="Rtable-cell">49.70%</div>
          <div className="Rtable-cell">52.30%</div>
          <div className="Rtable-cell Rtable-cell--foot">57.1%</div>

          <div className="Rtable-cell Rtable-cell--row">Frequency</div>
          <div className="Rtable-cell">2.1</div>
          <div className="Rtable-cell">2</div>
          <div className="Rtable-cell">2.5</div>
          <div className="Rtable-cell Rtable-cell--foot">3</div>
        </div>

        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div style={testStyle1} className="Rtable-cell Rtable-cell--head">P25-54</div>
          <div style={testStyle2} className="Rtable-cell Rtable-cell--head">Radio 100 GRPs</div>
          <div style={testStyle3} className="Rtable-cell Rtable-cell--head">TV 100 GRPs</div>
          <div style={testStyle4} className="Rtable-cell Rtable-cell--head">Radio 130 GRPs</div>
          <div style={testStyle5} className="Rtable-cell Rtable-cell--head">Radio 170 GRPs</div>

          <div style={testStyle1} className="Rtable-cell Rtable-cell--row">Spots</div>
          <div style={testStyle2} className="Rtable-cell">168</div>
          <div style={testStyle3} className="Rtable-cell">307</div>
          <div style={testStyle4} className="Rtable-cell">216</div>
          <div style={testStyle5} className="Rtable-cell Rtable-cell--foot">264</div>

          <div style={testStyle1} className="Rtable-cell Rtable-cell--row">GR Imp</div>
          <div style={testStyle2} className="Rtable-cell">898,900</div>
          <div style={testStyle3} className="Rtable-cell">1,529,000</div>
          <div style={testStyle4} className="Rtable-cell">1,168,600</div>
          <div style={testStyle5} className="Rtable-cell Rtable-cell--foot">1,528,100</div>

          <div style={testStyle1} className="Rtable-cell Rtable-cell--row">Reach %</div>
          <div style={testStyle2} className="Rtable-cell">46.80%</div>
          <div style={testStyle3} className="Rtable-cell">49.70%</div>
          <div style={testStyle4} className="Rtable-cell">52.30%</div>
          <div style={testStyle5} className="Rtable-cell Rtable-cell--foot">57.1%</div>

          <div style={testStyle1} className="Rtable-cell Rtable-cell--row">Frequency</div>
          <div style={testStyle2} className="Rtable-cell">2.1</div>
          <div style={testStyle3} className="Rtable-cell">2</div>
          <div style={testStyle4} className="Rtable-cell">2.5</div>
          <div style={testStyle5} className="Rtable-cell Rtable-cell--foot">3</div>
        </div>
      </div>
    )
  }
}

export default Table;
