import React from 'react';
import { Link } from 'react-router';
class component1 extends React.Component {
    render() {
        return(
          <div>
            <p>
              <Link to ="/createGroup"> Component1 </Link> 
             </p>
          </div>
        );
    }
} 
export default component1 ;