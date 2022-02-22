import { useToasts } from "react-toast-notifications"

const useAlerts = () => {
    const { addToast } = useToasts()

    const normalAlert = (message) => {
        addToast(message, { appearance: 'info', transitionDuration: 100, autoDismiss: true })
    }

    const successAlert = (message) => {
        addToast(message, { appearance: 'success', transitionDuration: 100, autoDismiss: true })
    }

    const errorAlert = (message) => {
        addToast(message, { appearance: 'error', transitionDuration: 100, autoDismiss: true })
    }

    const warningAlert = (message) => {
        addToast(message, { appearance: 'warning', transitionDuration: 100, autoDismiss: true })
    }

    return {
        normalAlert,
        successAlert,
        errorAlert,
        warningAlert
    }
}

export default useAlerts
