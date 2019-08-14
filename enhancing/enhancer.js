module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.durability + 1
  };
  return newItem;
}

function fail(item) {
  if (item.enhancement < 15) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement -5
    }
    return newItem;
  }
  else if (item.enhancement > 16) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement -1
    }
    return newItem;
  }
  else if (item.enhancement === 15 || 16) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement -10
    }
    return newItem;
  }
}

function repair(item) {
  // const x = item.durability
  // const y = x - 100
  // const z = y + x
  // return {
  //   ...item,
  //   durability: z,
  //   }
  const newItem = { 
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
};

  return newItem;

} 


function get(item) {
  return { ...item };
}
