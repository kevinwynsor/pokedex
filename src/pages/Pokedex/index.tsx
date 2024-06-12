import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { Input, Image } from "antd";
import axios from "axios";

function Pokedex() {
  const { id } = useParams();

  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [ability, setAbility] = useState("");
  const [formUrl, setFormUrl] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setFormUrl(result.data.forms[0].url);

      if (result.data.types.length === 2) {
        let arr = [];
        arr.push(result.data.types[0].type.name);
        arr.push(result.data.types[1].type.name);
        const string = arr.toString();
        setType(string);
      }

      if (result.data.types.length === 1) {
        setType(result.data.types[0].type.name);
      }

      if (result.data.abilities.length === 2) {
        let arr = [];
        arr.push(result.data.abilities[0].ability.name);
        arr.push(result.data.abilities[1].ability.name);
        const string = arr.toString();
        setAbility(string);
      }

      if (result.data.abilities.length === 1) {
        setAbility(result.data.abilities[0].ability.name);
      }

      setHp(result.data.stats[0].base_stat);
      setAttack(result.data.stats[1].base_stat);
      setDefense(result.data.stats[2].base_stat);
      setSpecialAttack(result.data.stats[3].base_stat);
      setName(result.data.name);

      const name = 'eve'
      var name2 = ''
      const arr1 = []
      
      for(let i=name.length; i >= 0; i--){
        arr1.push(name.charAt(i))
        name2 = arr1.toString().replaceAll(',', '')
      }
      if(name == name2){
        console.log('same')
      } else{
        console.log('not same')
      }

      fetchImg();
    };

    const fetchImg = async () => {
      console.log(formUrl);
      const result = await axios(`${formUrl}`);
      setPokemonUrl(result.data.sprites.front_default);
    };

    fetchData();
  });

  return (
    <>
      <S.Container>
        <S.LeftFlex>
          <S.LeftFlexUpper>
            <Image
              width={250}
              src={`${pokemonUrl}`}
            />
          </S.LeftFlexUpper>
          <S.LeftFlexLower>
            <S.StatsText>Stats</S.StatsText>
            <Input placeholder={`Hp: ${hp}`} disabled={true} />
            <Input placeholder={`Attack: ${attack}`} disabled={true} />
            <Input placeholder={`Defense: ${defense}`} disabled={true} />
            <Input
              placeholder={`Special Attack: ${specialAttack}`}
              disabled={true}
            />
          </S.LeftFlexLower>
        </S.LeftFlex>

        <S.RightFlex>
          <S.DetailsFlex>
            <S.TypeFlex>
              <S.Text1>Name</S.Text1>
            </S.TypeFlex>

            <S.InputFlex>
              <S.InputField placeholder={`${name}`} disabled={true} />
            </S.InputFlex>
          </S.DetailsFlex>

          <S.DetailsFlex>
            <S.TypeFlex>
              <S.Text2>Type</S.Text2>
            </S.TypeFlex>

            <S.InputFlex>
              <S.InputField placeholder={`${type}`} disabled={true} />
            </S.InputFlex>
          </S.DetailsFlex>

          <S.DetailsFlex>
            <S.TypeFlex>
              <S.Text2>Abilities</S.Text2>
            </S.TypeFlex>

            <S.InputFlex>
              <S.InputField placeholder={`${ability}`} disabled={true} />
            </S.InputFlex>
          </S.DetailsFlex>
        </S.RightFlex>
      </S.Container>
    </>
  );
}

export default Pokedex;
