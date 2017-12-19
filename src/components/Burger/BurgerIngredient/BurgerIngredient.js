import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreatBottom} />;
        break;
      case 'breat-top':
        ingredient = (
          <div className={classes.BreatTop}>
            <div className={classes.Seed1} />
            <div className={classes.Seed2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese} />;
        break;
      case 'bacon':
        ingredient = <div className={classes.Bacon} />;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
