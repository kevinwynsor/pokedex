import styled from 'styled-components';
import { Input } from "antd";

export const Container = styled.div`
  display: flex;
  padding-left: 25px;
  padding-top: 50px;
  height: 91vh;
  width: 500px;
`;

export const RightFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  gap: 10px;
  
`;

export const InputField = styled(Input)`
  height: 35px;
  margin-left: 20px;
  width: 180px;
`;

export const DetailsFlex = styled.div`
  display: flex;
`;

export const TypeFlex = styled.div`
  display: flex;
  width: 125px;
`;

export const InputFlex = styled.div`
  display: flex;
`;

export const LeftFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftFlexUpper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 250px;
  width: 250px;
  background-color: #b7b7b7;
`;

export const LeftFlexLower = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 15px;
`;

export const Text1 = styled.p`
  font-weight: bold;
  font-size: 250%;
`;

export const Text2 = styled.p`
  font-size: 175%;
`;

export const StatsText = styled.p`
  font-size: 175%;
  margin-bottom: 0;
`;