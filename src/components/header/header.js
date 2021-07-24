import styles from "./header.css";
import React,{useEffect, useState,useRef} from 'react'


const header = (props) => {

    // const inputRef = useRef();    

      
        //검색처리 
      

    return (
  <header>
    <div className="logo">
      <img src={props.logo} alt="" />
    </div>
    <div className="menu">
      <form onSubmit={props.handleOnsubmit}>
        <input
        // ref={inputRef}
          className="search"
          type="text"
          placeholder="영화 제목 입력..📽"
          value={props.searchTerm}
          onChange={props.handleOnChange}
        />
      </form>
    </div>
  </header>
    );
    }

export default header;
