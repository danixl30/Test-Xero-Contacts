import {Button} from "@mantine/core";
import XeroLogo from "../assets/Xero-logo.png"

export default function XeroButton(props) {
    return (
        <Button color = "gray" onClick = {props.onClick} size = "lg">
            <img width = "50" src = {XeroLogo} alt = "Xero logo"/>
            Login with xero
        </Button>
    )
}
