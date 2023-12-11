import LoggedInForm from './LoggedInForm';
import ShippingForm from './ShippingForm';

const FormComponent = ({ isLoggedIn, setIsSelected, isSelected }) => {
    return (
        isLoggedIn 
            ? <LoggedInForm setIsSelected={setIsSelected} isSelected={isSelected} />
            : <ShippingForm setIsSelected={setIsSelected} isSelected={isSelected} />
    );
};

export default FormComponent;


