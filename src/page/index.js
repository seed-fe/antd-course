import {
  FormattedMessage,
  formatMessage,
} from 'umi/locale';
// src/page/HelloWorld.js
console.log(formatMessage(
  {
    id: 'helloworld',
  },
));
export default () => {
  return <div><FormattedMessage id="helloworld" /></div>;
}