import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';



class Saved extends React.Component {

    state = {
        books: []
      };

    render() {
    
return(
<div>
    <Navbar />
    {
        
        this.state.books.map(newBooks =>
            
    <Card 
    title={newBooks}/>
    )}

</div>

);
}
}

export default Saved;