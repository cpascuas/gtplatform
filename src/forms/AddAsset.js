import { Grid, TextField, Card, Button, makeStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function AddAsset() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Card>
            <TextField
              variant="outlined"
              size="small"
              label="File"
              name="File"
              value="File"
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              size="small"
              label="URL"
              name="URL"
              value="URL"
              className={classes.textField}
            />
          </Card>
          <Card style={{ marginTop: "10px" }}>
            <TextField
              variant="outlined"
              size="small"
              label="Title"
              name="Title"
              value="Title"
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Description"
              name="Description"
              value="Description"
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Asset Type"
              name="Asset Type"
              value="Asset Type"
              className={classes.textField}
            />
          </Card>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disableElevation
            startIcon={<SaveIcon />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddAsset;
