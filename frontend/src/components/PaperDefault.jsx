import {Paper} from "@mantine/core"

const PaperDefault = (props) => {
    return(
        <Paper 
            shadow = "lg"
            onClick = {props.onClick} 
            radius = "md" 
            style= {{backgroundColor: '#003366', padding: '20px'}}
            sx = {props.sx} 
        >
            {props.children}
        </Paper>
    )
}

export default PaperDefault
