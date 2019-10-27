import React, { Component } from 'react';
import MyButton from '../utils/MyButton'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
      state = {
            discountStart: 0,
            discountEnd: 30
      }
      porcentage = () => {
            if(this.state.discountStart < this.state.discountEnd ){
                  this.setState({
                        discountStart: this.state.discountStart + 1
                  })
            }
      }
      componentDidUpdate(){
            setTimeout(() => {
                  this.porcentage()
            }, 30)
      }
      render() {
            return (
                  <div className="center_wrapper">
                        <div className="discount_wrapper">
                              <Fade onReveal={() => this.porcentage()}>
                              <div className="discount_porcentage">
                                    <span>{this.state.discountStart}%</span>
                                    <span>Off</span>
                              </div>
                              </Fade>
                              <Slide right>
                              <div className="discount_description">
                                    <h3>Purchase Tickets before 15th Nov</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <MyButton text="Purchase Ticket" bck="#ffa800" color="#ffffff" link="#" />
                              </div>
                              </Slide>
                        </div>
                  </div>
            );
      }
}

export default Discount;