import { motion } from 'framer-motion';
import { asset } from '../../utils/asset';
import Section from './Section';

const Egg = () => {
  return (
    <Section verticalSpacing="lg" className="md:pb-8">
      <motion.video
        animate={{ y: [0, 24] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0,
          ease: 'easeInOut',
          repeatType: 'reverse',
        }}
        autoPlay
        loop
        muted
        playsInline
        poster={asset('/images/egg.png')}
        className="z-10 h-80 w-80 overflow-hidden md:h-[480px] md:w-[480px]"
      >
        <source src={asset('/videos/eggVideo.mp4')} type="video/mp4" />
      </motion.video>
    </Section>
  );
};

export default Egg;
