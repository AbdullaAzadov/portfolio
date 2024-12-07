function App() {
  return <AnimatedCard />;
}

export default App;

import { motion } from 'framer-motion';
import { Button } from './components/ui/button';

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'backIn' }}
      className='bg-white shadow-md rounded-lg p-4'
    >
      <h2 className='text-lg font-bold'>Пример анимации</h2>
      <Button>Кнопка</Button>
      <p className='text-gray-600'>Tailwind + Framer Motion</p>
    </motion.div>
  );
}
