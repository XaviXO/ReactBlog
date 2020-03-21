import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../assets/icons/mitbus.jpg')} alt=""/>
            </div>
            <div style={{textAlign: 'center'}}>
                <span>Featured</span>
                <h2>Military to Civilian</h2>
                <span>posted on November 05, 2016 by Jaiver Calderon</span>
                <p>Though my time in service has ended I am Marine and always will be a Marine. Transitioning into Civilian life, has been a wild ride from Selling lambourghinis to working in the in the Worlds Greatest NightClubs to Mobile Engineering in developing Apps and Website in Silicon Valley</p>
                    
            </div>
        </Card>
    </div>
   )

 }

export default RecentPosts