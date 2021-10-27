let assert = require("assert");
let greet = require("../the-balloon-shop");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/my_balloon_tests';

const pool = new Pool({
    connectionString
});

describe('The balloon function', function(){


    beforeEach(async function(){
        // clean the tables before each test run
        await pool.query("delete from;");
    });

    it('should get the valid color', function(){
        assert.equal(true,false );
    });

    it('should get in-valid color', function(){
        assert.equal(true,false );
    });
  

    it('should return count for a specific color', function(){
        assert.equal(true,false );
    })

    it('should get all the colors', function(){
        assert.equal(true,false );

    })



    it('should get all the colors that are requested', function(){
        assert.equal(true,false );

    })



    

    after(function(){
        pool.end();
    })
});