import { useContext, useState } from 'react';
import classes from './Filter.module.css';
import { DropdownOptionsContext } from '../context/DropdownOptionsContext';
import DropdownGroup from '../UI/DropdownGroup';
import InputGroup from '../UI/InputGroup';
import { FiltersContext } from '../context/FiltersContext';
import { LABEL_DATA } from '../translations/global';
import { LanguageContext } from '../context/LanguageContext';

export default function Filter() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { options } = useContext(DropdownOptionsContext);
    const { handleFilterChange, clearFilters, filters } = useContext(FiltersContext);
    const { language } = useContext(LanguageContext);

    console.log(filters);

    return <div className={classes.container}>
        <button className={classes.filterBtn} onClick={() => setIsFilterOpen(!isFilterOpen)}>
            {LABEL_DATA.filter.btnLabel[language]}
        </button>
        {isFilterOpen && <div className={classes.filters}>
            <div>
                <p className={classes.label}>{LABEL_DATA.filter.filtersLabel[language]}</p>
                <DropdownGroup
                    containerClass={classes.inputGroup}
                    label={LABEL_DATA.filter.directorLabel[language]}
                    name="director"
                    onChange={handleFilterChange}
                    value={filters.director}
                    values={options.directors}
                />
                <DropdownGroup
                    containerClass={classes.inputGroup}
                    label={LABEL_DATA.filter.releaseYearLabel[language]}
                    name="year"
                    onChange={handleFilterChange}
                    value={filters.year}
                    values={options.years} />
            </div>
            <div>
                <p className={classes.label}>{LABEL_DATA.filter.sortLabel[language]}</p>
                <InputGroup
                    containerClass={classes.inputGroup}
                    inputClass={classes.radioBtn}
                    label={LABEL_DATA.filter.titleLabel[language]}
                    value="title"
                    checked={filters.sort === "title"}
                    onChange={handleFilterChange} />
                <InputGroup
                    containerClass={classes.inputGroup}
                    inputClass={classes.radioBtn}
                    label={LABEL_DATA.filter.releaseDateLabel[language]}
                    value="releaseDate"
                    checked={filters.sort === "releaseDate"}
                    onChange={handleFilterChange} />
            </div>
            <button className={classes.btn} onClick={() => clearFilters()}>Clear Filters</button>
        </div>}
    </div>
}