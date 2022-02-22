import {Paper} from "@mantine/core"

const PaperDefault = (props) => {
    return(
        <Paper onClick = {props.onClick} radius = "md" style= {{background: '#003366', padding: '20px'}}>
            {props.children}
        </Paper>
    )
}

export default PaperDefault
