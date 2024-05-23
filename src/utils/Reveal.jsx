import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

Reveal.propTypes = {
  children: PropTypes.node
};

function Reveal({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
        }
    },[isInView, mainControls])

  return (
    <div ref={ref}>
    <motion.div
    variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5}}
    >
        {children}
    </motion.div>
    </div>
  )
}

export default Reveal