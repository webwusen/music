## 创建文件规则
├── page/               # 页面文件夹
│ ├── components/       # 该页面组件文件夹
│ │ └──Component.tsx    # 页面组件文件
│ ├── index.tsx         # 页面文件
│ └── index.module.less # 页面css

## less module 写法
className={`${styles['class']}`}
className={`${flag ? styles['class'] : ''}`}
className={`${styles['class']} ${styles['class2']}`}