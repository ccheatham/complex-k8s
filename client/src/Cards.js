import React, { Component } from 'react';
import axios from 'axios';

import './Cards.css';

class Cards extends Component {
  state = {
    seenIndexes: [],
    cards: { creditCards: []},
    custId: null,
    count: 0
  };

  componentDidMount() {
    this.fetchCount();
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { data: cards } = await axios.post('/mfapi/creditcardsservice', {
      custId: this.state.custId
    });

    await this.addCustUsed(this.state.custId);
    await this.fetchCount();

    this.setState({ cards })
  };

  renderValues() {
    const entries = [];

    for (let key in this.state.cards.creditCards) {
      entries.push(
        <div key={key}>
          <br />
          Card Number {this.state.cards.creditCards[key].cardNumber}
          Card Type {this.state.cards.creditCards[key].cardType}
        </div>
      );
    }

    return entries;
  }

  renderCount = () => {
    return <div style={{ padding: "0 0 30px 0", color: "cornflowerblue" }}><br />This has been used <span>{this.state.count}</span> times.<br /></div>
  }

  async fetchCount() {
    const values = await axios.get('/api/ccuses/count');
    this.setState({ count: values.data[0].count });
  }

  async addCustUsed(custId) {
    const values = await axios.post('/api/ccuses', {
      used: custId
    });
  }

  render() {
    return (
      <div>
        {this.renderCount()}
        <form onSubmit={this.handleSubmit}>
          <label>Enter Customer ID:</label>
          <input
            value={this.state.custId}
            onChange={event => this.setState({ custId: event.target.value })}
          />
          <button>Get Cards</button>
        </form>
        <h3>Customer Credit Cards</h3>
        <div className='Card-Item'>
          {this.renderValues()}
        </div>
      </div>
    );
  }
}

export default Cards;
