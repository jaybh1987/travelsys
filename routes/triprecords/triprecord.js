var express = require('express'); 
var router = express.Router();
var clnt = require('../../lib/database_utils/db')

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

  // console.log('t = ', t, t.car) 

  // let text = 'INSERT INTO trip(carname, startdate, starttime,enddate,endtime) VALUES($1, $2, $3, $4, $5)'
  //   // const values = ['t.car', 't.startDate', 't.endDate', t.stTime, t.edTime]  
  // let values = ['car', '20-12-2020', 't.stTime','20-12-2020', 't.edTime']

  // console.log('text = ', text)

  //   pl.query(text, values)
  //   .then( r => { 
  //     console.log(res.rows[0])
  //   })
  //   .catch( e => console.error(e))



    let text = 'INSERT INTO trip(car, start_date, end_date, start_time, end_time) VALUES($1, $2, $3, $4, $5)'
    let values = [t.car, t.startDate, t.endDate, t.stTime, t.edTime]

    clnt
    .query(text, values)
    .then( res => {
      console.log('res = ', res)  
    })
    .catch( e => console.log(e.stack))

    res.send({'name':'jay'})
});
  
module.exports = router;