import React, { useRef } from "react";
import styles from '../styles/videoHeader.module.css';

const VideoHeader = ({ onSearch }) => {

  const inputRef = useRef();

  const onKeyPress = event => {
    if (event.key == 'Enter') {
      onSearch(inputRef.current.value);
      inputRef.current.value = '';
    }
    
  };

  const onClick = () => {
    onSearch(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo"/>
        <h1>Youtube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search" onKeyPress={onKeyPress}/>
      <button className={styles.button} type="button" onClick={onClick}>
        <img src="/images/search.png" alt="search"/>
      </button>
    </header>
  );
}

export default VideoHeader;