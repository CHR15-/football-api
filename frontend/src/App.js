import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import TeamHeader from './components/TeamHeader';
import PageLayout from './components/PageLayout';
import LeagueTable from './components/LeagueTable';
import Fixtures from './components/Fixtures';

import './App.css';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <PageLayout>
      <TeamHeader/>
      <Fixtures/>
      <LeagueTable/>
    </PageLayout>
  );
}

export default App;
