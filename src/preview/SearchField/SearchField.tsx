import { SearchField } from "../../components/Input";

export const SearchFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <SearchField placeholder="Search documents..." />
                <SearchField isReadOnly defaultValue="Read-only query" />
            </div>

            <div className="items">
                <SearchField isInvalid defaultValue="Invalid search" />
            </div>

            <div className="items">
                <SearchField isDisabled placeholder="Search (disabled)" />
                <SearchField
                    isDisabled
                    isInvalid
                    defaultValue="Disabled & invalid"
                />
            </div>
        </div>
    );
};

export default SearchFieldPreview;
