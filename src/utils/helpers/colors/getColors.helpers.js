export const getColorsByType = (type) => {
   if (type === 'normal')
      return {
         card: 'linear-gradient(#735259, #BA707F)',
         cardHeader:
            'linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)',
         textColor: '#735259',
      };

   if (type === 'fighting')
      return {
         card: 'linear-gradient(#96402A, #E95B36)',
         cardHeader:
            'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)',
         textColor: '#96402A',
      };

   if (type === 'flying')
      return {
         card: 'linear-gradient(#478A93, #8DD6E0)',
         cardHeader:
            'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)',
         textColor: '#478A93',
      };

   if (type === 'poison')
      return {
         card: 'linear-gradient(#5B3184, #C48EF9)',
         cardHeader:
            'linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)',
         textColor: '#5B3184',
      };

   if (type === 'ground')
      return {
         card: 'linear-gradient(#654008, #9C6614)',
         cardHeader:
            'linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)',
         textColor: '#654008',
      };

   if (type === 'rock')
      return {
         card: 'linear-gradient(#7E7E7E, #B9B9BA)',
         cardHeader:
            'linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)',
         textColor: '#7E7E7E',
      };

   if (type === 'bug')
      return {
         card: 'linear-gradient(#4AB648, #C3DEA3)',
         cardHeader:
            'linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)',
         textColor: '#4AB648',
      };

   if (type === 'ghost')
      return {
         card: 'linear-gradient(#323569, #5A61DD)',
         cardHeader:
            'linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)',
         textColor: '#323569',
      };

   if (type === 'steel')
      return {
         card: 'linear-gradient(#5E736C, #9BB7AD)',
         cardHeader:
            'linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)',
         textColor: '#5E736C',
      };

   if (type === 'fire')
      return {
         card: 'linear-gradient(#e6901e, #e75c35)',
         cardHeader:
            'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)',
         textColor: '#e75c35',
      };

   if (type === 'water')
      return {
         card: 'linear-gradient(#83B9FF, #1479FB)',
         cardHeader:
            'linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)',
         textColor: '#1479FB',
      };

   if (type === 'grass')
      return {
         card: 'linear-gradient(#B1DBBC, #C3DEA3)',
         cardHeader:
            'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)',
         textColor: '#416460',
      };

   if (type === 'electric')
      return {
         card: 'linear-gradient(#0C1395, #8E94FE)',
         cardHeader:
            'linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)',
         textColor: '#0C1395',
      };

   if (type === 'psychic')
      return {
         card: 'linear-gradient(#0C1395, #8E94FE)',
         cardHeader:
            'linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)',
         textColor: '#0C1395',
      };

   if (type === 'ice')
      return {
         card: 'linear-gradient(#6FBEDF, #C4EBFB)',
         cardHeader:
            'linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)',
         textColor: '#6FBEDF',
      };

   if (type === 'dragon')
      return {
         card: 'linear-gradient(#478A93, #8DD6E0)',
         cardHeader:
            'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)',
         textColor: '#478A93',
      };

   if (type === 'dark')
      return {
         card: 'linear-gradient(#0B0E0D, #4F4F4F)',
         cardHeader:
            'linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)',
         textColor: '#030706',
      };

   if (type === 'fairy')
      return {
         card: 'linear-gradient(#971B45, #C5597E)',
         cardHeader:
            'linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)',
         textColor: '#971B45',
      };

   return {};
};
