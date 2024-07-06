// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

// 导入样式
import './index.css'
const style = {
    color: 'red',
    fontSize: '50px',
};

function App() {

  return (
    <div className="App">
        {/*行内控制*/}
        <span style={{color: 'red', fontSize: '50px'}}>this is span</span>
        <span style={style}>this is span</span>
        {/*通过 class 类名控制*/}
        <span className='foo'>this is foo</span>
    </div>
  );
}

export default App;
