
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DropdownComponent({ fieldName, dropdownDataList, onDropDownChangeEvent, fieldNameKey, dropDownPlaceHolder, openDropdown, setOpenDropdown }) {

    const { t } = useTranslation();

    const [selectedDropdownEntry, setSelectedDropdownEntry] = useState("");

    const changeDropdownSelection = (selectedid) => {
        setSelectedDropdownEntry(selectedid);
        setOpenDropdown(null);
        onDropDownChangeEvent(fieldName, selectedid);
    };
    const clickOnDropdown = () => {
        setOpenDropdown(fieldName);
    };

    return (
        <div key={fieldName} className="ml-4 mb-2">
            <label className="block text-indigo-900 text-sm font-semibold mb-2">
                {t(fieldNameKey)}:
            </label>
            <div className="relative w-full">
                <button onClick={clickOnDropdown} className="flex items-center justify-between w-[282px] h-10 px-2 py-2 border border-gray-400 bg-white rounded-[4px] text-base text-[15px] text-gray-800 leading-tight focus:outline-none focus:shadow-none" type="button">
                    <span>{
                        selectedDropdownEntry ?
                        dropdownDataList.map(dropdownItem => { return (selectedDropdownEntry === dropdownItem.fieldValue ? dropdownItem.fieldCode : '') })
                        : t(dropDownPlaceHolder)}
                    </span>
                    <svg className={`w-3 h-2 ml-3 transform ${openDropdown === fieldName ? 'rotate-180' : 'rotate-0'} text-gray-500 text-sm`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                {openDropdown === fieldName && (
                    <div className="absolute z-50 top-10 left-0  w-full">
                        <div className="z-10 border border-gray-400 scroll-auto bg-white rounded-md shadow-lg w-full dark:bg-gray-700 cursor-pointer">
                            <div className="max-h-40 overflow-y-auto">
                                {dropdownDataList.map((dropdownItem, index) => {
                                    return (
                                        <div key={index}>
                                            {dropdownItem.fieldCode !== "" && (
                                                <button
                                                    className={`block w-full px-4 py-1 text-left text-base text-blue-950
                                                        ${selectedDropdownEntry === dropdownItem.fieldCode ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                                                    onClick={() => changeDropdownSelection(dropdownItem.fieldValue)}>
                                                    {dropdownItem.fieldCode}
                                                </button>
                                            )}
                                            <div className="border-gray-200 border-t mx-2"></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropdownComponent;