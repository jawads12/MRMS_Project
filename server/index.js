const express = require('express');
const app = express();
const port = 5498;

const bcrypt = require("bcrypt");

const oracledb = require("oracledb");
const cors = require('cors');
app.use(cors(), express.json());
// Set global options for oracledb module
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;

const dbConfig={
  user: "mrms",
password: "mrms",
connectionString: "localhost:1521/orcl"
}

async function connectAndStartServer() {
  let connection = await oracledb.getConnection(dbConfig);

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/students/:student_id', async (req, res) => {
    const studentId = req.params.student_id;
    console.log(studentId);
  
    try {
      let connection = await oracledb.getConnection(dbConfig);
      // Execute the query
      const result = await connection.execute(`SELECT * FROM MIST_STUDENTS_ALL_INFO WHERE MIST_ID = '${studentId}'`);
      // Release the connection
      
      console.log(result.rows[0]);
      // Send the retrieved data as the API response
      res.send(result.rows[0]);
      
      await connection.close();
    } catch (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.post('/registration', async (req, res) => {
    const { student_id, fname, lname, dept, levell, phone1, phone2, email, password } = req.body;
    console.log(req.body);

    // Generate a salt and hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await connection.execute(`INSERT INTO MIST_Students(NAME, MIST_ID, DEPARTMENT, LEVEL_NO, APPROVAL_STATUS, TEAM_LEAD, SUB_TEAM, EMAIL, PASSWORD) VALUES (Person_name('${fname}','${lname}'),'${student_id}', '${dept}', '${levell}','0','0','0', '${email}', '${hashedPassword}')`);
    const result1 = await connection.execute(`INSERT INTO Phone_numbers( MIST_ID, PHONE) VALUES ('${student_id}', '${phone1}')`);
    if(phone2!=''){
       const result2 = await connection.execute(`INSERT INTO Phone_numbers( MIST_ID, PHONE) VALUES ('${student_id}', '${phone2}')`);

    }

    connection.commit();

    console.log(result);
    res.status(result.rowsAffected === 1 ? 200 : 500).send();

  });


  app.post('/insertAnnouncement', async (req, res) => {
    const { student_id, fname, lname, dept, levell, phone1, phone2, email, password } = req.body;
    console.log(req.body);

    // Generate a salt and hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await connection.execute(`INSERT INTO MIST_Students(NAME, MIST_ID, DEPARTMENT, LEVEL_NO, APPROVAL_STATUS, TEAM_LEAD, SUB_TEAM, EMAIL, PASSWORD) VALUES (Person_name('${fname}','${lname}'),'${student_id}', '${dept}', '${levell}','0','0','0', '${email}', '${hashedPassword}')`);
    const result1 = await connection.execute(`INSERT INTO Phone_numbers( MIST_ID, PHONE) VALUES ('${student_id}', '${phone1}')`);
    if(phone2!=''){
       const result2 = await connection.execute(`INSERT INTO Phone_numbers( MIST_ID, PHONE) VALUES ('${student_id}', '${phone2}')`);

    }


    console.log(result);
    res.status(result.rowsAffected === 1 ? 200 : 500).send();

  });

  // app.post('/login', async (req, res) => {
  //   let connection = await oracledb.getConnection(dbConfig);
  //   const { student_id, password } = req.body;
  
  //   const result = await connection.execute(`SELECT password FROM student WHERE id = '${student_id}'`);
  //   const hashedPassword = result.rows[0].PASSWORD;
  
  //   res.send({ password: hashedPassword });
  // });

  app.post('/login', async (req, res) => {
    let connection;
  
    try {
      connection = await oracledb.getConnection(dbConfig);
      const { student_id, password } = req.body;
  
      const result = await connection.execute(
        `SELECT * FROM MIST_Students WHERE MIST_ID = :student_id`,
        [student_id]
      );
    
      if (result.rows.length === 0) {
        // Handle the case when no matching student ID is found
        res.status(404).send({ error: 'Student ID not found' });
        return;
      }
    
      const hashedPassword = result.rows[0].PASSWORD;

      bcrypt.compare(password, hashedPassword, function (err, passwordMatched) {
        if (passwordMatched) {
          res.send({userMatched: true, userData: result.rows[0]});
        } else {
          res.send({userMatched : false});
        }
      });


    } catch (error) {
      // Handle any error that occurred during the database operation
      res.status(500).send({ error: 'An error occurred' });
    } finally {
      // Close the database connection
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Failed to close the database connection:', error);
        }
      }
    }
  });


  app.post('/insertAnnounce', async (req, res) => {
    let connection;
    const {InputData,student_id} = req.body;
  
    try {
     // const storedVariable = localStorage.getItem('student_id');
      connection = await oracledb.getConnection(dbConfig);
      console.log(req.body);
  
       const result = await connection.execute(`Select count(*) as A from Announcement`);
       let announcement_ID = result.rows[0]["A"];
      ++announcement_ID;
      console.log(announcement_ID);

      await connection.execute(`insert into Announcement(details, Announcement_ID, MIST_ID, Announcement_date) values ('${InputData}', ${announcement_ID}, ${+student_id}, SYSDATE)`);
      	
connection.commit();
    
      res.send("Inserted")
    } catch (error) {
      console.log("error",error);
      // Handle any error that occurred during the database operation
      res.status(500).send({ error: 'An error occurred' });
    } finally {
      // Close the database connection
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Failed to close the database connection:', error);
        }
      }
    }
  });





  app.post('/joinRequest/:student_id', async (req, res) => {
    let connection;
  
    try {
      connection = await oracledb.getConnection(dbConfig);
      const student_id = req.params.student_id; // Fix: Extract student_id from req.params.student_id
      console.log(student_id);
      const { sub_team, details } = req.body;
      console.log(req.body);
  
      
      const result = await connection.execute(
        `INSERT INTO REQUEST (MIST_ID, TEAM_NAME, DETAILS, REQUEST_TIME) VALUES (:student_id, :sub_team, :details, SYSDATE)`, // Fix: Use bind variables instead of concatenating values directly
        {
          student_id: +student_id, // Fix: Convert student_id to a number, if necessary
          sub_team: sub_team,
          details: details
        }
      );
  
      console.log(result);
      let updateQuery = `UPDATE MIST_STUDENTS SET APPROVAL_STATUS='2' WHERE MIST_ID='${student_id}'`;
  
      await connection.execute(updateQuery);
      await connection.commit();
  
      if (result.rowsAffected === 0) {
        // Handle the case when no rows are affected by the insert
        res.status(404).send({ error: 'No rows inserted' });
        return;
      }
  
      // Handle the case when the insert is successful
      res.status(200).send({ message: 'Data inserted successfully' });
    } catch (error) {
      console.log(error);
      // Handle any error that occurred during the database operation
      res.status(500).send({ error: 'An error occurred' });
    } finally {
      // Close the database connection
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Failed to close the database connection:', error);
        }
      }
    }
  });
  
  app.post('/assign-task', async (req, res) => {
    let connection = await oracledb.getConnection(dbConfig);
    const {studentID,task_field, assign_Component ,quantity, assign_deadline, id} = req.body; //student_id --> team leader er ID
  
    console.log(id);
      const result = await connection.execute(`select sub_team from MIST_Students where MIST_ID='${+id}'`);
  
      let ID_pattern = '';
      console.log(result);
  
      if (result.rows[0].SUB_TEAM === 'Electrical')
        {
            ID_pattern = 'EC';
        }
      else if (result.rows[0].SUB_TEAM === 'Mechanical')
        {
              ID_pattern = 'MC';
        }
      else if (result.rows[0].SUB_TEAM === 'Science')
        {
              ID_pattern = 'SC';
        }
      else if (result.rows[0].SUB_TEAM === 'Management')
        {
              ID_pattern = 'MG';
        }
      else if (result.rows[0].SUB_TEAM === 'Communication')
        {
              ID_pattern = 'CM';
        }
      else if (result.rows[0].SUB_TEAM === 'Software')
        {
              ID_pattern = 'SW';
        }
      else if (result.rows[0].SUB_TEAM === 'URC')
        {
              ID_pattern = 'TL';
        }
  
        ID_pattern = ID_pattern + '%';
        const result_1 = await connection.execute(`Select count(*) as A from Tasks where Task_ID like '${ID_pattern}'`);
        let cnt = result_1.rows[0].A;
        ++cnt;
        let Task_ID = ID_pattern+cnt;
        //const taskID = "ABCDE";

const trimmedTaskID = Task_ID.substring(0,2)+Task_ID.substring(3,4);

console.log(trimmedTaskID);


        //
        const proc_name = 'ADD_TASK';
      const parameters = {
      stu_ID: `${studentID}`,
      task_ID: `${trimmedTaskID}`,
      task: `${task_field}`,
      components: `${assign_Component}`,
      quantity: `${quantity}`,
      deadline: `${assign_deadline}`,
      tl : result.rows[0].SUB_TEAM
      };

      const resultu = await connection.execute(`begin ${proc_name}(:stu_ID, :task_ID, :task, :components, :quantity, TO_DATE(:deadline,'YYYY-MM-DD'), :tl); end;`,parameters);



        //
  
        console.log(resultu); 
        connection.commit();
    
  });

 // app.post('/assign-task', async (req, res) => {
 ///   let connection;
  
  //  try {
  //    connection = await oracledb.getConnection(dbConfig);
   //   const { studentID,task_field,assign_Component,  quantity , assign_deadline, student_id } = req.body;

// app.post('/assign-task', async (req, res) => {
    
//   let connection = await oracledb.getConnection(dbConfig);
//   const { studentID,task_field, assign_Component ,quantity, assign_deadline, student_id} = req.body; //student_id --> team leader er ID

//     const result = await connection.execute(`select sub_team from MIST_Students where MIST_ID='${student_id}'`);

//     let ID_pattern = '';

//     if (result.rows[0].SUB_TEAM = 'Electrical')
//       {
//           ID_pattern = 'EC';
//       }
//     else if (result.rows[0].SUB_TEAM = 'Mechanical')
//       {
//             ID_pattern = 'MC';
//       }
//     else if (result.rows[0].SUB_TEAM = 'Science')
//       {
//             ID_pattern = 'SC';
//       }
//     else if (result.rows[0].SUB_TEAM = 'Management')
//       {
//             ID_pattern = 'MG';
//       }
//     else if (result.rows[0].SUB_TEAM = 'Communication')
//       {
//             ID_pattern = 'CM';
//       }
//     else if (result.rows[0].SUB_TEAM = 'Software')
//       {
//             ID_pattern = 'SW';
//       }

//       ID_pattern = ID_pattern + '%';
//       const result_1 = await connection.execute(`Select count(*) as A from Tasks where Task_ID like '${ID_pattern}'`);
//       let cnt = result_1.rows[0].A;
//       ++cnt;
//       let Task_ID = ID_pattern+cnt;

//       console.log(Task_ID); 
  
// });

  
  //     const result = await connection.execute(
  //       `SELECT SUB_TEAM FROM MIST_Students WHERE MIST_ID = :student_id`,
  //       [student_id]
  //     );
  //     console.log(result.rows[0]);
    
  //     if (result.rows.length === 0) {
  //       // Handle the case when no matching student ID is found
  //       res.status(404).send({ error: 'Student ID not found' });
  //       return;
  //     }
  


  //   } catch (error) {
  //     // Handle any error that occurred during the database operation
  //     res.status(500).send({ error: 'An error occurred' });
  //   } finally {
  //     // Close the database connection
  //     if (connection) {
  //       try {
  //         await connection.close();
  //       } catch (error) {
  //         console.error('Failed to close the database connection:', error);
  //       }
  //     }
  //   }
  // });
  
  



  app.post('/update_profile/:student_id', async (req, res) => {
    let connection = await oracledb.getConnection(dbConfig);
    const {student_id} = req.params
    const {fname, lname, levell, phone1,  phone2, email, password, curr_password } = req.body;
    console.log(req.body);

    // Generate a salt and hash the password
    const saltRounds = 10;
    //const hashedPassword = await bcrypt.hash(curr_password, saltRounds);

    const real_hash = await connection.execute(`select password from MIST_Students where MIST_ID='${student_id}'`);

    //console.log(real_hash, hashedPassword);

    bcrypt.compare(curr_password, real_hash.rows[0].PASSWORD,  async(err, result) =>{
      if (result) {
        console.log("milse", result);
        
  

      let updateQuery = 'UPDATE MIST_STUDENTS SET ';
      let updateQuery_phone1 = `UPDATE PHONE_NUMBERS SET Phone = '${phone1}' `;
      let updateQuery_phone2 = `UPDATE PHONE_NUMBERS SET Phone = '${phone2}' `;

      if (fname) {
        updateQuery += ` NAME = Person_name('${fname}',`;
      }

      if (lname) {
        updateQuery += ` '${lname}'),`;
      }

      if (levell) {
        updateQuery += ` LEVEL_NO = '${levell}',`;
      }

      // if (phone1) {
      //   updateQuery_phone += ` Phone = '${phone1}'`;
      //   updateQuery_phone += ` WHERE MIST_ID = '${student_id}'`;
      //   console.log("updated query: ",updateQuery);
      //   const update1 = await connection.execute(updateQuery_phone);
      //  }

      //  if (phone2) {
      //   updateQuery_phone += ` Phone = '${phone2}'`;
      //   updateQuery_phone += ` WHERE MIST_ID = '${student_id}'`;
      //   console.log("updated query: ",updateQuery);
      //   const update1 = await connection.execute(updateQuery_phone);
      // }
      if (email) {
        updateQuery += ` EMAIL = '${email}',`;
      }
      if (password) {
        updateQuery += ` PASSWORD = '${password}',`;
        
      }

      updateQuery = updateQuery.slice(0, -1); // Remove the trailing comma
      

      updateQuery += ` WHERE MIST_ID = '${student_id}'`;

      updateQuery_phone1 += ` WHERE MIST_ID = '${student_id}'`;
      updateQuery_phone2 += ` WHERE MIST_ID = '${student_id}'`;
      
      

      




      console.log("updated query: ",updateQuery);

      const update = await connection.execute(updateQuery);
       const update1 = await  connection.execute(updateQuery_phone1);

       const update2 = await  connection.execute(updateQuery_phone2);
      console.log(updateQuery_phone1);
      console.log(updateQuery_phone2);



      connection.commit();
     // const update1 = await connection.execute(oracledb.autoCommit);
       
      } else {
        console.log(result)
        
      }
    });

   // const result = await connection.execute(`INSERT INTO student(id, fname, lname, levell, phone1, phone2, email, password) VALUES ('${student_id}', '${fname}', '${lname}', '${dept}', '${levell}', '${phone1}', '${phone2}', '${email}', '${hashedPassword}')`);
   // console.log(result);
   // res.status(result.rowsAffected === 1 ? 200 : 500).send();

  });

  app.post("/admin/add-expenditure/",async(req,res)=>{
    console.log(req.body);
    const {type,description,date,amount} = req.body.updatedData;

    let connection = await oracledb.getConnection(dbConfig);

    try {
      const {ROVER_ID} = await connection.execute(`select rover_id from competitions where competition_name = 'URC'`).then(data=>data.rows[0]);
      console.log("ROVER_ID",ROVER_ID);
      //  const result = await connection.execute(`insert into components (comp_id,component_model,fund, quantity, rover_id, price, functionality) 
      //  values ('${C_ID}','${modelName}', 1 , ${+quantity},${+ROVER_ID},${+price},'${functionality}')`);
      const result = await connection.execute(`
      INSERT INTO administrative_expenditure ( expense_type, expense_date, description)
      VALUES (:expenseType, TO_DATE(:expenseDate, 'YYYY-MM-DD'), :description)`,
      {
        expenseType: type,
        expenseDate: date,
        description
      });

      await connection.execute(`
        INSERT INTO ALLOCATED_FOR_A ( AMOUNT)
        VALUES (:amount)`,
        {
          amount
        });

    console.log("result", result);
       res.send(result)
      connection.commit();
    } catch (error) {
      console.log(error);
      res.send(error)
    }
  });
  app.post("/component/add-expenditure/", async(req,res)=>{
    console.log(req.body);
    const {modelName,quantity,functionality,price} = req.body?.updatedData;

    let connection = await oracledb.getConnection(dbConfig);

    try {
      const {ROVER_ID} = await connection.execute(`select rover_id from competitions where competition_name = 'URC'`).then(data=>data.rows[0]);
      console.log("ROVER_ID",ROVER_ID);

      const compID = await connection.execute(`select count(*) A from Components`);
       var C_ID = compID.rows[0].A;
       C_ID = C_ID+1;
       console.log("c_id",C_ID);
      //  const result = await connection.execute(`insert into components (comp_id,component_model,fund, quantity, rover_id, price, functionality) 
      //  values ('${C_ID}','${modelName}', 1 , ${+quantity},${+ROVER_ID},${+price},'${functionality}')`);
      const result = await connection.execute(`INSERT INTO components (COMP_ID, COMPONENT_MODEL, QUANTITY, PRICE, FUNCTIONALITY, FUND, ROVER_ID)
      VALUES (:compId, :componentModel, :quantity, :price, :functionality, :fund, :roverId)`,
      {
        compId: C_ID,
        componentModel: modelName,
        quantity: quantity,
        price: price,
        functionality: functionality,
        fund: 1,
        roverId: ROVER_ID
      })
       console.log("result",result);
       res.send(result)
      connection.commit();
    } catch (error) {
      console.log(error);
      res.send(error)
    }
    
  });
  //Component Inventory fetch data
  app.post('/addComponent', async (req, res) => {
    
    let connection = await oracledb.getConnection(dbConfig);
    const {model,quantity,price,funcStat} = req.body;

    const query = await connection.execute(`select count(*) b from Components where component_model = '${model}'`);
   
    if(query.rows[0].B==0) 
    {
       const compID = await connection.execute(`select count(*) A from Components`);
       var C_ID = compID.rows[0].A;
       C_ID = C_ID+1;
       const result = await connection.execute(`insert into components (comp_id,component_model, quantity, price, functionality) 
       values ('${C_ID}','${model}', '${quantity}','${price}','${funcStat}')`);
    }

    else
    {
       const query = await connection.execute(`update Components 
       set quantity = (select Components.quantity from Components where component_model='${model}')+'${quantity}'
       where component_model='${model}'`); 
    }
    connection.commit();
    
 });

 //addFund
 app.post('/addFund', async (req, res) => {
    
  let connection = await oracledb.getConnection(dbConfig);
  const {Source,    Amount,    Rover,    Date} = req.body;

  const query = await connection.execute(`INSERT INTO FUND(DEPOSITOR, AMOUNT, FUND_DATE, COMPETITION_NAME) VALUES ('${Source}','${Amount}', TO_DATE('${Date}', 'YYYY-MM-DD'), 'URC')`);
  
  connection.commit();
  
});




 //competition
 app.post('/addCompetition', async (req, res) => {
    
  let connection = await oracledb.getConnection(dbConfig);
  const {Comp_Name,    Rover_Name,    startdate,    enddate, version} = req.body;
  console.log(req.body);

  const pl_query =
`declare
    exist number;
    new_rover_ID number;
begin
     exist:=CheckRoverExistence('${Rover_Name}','${version}');
    if exist > 0 then
        insert into Competitions(competition_name, start_time, end_time, rover_id)
        values ('${Comp_Name}', TO_DATE('${startdate}','YYYY-MM-DD'),TO_DATE('${enddate}', 'YYYY-MM-DD'),exist);
    else
        select count(*) into new_rover_ID from Rover;
        new_rover_ID:=new_rover_ID+1;

        insert into Rover(Rover_Id, Rover_Name, Version)
        values (new_rover_ID,'${Rover_Name}','${version}');

        insert into Competitions(competition_name, start_time, end_time, rover_id)
        values ('${Comp_Name}', TO_DATE('${startdate}','YYYY-MM-DD'),  TO_DATE('${enddate}','YYYY-MM-DD'),new_rover_ID);
    
    end if;
end;`

const result1 = await connection.execute(pl_query);
console.log(result1);
connection.commit();
res.send(result1);
 
  
  connection.commit();
  
});
  //commponent dekhabo frontend e

  app.get('/components', async (req, res) => {
   
    try {
      let connection = await oracledb.getConnection(dbConfig);
      // Execute the query
      const result = await connection.execute(`SELECT * FROM Components `);
      // Release the connection
      
      console.log(result);
      // Send the retrieved data as the API response
      res.send(result.rows);
      
      await connection.close();
    } catch (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  //Task-dekhabo frontend e
  
  app.get('/Task-table', async (req, res) => {
   
    try {
      let connection = await oracledb.getConnection(dbConfig);
      // Execute the query
      const result = await connection.execute("select * from TASK_FOR_STUDENT");
      // Release the connection
      
      console.log(result);
      // Send the retrieved data as the API response
      res.send(result.rows);
      
      await connection.close();
    } catch (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.delete('/delete-profile/:student_id', async (req, res) => {
    let connection = await oracledb.getConnection(dbConfig);
    const {student_id} = req.params;
  
    console.log(student_id);
    const result = await connection.execute(`Delete FROM student WHERE id='${student_id}'`);
    connection.commit();
   
    res.send(result);
  });



  

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

connectAndStartServer().catch(err => {
  console.error(err);
});



//view member
app.get('/team-members', async (req, res) => {
  const department = req.query?.department || "";
console.log("department",department);
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`SELECT * FROM MIST_Students WHERE APPROVAL_STATUS = '1' ${department ? `and SUB_TEAM='${department}'` : ""}`);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//component
app.get('/Components', async (req, res) => {
  
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`SELECT * FROM Components`);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//requests
app.get('/Requests', async (req, res) => {
  
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`SELECT * FROM Request_view`);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




//edit component
app.post('/editComponent', async (req, res) => {
 

  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const { Id:comp_id, model, quantity, price, funcStat:functionality} = req.body;
    console.log(req.body);
  
    // Generate a salt and hash the password
   console.log(model);
    const updateQuery = `UPDATE Components 
    SET COMPONENT_MODEL = '${model}', 
        QUANTITY = '${quantity}', 
        PRICE = '${price}', 
        FUNCTIONALITY = '${functionality}' 
    WHERE COMP_ID = '${comp_id}'`;
    const result = await connection.execute(updateQuery);
    connection.commit();
  
    console.log(result);
    res.status(result.rowsAffected === 1 ? 200 : 500).send();
  
    
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

});



//delete component
// app.delete('/delete-component/:comp_id', async (req, res) => {
//   let connection = await oracledb.getConnection(dbConfig);
//   const { comp_id } = req.params;

//   console.log(comp_id);

//   const deleteQuery = 'DELETE FROM Components WHERE COMP_ID = :comp_id';
//   const deleteResult = await connection.execute(deleteQuery, [comp_id]);

//   connection.commit();

//   res.send(deleteResult);
// });





app.delete('/delete-component/:comp_id', async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);
  const {comp_id} = req.params;

  console.log("comp_id",comp_id);
  const result = await connection.execute(`Delete FROM Components WHERE COMP_ID='${comp_id}'`);
  connection.commit();

let CID = comp_id;

CID = ++CID;
console.log(CID);
const pl_query = `begin updateCompID(:param); end;`;
const result1 = await connection.execute(pl_query, {param: CID });
 connection.commit();
  res.send(result);
});




app.post('/update-request/:id', async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);
  const {id} = req.params;
  const {status} = req.body;

  console.log(id);
  try {
    const statusValue = status=="ACCEPT" ? 1 : 2;
       await connection.execute(`UPDATE MIST_STUDENTS set  APPROVAL_STATUS = '${statusValue}'where MIST_ID = '${id}'`);
    await connection.execute(`DELETE FROM REQUEST WHERE MIST_ID='${id}'`);

   
    connection.commit();

    res.send("Data updated");
  } catch (error) {
    res.send(error)
  }
});

app.post('/accept-request/:id', async (req, res) => {
  let connection = await oracledb.getConnection(dbConfig);
  const {id, dept} = req.params;

  console.log(id);
  const result = await connection.execute(`UPDATE MIST_STUDENTS set  APPROVAL_STATUS = '1' , SUB_TEAM = 'dept' where MIST_ID = '${id}'`);
  
  
  connection.commit();


});


//total fund for urc
app.get('/fund', async (req, res) => {
  const comp = "URC";
  console.log(comp);

  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`select SUM(AMOUNT) from fund where COMPETITION_NAME= '${comp}'`);
    // Release the connection
    
    console.log(result.rows[0]);
    // Send the retrieved data as the API response
    res.send(result.rows[0]);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/currentCompetitions', async (req, res) => {
  const connection = await oracledb.getConnection(dbConfig);

  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  startDate.setHours(0, 0, 0, 0); // Set time to 00:00:00.000
  const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
  endDate.setHours(0, 0, 0, 0); // Set time to 00:00:00.000

  const query = `
    SELECT COMPETITION_NAME
    FROM Competitions
    WHERE TRUNC(START_TIME) BETWEEN :startDate AND :endDate
  `;

  try {
    const result = await connection.execute(query, {
      startDate,
      endDate,
    });
    const competitionNames = result.rows.map((row) => row[0]);
    res.send(competitionNames);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.close();
  }
});





//available fund 2nd block
app.get('/fundAvailable', async (req, res) => {
  const comp ="URC";
  console.log(comp);

  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`select available_fund from Fund_for_each_competition_view where competition = '${comp}'`);
    // Release the connection
    
    console.log(result.rows[0]);
    // Send the retrieved data as the API response
    res.send(result.rows[0]);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//3rd block

app.get('/fund-spend', async (req, res) => {
  const comp = "URC";
  console.log(comp);

  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`select total_expenditure from Fund_for_each_competition_view where competition = '${comp}'`);
    // Release the connection
    
    console.log(result.rows[0]);
    // Send the retrieved data as the API response
    res.send(result.rows[0]);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//table of fund 
app.get(`/fund-table`, async (req, res) => {
  const comp = req.params.comp;
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`SELECT * FROM FUND Where COMPETITION_NAME='URC' `);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/list/announcements', async (req, res) => {
   
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    //const result = await connection.execute(`UPDATE Announcement set DETAILS=''`);
    const result = await connection.execute(`SELECT * FROM Announcement`);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/list/rovers', async (req, res) => {
   
  try {
    let connection = await oracledb.getConnection(dbConfig);
    // Execute the query
    const result = await connection.execute(`SELECT * FROM Rover`);
    // Release the connection
    
    console.log(result);
    // Send the retrieved data as the API response
    res.send(result.rows);
    
    await connection.close();
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
