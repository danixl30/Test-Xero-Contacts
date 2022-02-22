import {Button} from "@mantine/core";

export default function XeroButton(props) {
    return (
        <Button color = "gray" onClick = {props.onClick} size = "lg">
            Login with xero
        </Button>
    )
}
