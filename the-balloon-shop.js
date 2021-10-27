module.exports = (pool, validColors) => {


    async function getValidColors() {

        const result = await pool.query("select * from valid_color")
        var result1 = result.rows

        var finalArray = result1.map(function (obj) {
            return obj.color_name;
          });
        return finalArray

    }


    /*async function getValidColors() {
        
        const result = await pool.query("select * from valid_color")

        return result.rows;

    }*/

    async function requestColor (color) {
    var result = ('select ')
       await pool.query("INSERT INTO valid_color(color_name,count) values($1,$2)", [color,1])

    }

    async function colorCount (color) {
        await pool.query("UPDATE valid_color SET count = count + 1 where color_name = $1", [color])


    }

    function getInvalidColors () {

    }
     
    function allColors () {

    }

    async function addColor(color) {
        try {
            var validColor = await getValidColor(color)
            if (uniqueUser.rowCount === 0) {
                var result = await requestColor(color)
            }
            else {
                var result = await colorCount(color)
            }


        } catch (err) {
            console.error('Oops error has been detected!', err);
            throw err;
        }


    }

    return {
        getValidColors,
        requestColor,
        colorCount,
        getInvalidColors,
        allColors,
        addColor
    }
    
}