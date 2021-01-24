import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Filter"
        name="filter"
        type="text"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
