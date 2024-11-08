import '../assets/style.css'

const CountryInput = ({ fetchData }) => {
    const handleFetch = () => {
        fetchData();
    };

    return (
        <div className='Container'>
            <input
                id="countryInput"
                label="Enter country name"
            />
            <button type='button' id='outputDisplay' onClick={handleFetch}>
                Fetch Data
            </button>
        </div>
    );
};

export default CountryInput;
