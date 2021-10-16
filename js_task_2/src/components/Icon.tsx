const icons: {
  [key: string]: any;
} = {
  Task: <i className='bi bi-basket'></i>,
  'Random Thought': <i className='bi bi-puzzle'></i>,
  Idea: <i className='bi bi-lightbulb'></i>,
  Quote: <i className='bi bi-chat-quote'></i>,
};

interface IconProps {
  category: string;
}

const Icon: React.FC<IconProps> = ({ category }) => {
  return <div className='circle'>{icons[category]}</div>;
};

export default Icon;
