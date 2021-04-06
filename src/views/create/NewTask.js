import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    inputField: {
      with: "100%",
    },
  },
  inputField: {
    width: "90%",
    marginLeft: "1%",
    paddingBottom: "10px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    marginLeft: "5%",
    marginBottom: "1%",
  },
  formControl2: {
    minWidth: "50%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  fieldRow: {
    maxWidth: "100%",
  },
}));

export default function NewTask() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gray-100 w-full h-screen pt-20">
      <div className="bg-white w-full p-2 shadow">
        <FormControl variant="filled" className={classes.formControl}>
          <TextField
            id="standard-multiline-flexible"
            label="Nueva tarea"
            multiline
            rowsMax={4}
          />
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple">
            Asignar a lista
          </InputLabel>
          <Select
            native
            value={10}
            inputProps={{
              name: "list",
              id: "filled-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Trabajo</option>
            <option value={20}>Casa</option>
            <option value={30}>Gym</option>
          </Select>
        </FormControl>
        <div className="flex w-full gap-3 mt-2 px-6 justify-center items-center">
          <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="age-native-simple">Pomodoros</InputLabel>
            <Select
              native
              value={""}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
              className={classes.fieldRow}
            >
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={3}>4</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="age-native-simple">Estatus</InputLabel>
            <Select
              native
              value={""}
              inputProps={{
                name: "status",
                id: "age-native-simple",
              }}
              className={classes.fieldRow}
            >
              <option aria-label="None" value="" />
              <option value={1}>Pendiente</option>
              <option value={2}>Pospuesta</option>
              <option value={3}>Terminada</option>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="bg-white w-full mt-5 p-2 shadow">
        <div className="flex w-full gap-3 mt-2 px-6 justify-center items-center">
          <FormControl
            variant="filled"
            className={classes.formControl2}
          ></FormControl>
          <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="age-native-simple">Estatus</InputLabel>
            <Select
              native
              value={""}
              inputProps={{
                name: "status",
                id: "age-native-simple",
              }}
              className={classes.fieldRow}
            >
              <option aria-label="None" value="" />
              <option value={1}>Pendiente</option>
              <option value={2}>Pospuesta</option>
              <option value={3}>Terminada</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
