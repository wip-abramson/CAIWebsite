/**
 * Created by will on 10/01/19.
 */
import React from 'react';
import Feature from './Feature';

const OnePlanetAreaList = ({onePlanetAreas}) => {
  return (<div>
    <header className="major">
      <h2>One Planet Living Framework</h2>
      <p>We use the <a href="https://www.bioregional.com/one-planet-living" target="_blank" className="link">One Planet Living framework</a> to organise and plan our projects within the local community. They are split up into one of these 10 categories.</p>
    </header>
    <ul className="features oneplanet">
      {onePlanetAreas.map(edge => {
        console.log(edge);
        return (
        <Feature
          url={"oneplanet/" + edge.node.path}
          blurb={edge.node.description}
          iconStyle={edge.node.style}
          title={edge.node.area}
          icon={edge.node.icon}
        />)})}
    </ul>
  </div>)
};

export default OnePlanetAreaList;