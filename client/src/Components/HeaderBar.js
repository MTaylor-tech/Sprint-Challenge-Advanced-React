import React, {useEffect} from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export default function HeaderBar(props) {
    const [favorites, setFavorites] = useLocalStorage("favorites",[]);

    useEffect(()=>{
      setFavorites(props.favorites);
    },[props.favorites]);

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
