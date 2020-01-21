// Let's import React, our styles and React Async
import React from 'react';
import { useAsync } from 'react-async';
import { Table } from 'antd';

import { formatLeagueTableData } from '../utils/formatLeagueTableData';

const columns = [
  {
    title: '',
    dataIndex: 'position'
  },
  {
    title: 'Team',
    dataIndex: 'name',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Played',
    dataIndex: 'played',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Won',
    dataIndex: 'won',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Drawn',
    dataIndex: 'drawn',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Lost',
    dataIndex: 'lost',
    sorter: (a, b) => a.age - b.age,
  },
  // {
  //   title: 'GF',
  //   dataIndex: 'gf',
  //   sorter: (a, b) => a.age - b.age,
  // },
  // {
  //   title: 'GA',
  //   dataIndex: 'ga',
  //   sorter: (a, b) => a.age - b.age,
  // },
  {
    title: 'GD',
    dataIndex: 'gd',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Pts',
    dataIndex: 'points',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Form',
    dataIndex: 'form',
    sorter: (a, b) => a.age - b.age,
  },
];

const loadTeam = async () =>
  await fetch("https://www.api-football.com/demo/api/v2/leagueTable/1")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

// Our component
function LeagueTable() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadTeam })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`

  if (data) {
    const formattedTableData = formatLeagueTableData(data.api.standings[0]);
    return (
      <Table 
        columns={columns} 
        dataSource={formattedTableData} 
        onChange={onChange} 
        pagination={false}
        bordered 
        style={{marginBottom: '40px'}}
      />
    );
  }
}

export default LeagueTable;