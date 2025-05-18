import { Layout } from 'antd';
const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="bg-[#212121] flex items-center justify-center h-20 sticky top-0 z-10  opacity-95 ">
      <span className="text-white text-4xl font-semibold">HOLO</span>
    </Header>
  );
}