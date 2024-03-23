import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Empowering trust and collaboration instantly',
    text: 'From fostering genuine connections to nurturing fruitful partnerships, Mediater cultivates trust and productivity. Engage with confidence and unlock endless possibilities',
  },
  {
    title: 'Unleash your potential',
    text: 'Dive into unparalleled support and resources to amplify your impact. With Mediater, seize every opportunity and thrive in your journey',
  },
  {
    title: 'Communication at its finest',
    text: 'Facilitating seamless interactions and fostering understanding, Mediater ensures clarity and efficiency in every exchange. Elevate your conversations and propel your objectives forward.',
  },
  {
    title: 'Elevating standards, igniting progress',
    text: 'Setting new benchmarks and driving innovation, Mediater propels you towards success. Embrace growth and embrace the future with confidence',
  },
];

const Features = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="mediator__features section__padding" id="features" ref={ref}>
      <div className="mediator__features-heading">
        <motion.h1 className="gradient__text" animate={controls} initial="hidden" variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}>
          The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.
        </motion.h1>
        <motion.p animate={controls} initial="hidden" variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}>
          Request Early Access to Get Started
        </motion.p>
      </div>
      <div className="mediator__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
