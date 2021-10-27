let assert = require("assert");
let the_balloon = require("../the-balloon-shop");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/the_balloon_test';

const pool = new Pool({
    connectionString
});

describe('The balloon function', function(){


    beforeEach(async function(){
        // clean the tables before each test run
        await pool.query("delete from;");
    });
    it('should get the valid color', function(){
        assert.equal(, );
    });
    it('should get in-valid color', function(){
        assert.equal(, );
    });
    after(function(){
        pool.end();
    })
});