const Navigation = (props) => {
  const { transition } = props
  
  return (
    <nav>
      <button onClick={() => transition('ABOUT')}>About Me</button>
      <button onClick={() => transition('PROJECTS')}>My Projects</button>
      <button onClick={() => transition('WRITING')}>Writings</button>
      <button onClick={() => transition('RESOURCES')}>Resources</button>
    </nav>
  );
};

export default Navigation;
