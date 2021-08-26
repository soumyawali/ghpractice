const product = {
  label:'Flower',
  type:'',
  price:500,
  stock:201,
  rating:4.5
};

//destructuring
const transaction = (type, {label,stock=0}) => {
  console.log(type,label,stock);
};
transaction('order',product);