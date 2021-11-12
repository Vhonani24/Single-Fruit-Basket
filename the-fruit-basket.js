module.exports = function FruitBasket(pool) {


    async function findAllFruitBaskets(fruit) {
        const result = await pool.query('select fruit_name,price,quantity from fruit_basket where fruit_name = $1',[fruit]);

        return result.rows;


    }

    async function showTotalFruitPrice(fruit){
         var result =  await pool.query('SELECT SUM(price*quantity) FROM fruit_basket WHERE fruit_name = $1',[fruit]);
         return result.rows;
    }
    
    async function showSumOfTotalFruit_Baskets(fruit){
        var result =  await pool.query('SELECT SUM(quantity) FROM fruit_basket WHERE fruit_name = $1',[fruit]);
        return result.rows;
   }

    async function createFruitBasket(fruit, quantity, price) {

        
        await pool.query("INSERT INTO fruit_basket(fruit_name,quantity,price) values($1,$2,$3)", [fruit, quantity, price])

    }

    async function updateFruitBasket (fruit,qty) {

        var result =  await pool.query("UPDATE fruit_basket SET quantity = quantity + $2 where fruit_name = $1", [fruit,qty]);
               
    }

    return {
        createFruitBasket,
        findAllFruitBaskets,
        updateFruitBasket,
       showTotalFruitPrice,
       showSumOfTotalFruit_Baskets

    }
 

}