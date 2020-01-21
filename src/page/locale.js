// 对应课程参考代码中的 src/page/locale.js
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, LocaleProvider } from 'antd';

export default () => {
  return (
    <LocaleProvider locale={zhCN}>
      <DatePicker />
    </LocaleProvider>
  )
}