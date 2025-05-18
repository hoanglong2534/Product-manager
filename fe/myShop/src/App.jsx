import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return (
    <Layout>
      <AppHeader />
      <ProductList />
      <AppFooter />
    </Layout>
  );
}

export default App;
