import { Button, LinkButton } from "../../components/Button";
import { Popover } from "../../components/Popover";
import {
    RichTooltip,
    RichTooltipActions,
    RichTooltipInfo,
    RichTooltipSubhead,
    RichTooltipText,
    RichTooltipTrigger,
    Tooltip,
    TooltipTrigger,
} from "../../components/Tooltip";

export const TooltipPreview = () => {
    return (
        <div className="items">
            <TooltipTrigger>
                <Button>Tooltip</Button>

                <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>
            </TooltipTrigger>

            <RichTooltipTrigger>
                <Button>Rich Tooltip</Button>

                <Popover>
                    <RichTooltip>
                        <RichTooltipInfo>
                            <RichTooltipSubhead>Lorem Ipsum</RichTooltipSubhead>

                            <RichTooltipText>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris porttitor laoreet purus
                                eu elementum. Vestibulum vitae vulputate justo,
                                ac feugiat dolor.
                            </RichTooltipText>
                        </RichTooltipInfo>

                        <RichTooltipActions>
                            <LinkButton
                                color="text"
                                href="https://m3.material.io/components/tooltips/guidelines"
                                target="_blank"
                            >
                                Lorem Ipsum
                            </LinkButton>

                            <Button color="text">Lorem</Button>
                        </RichTooltipActions>
                    </RichTooltip>
                </Popover>
            </RichTooltipTrigger>
        </div>
    );
};

export default TooltipPreview;
