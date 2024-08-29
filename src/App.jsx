import React, { useRef, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const cubeRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const handleNextClick = () => {
    cubeRef.current.classList.add(styles.animate);
    setCurrentSlide( currentSlide - 1);
    setTimeout(() => {
      cubeRef.current.classList.remove(styles.animate);
    }, 300);
  };

  const handlePrevClick = () => {
    cubeRef.current.classList.add(styles.animateInv);
    setCurrentSlide( currentSlide + 1);
    setTimeout(() => {
      cubeRef.current.classList.remove(styles.animateInv);
    }, 300);
  };

  const cubeStyles = {
    transform: `rotateY(${(currentSlide - 1) * 90}deg)`,
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.cube} ref={cubeRef} style={cubeStyles}>
        <div className={styles.slide}>Slide 1</div>
        <div className={styles.slide}>Slide 2</div>
        <div className={styles.slide}>Slide 3</div>
        <div className={styles.slide}>Slide 4</div>
      </div>
      <button className={styles.next} ref={nextButtonRef} onClick={handleNextClick}>Next</button>
      <button className={styles.prev} ref={prevButtonRef} onClick={handlePrevClick}>Prev</button>
    </div>
  );
}