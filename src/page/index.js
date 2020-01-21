
import myStyles from './index.css';

const lang = window.navigator.language;
/* index.jsx */
export default () => {
  const helloworld = lang === 'en-US' ? 'hello world' : '你好';
  return (
    <div className={myStyles.hello}>{helloworld}</div>
  );
};
