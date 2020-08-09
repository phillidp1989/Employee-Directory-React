import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Search(props) {
    return (        
        <div className="col s12 m6 search-container">
        <Autocomplete
      id="combo-box-demo"
      options={props.data}
      getOptionLabel={(option) => option.firstName + " " + option.lastName}
      onInputChange={props.onTagsChange}      
      style={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Search Employee Name" variant="outlined" />}
    />
    </div>
  );
}