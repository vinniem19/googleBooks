import React from 'react';

class Card extends React.Component {
    
    render() {

        

        return(
            <div>
<div className="row">
<h4 className="header left">Saved Books</h4>
</div>
<div className="row">
<div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://lorempixel.com/100/190/nature/6" alt="nature" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div className="card-action">
          
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

        );
    }
}

export default Card;