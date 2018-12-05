import axios from 'axios';
import get from 'lodash/get';
import React, { PureComponent } from 'react';

import Filters from './Filters';
import Gallery from './Gallery';

class Endpoint extends PureComponent {
  static API_URL = 'https://jsonplaceholder.typicode.com/';

  state = {
    data: null,
    error: null,
    filterField: '',
    filterValue: '',
    isFetching: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { selectedEndpoint } = this.props;

    this.setState({ data: null, error: null, isFetching: true });
    try {
      const { data } = await axios.get(`${Endpoint.API_URL}${selectedEndpoint}`);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  filterData = item => {
    const { filterField, filterValue } = this.state;

    if (!filterField || !filterValue) {
      return true;
    }

    const itemValue = get(item, filterField);
    const filterRegex = new RegExp(filterValue, 'i');

    return typeof itemValue !== 'undefined' && itemValue.toString().match(filterRegex);
  };

  getFilterKeys(item) {
    let keys = [];

    for (let key in item) {
      if (typeof item[key] === 'object') {
        const subkeys = this.getFilterKeys(item[key]);
        keys = [...keys, ...subkeys.map(subkey => `${key}.${subkey}`)];
      } else {
        keys.push(key);
      }
    }
    return keys;
  }

  onFilterChange = (filterField, filterValue) => {
    this.setState({ filterField, filterValue });
  };

  render() {
    const { selectedEndpoint } = this.props;
    const { data, error, isFetching } = this.state;

    const filteredData = data && data.filter(this.filterData);

    return (
      <>
        {isFetching && <p>Fetching data...</p>}
        {error && (
          <span className="error-message" onClick={this.fetchData}>
            Failed to fetch data. Click to try again.
          </span>
        )}
        {data && (
          <>
            <Filters filters={this.getFilterKeys(data[0])} onFilterChange={this.onFilterChange} />
            {filteredData.length ? (
              <Gallery data={filteredData} endpoint={selectedEndpoint} />
            ) : (
              <p>No data matching your filter</p>
            )}
          </>
        )}
      </>
    );
  }
}

export default Endpoint;
