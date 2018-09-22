class Products {
  constructor(data) {
    data.results = data.results.slice(0, 4);
    this.items = data.results.map(i => {
      return new Item(i.id, i.title, i.description, i.thumbnail, i.condition, i.currency_id,
                  i.price)
    });
  };       
};

class Item {
  constructor(id, title, description, picture, condition, currency, 
            amount, sold_quantity) {
    this.id = id;
    this.title = title;
    this.picture = picture;
    this.condition = condition;
    this.description = description;
    this.price = new Price(currency, amount);
    this.sold_quantity = sold_quantity;
  };
};

class Price {
  constructor(currency, amount) {
    this.currency = currency;
    this.amount = amount;         
  };
};

export default Products;
