import { GETBY } from '.';
import { baseURLS } from '../../constants/baseURLS';

export const getURL = (getBy) => {
   switch (getBy.type) {
      case GETBY.pokemons:
         return baseURLS.allPokemons;

      case GETBY.pokemon:
         return baseURLS.pokemon + getBy.payload;

      case GETBY.pokemonTypes:
         return baseURLS.pokemonTypes + getBy.payload;

      default:
         return baseURLS.allPokemons;
   }
};
