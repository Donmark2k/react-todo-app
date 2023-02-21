import React, { useState } from 'react';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    useEffect(() => {
        document.title = `Current state value: ${dropdown}`;
      }, [dropdown]);

    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
          <button onClick={() => setDropdown(!dropdown)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )}
          </li>
        </ul>
      </nav>
    );
  };
  export default Navbar;
  