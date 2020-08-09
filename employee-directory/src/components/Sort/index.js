import React from 'react';
import './style.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Sort(props) {
    return (
      <div className="sort-container col s12 m6">
          <h6>Sort by:</h6>          
          <FormControl component="fieldset" className="sort">
        <FormLabel component="legend" className="label"></FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel
            value="First Name"
            control={<Radio color="primary" />}
            label="First Name"
            labelPlacement="top"
            onChange={props.handleSort}
          />
          <FormControlLabel
            value="Surname"
            control={<Radio color="primary" />}
            label="Surname"
            labelPlacement="top"
            onChange={props.handleSort}
          />                 
        </RadioGroup>
      </FormControl>
      </div>      
    );
  }
