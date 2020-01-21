// Let's import React, our styles and React Async
import React from 'react';
import { useAsync } from 'react-async';

import { Descriptions } from 'antd';

const loadTeam = async () =>
  await fetch("https://www.api-football.com/demo/api/v2/teams/team/1")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function TeamHeader() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadTeam })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`

  const teamData = data.api.teams[0];
  
  // The rendered component
  return (
    <Descriptions title={teamData.name} bordered style={{marginBottom: '40px'}}>
      <Descriptions.Item label="Country">{teamData.country}</Descriptions.Item>
      <Descriptions.Item label="Founded">{teamData.founded}</Descriptions.Item>
      <Descriptions.Item label="Stadium Location">{teamData.venue_address}</Descriptions.Item>
      <Descriptions.Item label="Stadium">{teamData.venue_name}</Descriptions.Item>
      <Descriptions.Item label="Capacity">{teamData.venue_capacity}</Descriptions.Item>
      <Descriptions.Item label="Turf">{teamData.venue_surface}</Descriptions.Item>
    </Descriptions>
  );
}

export default TeamHeader;