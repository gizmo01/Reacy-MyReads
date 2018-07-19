import React from 'react'

 export class Shelf extends React.Component {
  render() {
    console.log('Props', this.props);
    if (this.props.mer === 'mangia'){
    return (
       <div>
         <p>Custom Componenttt</p>
       </div>
    );}
    else {
      return (
         <div>
           <p>Cazzottt</p>
         </div>
      );
    }
  }
};
