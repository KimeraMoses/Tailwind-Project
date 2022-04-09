import { InputField } from "../InputField";

interface DropdownProps {
  searchTerm: string;
  isSelected: boolean;
  keyWordHandler: any;
  searchResults: any;
  itemClickHandler: any;
  placeholder: string;
  selectedItem: string;
}

const DropdownInputField = (props: DropdownProps) => {
  const {
    selectedItem,
    searchTerm,
    isSelected,
    keyWordHandler,
    searchResults,
    itemClickHandler,
    placeholder,
  } = props;

  return (
    <div className="w-full">
      <>
        <InputField
          placeholder={placeholder}
          type="search"
          name="search"
          disabled={false}
          value={isSelected ? selectedItem : searchTerm}
          onChange={keyWordHandler}
        />

        {searchTerm.length > 1 && (
          <>
            <div className="relative w-full text-left">
              {searchResults.length > 0 ? (
                <ul className="absolute top-0 right-0 left-0 border-0 margin-0 bg-background pl-0 z-2 rounded shadow-md list-none max-h-48 overflow-y-auto">
                  {searchTerm &&
                    searchResults.map((result: any) => {
                      return (
                        <li
                          onClick={() => itemClickHandler(result)}
                          key={result.id}
                          className="px-2 py-1.5 cursor-pointer capitalize border-t border-borderColor hover:bg-accentHover hover:text-white"
                        >
                          {result.name}
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <div className="overflow-hidden absolute top-0 right-0 left-0 m-0 border-0 bg-background z-2 rounded pt-2 px-4 pb-3 shadow-md">
                  Ooops, No match for{" "}
                  <strong className="text-primary">{searchTerm}</strong> found!
                </div>
              )}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default DropdownInputField;
