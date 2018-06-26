const object = {
  name1:'Vitaly',
  name2:'Kuzmenka',
  location: {
    town: 'Minsk',
    address: '30 let pobedy',
  }
}

const arr = [1,2, undefined ,4];

const { name1 } = object;
const { town:customName = 'ndndnnd' } = object.location;

const [one, two, fff='ssss', four] = arr;

console.log(one, two, four, fff);