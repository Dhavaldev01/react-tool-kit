import { Button, Dialog, DialogActions, DialogTitle, Fab } from "@mui/material";
import { Fragment } from "react";



function TodoDetails({todoDetails,openDialog , setOpenDialog}){
    return <Fragment>
        <Dialog open = {openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button
                onClick={()=> setOpenDialog(false)}
                >Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}

export default TodoDetails;