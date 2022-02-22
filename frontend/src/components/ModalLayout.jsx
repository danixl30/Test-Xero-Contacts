import {Modal} from "@mantine/core";

export default function ModalLayout(props) {
    return(
        <>
            <Modal 
                opened = {props.open} 
                onClose = {props.onClose}
                title = {props.title}
            >
                {props.children}
            </Modal>
        </>
    )
}
