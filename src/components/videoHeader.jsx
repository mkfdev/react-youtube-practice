import React, { memo, useRef } from "react";
import styles from '../styles/videoHeader.module.css';

const VideoHeader = memo(({ onSearch, goHome }) => {
    const inputRef = useRef();

    const handleSearch = () => {
      onSearch(inputRef.current.value);
      inputRef.current.value = '';
    };

    const onKeyPress = event => {
      if (event.key === 'Enter') {
        handleSearch(); 
        return;
      }
    };

    return (
      <header className={styles.header}>
        <div onClick={() => goHome()} className={styles.logo}>
          <img className={styles.logoImg} src="/images/logo.png" alt="logo"/>
          <h1>Youtube</h1>
        </div>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search" onKeyPress={onKeyPress}/>
        <button className={styles.button} type="button" onClick={handleSearch}>
          <img src="/images/search.png" alt="search"/>
        </button>
      </header>
    );
  }
);

export default VideoHeader;