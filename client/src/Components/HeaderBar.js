import React from 'react';

export default class HeaderBar extends React.Component {

  render(){
    return (
      <thead>
        <tr>
          <th>Favorite</th>
          <th>Rank</th>
          <th>Name</th>
          <th>Country</th>
          <th>Number of Searches</th>
        </tr>
      </thead>
    );
  }

}
