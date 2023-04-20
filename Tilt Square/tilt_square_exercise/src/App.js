import React, { useState, useEffect, useRef } from 'react';
import styles from './TiltSquare.module.css';
import VanillaTilt from 'vanilla-tilt';

//Tilt options: max = max tilt rotation in degrees, perspective = transform perspective, the lower the more extreme the tilt gets
const vanillaTiltOptions = { max: 25, perspective: 150 };

const TiltSquare = () => {
   //The value of reference is persisted (remains unchanged) between component re-renderings
   //Updating a ref doesn't trigger a component re-rendering
   const tiltRef = useRef(null);

   //State to change values each time the mouse moves
   const [displayValues, setDisplayValues] = useState({});

   useEffect(() => {
      const refVar = tiltRef.current;
      VanillaTilt.init(refVar, vanillaTiltOptions);

      //Add event listener to extract values on tilt change
      refVar.addEventListener('tiltChange', (event) => {
         setDisplayValues(event.detail);
         console.log(JSON.stringify(event.detail, null, 2));
         return () => refVar.vanillaTilt.destroy();
      });
   }, []);

   return (
      <div ref={tiltRef} className={styles.square}>
            <p>percentX: {(displayValues.percentageX ?? 0)?.toFixed(2)}</p>
            <p>percentY: {(displayValues.percentageY ?? 0)?.toFixed(2)}</p>
            <p>Angle: {(displayValues.angle ?? 0)?.toFixed(2)}</p>
            <p>TiltX: {Number(displayValues.tiltX ?? 0)}</p>
            <p>TiltY: {Number(displayValues.tiltY ?? 0)}</p>
      </div>
   );
};

export default TiltSquare;
