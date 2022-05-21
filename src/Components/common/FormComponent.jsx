import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Theme } from "../Theme";

const PREFIX = 'RenderInputText';

const classes = {
  cssLabel: `${PREFIX}-cssLabel`,
  cssOutlinedInput: `${PREFIX}-cssOutlinedInput`,
  notchedOutline: `${PREFIX}-notchedOutline`,
  cssFocused: `${PREFIX}-cssFocused`,
  error: `${PREFIX}-error`,
  disabled: `${PREFIX}-disabled`
};

const StyledTextField= styled(TextField)((
  {
    theme
  }
) => ({
  [`& .${classes.cssLabel}`]: {
    color: "#d3d3d3",
    "&.Mui-focused": {
      color: Theme.colors.primary,
    },
  },

  //input props root
  [`& .${classes.cssOutlinedInput}`]: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        borderColor: Theme.colors.base2, //default
        opacity: 0.5,
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderColor: Theme.colors.base2, //hovered #DCDCDC
    },
    "&$cssFocused $notchedOutline": {
      borderColor: Theme.colors.primary, //focused
      color: Theme.colors.primary,
    },
  },

  [`& .${classes.notchedOutline}`]: {},
  [`& .${classes.cssFocused}`]: {},
  [`& .${classes.error}`]: {},
  [`& .${classes.disabled}`]: {}
}));

export const RenderInputText = ({
  name,
  label,
  state,
  onChange,
  multiline,
  rows,
}) => {
  const { data, errors } = state;

  return (
    <StyledTextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      variant='outlined'
      label={label}
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
  );
};
