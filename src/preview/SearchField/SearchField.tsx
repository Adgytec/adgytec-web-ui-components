import { SearchField } from "../../components/Input";

export const SearchFieldPreview = () => {
    return (
        <div className="items">
            <SearchField />

            <SearchField isReadOnly />

            <SearchField isDisabled />
        </div>
    );
};

export default SearchFieldPreview;
