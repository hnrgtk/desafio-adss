import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  button: props => ({
    background: props.bgColor || "#228A95",
    margin: theme.spacing(1),
    textTransform: "initial",
    "&:hover": {
      background: darken(props.bgColor || "#228A95", 0.1)
    }
  })
}));

export default function ButtonAi({title, className, ...rest}) {
  const styles = useStyles(rest);
  return (
    <Button
      variant="contained"
      size="medium"
      color="primary"
      className={clsx(styles.button, className)}
			label={title}
      {...rest}
    />
  );
}
