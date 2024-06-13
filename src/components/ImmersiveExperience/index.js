import React from 'react';
import styles from './index.module.css';

const ImmersiveExperience = () => {
  const ExpCard = ({ exp }) => {
    const handleClick = () => {
      // Handle click animation here
    };

    return (
      <div className={styles.expCard} style={{ backgroundImage: `url(${exp.url})` }} onClick={handleClick}>
        <div className={styles.upper}></div>
        <div className={styles.hoverName}>{exp.name}</div>
        <div className={styles.lower}></div>
        <p className={styles.expName}>{exp.name}</p>
      </div>
    );
  };

  const demoData = [
    {
      name: 'Art',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121490/art_fhuhl5.jpg',
    },
    {
      name: 'Heritage',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121492/heritage_znkgrh.jpg',
    },
    {
      name: 'Adventure',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121492/adventure_hbiii9.jpg',
    },
    {
      name: 'Museum',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121490/museum_vcamnm.jpg',
    },
    {
      name: 'Spiritual',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121489/spiritual_ykcpuo.jpg',
    },
    {
      name: 'Luxury',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121490/luxury_gjapev.jpg',
    },
    {
      name: 'Food and Cuisine',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121491/foodAndCuisine_vj0mjo.jpg',
    },
    {
      name: 'Nature and Wildlife',
      url: 'https://res.cloudinary.com/djlhr4ycg/image/upload/v1718121488/natureandwildlife_jtf7a2.jpg',
    },
  ];

  return (
    <div className={styles.experience}>
      <h1 className={styles.heading}>Immersive Experience</h1>
      <p className={styles.subheading}>In the land of opulence, let loose and discover yourself</p>
      <div className={styles.experienceCards}>
        {demoData.map((exp, index) => (
          <ExpCard exp={exp} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ImmersiveExperience;