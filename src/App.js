import React from 'react';
import styles from './App.module.css';
import { fetchData } from './Api';
import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchDatas = await fetchData();
    this.setState({ data: fetchDatas });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
