import { Button } from "../../components/Button";
import { useSnackbarQueue } from "../../components/Snackbar";

export const SnackbarPreview = () => {
    const queue = useSnackbarQueue();

    return (
        <div className="items">
            <Button
                color="elevated"
                onPress={() =>
                    queue.add({
                        supportingText:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ligula a dui faucibus mollis. ",
                        action: <Button color="text">action</Button>,
                    })
                }
            >
                Show snackbar
            </Button>

            <Button
                color="elevated"
                onPress={() =>
                    queue.add(
                        {
                            supportingText: "Sample snackbar",
                            action: <Button color="text">action</Button>,
                        },
                        { timeout: 5000 }
                    )
                }
            >
                Auto Dismiss
            </Button>
        </div>
    );
};

export default SnackbarPreview;
