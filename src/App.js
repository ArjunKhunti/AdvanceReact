import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
