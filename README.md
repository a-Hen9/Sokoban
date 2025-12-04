# Sokoban Master (推箱子大师)

<<<<<<< HEAD
Sokoban Master 是经典益智游戏“推箱子”的现代化重制版。项目使用 React、TypeScript 和 Tailwind CSS 构建，拥有精美的 UI、流畅的动画效果以及精心挑选的关卡。
=======
Sokoban Master 是经典益智游戏“推箱子”的现代化重制版。项目使用 React、TypeScript 和 Tailwind CSS 构建，拥有精美的暗色系 UI、流畅的动画效果以及精心挑选的关卡。
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74

## 🎮 功能特性

- **多难度选择**：内置简单（Easy）、中等（Medium）、困难（Hard）三个难度的精选关卡。
- **现代化界面**：使用 Tailwind CSS 打造的响应式设计，完美适配桌面端和移动端。
- **核心机制**：
  - **撤销 (Undo)**：支持无限步数的撤销功能，不用担心手滑。
  - **重置 (Reset)**：一键重新开始当前关卡。
  - **步数统计**：实时记录通关步数。
- **操作方式**：
  - **桌面端**：支持键盘方向键及 WASD 操作。
  - **移动端**：提供屏幕虚拟方向键。
- **视觉反馈**：清晰的网格显示、动态的目标点提示以及胜利结算画面。

## 🛠 技术栈

- **前端框架**: React 19
- **开发语言**: TypeScript
- **样式库**: Tailwind CSS
- **图标库**: Lucide React
- **构建工具**: Vite / Webpack (取决于您的环境配置)

## 🚀 快速开始

### 环境要求

- Node.js (v16 或更高版本)
- npm 或 yarn

### 安装与运行

1.  **克隆项目**
    ```bash
<<<<<<< HEAD
    git clone https://github.com/a-Hen9/Sokoban.git
=======
    git clone <repository-url>
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
    cd sokoban-master
    ```

2.  **安装依赖**
    ```bash
    npm install
    # 或者
    yarn install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    # 或者
    npm start
    ```

4.  **访问游戏**
    打开浏览器访问 `http://localhost:3000` (或控制台提示的端口)。

## 🕹 游戏规则

**目标**:
控制仓库管理员 (`@`)，将所有的箱子 (`$`) 推到指定的目标点 (`.`) 上。

**规则**:
1.  **只能推**: 箱子只能被推动，不能被拉动。
2.  **一次一个**: 一次只能推动一个箱子。
3.  **障碍物**: 箱子不能被推入墙壁 (`#`) 或其他箱子中。
4.  **胜利条件**: 当所有目标点都被箱子覆盖（箱子变绿）时，关卡通过。

## ⌨️ 操作说明

| 动作 | 键盘 (桌面端) | 屏幕按钮 (移动端) |
| :--- | :--- | :--- |
| **向上移动** | `↑` 或 `W` | 上箭头按钮 |
| **向下移动** | `↓` 或 `S` | 下箭头按钮 |
| **向左移动** | `←` 或 `A` | 左箭头按钮 |
| **向右移动** | `→` 或 `D` | 右箭头按钮 |
| **撤销** | `Ctrl + Z` | Undo 按钮 |

## 📂 目录结构

```text
/
├── index.html          # 入口 HTML
├── index.tsx           # React 入口文件
├── App.tsx             # 主应用组件
├── types.ts            # TypeScript 类型定义
├── constants.ts        # 关卡数据与配置
├── utils/
│   └── gameLogic.ts    # 游戏核心逻辑（移动判定、胜利检测）
<<<<<<< HEAD
└── components/
    ├── GameCell.tsx    # 网格单元格组件
    ├── Controls.tsx    # 控制面板组件
    └── Instructions.tsx # 说明弹窗组件
=======
├── components/
│   ├── GameCell.tsx    # 网格单元格组件
│   ├── Controls.tsx    # 控制面板组件
│   └── Instructions.tsx # 说明弹窗组件
└── services/
    └── geminiService.ts # (已弃用) AI 服务相关
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
```

## 📝 开源协议

MIT License
