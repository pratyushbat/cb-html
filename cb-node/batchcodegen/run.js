const { db  } = require('./src/model');
const {app}=require('./server');
const start = async () => {
    try {
      await db.sync();
      app.listen(3131,()=>console.log('listening on 3131'))
  } catch(e){
    console.log(e);
  }
}

start()