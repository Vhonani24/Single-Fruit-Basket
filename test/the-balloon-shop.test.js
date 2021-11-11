let assert = require("assert");
let TheFruitBasket = require("../the-fruit-basket");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://vhonani:vhonani123@localhost:5432/fruit_basket_tests';

const pool = new Pool({
    connectionString
});

describe('The fruit_basket function', function () {


    beforeEach(async function () {
        // clean the tables before each test run
        await pool.query("delete from fruit_basket");
        // add valid colors
    });

    it('should create a new fruit basket for a given fruit type, qty & fruit price', async function () {

        const testFruitBasket = TheFruitBasket(pool);

        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);


        assert.deepEqual([
            {
                "fruit_name": "Pears",
                "price": "3.20",
                "quantity": 5
            }
        ], await testFruitBasket.findAllFruitBaskets('Pears'));

    });
    it('should find all the fruit baskets for a given fruit type', async function () {

        const testFruitBasket = TheFruitBasket(pool);

        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);
        await testFruitBasket.createFruitBasket('Apples', 4, 3.00);



        assert.deepEqual([
            {
                "fruit_name": "Pears",
                "price": "3.20",
                "quantity": 5
            }
        ], await testFruitBasket.findAllFruitBaskets('Pears'));

    });

    it('should update the number of fruits in a given basket', async function () {

        const testFruitBasket = TheFruitBasket(pool);

        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);


        var result = await testFruitBasket.updateFruitBasket('Pears', 5);

        assert.deepEqual([
            {
                "fruit_name": "Pears",
                "price": "3.20",
                "quantity": 10
            }
        ], await testFruitBasket.findAllFruitBaskets('Pears'));
    });
    it('should show the total price for a given fruit basket', async function () {

        const testFruitBasket = TheFruitBasket(pool);

        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);


        assert.deepEqual([{ sum: 16.00 } ], await testFruitBasket.showTotalFruitPrice('Pears'));
    });
    it('should show the sum of the total of the fruit baskets for a given fruit type', async function () {

        const testFruitBasket = TheFruitBasket(pool);

        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);
        await testFruitBasket.createFruitBasket('Pears', 5, 3.20);
        await testFruitBasket.createFruitBasket('Pears', 4, 3.20);

        //console.log(await testFruitBasket.showSumOfTotalFruit_Baskets('Pears'));


        assert.deepEqual([{ sum: 14 } ], await testFruitBasket.showSumOfTotalFruit_Baskets('Pears'));
    });
    


    
   
     
   

    after(function () {
        pool.end();
    })
});