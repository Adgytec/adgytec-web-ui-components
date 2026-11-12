import { Shield, ShieldOff } from "lucide-react";
import {
    Disclosure,
    DisclosureGroup,
    DisclosureHeader,
    DisclosureIcon,
    DisclosureLabel,
    DisclosurePanel,
} from "../../components/Disclosure";
import { typography } from "../../utils/typography";

export const DisclosurePreview = () => {
    return (
        <div className="items-grid list-preview">
            <Disclosure>
                <DisclosureHeader
                    leading={<DisclosureIcon icon={Shield} />}
                    label={
                        <DisclosureLabel>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </DisclosureLabel>
                    }
                />

                <DisclosurePanel>
                    Morbi eget arcu non sapien semper imperdiet. Pellentesque
                    tristique, quam et ullamcorper sagittis, mi massa ultricies
                    ligula, quis malesuada sem nunc sit amet orci. Nulla
                    interdum lacus sit amet tortor pretium vulputate. Sed a
                    tellus lacus. Nullam tempus consequat ex ultricies
                    fringilla. Sed nunc lectus, scelerisque sit amet tristique
                    eu, consequat sed quam. Aliquam et odio placerat,
                    pellentesque purus et, maximus dui. Cras id accumsan est, ac
                    euismod tellus. Proin non mattis justo. Donec ornare dui a
                    turpis placerat ullamcorper. Phasellus aliquet, mauris eget
                    sagittis cursus, orci justo ullamcorper ante, a viverra
                    risus leo ac neque. Integer tincidunt sapien vitae elit
                    rutrum cursus. In eleifend ultricies nisl, ut pretium ipsum
                    vulputate sit amet. Nulla viverra nulla nisi, tincidunt
                    varius leo interdum quis.
                </DisclosurePanel>
            </Disclosure>

            <Disclosure isDisabled>
                <DisclosureHeader
                    leading={<DisclosureIcon icon={ShieldOff} />}
                    label={
                        <DisclosureLabel>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </DisclosureLabel>
                    }
                />

                <DisclosurePanel>
                    Nulla viverra nulla nisi, tincidunt varius leo interdum
                    quis.
                </DisclosurePanel>
            </Disclosure>

            <Disclosure isDisabled isExpanded>
                <DisclosureHeader
                    leading={<DisclosureIcon icon={ShieldOff} />}
                    label={
                        <DisclosureLabel>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </DisclosureLabel>
                    }
                />

                <DisclosurePanel>
                    Nulla viverra nulla nisi, tincidunt varius leo interdum
                    quis.
                </DisclosurePanel>
            </Disclosure>

            <h3 className={typography.headlineSmallEmphasized}>
                Disclosure Group
            </h3>

            <DisclosureGroup>
                <Disclosure>
                    <DisclosureHeader
                        label={
                            <DisclosureLabel>
                                Personal Information
                            </DisclosureLabel>
                        }
                    />

                    <DisclosurePanel>
                        Personal information form here.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure>
                    <DisclosureHeader
                        label={
                            <DisclosureLabel>Billing Address</DisclosureLabel>
                        }
                    />

                    <DisclosurePanel>
                        Billing address form here.
                    </DisclosurePanel>
                </Disclosure>
            </DisclosureGroup>
        </div>
    );
};

export default DisclosurePreview;
