import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <Row gutter={[10, 40]}>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary" size="large" href="pokedex/1">Pokemon 1</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/2">Pokemon 2</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/3">Pokemon 3</S.StyledButton>
        </Col>

        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/4">Pokemon 4</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/5">Pokemon 5</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/6">Pokemon 6</S.StyledButton>
        </Col>

        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/7">Pokemon 7</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/8">Pokemon 8</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/9">Pokemon 9</S.StyledButton>
        </Col>

        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/10">Pokemon 10</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/11">Pokemon 11</S.StyledButton>
        </Col>
        <Col className="gutter-row" span={8}>
          <S.StyledButton type="primary"  size="large" href="pokedex/12">Pokemon 12</S.StyledButton>
        </Col>
      </Row>
    </S.Container>
  );
}

export default Home;
