import { baseURLS } from './constants/baseURLS';
import { userValidation } from './helpers/validations/userValidation.helpers';
import { pokemonValidation } from './helpers/validations/pokemonValidation.helper';
import { toLowerCase } from './helpers/textFormat/toLowerCase.helpers';
import { getURL } from './helpers/urlGenerator/getURL';
import { capitalLetter } from './helpers/textFormat/capitalLetter';
import { typesFormat } from './helpers/textFormat/typesFormat';
import {
   getByPokemonTypes,
   getPokemons,
   getByPokemon,
} from './helpers/urlGenerator';
import {
   getOffset,
   getTotalPages,
   getPaginationRange,
} from './helpers/pagination/pagination';
import { getColorsByType } from './helpers/colors/getColors.helpers';

export {
   baseURLS,
   userValidation,
   pokemonValidation,
   toLowerCase,
   getURL,
   capitalLetter,
   typesFormat,
   getByPokemonTypes,
   getPokemons,
   getOffset,
   getTotalPages,
   getPaginationRange,
   getByPokemon,
   getColorsByType,
};
