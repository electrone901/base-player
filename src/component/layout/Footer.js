/******************************************************************************
Title           : Footer.js
Description     : Footer react component.
******************************************************************************/
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import '../../sass/main.scss';

export default() => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
			Copyright &copy; {new Date().getFullYear()} Baseball
		</footer>
    )
}