import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';

export function App() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  function onSearchInput(search) {
    setSearch(search);
    setPage(1);
    setGallery([]);
  }

  function loadMore() {
    setPage(prev => prev + 1);
  }

  async function fetchData() {
    return fetch(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=29811952-77bff0dc85e47b91b88370210&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => res.json());
  }

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetchData()
        .then(json => {
          setGallery(prev => [...prev, ...json.hits]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [page, search]);

  return (
    <>
      <Searchbar onSubmit={onSearchInput} />
      <div className="wrapper">
        {!!gallery.length && <ImageGallery gallery={gallery} />}
        {loading && <Loader />}
        {!!gallery.length && !loading && <Button onClick={loadMore} />}
      </div>
    </>
  );
}
