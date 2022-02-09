var express = require('express'); 
var router = express.Router();
var pl = require('../../lib/database_utils/db')

router.post('/', function(req, res, next) { 


  /**
   *  body hear is :
   *    body:  {
  car: 'Innova',
  startDate: '2022-02-05',
  endDate: '2022-02-12',
  stTime: '06:31',
  edTime: '17:25'
}

   */

  let t = JSON.parse(req.body.body) 

  console.log('t = ', t, t.car)

    const text = 'INSERT INTO trip(carname, startdate, starttime,enddate,endtime) VALUES($1, $2, $3, $4, $5) RETURNING *'
    // const values = ['t.car', 't.startDate', 't.endDate', t.stTime, t.edTime]  
    const values = ['t.car', 't.startDate', 't.endDate', 't.stTime', 't.edTime']  

    pl.query(text, values)
    .then( r => { 
      console.log(res.rows[0])
    })
    .catch( e => console.error(e))


    res.send({'name':'jay'})
});
  
module.exports = router;