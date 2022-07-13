import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addContect }) {
  let [state, setState] = useState({});

  const onChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmitValue = (e) => {
    e.preventDefault();
    addContect(state);
  };

  return (
    <form onSubmit={onSubmitValue} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        onChange={onChangeValue}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        onChange={onChangeValue}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        onChange={onChangeValue}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  );
}

function InformationTable({ data }) {
 
 const sortedUsers = data.sort((a, b) =>
   a.userLastname.localeCompare(b.userLastname)
 );
 const display =
   sortedUsers.length > 0 ? 
     sortedUsers.map((user, index) => (
       <tr key={index}>
         <td style={style.tableCell}>{user.userFirstname}</td>
         <td style={style.tableCell}>{user.userLastname}</td>
         <td style={style.tableCell}>{user.userPhone}</td>
       </tr>
     ))
    : 
     <tr clospan={3}><td>dddd</td></tr>;

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>

      <tbody>
       {display}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [addedEntryToPhoneBook, setAddedEnteryToPhoneBook] = useState([]);

  const addIntoContectList = (contect) => {
    setAddedEnteryToPhoneBook([...addedEntryToPhoneBook, contect]);
  };
 

  return (
    <section>
      <PhoneBookForm addContect={addIntoContectList} />
      <InformationTable data={addedEntryToPhoneBook} />
    </section>
  );
}

 export default Application;