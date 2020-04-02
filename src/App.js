import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from './hocs/layout/layout-component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <Layout>
        <HomePage></HomePage>
    </Layout>
  );
}

export default App;
