import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
        const [blogs, setBlogs] = useState([
          { title: 'My new website', body: 'lorem ipsum...', author: 'haafeez', id: 1 },
          { title: 'Welcome party', body: 'lorem ipsum...', author: 'idris', id: 2 },
          { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'hadi', id: 3 }
        ]);
    
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs!" />
        </div>
     );
}
 
export default Home;