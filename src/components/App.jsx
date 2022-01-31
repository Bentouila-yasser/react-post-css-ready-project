import React from 'react';

export default function App() {
  return (
    <div className='fullcontainer'>
      <div className='container'>
        <nav>
          <div className='logo'>
            <a href='#'>
              <img src='./img/logo.PNG' alt='logo' />
            </a>
          </div>
          <ul className='left'>
            <li>
              <a href='#'>Product</a>
            </li>
            <li>
              <a href='#'>Constomers</a>
            </li>
            <li>
              <a href='#'>Community</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
          </ul>
          <ul className='right'>
            <li>
              <a href='#'>Docs</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>
              <a href='#'>Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
