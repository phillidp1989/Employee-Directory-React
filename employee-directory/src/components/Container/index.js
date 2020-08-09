import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import LetterContainer from "../LetterContainer/index";
import Sort from "../Sort/index";
import EmployeeListItem from "../EmployeeListItem/index";
import M from "materialize-css";

// Functional component used so that hooks can be utilised
function Container() {
  // Using setState hook to set the initial states
  const [allEmployees, setAllEmployees] = useState([]);
  const [view, setView] = useState("all");
  const [visibleEmployees, setVisibleEmployees] = useState([]);
  const [alpha, setAlpha] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);

  //   useEffect hook used to call random user api upon launch of the application
  const generateEmployees = async () => {
    // Set an array of jobs to assign to dummy employee data
    const profession = ["Engineering", "Sales", "Accounting", "Legal"];
    try {
      const results = await API.search();
      const employeeData = results.data.results;      

      // Map through employee data to create an array of object with only relevant data
      const formattedEmployeeData = employeeData.map((employee) => {        
        let formattedEmployee = {};
        formattedEmployee["firstName"] = employee.name.first;
        formattedEmployee["lastName"] = employee.name.last;
        formattedEmployee["image"] = employee.picture.large;
        formattedEmployee["email"] = employee.email;
        formattedEmployee["job"] = profession[Math.floor(Math.random() * 4)];
        return formattedEmployee;
      });
      setAllEmployees(formattedEmployeeData);
      setVisibleEmployees(formattedEmployeeData);      
    } catch (err) {
      console.error("ERROR - Container index.js - generateEmployees", err);
    }
  };

  useEffect(() => {
    generateEmployees();    
    M.AutoInit();  
  }, []);

  const handleLetterBtnSubmit = (e) => {
    const letter = e.target.name;        
    handleFilter(letter);
  };

  const handleFilter = (letter) => {
    if (letter === "all") {
      setView("all");
      setVisibleEmployees(allEmployees);      
    } else {
      const filteredEmployees = allEmployees.filter((employee) => {
        return employee.lastName.charAt(0) === letter;
      });
      setView(letter);
      setVisibleEmployees(filteredEmployees);      
    }
  };

  const handleSort = (e) => {    
    const sort = e.target.value;
    if (sort === "2") {
      const sortedFirstName = [...visibleEmployees].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );      
      setVisibleEmployees(sortedFirstName);      
    } else if (sort === "1") {
      const sortedLastName = [...visibleEmployees].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      setVisibleEmployees(sortedLastName);            
    }
  };  

  return (
    <div>
      <LetterContainer
        icon={<i className="far fa-user"></i>}
        alpha={alpha}
        all="all"
        handleLetterBtnSubmit={handleLetterBtnSubmit}
      />
      <Sort handleSort={handleSort} />
      <div className = "d-flex flex-wrap justify-content-center row"> 
      {visibleEmployees.map(employee => (
        <EmployeeListItem         
        id = {visibleEmployees.indexOf(employee)}
        key = {visibleEmployees.indexOf(employee)}
        firstname = {employee.firstName}
        lastname = {employee.lastName}
        email = {employee.email}
        job = {employee.job}
        image = {employee.image}
        />
      ))}
      </div>
    </div>
  );
}

export default Container;
