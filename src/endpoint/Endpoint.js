import axios from 'axios';
import React, { PureComponent } from 'react';

import Gallery from './Gallery';

class Endpoint extends PureComponent {
  static API_URL = 'https://jsonplaceholder.typicode.com/';

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
      const { data } = await axios.get(`${Endpoint.API_URL}${selectedEndpoint}`);
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

    return (
      <>
        <h2>{selectedEndpoint}</h2>

        {isFetching && <p>Fetching data...</p>}
        {error && (
          <span className="error-message" onClick={this.fetchData}>
            Failed to fetch data. Click to try again.
          </span>
        )}
        {data && <Gallery data={data} endpoint={selectedEndpoint} />}
      </>
    );
  }
}

export default Endpoint;
