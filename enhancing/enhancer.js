module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const x = item.durability
  const y = x - 100
  const z = y + x
  return {
    ...item,
    durability: z,
    }
  } 


function get(item) {
  return { ...item };
}
