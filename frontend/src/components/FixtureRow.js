import React from 'react';
import { Card, Col } from 'antd';

export const FixtureRow = (props) => {
  if (!props.future) {
    return (
      <Col span={6}>
        <Card bordered={true}>
          <img src={props.game.homeTeam.logo} className='team-logo'/> {props.game.homeTeam.team_name} <span>{props.game.goalsHomeTeam}</span>
          <br/>
          <img src={props.game.awayTeam.logo} className='team-logo'/> {props.game.awayTeam.team_name} <span>{props.game.goalsAwayTeam}</span>
          <br/>
          {props.game.event_date}
        </Card>
      </Col>
    )
  }

  return (
    <Col span={6}>
      <Card bordered={true}>
        <img src={props.game.homeTeam.logo} className='team-logo'/> {props.game.homeTeam.team_name}
        <br/>
        <img src={props.game.awayTeam.logo} className='team-logo'/> {props.game.awayTeam.team_name}
        <br/>
        {props.game.event_date}
      </Card>
    </Col>
  )
}