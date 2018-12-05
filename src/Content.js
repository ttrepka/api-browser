import axios from 'axios';
import React, { PureComponent } from 'react';

import './Content.css';

class Content extends PureComponent {
  static API_URL = 'https://jsonplaceholder.typicode.com/';

  // mappings to know which value from data to display in the gallery view
  static ENDPOINT_MAPPINGS = { users: 'username', posts: 'title' };

  state = {
    data: null,
    error: null,
    isFetching: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedEndpoint !== this.props.selectedEndpoint) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { selectedEndpoint } = this.props;

    this.setState({ data: null, error: null, isFetching: true });
    try {
      const { data } = await axios.get(`${Content.API_URL}${selectedEndpoint}`);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  render() {
    const { selectedEndpoint } = this.props;
    const { data, error, isFetching } = this.state;

    if (!selectedEndpoint) {
      return <h2>No endpoint selected</h2>;
    }

    const itemKey = Content.ENDPOINT_MAPPINGS[selectedEndpoint];

    return (
      <>
        <h2>{selectedEndpoint}</h2>

        {isFetching && <p>Fetching data...</p>}
        {error && (
          <a className="content-error" onClick={this.fetchData}>
            Failed to fetch data. Click to try again.
          </a>
        )}
        {data && (
          <ul>
            {data.map((item, index) => {
              const value = item[itemKey];

              return <li key={`${value}-${index}`}>{value}</li>;
            })}
          </ul>
        )}
      </>
    );
  }
}

export default Content;
