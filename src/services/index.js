var myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*'
})

const init = {
  method: 'GET',
  headers: myHeaders
}

const url = 'https://silver-clef.glitch.me/ranking'

export const getData = () => fetch(url, init).then(response => response.json())
// export const getData = () => new Promise(r => r(fakeData))

// const fakeData = {
//   '': {},
//   'try harder': {
//     player: 'try harder',
//     classe: 'Bruxo',
//     guild: 'Saints',
//     matou: ['fulano', 'ciclano', 'beltrano'],
//     morreu: ['fulano']
//   },
//   fulano: {
//     player: 'fulano',
//     classe: 'Monge',
//     guild: 'Sorveteria',
//     matou: ['ciclano'],
//     morreu: ['try harder']
//   },
//   ciclano: {
//     player: 'ciclano',
//     classe: 'Cavaleiro',
//     guild: 'Saints',
//     matou: ['beltrano'],
//     morreu: ['try harder', 'fulano']
//   },
//   beltrano: {
//     player: 'beltrano',
//     classe: 'Sacerdote',
//     guild: 'RoyalFlush',
//     matou: [],
//     morreu: ['try harder', 'ciclano']
//   }
// }
