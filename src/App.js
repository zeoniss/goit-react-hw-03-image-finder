import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal';

import './App.css';
import apiFetchImages from './services/api';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    largeImageUrl: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  imageHandler = largeImageURL => {
    this.setState({ largeImageUrl: [largeImageURL] });
    this.togelmodal();
  };

  togelmodal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  fetchImages = () => {
    this.setState({ isLoading: true });
    apiFetchImages(this.state.searchQuery, this.state.currentPage)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} onClick={this.imageHandler} />
        {this.state.isLoading && (
          <Loader
            type="Bars"
            color="Purple"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.images.length > 0 && !this.state.isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {this.state.showModal && (
          <Modal url={this.state.largeImageUrl} onClose={this.togelmodal} />
        )}
      </div>
    );
  }
}

export default App;
