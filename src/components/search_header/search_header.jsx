import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;

// const Navbar = (props) => (
//   <div className={styles.container}>
//     <form onsubmit={Search()} className={styles.searchForm}>
//       <input type="text" className={styles.search} action=""></input>
//       <button
//         type="submit"
//         //   onClick={if(props.video.channelTitle === )}
//         className={styles.button}
//       ></button>
//     </formb>
//   </div>
// );

// const Search = (props) => {
//     if(props.video.channelTitle === onsubmit.text){

//     }
// }
// export default Navbar;
